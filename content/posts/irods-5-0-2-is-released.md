Title: iRODS 5.0.2 is released
Date: 2025-10-01 23:00
Author: Kory Draughn
Slug: irods-5-0-2-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 5.0.2.

This release adds support for Enterprise Linux 10 and Debian 13. With that comes bug fixes and improvements for `irsync`, GenQuery2, unattended installation, physical quotas, etc.

Important updates regarding the plugins:

- Plugin version numbers now follow three segments instead of four, aligning with semantic versioning (X.Y.Z instead of X.Y.Z.W).
- Plugin versioning is independent of the server version. Keep in mind that package names include the version of the development library used during the build.

The latest binary packages for Enterprise Linux 9, Enterprise Linux 10, Ubuntu 22.04, Ubuntu 24.04, Debian 12, and Debian 13 are available at <https://packages.irods.org/>.

<!--more-->

[The release notes include](https://docs.irods.org/5.0.2/release_notes/):

> **Changed**
> 
> - Update help text for `itouch` and `irepl` to be more explicit (#4687, #8454, #8673).
> - Do not print stacktrace when `irods_environment.json` file is not readable (#8083).
> - Document SIGHUP signal in server binary's help text (#8582).
> - Invoke `fileNotify` when closing replica (#8586, irods/irods_resource_plugin_s3#2146).
> - Detect zombie processes during shutdown and warn the administrator (#8588).
> - Create stored procedures for MySQL using ODBC directly (#8601, #8686).
> - Include access time grid configuration options in help text for `iadmin` (#8630).
> 
> **Fixed**
> 
> - Fix renaming of collections containing multi-byte characters (#6239).
> - Maintain appropriate permissions for `msiExecCmd_bin` directory on package upgrade (#6671).
> - Do not create target collections or directories during dry-run of `irsync` (#7774).
> - Fix `irsync`'s handling of `ALL_KW` when targeting a single data object (#8295).
> - Limit max value of `maximum_size_for_single_buffer_in_megabytes` for DataObjGet API (#8373).
> - Improve `irsync`'s handling for checksum errors (#8384).
> - Fix GenQuery2's ability to find objects lacking user permissions (#8546).
> - Do not prompt for server's FQDN, hostname, or IP during unattended installation (#8577).
> - Define `IRODS_EXTERNALS_FULLPATH_JSONCONS` variable in CMake configuration (#8581).
> - Fix help text for `igroupadmin` (#8583).
> - Fix `irsync`'s handling of overwrites and checksums involving stale replicas (#8590).
> - Show correct help text for `iadmin h <subcommand>` (#8597).
> - Remove all existing usage entries when recalculating physical quotas (#8633).
> - Make `imiscsvrinfo` report an error when connected to a server older than 4.3.4 (#8653).
> - Do not stacktrace on detection of server downgrade (#8676).
> - Do not invoke SysV init commands in packaging-related scripts (#8684).
> 
> **Added**
> 
> - Add support for Enterprise Linux 10 (#8099, #8454).
> - Add support for Debian 13 (#8596).
> 
> [Full GitHub commit history for the iRODS server](https://github.com/irods/irods/compare/5.0.1...5.0.2)<br />
> [Full GitHub commit history for the iCommands](https://github.com/irods/irods_client_icommands/compare/5.0.1...5.0.2)
