Title: iRODS 5.0.0 is released
Date: 2025-05-20 10:00
Author: Kory Draughn
Slug: irods-5-0-0-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 5.0.0.

This release represents a significant effort to make iRODS what users expect from an enterprise grade data management platform. Great focus has been put into making iRODS 5 easy to deploy and manage in a variety of environments.

Notable updates include:

- **Revamped Startup/Shutdown Process** - The startup/shutdown process has been fully redesigned. The server no longer auto-reloads `server_config.json`. It honors signals in the expected manner and also communicates its status to the service manager. Servers can now be launched out-of-order as well. This redesign has led to the removal of several components including but not limited to the control plane, `irods-grid`, and `irodsctl`.
- **Unified Server Configuration** - All server configuration options, excluding zone-wide options, have been consolidated into `server_config.json`. The server no longer relies on the service account's `irods_environment.json` file.
- **OpenSSL 3** - The server has been migrated from OpenSSL 1 for improved security and compatibility.
- **Access Time Tracking** - The server has been updated to track access time for all replicas. Updates to the access time are applied in the background to maintain performance. Access time information is available through GenQuery.
- **Semantic Versioning** - Due to significant improvements to the buildsystem, the iRODS 5 series will honor semantic versioning to communicate changes in the software.
- **Built against libstdc++** - The server is now built against libstdc++ by default. As a result, some package dependencies are now satisfied by system-provided packages.
- **GenQuery1** - A brand new flex-bison parser has been added for GenQuery1. This new parser resolves all long-standing bug reports involving embedded single quotes, special characters, reserved keywords, etc.
- **GenQuery2** - The GenQuery2 parser has been updated so that users have full control over the placement of the `DISTINCT` keyword. This is a major departure from GenQuery1. This change is motivated by a need for more control over queries which involve counting.
- **Delay Rule Locking** - Migration of the Delay Server has been simplified by allowing the Delay Server to lock queued delay rules before execution. Information about locked delay rules can be retrieved from the catalog using GenQuery.

The iRODS 5 series will federate with the iRODS 4.3 series. However, the Consortium reserves the right to change requirements around federation, if necessary.

