Title: iRODS 4.3.2 is released
Date: 2024-05-02 12:00
Author: Terrell Russell
Slug: irods-4-3-2-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.3.2.

This release represents preparation for work on 5.0.0 and important bug fixes for the 4.3 series.

Most significantly, this release includes the new GenQuery2 parser and new iCommand `iquery`.  For anyone already running the unreleased GenQuery2 API plugin packages, please note that an upgrade will halt and report a conflict with 4.3.2.  Please uninstall the separate package before upgrading to 4.3.2.

Other notable inclusions are fixes for keyword combinations and bad inputs, a number of documentation additions, and a few new deprecation declarations.

This release consists of [125 commits from 7 contributors](https://github.com/irods/irods/compare/4.3.1...4.3.2) and [closed 154 issues marked for 4.3.2](https://github.com/irods/irods/issues?q=milestone%3A4.3.2).

The latest binary packages for CentOS7, AlmaLinux8, RockyLinux9, Ubuntu20, Ubuntu22, Debian11, and Debian12 are available at <https://packages.irods.org/>.

<!--more-->

[The release notes include](https://docs.irods.org/4.3.2/release_notes/):

> **Enhancements**
>
> - Add GenQuery2 parser to the server [#3064] [#3886] [#4069] [#5727] [#5734] [#6168] [#6393] [#7570]
>
> - Add replica_truncate API and microservice [#7104] [#7577] [#7650]
>
> - Add support for local mariaDB as database [#7345] [#7469] [#7484] [#7528]
>
> - Add new rule engine serializations [#7413] [#7552] [#7553]
>
> **Bug Fixes**
>
> - Marked as resolved/invalid/question [#2916] [#4125] [#4200] [#5325] [#5635] [#5726] [#5753] [#5912] [#6481] [#6521] [#7121] [#7360] [#7378] [#7407] [#7409] [#7419] [#7420] [#7436] [#7438] [#7441] [#7522] [#7574]  [#7634] [#7647] [#7692] [#7711]
>
> - Fixes for segfaults [#2932] [#7027] [#7319]
>
> - Fix for irsync and broken symlinks [#5359]
>
> - Fix for msiDataObjChksum documentation [#6435]
>
> - Fix for iscan help text [#6369]
>
> - Fixes for quota help text [#6369]
>
> - Fix for icp -f -R when overwriting [#6497]
>
> - Fix for documentation about symlink support [#6656]
>
> - Marked as duplicate [#6837]
>
> - Fixes for setting iCommands spOption for ips [#7376] [#7470]
>
> - Fix for rmuser and rmgroup entanglement [#7380]
>
> - Fix for copy_data_object copy_options [#7443]
>
> - Fixes for resultant intermediate status [#7444] [#7465]
>
> - Fix to prevent removal of last replica during trim [#7468] [#7515]
>
> - Fix for tar format to use pax format [#7474]
>
> - Fix for writes to prefer good replicas [#7476]
>
> - Fix for double free in rsDataObjRepl [#7540]
>
> - Fix for proxied groupadmin to be able to make groups [#7576]
>
> - Fix for consumer setup without local resource [#7590]
>
> - Fix for parsing bad message during initialization [#7614]
>
> - Fix for graceful shutdown of agents [#7619]
>
> - Fix for modifying metadata with both ADMIN_KW and ALL_KW [#7626]
>
> - Fix for irodsServerMonPerf bad path checking [#7652]
>
> - Fix for noisy logging for unknown log levels [#7687]
>
> - Fix for iadmin modrepl syntax documentation [#7695]
>
> - Fix for icd help text [#7706]
>
> **Documentation**
>
> - Document PAM settings [#4904]
>
> - Document multiple transfer threads [#5701]
>
> - Document irule rule text limitation [#6223]
>
> - Document iRODS error codes [#6631]
>
> - Document unattended installation's overwrite behavior [#6719]
>
> - Document voting and resource hierarchy resolution [#6940]
>
> - Document writeLine [#7388] [#7630]
>
> - Update dynamic PEPs listing [#7385] [#7575]
>
> - Document get/set_grid_configuration subcommands [#7503]
>
> - Document performance paper link [#7391]
>
> - Document sql logging warnings [#7393]
>
> - Document force removal option [#7421]
>
> - Document process for reporting security vulnerabilities [#7618]
>
> - Document IRODS_ENVIRONMENT_FILE and icd [#7705]
>
> **Refactors / Packaging / Build / Test**
>
> - Update to doxygen dependencies [#2024]
>
> - Fixes to intermittent tests [#2634] [#6440] [#6441] [#7243] [#7372] [#7373] [#7374] [#7389] [#7390] [#7453] [#7454] [#7455] [#7457] [#7510] [#7511] [#7521]
>
> - Add test for pam_password_max_time [#3742] [#4198] [#5096]
>
> - CMake updates [#6214] [#6251] [#6256] [#7398] [#7506] [#7507] [#7509] [#7512] [#7523] [#7524] [#7542] [#7546] [#7549]
>
> - Fix for deprecated signing key algorithm for packages.irods.org [#7349]
>
> - Fixes for curl dependencies [#7371] [#7435]
>
> - Fix for chkconfig in rpm dependencies [#7437]
>
> - Fix for super in package dependencies [#7525]
>
> - Update iRODS versioning process [#7531] [#7532] [#7548]
>
> - Update development package dependencies [#7545]
>
> - Make find_replica a member function of data_object_proxy [#7556]
>
> - Add .clang-format file to iCommands repository [#7585]
>
> - Update naming scheme for feature test macros [#7636]
>
> - Update clang-tidy configuration [#7637]
>
> **Deprecated**
>
> - Deprecate msiSendMail [#3660] [#7293] [#7562] [#7651]
>
> - Deprecate support for RBUDP [#6610]
>
> - Deprecate support backup mode and BACKUP_RESC_NAME_KW [#6953]
>
> - Deprecate wildcard listing for imeta (lsw) [#7488]
>
> - Deprecate trim --age keyword (AGE_KW) [#7498]
>
> - Deprecate trim number of replicas to keep (-N) [#7502]
>
> - Deprecate --link, add --ignore-symlinks [#7537]
>
> - Deprecate GeneralUpdate API [#7554]
>
> - Deprecate rcDataObjTruncate [#7555]
>
> - Deprecate msiSetResource [#7602]
>
> **Removed**
>
> - Document removal of old irule --test [#6224]
>
> - Remove resolveHostByDataObjInfo declaration [#7418]
>
> - Remove recursive pre-scan output [#7516]
>
> - Remove Ubuntu 18.04 as supported platform [#7519]


Alongside the core packages included in 4.3.2, the following plugins have been updated for compatibility:

- irods-microservice-plugins-curl
- irods-resource-plugin-s3
- irods-rule-engine-plugin-audit-amqp
- irods-rule-engine-plugin-elasticsearch
- irods-rule-engine-plugin-indexing
- irods-rule-engine-plugin-logical-quotas
- irods-rule-engine-plugin-metadata-guard
- irods-rule-engine-plugin-python
- irods-rule-engine-plugin-unified-storage-tiering

In addition, the following client has been updated for compatibility:

- irods-gridftp-client
