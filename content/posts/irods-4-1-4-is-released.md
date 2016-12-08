Title: iRODS 4.1.4 is released
Date: 2015-08-05 13:16
Author: Terrell Russell
Slug: irods-4-1-4-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.1.4.

This is a bugfix release which addresses fuse, irsync, and many small
issues.

This release consists of [63 commits from 6
contributors](https://github.com/irods/irods/compare/4.1.3...4.1.4) and
[closed 38
issues](https://github.com/irods/irods/issues?q=milestone%3A4.1.4).

The latest files are available at
<ftp://ftp.renci.org/pub/irods/releases/4.1.4/>

[The release notes
include](https://docs.irods.org/4.1.4/release_notes/):

> **Bug Fixes**
>
> -   Fixes for fuse [\#2401] [\#2509] [\#2783]
> -   Fix for imeta addw bind variable problem [\#2682]
> -   Fix shared memory and mutex file cleanup [\#2751] [\#2752]
> -   Fix for perl warning [\#2760]
> -   Use single quotes for safety/readability [\#2764]
> -   Fix for using fuser (not available on MacOSX) - replace with lsof
>     [\#2772] [\#2775] [\#2794]
> -   Fix irsync recursion [\#2779]
> -   Fix run-in-place detection [\#2781] [\#2784]
> -   Fix unitialized values [\#2782] [\#2788]
> -   Fix memory allocation mismatch [\#2785]
> -   Fix for passthru resource using read=0.0 [\#2789]
> -   Fix for irods-grid when environment properties are missing
>     [\#2792]
> -   Fix for extra NULL character written by msiDataObjWrite [\#2795]
> -   Fix for get\_db\_schema\_version.py stderr [\#2799]
> -   Fix irods\_setup.pl detection [\#2800]
> -   Fix irsync checksums [\#2802] [\#2810]
> -   Fix for ireg with --exclude-path option [\#2804]
> -   Fix control plane shutdown on resource server [\#2807]
> -   Add openssl development package dependency [\#2808]
> -   Add file:// URIs to schema validation [\#2811]
> -   Fix for cross zone icp/iput as different users [\#2813]
> -   Fixes for iphymv [\#2815] [\#2820] [\#2821]
> -   Fix for isysmeta output alignment [\#2819]
> -   Fix for data objects in the root dir (/) [\#2823]
> -   Fix for custom control plane key and port during setup [\#2824]
> -   Fix for checksum calculations on MacOSX [\#2826]
> -   Fix for iget parallel transfer [\#2828]

