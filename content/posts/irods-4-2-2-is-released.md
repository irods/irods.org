Title: iRODS 4.2.2 is released
Date: 2017-11-08 13:20
Author: Terrell Russell
Slug: irods-4-2-2-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.2.2.

This is largely a bugfix release which addresses a few important use cases
for the community and a stronger foundation for new plugins.

This release includes support for the [iRODS Audit (AMQP) rule engine plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp).
The Audit rule engine plugin requires upgrading to 4.2.2.

This release consists of [77 commits from 7
contributors](https://github.com/irods/irods/compare/4.2.1...4.2.2) and
[closed 39 issues marked for 4.2.2](https://github.com/irods/irods/issues?q=milestone%3A4.2.2)
and an additional [56 closed issues included in the recent 4.1.11 release](https://github.com/irods/irods/issues?utf8=%E2%9C%93&q=milestone%3A4.1.11%20closed%3A%3E2017-06-08%20).

The latest binary packages for CentOS6, CentOS7, Ubuntu12, Ubuntu14, and Ubuntu16 are available at <https://packages.irods.org/>.

<!--more-->

[The release notes include](https://docs.irods.org/4.2.2/release_notes/):

> **Features**
>
> - Enable more flexible plugin factory functions [\#3703]
>
> - Generate relocatable RPMs [\#3618]
>
> **Bug Fixes**
>
> - Fixes for memory management [\#3178] [\#3184] [\#3587] [\#3605] [\#3640] [\#3641] [\#3644] [\#3649] [\#3656]
>
> - Questions about REPF, byte range support, and tiny files [\#3431] [\#3471] [\#3521]
>
> - Better documentation [\#3442] [\#3597]
>
> - Fix for REPF writeLine support using expected location [\#3477] [\#3638]
>
> - Fix for too-often expensive replication [\#3525]
>
> - Fix for CMake linker flags [\#3552]
>
> - Fix for logs being written to older logfile [\#3563]
>
> - Fix for rebalance batching behavior [\#3570]
>
> - Fix for type checker in iRODS Rule Language [\#3575] [\#3632]
>
> - Fixes for test harness [\#3577] [\#3579]
>
> - Fix for upgrade process [\#3578]
>
> - Fix for exception handling [\#3596]
>
> - Fix for iadmin modrescdatapaths [\#3598]
>
> - Fixes for imeta output [\#3600] [\#3606]
>
> - Fix for logging when environment file is missing [\#3608]
>
> - Fix for REPF start and stop operations [\#3619]
>
> - Fix for detecting changes to rulefiles [\#3651]
>
> - Fix for ireg and recursive checksums [\#3662]
>
> - Fix for irsync with fully qualified paths [\#3663]
>
> - Fix for logging PAM activity too often [\#3673]
>
> - Fix for unattended setup via json file [\#3704]


Alongside the core packages included in 4.2.2, the following plugins have been upgraded for compatibility:

- irods-auth-plugin-gsi
- irods-auth-plugin-krb
- irods-microservice-plugins-curl
- irods-resource-plugin-hpss
- irods-resource-plugin-s3
- irods-rule-engine-plugin-audit-amqp
- irods-rule-engine-plugin-python

We are planning to publish a full compatibility matrix soon as there are now a number of combinations where server version and plugin version matter.
