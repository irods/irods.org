Title: iRODS User Interfaces
Date: 2014-07-09 16:14
Author: Dan Bedard
Slug: irods-user-interfaces
Status: published

**Note:** See
<https://irods.org/2015/12/update-irods-client-interfaces/> for the
December 2015 update to this post.

There's a lot to iRODS, and we will admit that the documentation is a
work in progress (but it *is* in progress. I'll post some details
soon.). Consequently, I get a lot of questions about iRODS capabilities.
Today I'm going to talk about one in particular: "How will my users
access iRODS?" In other words, what client will they use?

The answer is, "It depends." The core iRODS package [that we installed
last
week](http://irods.org/post/icat-on-a-vm/ "iRODS Demos: iCAT on a VM")
includes iCommands, which comprise the most basic iRODS client. These
are command line executables, and many of them are based on POSIX-style
command line utilities. There are iput and iget for adding and
retrieving data to and from a collection. There are imeta and iquest for
adding and querying metadata. And there are about 50 additional
iCommands that cover capabilities from administering resources and users
to executing rules on the fly. At the moment, the best reference for
iCommands is [the
wiki](http://wiki.irods.org/index.php/icommands "iRODS wiki").

Several additional client options exist:

<!--more-->

-   The [iRODS FUSE
    implementation](https://github.com/irods/irods/tree/master/iRODS/clients/fuse)
    is included in the iCommands package. The FUSE implementation makes
    an iRODS collection mount on a Unix-based system as though the
    collection was a local or NFS-hosted file system.
-   [Parrot](http://ccl.cse.nd.edu/software/parrot/ "Parrot") allows
    local programs to process files in an iRODS collection as if the
    collection was a local directory. This is similar to the FUSE
    implementation, but with reports of better performance. Note: the
    pre-compiled binaries work. However, Parrot will not compile against
    iRODS 4.0 yet. Until this is fixed, Parrot can be compiled against
    the
    [iRODS-legacy](https://github.com/irods/irods-legacy "irods-legacy repository")
    repository
-   [iDrop](https://github.com/DICE-UNC/idrop "iDrop github") is a
    graphical client with
    [desktop](https://github.com/DICE-UNC/idrop/wiki/iDrop-Installers "iDROP Desktop Clients")
    and
    [web-based](https://github.com/DICE-UNC/idrop/wiki/Installing-iDROP-Web "iDROP-web")
    flavors. iDrop is maintained by the DICE group, which originated
    iRODS (more about DICE and and iDrop-web demo in future posts).

<div class="full_image"><img src="{filename}/uploads/2014/07/idropscreenshot.png" /></div>

Finally, many advanced sites choose to implement their own clients. The
iRODS core code provides a C++ API; DICE maintains a Java API called
[Jargon](https://github.com/DICE-UNC/jargon "jargon"). There are
additional APIs built on top of these, which will be covered in a future
post.
