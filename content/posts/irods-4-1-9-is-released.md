Title: iRODS 4.1.9 is released
Date: 2016-07-28 17:33
Author: Terrell Russell
Slug: irods-4-1-9-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.1.9.

This is mainly a bugfix release which addresses federation behavior,
default resource resolution, disk threshold behavior, and other small
issues.

It also includes support for additional functionality provided by the
libs3 plugin.

This release consists of [58 commits from 6
contributors](https://github.com/irods/irods/compare/4.1.8...4.1.9) and
[closed 38
issues](https://github.com/irods/irods/issues?q=milestone%3A4.1.9).

The latest files are available at
<ftp://ftp.renci.org/pub/irods/releases/4.1.9/>.  
<!--more-->

[The release notes
include](https://docs.irods.org/4.1.9/release_notes/):

> **Features**
>
> <li>
> Support for libs3 multipart, V4 auth, and non-Amazon datestamps
> [\#3168] [\#3174] [\#3233]
>
> </li>

> **Bug Fixes**
>
> <li>
> Fix for ACL listings across federation [\#2427]
>
> </li>
> <li>
> Fix for default resource resolution [\#2713] [\#3212] [\#3220]
> [\#3224]
>
> </li>
> <li>
> Fix for ilsresc [\#3054]
>
> </li>
> <li>
> Fix for high\_water\_mark threshold handling [\#3068] [\#3173]
>
> </li>
> <li>
> Fix for init.d to use service account [\#3076]
>
> </li>
> <li>
> Fix for a unixfilesystem plugin error code [\#3080]
>
> </li>
> <li>
> Fix for iget to stdout [\#3097]
>
> </li>
> <li>
> Fix for iput when both force and metadata flags set [\#3114]
>
> </li>
> <li>
> Fix for iget when both resource and numThreads flags set [\#3140]
>
> </li>
> <li>
> Fix for irodsReServer memory leak [\#3146] [\#3167] [\#3171]
>
> </li>
> <li>
> Fix to rebalance operation when encountering single bad replica
> [\#3147]
>
> </li>
> <li>
> Fix for C API freeCollEnt() [\#3151]
>
> </li>
> <li>
> Fix msiDataObjTrim documentation error [\#3152]
>
> </li>
> <li>
> Fix irm orphan catalog entry when using S3 [\#3154]
>
> </li>
> <li>
> Fix buffer size settings on high latency connections [\#3156]
>
> </li>
> <li>
> General support [\#3158] [\#3165]
>
> </li>
> <li>
> Fix for older python [\#3172]
>
> </li>
> <li>
> Fix for recursive self icp [\#3187]
>
> </li>
> <li>
> Fix for full resource iput attempts [\#3195] [\#3226]
>
> </li>
> <li>
> Fix for max connection regression [\#3197]
>
> </li>
> <li>
> Additional izonereport documentation [\#3209]
>
> </li>
> <li>
> Fix for missing LOG\_WARN in rodsLog() [\#3214]
>
> </li>
> <li>
> Fix for connection reuse in federation listing [\#3215]
>
> </li>
> <li>
> Fix for listing the root of a remote zone [\#3218]
>
> </li>
> <li>
> Fix for control plane with newer psutil [\#3219]
>
> </li>
> <li>
> Fix for log level when out of range [\#3225]
>
> </li>

