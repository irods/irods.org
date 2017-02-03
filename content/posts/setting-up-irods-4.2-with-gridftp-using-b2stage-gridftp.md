Title: Setting Up iRODS 4.2 with GridFTP using B2STAGE-GridFTP
Date: 2017-02-03 11:00
Author: Justin James
Slug: setting-up-irods-4.2-with-gridftp-using-b2stage-gridftp
Status: published

This is an update to our
<a href="{filename}/posts/setting-up-irods-with-gridftp-using-b2stage-gridftp.md">original GridFTP blog post from 2015</a>.

This post expands on the original blog post with information on:

-   Compiling the B2STAGE-GridFTP plugin with iRODS 4.2.
-   Steps to install on CentOS 6 distributions as well Ubuntu distributions.
-   Using a more realistic model with separate server and client certificates.
-   Starting the GridFTP server as a service.
-   Using tools provided by Globus to create certificates.


We will set up an iRODS implemention using the B2STAGE-GridFTP data storage
interface (DSI). This blog entry explains the steps used to set up and test
this implementation. This was set up using the instructions at
<https://github.com/EUDAT-B2STAGE/B2STAGE-GridFTP> with slight modifications
for iRODS 4.2.


Prerequisites
=============

Set up two virtual machines (either CentOS 6 or Ubuntu) on an internal network.  For
reference this will be:

-   server.example.org
-   client.example.org

Make sure each of these servers can resolve the fully qualified domain name of
the other.

Install iRODS 4.2 and development package on server.example.org.  This includes
the following packages:

-   irods-server
-   irods-database-plugin-postgres
-   irods-dev
-   irods-runtime

Follow the instructions at <https://packages.irods.org/> to add the iRODS repository to your package
manager.  Installation instructions can be found at <https://irods.org/download/>

For 4.2, the iRODS external packages need to be installed.  These provide a consistent
build environment (cmake, clang, etc.) to build the GridFTP plugin.

Ubuntu:

~~~~
sudo apt-get install 'irods-externals*'
~~~~

Centos:

~~~~
sudo yum install 'irods-externals*'
~~~~

As an iRODS admin user create the user 'user1' in iRODS.

~~~~
iadmin mkuser user1 rodsuser
~~~~


Installation and Configuration of the Server
============================================

The following instructions should all be performed on server.example.org.


### Installing Packages

Run the following commands on server.example.org to install the packages
that we will be using:

Ubuntu:

~~~~
sudo apt-get install -y globus-gridftp-server-progs globus-simple-ca globus-gass-copy-progs
sudo apt-get install -y libglobus-common-dev libglobus-gridftp-server-dev libglobus-gridmap-callout-error-dev
sudo apt-get install -y libcurl4-openssl-dev
sudo apt-get install -y git
sudo apt-get install -y g++
sudo apt-get install -y dpkg-dev
sudo apt-get install -y cdbs
sudo apt-get install -y globus-gsi-cert-utils-progs
sudo apt-get install -y globus-proxy-utils
~~~~

Centos:

~~~~
sudo yum install -y globus-gridftp-server-progs globus-simple-ca globus-gass-copy-progs
sudo yum install -y globus-common-devel globus-gridftp-server-devel globus-gridmap-callout-error-devel
sudo yum install -y libcurl-devel
sudo yum install -y git
sudo yum install -y g++
sudo yum install -y globus-gsi-cert-utils-progs
sudo yum install -y globus-proxy-utils
~~~~


### Building and Configuring the iRODS GridFTP Data Storage Interface (DSI)

First we need to clone the B2STAGE-GridFTP repository.

~~~~
cd ~
#git clone https://github.com/EUDAT-B2STAGE/B2STAGE-GridFTP
git clone https://github.com/JustinKyleJames/B2STAGE-GridFTP
~~~~

Create an /iRODS_DSI folder that will hold the output files of the build (shared object, configuration files, etc.)

~~~~
sudo mkdir /iRODS_DSI
sudo chmod 777 /iRODS_DSI
~~~~

Set some environment variables that are used by the build process and the PATH so
that the correct version of cmake will be found.

