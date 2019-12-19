Title: iRODS 4.2.7 is released
Date: 2019-12-19 11:00
Author: Terrell Russell
Slug: irods-4-2-7-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.2.7.

This release includes a number of enhancements to iRODS internals to lay the groundwork for upcoming refactoring including a new irods::query_builder library, a unit test framework, and a general purpose msiModAVUMetadata() microservice.  The bugfixes include attention to polishing the other recent libraries, large tar and zip file extraction, ticket access, upgrading with Oracle, and the Python Rule Engine Plugin.

This release consists of [46 commits from 9
contributors](https://github.com/irods/irods/compare/4.2.6...4.2.7) and
[closed 58 issues](https://github.com/irods/irods/issues?q=milestone%3A4.2.7).

The latest binary packages for CentOS7 and Ubuntu16 are available at <https://packages.irods.org/>.

<!--more-->

[The release notes include](https://docs.irods.org/4.2.7/release_notes/):

> **Enhancements**
>
> - Prepare for Dockerized CI [\#3475] [\#4471] [\#4555] [\#4579]
>
> - Update irods::filesystem library [\#3973]
>
> - Add Unit Testing Framework [\#4072]
>
> - Extend irods::hierarchy_parser [\#4487]
>
> - Add support for row offset in irods::query_iterator [\#4488]
>
> - Add S3 error codes [\#4517]
>
> - Add new msiModAVUMetadata() for setting/modifying full AVU [\#4521]
>
> - Add transfer of ownership of connections via irods::connection_pool [\#4566]
>
> - New irods::query_builder library [\#4574]
>
> **Bug Fixes**
>
> - Fix for resource listing in ils [\#1051]
>
> - Fix for special handling of characters in logical paths [\#3060] [\#4060] [\#4467]
>
> - Marked as resolved/invalid [\#3623] [\#3826] [\#4358] [\#4427] [\#4491] [\#4502] [\#4536] [\#4565] [\#4584] [\#4593]
>
> - Fix for itrim exit codes [\#4188]
>
> - Marked as workaround and question answered [\#4077] [\#4496]
>
> - Fix for msiTarFileExtract for large files [\#4118]
>
> - Fix for invalid client irodsProt value handling [\#4130]
>
> - Fix for irmdir -p [\#4153]
>
> - Fix for possible cycles in resource hierarchy [\#4363]
>
> - Fix for ticket access for recursive iget [\#4387]
>
> - Fix for irods::io::dstream basic_data_object_buf segfault [\#4422]
>
> - Fix for irods::io::dstream move semantics [\#4423]
>
> - Fix for irods::io::dstream rdbuf() [\#4424]
>
> - Test for fix for python rule engine plugin statement table exhaustion [\#4438]
>
> - Fix for irods::filesystem to allow update to data object mtimes [\#4441]
>
> - Fix for resc_id population when upgrading on oracle [\#4459]
>
> - Fix for ils -A returning empty permissions [\#4476]
>
> - Fix for irods::filesystem returning all permissions [\#4492]
>
> - Fix for irods::query to allow bind arguments for specific queries [\#4493]
>
> - Fix for ibun to unzip large files [\#4495]
>
> - Fix for testing library [\#4527]
>
> - Refactor of irods::filesystem::get_metadata [\#4532]
>
> - Fix for irods::filesystem::lexically_normal to follow C++17 [\#4534]
>
> - Fix for error handling via PASSMSG [\#4537]
>
> - Fix for ilocate to handle spaces [\#4540]
>
> - Fix for irods::filesystem::get_metadata [\#4542]
>
> - Fix for irods::filesystem::parent_path to follow C++17 [\#4551]
>
> - Fix for irods::filesystem::status during ils across federation [\#4570]
>
> - Fix for irods::query to allow zone hint across federation [\#4573]
>
> - Fix for documentation [\#4589]
>
> - Fix for bytesWritten [\#4598]
>
> - Fix for irods::query_processor [\#4607]
>
> - Fix for irods::query_iterator handling CAT_NO_ROWS_FOUND [\#4617]


Alongside the core packages included in 4.2.7, the following plugins have been upgraded for compatibility:

- irods-auth-plugin-krb
- irods-microservice-plugins-curl
- irods-resource-plugin-s3
- irods-rule-engine-plugin-audit-amqp
- irods-rule-engine-plugin-python
- irods-rule-engine-plugin-storage-tiering
- irods-rule-engine-plugin-unified-storage-tiering
- irods-rule-engine-plugin-update-collection-mtime
