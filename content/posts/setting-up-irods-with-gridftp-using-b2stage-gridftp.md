Title: Setting Up iRODS with GridFTP using B2STAGE-GridFTP
Date: 2015-12-16 10:31
Author: Justin James
Slug: setting-up-irods-with-gridftp-using-b2stage-gridftp
Status: published

I was asked to set up a reference implementation of iRODS using the
B2STAGE-GridFTP data storage interface (DSI). This blog entry explains
the steps used to set up and test this implementation. This was set up
using the instructions at
<https://github.com/EUDAT-B2STAGE/B2STAGE-GridFTP>.

Prerequisites
-------------

I set up two Ubuntu 14.04 virtual machines on an internal network. These
are:

-   server.example.org
-   client.example.org

Each of these servers could resolve the fully qualified domain name of
the other.

I also installed iRODS 4.1.7 on server.example.org. This included the
following packages:

-   irods-database-plugin-postgres-1.7-ubuntu14-x86\_64.deb
-   irods-dev-4.1.7-ubuntu14-x86\_64.deb
-   irods-icat-4.1.7-ubuntu14-x86\_64.deb
-   irods-runtime-4.1.7-ubuntu14-x86\_64.deb

Refer to <https://docs.irods.org/master/manual/installation> for iRODS
installation instructions.

Installing Necessary Packages
-----------------------------

Run the following commands on server.example.org to install the packages
that we will be using:

~~~~ 
sudo apt-get install cmake
sudo apt-get install globus-gridftp-server-progs globus-simple-ca globus-gass-copy-progs
sudo apt-get install libglobus-common-dev libglobus-gridftp-server-dev libglobus-gridmap-callout-error-dev
sudo apt-get install libcurl4-openssl-dev
sudo apt-get install git
sudo apt-get install g++
sudo apt-get install dpkg-dev
sudo apt-get install cdbs
~~~~

Run the following on client.example.org:

~~~~ 
sudo apt-get install globus-gass-copy-progs
~~~~

Building and Configuring the iRODS GridFTP Data Storage Interface (DSI)
-----------------------------------------------------------------------

The following instructions should be performed on server.example.org.

First we need to clone the B2STAGE-GridFTP repository.

~~~~ 
cd ~
git clone https://github.com/EUDAT-B2STAGE/B2STAGE-GridFTP
~~~~

Next we will get ready to build the iRODS DSI. We will put the output
files in /iRODS\_DSI.

~~~~ 
sudo mkdir /iRODS_DSI
sudo chmod 777 /iRODS_DSI
cd ~/B2STAGE-GridFTP
cp setup.sh.template setup.sh
~~~~

Edit setup.sh and change the contents to:

~~~~ 
export GLOBUS_LOCATION="/usr"
export IRODS_PATH="/usr"
export DEST_LIB_DIR="/iRODS_DSI"
export DEST_BIN_DIR="/iRODS_DSI"
export DEST_ETC_DIR="/iRODS_DSI"
~~~~

Now build the iRODS DSI:

~~~~ 
source setup.sh
cmake CMakeLists.txt
C_INCLUDE_PATH=/usr/include/x86_64-linux-gnu/globus make install
~~~~

Next we need to edit /etc/gridftp.conf (as root) and add the following
lines to the end.

~~~~ 
$LD_LIBRARY_PATH "$LD_LIBRARY_PATH:/iRODS_DSI"
$irodsConnectAsAdmin "rods"
load_dsi_module iRODS
auth_level 4
~~~~

Now we need to preload the GridFTP server library alongside the DSI
library. Edit (as root) /etc/init.d/globus-gridftp-server and add the
following lines to the start:

~~~~ 
LD_PRELOAD="$LD_PRELOAD:/usr/lib/x86_64-linux-gnu/libglobus_gridftp_server.so:/iRODS_DSI/libglobus_gridftp_server_iRODS.so"
export LD_PRELOAD
~~~~

We also need to change the iRODS default hash scheme. As the user irods,
update /etc/irods/server\_config.json and change the following line:

Old:

~~~~ 
"default_hash_scheme": "SHA256",
~~~~

New:

~~~~ 
 "default_hash_scheme": "MD5",
~~~~

We will be running the GridFTP server in the root account. Add the file
/root/.irods/irods\_environment.json with the following contents:

~~~~ 
 {
"irods_host": "localhost",
"irods_zone_name": "tempZone",
"irods_port": 1247,
"irods_user_name": "rods",
"irods_default_resource": "demoResc"
}
~~~~

