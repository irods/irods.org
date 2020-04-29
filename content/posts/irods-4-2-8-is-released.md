Title: iRODS 4.2.8 is released
Date: 2020-05-22 18:00
Author: Terrell Russell
Slug: irods-4-2-8-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.2.8.

This release includes many enhancements to iRODS internals and the published C API, a few new C++17-enabled libraries
and iCommands (istream and iunreg), and additional flow control within the rule engine plugin framework (REPF).  Notable
bugfixes include multiple edge cases around file names, better upgrade support from 4.1.x, and a performance improvement
for rebalance.  Two microservices and two flag usages have been marked as deprecated.

This release consists of [127 commits from 8
contributors](https://github.com/irods/irods/compare/4.2.7...4.2.8) and
[closed 122 issues](https://github.com/irods/irods/issues?q=milestone%3A4.2.8).

The latest binary packages for CentOS7, Ubuntu16, and Ubuntu18 are available at <https://packages.irods.org/>.

<!--more-->

[The release notes include](https://docs.irods.org/4.2.8/release_notes/):


> **Enhancements**
>
> - Define C API in the client library [\#2307] [\#4768] [\#4832] [\#4835]
>
> - Pass connection information everywhere [\#3557]
>
> - Support for Ubuntu 18 packages [\#3977]
>
> - Separate logical file descriptors from physical file descriptors [\#4270]
>
> - Implement fallthrough in rule engine plugin framework [\#4299]
>
> - Refactor delay server as irods::query processor [\#4430] [\#4616]
>
> - Add API to atomically manipulate multiple AVUs at once [\#4484] [\#4809] [\#4843] [\#4916]
>
> - Add iunreg iCommand [\#4506]
>
> - New key_value_proxy class [\#4585]
>
> - New lifetime_manager class [\#4586] [\#4712] [\#4840]
>
> - New istream iCommand [\#4626]
>
> - Enable C++17 [\#4627]
>
> - New irods::administration user and group libraries [\#4650]
>
> - Add delay scheduling to C++ default rule engine plugin [\#4668]
>
> - Add consistency around irods::filesystem exception handling [\#4726]
>
> - New iadmin modrepl subcommand [\#4740]
>
> - Add support for skipping operations in rule engine plugin framework [\#4752] [\#4800]
>
> - Add '_finally' PEPs to rule engine plugin framework flow control [\#4773]
>
> - Define error when handling POSIX open(O_RDONLY | O_TRUNC) [\#4782]
>
> - New irods::interprocess library for shared memory objects [\#4787]
>
> - Add support for additional database rows to be updated [\#4818]
>
> - New irods::scoped_privileged_client for safe elevation of privilege [\#4819]
>
> - Add boost::asio::thread_pool in irods::thread_pool [\#4824] [\#4833]
>
> - Refactor init_client_api_table() as load_client_api_plugins() [\#4827]
>
> - New irods::scoped_client_identity library for safe user switching [\#4836]
>
> - Never delete, only unregister non-Vault replicas [\#4848]
>
> - New irods::with_durability library [\#4867]
>
> - Add add_metadata function to irods::filesystem [\#4890]
>
> - Refactor and multithread irods::query_processor [\#4891]
>
> - Add atomic bulk metadata operations to irods::filesystem [\#4898] [\#4901]
>
> **Bug Fixes**
>
> - Fix for phymv into resource hierarchy [\#3234]
>
> - Marked as resolved/invalid [\#3235] [\#4225] [\#4309] [\#4663] [\#4823]
>
> - Fix for trailing slash on collections and data objects [\#3892]
>
> - Document migration from static policy enforcement points (PEPs) to Dynamic PEPs [\#4054] [\#4660]
>
> - Document msiModAVUMetadata [\#4185]
>
> - Document smoother migration from 4.1.x resource servers [\#4307] [\#4612]
>
> - Fix for irmtrash removing non-vault replicas [\#4403]
>
> - Fix for orphan file creation on overwrite over the network [\#4410]
>
> - Fix for imv on non-existent target path [\#4414]
>
> - Fix for imeta qu ignoring the -z option [\#4426]
>
> - Document INST_NAME (instance name) for delay execution directive in rules [\#4822] [\#4897]
>
> - Document use of epel-release repository on CentOS [\#4450]
>
> - Fix for irepl in admin mode [\#4479]
>
> - Fix for use of truncation [\#4483] [\#4628] [\#4826]
>
> - Fix for registration of empty data object names [\#4494]
>
> - Fix for unregistration of in-vault data object as rodsuser [\#4510]
>
> - Fix for structFileBundle message to LOG_DEBUG [\#4520]
>
> - Fix for trailing slash with imeta [\#4559]
>
> - Fix for msiRenameCollection [\#4597]
>
> - Fix for documentation location of example rules [\#4625]
>
> - Fix for collection iterator segfault when empty [\#4633]
>
> - Fix for irods::filesystem fallback when specific query ShowCollAcls is undefined [\#4636] [\#4648]
>
> - Fix for missing column mappings for GenQuery [\#4640] [\#4645]
>
> - Fix for irods::filesystem missing user and zone information [\#4641]
>
> - Update dependency to avro 1.9.0 [\#4642]
>
> - Fix for debug message during setup [\#4651]
>
> - Update dependency to JSON 3.7.3 [\#4652]
>
> - Fix for recursive iput [\#4657]
>
> - Document removal of extraneous rule_engine_namespaces on upgrade [\#4661]
>
> - Fix for supporting '_except' after upgrade [\#4662]
>
> - Fix for USER_GROUP_NAME with GenQuery [\#4672] [\#4708]
>
> - Fix for MySQL database plugin use of 'storage_engine' [\#4673]
>
> - Fix for imeta using relative paths [\#4682]
>
> - Fix for passthrough rule engine plugin callback signature [\#4699]
>
> - Fix for native rule engine plugin when returning parser error [\#4700]
>
> - Fix for inconsistent oracle setup input file [\#4706]
>
> - Fixes for existing tests [\#4715] [\#4716] [\#4719] [\#4724] [\#4727] [\#4797]
>
> - Fix for irods::filesystem path prefix check [\#4721]
>
> - Fix for irods::filesystem default_transport [\#4725]
>
> - Fix for inefficient query during rebalance [\#4731]
>
> - Fix for icksum with query iterator [\#4732]
>
> - Fix for irods::filesystem to disallow collection named '..' [\#4750]
>
> - Fix for native rule engine plugin to allow positive error codes [\#4753]
>
> - Fix for irmdir [\#4788]
>
> - Fix for iticket [\#4790]
>
> - Fix segfault with relative path in rsDataObjCopy [\#4796]
>
> - Question about locking/disabling user accounts with policy [\#4804]
>
> - Fix for supporting '_finally' after upgrade [\#4817]
>
> - Support for testing with locally built externals [\#4828]
>
> - Fix for substring bug in isInVault [\#4839]
>
> - Update dependency to fmt 6.1.2 [\#4846] [\#4874]
>
> - Question about RESC_NAME in isysmeta and GenQuery [\#4854]
>
> - Fix for rsDataObjCopy on failure to create destination replica [\#4862]
>
> - Fix for parallel transfer using hosts_config.json [\#4866] [\#4875]
>
> - Document monitoring servers with heartbeat request [\#4882]
>
> - Fix for mysql db plugin build dependency [\#4923]
>
> **Deprecated**
>
> - num_repl keyword in replication resource marked as deprecated - to be removed in 4.3.0 [\#3548]
>
> - msiSysChksumDataObj marked as deprecated - to be removed in 4.3.0.  Use msiDataObjChksum instead. [\#4615]
>
> - msiSysReplDataObj marked as deprecated - to be removed in 4.3.0.  Use msiDataObjRepl instead. [\#4658]
>
> - itrim -N marked as deprecated - to be removed in 4.3.0 [\#4860]



Alongside the core packages included in 4.2.8, the following new plugins have been released:

- irods-rule-engine-plugin-hard-links
- irods-rule-engine-plugin-indexing
- irods-rule-engine-plugin-elasticsearch
- irods-rule-engine-plugin-document-type
- irods-rule-engine-plugin-logical-quotas
- irods-rule-engine-plugin-metadata-guard

Alongside the core packages included in 4.2.8, the following plugins have been upgraded for compatibility:

- irods-auth-plugin-krb
- irods-microservice-plugins-curl
- irods-resource-plugin-s3
- irods-rule-engine-plugin-audit-amqp
- irods-rule-engine-plugin-python
- irods-rule-engine-plugin-unified-storage-tiering
- irods-rule-engine-plugin-update-collection-mtime