~~~~
export PATH=/opt/irods-externals/cmake3.5.2-0/bin:$PATH
export GLOBUS_LOCATION="/usr"
export IRODS_PATH="/usr"
export DEST_LIB_DIR="/iRODS_DSI"
export DEST_BIN_DIR="/iRODS_DSI"
export DEST_ETC_DIR="/iRODS_DSI"
export IRODS_EXTERNALS_PATH=/opt/irods-externals
~~~~

In Ubuntu you may need to set up C_INCLUDE_PATH so that the globus_config.h header can be found.

~~~~
export C_INCLUDE_PATH=/usr/include/x86_64-linux-gnu/globus
~~~~

If you are building for iRODS 4.2, set the IRODS_42_COMPAT environment variable to true.

~~~~
export IRODS_42_COMPAT=true
~~~~

Now build and install the iRODS DSI:

~~~~
cd B2STAGE-GridFTP
cmake .
make install
~~~~


### Installing a Certificate Authority

Install a certificate authority using grid-ca-create.  We will also
read the hexidecimal ID from the certificate that is created.  This will be
used later.

~~~~
cd ~
sudo grid-ca-create -noint
HEX_ID=$(ls /etc/grid-security/certificates/*.0 | cut -d/ -f5 | cut -d. -f1)
~~~~

Create a package for the certificate authority so that it can be easily installed
on the client.

Ubuntu:

~~~~
sudo grid-ca-package -d -ca ${HEX_ID}
~~~~

Centos:

~~~~
sudo grid-ca-package -r -ca ${HEX_ID}
~~~~


### Creating and Signing the User and Server Certificates

Now that we have a certificate authority, create a user key and certificate signing request
(userkey.pem and usercert_request.pem) and place these in ~/.globus.

~~~~
grid-cert-request -ca ${HEX_ID} -nopw -cn server.example.org -dir ~/.globus -prefix user -commonname user1
~~~~

Sign the certificate with grid-ca-sign.  If you use the default configuration when creating the
certificate authority the password to sign the certificate will be 'globus'.

~~~~
sudo grid-ca-sign -in ~/.globus/usercert_request.pem -out ~/.globus/usercert.pem
~~~~

Create a server key and certificate signing request and place them in /etc/grid-security.

~~~~
sudo grid-cert-request -ca ${HEX_ID} -nopw -cn server.example.org -dir /etc/grid-security -prefix host
~~~~

Sign the server certificate.

~~~~
sudo grid-ca-sign -in /etc/grid-security/hostcert_request.pem -out /etc/grid-security/hostcert.pem
~~~~


### Update Configuration Files

Create a grid-mapfile that matches the subject in the certificate to an iRODS user name.  Place this
grid-mapfile in both /etc/grid-security and ~/.gridmap

~~~~
subject=`openssl x509 -noout -in ~/.globus/usercert.pem -subject | cut -d= -f2- | sed -e 's| *\(.*\)|\1|g'`
echo "\"$subject\" user1" | sudo tee -a /etc/grid-security/grid-mapfile
cp /etc/grid-security/grid-mapfile ~/.gridmap
~~~~

Update /etc/gridftp.conf so that it contains the following lines:

~~~~
$LD_LIBRARY_PATH "$LD_LIBRARY_PATH:/iRODS_DSI"
$irodsConnectAsAdmin "rods"
load_dsi_module iRODS
auth_level 4
port 2811
~~~~

There are a couple of environment variables that will need to be set in the GridFTP service
startup script.

-   HOME - set to the home of the root user which is running the startup script.  This is required
so that the iRODS environment (~root/.irods/irods_environment.json) for the root user can be found.
-   LD_LIBRARY_PATH - so that the DSI libraries we built above can be found at runtime

Edit /etc/init.d/globus-gridftp-server and add the following lines
right after the first line - "#!/bin/bash".

~~~~
export HOME=/root
export LD_LIBRARY_PATH=/iRODS_DSI
~~~~

If you are running this on iRODS 4.1, you will also need to preload the
GridFTP server library alongside the DSI library.  In this case add the following
line right after the two lines added above.

Ubuntu:

~~~~
export LD_PRELOAD="$LD_PRELOAD:/usr/lib/x86_64-linux-gnu/libglobus_gridftp_server.so:/iRODS_DSI/libglobus_gridftp_server_iRODS.so"
~~~~

Centos:

~~~~
export LD_PRELOAD="$LD_PRELOAD:/usr/lib64/libglobus_gridftp_server.so:/iRODS_DSI/libglobus_gridftp_server_iRODS.so"
~~~~


### Connect root to iRODS

Login as the root user and add the following to /root/.irods/irods_environment.json

~~~~
{
    "irods_host": "localhost",
    "irods_zone_name": "tempZone",
    "irods_port": 1247,
    "irods_user_name": "rods",
    "irods_default_resource": "demoResc"
}
~~~~

Run 'iinit' and enter the password for the rods user.  This will allow the GridFTP DSI plugin to access iRODS
using an administrative account.


> Note: If you run iinit without first creating the
> irods\_environment.json file, iRODS will not ask you for the default
> resource and this variable will not be set. This will cause unexpected
> failures. If this is done, edit irods\_environment.json and add in the
> irods\_default\_resource.



### Restart the GridFTP Server and Test

We can now test our setup with a connection from a local client (on server.example.org).

First, restart the GridFTP server.

~~~~
sudo service globus-gridftp-server restart
~~~~

Logout of the root user if you have not already done so.  Make sure you are the user
that has the certificates and key stored in ~/.globus and the mapfile in .gridmap.

Create a random file and test copying this file into iRODS and
getting it out of iRODS.

~~~~
# create a 1 MB test file
dd if=/dev/urandom of=file.dat bs=1000 count=1000

# put the file into irods
globus-url-copy file.dat gsiftp://server.example.org:2811/tempZone/home/user1/

# get the file from irods
globus-url-copy gsiftp://server.example.org:2811/tempZone/home/user1/file.dat file2.dat

# diff the files - these should be the same
diff file.dat file2.dat
~~~~


Installation and Configuration of the Client
============================================

We have tested this using a client that is located on the server.  Now we will set up a
client that is on client.example.org.

The following steps should all be run on client.example.org.

### Install Packages

Run the following commands on client.example.org to install the packages
that we will be using.

Ubuntu:

~~~~
sudo apt-get install -y globus-simple-ca
sudo apt-get install -y globus-gsi-cert-utils-progs
sudo apt-get install -y globus-proxy-utils
sudo apt-get install -y globus-gass-copy-progs
~~~~

Centos:

~~~~
sudo yum install -y globus-simple-ca
sudo yum install -y globus-gsi-cert-utils-progs
sudo yum install -y globus-proxy-utils
sudo yum install -y globus-gass-copy-progs
~~~~


### Install the Certificate Authority Certificates

The client needs to know to trust the certificate authority that
was created on the server.  Get the globus-simple-ca-*.rpm file from
server.example.org and install this package.

Ubuntu:

~~~~
sftp server.example.org:/home/<user>/globus-simple-ca-*.deb
sudo dpkg -i globus-simple-ca-*.deb
~~~~


Centos:

~~~~
sftp server.example.org:/home/<user>/globus-simple-ca-*.rpm
sudo rpm -i globus-simple-ca-*.rpm
~~~~


### Get the Client Certificate

Copy the usercert.pem and userkey.pem from the server and place these in ~/.globus.

~~~~
mkdir ~/.globus
cd ~/.globus
sftp server.example.org:/home/<user>/.globus/*.pem
~~~~


### Test the Transfer From Client to Server

Create a random file and test copying this file into iRODS and
getting it out of iRODS.

~~~~
# create a 1 MB test file
dd if=/dev/urandom of=file.dat bs=1000 count=1000

# put the file into irods
globus-url-copy file.dat gsiftp://server.example.org:2811/tempZone/home/user1/

# get the file from irods
globus-url-copy gsiftp://server.example.org:2811/tempZone/home/user1/file.dat file2.dat

# diff the files - these should be the same
diff file.dat file2.dat
~~~~

