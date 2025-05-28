Title: iRODS 5.0.1 is released
Date: 2025-05-27 23:00
Author: Kory Draughn
Slug: irods-5-0-1-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 5.0.1.

This patch release addresses an infinite loop in server redirection when hostnames are misconfigured.

This release consists of [5 commits from 2 contributors](https://github.com/irods/irods/compare/5.0.0...5.0.1) and [closed 5 issues marked for 5.0.1](https://github.com/irods/irods/issues?q=milestone%3A5.0.1).

The latest binary packages for RockyLinux9, Ubuntu22, Ubuntu24, and Debian12 are available at <https://packages.irods.org/>.

<!--more-->

[The release notes include](https://docs.irods.org/5.0.1/release_notes/):

> **Fixed**
>
> - Return `SYS_EXCEED_CONNECT_CNT` when server redirects to self due to misconfiguration (#8529).
>
