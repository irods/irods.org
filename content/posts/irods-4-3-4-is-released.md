Title: iRODS 4.3.4 is released
Date: 2025-03-05 10:00
Author: Kory Draughn
Slug: irods-4-3-4-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.3.4.

This release primarily focuses on preparing the ground for the initial release of iRODS 5 by introducing more deprecations, fixing bugs, and cleaning up implementations.

The biggest news of this release is that `imiscsvrinfo` has been updated to report SSL/TLS certificate information, if in use.  This is made possible due to enhancements to the `rcGetMiscSvrInfo` API endpoint.  Keep in mind that this requires the client to have a proper client-side configuration.

This release consists of [94 commits from 6 contributors](https://github.com/irods/irods/compare/4.3.3...4.3.4) and [closed 134 issues marked for 4.3.4](https://github.com/irods/irods/issues?q=milestone%3A4.3.4).

The latest binary packages for AlmaLinux8, RockyLinux9, Ubuntu20, Ubuntu22, Ubuntu24, Debian11, and Debian12 are available at <https://packages.irods.org/>.

<!--more-->

[The release notes include](https://docs.irods.org/4.3.4/release_notes/):

> **Changed**
> 
> - Improve documentation (#2600, #7622, #7701, #7784, #7952, #8000).
>
> - Return errors on one-sided encryption in parallel transfer (#4984).
>
> - Improve testing (#6421, #7412, #7491, #7795, #7990, #8046, #8047, #8183, #8185, #8247).
>
> - Clean up code (#5800, #6972).
>
> - Remove unnecessary code - source files, functions, declarations, header includes, etc (#6043, #6234, #6546, #7919, #7942, #8010, #8133, #8201, #8204).
>
> - Replace use of externals-provided libarchive with distro-provided libarchive (#6250, #7286).
>
> - Improve CMake (#6319, #6584).
>
> - Update clang-format / clang-tidy configuration (#6970, #7313, #7751, #7821, #7822).
>
> - Remove ACLs following removal of user (#7778).
>
> - Migrate GitHub workflows to Ubuntu 24.04 (#7823).
>
> - Expand permission levels supported by atomic ACL operations API (#7913).
>
> - Reduce log noise (#7953).
>
> - Remove installation of packedRei directory from CMakeLists.txt (#7993).
>
> - Install msiExecCmd_bin/hello script as a template (#7994).
>
> - Replace stacktrace with user-friendly error message in `itree` (#8082).
>
> - Improve GenQuery2 parser's handling of whitespace sequences (#8182).
>
> - Add json_events.hpp header file to development package (#8200).
> 
> **Removed**
> 
> - Remove CentOS 7 build from GitHub workflows (#7968).
> 
> **Deprecated**
> 
> - Deprecate `ilocate` (#2524).
>
> - Deprecate `igetwild` (#2525).
>
> - Deprecate creation or modification of user having rodsgroup type in GeneralAdmin API (#2978).
>
> - Deprecate modification of ACL policy (#6843).
>
> - Deprecate GeneralRowInsert and GeneralRowPurge (#7608).
>
> - Deprecate update_deprecated_database_columns.py (#7835).
>
> - Deprecate `imeta qu` (#7959).
>
> - Deprecate `imeta` interactive mode (#7961).
>
> - Deprecate server monitoring microservices (#7977).
>
> - Deprecate DataObjLock and DataObjUnlock (#7979).
>
> - Deprecate unused global variables in resource manager implementation. (#8042).
>
> - Deprecate `fillGenQueryInpFromStrCond` (#8088).
>
> - Deprecate `forkAndExec` (#8109).
> 
> **Fixed**
> 
> - Avoid SIGABRT by setting pointers to null after deallocation (#3581).
>
> - Use `ProcessType` to detect server vs pure client (#6684).
>
> - Rework logic in `_cllExecSqlNoResult` to return proper error codes (#7440, #7599).
>
> - Fix flex warning for GenQuery2 lexer rules (#7685).
>
> - Validate and reject invalid zone names (#7722).
>
> - Return non-zero exit code from `iadmin` on failure (#7734).
>
> - Remove undefined reference to variable in exception (#7752).
>
> - Ignore SIGPIPE so agents do not terminate immediately (#7933, #7934).
>
> - Change if-statement so ticket use-count is only updated on first pass (#7967).
>
> - Write client and proxy user info to `ips` data file in correct order (#8001).
>
> - Modify JSON schema file to enforce required attributes of `controlled_user_connection_list` (#8017).
>
> - Use `std::tolower` with `std::transform` correctly (#8045).
>
> - Fix error handling logic for heartbeat operation (#8050).
>
> - Return error on invalid GenQuery1 aggregate function (#8080).
>
> - Return error on nonexistent target for write functions in iRODS Rule Language (#8095).
>
> - Clean up memory in `rsDataObjChksum`, various endpoints, and iCommands (#8106).
>
> - Correct narrowing of floating point values (#8110).
>
> - Remove constructor from `Cache` data type in iRODS Rule Language to allow for `memset` (#8111).
>
> - Avoid segfault in `rcDisconnect` (#8120).
>
> - Fix libstdc++ linker error for `ienv`, `ierror`, and `ipwd` on EL8 (#8122).
>
> - Fix GenQuery2 column mappings for user zone (#8134).
>
> - Use correct GenQuery2 table aliases for permissions (#8135).
>
> - Fix `nullptr` to function argument and unsigned overflow (#8153).
>
> - Fix read/write loop in `istream` (#8166). 
>
> - Clear `rodsPathInp_t` instead of freeing memory (#8221).
>
> - Add support for `order_asc` keyword to GenQuery1 string parser (#8249).
> 
> **Added**
> 
> - Add dedicated keywords for creating groups via GeneralAdmin API (#2978).
>
> - Make checksum buffer size configurable (#7947).
>
> - Provide way for clients to obtain SSL/TLS certificate information (#7986).
>
> - Add support for Undefined Behavior Sanitizer (#8090).


Alongside the core packages included in 4.3.4, the following plugins have been updated for compatibility:

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
