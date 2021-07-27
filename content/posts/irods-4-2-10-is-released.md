Title: iRODS 4.2.10 is released
Date: 2021-07-27 15:00
Author: Terrell Russell
Slug: irods-4-2-10-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.2.10.

This release includes a few bugfixes, most importantly a fix for a 32bit value which limited downloads to files smaller than 2GB.

This release consists of [11 commits from 5
contributors](https://github.com/irods/irods/compare/4.2.9...4.2.10) and
[closed 14 issues](https://github.com/irods/irods/issues?q=milestone%3A4.2.10).

The latest binary packages for CentOS7, Ubuntu16, and Ubuntu18 are available at <https://packages.irods.org/>.

<!--more-->

[The release notes include](https://docs.irods.org/4.2.10/release_notes/):

> **Enhancements**
>
> - Updates to CMake build system [#5220]
>
> - Limit redirection in data_object_finalize [\#5689]
>
> **Bug Fixes**
>
> - Marked as resolved/invalid [\#2060] [\#5171] [\#5718] [\#5730] [\#5747]
>
> - Fixes for spelling errors [\#5698]
>
> - Fixes for uninitialized bytesBuf structs [\#5699]
>
> - Fix for 32bit limitation in rsDataObjRead() chunking [\#5709]
>
> - Fix for correctly setting buffer length on zero-length gets [\#5723]
>
> - Fix for removing C++ header from C-only API [\#5731]
>
> - Fix to prevent use of already-released L1 descriptor [\#5744]


Alongside the core packages included in 4.2.10, the following plugins have been upgraded for compatibility:

- irods-auth-plugin-krb
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
