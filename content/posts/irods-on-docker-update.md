Title: iRODS on Docker (Update)
Date: 2015-02-02 10:03
Author: Dan Bedard
Slug: irods-on-docker-update
Status: published

Good news! We've made it a little easier to bring up iRODS using Docker,
whether you need an iCAT server, a server plus iDrop Web 2, or
iCommands.  
<!--more-->

iCommands are new this round; thank you to [Darin
London](http://irods.org/post/icat-idrop-docker-part1/#comment-1678188464)
for the suggestion.

We're on [Docker
Hub](https://registry.hub.docker.com/repos/irods/ "iRODS on Docker Hub")
now. This means that you're only a few commands away from having a basic
iRODS server or client installation ready to use.

(Of course, as before, the source code and build instructions for the
Docker images are available in
[Github](https://github.com/irods/contrib/tree/master/irods-docker "irods-docker source").)

A few notes about usage:

-   The iCAT image exposes port 1247 for iRODS. The iDrop Web 2 image
    also exposes port 80. Typically, you will want to redirect host
    ports to point to these ports on the Docker containers.  
      
-   These images do not include supervisord or sshd. To access a
    terminal use "[docker
    exec](https://docs.docker.com/reference/commandline/cli/#exec "docker exec")"
    e.g., <span class="lang:sh decode:true crayon-inline">docker exec
    -ti [container-id] /bin/bash</span>. Note: You'll need Docker 1.3 or
    above to use "docker exec".  
      
-   iRODS and Postgres passwords are randomly generated at runtime. You
    may optionally specify an iRODS rodsadmin password as a command line
    argument to "docker run".  
      
-   The iDrop Web 2 image uses a script to update the URL of iDrop Web
    links. The URL stub will be of the form
    http://[\$DOCKER\_HOSTNAME]:[\$DOCKER\_PORT80]. You must specify
    these variables on the "docker run" commandline.

Example syntax:

iCAT only (loaded as background process)-

~~~~
docker pull irods/icat:4.0.3
docker run -p [port 1247 redirect]:1247 -d -t irods/icat:4.0.3 [new rodsadmin password]
~~~~

iCAT + iDrop Web 2 (loaded as background process)-

~~~~
docker pull irods/idrop-web2:4.0.3
docker run -p [port 1247 redirect]:1247 -p [port 80 redirect]:80   
 -e DOCKER_PORT80=[port 80 redirect] -e DOCKER_HOSTNAME=[hostname of the host machine]   
 -d -t irods/idrop-web2:4.0.3 [new rodsadmin password]
~~~~

iCommands (loaded as foreground process)-

~~~~
docker pull irods/icommands:4.0.3
docker run -ti irods/icommands:4.0.3
~~~~

Questions? Comment below. Happy Dockering!
