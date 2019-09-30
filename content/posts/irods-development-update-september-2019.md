Title: iRODS Development Update: September 2019
Date: 2019-09-30 14:00
Author: Terrell Russell
Slug: irods-development-update-september-2019
Status: published


This month went by more quickly than most.  We're finding the last 10% of bugs in a few different projects and of course, it takes another 50% of the time.

[NFSRODS](https://github.com/irods/irods_client_nfsrods) has been stood up by a couple additional community members.  The permissions model works and is understandable and we're more confident now that v0.9.0 will be very similar to v1.0.0.  Some early performance testing shows solid throughput and encouraging compliance with a variety of workloads and file access patterns.  POSIX still holding firm after over 30 years.

The [first release of the iRODS S3 Resource Plugin to include Cacheless and Detached modes]({filename}/posts/irods-releases-cacheless-s3-resource-plugin.md) was released in early September.  This allows connecting to S3-based storage without the overhead of compound and cache resources to handle the differences in POSIX and object-based protocols.  The S3 plugin can now handle that translation directly and removes the need for an iRODS administrator to manage a cache that could fill up pretty quickly.

Our partners at Australia's Agriculture Victoria have been working to get their Smart Farm initiative to include iRODS - you can read more about how they are planning to more deeply incorporate image capture, visualization, and provenance in [Drones, Smart Farms, and iRODS]({filename}/posts/drones-smart-farms-and-irods.md).

We are continuing our heads-down work on Metadata Templates, Dockerized CI, and Intermediate Replicas.  A few community discussion topics have deepened this month and are showing some promise towards consensus - Quotas, Storage Decommissioning, and Parallel Filesystem Integration.  Join the conversation if these are relevant to your interests.


### September Technology Working Group

- [4.2.7](https://github.com/irods/irods/milestone/32)

    - 141 issues open, 82 bugs

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 118 issues open, 48 bugs
    - all new externals (clang8, cmake3.15, etc.)
    - clang format
    - new logger (rsyslog or stdout)
    - irodsDelayServer refactoring / with implicit remote()
    - DISCUSSION - remove group quotas
        - https://github.com/irods/irods/issues/4481
    - Ubuntu18 will be supported
    - Ubuntu14 will not be supported, LTS ended April 2019

- New Development Work

    - New C client library
    - New C++ client library
    - iRODS logical paths and special characters (~,^,etc.)
    - New C++-based REST API

- Active Development Work

    - Python iRODS Client (PRC)
        - OpenID integration PR under discussion
        - Awaiting CI
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Cacheless and Detached S3
        - 4-2-stable branch ready to release for 4.2.6 (released Sept 6)

    - NFSRODS
        - release 0.9.0 will include NFSv4 ACLs
        - awaiting CI
        - [https://github.com/irods/irods_client_nfsrods](https://github.com/irods/irods_client_nfsrods)

    - iRODS Capability - Automated Ingest
        - v0.3.6 released - S3 path bugfix
        - v0.3.7 released - S3 path bugfix
        - [https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)

    - Parallel Transfer Engine
        - based on new dstream operator
        - available via new C++ client library

    - Parallel Filesystem Integration
        - iRODS API plugin
        - splitting Lustre implementation into aggregator and listener
        - developed BeeGFS listener
        
    - Indexing Capability
        - needs more README
        - ready to release for 4.2.6
        - second implementation coming for Apache Solr

    - Publishing Capability
        - needs more README
        - ready to release for 4.2.6

    - Metalnx
        - working to remove database dependency
        - testbed for metadata templates initial implementation
        - awaiting CI
        - [https://github.com/irods-contrib/metalnx-web](https://github.com/irods-contrib/metalnx-web)

    - Cloud Browser
        - open issue for multi-dataobject move
        - need to finalize and publish Docker image

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

    - Samba/CIFS/SMB project to surface iRODS as SMB
    - Python Rule Engine Plugin
    - CockroachDB Database Plugin
    - Storage Tiering Capability Package
    - Swagger REST API

- Discussion

    - tool/rule for decommissioning storage resource
        - need to replace a serial iphymv (deprecated in 4.2)
