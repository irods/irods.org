Title: iRODS Development Update: May-June 2015
Date: 2015-07-15 14:43
Author: Jason Coposky
Slug: irods-development-update-may-june-2015
Status: published

This is a quick overview of the May-June iRODS Development Team
activities, which were dominated by the iRODS User's Group, our first
training session and a series of point releases for the iRODS 4.1.x
series. I have included an overview of the Technology Working Group's
agendas as well as highlights from release notes.  
<!--more-->

### May TWG

-   Feature Freeze
-   Focus on Federation Testing
-   24 issues left, 15 bugs
-   Coverity Clean, 35 issues left in external libraries
-   CI is in migration to Jenkins
-   HPSS, WOS, S3 updated for 4.1, staggered releases
-   Post an Engineering Preview for Community Testing
-   Open call for suggestions for 4.2

### June TWG

-   Mime Types
    -   Can be expanded into an "info type"
-   Persistent Identifiers
    -   Need metadata ACLs
    -   Cannot work at scale (100k data objects)
    -   Needs to support many types (DOI is not the only type)
    -   Each deployment / user may have their own policies
    -   Users may need to request one which is applied by iRODS
        and Maintained
-   Notifications
    -   Leverage the upcoming Message Bus
    -   Need to standardize interface / message payload
-   Expanded User definition
    -   RDF VCard
    -   Leverage an external service vs. a new table in iRODS
    -   Need to support Friends, Groups, etc
    -   Integration with existing institutional systems
    -   Cannot share across a Federation, how do we cross the Zones?
-   Stability vs. New Features
-   Quota per user for concurrent connections
    -   Rules Fired
    -   System wide and granular control
    -   Need a list of users with in-flight processes

### May Development Activities

#### 58 Issues Closed

-   43 bugs
-   5 enhancements
-   1 testing
-   4 documentation
-   1 packaging

#### [Release iRODS 4.1](http://irods.org/2015/05/irods-4-1-0-is-released/)

**Notable Features**

-   Configuration Management – All configuration files are now JSON and
    schema-backed.
    -   Validated Configuration – JSON files are validated against
        repository of versioned schemas during server startup.
    -   Reduced Magic Numbers – Some previously hard coded settings have
        been moved to server\_config.json
    -   Integrated izonereport – Produce validated JSON about every
        server in the Zone. Useful for debugging and for deployment.
-   Control Plane – New functionality for determining status and
    grid-wide actions for pause, resume, and graceful shutdown.
-   Weighted Passthru Resource Plugin – A passthru resource can now
    manipulate its child resource’s votes on read and write.
-   Atomic iput with metadata and ACLs – Add metadata and ACLs as soon
    as data is at rest and registered
-   Key/Value passthru to resource plugins – Can influence resource
    behavior via user-provided parameters
-   A client hints API to get server configuration information for
    better user-facing messages
-   Allow only TLS 1.1 and 1.2
-   Dynamic PEP result can halt operation on failure, providing better
    policy flow control
-   Unified documentation – Markdown-based and automatically generated
    by MkDocs, hosted at https://docs.irods.org
-   Continuous Testing
    -   Automated Ansible-driven python topology suite, including SSL
    -   Federation with 3.3.1, 4.0.3, and 4.1.0
    -   Well-defined C API for developers

**Notable Bug Fixes**

-   Coverity Clean – Fixed over 1100 identified bugs related to memory
    management, error checking, dead code, and other miscellany.
-   Many permission inconsistencies ironed out
-   Parallel transfer works in multi-homed networked situations, had
    been resolving IP too early
-   irsync sending only updated files
-   Zip files available via ibun
-   Zero-length file behavior is consistent
-   Delayed rules running correctly
-   Removed built-in PostgreSQL DB Vacuum functionality
-   Removed boot user from install script
-   Removed “run\_server\_as\_root” option
-   Removed roles for storageadmin, domainadmin, and rodscurators
-   Removed obfuscation (SIDKey and DBKey)

### June Development Activities

In addition to the [iRODS User's Group
Meeting](http://irods.org/ugm2015/) and the associated
[training](http://irods.org/ugm2015/training/) (workbook found
[here]({static}/uploads/2015/06/GettingStartedwiRODS4.1.pdf)),
the development team has released as series of point releases given
community feedback.

#### 32 Issues Closed

-   20 bugs
-   2 enhancements
-   3 documentation
-   7 miscellaneous

#### [Release iRODS 4.1.1](http://irods.org/2015/06/irods-4-1-1-is-released/)

-   Hardening of upgrade process against bad input
    [[\#2725](https://github.com/irods/irods/issues/2725)]
    [[\#2727](https://github.com/irods/irods/issues/2727)]
-   Fix for incomplete development package
    [[\#2724](https://github.com/irods/irods/issues/2724)]
-   Fix for removing package-manager-marked config files
    [[\#2723](https://github.com/irods/irods/issues/2723)]

#### [Release iRODS 4.1.2](http://irods.org/2015/06/irods-4-1-2-is-released/)

-   information leakage in izonereport
    [[\#2732](https://github.com/irods/irods/issues/2732)]
-   misuse of uid for gid in configuration conversion script
    [[\#2733](https://github.com/irods/irods/issues/2733)]
    [[\#2734](https://github.com/irods/irods/issues/2734)]
-   documentation tweaks
-   test tweaks

#### [Release iRODS 4.1.3](http://irods.org/2015/06/irods-4-1-3-is-released/)

-   Fix upgrading with obfuscated password
    [[\#2749](https://github.com/irods/irods/issues/2749)]
-   Fix imeta query comparison bug
    [[\#2748](https://github.com/irods/irods/issues/2748)]
-   Fix for cleaning up temporary files during installation
    [[\#2745](https://github.com/irods/irods/issues/2745)]
-   Run-in-Place installations
    -   Fix preflight checks
        [[\#2744](https://github.com/irods/irods/issues/2744)]
    -   Fix for stopping server and killing processes
        [[\#2746](https://github.com/irods/irods/issues/2746)]
    -   Fix for finding database binary tool
        [[\#2747](https://github.com/irods/irods/issues/2747)]

