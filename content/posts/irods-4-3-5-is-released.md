Title: iRODS 4.3.5 is released
Date: 2026-03-03 21:00
Author: Kory Draughn
Slug: irods-4-3-5-is-released
Status: published



The iRODS Consortium and RENCI are pleased to announce iRODS 4.3.5.

This release represents a year's worth of work to finalize the 4.3 series. It closes 133 issues in service of making this release as stable as possible for deployments which cannot upgrade to iRODS 5 yet.

Notable updates include memory leak fixes, various improvements for physical quotas, more deprecations, and better handling of multi-byte characters.

The latest binary packages for Enterprise Linux 8, Enterprise Linux 9, Ubuntu 20.04, Ubuntu 22.04, Ubuntu 24.04, Debian 11, and Debian 12 are available at <https://packages.irods.org/>.

<!--more-->

[The release notes include](https://docs.irods.org/4.3.5/release_notes/):

> **Changed**
>
> - `irepl`: Update help text for `-n` and `-S` (#4687).
> - Make `update_deprecated_columns.py` print exception information (#7833).
> - `iinit`: Only non-native authentication schemes force the "iRODS password" prompt (#7948).
> - Enable authentication plugins to accept passwords in requests (#8016).
> - Do not print stacktrace when `irods_environment.json` file is not readable (#8083).
> - GenQuery2: Allow function calls in GROUP-BY clause (#8093).
> - GenQuery2: Grant users full control over `DISTINCT` keyword (#8261).
> - GenQuery2: Allow `DISTINCT` keyword in function calls (#8261).
> - Update help text for `irsync` (#8288).
> - Optimize query performance when adding metadata (#8392).
> - Update help text for various iCommands (#8451).
> - Update feature test macros (#8580).
> - Invoke `fileNotify` when closing replica (#8586).
> - Update help text for physical quotas `iadmin` subcommands (#8618).
> - Make `iadmin` quota GenQuery use the same query conditions (#8622).
> - Update help text for `itouch` to be more explicit (#8673).
> - GenQuery2: Expose user type through permission-related columns (#8754).
> - Declare package dependency on findutils for Enterprise Linux (#8873).
>
> **Removed**
>
> - Remove `-p` option from `iput` and `icp` (#4932).
> - Remove build hook python script (#8421).
>
> **Deprecated**
>
> - Deprecate `msiDataObjPut` (#8229).
> - Deprecate `--rlock` and `--wlock` options (#8272).
> - Deprecate macros for advisory lock API (#8272).
> - Deprecate osauth scheme (#8301).
> - Deprecate convenience functions for DNS/Hostname cache configuration properties (#8417).
> - Deprecate control plane and `irods-grid` (#8479).
> - Deprecate `iadmin ctime` (#8850).
> - Deprecate `iadmin mkdir` (#8850).
> - Deprecate `iadmin rmdir` (#8850).
> - Deprecate `iadmin ls` (#8850).
>
> **Fixed**
>
> - Stop server from incrementing ticket `write-file` count after reaching limit (#2720).
> - Return correct error code to client when ticket limit is exceeded (#2720).
> - Reduce scope of `FILE_PATH_KW` (#4932).
> - Honor logical locking in registration/unregistration APIs (#5763).
> - Fix renaming of collections containing multi-byte characters (#6239).
> - Maintain appropriate permissions for `msiExecCmd_bin` directory on package upgrade (#6671).
> - Update modification time of replica on open with `O_TRUNC` (#7128).
> - Fix `ils` page boundary bug involving linkPoint collections (#7712).
> - Do not create target collections or directories during dry-run of `irsync` (#7774).
> - Fix use of MySQL `LIMIT` keyword in `update_deprecated_columns.py` (#7833).
> - Prevent `iinit` from showing native authentication password prompt for non-native authentication schemes (#7948).
> - Fix memory leaks in delay server (#8254, #8575).
> - Make GenQuery2 honor group permissions (#8259).
> - Restore support for `KeyValPair` in Python rule engine plugin (#8265).
> - Fix `irsync`'s handling of `ALL_KW` when targeting a single data object (#8295).
> - Check for `nullptr` in data_object_modify_info API (#8307).
> - Fix memory leak in delay server (#8334).
> - Fix memory leak in native authentication plugin (#8334).
> - Fix memory leaks in client libraries handling `rodsPaths` (#8334).
> - Fix potential memory leak in `resolveRodsTarget` (#8334).
> - Fix potential `collHandle` memory leaks (#8334).
> - Fix memory leak in `getUtil` (#8334).
> - Fix `rodsPath` memory leaks in `iput` and `iget` (#8334).
> - Limit max value of `maximum_size_for_single_buffer_in_megabytes` for DataObjGet API (#8373).
> - Guarantee `rodsEnv` strings are null-terminated (#8379).
> - Improve `irsync`'s handling for checksum errors (#8384).
> - Update modification time on empty overwrite for copy operation (#8413).
> - Fix redirect bug of client request from Consumer server to Provider server in GenQuery2 API (#8439).
> - Unregister replica before unlinking in DataObjUnlink API (#8441).
> - Replace invalid UTF-8 sequences in log messages (#8498).
> - Fix GenQuery2's ability to find objects lacking user permissions (#8546).
> - Fix help text for `igroupadmin` (#8583).
> - Fix `irsync`'s handling of overwrites and checksums involving stale replicas (#8590).
> - Fix double-free/corruption by setting free'd pointers to `nullptr` in network plugins (#8593).
> - Fix zone reports for server-to-server connect errors (#8607).
> - Remove all existing usage entries when recalculating physical quotas (#8633).
> - Make `imiscsvrinfo` report an error when connected to a server older than 4.3.4 (#8653).
> - Return nonzero when grid configuration APIs report an error (#8671).
> - Make physical quota count the largest overrun (#8691).
> - Make total quota update only apply to correct `resc_id` (#8699).
> - Replace spaces with hyphens for agent information (`ips`) (#8733).
> - Use `OWN` permissions instead of `data_owner_name` when calculating physical quota totals (#8750).
> - Fix queries for physical quotas so that quotas are properly processed (#8758).
> - Clear input struct to avoid segmentation fault in `iget` (#8793).
> - Prevent checksum without status update in replica_close API (#8801).
> - Fix memory leaks stemming from `clearMsParam` (#8857).
> - Do not crash delay server when in-memory delay queue buffer is too small (#8859).
> - Fix memory leaks in iRODS Rule Language (#8864).
> - Fix stalling of delay rule processing in delay server by removing unnecessary use of pool memory resource (#8868).
>
> **Added**
>
> - Add logical locking bypass keyword (#5763).
> - Add new error code - `INVALID_INPUT_ARGUMENT_NULL_POINTER` (#8311).
> - Add new error code - `CONNECTION_REFUSED` (#8377).
> - Add new error code - `DEPRECATED_AUTHENTICATION_PLUGIN` (#8391).
> - Serialize `TicketAdminInput` data structure for policy enforcement (#8518).
>
> [Full GitHub commit history for the iRODS server](https://github.com/irods/irods/compare/4.3.4...4.3.5)<br />
> [Full GitHub commit history for the iCommands](https://github.com/irods/irods_client_icommands/compare/4.3.4...4.3.5)

Alongside the core packages included in 4.3.5, the following plugins have been updated for compatibility:

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
