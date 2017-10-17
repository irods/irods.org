Title: iRODS 4.1.11 is released
Date: 2017-10-18 10:00
Author: Terrell Russell
Slug: irods-4-1-11-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.1.11.

This is a bugfix release which addresses checksum and rebalance behavior, continuation for query result sets, maintenance work with ichksum/ifsck/iscan, federation testing, and many other small issues.

In addition, this release fixes [CVE-2017-8799](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-8799).

OpenSUSE13 and POWER8 packages are no longer supported.

This release consists of [83 commits from 9 contributors](https://github.com/irods/irods/compare/4.1.10...4.1.11) and [closed 92 issues](https://github.com/irods/irods/issues?q=milestone%3A4.1.11).

The 4.1.11 packages are available at <ftp://ftp.renci.org/pub/irods/releases/4.1.11/>.
<!--more-->

[The release notes include](https://docs.irods.org/4.1.11/release_notes/):


> ** Feature **
>
> - New recursive rebalance context string for replication resource [\#3672]
>
> ** Bug Fixes **
>
> - Fix memory leaks and corruption [\#2934] [\#3595] [\#3621] [\#3627] [\#3642] [\#3657]
>
> - Improve documentation [\#3008] [\#3409] [\#3432] [\#3448] [\#3491] [\#3495] [\#3514] [\#3516] [\#3542] [\#3550] [\#3556]
>
> - Fixes for iadmin regarding user authentication [\#3104] [\#3620]
>
> - Marked as resolved/invalid/duplicate [\#3222] [\#3285] [\#3319] [\#3341] [\#3374] [\#3468] [\#3496] [\#3586] [\#3588] [\#3628]
>
> - Fix for genQuery processing multiples of 256 rows [\#3262] [\#3405] [\#3465] [\#3489]
>
> - Improved/Fixed logging [\#3411] [\#3450] [\#3498] [\#3593] [\#3626]
>
> - Fix for duplicate identical metadata [\#3434]
>
> - Fix for restricted characters in resource child context string [\#3449]
>
> - Fix for igetwild CVE-2017-8799 [\#3452]
>
> - Fixes for rebalance operations [\#3463] [\#3476] [\#3486] [\#3524] [\#3585] [\#3665] [\#3674]
>
> - Fix for specific queries across federation [\#3466]
>
> - Fixes for ifsck [\#3492] [\#3501] [\#3512]
>
> - Fix for irm across federation [\#3493] [\#3566]
>
> - Fixes for ichksum [\#3499] [\#3536] [\#3537]
>
> - Fixes for quotas [\#3507] [\#3509]
>
> - Fix for long paths [\#3515]
>
> - Fix for ireg [\#3517]
>
> - Fix for hostname resolution [\#3518]
>
> - Fix for ils and multiple arguments [\#3520] [\#3562]
>
> - Fix for PAM passwords [\#3528]
>
> - Fixes for itrim output [\#3531] [\#3554] [\#3589] [\#3590] [\#3591] [\#3633] [\#3635] [\#3639] [\#3669] [\#3670]
>
> - Fixes for unencrypted network traffic [\#3551] [\#3572]
>
> - Fix for tickets [\#3553]
>
> - Marked as wontfix [\#3565] [\#3584]
>
> - Addressed in different repository [\#3567] [\#3613]
>
> - Fix for inaccessible local files [\#3583]
>
> - Build hook for CI [\#3601]
>
> - Fix iRODS Rule Language parser [\#3629] [\#3630] [\#3631]
>
> - Fix iRODS Rule Language error code [\#3636] [\#3637]
>
> - Fix for postinstall.sh script, chown will now de-reference symlinks [\#3677]
>
> - Fix for checking negotiation results [\#3684]

