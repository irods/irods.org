Title: iRODS Development Update: August 2019
Date: 2019-08-30 10:00
Author: Terrell Russell
Slug: irods-development-update-august-2019
Status: published

Settling into the two month sprint to SC19 in Denver...

NFSRODS is nearing a v0.9.0 release that includes support for [NFSv4 ACLs](https://tools.ietf.org/html/rfc7530).  We've added some additional caching for speed, and groups are behaving as expected.  There are a couple more edge cases regarding temporary files and permissions that we're still chasing down, but this will be the first release we can recommend for public consumption.

This month saw the release of two versions of the [iRODS Automated Ingest client](https://github.com/irods/irods_capability_automated_ingest/releases/), fixing two path-related bugs affecting scanning and syncing from S3 into iRODS.  Please update via pip to v0.3.7.

We have designed and prototyped a parallel transfer engine that uses the new libraries included in 4.2.x and provides a clean interface for requesting data movement.  Eventually, the plan is to refactor all existing iRODS calls to use this parallel code to reduce the number of codepaths and increase throughput.

We have also prototyped a new C++-based REST API for iRODS and are looking to implement a simple S3-compatible API above that.  If you are interested in this work, please reach out.

Work on our parallel filesystem connectors has picked back up and has seen the splitting of the Lustre connector into a listener (connects to and receives updates from an external system) and an aggregator (does some rollup of changes before sending them to iRODS).  This allows for different types of listeners to be paired with different systems' changelog formats.  A BeeGFS listener has been developed to demonstrate the new model.  We would like to encourage standardization of the changelog format through a Changelog Working Group and will announce more formal plans in the coming months.

The Metadata Templates Working Group has made significant progress in the last month on interoperability planning.  We hope to publish a block diagram soon and demonstrate end-to-end running code.  Please join our monthly calls if you want to know more about validation and verification of the metadata in your iRODS Zone.

Work continues on our Dockerized CI infrastructure and the intermediate replica state.  We hope to be able to release 4.2.7 from our new infrastructure and sunset our existing Jenkins build and test server.  Release of the cacheless S3 resource is awaiting this effort as well.

### August Technology Working Group

- [4.2.7](https://github.com/irods/irods/milestone/32)

    - 129 issues open, 75 bugs

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 116 issues open, 48 bugs
    - all new externals (clang8, cmake3.15, etc.)
    - clang format
    - c++17
    - new logger (rsyslog or stdout)
    - irodsDelayServer refactoring / with implicit remote()
    - Ubuntu18 will be supported
    - Ubuntu14 will not be supported, LTS ended April 2019

- New Development Work

    - New C client library
    - New C++ client library
    - iRODS logical paths and special characters (~,^,etc.)

- Active Development Work

    - Python iRODS Client (PRC)
        - dynamic rule inputs PR merged
        - OpenID integration PR under discussion
        - Awaiting Docker in CI for testing/release
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Cacheless and Detached S3
        - 4-2-stable branch ready to release for 4.2.6

    - NFSRODS
        - working towards NFSv4 ACLs for 1.0.0
        - awaiting CI
        - [https://github.com/irods/irods_client_nfsrods](https://github.com/irods/irods_client_nfsrods)

    - iRODS Capability - Automated Ingest
        - working to test edge cases, keep cache true
        - [https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)

    - Multipart Transfer, v5 API
        - investigating new approach
        - based on new dstream operator
        - involves a new irods cli/console
        - [https://github.com/irods/irods/issues/4336](https://github.com/irods/irods/issues/4336)

    - Lustre Integration
        - testing with partners
        - performance optimizations
        - to be refactored alongside work with BeeGFS/S3/Ceph
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

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
