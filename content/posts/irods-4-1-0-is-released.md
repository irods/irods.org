Title: iRODS 4.1.0 is released
Date: 2015-05-29 16:26
Author: Terrell Russell
Slug: irods-4-1-0-is-released
Status: published

RENCI is pleased to announce iRODS 4.1.0, managed and overseen by the
iRODS Consortium.

iRODS 4.1.0 represents a significant step forward for iRODS technology
as it incorporates a set of new fundamental features and bug fixes.

This release consists of [1745 commits from 8
contributors](https://github.com/irods/irods/compare/4.0.3...4.1.0) and
[closed 377
issues](https://github.com/irods/irods/issues?q=milestone%3A4.1.0).

All the code and current working issues are hosted at GitHub:
<https://github.com/irods/irods>

[The release notes
include](https://docs.irods.org/4.1.0/release_notes/):

> **Notable Features**
>
> -   Configuration Management - All configuration files are now JSON
>     and schema-backed.
>     -   Validated Configuration - JSON files are validated against
>         repository of versioned schemas during server startup.
>     -   Reduced Magic Numbers - Some previously hard coded settings
>         have been moved to server\_config.json
>     -   Integrated izonereport - Produce validated JSON about every
>         server in the Zone. Useful for debugging and for deployment.
> -   Control Plane - New functionality for determining status and
>     grid-wide actions for pause, resume, and graceful shutdown.
> -   Weighted Passthru Resource Plugin - A passthru resource can now
>     manipulate its child resource's votes on read and write.
> -   Atomic iput with metadata and ACLs - Add metadata and ACLs as soon
>     as data is at rest and registered
> -   Key/Value passthru to resource plugins - Can influence resource
>     behavior via user-provided parameters
> -   A client hints API to get server configuration information for
>     better user-facing messages
> -   Allow only TLS 1.1 and 1.2
> -   Dynamic PEP result can halt operation on failure, providing better
>     policy flow control
> -   Unified documentation - Markdown-based and automatically generated
>     by MkDocs, hosted at https://docs.irods.org
> -   Continuous Testing
>     -   Automated Ansible-driven python topology suite, including SSL
>     -   Federation with 3.3.1, 4.0.3, and 4.1.0
>     -   Well-defined C API for developers
>
> **Notable Bug Fixes**
>
> -   Coverity Clean - Fixed over 1100 identified bugs related to memory
>     management, error checking, dead code, and other miscellany.
> -   Many permission inconsistencies ironed out
> -   Parallel transfer works in multi-homed networked situations, had
>     been resolving IP too early
> -   irsync sending only updated files
> -   Zip files available via ibun
> -   Zero-length file behavior is consistent
> -   Delayed rules running correctly
> -   Removed built-in PostgreSQL DB Vacuum functionality
> -   Removed boot user from install script
> -   Removed "run\_server\_as\_root" option
> -   Removed roles for storageadmin, domainadmin, and rodscurators
> -   Removed obfuscation (SIDKey and DBKey)

The released packages are built on the specific platforms and operating
systems RENCI has in Continuous Integration. Other platforms and
operating systems are confirmed to work, but are not officially
supported at this time.

The manual is now incorporated into the documentation directly and can
be found at <https://docs.irods.org/4.1.0/>.

Please send feedback to <info@irods.org>.

**Update:**

[iRODS 4.1.1 is
released](http://irods.org/2015/06/irods-4-1-1-is-released/):

> **Bug Fixes**
>
> -   Hardening of upgrade process against bad input
> -   Fix for incomplete development package
> -   Fix for removing package-manager-marked config files

