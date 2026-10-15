Title: iRODS 5.1.0 is released
Date: 2026-10-15 23:00
Author: Kory Draughn
Slug: irods-5-1-0-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 5.1.0.

This release represents more than a year of development focused on improving the stability, security, and capabilities of the iRODS data management platform.

Notable updates include:

- **Ubuntu 26.04** - Added support for Canonical's latest LTS version of Ubuntu.
- **TLS during Server Setup** - The setup script now prompts for TLS certificates when passed `--tls`.
- **FIPS Compatibility** - To improve compatibility with FIPS-enabled environments, the server now supports configuring hashing algorithms other than MD5.
- **New Authentication Scheme** - This release introduces the `irods` authentication scheme to address limitations in the `native` authentication scheme. It is provided as an opt-in, but will eventually become the default. See ["irods" Authentication](https://docs.irods.org/5.1.0/plugins/pluggable_authentication/#irods-authentication) to learn more.
- **Logical Quotas** - The server now provides built-in support for Logical Quotas. Unlike the rule-engine-based implementation, Logical Quotas is passive and behaves similarly to the existing Physical Quotas system. See [Logical Quotas](https://docs.irods.org/5.1.0/system_overview/quotas/#logical-quotas) to learn more.
- **Resource Rebalance** - The rebalance operation now attempts all possible replications rather than stopping at the first encountered error. See [Rebalancing](https://docs.irods.org/5.1.0/plugins/composable_resources/#rebalancing) to learn more.
- **Random Scheme Vault Paths** - Administrators can now customize how physical paths are generated when using the random scheme vault path policy. See documentation for microservices `msi_random_scheme_set_style()` and `msi_random_scheme_set_suffix_length()`.
- **iCommands Compatibility Check** - The iCommands now warn users when a compatibility issue is detected with the connected server. See [Server Version Compatibility](https://docs.irods.org/5.1.0/icommands/general_info/#server-version-compatibility) for more information.

Starting with iRODS 5.1.0, the server will reject operations that attempt to modify any of the following paths or their contents. These locations are reserved for the operation of the server.

- `<prefix>/etc/irods`
- `<prefix>/run/irods`
- `<prefix>/usr/lib/irods`
- `<prefix>/usr/sbin/irodsAgent`
- `<prefix>/usr/sbin/irodsDelayServer`
- `<prefix>/usr/sbin/irodsPamAuthCheck`
- `<prefix>/usr/sbin/irodsServer`
- `<prefix>/var/lib/irods`

To disable this behavior, set the environment variable `IRODS_ALLOW_UNSAFE_PHYSICAL_PATH_REGISTRATION` to `1` and restart the server. This override is temporary and will be removed in iRODS 6. Administrators are encouraged to relocate any vaults within the reserved locations before upgrading.

The latest binary packages for Enterprise Linux 9, Enterprise Linux 10, Ubuntu 22.04, Ubuntu 24.04, Ubuntu 26.04, Debian 12, and Debian 13 are available at <https://packages.irods.org/>.

<!--more-->

[The release notes include](https://docs.irods.org/5.1.0/release_notes/):

> **Changed**
> 
> - Allow resource rebalance to continue on stale and missing replicas (#6111).
> - GenQuery2: Return parser error information via rError stack (#8094).
> - Update help text for `irsync` (#8288).
> - Skip policy layer when setting up access control for GenQuery1 (#8304).
> - Update feature test macros (#8459, #8580, #8749, #9004).
> - Merge iCommands source back into server repository (#8591).
> - Modify calculations for physical quotas to account for coordinating resources (#8667).
> - Update help text for physical quotas `iadmin` subcommands (#8618).
> - Warn users of compatibility issues between iCommands and server (#8638).
> - Set RuntimeDirectory in systemd service file templates (#8717).
> - Use `CHKSUM_LEN` instead of `NAME_LEN` for checksums (#8731).
> - Remove redundant checksum verification in `bulkProcAndRegSubfile` (#8734).
> - Prevent removal of password for currently authenticated user (#8747).
> - Prevent removal of password for service account rodsadmin (#8747).
> - GenQuery2: Expose user type through permission-related columns (#8754).
> - Use `irods::authentication::scheme_name` instead of string literals (#8834).
> - Use new version of nanodbc externals package (#8877).
> - Tweak libxml2 dependency for Ubuntu 26.04 (#8877).
> - Use Hasher options to control session token hashes (#8909).
> - Warn administrator when non-owner attempts to launch server (#8960).
> - Disallow running server with root privileges (#8960).
> - Reject relative paths to PID file on server startup (#8980).
> - Move logging of stacktrace files from main server process to the agent factory (#8997).
> - dstream: Detect narrowing conversion errors for buffer sizes (#9002).
> - Return true iRODS error code when Touch API fails to create data object (#9026).
> - `istream`: Return true iRODS error code on dstream failures (#9027).
> - Log errors from rule engine plugin operations - setup, teardown, start, stop (#9076).
> - Harden internal path handling logic (#9079).
> - Harden group creation operation of UserAdmin API (#9107).
> - Harden StartupPack consistency (#9111).
> - Harden client-server negotiation process (#9113).
> 
> **Removed**
> 
> - Remove undefined `getValByInx` declaration (#8707).
> - Remove undefined `tarToBuf` declaration (#8708).
> - Remove undefined `untarBuf` declaration (#8708).
> - Remove undefined `resolveStatForStructFileOpr` declaration (#8709).
> - Remove undefined `addIntArray` declaration (#8710).
> - Remove undefined `irodsCloseSock` declaration (#8713).
> - Remove undefined `getParentPathlen` declaration (#8714).
> - Remove undefined `svrReconnect` declaration (#8715).
> - Remove `iGet`, `iDel`, `iTicket` scripts and related files (#8976).
> - Remove `rulegen` tool and related files (#8977).
> 
> **Deprecated**
> 
> - Deprecate requirement for `irule` file extension (#3693).
> - Deprecate `check_sent_sid`, `sign_server_sid`, `remote_SID_key_map` (#5948).
> - Deprecate `itree -J` (#7943).
> - Deprecate `msiDataObjPut` (#8229).
> - Deprecate adding custom `user_type` tokens (#8233).
> - Deprecate user authentication names (#8408).
> - Deprecate legacy authentication API numbers (#8424).
> - Deprecate `isPathSymlink` function (#8711).
> - Deprecate interactive mode for `iadmin` (#8738).
> - Deprecate interactive mode for `igroupadmin` (#8738).
> - Deprecate Oracle database plugin (#8829).
> - Deprecate token addition and removal (#8892).
> - Deprecate `PUBLIC_USER_NAME` macro (#8951).
> - Deprecate `PUBLIC_USER_AUTH` macro (#8951).
> 
> **Fixed**
> 
> - Fix memory leak related to `bytesBuf_t` (irods/irods_rule_engine_plugin_policy_composition#5).
> - Fix too many arguments in format string (#858).
> - Stop server from incrementing ticket `write-file` count after reaching limit (#2720).
> - Return correct error code to client when ticket limit is exceeded (#2720).
> - Honor logical locking in registration/unregistration APIs (#5763).
> - Prevent agent from crashing on invalid rule input (#7074).
> - Update modification time of replica on open with `O_TRUNC` (#7128).
> - Fix `ils` page boundary bug involving linkPoint collections (#7712).
> - Harden DataObjRename API's use of Logical Locking (#7935, #8888).
> - Fix memory leaks in delay server (#8254, #8575).
> - Check for `nullptr` in data_object_modify_info API (#8307).
> - Fix potential memory leak in `resolveRodsTarget` (#8334).
> - Fix potential `collHandle` memory leaks (#8334).
> - Fix memory leak in `getUtil` (#8334).
> - Update modification time on empty overwrite for copy operation (#8413).
> - Remove `imeta ls -C` path length constraint of 256 bytes (#8519).
> - Use correct version number in server upgrade instructions (#8536).
> - Remove duplicate definitions from `rodsKeyWdDef.h` (#8550).
> - Strip trailing slashes from `irods_home` and `irods_cwd` (#8572).
> - Fix double-free/corruption by setting free'd pointers to `nullptr` in network plugins (#8593).
> - Fix zone reports for server-to-server connect errors (#8607).
> - Make `RESC_NAME_KW` (`-R`) a directive for DataObjOpen API (#8627).
> - Make `imiscsvrinfo` report an error when connected to a server older than 4.3.4 (#8653).
> - Make physical quota count the largest overrun (#8691).
> - Make total quota update only apply to correct `resc_id` (#8699).
> - Check return value of `base64_encode` in hashers (#8703).
> - Do not ignore errors from hashers (#8703).
> - Expand internal buffer used by sha512 hasher (#8703).
> - Replace spaces with hyphens for agent information (`ips`) (#8733).
> - Do not cross lib->server boundary unconditionally (#8740).
> - Use `OWN` permissions instead of `data_owner_name` when calculating physical quota totals (#8750).
> - Refactor physical quotas query so that quotas are properly processed (#8758).
> - Specify byte order when invoking `to_bytes` Python method for CRC64/NVME (#8763).
> - Prevent checksum without status update in replica_close API (#8801).
> - DataObjOpen: Rework update to replica access table to avoid potential uninitialized values (#8808).
> - Collapse multiple authentication codes to `CAT_INVALID_AUTHENTICATION` (#8822).
> - Stabilize time difference between authentication with invalid password and authentication with nonexistent user (#8822).
> - Avoid brace-initialization when constructing nlohmann JSON objects with other JSON objects (#8839).
> - Do not use `memset` on `RsComm` (#8843).
> - Fix memory leaks stemming from `clearMsParam` (#8857).
> - Do not crash delay server when in-memory delay queue buffer is too small (#8859).
> - Fix memory leak in Hasher (#8861).
> - Fix memory leaks in iRODS Rule Language (#8864).
> - Fix stalling of delay rule processing in delay server by removing unnecessary use of pool memory resource (#8868).
> - Do not use index operator to get vector pointers (#8877).
> - Make matching for size output from `stat` case-insensitive for univmss resource plugin (#8877).
> - GenQuery1: Use bounds-safe operations when cleaning zone hint (#8877).
> - GenQuery2: Do not duplicate rows when user has access via multiple groups (#8880).
> - Allow empty context strings for resources (#8900).
> - Use `FETCH FIRST ROWS ONLY` instead of `LIMIT` (#8907).
> - Fix group permission expansion in filesystem library (#8912).
> - Fix handling of single quotes in paths for univmss resource plugin (#8928).
> - Prevent core dump due to file permissions for `irods_environment.json` (#8933).
> - Set server boot time for GetMiscSvrInfo API (#8943).
> - `iqstat`: Check `RcComm` for `nullptr` before use (#8956).
> - `itree`: Fix build error stemming from redefinition of symbol (#8958).
> - Write PID file creation error messages to stderr (#8971).
> - Return error when iCommands are passed too many commandline arguments (#8975).
> - Restore printing of INFO-level log messages during initial setup (#8981).
> - Set pointer to `nullptr` after deallocation in `getVaultPathPolicy` (#8991).
> - Make ObjStat API prefer good replicas (#8993).
> - ModDataObjMeta: Apply timestamp formatting to creation time string (#8999).
> - `ilsresc`: Return nonzero error code on nonexistent resource (#9012).
> - GenQuery2: Preserve query semantics when generating SQL (#9016).
> - Make delay server honor client username and `delay_rule_executors` list when creating connections to agent factory (#9059).
> - Check for empty string to avoid SIGABRT (#9065).
> - Make iRODS Rule Language rule engine plugin operations private (#9074).
> - Fix memory leak and thread-safety in `RuleExistsHelper` class (#9077).
> - Limit collection path prefix matching for tickets (#9081).
> - Fix narrowing conversions for 64-bit integers (#9099).
> - Set zone ID to -1 when value cannot be represented by signed 32-bit integer (#9119).
> 
> **Added**
> 
> - Add `sign_server_sid` replacement: `sign_zone_key` (#2295).
> - Add configuration for zone key signing hash scheme (#2295, #3403).
> - GeneralAdmin API: Add support for removing passwords (#2899).
> - Expose `parent_context` property to `iadmin modresc` (#4022).
> - Add support for configuring TLS during setup (#7717).
> - GenQuery2: Expose new columns for querying when metadata is attached (#7889).
> - Add `-j` option to `itree` for showing JSON output (#7943).
> - dstream: Expose underlying iRODS error codes (#8459).
> - Serialize `TicketAdminInput` data structure for policy enforcement (#8518).
> - Add CRC64/NVME hash strategy (#8554).
> - Add resource operation for reading checksums from storage device (#8554).
> - Implement passive logical quotas in-server (#8632, #8970, #8994, #9034, #9050, #9055, #9099).
> - Add and use common tool to get password from stdin (#8697).
> - Add python script to ease removal of user passwords (#8697).
> - Add password hashing utilities for server (#8697).
> - Add hashed password support (#8697).
> - Add authentication session token support (#8697).
> - Add new **irods** authentication scheme (#8697, #8729, #8963).
> - Add `user_password_storage_mode` grid configuration option (#8748).
> - Add `R_USER_CREDENTIALS` table on database upgrade (#8729, #8769, #8994).
> - Add `password_reuse_previous` grid configuration option for PAM-generated passwords (#8789).
> - Add option to skip post-install PUT test during setup (#8901).
> - Hasher: Add digest overload to control output string (#8909).
> - Add microservices for customizing how the random scheme vault path policy generates physical paths (#8917, #9039).
> - Expose parent context for resources via resource administration library (#9004).
> - Add verbose flag to `run_tests.py` script (#9097).
> 
> [Full GitHub commit history](https://github.com/irods/irods/compare/5.0.2...5.1.0)
