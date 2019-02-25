Title: iRODS 4.2.5 is released
Date: 2019-02-25 23:00
Author: Terrell Russell
Slug: irods-4-2-5-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.2.5.

This release includes many bugfixes to things found by the community, but also introduces a few new libraries (GenQuery iterator and connection and thread pools) as well as a reimplemented irodsReServer (for delayed rule execution) and improved PEP flow control (via new `_except()` PEPs).

This release consists of [47 commits from 10
contributors](https://github.com/irods/irods/compare/4.2.4...4.2.5) and
[closed 57 issues marked 4.2.5](https://github.com/irods/irods/issues?q=milestone%3A4.2.5)
plus the last [12 closed issues included in 4.1.12](https://github.com/irods/irods/issues?q=milestone%3A4.1.12+closed%3A%3E2018-09-03+).

The latest binary packages for CentOS7, Ubuntu14, and Ubuntu16 are available at <https://packages.irods.org/>.

In addition, a deprecation has been declared for the C API function `isPathSymlink()`.  Use `isPathSymlink_err()` instead.

<!--more-->

[The release notes include](https://docs.irods.org/4.2.5/release_notes/):

> **Enhancements**
>
> - Release of Oracle database plugin for CentOS7 [\#3653]
>
> - irodsReServer reimplementation [\#3782] [\#4250] [\#4251] [\#4266]
>
> - Add `_except()` PEPs [\#4128]
>
> - Add support for manually updating mtime of collections [\#4144]
>
> - Add support for plugins to bundle their own tests [\#4146]
>
> - Add support for policy continuation after a successful PEP [\#4148]
>
> - New genquery iterator library [\#4171] [\#4204] [\#4230] [\#4240] [\#4296]
>
> - New passthrough rule engine plugin [\#4179] [\#4226]
>
> - Add database indices for resc_id and data_is_dirty [\#4181]
>
> - New connection pool library [\#4269] [\#4284]
>
> - New thread pool library [\#4271]
>
> **Bug Fixes**
>
> - Marked as resolved/invalid or duplicate [\#2927] [\#3079] [\#3335] [\#3645] [\#3931] [\#4071] [\#4086] [\#4098] [\#4133] [\#4136] [\#4158] [\#4161] [\#4191] [\#4196] [\#4238]
>
> - Fix for icp across federated zones [\#3547] [\#4053] [\#4057]
>
> - Fix for double-free in main server [\#3776]
>
> - Fix for iput with --purgec and -k on empty file [\#3883]
>
> - Fix for obfuscation code [\#3972]
>
> - Fix for remote microservice [\#3998]
>
> - Fix for irmdir [\#4000]
>
> - Fix for unnecessary username/groupname lookup [\#4040]
>
> - Fix for missing libxml2 dependency [\#4061]
>
> - Fix for postinstall chown [\#4109]
>
> - Fix for `DATA_SIZE_KW` in register replica API [\#4119]
>
> - Fix fallthrough behavior for rule engine plugin framework [\#4147]
>
> - Fix boundary condition for GenQuery results [\#4157]
>
> - Present iRODS Error codes to iRODS rule language [\#4174]
>
> - Fix for irule continuation error [\#4189]
>
> - Fix for rule engine memory leak [\#4197]
>
> - Remove OpenID-specific code from clientLogin [\#4221]
>
> - Document `REBALANCE_ALREADY_ACTIVE_ON_RESOURCE` behavior [\#4254]
>
> - Add missing header file [\#4272]
>
> **Deprecated**
>
> - C API function `isPathSymlink()` marked as deprecated.  Use `isPathSymlink_err()` instead. [\#4005]
>


Alongside the core packages included in 4.2.5, the following plugins have been upgraded for compatibility:

- irods-auth-plugin-gsi
- irods-auth-plugin-krb
- irods-microservice-plugins-curl
- irods-resource-plugin-s3
- irods-rule-engine-plugin-audit-amqp
- irods-rule-engine-plugin-python
- irods-rule-engine-plugin-storage-tiering
- irods-rule-engine-plugin-update-collection-mtime
