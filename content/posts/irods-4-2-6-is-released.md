Title: iRODS 4.2.6 is released
Date: 2019-06-05 12:00
Author: Terrell Russell
Slug: irods-4-2-6-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.2.6.

This release includes a few bugfixes, most notably a fix for the optimized irodsReServer introduced in 4.2.5.  It also introduces three new libraries (irods::filesystem, irods::iostreams, and irods::query_processor).

This release consists of [31 commits from 7
contributors](https://github.com/irods/irods/compare/4.2.5...4.2.6) and
[closed 27 issues](https://github.com/irods/irods/issues?q=milestone%3A4.2.6).

The latest binary packages for CentOS7, Ubuntu14, and Ubuntu16 are available at <https://packages.irods.org/>.

<!--more-->

[The release notes include](https://docs.irods.org/4.2.6/release_notes/):

> **Enhancements**
>
> - New filesystem library [\#4267]
>
> - New iostreams library [\#4268]
>
> - New query processor library [\#4369]
>
> **Bug Fixes**
>
> - Fix for removing data objects with certain characters [\#3398]
>
> - Marked as wontfix or duplicate [\#3692] [\#4245] [\#4329]
>
> - Marked as resolved/invalid [\#3873] [\#4117] [\#4384] [\#4402] [\#4406]
>
> - Fix for scope, move into namespace [\#3995]
>
> - Fix for writeLine() handling of stdout/stderr [\#4279]
>
> - Fix for rename when post PEP is defined [\#4301]
>
> - Fix for replication when all target resources are local [\#4319]
>
> - Fix for log level in rodsConnect [\#4322]
>
> - Fix for when a resource plugin should not move the physical file [\#4326]
>
> - Fixes for collection iterator [\#4340] [\#4346]
>
> - Fix for irodsReServer exception handling [\#4351]
>
> - Fix for collInp_t serialization into rule languages [\#4370]
>
> - Fix for rule engine plugin framework continuation behavior [\#4383]
>
> - Fix for libxml2 package dependency declaration [\#4390]
>
> - Fix for ifsck for files larger than 2G [\#4391]
>
> - Fix for dynamic pep firing order after parallel transfer [\#4404]


Alongside the core packages included in 4.2.6, the following plugins have been upgraded for compatibility:

- irods-auth-plugin-gsi
- irods-auth-plugin-krb
- irods-microservice-plugins-curl
- irods-resource-plugin-s3
- irods-rule-engine-plugin-audit-amqp
- irods-rule-engine-plugin-python
- irods-rule-engine-plugin-storage-tiering
- irods-rule-engine-plugin-unified-storage-tiering
- irods-rule-engine-plugin-update-collection-mtime
