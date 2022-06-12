Title: iRODS 4.3.0 is released
Date: 2022-06-12 17:00
Author: Terrell Russell
Slug: irods-4-3-0-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.3.0.

This release represents a very significant, five-and-a-half-year effort since our last point-0 release.  4.2.0 was released in November 2016 and included the pluggable rule engine and the CMake build system.  We've done a lot more this time around.

Notable updates include:

 - Python3 Compliance - All control scripts and the Python Rule Engine Plugin are now Python3 only.  Please test any existing Python rules before upgrading.

 - Expanded 10-level Permission Model - Up from the 4-level model (null, read, write, own), this new model exposes additional nuance and provides separate levels for metadata and data objects.

 - New Authentication Plugin Framework - Pushed by the need for an interactive PAM plugin to handle two-factor authentication scenarios, this framework's flow is now plugin driven and flexible.

 - New rsyslog-based Logging Framework - The new structured logs are JSON and can be easily consolidated from many servers through syslog configuration.  Independent log levels exist for different parts of the server and plugin codes.

 - New Delay Server Implementation - The delay server has been refactored with the connection_pool and irods::thread_pool to service the delay queue in both a parallel and distributed manner.  Multiple iRODS servers can be defined as eligible to execute the enqueued rules which will be distributed randomly at runtime.

 - Delay Server Migration - The delay server can be moved from one machine to another within a Zone without any restarts.  This gives administrators flexibility when the system is under continuous load.

 - New support for Ubuntu20, Almalinux8, and Debian11 - Three additional operating systems expand an administrator's options.

