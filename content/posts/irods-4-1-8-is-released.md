Title: iRODS 4.1.8 is released
Date: 2016-02-22 09:17
Author: Terrell Russell
Slug: irods-4-1-8-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.1.8.

This is mainly a bugfix release which addresses SSL and authentication,
syncing and federation behavior, Oracle detection, and other small
issues.

It also includes a new 'high water mark' capability for the
unixfilesystem resource plugin allowing an administrator to protect the
resource from a 'disk full' event.

This release consists of [108 commits from 5
contributors](https://github.com/irods/irods/compare/4.1.7...4.1.8) and
[closed 60
issues](https://github.com/irods/irods/issues?q=milestone%3A4.1.8).

The latest files are available at
<ftp://ftp.renci.org/pub/irods/releases/4.1.8/>.  
<!--more-->

[The release notes
include](https://docs.irods.org/4.1.8/release_notes/):

> **Features**
>
> <li>
> Added High Water Mark for unixfilesystem resources [\#2981]
>
> </li>
> <li>
> Include msisync\_to\_archive from contrib repository [\#2962] [\#2963]
>
> </li>

> **Bug Fixes**
>
> <li>
> Fixes for Jargon tests [\#2323] [\#2341] [\#2694] [\#2878]
>
> </li>
> <li>
> Fix for SSL configuration settings [\#2564]
>
> </li>
> <li>
> Fixes for checking error codes properly [\#2803] [\#2997] [\#2998]
>
> </li>
> <li>
> Update scenario for when to skip schema validation [\#2812]
>
> </li>
> <li>
> Fix for new replica honoring targeted resource [\#2847]
>
> </li>
> <li>
> Update to Kerberos documentation [\#2850]
>
> </li>
> <li>
> Fix for PAM auth output [\#2900]
>
> </li>
> <li>
> Fix for included files in zone report [\#2926]
>
> </li>
> <li>
> Fix for lsof hanging on NFS mounts [\#2964]
>
> </li>
> <li>
> Fixes for run-in-place upgrades [\#2965] [\#2968] [\#2970] [\#2971]
> [\#2987]
>
> </li>
> <li>
> Fixes to JSON documentation [\#2973] [\#3015] [\#3020] [\#3021]
>
> </li>
> <li>
> Fixes for upgrade documentation [\#2975] [\#2982] [\#2989] [\#2991]
> [\#2994]
>
> </li>
> <li>
> Fixes for msiDataObjRsync and msiCollRsync [\#2976]
>
> </li>
> <li>
> Fix for msiDataObjUnlink and unreg keyword [\#2983]
>
> </li>
> <li>
> Fix for irodsctl schema connection warnings [\#2984]
>
> </li>
> <li>
> Fix for replication by admin for another user [\#2988]
>
> </li>
> <li>
> Fix and test for federation rsync [\#2993] [\#3016]
>
> </li>
> <li>
> Fix for iphymv by admin for another user [\#2995]
>
> </li>
> <li>
> Fix for default numThreads [\#2996]
>
> </li>
> <li>
> Fixes for federation listings [\#3002] [\#3013] [\#3055]
>
> </li>
> <li>
> Fix for resource server setup warning [\#3003]
>
> </li>
> <li>
> Fixes for resource reliability [\#3004] [\#3005]
>
> </li>
> <li>
> Fixes for C clients [\#3006] [\#3009]
>
> </li>
> <li>
> Fixes for OSX 10.11 iCommands [\#3011]
>
> </li>
> <li>
> Fix for rebalance operation [\#3022]
>
> </li>
> <li>
> Fix to restore session variables [\#3024]
>
> </li>
> <li>
> Add missing rule engine functionality, parseMspForDouble [\#3033]
>
> </li>
> <li>
> Fix for database plugin upgrade output [\#3034]
>
> </li>
> <li>
> Fix for Oracle detection [\#3038] [\#3047]
>
> </li>
> <li>
> Fix for quotas to use resource hierarchies [\#3044] [\#3048]
>
> </li>
> <li>
> Fix for XML response string [\#3050] [\#3051]
>
> </li>
> <li>
> Fix for complex hierarchy edge case [\#3056]
>
> </li>

