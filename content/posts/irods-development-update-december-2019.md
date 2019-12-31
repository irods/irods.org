Title: iRODS Development Update: December 2019
Date: 2019-12-30 21:00
Author: Terrell Russell
Slug: irods-development-update-december-2019
Status: published

So, a quick month to finish off a very fast year.  Happy end of 2019, everyone!

A shorter month due to the holidays, but we were able to get 4.2.7 out the door before the break.  Our new CI performed most of the heavy lifting for the release, but we still did quite a bit manually.  We'll refine the process with what we learned and the next release will be much quicker.

We've got a lot planned for the merging of a few branches into 4-2-stable in the new year, as well as continued work on NFSRODS, Automated Ingest, and the Python iRODS Client.

Some whiteboard insight has led us to begin refactoring the S3 storage resource plugin to incorporate the recently added Circular Buffer and Parallel Transfer Engine code.

The [Logical Quotas December TRiRODS talk from CU Boulder]({filename}/pages/trirods.html) is posted.


### December Technology Working Group

- [4.2.7](https://github.com/irods/irods/milestone/32)

    - 1 issues, 0 bugs
    - new query_builder library
    - Ubuntu14 will not be supported, LTS ended April 2019

- [4.2.8](https://github.com/irods/irods/milestone/33)
    - 175 issues, 106 bugs
    - intermediate replicas
    - all new externals (clang8, cmake3.15, etc.)

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 109 issues, 42 bugs
    - clang format
    - new logger (rsyslog or stdout)
    - irodsDelayServer refactoring / with implicit remote()
    - Ubuntu18 will be supported
    - CentOS8 will be supported

- New Development Work

    - AWS Lambda for push updates from S3 buckets
        - replace need for Automated Ingest 'periodic' jobs
        - can detect/inform about removed S3 objects
        - easier to hold/configure than Automated Ingest

- Active Development Work

    - Logical Quotas
        - Policy Set to provide quotas for collections
            - only considers number of objects or total size of objects
            - does not count all replicas
        - to be released as C++ rule engine plugin
        - TRiRODS Dec. 4 recording at [https://irods.org/trirods]({filename}/pages/trirods.html)
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
        - updates for 4.2.7
        - using the query_processor

    - Python iRODS Client (PRC)
        - released v0.8.3
        - OpenID integration PR under discussion
        - awaiting CI
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Cacheless and Detached S3
        - working to support streaming input (multiple processes)
        - new proof-of-concept to use ring/circular buffer
            - on new put, will avoid full write-then-read from scratch space
            - directly connect iRODS parallel put to S3 multi-part upload
        - awaiting CI
        - [https://github.com/irods/irods_resource_plugin_s3](https://github.com/irods/irods_resource_plugin_s3)

    - NFSRODS
        - released v0.9.1
        - moving towards 1.0
        - generated Hard Links RFC
        - awaiting CI
        - [https://github.com/irods/irods_client_nfsrods](https://github.com/irods/irods_client_nfsrods)

    - Automated Ingest Capability
        - released v0.3.8
        - needs refactoring to abstract the source filesystem/object
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
        - ready to release for 4.2.7
        - second implementation coming for Apache Solr

    - Publishing Capability
        - needs more README
        - ready to release for 4.2.7

    - Metalnx
        - removed caching for users/group
            - federation-ready
            - new release soon
        - working to eventually remove database dependency
        - testbed for metadata templates initial implementation
        - search and indexing revamp
        - want to turn on quotas visibility
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

    - Python Rule Engine Plugin
    - SMBRODS project to surface iRODS as SMB
    - CockroachDB Database Plugin
    - Cloud Browser

- Discussion Items

    - Should the Consortium consider a simple 'ticketing' system for members?
        - something internal, for sharing among same organization
        - something web-based?
