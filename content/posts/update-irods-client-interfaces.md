Title: Update: iRODS Client Interfaces
Date: 2015-12-04 06:42
Author: Dan Bedard
Slug: update-irods-client-interfaces
Status: published

A lot has changed since [this July 2014
post](https://irods.org/2014/07/irods-user-interfaces/) about iRODS User
Interfaces. I've been meaning to update this for some time. So, without
further ado, I'm going to list as many iRODS client interfaces as I can
think of.
<!--more-->

**Want to test out any of these interfaces?**[Contact
us](https://irods.org/contact/) to schedule a demonstration or to get
connected with the software development team.

### Web-Based Graphical Clients

#### Cloud Browser, MetaLnx, and the iPlant Discovery Environment

One of our founding members, the DICE Group, [has just released **Cloud
Browser**
1.0](https://irods.org/2015/12/dfc-irods-cloud-browser-v1-0-0-released/),
a web-based GUI for managing iRODS collections, transferring files to
and from collections, annotating files and collections with metadata,
and more. Cloud Browser is available from [DICE-UNC on
Github](https://github.com/DICE-UNC/irods-cloud-browser).

<div class="full_image"><img src="{static}/uploads/2015/12/image.png" /></div>

Another of our long-standing members, EMC Corporation, has developed
**[MetaLnx]({static}/uploads/2015/06/Worth-MetaLnx.pdf)**,
a web-based GUI that adds metadata search and administrative
capabilities to iRODS file management. Administrative features include
server health checks, a user account directory, and permission
management. MetaLnx is available for beta testing through EMC. [Contact
us](http://irods.org/contact/) for a demo and to get in touch with EMC.

<div class="full_image"><img src="{static}/uploads/2015/12/MetaLnx-Screenshot.png" /></div>

The **iPlant Discovery Environment** (DE) isn't just an iRODS client:
it's a graphical workspace that allows users to find data and process it
on cloud-based high performance computing (HPC) resources. Through the
NSF-funded DataNet Federation Consortium (DFC), the DICE group is
working with the iPlant Collaborative to package and deploy [new
instances of the Discovery
Environment](https://groups.google.com/d/msg/iROD-Chat/zFgtbYrsEAg/lkDmdwuKAQAJ).
You can get a DE account right now at
<https://de.iplantcollaborative.org>

### Desktop Graphical Clients

#### Kanki and Cyberduck

**Kanki** is a Qt-based iRODS client developed by Ilari Korhonen at
University of Jyväskylä, Finland. One thing we've noticed about Kanki:
it's FAST. That is, it's very responsive. In addition to file and
collection management, it also has advanced features like metadata
templating; metadata search is currently in beta, but already usable.
Ilari has written a [blog
post](https://irods.org/2015/10/native-gui-access-to-irods-on-a-mac-or-linux-desktop/)
for us where he explains how to install Kanki on a Mac. Kanki is an open
source project on [Github](https://github.com/ilarik/kanki-irodsclient).

<div class="full_image"><img src="{static}/uploads/2015/12/kanki-screenshot.png" /></div>

**Cyberduck** is a popular file transfer client that speaks to a host of
systems, including FTP/SFTP, Amazon S3, Swift, and now iRODS. iRODS
support is thanks to the efforts of the iPlant Collaborative, the DICE
Group, and the Cyberduck development team. More information is available
in [a blog post](https://irods.org/2015/09/howtocyberduck/) and from
[Cyberduck.io](https://Cyberduck.io).

### Network File System Interfaces

#### WebDAV and FUSE

Mike Conway from the DICE Group has developed a **WebDAV** client for
iRODS, based on the [Milton.io](http://milton.io) WebDAV framework.
WebDAV support is built in to Windows, MacOSX, and Linux, making it
possible to drag and drop files from your computer into iRODS
collections. Detailed installation instructions are available in [a blog
post](https://irods.org/2015/04/how-to-drag-and-drop-access-to-irods-with-webdav/),
and the project is in
[Github](https://github.com/DICE-UNC/irods-webdav).

The **FUSE** iRODS client lets you mount your iRODS home collection as a
file system on Linux or MacOSX. Details are in
[Github](https://github.com/irods/irods/tree/master/iRODS/clients/fuse),
and the FUSE client is included in the iRODS iCommands distribution,
which can be downloaded at <https://irods.org/download/>.

**[Parrot](http://ccl.cse.nd.edu/software/parrot/)** is a program that
can "wrap" another program, trap file system accesses (reads/writes),
and direct those accesses to iRODS or another protocol. This allows you
to use iRODS as the storage backend for almost any program without
re-writing, re-linking, or re-installing. Parrot is part of the
Cooperative Computing Tools Suite (cctools) from the Cooperative
Computing Lab at Notre Dame. The cctools suite is available on
[Github](https://github.com/cooperative-computing-lab/cctools).

### Command-Line Interfaces

#### iCommands and Baton

**iCommands** are command line executables that ship with iRODS. The
iadmin command is used to perform a number of administrative activities.
Many of the other iCommands are analogs to UNIX command line activities.
iput and iget are used to add and retrieve data to and from collections;
icd is used to navigate collections. imeta and iquest are used to manage
and querying metadata. iCommands are installed automatically on a server
install. We also provide an iCommands package for several Linux flavors
on [the download page](https://irods.org/download/), and instructions
are available for building [iCommands on
MacOSX](http://irods.org/2015/10/native-gui-access-to-irods-on-a-mac-or-linux-desktop/)
(part of the Kanki build instructions). iCommands documentation is at
our documentation site
[docs.irods.org](https://docs.irods.org/master/icommands/user/).

Consortium member the Wellcome Trust Sanger Institute has developed
**Baton**, a set of command line tools and an API made to ease
programmatic access to iRODS. Baton provides detailed file and
collection management with JSON-formatted listings, as well as a
simplified metadata query API, also with JSON-formatted responses. Baton
is open source software, available on
[Github](https://github.com/wtsi-npg/baton).

### APIs

#### R, REST, Java, Python, Qt, C++

We have built an **[iRODS R
Client](https://github.com/irods/r-irodsclient)** based on the REST API.

The **[REST API](https://github.com/DICE-UNC/irods-rest)** from the DICE
Group provides http-based access to iRODS data and metadata. It is based
on Jargon.

**[Jargon](https://github.com/DICE-UNC/jargon)** from the DICE Group is
the Java API for iRODS, which provides extensive access to iRODS
facilities.

The **[iRODS Python API](https://github.com/irods/python-irodsclient)**
provides access to data; user, permission, and storage resource,
management; and metadata queries through Python.

**[QRODS](https://github.com/modcs/qrods)** is a Qt API for iRODS from
the [MoDCS Research Group](http://www.modcs.org/) at Universidade
Federal de Pernambuco, Brazil. QRODS exposes file transfers to/from
iRODS, collection management, and metadata management in iRODS.

The <strong>[iRODS C++
API](https://github.com/irods/irods/tree/master/iRODS/lib/) is built
into iRODS. The [client API test
functions](https://github.com/irods/irods/tree/master/iRODS/lib/test/src)
provide some examples of how to use the C++ API.

**Are there more?** Probably. Keep an eye on [iRODS
Hub](http://irods.org/hub) for fresh interfaces as they become
available. iRODS Hub is the place to link to clients, rules,
dockerfiles, and other software developed for iRODS.

Thank you. I can't wait to see the how this list grows over the next
year.
