Title: Native GUI Access to iRODS on a Mac or Linux Desktop
Date: 2015-10-05 16:46
Author: Ilari Korhonen
Slug: native-gui-access-to-irods-on-a-mac-or-linux-desktop
Status: published

Hello Everybody!

I'm writing this guest blog post on the kind request of Dan Bedard of
the iRODS Consortium. Lately I've been working to build a research data
store for a Finnish university and in the course of this work I
developed something that we thought could be of more general use as
well.

As the title of this post suggests, I'm talking about a graphical user
interface for iRODS that runs natively on Mac OS X and Linux. The
software is written in C++ on top of the [Qt
framework](http://www.qt.io) and the native iRODS Client API and thus
runs with full native performance on the supported platforms while
remaining portable. Also, because of the native iRODS interface, the
application supports both SSL and TCP transport modes and all of the
iRODS authentication plugins (e.g. Kerberos).  
<!--more-->

Just a while ago I was able to release my project - codenamed Kanki (*a
rod in Finnish*) by one of my colleagues. The release was made in source
form with the 3-Clause BSD license and the source repository can be
found at [github.com](https://github.com/ilarik/kanki-irodsclient).
Currently it builds against irods-4.1.x on Linux and Mac OS X.

<div class="full_image"><img src="http://i.imgur.com/QfCAoVe.png" /></div>

There are precompiled RPM packages for CentOS/RHEL versions 6 and above
- distributed alongside the source releases at
[GitHub](https://github.com/ilarik/kanki-irodsclient/releases). For
these Linux distributions the installation is very straightforward,
simply install the iRODS RPM packages and the client RPM. I am also
planning to provide prebuilt Ubuntu packages later as well as Mac OS X
packages, which I'm currently working on.

As of yet the client doesn't have its own configuration and credentials
management for iRODS connections and uses the same iRODS environment as
the iRODS icommands. Thus to be able to log in using the client you
should have your iRODS environment configured and credentials in place
by running <span
class="lang:default decode:true crayon-inline">iinit</span> . Later on
there will be proper graphical configuration management of iRODS
connections and credentials.

<div class="full_image"><img src="http://i.imgur.com/xaTRkp3.png" /></div>

Currently the client has most of the basic iRODS functions implemented
as well as a graphical metadata editor with configurable schema
management, which will be developed further as well, to later on include
features such as metadata templates, validators and different kinds of
attribute editors.

Other features which will be implemented as soon possible, include
drag&drop, a search UI with arbitrary criteria, an iRODS ACL editor, a
rule exec interface for submitting user rules to iRODS for execution,
(pre)viewers for data objects and perhaps even visualization tools for
iRODS object relations etc.

### Getting Started

If you happen to use Red Hat Linux or CentOS, the installation is very
easy, as there are prebuilt RPM
[packages](https://github.com/ilarik/kanki-irodsclient/releases). For
other Linux distributions, currently you may have to adjust the build
configuration. I intend to configure and test the build for other
distros as well, starting with Ubuntu since it's already supported by
RENCI prebuilt iRODS packages. For the Linux installation, see README
at [GitHub](https://github.com/ilarik/kanki-irodsclient). An OS X build
can at this moment only be done from the
[develop](https://github.com/ilarik/kanki-irodsclient/tree/develop)
branch.

##### OS X Build Instructions

Now this is still bleeding edge since there are yet no release packages
- those will become available with the next release 1.0.4 shortly. To
build in an OS X environment you have to install some prerequisites
first. Xcode and its command line tools package are assumed to be
installed.

-   Install Homebrew, see [brew.sh](http://brew.sh).

~~~~ 
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install"
~~~~

-   Install some packages from Homebrew.

~~~~ 
$ brew tap homebrew/dupes
$ brew install autoconf automake curl wget libiconv help2man libtool mysql openssl pcre pkg-config shtool
~~~~

-   Install Perl JSON module from CPAN (Comprehensive Perl Archive
    Network).

~~~~ 
$ sudo cpan install JSON
~~~~

-   Install [FUSE for OS X](https://osxfuse.github.io/).

-   Clone my forked irods [repo](https://github.com/ilarik/irods), with
    build patches to build against openssl-1.0 from Homebrew.

~~~~ 
$ git clone https://github.com/ilarik/irods
$ cd irods
$ git submodule init; git submodule update
~~~~

-   Build iRODS icommands.

~~~~ 
$ ./packaging/build.sh --run-in-place icommands
~~~~

-   After the build is complete, update <span
    class="lang:default decode:true crayon-inline">PATH</span>  to
    reflect the installation of iRODS icommands, run the following
    and/or add to your shell, while replacing <span
    class="lang:default decode:true crayon-inline">\$IRODS\_HOME</span> 
    with the absolute path of the irods directory in the previous step.

~~~~ 
export PATH=$PATH:$IRODS_HOME/iRODS/clients/icommands/bin
~~~~

-   Clone the kanki-irodsclient repo from the develop branch.

~~~~ 
git clone https://github.com/ilarik/kanki-irodsclient.git -b develop
~~~~

-   Configure the OS X build with your irods build directory, edit file
    <span
    class="lang:default decode:true crayon-inline">kanki-irodsclient/config/build.pri</span> 
    to include the following, replacing <span
    class="lang:default decode:true crayon-inline">IRODS\_HOME</span> 
    with the absolute path of your irods directory.

~~~~ 
OSX_IRODS_BUILD=IRODS_HOME
OSX_IRODS_BOOST=boost_1_58_0z
OSX_IRODS_JANSSON=jansson-2.7
~~~~

-   Install [Qt 5.5](http://www.qt.io/download/) into a suitable
    location such as <span
    class="lang:default decode:true crayon-inline">\~/Qt</span> .
-   Build the client against the previously built irods distribution and
    Qt, providing the Qt root directory to the build.sh script via the
    -q command line argument. If you installed Qt to <span
    class="lang:default decode:true crayon-inline">\~/Qt</span> , your
    Qt root is <span
    class="lang:default decode:true crayon-inline">\~/Qt/5.5/clang\_64</span> .

~~~~ 
$ cd kanki-irodsclient
$ ./build.sh -q ~/Qt/5.5/clang_64
~~~~

-   After the build script has completed, you should have an
    iRODS.app.pkg package at your build directory. Opening the package
    in Finder installs iRODS.app into /Applications. Run <span
    class="lang:default decode:true crayon-inline">iinit</span> to setup
    an iRODS environment and then you may launch iRODS.app.

~~~~ 
$ iinit
One or more fields in your iRODS environment file (irods_environment.json) are
missing; please enter them.
Enter the host name (DNS) of the server to connect to: [hostname]
Enter the port number: [probably 1247]
Enter your irods user name: [iRODS username]
Enter your irods zone: [zone name]
Those values will be added to your environment file (for use by
other iCommands) if the login succeeds.

Enter your current iRODS password:
~~~~

### Metadata Schema Configuration

The client has a configurable metadata schema which can be defined via a
bundled XML file. The location of the metadata schema XML is

<span
class="lang:default decode:true crayon-inline">/etc/irods/schema.xml</span>

in the Linux version and

<span
class="lang:default decode:true crayon-inline">/Applications/iRODS.app/Contents/Resources/schema.xml</span>

in Mac OS X. The format is pretty straightforward - you configure
namespaces and attribute definitions in the namespaces. I will post
instructions for this later on. An example attribute definition looks
like

~~~~ 
<irods:attribute name="modified" unit="false" editable="true">
  <irods:label>Modification Time</irods:label>
  <irods:displayFilter type="regExp">
     <irods:regExpRule>(\d+)-(\d+)-(\d+).(\d+):(\d+):(\d+)</irods:regExpRule>
     <irods:regExpFilter>\3.\2.\1 \4:\5:\6</irods:regExpFilter>
  </irods:displayFilter>
</irods:attribute>
~~~~

### Any questions?

If you are interested in knowing more or ran into trouble while
installing etc. you may contact me via email and I will try to help.
Also if someone wishes to participate in the development of this
application, please let me know!
