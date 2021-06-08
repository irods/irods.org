Title: iRODS 4.2.9 is released
Date: 2021-06-07 23:30
Author: Terrell Russell
Slug: irods-4-2-9-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.2.9.

This release represents the single biggest refactorization of internal iRODS server code since
the run up to 4.2.0 more than five years ago.  The main thrust of this work was to provide logical locking
to data objects to increase concurrency support and eliminate race conditions on in-flight
data transfers.  Supplemental work involved new libraries and APIs for parallel transfer,
replicas, users and groups, metadata, checksums, resources, and catalog operations.

Jobs put into the delay queue can now be prioritized and the jobs' context information has been moved into the
iRODS catalog to provide a path forward for more distributed execution of delayed jobs in future releases.

DNS lookups and hostname caching has also been included which significantly reduces DNS traffic from iRODS.

The iCommands can now be more easily installed into HPC and other non-root environments with supported
userspace packaging.

Notable bugfixes include work on the XML protocol, the continuation functionality in the rule engine plugin
framework, and many improvements for istream, imeta, and iphymv.  Two functions have been marked as deprecated.

This release consists of [338 commits from 8
contributors](https://github.com/irods/irods/compare/4.2.8...4.2.9) and
[closed 314 issues](https://github.com/irods/irods/issues?q=milestone%3A4.2.9).

The latest binary packages for CentOS7, Ubuntu16, and Ubuntu18 are available at <https://packages.irods.org/>.

<!--more-->

[The release notes include](https://docs.irods.org/4.2.9/release_notes/):

> **Enhancements**
>
> - Add rule priority to delayed rules [\#2759]
>
> - Move delay server context into database [\#3049] [\#4428] [\#5153]
>
> - Add tests for partial copying via istream [\#4698]
>
> - Replication to hierarchies [\#3217] [\#4686]
>
> - Refactor iphymv [\#3490] [\#4212] [\#4563] [\#4896] [\#5070] [\#5177] [\#5360] [\#5446] [\#5454]
>
> - New msiTouch, itouch, and touch API plugin [\#4669] [\#4694] [\#5152]
>
> - Refactor checksum API [\#3091] [\#3282] [\#3540] [\#5251] [\#5252] [\#5263] [\#5285] [\#5288] [\#5400] [\#5401] [\#5496]
>
> - Add SHA1, SHA512, ADLER32 hashing functions [\#3800] [\#5392]
>
> - Add logical locking [\#1781] [\#3848] [\#4170] [\#4236] [\#4433] [\#4958] [\#5312] [\#5421] [\#5486] [\#5495] [\#5542]
>
> - Add client support for updating mtime of collections [\#4190]
>
> - New data_object_finalize API plugin [\#2719] [\#4331] [\#5672]
>
> - New parallel transfer library [\#4336] [\#4969] [\#4970]
>
> - Add intermediate replica status [\#4343] [\#4464] [\#5018] [\#5160] [\#5314] [\#5478] [\#5504] [\#5675]
>
> - Add new msiAddRErrorMsg microservice [\#4463]
>
> - Support iget options as directives, not preferences [\#4475]
>
> - Add case-insensitive search to ilocate [\#4761]
>
> - Tie query processor size to the future object [\#4902]
>
> - Unify storage resource voting [\#4941]
>
> - Allow query builder to clear specific query arguments [\#4960]
>
> - Support DATA_SIZE_KW in rsyncUtil and rcDataObjPut [\#4987]
>
> - istream can now target resources/replicas and calculate checksums [\#5000]
>
> - New atomic_apply_acl_operations API plugin [\#5001]
>
> - Give proper names to anonymous C types [\#5003]
>
> - New replica_open API plugin [\#5004] [\#5418]
>
> - New replica_close API plugin [\#5005] [\#5039] [\#5195]
>
> - New msi_atomic_apply_acl_operations microservice [\#5006]
>
> - New catalog operations library [\#5011]
>
> - New resource administration library [\#5020]
>
> - Add RESOURCE_SKIP_VAULT_PATH_CHECK_ON_UNLINK resource property [\#5030]
>
> - Add IRODS_QUERY_ENABLE_SERVER_SIDE_API macro [\#5033]
>
> - Add IRODS_FOR_DOXYGEN macro [\#5037]
>
> - Add error() and state() system microservices [\#5043]
>
> - Improved client-side collection iterator performance [\#5049]
>
> - Make connection_proxy objects default constructible [\#5052]
>
> - Add ability for irods::hierarchy_parser to add parent [\#5057]
>
> - Tightened use of filesystem::last_write_time [\#5061]
>
> - Merge update_collection_mtime rule engine plugin into server [\#5063]
>
> - Can now build iCommands as a portable userspace tarball for deployment [\#5082]
>
> - Document the user group administration library [\#5086]
>
> - Add client_connection class [\#5088]
>
> - Add replica library [\#5103] [\#5139] [\#5142] [\#5143] [\#5150] [\#5151] [\#5156] [\#5592]
>
> - Add data_object_proxy and replica_proxy classes [\#5104]
>
> - Streamline filesystem library [\#5118]
>
> - Expose additional columns to GenQuery [\#5132]
>
> - Add registration checking functions to filesystem library [\#5133]
>
> - Add is_special_collection function to filesystem library [\#5134]
>
> - New metadata library [\#5137]
>
> - Serialize additional structures within the Rule Engine [\#5164] [\#5408]
>
> - Optimize building the server for speed [\#5223]
>
> - Add resource_manager overloads for easier error handling [\#5236]
>
> - Delay server, istream, itouch report cleanly to ips [\#5264] [\#5269] [\#5272]
>
> - Migrate from TravisCI to GitHub Actions [\#5302]
>
> - Set FILE_PATH_KW correctly to support decoupled naming in S3 [\#5323]
>
> - Make scripts output more consistent [\#5363]
>
> - Add DNS lookup and hostname caching [\#4911] [\#5404] [\#5406] [\#5557]
>
> - Add replica access table functionality [\#5405] [\#5412]
>
> - Isolate public API of packStruct [\#5425]
>
> - Add two file descriptor microservices [\#5431]
>
> - Clean any S3 shared memory on server startup and shutdown [\#5451]
>
> - Refactor CPP default rule engine plugin for policy composition [\#5469] [\#5515]
>
> - Remove usage of PHYOPEN_BY_SIZE_KW in server [\#5494]
>
> - Add capability for ils to skip printing contents of a collection [\#5506]
>
> - Add function to check existence of a server property [\#5556]
>
> - Update default install to use max 4 threads [\#5654]
>
> - Update MySQL development default to skip local socket connection [\#5668]
>
> **Bug Fixes**
>
> - Fix packaging issues [\#826] [\#837] [\#3654]
>
> - Document maximum host name length [\#2777]
>
> - Document ils output [\#2840] [\#4305]
>
> - Marked as resolved/invalid or wontfix [\#3073] [\#3074] [\#3077] [\#3287] [\#3288] [\#3837] [\#3880] [\#4887] [\#4948] [\#4981] [\#5029] [\#5045] [\#5075] [\#5078] [\#5097] [\#5188] [\#5235] [\#5274] [\#5307] [\#5351]
> [\#5472] [\#5523] [\#5527]
>
> - Fix for --purgec option and bulk transfer [\#3094]
>
> - Document irm, irmtrash and physical directories [\#3124]
>
> - Fix for missing inline keyword [\#3396]
>
> - Fix for ifsck when it does not have enough permissions [\#3428] [\#5358]
>
> - Fix for CMake IRODS_LINUX_DISTRIBUTION_VERSION_CODENAME [\#3453]
>
> - Fix for replication to resource with existing replica [\#4010]
>
> - Fix for delay() not honoring suffixes [\#4055]
>
> - Fix for iput to non-existent resource [\#4084]
>
> - Fix for packStruct to follow XML encoding standards [\#4132]
>
> - Fix for resource name substring bug during rebalance [\#4135]
>
> - Fix for reading from disk past catalog data size [\#4195]
>
> - Ignore the update flag for replication [\#4462]
>
> - Fix for unchecked variable [\#4550]
>
> - Fix for running setup_irods.py with existing database tables [\#4602]
>
> - Fix for iscan when it does not have enough permissions [\#4613]
>
> - Fix for iquest when 'select' used in an argument string [\#4697] [\#5178]
>
> - Added test for SQL error when writing via ticket [\#4744]
>
> - Fix for unauthorized icp which left unmanaged data in vault [\#4748]
>
> - Fix for zero-length files not triggering replication [\#4779] [\#5193]
>
> - Fix for key_value_proxy::handle API [\#4903] [\#4972]
>
> - Fix for duplicate access to logging file descriptor [\#4943]
>
> - Fix for testing via logging, move to metadata in catalog [\#4949]
>
> - Include correct headers [\#4954]
>
> - Fix for pluggable_rule_engine documentation [\#4967]
>
> - Update streaming to not require the force flag [\#4971]
>
> - Document federation between 3.x and 4.x [\#4974] [\#4978]
>
> - Fixes for istream [\#4986] [\#5107] [\#5112] [\#5187] [\#5189] [\#5279] [\#5294] [\#5306] [\#5422] [\#5477]
>
> - RULE_ENGINE_SKIP_OPERATION should not skip Post-PEPs [\#5002]
>
> - Fix index usage in msiExtractTemplateMDFromBuf [\#5010]
>
> - Fix for missing O_TRUNC flag for puts [\#5012]
>
> - Replaced C header with C++ header [\#5014]
>
> - Add test for except PEP firing across federation [\#5017]
>
> - Fixes for imeta [\#5021] [\#5081] [\#5101] [\#5102] [\#5111] [\#5184] [\#5185] [\#5186] [\#5518] [\#5541]
>
> - Fix for iscan limiting filenames to 256 characters [\#5022]
>
> - Fix for incorrect reuse of session properties [\#5046]
>
> - Fix for missing 'const noexcept' [\#5048]
>
> - Fix for the connection pool [\#5053]
>
> - Fix for duplicate error symbol in rodsErrorTable [\#5056]
>
> - Fix rebalance PEP documentation [\#5062]
>
> - Fix extraneous logging [\#5064]
>
> - Fix for incorrect reuse of logical path on reused connection [\#5072]
>
> - Fix for detecting empty hostnames [\#5085]
>
> - Fix for documentation of client_connection [\#5092]
>
> - Fixes for returning stale column output [\#5099] [\#5115]
>
> - Fixes for irods::filesystem return good replica information [\#5105] [\#5116] [\#5117] [\#5119] 
>
> - Fixes for filesystem function signatures [\#5140]
>
> - Fix for dereferencing std::optional [\#5141]
>
> - Fix for opening replicas of existing data objects [\#5157]
>
> - Fix for izonereport not including resc_id information [\#5159] [\#5170]
>
> - Fix for rsDataObjRepl not returning errors from rsDataObjClose [\#5179]
>
> - Fixes for build system [\#5198] [\#5212] [\#5213] [\#5232] [\#5233] [\#5301] [\#5311] [\#5317] [\#5354]
>
> - Fix for iuserinfo use after free [\#5214]
>
> - Fixes for memory leaks [\#5216] [\#5299] [\#5319] [\#5337] [\#5338] [\#5339] [\#5340] [\#5341] [\#5366] [\#5367] [\#5368] [\#5369] [\#5370] [\#5371] [\#5372] [\#5373] [\#5374] [\#5657]
>
> - Document tcp_keepalive_time usage for long idle connections [\#5218]
>
> - Fix for leftover rulefile pid files [\#5224]
>
> - Fix for iinit [\#5239]
>
> - Fix for updating delayed rule last_exe_time when run by rodsuser [\#5257]
>
> - Fix for setup_irods.py to not start the server, leave it to systemd [\#5275]
>
> - Fix for POSIX semantics in streaming interface [\#5315] [\#5546]
>
> - Add test to confirm reading past end of file is prohibited [\#5352]
>
> - Fix for setup_irods.py consistency [\#5361]
>
> - Fix for vault management during trim or remove [\#5362]
>
> - Fixes for irodsctl verbosity [\#5383] [\#5386]
>
> - Fix for nanodbc packaging [\#5389]
>
> - Fix for extra logging from rule engine plugin framework [\#5413]
>
> - Quiet logs when interacting with nonexistent data objects [\#5419] [\#5444]
>
> - Fix for unchecked input [\#5420]
>
> - Disable Xmsg tests [\#5424]
>
> - Fix for missing force flag when handling bundle files [\#5426]
>
> - Fix for unlimited rError stack size [\#5427]
>
> - Fix for API plugins triggering too much policy [\#5437]
>
> - Fix for irm with force flag [\#5438]
>
> - Fix for renaming local zone [\#5445]
>
> - Fix for msiRenameCollection to only rename collections [\#5452]
>
> - Fix for overwriting within special collections [\#5457]
>
> - Updated HEARTBEAT documentation [\#5484]
>
> - Fix for overwriting large file with smaller file [\#5505]
>
> - Fix for JSON in bytesBuf when using XML protocol [\#5520]
>
> - Clarify iadmin rmresc error message [\#5545]
>
> - Fix for empty pep_database_reg_data_obj_* fields [\#5554]
>
> - Quiet logs for chlSetAVUMetadata [\#5570]
>
> - Fix for put operation being able to create additional replicas [\#5575] [\#5691]
>
> - Fix for put-specific checksum code running against tape [\#5576]
>
> - Fix for failure to move packedRei files during upgrade [\#5577]
>
> - Fix for race condition in testing suite [\#5605]
>
> - Fix for potential use-after-free [\#5613]
>
> - Check for empty attribute and values in atomic_apply_metadata_operations [\#5618]
>
> - Fix for filesystem collection iterator [\#5660] [\#5661]
>
> - Fixes for using Oracle via nanodbc [\#5671] [\#5672] [\#5673] [\#5674]
>
> - Fix for ibun operation in topology [\#5682]
>
> - Fix for missing PEP calls due to compiler optimization [\#5683]
>
> - Fix for MySQL connection information [\#5684]
>
> - Fix for SSL test assuming CS_NEG_DONT_CARE [\#5685]
>
> - Fix for msiRenameLocalZoneCollection [\#5693]
>
> **Deprecated**
>
> - Deprecate msiSetMultiReplPerResc [\#4407]
>
> - Deprecate rxSetRoundRobinContext [\#4964]



Alongside the core packages included in 4.2.9, the following plugins have been upgraded for compatibility:

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