Run \`iinit\` and enter the password for the rods user.

> Note: If you run iinit without first creating the
> irods\_environment.json file, iRODS will not ask you for the default
> resource and this variable will not be set. This will cause unexpected
> failures. If this is done, edit irods\_environment.json and add in the
> irods\_default\_resource.

Creating Certificates
---------------------

We are finished with the setup of the iRODS DSI. However, to test this
configuration we need to create certificates on the client and server.

### Create and Installing Certficate Authority using SimpleCA

We need to create a certificate authority to sign are certificates. We
will use SimpleCA for this purpose.

On server.example.org, create the CA by running:

~~~~ 
grid-ca-create
~~~~

Next create an deb package for this certificate authority.

~~~~ 
grid-ca-package -d -cadir ~/.globus/simpleCA
~~~~

Install the package on server.example.org:

~~~~ 
sudo dpkg -i globus-simple-ca-ffffffff_0.0_all.deb
~~~~

*Note: Replace the ffffffff with the hexadecimal digits specific to your
.deb file.*

This will install the certificates into /etc/grid-security/certificates.

Update both
/etc/grid-security/certificates/globus-host-ssl.conf.ffffffff (as root)
and \~/.globus/simpleCA/grid-ca-ssl.conf and set the policy to
"policy\_anything".

Old:

~~~~ 
policy = policy_match
~~~~

New:

~~~~ 
policy = policy_anything
~~~~

Edit /etc/grid-security/certificates/ffffffff.signing\_policy
cond\_subjects to '"\*"':

New:

~~~~ 
cond_subjects globus '"*"'
~~~~

Copy the globus-simple-ca-ffffffff\_0.0\_all.deb file to the client,
install this package on the client, and update the
/etc/grid-security/certificates/ffffffff.signing\_policy cond\_subjects
to '"\*"''.

Copy the certificate authority files to \~/.globus:

~~~~ 
cp /etc/grid-security/certificates/ffffffff.0 ~/.globus/
cp /etc/grid-security/certificates/ffffffff.signing_policy ~/.globus/certificate
~~~~

### Creating and Signing the Certificates

Perform the following commands to create the private key and generate a
certificate signing request:

~~~~ 
# create key
openssl genrsa -des3 -out hostkey.pem 1024

# create certificate
openssl req -new -key hostkey.pem -out cert.csr

# Remove password from key
openssl rsa -in hostkey.pem -out temp.pem
mv temp.pem hostkey.pem
~~~~

Sign the newly created certificate:

~~~~ 
grid-ca-sign -in cert.csr -out hostcert.pem
~~~~

\*Note: Use the password you used when creating the certificate
authority.\*

Install the certificates on server.example.org. The certificates should
be owned by root since the GridFTP server is run by root.

~~~~ 
sudo cp hostkey.pem /etc/grid-security
sudo cp hostcert.pem /etc/grid-security
sudo chmod 600 /etc/grid-security/hostkey.pem
sudo chmod 644 /etc/grid-security/hostcert.pem
~~~~

Copy hostcert.pem and hostkey.pem into the user's home directory on
client.example.org. Run the following commands to install these
certificates and set the permissions:

~~~~ 
mkdir ~/.globus
cp ~/hostkey.pem ~/.globus/hostkey.pem
cp ~/hostcert.pem ~/.globus/hostcert.pem
chmod 600 ~/.globus/hostkey.pem
chmod 644 ~/.globus/hostcert.pem
~~~~

### Mapping the Certificate's Subject Name to iRODS User

Run the following command to get the subject name from the certificate:

~~~~ 
openssl x509 -noout -in hostcert.pem -subject
~~~~

On server.example.org, create the file /etc/grid-security/grid-mapfile
and add the subject mapping to the user irods. The following is an
example of the contents of this file. Replace the part inside the quotes
with the subject name returned from the previous command.

~~~~ 
"/C=US/ST=NC/L=CH/O=irods/CN=server.example.org" rods
~~~~

Running the GridFTP Server
--------------------------

Run the GridFTP server using the following command:

 

~~~~ 
sudo /etc/init.d/globus-gridftp-server restart
~~~~

Testing the GridFTP Connection
------------------------------

On the server, create a 1GB random file:

~~~~ 
 dd if=/dev/urandom of=file.dat bs=1000 count=1000000
~~~~

Put this file into iRODS.

~~~~ 
iput file.dat
~~~~

Now let's test retrieving this file from client.example.org.

~~~~ 
globus-url-copy gsiftp://server.example.org:2811/tempZone/home/rods/file.dat file.dat
~~~~

Remove the file from iRODS and let's try to put it from
client.example.org to iRODS:

~~~~ 
globus-url-copy file.dat gsiftp://server.example.org:2811/tempZone/home/rods/file.dat
~~~~

### Performance Comparison

The following table shows a comparison of getting a putting the 10 MB
file between the client and server using native iRODS transport and
GridFTP.

  ----------- ---------- ----------
  Protocol    Get Time   Put Time
  GridFTP     18.5 s     16 s
  iRODS CLI   23.5 s     16 s
  ----------- ---------- ----------