If upgrading to iRODS 5.0.0 and using rsyslog, please add `irodsAgent` to your rsyslog configuration to avoid missing important log messages. See [rsyslog configuration](https://docs.irods.org/5.0.0/system_overview/#rsyslog-configuration) for more information.

This release consists of [957 commits from 16 contributors](https://github.com/irods/irods/compare/4.3.0...5.0.0) and [closed 178 issues marked for 5.0.0](https://github.com/irods/irods/issues?q=milestone%3A5.0.0) and [an additional 24 closed issues to be included in the upcoming 4.3.5 release](https://github.com/irods/irods/issues?q=is%3Aissue%20state%3Aclosed%20milestone%3A4.3.5%20closed%3A%3C%3D2025-05-20).

The latest binary packages for RockyLinux9, Ubuntu22, Ubuntu24, and Debian12 are available at <https://packages.irods.org/>.

<!--more-->

[The release notes include](https://docs.irods.org/5.0.0/release_notes/):

> **Changed**
> 
> - Update message for `itrim` to use "data objects" instead of "files" (#4685).
> 
> - Lift deprecation of `COPIES_KW` for DataObjTrim API - e.g. `itrim -N` (#4861).
> 
> - Lift deprecation of all static policy enforcement points (#5952).
> 
> - Move authentication plugin framework out of experimental namespace (#6150).
> 
> - Default to building against libstdc++ instead of libc++ (#7220).
> 
> - Redesign server startup/shutdown process (#7229).
> 
> - Separate upgrade logic from server startup (#7229).
> 
> - Require reload of `server_config.json` to be initiated by SIGHUP signal (#7229).
> 
> - Install libraries and plugins into expected locations for distributions (#7410).
> 
> - Migrate to OpenSSL 3 (#7483).
> 
> - Remove `irods::buffer_crypt::gen_hash` (#7483).
> 
> - Remove unnecessary TLS member variables from `RodsEnvironment` struct (#8369).
> 
> - Make optional iRODS 4 properties required in `server_config.json` (#7700, #8011).
> 
> - Add missing properties to JSON schema for `server_config.json` (#7700, #8004).
> 
> - Migrate to system-provided nlohmann-json (#7726).
> 
> - Rename authentication plugin directory from `auth` to `authentication` (#7937).
> 
> - Make `database` plugin stanza easier to manage and inspect (#7975).
> 
> - Remove server's dependency on service account `irods_environment.json` file (#2626, #8012).
> 
> - Hard-code `client_server_negotiation` property to `request_server_negotiation` (#8012, #8376).
> 
> - Make `getRodsEnv` load information from different location based on `ProcessType` (#8012).
> 
> - Make `setup_irods.py` prompt for FQDN, Hostname, or IP address (#8013).
> 
> - Enable authentication plugins to accept passwords in requests (#8016).
> 
> - Rename `plugin_home` to `plugin_directory` in `irods_environment.json` (#8019).
> 
> - Make authentication scheme name required in `authenticate_client` (#8257).
> 
> - Replace use of `clientLogin` functions with `authenticate_client` (#8257).
> 
> - Update catalog schema for tracking access time on upgrade (#8260).
> 
> - Update access time on registration of additional replica (#8260).
> 
> - Update access time on registration of new data object (#8260).
> 
> - GenQuery2: Grant users full control over `DISTINCT` keyword (#8261).
> 
> - GenQuery2: Allow `DISTINCT` keyword in function calls (#8261).
> 
> - Log database activity under the `database` log category (#8317).
> 
> - Log SQL and bind variable information under the `sql` log category (#8318).
> 
> - Migrate to distribution-provided CMake (#8330).
> 
> - Migrate to distribution-provided Catch2 (#8331).
> 
> - Migrate to distribution-provided fmtlib (#8332).
> 
> - Migrate to distribution-provided spdlog (#8332).
> 
> - Apply constraints to JSON schema for `server_config.json` (#8343, #8353).
> 
> - Make `pam_password` authentication plugin return an error when TLS is not enabled (#8360).
> 
> - Optimize query performance when adding metadata (#8392).
> 
> - Move authentication plugins into `irods::authentication` namespace (#8428).
> 
> - Update server to permanently enforce `client_api_allowlist_policy` (#8473).
> 
> - Print user and host information to terminal when authenticating via `iinit` (#8487).
> 
> **Removed**
> 
> - Remove GeneralUpdate API (#2956).
> 
> - Remove `-p` option from `iput` and `icp` (#4932).
> 
> - Remove SimpleQuery API (#5247).
> 
> - Remove authentication plugin header files (#6150).
> 
> - Remove `ASSERT_ERROR` and `ASSERT_PASS` (#6229).
> 
> - Remove wildcard operations from ModAVUMetadata API - `adda`, `addw`, `lsw`, `rmw` (#6766).
> 
> - Remove support for `spLogSql` environment variable (#7229).
> 
> - Remove control plane (#7229).
> 
> - Remove `irods-grid` (#7229).
> 
> - Remove `kill_pid.py` script (#7229).
> 
> - Remove `schema_validation_base_uri` from `server_config.json` (#7229).
> 
> - Remove dependency on Python 3 requests module (#7229).
> 
> - Remove support for `AGE_KW` from DataObjTrim API (#7504).
> 
> - Remove RBUDP (#7560).
> 
> - Remove `msiSendMail` (#7563).
> 
> - Remove `--link` option from `iput` and `irsync` (#7578).
> 
> - Remove `BACKUP_RESC_NAME_KW` (#7594).
> 
> - Remove `msiSetResource` (#7603).
> 
> - Remove `update_deprecated_database_columns.py` script (#7834).
> 
> - Remove server monitoring microservices  (#7904).
> 
> - Remove `imeta qu` (#7960).
> 
> - Remove interactive mode from `imeta` (#7962).
> 
> - Remove DataObjLock and DataObjUnlock APIs (#7980).
> 
> - Remove ability to disable Strict ACLs (#7954, #7985).
> 
> - Remove `irodsctl` script (#7996).
> 
> - Remove status function from IrodsController (#8008).
> 
> - Remove SysVinit script (#8020).
> 
> - Remove `schema_version` property from zone report (#8038).
> 
> - Remove server_status.json.in (#8058).
> 
> - Remove GeneralRowInsert API (#8068).
> 
> - Remove GeneralRowPurge API (#8068).
> 
> - Remove `agent_factory_watcher_sleep_time_in_seconds` from `server_config.json` (#8069).
> 
> - Remove `igetwild` (#8084).
> 
> - Remove `ilocate` (#8084).
> 
> - Remove GSI authentication objects (#8257).
> 
> - Remove Kerberos authentication objects (#8257).
> 
> - Remove `--wlock` and `--rlock` options (#8273).
> 
> - Remove osauth and `genOSAuth` (#8300).
> 
> - Remove ZeroMQ references from buildsystem (#8326).
> 
> - Remove Avro references from buildsystem (#8327).
> 
> - Remove `rodsDebug` member variable from `RodsEnvironment` struct (#8367).
> 
> - Remove control plane member variables from `RodsEnvironment` struct (#8368).
> 
> - Remove option to read `server_config.json` from `new_database_connection` function (#8438, #8445).
> 
> - Remove support for `irodsOdbcDSN` environment variable (#8445).
> 
> - Remove unnecessary iadmin subcommands - `ctime`, `mkdir`, `rmdir`, `ls` (#8497).
> 
> - Remove code which prints/logs network messages between client and server (#8509).
> 
> **Deprecated**
> 
> - Deprecate legacy authentication plugins (#8257).
> 
> - Deprecate `clientLogin`-related functions (#8257).
> 
> **Fixed**
> 
> - Replace ad-hoc GenQuery1 parser with flex-bison parser (#3902, #4983, #5992, #7164, #7169, #7174, #7302, #7972, #8033).
> 
> - Reduce scope of `FILE_PATH_KW` (#4932).
> 
> - Prevent `iinit` from showing native authentication password prompt for non-native authentication schemes (#7948).
> 
> - Fix error handling logic for heartbeat operation (#8050).
> 
> - Make GenQuery2 honor group permissions (#8259).
> 
> - Restore support for `KeyValPair` in Python rule engine plugin (#8265).
> 
> - Fix redirect bug of client request from Consumer server to Provider server in GenQuery2 API (#8439).
> 
> - Unregister replica before unlinking in DataObjUnlink API (#8441).
> 
> - Set working directory when stopping server during package upgrade (#8492).
> 
> - Replace invalid UTF-8 sequences in log messages (#8498).
> 
> **Added**
> 
> - Add `host` property to `server_config.json` for specifying the identity of the server (#7229).
> 
> - Add `plugin_directory` property to `server_config.json` for specifying from which directory plugins are to be loaded (#8005).
> 
> - Implement new API for locking and unlocking delay rules (#8023).
> 
> - Add support for delay rule locking columns to GenQuery (#8023).
> 
> - Add support for delay rule locking columns to RuleExecMod API (#8023).
> 
> - Make server communicate status to service manager (#8036).
> 
> - Add systemd service file template (#8049).
> 
> - Add `rc_authenticate_client` for C clients (#8257).
> 
> - Implement new API for updating the access time of multiple replicas (#8260).
> 
> - Make server track access time of each replica (#8260).
> 
> - Add support for access time to `iadmin modrepl` (#8260).
> 
> - Add support for access time to ModDataObjMeta API (#8260).
> 
> - Add support for querying access time to GenQuery (#8260).
> 
> - Add dedicated log category for GenQuery1 (#8319).


Alongside the core packages included in 5.0.0, the following plugins have been updated for compatibility:

- irods-auth-plugin-pam-interactive-client
- irods-auth-plugin-pam-interactive-server
- irods-microservice-plugins-curl
- irods-resource-plugin-s3
- irods-rule-engine-plugin-audit-amqp
- irods-rule-engine-plugin-elasticsearch
- irods-rule-engine-plugin-indexing
- irods-rule-engine-plugin-logical-quotas
- irods-rule-engine-plugin-metadata-guard
- irods-rule-engine-plugin-python
- irods-rule-engine-plugin-unified-storage-tiering
