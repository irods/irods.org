Title: iRODS 4.2.3 is released
Date: 2018-05-31 17:00
Author: Terrell Russell
Slug: irods-4-2-3-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.2.3.

This is largely a bugfix release, but also adds support for generic and OpenID authentication plugins, larger rulesets, and registration of data objects to non-leaf resources.

This release consists of [122 commits from 17
contributors](https://github.com/irods/irods/compare/4.2.2...4.2.3) and
[closed 76 issues marked for 4.2.3](https://github.com/irods/irods/issues?q=milestone%3A4.2.3)
and an additional [18 closed issues to be included in the upcoming 4.1.12 release](https://github.com/irods/irods/issues?utf8=%E2%9C%93&q=milestone%3A4.1.12%20closed%3A%3C%3D2018-05-31).

The latest binary packages for CentOS7, Ubuntu14, and Ubuntu16 are available at <https://packages.irods.org/>.  Packages have not been released for CentOS6 or Ubuntu12 due to the age of those releases and their own lack of upstream support.

In addition, two deprecations have been declared, one for 'irm -n' and the other for the roundrobin resource plugin.

<!--more-->

[The release notes include](https://docs.irods.org/4.2.3/release_notes/):

> **Features**
>
> - Better system metadata for registration of a new replica [\#3829]
>
> - Add introspection option to irods_control.py [\#3834]
>
> - Add generic auth object and OpenID support [\#3843] [\#3945]
>
> - Add registration to non-leaf resources [\#3844]
>
> - Speedup for large rulesets loading during startup [\#3932]
>
> **Bug Fixes**
>
> - Marked as resolved/invalid or duplicate [\#2797] [\#3237] [\#3318] [\#3504] [\#3664] [\#3825] [\#3846] [\#3847]
>
> - Marked as workaround and question answered [\#2972] [\#3028]
>
> - Fix for dangling symlinks [\#3072]
>
> - Add test for iscan honoring resource hierarchies [\#3081]
>
> - Fix for ichksum truncating printed filenames [\#3085]
>
> - Better documentation [\#3112] [\#3747]
>
> - Allow usernames with "_ts" [\#3170]
>
> - Update libarchive to latest stable release [\#3201] [\#3291]
>
> - Fix for msiCheckAccess honoring ownership of collection via group [\#3309]
>
> - Disallow unsupported option combinations [\#3346] [\#3659] [\#3661] [\#3926]
>
> - Fix for ichksum when dynpep involved [\#3485]
>
> - Fixes for stty and ipasswd inconsistencies [\#3580]
>
> - Fixes for imeta regression [\#3594] [\#3667] [\#3787] [\#3788] [\#3816] [\#3866]
>
> - Fix for iCommand segfault with bad SSL cert [\#3609]
>
> - Fix for trim to use unlink operation [\#3615]
>
> - Fix for memory leak [\#3643]
>
> - Fix for ireg to handle trailing slashes [\#3658]
>
> - Fixes for scanbuild [\#3678] [\#3679] [\#3701] [\#3712] [\#3769]
>
> - Fix intermittent test failures [\#3689] [\#3706]
>
> - Better logging [\#3695] [\#3882]
>
> - Fixes for DATA_ID vs DATA_RESC_HIER since 4.2 [\#3705] [\#3714]
>
> - Fix for possible int overflow [\#3707]
>
> - Fix for remote rule execution [\#3722]
>
> - Fix for msiServerMonPerf location since 4.2 [\#3736]
>
> - Remove unused function prototype [\#3790]
>
> - Fix for ireg -CK without permission [\#3795]
>
> - Fix for imeta qu only querying the first condition [\#3808]
>
> - Fix for silent failure of ireg --repl [\#3828]
>
> - Fix for building with pthread [\#3833]
>
> - Fix for modifying dict while iterating through it [\#3842]
>
> - Fix for delay() in rule engine plugin framework [\#3849]
>
> - Fix silent failure of iadmin rmchildfromresc [\#3859]
>
> - Fix for SQL logging to rodsLog [\#3865]
>
> - Fix for dynpeps called around msiExecCmd() [\#3867]
>
> - Fix for control plane [\#3878] [\#3911]
>
> - Fix segfault in serialization of rule engine parameters [\#3879]
>
> - Fix for irepl honoring resource name [\#3885]
>
> - Fix for missing linked_list header in development package [\#3937]
>
> - Fix for test using RSA key size for PAM [\#3939]
>
> - Fix for rodsMonPerfLog [\#3946]
>
> **Deprecated**
>
> - [\#3451] Use of 'irm -n' marked as deprecated - to be removed in 4.3.0.  Use 'itrim' instead.
>
> - [\#3778] Round robin resource marked as deprecated - to be removed in 4.3.0.  Update a round robin resource to a random resource with the following single-row update to the catalog: `iadmin modresc rrResc type random`


Alongside the core packages included in 4.2.3, the following plugins have been upgraded for compatibility:

- irods-auth-plugin-gsi
- irods-auth-plugin-krb
- irods-microservice-plugins-curl
- irods-resource-plugin-s3
- irods-rule-engine-plugin-audit-amqp
- irods-rule-engine-plugin-python
- irods-rule-engine-plugin-storage-tiering
