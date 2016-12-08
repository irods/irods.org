Title: iRODS Demos - iCAT + iDrop-web + Docker (Part 1)
Date: 2014-07-22 12:58
Author: Dan Bedard
Slug: icat-idrop-docker-part1
Status: published

I often need to set up "sandboxes," self-contained iRODS demonstrations
that allow users to experiment with the system, where it doesn't matter
if the installation breaks. Sandboxes are a great use case for virtual
machines: if the system breaks, you can revert to a clean snapshot of
the machine. For a few reasons that I won't get into here, I had a case
where I needed two sandboxes on the same host. One solution would have
been to instantiate two virtual machines (VMs) from the same snapshot.
However, that's a bit of a heavy weight solution, and since the
underlying host was itself a virtual machine, performance wouldn't have
been very good. Around the time I was working on this problem, my
colleague and I were talking
about [Vagrant](http://www.vagrantup.com/ "Vagrant"), and he told me
about [Docker](http://www.docker.com/ "Docker"), which provides an
interesting solution to my problem:  
<!--more-->  
Docker uses LXC (LinuX Containers) to provide the containment afforded
by a virtual machine without the overhead of running an entire separate
operating system. Docker also integrates the AuFS file system, which
lets you start with a single baseline disk image and record only the
changes executed on that image. The result is a much smaller disk
footprint, when compared to a VM.

**Update:***February 2, 2015: The Docker containers have been updated
since this post was written. See [this new
post](http://irods.org/post/irods-on-docker-update/) for details.*

The only drawback I ran into was how Docker handles background
processes. I don't know if I understand it well enough to explain well,
but Docker seems to store the state of a container after each execution
of a process, and the Docker daemon will only track a single process.
So, if you want to multitask with processes that don't all terminate at
the same time, you have to tell Docker to run a process that oversees
the other processes. In my demo, I use a system called
[Supervisor](http://supervisord.org/ "Supervisor"), but I have since
learned that there are
[other](http://phusion.github.io/baseimage-docker/ "baseimage"),
possibly better, ways to do this.

Nevertheless, I have written a Dockerfile that builds a Docker image
that contains an iCAT server and an iDrop-web server. In my next post,
I'll go over the Dockerfile line by line. But if you want to use it
right now, here's what you need to do (below is written for Ubuntu).
Note, this requires about 1GB of disk space, and I was running it on a
VM with 1GB of RAM.

~~~~ 
sudo apt-get install docker.io ; alias docker='sudo docker.io'
git clone https://github.com/irods/contrib
cd contrib/irods-docker
cp Dockerfile.idrop Dockerfile
docker build -t $USER/idrop-web .
docker run -h idrop-web1 -e "port80=8580" -e "port8443=8543"   
   -e "hostsname=$HOSTNAME" -p 8522:22 -p 8547:1247 -p 8543:8443   
   -p 8580:80 -d $USER/idrop-web
~~~~

 

1.  Install docker (and alias the command line executable, for
    convenience. You may want to put this alias line in your .bashrc
    file).
2.  Clone the irods-docker git repository.
3.  cd to the irods-docker directory.
4.  Copy Dockerfile.idrop to Dockerfile.
5.  Build the docker image and tag it as idrop-web in a repository named
    for your username.
6.  Run the docker image. The command line options, in order, specify:
    -   (-h) a hostname (for the container) of idrop-web1
    -   (-e) several environment variables used to reconfigure idrop-web
        on the fly. (See below.)
    -   (-p) redirect the container's ports (e.g., container port 22
        becomes host port 8522).
    -   (-d) run as a background process

Before starting Tomcat, the Docker container updates
idrop-web-config2.groovy, which specifies the prefix for links within
idrop-web. The update uses environment variables, so the https links
become "\$hostsname:\$port8443" and the http links become
"\$hostsname:\$port80". I define \$hostsname as \$HOSTNAME on the host
machine. For example, if I am hosting the Docker container on
sandbox.irods.org, and if I'm redirecting the container's port 8443 to
8543, then I can access idrop-web at
https://sandbox.irods.org:8543/idrop-web2.

Also note: the SSL keys are auto-generated and don't certify that the
host is authentic. Unless you add certificates to the container, users
will have to acknowledge that the host is not authenticated. In a future
version I will see if I can turn off SSL by default.

Once the container is running, we can test it out. On the host machine,
I open a browser window and go to https://localhost:8543/idrop-web2. I
have to acknowledge a warning...

<div class="full_image"><img src="{filename}/uploads/2014/07/idrop-docker1.png" /></div>

But once I do, I can log in with username and password "rods" to take a
test drive.

<div class="full_image"><img src="{filename}/uploads/2014/07/idrop-docker2.png" /></div>Next
steps would be to install iCommands on the host, change the
administrator password, and create some new users.

In my next post, I will go over the Dockerfile in detail to explain what
the "docker build" command is doing.

 

 
