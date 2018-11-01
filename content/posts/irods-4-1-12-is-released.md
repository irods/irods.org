Title: iRODS 4.1.12 is released
Date: 2018-11-01 18:00
Author: Terrell Russell
Slug: irods-4-1-12-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.1.12.

This is mainly a bugfix release which addresses various replication and iscan/ifsck issues and provides additional debugging and visibility tooling for administrators.

This release will be the last in the 4.1 series.  The 4-1-stable branch is now EOL.

CentOS6 packages are no longer supported (Our test framework requires Python 2.7+).

This release consists of [39 commits from 3 contributors](https://github.com/irods/irods/compare/4.1.11...4.1.12) and [closed 36 issues](https://github.com/irods/irods/issues?q=milestone%3A4.1.12).

The 4.1.12 packages are available at <https://files.renci.org/pub/irods/releases/4.1.12/>.
<!--more-->

[The release notes include](https://docs.irods.org/4.1.12/release_notes/):


> ** Enhancements **
>
> - Add ichksum admin mode [\#3265]
>
> - Add retry capability to replication resource [\#3436] [\#3746]
>
> - Add visibility for active rebalance operations [\#3683]
>
> - Add enhanced_logging=1 option to server_config.json (4.1-only) [\#3927]
>
> ** Bug Fixes **
>
> - Fix iscan exit code [\#3256]
>
> - Marked as resolved/invalid [\#3317] [\#3719] [\#3773] [\#3789] [\#3832] [\#4106] [\#4143]
>
> - Fix iscan for data in resource hierarchies [\#3418] [\#3419]
>
> - Fix ifsck for data in resource hierarchies [\#3503] [\#4107]
>
> - Fix rebalance operation to avoid data arriving after invocation [\#3665]
>
> - Fix iscan to report missing zero-length files [\#3681]
>
> - Fix MySQL case errors in group queries [\#3717]
>
> - Marked as wontfix [\#3759]
>
> - Fix uninitialized variables in datetimef() rule [\#3767]
>
> - Documentation for decommissioning a resource [\#3821]
>
> - Add testing for bad/corrupt file systems [\#3854]
>
> - Fix database statement handling [\#3862] [\#4105]
>
> - Fix data placement logic with replication resources [\#3904] [\#3909]
>
> - Fix behavior in presence of root directory (/) used a vault path [\#3928]
>
> - Fix icommands to report to ips correctly [\#3991]
>
> - Fix iscan to page correctly when missing files detected [\#4029]
>
> - Fix to only trigger replication when data changes [\#4085] [\#4099] [\#4110]
>
> - Fix zone detection for federated clients [\#4100]
