Title: iRODS 4.1.10 is released
Date: 2016-11-04 14:20
Author: Terrell Russell
Slug: irods-4-1-10-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.1.10.

This is a bugfix release which addresses free\_space calculation and
updating, izonereport and irods-grid behavior, dynamic PEP behavior, and
other small issues.

This is a required upgrade from 4.1.9 for multi-server Zones. Bug
[\#3306] prevented multi-server Zones from performing the free\_space
check correctly, as the calculation was executed too early (on the wrong
server). iRODS 4.1.8 is not affected by this bug.

This release consists of [42 commits from 4
contributors](https://github.com/irods/irods/compare/4.1.9...4.1.10) and
[closed 24
issues](https://github.com/irods/irods/issues?q=milestone%3A4.1.10).

The latest files are available at
<ftp://ftp.renci.org/pub/irods/releases/4.1.10/>.  
<!--more-->

[The release notes
include](https://docs.irods.org/4.1.10/release_notes/):

> **Feature**
>
> <li>
> New microservice, static PEPs to update unixfilesystem resource
> free\_space [\#3307] [\#3312]
>
> </li>
> **Note:**  
>  Upgrading to 4.1.10 will not automatically add the two new static
> PEPs  
>  to core.re. To avoid spurious DEBUG messages, add the following two  
>  empty definitions to core.re:
>
> acPostProcForParallelTransferReceived(\*leaf\_resource) {}  
>  acPostProcForDataCopyReceived(\*leaf\_resource) {}
>
> **Note:**This updated feature (along with [\#3306]) changes the
> optional  
>  unixfilesystem context string keyword from 'high\_water\_mark' to
> its  
>  semantic complement 'minimum\_free\_space\_for\_create\_in\_bytes'.
> Using  
>  the deprecated 'high\_water\_mark' or
> 'required\_free\_inodes\_for\_create'  
>  will write a LOG\_NOTICE to the server log.  
>  ([Read
> More](https://docs.irods.org/4.1.10/manual/architecture/#unixfilesystem))

> **Bug Fixes**
>
> <li>
> Fix for microservice parameter limitation [\#3092] [\#3095]
>
> </li>
> <li>
> Fixes for unixfilesystem and free\_space check [\#3247] [\#3305]
> [\#3306] [\#3311] [\#3340]
>
> </li>
> <li>
> Fix for reading past end of buffer [\#3255]
>
> </li>
> <li>
> Better debugging [\#3260] [\#3308] [\#3313] [\#3348] [\#3351]
>
> </li>
> <li>
> Fixes for izonereport [\#3294] [\#3303]
>
> </li>
> <li>
> Fix for irods-grid [\#3301]
>
> </li>
> <li>
> Fix for list() microservice in rule engine [\#3304]
>
> </li>
> <li>
> Fix for dynamic PEP documentation [\#3314]
>
> </li>
> <li>
> Fix for random resource hierarchy logic [\#3315]
>
> </li>
> <li>
> Fix for ilocate whitespace in results [\#3332]
>
> </li>
> <li>
> Fix for delay rule in dynamic PEPs [\#3342]
>
> </li>

