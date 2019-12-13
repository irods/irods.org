Title: iRODS Development Update: November 2019
Date: 2019-11-30 14:00
Author: Terrell Russell
Slug: irods-development-update-november-2019
Status: published

Happy Holidays.

We did it - SC19 in Denver has come and gone.  We ran a workshop, stood in a booth for four days, held 30+ meetings with members and future-members, and gave multiple talks around the conference floor.

iRODS 4.2.7 is baking.  Tests are passing, plugin versions have been bumped, and we're finalizing success with upgrades and across different databases.  Expect a release within the week.

The [Python iRODS Client has been released as v0.8.2](https://github.com/irods/python-irodsclient/releases) and incorporates over a year of work from the community.  Thanks everyone!

[Automated Ingest has been released as v0.3.8](https://github.com/irods/irods_capability_automated_ingest/releases) and fixes the handling of stopped periodic jobs.

[NFSRODS has been released as v0.9.1](https://github.com/irods/irods_client_nfsrods/releases).  It's a minor release that fixes some internal mapping - no new functionality.

A request for and a discussion about [Logical Quotas has resulted in a new policy plugin](https://github.com/irods/irods_rule_engine_plugin_logical_quotas).  The upcoming [TRiRODS]({filename}/pages/trirods.html) talk will cover the background and the use case.  The video should be posted shortly.

We expect 4.2.8 to follow from 4.2.7 pretty quickly with the landing of Intermediate Replicas and a refactoring of the irodsReServer to use the new query_processor library.



### November Technology Working Group

- [4.2.7](https://github.com/irods/irods/milestone/32)

    - 161 issues open, 102 bugs
    - new query_builder library

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 110 issues open, 42 bugs
    - all new externals (clang8, cmake3.15, etc.)
    - clang format
    - new logger (rsyslog or stdout)
    - irodsDelayServer refactoring / with implicit remote()
    - Ubuntu18 will be supported
    - Ubuntu14 will not be supported, LTS ended April 2019

- New Development Work

    - Logical Quotas
        - Policy Set to provide quotas for collections
            - only considers number of objects or total size of objects
            - does not count all replicas
        - to be released as C++ rule engine plugin
        - [https://github.com/irods/irods_rule_engine_plugin_logical_quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)

    - iRODS Hard Links RFC
        - Use case via WinSCP via NFSRODS
            - attempted to use syscall link() for overwrite (client copy-on-write)
        - [https://github.com/irods/irods_rfcs/blob/master/0005_hard_links.md](https://github.com/irods/irods_rfcs/blob/master/0005_hard_links.md)

- Active Development Work

    - C++-based REST API
        - put/get working, streaming working
        - JWT token auth working
        - part of new Data Transfer Nodes pattern

    - C++ S3 API
        - defined via Swagger
        - uses C++ REST API
        - put/get working
        - part of new Data Transfer Nodes pattern

    - Python iRODS Client (PRC)
        - OpenID integration PR under discussion
        - fixed querying objects in remote zones
        - can now manipulate AVUs on iRODS resources
        - awaiting CI
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Python Rule Engine Plugin
        - PluginContext is now serialized and available to PEPs

    - Cacheless and Detached S3
        - working to support streaming input (multiple processes)
        - new proof-of-concept to use ring/circular buffer
            - on new put, will avoid full write-then-read from scratch space
            - directly connect iRODS parallel put to S3 multi-part upload
        - awaiting CI
        - [https://github.com/irods/irods_resource_plugin_s3](https://github.com/irods/irods_resource_plugin_s3)

    - NFSRODS
        - moving towards 1.0
        - generated Hard Links RFC
        - awaiting CI
        - [https://github.com/irods/irods_client_nfsrods](https://github.com/irods/irods_client_nfsrods)

    - iRODS Capability - Automated Ingest
        - needs refactoring to abstract the source filesystem/object
        - found bug in 'stop' of periodic job, need to revoke celery scheduled()
        - investigating splitting storage backends
            - celery workers -> redis
            - python/iRODS cache -> scylla (C++ distributed keystore)
        - [https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)

    - Parallel Transfer Engine
        - based on new dstream operator
        - available via new C++ client library

    - Parallel Filesystem Integration
        - iRODS API plugin
        - have split BeeGFS and Lustre implementations into aggregator and listener
        - testing against known configurations
        
    - Indexing Capability
        - needs more README
        - ready to release for 4.2.6
        - second implementation coming for Apache Solr

    - Publishing Capability
        - needs more README
        - ready to release for 4.2.6

    - Metalnx
        - removed caching for users/group
            - federation-ready
            - new release soon
        - working to eventually remove database dependency
        - testbed for metadata templates initial implementation
        - awaiting CI
        - [https://github.com/irods-contrib/metalnx-web](https://github.com/irods-contrib/metalnx-web)

    - Continuous Integration (CI)
        - refactored to use Docker
            - backfilling pre-Docker coverage
            - almost ready to power a 4.2.7 release
        - public Jenkins
        - move to pull-request and peer-review
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
    - Storage Tiering Capability
    - Cloud Browser