This release consists of [1482 commits from 32 contributors](https://github.com/irods/irods/compare/4.2.0...4.3.0)
and [closed 306 issues marked for 4.3.0](https://github.com/irods/irods/issues?q=milestone%3A4.3.0) and [an additional
41 closed issues to be included in the upcoming 4.2.12 release](https://github.com/irods/irods/issues?q=milestone%3A4.2.12%20closed%3A%3C%3D2022-06-12).

The latest binary packages for CentOS7, AlmaLinux8, Ubuntu18, Ubuntu20, and Debian11 are available at <https://packages.irods.org/>.

<!--more-->

[The release notes include](https://docs.irods.org/4.3.0/release_notes/):

> **Enhancements**
>
>  - Expose 10-level Permission Model [#844] [#3106] [#5276] [#5277]
>
>  - Modify resource tools [#1656]
>
>  - Add Python3 compliance [#2037] [#4951] [#5356] [#5825] [#6069] [#6114] [#6294] [#6310] [#6349] [#6413]
>
>  - Implement Indexing capability [#2065]
>
>  - iexit removes credential file [#2082]
>
>  - Add rsyslog Logging Framework [#2112] [#2684] [#2730] [#3131] [#3132] [#3326] [#3479] [#3483] [#3602] [#4239] [#4295] [#4310] [#4356] [#4365] [#4382] [#4703] [#5225] [#6077] [#6132] [#6308]
>
>  - iCommands run in Windows Subsystem for Linux [#2121]
>
>  - Add recursive option to ireg [#2919]
>
>  - New Delay Server Implementation [#2924] [#3399] [#3993] [#4292] [#4344] [#4736] [#5169] [#5258] [#5893] [#6328] [#6337] [#6425]
>
>  - Consolidate server_config.json [#6315] [#4012] [#5924] [#5930] [#6137] [#6160] [#6288] [#6305] [#6306] [#6307] [#6326] [#6329]
>
>  - Clean up core.re.template and cpp_default_policy [#3373]
>
>  - Implement new Authentication Plugin Framework [#3445] [#5093] [#5479]
>
>  - Change default SSL policy to CS_NEG_REFUSE [#3461]
>
>  - Modernize to C++17 and C++20 [#4074] [#6085] [#6177]
>
>  - Externalize dstream layer [#4316]
>
>  - Add support for High Availability during setup [#4381]
>
>  - Add irodsctl options [#4418] [#4472]
>
>  - Add implicit remote() to delayed rule execution [#4429]
>
>  - Add support for Ubuntu20 [#4883] [#5174] [#5246] [#6080]
>
>  - Add child process monitoring and restart (cron) [#4947] [#4977] [#5007] [#6014] [#6116] [#6117] [#6336] [#6429]
>
>  - Add Delay Server Migration [#5249] [#6357]
>
>  - Add atomic API endpoint for catalog operations [#5324] [#5481]
>
>  - Add server configuration service endpoint [#5602]
>
>  - Add atomic update for parent of resource [#5934]
>
>  - Add support for AlmaLinux8 [#6021] [#6039] [#6079]
>
>  - Add function for setting a client's ips name [#6338]
>
>  - Add support for Debian11 [#6360]
>
> **Bug Fixes**
>
>  - Marked as resolved/invalid/question/wontfix [#887] [#1033] [#1147] [#1581] [#2166] [#2205] [#2393] [#2594] [#2938] [#3071] [#3093] [#3107] [#3228] [#3381] [#3410] [#3417] [#3424] [#3456] [#3592] [#3612] [#3797] [#3827] [#3830] [#3836] [#3845] [#4229] [#4482] [#4522] [#4720] [#5482] [#6269] [#6270] [#6303] [#6314] [#6394]
>
>  - Better error messages [#1721] [#2960] [#3035] [#3500] [#5028] [#5975]
>
>  - Fixes for symlink behavior [#2053] [#3061]
>
>  - Fix for imeta [#2390]
>
>  - Fix for iinit [#2590]
>
>  - Fix for restarting a get [#2660]
>
>  - Fix for iCommands return codes [#2822]
>
>  - Fix for imv [#2879]
>
>  - Fix for federation [#3136]
>
>  - Fixes and tests for ichksum [#3322] [#3533]
>
>  - Fix for graceful shutdown [#3333]
>
>  - Fix for _comm before checking PEPs [#3401]
>
>  - Fixes for GenQuery [#3404] [#3406]
>
>  - Fix for ticket usage [#3426]
>
>  - Marked as duplicate [#3443]
>
>  - Fix for unchecked error in resolve_resource_hierarchy [#3655]
>
>  - Fix for RODS_CLERVER macro [#4273]
>
>  - Fix for JSON handling [#4511]
>
>  - Fixes for irods::filesystem [#4525] [#5027]
>
>  - Fix for connection pools [#4834]
>
>  - Fix for triggering the correct PEPs [#5830]
>
>  - Fix for database connection default [#5935]
>
>  - Fix for initial group creation [#6063]
>
>  - Fix for proc files cleanup [#6231]
>
>  - Fix for SQL function sequence error for identical AVU [#6409]
>
> **Refactors / Packaging / Build / Test**
>
>  - Use uint64_t [#1703]
>
>  - Add libcurl3-gntls for Debian [#2382]
>
>  - Federation testing [#2599]
>
>  - SSL testing [#2742]
>
>  - Support non-package-install [#3202] [#3394] [#3462] [#3680]
>
>  - Support new testing environment [#3242] [#3959]
>
>  - Update externals [#3266] [#4274] [#4810] [#4856] [#5713] [#6071] [#6076] [#6081] [#6083] [#6084] [#6086] [#6093] [#6147] [#6148] [#6149] [#6173] [#6178] [#6240] [#6322]
>
>  - Refactor shared libraries [#3272] [#6141]
>
>  - Relocate server socket files [#3380]
>
>  - Optimize memory usage [#3423] [#3711] [#3727] [#3743] [#3940] [#4002] [#4213] [#4287] [#4803] [#4805] [#5781] [#5905]
>
>  - Update iCommands builds [#3446] [#6120]
>
>  - Improve CMake usage and packaging [#3469] [#3473] [#4317] [#6065] [#5669] [#5712] [#5875] [#5910] [#5966] [#6054] [#6056] [#6098] [#6103] [#6104] [#6130] [#6211] [#6215] [#6216] [#6217] [#6218] [#6226] [#6236] [#6257] [#6300] [#6309] [#6334] [#6351] [#6352] [#6353] [#6383] [#6386] [#6392] [#6423] [#6432]
>
>  - Setup clang-format [#3917]
>
>  - Improve irods development environment [#4182] [#5300]
>
>  - Move to nlohmann/json, remove jansson library [#4234]
>
>  - Add or improve tests [#4278] [#4283] [#4345] [#4359] [#4531] [#4556] [#6092] [#6228] [#6414]
>
>  - Use more inclusive language [#5926]
>
>  - Reimplement irods_stacktrace with Boost.Stacktrace [#6133]
>
>  - Refactor iCommands tarball packager [#6276]
>
>  - Refactor shared memory functions [#6290] [#6346]
>
>  - Update unattended installation mechanism [#6330]
>
>  - Streamline GitHub Actions [#6362]
>
>  - gitignore removed submodule directory [#6372]
>
>  - Update tests for new platforms [#6437]
>
> **Deprecated**
>
>  - Mark as deprecated all static policy enforcement points (PEPs) [#5951]
>
>  - Mark as deprecated imeta adda [#6187]
>
>  - Mark as deprecated imeta addw [#6416]
>
>  - Mark as deprecated imeta rmw [#6417]
>
> **Removed**
>
>  - Remove XMsgServer [#1449] [#3728] [#3729]
>
>  - Remove Database Resources [#1981]
>
>  - Remove irodsFs implementation [#2275] [#2680] [#2710] [#3103] [#3363]
>
>  - Remove messaging schema submodule [#2768]
>
>  - Remove support for Ubuntu14 and Ubuntu16 [#3185]
>
>  - Remove resolveHostByDataObjInfo [#3474]
>
>  - Remove iphybun [#3603]
>
>  - Remove roundrobin coordinating resource [#3779]
>
>  - Remove iexecmd [#4186]
>
>  - Handle EOL API numbers [#4202]
>
>  - Remove unused rule submit tags [#4276]
>
>  - Remove audit trails [#4337]
>
>  - Remove msiSetMultiReplPerResc [#4408]
>
>  - Remove msiSetRescSortScheme [#4409]
>
>  - Remove iCommands as installation dependency [#4446]
>
>  - Remove user quota functionality [#4481]
>
>  - Remove deprecated rules and microservices [#4659] [#5441]
>
>  - Remove deprecated -U option from irm [#4681]
>
>  - Remove deprecated num_repl keyword from replication resource [#4775]
>
>  - Remove server dependency on irods-grid [#5978] [#6265]
>
>  - Remove default_log_rotation_in_days from configuration [#6304]
>
>  - Remove deprecated -n option from irm [#6340]
>
>  - Remove plaintext password option for iinit [#6382]


Alongside the core packages included in 4.3.0, the following plugins have been upgraded for compatibility:

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
