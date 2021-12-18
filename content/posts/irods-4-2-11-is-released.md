Title: iRODS 4.2.11 is released
Date: 2021-12-18 01:00
Author: Terrell Russell
Slug: irods-4-2-11-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.2.11.

This release represents a focused effort to fortify the 4.2.x series prior to getting iRODS 4.3.0 out the door next year.  This is highlighted by effort to restrict memory usage by the delay server, reduce leaks in the rule engine plugin framework, specifically when used by the Python rule engine plugin, better ticket support for multiple APIs, and a new iCommand, `itree`.  Edge cases around proxy users and streaming of files to particular resources were better defined and fixed.

Significant build and packaging work helped provide more consistent package names and clearer relationships between the various packages we produce.

Notable bug fixes include correcting voting and sync_to_archive within a compound resource, proper server redirection in a couple cases, and correct behavior when using concurrent connections to the same data object that already has multiple replicas.

Alongside the server, the s3 resource plugin's new 'Glacier' compatibility has been tested with Amazon's S3 and Fujifilm's Object Archive.

This release consists of [120 commits from 9 contributors](https://github.com/irods/irods/compare/4.2.10...4.2.11)
and [closed 124 issues](https://github.com/irods/irods/issues?q=milestone%3A4.2.11).

The latest binary packages for CentOS7, Ubuntu16, and Ubuntu18 are available at <https://packages.irods.org/>.

<!--more-->

[The release notes include](https://docs.irods.org/4.2.11/release_notes/):

> **Enhancements**
> 
>  - Mark package conflicts more completely [#5748]
> 
>  - Add support for proxy user scenarios to the client_connection library [#5754]
> 
>  - Add better itouch error when a non-leaf resource is named [#5771]
> 
>  - Add itree iCommand [#5786] [#5824]
> 
>  - Add library for temporary permissions [#5814]
> 
>  - Add server option to limit memory usage of the delay server [#5822]
> 
>  - Add SNI support for remote iRODS server connections [#5832]
> 
>  - Add configurable hostnames option to run_tests.py [#5842]
> 
>  - Add support for targeting specific replicas while streaming [#5851]
> 
>  - Add better reporting of ignored parameters [#5890]
> 
>  - Add efficient serialization for KeyValPairs [#5906] [#5931]
> 
>  - Add admin flag to ticket API and iticket [#5933]
> 
>  - Add missing serializations [#5950]
> 
>  - Add case-insensitivity to query iterator [#5974]
> 
>  - Add memory alignment for fixed-size buffers [#5982] [#5993] [#6017] [#6019]
> 
> **Bug Fixes**
> 
>  - Fix for honoring inheritance for icp [#3032]
> 
>  - Marked as resolved/invalid [#3194] [#3392] [#4113] [#4123] [#4224] [#4332] [#4333] [#5447] [#5625] [#5770] [#5779] [#5841] [#5880] [#5903] [#5922] [#5936] [#6046]
> 
>  - Removal of deprecated 'register' keyword [#3857]
> 
>  - Fixes for 'ireg --repl' [#4206] [#4622] [#5265]
> 
>  - Disallow remote groups [#4231]
> 
>  - Fixes for imeta [#4458] [#5316]
> 
>  - Marked as question answered [#4590] [#5840] [#5857] [#5867] [#5943] [#5949] [#5979] [#6005] [#6007] [#6041] [#6061]
> 
>  - Fix for creating collection in root collection [#4621]
> 
>  - Fixes for memory leaks [#4649]
> 
>  - Fixes for rebalance [#5110] [#5227]
> 
>  - Fix for GenQuery boundary and ilsresc [#5155]
> 
>  - Fix for iuserinfo [#5467]
> 
>  - Fix for ils with three or more paths [#5502]
> 
>  - Fix for parsing delayed execution frequency [#5503]
> 
>  - Fix for delay queue test [#5526]
> 
>  - Fix for voting and pre-existing replicas [#5548]
> 
>  - Fix for GenQuery column indices [#5566]
> 
>  - Fix for schema_name inconsistency [#5630]
> 
>  - Fix for build options [#5644]
> 
>  - Fix for control plane using hosts_config information [#5700]
> 
>  - Fix for accidental string concatenation [#5721]
> 
>  - Fix for iticket expiration timestamps [#5736]
> 
>  - Fixes for filesystem library [#5750] [#5813]
> 
>  - Document installation information [#5757]
> 
>  - Fix for redirection with apostrophe in data object name [#5759]
> 
>  - Fix for iget leaving object in stale state [#5760]
> 
>  - Fix for redirection determination API endpoints [#5761]
> 
>  - Fix for itouch when connected to catalog consumer [#5774]
> 
>  - Fix for icommands incorrectly requiring irods-server [#5776]
> 
>  - Fix stderr microservice [#5791]
> 
>  - Fix for server-to-server connections [#5838]
> 
>  - Fix for ichksum --verify [#5843]
> 
>  - Fix for userspace tarball of icommands [#5845]
> 
>  - Fix for archive-only retrieval via compound resource [#5847]
> 
>  - Fix for opening multi-replica data object with multiple connections [#5848]
> 
>  - Fix for dstream [#5850]
> 
>  - Fix for irods-externals elasticlient [#5860]
> 
>  - Fix for 'iadmin modresc' [#5861]
> 
>  - Fix for default_transport library [#5862]
> 
>  - Fix for ctime/mtime consistency [#5863]
> 
>  - Fix for key_value_proxy library [#5865]
> 
>  - Fix for passthru context error [#5883]
> 
>  - Fix for copy across federation [#5894]
> 
>  - Fixes for negotiation keys [#5917] [#5923]
> 
>  - Fix for chkAllowedUser() [#5928]
> 
>  - Fix for GenQuery and ticket times [#5929]
> 
>  - Document msiSetACL recursive flag better [#5940]
> 
>  - Fix for crash when not using irods rule language plugin [#5968]
> 
>  - Fixes for delay rule deletion [#5976] [#5977]
> 
>  - Fix for shared memory filename collision [#6006]
> 
>  - Fix for CI build hook installation order [#6011]
> 
>  - Fix for ilsresc -z [#6022]
> 
>  - Fixes for univmss [#6023] [#6030]
> 
>  - Fix for msisync_to_archive [#6029]
> 
>  - Fix for stopping an already stopped server [#6053]
> 
> **Refactors / Packaging / Build**
> 
>  - Consistent package filenames [#3454] [#5937]
> 
>  - Delegate more CMake work to irods-dev(el) package [#5250]
> 
>  - Replace bzero with memset [#5563]
> 
>  - Better separate development dependencies [#5758]
> 
>  - Externalize to_bytes_buffer function [#5768]
> 
>  - Use CMake more consistently [#5827]
> 
>  - Capture path of irods-externals spdlog [#5876] [#5881]
> 
>  - Remove libirods_server from icommands userspace packages [#5885]
> 
>  - Better declare package relationships [#5909] [#5918]
> 
>  - Better package dependencies [#5962] [#5963]


Alongside the core packages included in 4.2.11, the following plugins have been upgraded for compatibility:

- irods-auth-plugin-krb
- irods-microservice-plugins-curl
- irods-resource-plugin-s3
- irods-rule-engine-plugin-audit-amqp
- irods-rule-engine-plugin-document-type
- irods-rule-engine-plugin-elasticsearch
- irods-rule-engine-plugin-indexing
- irods-rule-engine-plugin-logical-quotas
- irods-rule-engine-plugin-metadata-guard
- irods-rule-engine-plugin-python
- irods-rule-engine-plugin-unified-storage-tiering
