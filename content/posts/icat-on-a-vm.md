Title: iRODS Demos: iCAT on a VM
Date: 2014-06-30 09:30
Author: Dan Bedard
Slug: icat-on-a-vm
Status: published

Moving on to setting up an iCAT-enabled resource server on a virtual
machine (VM)...

Setting up iRODS is documented very well in [the iRODS manual, located
on
github](https://github.com/irods/irods/blob/master/manual.rst "the iRODS manual, located on Github").
I'm just going to summarize the steps here, plus I'll include the VM
setup steps.

<!--more-->

We use virtual machines for staging because: 1) you can easily set up a
grid of multiple virtual machine on a single piece of hardware, 2) your
VMs can be single-purpose (you're not sending email from your iCAT
server), and 3) if you make a mistake, snapshotting makes it really easy
to go back to the last-known good configuration.

##### Step 1: Set up a VM environment.

We use [VirtualBox](https://www.virtualbox.org/ "VirtualBox").

##### Step 2: Create a VM.

I usually set up a 64-bit Linux system with 512 MB of RAM and an 8 GB
dynamically allocated virtual drive. I up the video memory to 128 MB to
make the mouse pointer move a bit faster.

On this first install, I just use VirtualBox's NAT for my network
connection. In a future post, I'll explain why I later decided to make
this more complicated.

##### Step 3: Install an OS.

iRODS is supported on CentOS 5, CentOS 6, Ubuntu 10, and Ubuntu 12.
These are platforms that our developers build against in our CI
(continuous integration) environment. I downloaded the [Kubuntu
LiveCD](http://www.kubuntu.org/getkubuntu "Kubuntu LiveCD"), told
VirtualBox to mount this ISO as a drive, and loaded it up.

##### Step 4: Install VirtualBox Guest Additions.

Note, I had to install the build-essentials package ( <span
class="lang:default highlight:0 decode:true crayon-inline">sudo apt-get
install build-essentials</span> )  before this would work.

##### Step 5: Download the iRODS binaries.

From [irods.org](http://irods.org/download/ "irods.org"). I downloaded
the iCAT server .deb and the Postgres plug-in .deb.

##### Step 6: Set up the database.

Before installing the packages, you might as well set up your database
first. For me, it was a matter of running:

~~~~
$ sudo apt-get install postgresql-9.3
...
$ sudo su - postgres
postgres$ psql
psql> CREATE USER irods WITH PASSWORD 'testpassword';
psql> CREATE DATABASE "ICAT";
psql> GRANT ALL PRIVILEGES ON DATABASE "ICAT" TO irods;
psql> \q
postgres$ exit
~~~~

##### Step 7: Follow the manual.

[The
manual](https://github.com/irods/irods/blob/master/manual.rst "the iRODS manual, located on Github") does
a terrific job of explaining the rest. I just followed the
"installation" section, using all the defaults, with localhost for my
database hostname.

##### Step 8: Success!

At this point, you should be able to run:

`$ sudo su - irods irods$ ils`

And it will "just work."

Some things to keep in mind:

-   This process creates users in a few different applications: a Unix
    user (irods), a database user (irods), and an iRODS user (rods).
-   You need to set up a \~/.irods/.ienv file to connect to the grid.
    This file is already set up for the Unix user named irods.

This is a good start... for a limited definition of start. In the coming
days, I'll create a resource server (with a virtual router detour), and
then I'll set up a web client for iRODS. After that, I'll talk about
setting up rules.

 
