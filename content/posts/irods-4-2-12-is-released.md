Title: iRODS 4.2.12 is released
Date: 2023-05-13 12:00
Author: Terrell Russell
Slug: irods-4-2-12-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.2.12.

This release represents more than a year and a half of work to finalize the 4.2.x series.  4.2.12 will be the last 4.2.x release.

Focused effort was spent on enhancements that leave 4.2.x in a good place for deployments that are not ready to upgrade to 4.3.  These include greater availability of the admin keyword, JSON object and string-manipulation microservices, additional availability of DataObjInfo to rules, and better admin account and password management.

Notable bug fixes include better group and groupadmin support, improved user-input handling, replica status cleanup/locking, database statement management, and improved documentation.

This release consists of [169 commits from 10 contributors](https://github.com/irods/irods/compare/4.2.11...4.2.12)
and [closed 160 issues](https://github.com/irods/irods/issues?q=milestone%3A4.2.12).

The latest binary packages for CentOS7 and Ubuntu18 are available at <https://packages.irods.org/>.

<!--more-->

[The release notes include](https://docs.irods.org/4.2.12/release_notes/):

> **Enhancements**
> 
>  - Add ability for user to select rule engine instance during remote execution [#3925]
> 
>  - Prevent checksum verification in sync-to-archive operations [#6089]
> 
>  - Add support for the admin keyword to msiDataObjChksum [#6118]
> 
>  - Add better support for password management in the user_administration library [#6122]
> 
>  - Add support for the admin keyword to filesystem metadata API functions [#6124]
> 
>  - Add protection from a server's admin account being downgraded [#6128]
> 
>  - Add support for the admin keyword to imeta [#6161] [#6185]
> 
>  - Add more DataObjInfo members to rule engine framework serialization [#6175]
> 
>  - Add support for the admin keyword to filesystem library metadata functions [#6180]
> 
>  - Add delay server memory usage default on upgrade [#6193]
> 
>  - Add support for the admin keyword to atomic apply acl operations [#6198]
> 
>  - Add support for INST_NAME via remote microservice [#6465]
> 
>  - Add safe version of at_scope_exit [#6477]
> 
>  - Add better itree --pattern and --ignore behavior [#6791] [#6806]
> 
>  - Add support for federating all hosts in catalog_provider_hosts [#6827]
> 
>  - Add more details to key_value_proxy error messages [#6882]
> 
>  - Add microservices for JSON object and string manipulation [#6968]
> 
>  - Add process_stash library for managing server memory scratch space [#6999]
> 
> **Bug Fixes**
> 
>  - Fix for core.re cache when updated rapidly [#2279]
> 
>  - Fix for password visibility in debug log with PAM and SSL [#2902]
> 
>  - Fix for over-quota writing [#3062]
> 
>  - Marked as resolved/invalid [#3775] [#5206] [#5837] [#6267] [#6312] [#6402] [#6434] [#6490] 
>  [#6558] [#6711] [#6729] [#6738] [#6739] [#6892] [#6914] [#7019]
>  
>  - Fix for setting shared AVU to empty [#4063]
>  
>  - Fix for correct error message on remote microservice with invalid hostname [#4260]
>  
>  - Fix for inconsistent empty result code from iquest [#4745]
>  
>  - Fix for substring error in resource hostname [#5410] [#6070]
>  
>  - Fix for too small buffer in iinit [#5411]
>  
>  - Fix for MySQL 8 GTID replication error [#5729]
>  
>  - Fix for allowing tickets to write to collections [#5913]
>  
>  - Fix for stacktrace in presence of too long servername [#5916]
>  
>  - Fix for msiDataObjRepl in presence of both verifyChksum keyword and catalog value [#5927]
>  
>  - Marked as question answered [#6004] [#6278]
>  
>  - Fix for cross-federation error message with expired SSL certificate [#6068] [#6365]
>  
>  - Fix for itree with relative path [#6075]
>  
>  - Fix for 64 bytes usernames [#6091]
>  
>  - Fix for iquest results larger than 500 [#6097]
>  
>  - Fix for resource hierarchy keywords for dataObjRepl and dataObjPhymv [#6100]
>  
>  - Fix for iquest when using 'not like' and a resource hierarchy [#6101]
>  
>  - Fix for resc_id serialization within the rule engine framework [#6123]
>  
>  - Fix for management of expiration time for tickets [#6126]
> 
>  - Fix for user_type management of admin's own account [#6127]
> 
>  - Fix for iexit removing a service account's 'session' [#6136]
> 
>  - Fix for leftover intermediate/locked state after failed 'close' operation [#6154]
> 
>  - Fix for imeta support for relative paths [#6174]
> 
>  - Fix for fixed buffer resource unit test [#6176]
> 
>  - Fix for admin remove unused metadata permission check [#6183]
> 
>  - Fix for icommands using the wrong header file [#6184]
> 
>  - Fix for permissions around iadmin lg [#6188]
> 
>  - Fix for group permissions with atomic apply metadata operations [#6189]
> 
>  - Fix for group permissions with atomic apply acl operations [#6191]
> 
>  - Fix for ils -A output for groups [#6200]
> 
>  - Fix for setup with existing non-local service account [#6246]
> 
>  - Fix for scoped_client_identity for federation [#6268]
> 
>  - Fix for rule engine framework fallthrough error handling [#6286]
> 
>  - Fix for client API allowlist documentation [#6295]
> 
>  - Fix for documentation of service account JSON [#6298]
> 
>  - Fix for delay server task race condition [#6323]
> 
>  - Fix for delay server logging a stacktrace for default config values [#6327]
> 
>  - Fix for ifsck and not-registered files [#6367]
> 
>  - Fix for agent stop failure leaving a replica in a locked state [#6378]
> 
>  - Fix for missing database_mod_data_obj_meta PEP [#6385]
> 
>  - Fix for iCommands not disconnecting on authentication failure [#6390]
> 
>  - Fix for irm permissions inconsistency [#6428]
> 
>  - Fix for itouch to return correct error codes [#6434]
> 
>  - Fix for itouch and non-existent data object [#6479]
> 
>  - Fix for ownership of delay rules run by remote users [#6482]
> 
>  - Fix for slow imkdir with Postgres due to subquery [#6495]
> 
>  - Fix for status after stage-to-cache fails [#6502]
> 
>  - Fix for segmentation fault while clearing replica token [#6611]
> 
>  - Fix for closing L1desc entries incorrectly calling PEPs [#6622]
> 
>  - Fix for missing users from iadmin lu [#6624]
> 
>  - Fix for confusing itree errors for missing data objects and collections [#6627]
> 
>  - Fix for rstrcpy not logging source string [#6674]
> 
>  - Fix for iadmin mkzone missing error message with invalid connection information [#6675]
> 
>  - Fix for user_administration library to query information about remote users [#6680]
> 
>  - Fix for throwability with client_api_allowlist::enforce [#6708]
> 
>  - Fix for hostname maximum length [#6727]
> 
>  - Fix for iqstat -a crashing on bad input [#6740]
> 
>  - Fix for buffer overflow with extractVarNames [#6743]
> 
>  - Fix for password too long errors [#6764]
> 
>  - Fix for undefined behavior on std::memcpy() on l1desc object [#6783]
> 
>  - Fix for error code reporting [#6794]
> 
>  - Fix for assumptions about submitted rule text with unspecified rule instance [#6831]
> 
>  - Fix for collection mtime update over federation [#6842]
> 
>  - Fix for touch PEPs firing over federation [#6849]
> 
>  - Fix for potential ODR violations for API number headers [#6868]
> 
>  - Fix for sync-to-archive failure case [#6886]
> 
>  - Fix for igroupadmin setting a new user's password [#6887]
> 
>  - Fix for itouch leaving S3 replica in a locked state [#6880]
> 
>  - Fix for iget not returning specified replica [#6896]
> 
>  - Fix for missing GenQuery || operator with DATA_RESC_HIER [#6912]
> 
>  - Fix for msiAddKeyValToMspStr handling of empty strings [#6918]
> 
>  - Fix for correctly sending stale replica when requested [#6926]
> 
>  - Fix for unused header in itree [#6949]
> 
>  - Fix for native rule engine plugin list objects integer handling [#6991]
> 
>  - Fix for compound resource replica permission behavior [#6997]
> 
>  - Fix for SQL statement leaks (too many concurrent statements) [#7050]
> 
> **Refactors / Packaging / Build / Test / Wontfix**
> 
>  - Document imeta syntax for IN queries [#3062]
> 
>  - Add new build/test options [#6020]
> 
>  - Update documentation for ifsck and multiple paths [#6051] [#6626]
> 
>  - Package unit tests [#6164] [#6219]
> 
>  - Skip auto-generated tests in test_all_rules [#6169]
> 
>  - Rename atomic filesystem API functions [#6171]
> 
>  - Split test_catalog suite [#6181]
> 
>  - Add tests for tickets with rodsusers [#6189]
> 
>  - Update packaging message with CentOS7 [#6192]
> 
>  - Improve debian 'provides' definitions [#6261]
> 
>  - Add test for irepl -U and stale zero byte replicas [#6285]
> 
>  - Skip NREP tests when NREP status is not known [#6344]
> 
>  - Update documentation about replica statuses [#6389]
> 
>  - Wontfix: reLog files missing timestamps [#6402]
> 
>  - Scope error for API constants [#6448]
> 
>  - Update for CentOS7 git version [#6455]
> 
>  - Update build for CMake Version and LINK_LANGUAGE [#6511]
> 
>  - Update documentation for binary package installation [#6559]
> 
>  - Update documentation for psqlodbc log files [#6563]
> 
>  - Fix memory leak in packstruct unit test [#6645]
> 
>  - Update documentation for maximum_size_of_delay_queue_in_bytes [#6661]
> 
>  - Add test functionality to detect if files exist [#6690]
> 
>  - Fix for duplicate function definition [#6741]
> 
>  - Allow client and server-side implementations in same translation unit [#6782] [#6829]
> 
>  - Expose filesystem header functions [#6832]
> 
>  - Testing replica_exists with a logical path [#6838]
> 
>  - Document how to use spLogSql [#6839]
> 
>  - Document and test groupadmin capabilities [#6885] [#6888]
> 
>  - Document missing specific query DataObjInCollReCur for MySQL [#6900]
> 
>  - Update mock archive to use irv::calculate() [#6947]
> 
>  - Update iquest documentation for uppercase comparisons [#6948]
> 
>  - Update irule documentation of %-separator between multiple variables [#6952]
> 
>  - Fix topology tests [#6976]
> 
>  - Update compound resource to use replica status rather than voting [#7002]
> 
>  - Add unit test for scoped_permission [#7032]
> 
>  - Update itree help text with large collection warning [#7041]
> 
> **Deprecated**
> 
>  - Deprecate unused members of l1desc_t [#6754]
> 
> **Removed**
> 
>  - Remove nanodbc library dependency from delay server [#6851]


Alongside the core packages included in 4.2.12, the following plugins have been upgraded for compatibility:

- irods-auth-plugin-krb
- irods-microservice-plugins-curl
- irods-netcdf-client-modules
- irods-netcdf-icommands
- irods-netcdf-server-modules
- irods-resource-plugin-s3
- irods-rule-engine-plugin-document-type
- irods-rule-engine-plugin-elasticsearch
- irods-rule-engine-plugin-indexing
- irods-rule-engine-plugin-logical-quotas
- irods-rule-engine-plugin-metadata-guard
- irods-rule-engine-plugin-python
- irods-rule-engine-plugin-unified-storage-tiering
