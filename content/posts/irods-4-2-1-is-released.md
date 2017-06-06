Title: iRODS 4.2.1 is released
Date: 2017-06-08 13:20
Author: Terrell Russell
Slug: irods-4-2-1-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.2.1.

This is largely a bugfix release which addresses many small oversights in the
4.2.0 release last November.

In addition, this release includes support for the Python rule engine plugin
(to be released later this week).  The Python rule engine plugin will require
upgrading to 4.2.1.

This release consists of [108 commits from 10
contributors](https://github.com/irods/irods/compare/4.2.0...4.2.1) and
[closed 34 issues marked for 4.2.1](https://github.com/irods/irods/issues?q=milestone%3A4.2.1)
and includes [36 closed issues marked for inclusion in the upcoming 4.1.11](https://github.com/irods/irods/issues?utf8=%E2%9C%93&q=milestone%3A4.1.11%20closed%3A%3C2017-06-08).

This release fixes [CVE-2017-8799](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-8799).

The latest binary packages are available at <https://packages.irods.org/>.

<!--more-->

[The release notes
include](https://docs.irods.org/4.2.1/release_notes/):

> **Features**
>
> - New iCommand, irmdir [\#3117]
>
> - Add packaging support for Ubuntu16 [\#3190] [\#3441]
>
> - Improved logging [\#3502] [\#3535]
>
> - Improved speed of default configuration [\#3526] [\#3549]
>
> - Support for Python rule engine plugin [\#3555]
>
> **Bug Fixes**
>
> - Fix for tickets [\#3299]
>
> - Fix for ilsresc [\#3345]
>
> - Fix for iRODS rule language parser [\#3361]
>
> - Fixes for the rule engine framework [\#3413] [\#3511] [\#3544]
>
> - Fixes for the packaging system [\#3414] [\#3457]
>
> - General support [\#3416] [\#3488]
>
> - Fixes for izonereport [\#3421] [\#3422]
>
> - Fixes for installation and upgrade [\#3472] [\#3538]
>
> - Fix for json parser [\#3484]
>
> - Fix for quotas [\#3508]
>
> - Fix for documentation [\#3527]
>
> - Fixes for tests [\#3534] [\#3539] [\#3545]
>
> - Fix for memory management [\#3546]
>
> - Fix for physically moving a replica [\#3558] [\#3559]
>
> - Fix for long rulebase names [\#3560]
>
> - Fix for bundling more than 256 data objects [\#3571]
>
> **Note:**
>
> Manual specific queries may be added to the catalog to provide insight into large unbalanced replication hierarchies until the inconsistent database behavior is fixed and paging is restored ([\#3570]).
