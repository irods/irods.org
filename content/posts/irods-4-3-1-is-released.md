Title: iRODS 4.3.1 is released
Date: 2023-10-20 22:00
Author: Terrell Russell
Slug: irods-4-3-1-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.3.1.

This release represents a steady improvement on 4.3.0's significant release last year.  Most significantly, the memory leaks introduced with the new frameworks in 4.3.0 have been fixed alongside internal refactoring.  Additionally, three new operating systems are now supported by our binary packaging.

Detached mode has been added to the unixfilesystem plugin which provides superior performance when working with parallel filesystems.

Additional machinery has been made available to control TCP Keepalive behavior, ticket administration, connection pooling, and authentication configuration.

This release consists of [402 commits from 16 contributors](https://github.com/irods/irods/compare/4.3.0...4.3.1) and [closed 236 issues marked for 4.3.1](https://github.com/irods/irods/issues?q=milestone%3A4.3.1) and [an additional 119 closed issues included in the recent 4.2.12 release](https://github.com/irods/irods/issues?q=milestone%3A4.2.12+closed%3A%3E2022-06-12).

The latest binary packages for CentOS7, AlmaLinux8, RockyLinux9, Ubuntu18, Ubuntu20, Ubuntu22, Debian11, and Debian12 are available at <https://packages.irods.org/>.

<!--more-->

[The release notes include](https://docs.irods.org/4.3.1/release_notes/):

> **Enhancements**
>
> - Add TCP keepalive options configuration [#2533] [#3824] [#3986]
>
> - Prompt for auth scheme and SSL information with iinit [#3164] [#6398]
>
> - Include resource 'comment' and 'info' in izonereport [#3739]
>
> - Add detached mode to unixfilesystem plugin [#4421] [#6557]
>
> - Add connection_pool features [#5060] [#5799] [#7130] [#7145] [#7287] [#7304] [#7314] [#7350]
>
> - Add ticket administration library [#5716] [#7115] [#7179] [#7185] [#7211]
>
> - Add server configuration reload on SIGHUP [#5816] [#5821] [#6569]
>
> - Add client connection information to acPreConnect [#5985]
>
> - Use boost::process to capture messages better [#6273]
>
> - Expose CRON task intervals in advanced settings [#6342]
>
> - Expose delay server and control plane timeout settings [#6370]
>
> - Improved logging facilities [#6470] [#6493] [#6641] [#6642] [#6818] [#7048] [#7212]
>
> - Add remote configuration reload to irods-grid [#6529]
>
> - Add interactive_pam authentication plugin [#6576]
>
> - Add initial feature test macros to server [#6588] [#7254]
>
> - Add new rc_switch_user API plugin [#6591] [#7197]
>
> - Add support for packaging for Ubuntu 22.04 [#6597]
>
> - Add zone administration library [#6616]
>
> - Add checksums to izonereport [#6856]
>
> - Flatten izonereport list of servers [#6857]
>
> - Add new rx_check_auth_credentials API endpoint [#7099] [#7290]
>
> - Determine correct RTLD flags when loading plugins [#7158]
>
> - Add microservice to remove a user from a group [#7165]
>
> - Add support for packaging for AlmaLinux 9 and Rocky Linux 9 [#7191] [#7281] [#7312]
>
> - Add bulk removal to process_stash [#7195] [#7296]
>
> - Add testing functions to user administration library [#7227]
>
> - Add new rc_get_resource_info_for_operation API endpoint [#7256]
>
> - Add support for packaging for Debian 12 [#7266]
>
> - Add support for PAM configuration to catalog [#7274]
>
> - Add new iadmin get/set_grid_configuration subcommands [#7283]
>
> - Add new column for resource modification time in milliseconds [#7303]
>
> - Add totalRowCount to query iterator [#7310]
>
> **Bug Fixes**
>
> - Marked as resolved/invalid/question/wontfix [#2029] [#3967] [#4401] [#5932] [#6157] [#6158] [#6419] [#6447] [#6458] [#6464] [#6471] [#6483] [#6485] [#6500] [#6503] [#6520] [#6535] [#6561] [#6594] [#6603] [#6612] [#6644] [#6686] [#6770] [#6771] [#6772] [#6830] [#6852] [#6855] [#6881] [#6893] [#6902] [#6965] [#6988] [#7040] [#7064] [#7106] [#7111] [#7117] [#7118] [#7122] [#7142] [#7143] [#7144] [#7167] [#7172] [#7175] [#7183] [#7201] [#7320] [#7333] [#7368] [#7369] [#7379]
>
> - Fix for bypass of permission model in ichmod [#2570] [#6579]
>
> - Fix for null pointers in serialization functions [#3400]
>
> - Fix for PAM authentication prompts [#3564]
>
> - Fix for duplicate server information in izonereport [#3682]
>
> - Fix for subject alternative name in irods.org cert [#3718]
>
> - Fix for DOUBLE directive in delay hints parser [#5964]
>
> - Fix for error message during resource resolution [#6260]
>
> - Fix for metadata definitions in wrong location [#6445]
>
> - Fix for unattended installs and default resource [#6459]
>
> - Update for PAM documentation [#6472]
>
> - Fix for duplicate AVU add behavior [#6504]
>
> - Update documentation for PEP and policy reuse [#6528]
>
> - Fix for openmode flags being mistakenly updated [#6600]
>
> - Fixes for memory leaks [#6634] [#6672] [#6814] [#6821] [#6931] [#7321]
>
> - Fix deadlock in MySQL on concurrent inserts [#6670]
>
> - Fix for delay server migration not consulting host_resolution [#6687]
>
> - Fix for data race with use of server_properties::map [#6726]
>
> - Fixes for signal handlers [#6732] [#6819] [#6820]
>
> - Fix for removed python function for rsZoneReport [#6773]
>
> - Fix for ichmod help text [#6809]
>
> - Marked as duplicate [#6747] [#6763] [#6894] [#7133] [#7275]
>
> - Fix for environment variable bounds check [#6866]
>
> - Fix for inconsistent role ordering in setup script [#7023]
>
> - Fix for python rule engine plugin to load libpython.so [#7056]
>
> - Fix for PAM password length [#7098]
>
> - Fix for missing headers [#7101]
>
> - Fix for iticket relative path handling [#7103]
>
> - Fix for bulk put with overwrites [#7110]
>
> - Fix for modification time for tickets [#7125]
>
> - Fix for msiCollRsync noisy logs [#7134]
>
> - Fix for delay server migration atomicity [#7137]
>
> - Fix for signed data size behavior in irods::file_object [#7154] [#7160]
>
> - Fix for rError stack initialization [#7161]
>
> - Fix for ticket session leaving open a database transaction [#7250]
>
> - Fix for permissions returned to 4.2 servers [#7327]
>
> - Fix for minimum privilege level for API plugins [#7338]
>
> **Refactors / Packaging / Build / Test**
>
> - Better declare build dependencies in any CMake errors [#3270]
>
> - Introduce CMake IrodsRunpathDefaults module [#3397]
>
> - Updates for non-package installations [#6284] [#6590]
>
> - Refactor main server logic [#6473] [#6817]
>
> - Add GitHub Action workflows for clang-tidy and clang-format [#6492] [#6527] [#6573] [#6580] [#6585] [#6586] [#6646] [#6648] [#6681] [#6971] [#6998] [#7058] [#7059] [#7060] [#7108] [#7109] [#7139] [#7140] [#7141] [#7217]
>
> - Merge filesystem.tpp and filesystem.hpp [#6507] [#6745] [#6746]
>
> - Remove .gitmodules [#6517]
>
> - Provide facility for unit tests to link object libraries [#6538]
>
> - Reorganize to not package private headers [#6545]
>
> - Update icommands package dependencies [#6564]
>
> - Update administration libraries [#6592] [#6665]
>
> - Refactor administration libraries to throw exceptions [#6619] [#6701]
>
> - Refactor const stringview reference [#6621]
>
> - Refactor client_api_allowlist interface [#6639]
>
> - Enabled test_auth suite working with PAM [#6693]
>
> - Put base64 methods into irods namespace [#6716]
>
> - Compile server and icommands against the same C++ standard [#6725]
>
> - Fixes for topology testing [#6956] [#7000]
>
> - Beginning work on GCC builds [#6974]
>
> - Refactor getting resource parent name and id [#7029]
>
> - Fix for unicode in test output [#7063]
>
> - Fixes for PAM authentication tests [#7102] [#7120]
>
> - Create C++ project template for resource plugins [#7131]
>
> - Refactor parameter order for resource functions in lib.py [#7152]
>
> - Refactor session signature to be stored in RcComm [#7192] [#7193]
>
> - Fixes for unit tests [#7206] [#7208] [#7289]
>
> - Refactor apiPackTable.h to api_pack_table.hpp [#7228]
>
> - Fix for upgrades of older VERSION files [#7239]
>
> - Upgrade boost dependency to 1.81 [#7247]
>
> - Restore odbc dependency [#7249]
>
> - Perform CMake consistency sweep [#7263]
>
> - Split tests into multiple classes [#7325]
>
> - Relax CMake iRODS version matching for find_package [#7364]
>
> **Deprecated**
>
> - Deprecated SimpleQuery [#6638]
>
> **Removed**
>
> - Remove unused pyparsing python module [#6536]
>
> - Remove setup logic for rsyslog and logrotate [#6598]
>
> - Remove rule_texts_for_tests.py [#6677]
>
> - Remove logic for log_level from startup script [#6816]
>
> - Remove Kerberos from documentation [#7357]
>
> - Remove GSI from documentation [#7358]


Alongside the core packages included in 4.3.1, the following plugins have been updated for compatibility:

- irods-microservice-plugins-curl
- irods-resource-plugin-s3
- irods-rule-engine-plugin-audit-amqp
- irods-rule-engine-plugin-logical-quotas
- irods-rule-engine-plugin-metadata-guard
- irods-rule-engine-plugin-python
- irods-rule-engine-plugin-unified-storage-tiering

In addition, the following client has been updated for compatibility:

- irods-gridftp-client
