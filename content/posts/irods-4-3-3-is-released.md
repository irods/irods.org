Title: iRODS 4.3.3 is released
Date: 2024-08-26 22:00
Author: Terrell Russell
Slug: irods-4-3-3-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.3.3.

This release focuses mostly on adding support for newer compilers, libstdc++, Ubuntu 24.04, and PostgreSQL 15 and newer.

Other notable work includes a fix for a msiServerMonPerf vulnerability and more GenQuery2 readiness before it is promoted to the default query parser in a later release.

Additionally, the package revision and filenames of the plugins have been updated to include the server version they were built against (e.g. irods-rule-engine-plugin-logical-quotas_4.3.3.0-0+4.3.3~jammy_amd64.deb).  Package names and dependencies have not changed.  This semi-decoupling will allow a plugin to be rebuilt for later releases, without having to bump its own version number if no changes have been made to the plugin itself.  This change will affect any local scripts that may be used to install and maintain iRODS installations and deployments.

This release consists of [88 commits from 6 contributors](https://github.com/irods/irods/compare/4.3.2...4.3.3) and [closed 89 issues marked for 4.3.3](https://github.com/irods/irods/issues?q=milestone%3A4.3.3).

The latest binary packages for AlmaLinux8, RockyLinux9, Ubuntu20, Ubuntu22, Ubuntu24, Debian11, and Debian12 are available at <https://packages.irods.org/>.

<!--more-->

[The release notes include](https://docs.irods.org/4.3.3/release_notes/):


> **Enhancements**
>
> - Propagate error codes to exception types [#7155]
>
> - Add support for PostgreSQL 15 [#7382] [#7742] [#7831]
>
> - Add GenQuery2 support for SQL functions in WHERE and ORDER-BY clauses [#7673]
>
> - Add GenQuery2 support for multi-argument SQL functions [#7678]
>
> - Add support for disabling crash signal handlers for debugging [#7750]
>
> - Update log level for ticket setup [#7820]
>
> - Add trace level logging to low-level ODBC code [#7907]
>
>
> **Bug Fixes**
>
> - Marked as resolved/invalid/question [#3455] [#6562] [#6775] [#7123] [#7723] [#7772] [#7788] [#7794] [#7798] [#7799] [#7818] [#7840] [#7872] [#7899] [#7901] [#7910] [#7924] [#7936]
>
> - Fix for temporary rule files persisting too long [#5210]
>
> - Fix for atomic ACLs not considering zone of user [#7408]
>
> - Fix for escaping regular expressions in Python [#7741]
>
> - Fix for segfaults when built against libstdc++ [#7745] [#7747]
>
> - Disable the irodsServerMonPerf script by default [#7760]
>
> - Fix for replication when user has permission only via group [#7816]
>
> - Fix for MySQL 8.x ODBC driver selection [#7844]
>
> - Fix for null pointer handling in msiDataObjChksum [#7859]
>
> - Fix for error message returned by resource administration library [#7877]
>
> - Fix for replica truncate API to return JSON [#7918]
>
>
> **Documentation**
>
> - Improve on() documentation within iRODS Rule Language [#7268]
>
> - Document compatibility with MySQL and MariaDB ODBC connectors [#7495] [#7905]
>
> - Improve documentation for checksum behavior [#7724]
>
> - Update short option documentation for itree json output [#7761]
>
> - Improve documentation for atomic microservices [#7870]
>
> - Update documentation about 'up/down' resource status [#7903]
>
>
> **Refactors / Packaging / Build / Test**
>
> - Improve assertions in test_iget_with_purgec [#5593]
>
> - Fix building with newer compilers [#5795] [#5803] [#5804] [#7729] [#7730] [#7731] [#7732] [#7735] [#7764] [#7766] [#7767] [#7768] [#7769] [#7780] [#7781] [#7808] [#7809]
>
> - CMake updates [#6258] [#7508] [#7736] [#7740]
>
> - Add Ubuntu 24.04 support [#7592]
>
> - Add groupadmin test [#7707]
>
> - Fix existing tests [#7718] [#7721] [#7725] [#7744] [#7754] [#7755] [#7756]
>
> - Update package numbering to semi-decoupled [#7759]
>
> - Enable tests by default more intelligently [#7800] [#7802] [#7803]
>
> - Improve logger timestamp generation time 10x [#7812]
>
> - Refactor GenQuery2 parser internals [#7847]
>
> - Workarounds for CentOS7 EOL [#7865] [#7885]
>
> - Add tests for GenQuery2 python module [#7909]
>
>
> **Deprecated**
>
> - Deprecate trimPrefix() and trimSpaces() [#7704]
>
>
> **Removed**
>
> - Remove icatGlobalsExtern.hpp [#6237]
>
> - Remove Python2 compatibility module six.py [#7743]


Alongside the core packages included in 4.3.3, the following plugins have been updated for compatibility:

- irods-authentication-plugin-pam-interactive
- irods-microservice-plugins-curl
- irods-resource-plugin-s3
- irods-rule-engine-plugin-audit-amqp
- irods-rule-engine-plugin-elasticsearch
- irods-rule-engine-plugin-indexing
- irods-rule-engine-plugin-logical-quotas
- irods-rule-engine-plugin-metadata-guard
- irods-rule-engine-plugin-python
- irods-rule-engine-plugin-unified-storage-tiering

In addition, the following client has been updated for compatibility:

- irods-gridftp-client
