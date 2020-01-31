Title: iRODS Development Update: January 2020
Date: 2020-01-31 15:00
Author: Terrell Russell
Slug: irods-development-update-january-2020
Status: published

How is it already 2020?  As our development pace continues to quicken, it seems the time passes more quickly, too.

We've had three releases since last month's update.  [NFSRODS 0.9.3](https://github.com/irods/irods_client_nfsrods) brought stability to the NFS mount point with better connection handling to the iRODS server and the beginnings of a bats-based test suite.  [Metalnx 2.1.0](https://github.com/irods-contrib/metalnx-web) was released and provides better group management facilities and well-tested Federation behavior.  The [iRODS AMQP Audit plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp) was released as version 4.2.7.1 to fix a compatibility issue.  It also introduced a four-digit numbering scheme.  As our plugins are still tied to a specific version of the server, we have adopted a 'revision' number for the plugin that will be appended to its compatible three-digit iRODS server version.  The next server release will be accompanied by four-digit versions of all the supported plugins. 
 
Core development has continued with a new user and group library and last year's intermediate replica code being merged soon.  The S3 plugin is now using the new dstream library and should provide a significant performance increase for uploads directly to S3.  Storage Tiering is also being refactored and separated into multiple policy plugins.  We'll talk more about that at [February's TRiRODS talk](https://irods.org/trirods) which will be recorded and made available shortly afterwards.

Our CI project to provide existing functionality via Docker has turned a corner.  The iCAT database has been separated into its own container which allows us to begin providing a compatibility matrix with multiple versions of supported databases.  We are interested in others standing up and running the test framework themselves.  Please get in touch if you'd like to provide some additional confidence to the community.


### January Technology Working Group

- [4.2.7](https://github.com/irods/irods/milestone/32)

    - Released Dec 19, 2019

- [4.2.8](https://github.com/irods/irods/milestone/33)

    - 186 issues, 113 bugs
    - intermediate replicas
    - atomic metadata api plugin
    - proxy objects for old c-style structures
    - add showCollAcls on upgrade
    - all new externals (clang8, cmake3.15, etc.)

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 109 issues, 42 bugs
    - clang format
    - new logger (rsyslog or stdout)
    - irodsDelayServer refactoring / with implicit remote()
    - Ubuntu18 will be supported
    - CentOS8 will be supported

- TRiRODS

    - [https://irods.org/trirods](https://irods.org/trirods)
    - Feb 19, 2020 - Topic / Presenter TBD

- New Development Work

    - Policy Composition
        - second level of the iRODS Data Management Model
        - Capabilities become compositions of C++ policy rule engine plugins
        - configuration stored as JSON in AVUs
        - refactoring storage tiering first

    - Plugin Version Numbering
        - working to make versions consistent
        - IRODS_VERSION.IRODS_PLUGIN_REVISION
        - audit amqp released as 4.2.7.1 on Jan 9

- Active Development Work

    - AWS S3 Lambda
        - to send push updates from S3 to iRODS
        - initial release
            - s3 is a fully decoupled system
            - without ability to convey rename
            - would lose metadata
        - later release
            - could brute-force confirm checksums to detect renames
            - would persist metadata

    - Logical Quotas
        - working to initial release
        - needs tests
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
        - refactoring to use policy composition
            - query_processor
                - data_movement
                    - data_replication
                    - data_verification
                    - data_retention
                - data_restage
                    - same as data_movement, but different configuration
            - access_time

    - Python iRODS Client (PRC)
        - added 'in' clause to genquery operator
        - fix queries for multiple AVUs of the same name
        - allow genquery on metadata create and modify times
        - more examples in the README
        - awaiting CI
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Cacheless and Detached S3
        - completed proof-of-concept test with locking circular buffer
            - demonstrated 1Gbps writes into CephFS
            - limited by speed of local disk read
        - new prototype
            - directly connect iRODS parallel dstreams to S3 multi-part upload
            - will include non-blocking IO
        - awaiting CI
        - [https://github.com/irods/irods_resource_plugin_s3](https://github.com/irods/irods_resource_plugin_s3)

    - NFSRODS
        - released v0.9.2
        - fixed connection cleanup
        - generated Hard Links RFC
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
        - removed caching for users/group
            - federation-ready
        - working to eventually remove database dependency
        - testbed for metadata templates initial implementation
        - search and indexing update is very fast
        - want to turn on quotas visibility
        - awaiting CI
        - [https://github.com/irods-contrib/metalnx-web](https://github.com/irods-contrib/metalnx-web)

    - Continuous Integration (CI)
        - refactored to use Docker
            - backfilling pre-Docker coverage
        - powered the 4.2.7 release
        - moving databases to separate containers
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

    - Python Rule Engine Plugin
    - SMBRODS project to surface iRODS as SMB
    - CockroachDB Database Plugin
    - Cloud Browser
    - Member Ticketing System

- Discussion
