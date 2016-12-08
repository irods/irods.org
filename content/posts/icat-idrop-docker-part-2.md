Title: iRODS Demos - iCAT + iDrop-web + Docker (Part 2)
Date: 2014-07-23 09:32
Author: Dan Bedard
Slug: icat-idrop-docker-part-2
Status: published

**Note:** [Cloud
Browser](http://irods.org/2015/12/dfc-irods-cloud-browser-v1-0-0-released/)
has superseded all iDrop Web development. While we don't have an updated
Docker container for this yet, please see [this blog
post](http://irods.org/2015/12/dfc-irods-cloud-browser-v1-0-0-released/)
or [Github](https://github.com/DICE-UNC/irods-cloud-browser) for
information to help you get started.

In my previous post, I showed how to get a Docker container with an iCAT
and iDrop-web server up and running. As promised, in this post, I go
through the Dockerfile line-by-line, in case the comments in the file
don't provide quite enough detail. I have omitted blank lines.
Otherwise, this is the entire Dockerfile.idrop as of commit e89b99b615.

<!--more-->

**Update:**<em>February 2, 2015: The Docker containers have been updated
since this post was written. See [this new
post](http://irods.org/post/irods-on-docker-update/) for details.

December 4, 2014: I've updated this post to show the present state of
the github repo, commit ffbf25191c. We are now downloading iRODS version
4.0.3 rather than version 4.0.2, and I've updated the iDrop Web 2
pointers to a provisionally stable location.</em>

~~~~ 
FROM ubuntu:14.04
~~~~

Start with the Ubuntu 14.04 Docker image. This is the definitive minimal
Ubuntu installation, checked in to Docker Hub.

~~~~
MAINTAINER danb renci.org
~~~~

(That's me.)

~~~~
RUN apt-get update
RUN apt-get upgrade -y
~~~~

Bring the Ubuntu package repository up to date.

~~~~
RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8
ENV LC_ALL en_US.UTF-8
~~~~

For some reason, the locale doesn't appear to get set automatically. I'm
not certain if this is a Docker- or an Ubuntu image-related issue.

~~~~
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y openssh-server supervisor postgresql-9.3 wget dpkg sudo libcurl4-gnutls-dev
~~~~

This is the first set of packages I wanted to get installed. These are
necessary for the rest of the Dockerfile, even if the iRODS dependencies
change.

~~~~
RUN mkdir -p /var/run/sshd
~~~~

Set up a working directory for SSHd, the SSH server.

~~~~
#set up supervisor
RUN mkdir -p /var/log/supervisor
ADD ./common/supervisord.conf.etc /etc/supervisor/supervisord.conf
ADD ./common/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
~~~~

Set up Supervisor. Supervisor is a single process that controls all of
the other services we need to run: sshd, tomcat, nginx, and
irods-server. Note I'm adding two supervisord.conf files. The
/etc/supervisor/supervisord.conf specifies general runtime options--at
one point, I thought I needed to allow the iRODS setup script to run
control Supervisor. I may be able to omit this file in the next update.
The /etc/supervisor/conf.d/supervisord.conf specifies particular options
and commands for the services we are setting up.

~~~~
# set up an admin user
RUN useradd admin
RUN echo 'admin:admin' | chpasswd
RUN mkdir /home/admin
RUN chown admin:admin /home/admin
RUN chsh -s /bin/bash admin
~~~~

By default, the only user in the container is root. This block creates
an admin user, which by default has sudo privileges.

~~~~
#install iRODS
RUN wget -P /home/admin ftp://ftp.renci.org/pub/irods/releases/4.0.3/irods-database-plugin-postgres-1.3.deb
RUN wget -P /home/admin ftp://ftp.renci.org/pub/irods/releases/4.0.3/irods-icat-4.0.3-64bit.deb
~~~~

Get the .deb packages from ftp.renci.org.

~~~~
# install package dependencies to prevent Docker build from erring out
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y `dpkg -I /home/admin/irods-icat-4.0.3-64bit.deb | sed -n 's/^ Depends: //p' | sed 's/,//g'`
RUN dpkg -i /home/admin/irods-icat-4.0.3-64bit.deb

RUN DEBIAN_FRONTEND=noninteractive apt-get install -y `dpkg -I /home/admin/irods-database-plugin-postgres-1.3.deb | sed -n 's/^ Depends: //p' | sed 's/,//g'`
RUN dpkg -i /home/admin/irods-database-plugin-postgres-1.3.deb
~~~~

Ordinarily, we can run "dpkg -i" on the iRODS packages and then run
"apt-get -f install" afterward to install any dependencies. However,
"docker build" quits if it encounters any errors. So, we need to
identify the dependencies using "dpkg -I" and install the dependencies
before installing the iRODS packages.

~~~~
# irods needs to be part of admin to execute supervisorctl
RUN usermod -G admin -a irods
~~~~

At one point, I had the iRODS setup\_database.sh script using
supervisorctl to start the irodsserver process. That is no longer the
case, and I believe I can remove these lines now.

~~~~
# set up the iCAT database
RUN service postgresql start &&   
sudo -u postgres createdb -O postgres 'ICAT' -E UTF8 -l en_US.UTF-8 -T template0 &&   
sudo -u postgres psql -U postgres -d postgres -c "CREATE USER irods WITH PASSWORD 'testpassword'" &&   
sudo -u postgres psql -U postgres -d postgres -c 'GRANT ALL PRIVILEGES ON DATABASE "ICAT" TO irods'
~~~~

This block of script sets up the iCAT database. Note that postgresql
gets started and the database writes get executed on the same command
line. They cannot be separated because all running processes are
terminated between command line executions. Note that I had to specify
the character encoding (UTF8), whereas this is typically done by
default.

~~~~
ADD ./icat/server.sh /home/admin/server.sh
RUN chmod a+x /home/admin/server.sh
~~~~

server.sh is the command that supervisor uses to start the iRODS server.
Supervisor can only start interactive (i.e., not daemon) processes, so
we can't use "irodsctl start" to bring up the server.

~~~~
#irods setup_database
ADD ./icat/dbresp /home/admin/dbresp
RUN service postgresql start &&   
sudo su -c "/var/lib/irods/packaging/setup_database.sh
~~~~

Run the iRODS setup\_database.sh script using the "dbresp" file as the
set of inputs to the script.

~~~~
#change irods user's irodsEnv file to point to localhost, since it was configured with a transient Docker container's hostname
RUN sed -i 's/^irodsHost.*/irodsHost localhost/' /var/lib/irods/.irods/.irodsEnv
~~~~

During the "docker build" process, Docker changes the hostname after
each command is executed. When setup\_database.sh ran, it set  
the hostname in irodsEnv. For convenience, we will change this to
localhost. Note that setup\_database.sh also set up the default storage
resource with the same hostname. There is a line in the "runAll.sh"
script below that fixes this.

~~~~
#begin idrop-web installation
#set up tomcat and nginx
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y openjdk-6-jdk tomcat6 nginx
~~~~

Set up Tomcat (application server) and Nginx (http server).

~~~~
RUN mkdir /usr/share/tomcat6/server
RUN mkdir /usr/share/tomcat6/server/classes
RUN mkdir /usr/share/tomcat6/classes
RUN mkdir /usr/share/tomcat6/shared
RUN mkdir /usr/share/tomcat6/shared/classes
~~~~

Tomcat throws warnings if these directories aren't there.

~~~~
ADD ./idrop/tcstart.sh /home/admin/tcstart.sh
RUN chmod a+x /home/admin/tcstart.sh
ADD ./idrop/server.xml /etc/tomcat6/server.xml
~~~~

tcstart.sh sets some environment variables and starts the Tomcat server.
It is used by Supervisor. server.xml has been modified from the default
to set up port 8443 as an https port, using autogenerated keys.

~~~~
# set up fake SSL keys
ADD ./idrop/keyresp /home/admin/keyresp
RUN mkdir /usr/local/ssl
~~~~

RUN /usr/lib/jvm/java-6-openjdk-amd64/bin/keytool -genkey -alias tomcat
-keyalg RSA -keystore /usr/local/ssl/.keystore  
Generate (not quite fake) SSL keys. keyresp contains the responses to
the keytool dialog.

~~~~
#pull idrop-web files
RUN mkdir /etc/idrop-web
ADD ./idrop/idrop-web-config2.groovy /etc/idrop-web/idrop-web-config2.groovy
~~~~

Bring in the idrop-web configuration file.

~~~~
# set defaults for runtime variables that will be loaded into idrop-web-config2.groovy
RUN export port80=8552
RUN export port8443=8551
RUN export hostsname=localhost
~~~~

ADD ./idrop/update\_idwconfig.sh /home/admin/update\_idwconfig.sh  
RUN chmod a+x /home/admin/update\_idwconfig.sh

update\_idwconfig.sh rewrites idrop-web-config2.groovy at runtime to
make idrop-web refer back to the host machine's hostname and the
appropriate re-directed TCP ports. We set default values in case these
variables are not exported on the "docker run" command line.

~~~~
RUN mkdir /usr/share/nginx/html/idrop-release
RUN wget -P /usr/share/nginx/html/idrop-release http://people.renci.org/~danb/FOR_DEMOS/iDrop-Web-2/idrop-lite-2.0.1-SNAPSHOT-jar-with-dependencies.jar
RUN wget -P /usr/share/nginx/html/idrop-release http://people.renci.org/~danb/FOR_DEMOS/iDrop-Web-2/idrop.jnlp
RUN wget -P /var/lib/tomcat6/webapps http://people.renci.org/~danb/FOR_DEMOS/iDrop-Web-2/idrop-web2.war
~~~~

Put the idrop-web files in the container.

~~~~
ADD ./idrop/runAll.sh /home/admin/runAll.sh
RUN chmod a+x /home/admin/runAll.sh
~~~~

Add runAll.sh, which executes run-time configuration and starts the SSH,
Tomcat, Nginx, and iCAT server processes.

~~~~
EXPOSE 22 80 8443 1247
~~~~

Expose the TCP ports for SSH, HTTP, HTTPS, and iRODS.

~~~~
ENTRYPOINT /usr/bin/supervisord "-n"
~~~~

Start Supervisor on "docker run".
