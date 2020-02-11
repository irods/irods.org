Title: iRODS Development Update: February 2020
Date: 2020-02-11 15:00
Author: Terrell Russell
Slug: irods-development-update-february-2020
Status: published


This update is coming to you a big quicker than normal.  The number of irons in the fire continues to increase, and the TWG list was drifting from the development update list.  Our Technology Working Group met earlier this week, and so by writing the monthly development update now, we hope to keep things a bit more in sync.

New work this month has focused on some core libraries and functionality.  The Metadata Guard Policy Engine will allow for the protection of metadata from edits or prying eyes, even on data that is visible to others in iRODS.  Working in concert with other policy engines, it can provide a system-level namespace for policy-driving metadata (aka "irods::" by default).  We've introduced a new user and group library to handle the most common interfaces for user management.  The irodsReServer (soon to be renamed the irodsDelayServer) is being refactored again to use a connection pool and to honor any changes in the `server_config.json` on a live system.  This will allow a much more efficient use of client-server and database connections on a system under load.

The Python Rule Engine Plugin has received some attention for its query interface and will now provide more options from GenQuery to rules written in Python.  Thanks to Utrecht University's Chris Smeele for these additions.

Policy Composition is now fully realized and the Storage Tiering Capability has been written for the fourth time (perhaps the last?) to be a composition of multiple C++ policy engines working together.  It is composed of data_movement, data_replication, data_verification, data_retention, access_time, and query_processor.  It can be invoked synchronously or asynchronously.  Other rule engine plugins will be refactored in the same way moving forward and we expect this approach to provide significant ease of maintenance as well as fewer bugs.  Next week's TRiRODS meetup will cover this topic in detail and will be recorded and shared at [https://irods.org/trirods](https://irods.org/trirods).


### February Technology Working Group

- [4.2.8](https://github.com/irods/irods/milestone/33)

    - 200 issues, 120 bugs
    - new user/group library
    - intermediate replicas
    - delay execution server with connection pool
    - atomic metadata api plugin
    - proxy objects for old c-style structures
    - add showCollAcls on upgrade
    - all new externals (clang8, cmake3.15, etc.)

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 111 issues, 42 bugs
    - clang format
    - new logger (rsyslog or stdout)
    - irodsDelayServer refactoring / with implicit remote()
    - Ubuntu18 will be supported
    - CentOS8 will be supported

- Metadata Templates Working Group

    - progress towards SwaggerAPI
    - working towards demo of Metalnx-API-iRODS

- TRiRODS

    - [https://irods.org/trirods](https://irods.org/trirods)
    - Feb 19, 2020 - Jason Coposky
    - Policy Composition: Principles and Practice

- New Development Work

    - Metadata Guard Policy Engine
        - allows metadata to be protected by configuration
        - useful alongside other policy engines

    - User and Group C++ Library
        - factored out standard operations
        - incorporating calls into new plugins and core

    - DelayServer Refactor
        - adding connection pool to reduce overhead

    - Python Rule Engine Plugin
        - incorporating Chris Smeele's Query operator
        - now exposes more options from the native iRODS GenQuery to Python
        - better test suite
        - better documentation
        - removed memory leaks for multiple/looping microservice calls

- Active Development Work

    - Policy Composition
        - second level of the iRODS Data Management Model
        - Capabilities become compositions of C++ policy rule engine plugins
        - configuration stored as JSON in AVUs
        - storage tiering has been broken apart, and rebuilt

    - Plugin Version Numbering
        - working to make all plugin versions consistent
        - IRODS_VERSION.IRODS_PLUGIN_REVISION
        - released AMQP Audit Plugin as v4.2.7.1

    - AWS S3 Lambda
        - needs SSL
        - initial release
            - s3 is a fully decoupled system
            - without ability to convey rename
            - would lose metadata
        - later release
            - could brute-force confirm checksums to detect renames
            - would persist metadata

    - Logical Quotas
        - working to initial release
        - tests almost complete
        - uses new user and group library
        - [https://github.com/irods/irods_rule_engine_plugin_logical_quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)

    - iRODS Hard Links RFC
        - Use case via WinSCP via NFSRODS
            - attempted to use syscall link() for overwrite (client copy-on-write)
        - first implementation soon
        - [https://github.com/irods/irods_rfcs/blob/master/0005_hard_links.md](https://github.com/irods/irods_rfcs/blob/master/0005_hard_links.md)

    - C++-based REST API
        - put/get working, streaming working
        - JWT token auth and tickets working
        - working on packaging
        - part of new Data Transfer Nodes pattern

    - C++ S3 API
        - defined via Swagger
        - uses C++ REST API
        - put/get working
        - part of new Data Transfer Nodes pattern

    - Storage Tiering Capability
        - refactored to use policy composition
        - release soon

    - Python iRODS Client (PRC)
        - awaiting CI
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Cacheless and Detached S3
        - filling out prototype
            - directly connect iRODS parallel dstreams to S3 multi-part upload
            - upload nearly complete
            - download and partial overwrite soon
        - awaiting CI
        - [https://github.com/irods/irods_resource_plugin_s3](https://github.com/irods/irods_resource_plugin_s3)

    - NFSRODS
        - released v0.9.3
        - needs SSL
        - needs Hard Links
        - awaiting CI
        - [https://github.com/irods/irods_client_nfsrods](https://github.com/irods/irods_client_nfsrods)

    - Automated Ingest Capability
        - refactoring to abstract the source filesystem/object
        - investigating splitting storage backends
            - celery workers -> redis
            - python/iRODS cache -> scylla (C++ distributed keystore)
        - [https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)

    - Parallel Transfer Engine
        - based on new dstream operator
        - available via new C++ client library
        - all new transfers within iRODS will use this single method to move data

    - Parallel Filesystem Integration
        - iRODS API plugin
        - have split BeeGFS and Lustre implementations into aggregator and listener
        - testing against known configurations
        
    - Indexing Capability
        - needs more README
        - ready to release for 4.2.7
        - second implementation coming for Apache Solr

    - Publishing Capability
        - needs more README
        - ready to release for 4.2.7

    - Metalnx
        - released v2.1.0
        - removed caching for users/group
            - federation-ready
        - working to eventually remove database dependency
        - testbed for metadata templates initial implementation
        - search and indexing update is very fast
        - want to turn on quotas visibility
        - awaiting CI
        - [https://github.com/irods-contrib/metalnx-web](https://github.com/irods-contrib/metalnx-web)

    - Continuous Integration (CI)
        - moved databases to separate containers
            - Ubuntu 16, Centos 7 vs. PostgreSQL, MySQL, and Oracle
        - adding coverage
            - CockroachDB database plugin
            - Cacheless S3 plugin
            - Ceph RADOS resource plugin
            - CephFS via unixfilesystem
            - QueryArrow database plugin
            - Nestle R Client Library
            - Metalnx
            - baton/tears
            - automated ingest
            - storage tiering
            - publishing
            - indexing
            - NFSRODS
            - collection mtime rule engine plugin

- Background Items

    - SMBRODS project to surface iRODS as SMB
    - CockroachDB Database Plugin
    - Cloud Browser
    - Member Ticketing System

- Discussion
