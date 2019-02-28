Title: iRODS Development Update: February 2019
Date: 2019-02-28 15:00
Author: Terrell Russell
Slug: irods-development-update-february-2019
Status: published


The labor of the last few months is paying off.  [We've shipped 4.2.5]({filename}/posts/irods-4-2-5-is-released.md), along with eight plugins for compatibility.  We're nearing releases for Metalnx and Cloudbrowser.  NFSRODS required 4.2.5 before it could be released, and so we're preparing that now as well.

[TRiRODS was held on February 20th](https://irods.org/trirods/), hosted by RENCI here in Chapel Hill, NC.  In the first talk, the new irods::filesystem and irods::iostreams libraries were introduced and explained.  Along with the irods::connection_pool and irods::thread_pool work, a new iput prototype was demonstrated to be up to 11x faster for moving many small files into iRODS.  The cacheless s3 plugin was introduced and provides a seamless POSIX interface in front of object storage (local or remote).

Also included in 4.2.5 is a new GenQuery iterator (both for C++ and Python) that makes interacting with the catalog and working with result sets much simpler and less error prone.

The 4-2-stable rewrite of the irodsReServer is complete, and shipped with 4.2.5.  It no longer blocks the delay queue with a long-running job, and it will work continuously through as many jobs as it can that are ready to be processed.  We have seen more than 100k jobs get processed in under four minutes in local bench testing.


### February Technology Working Group

- [4.2.6](https://github.com/irods/irods/milestone/31)

    - 84 issues open, 53 bugs

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 113 issues open, 48 bugs
    - clang6, cmake3.11
    - c++17
    - genQuery iterator
    - new logger
    - irods::filesystem
    - irods::iostreams
    - clang format
    - irodsDelayServer

- Active Development Work

    - Python iRODS Client (PRC)
        - OpenID integration PR under discussion
        - Awaiting Docker in CI for testing/release
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Cacheless and Detached S3
        - initial prototype working - get/put
        - testing differences with Minio/AWS
        - testing for performance

    - Access Protocols
        - NFSRODS awaiting 4.2.5 for first release
        - [https://github.com/irods/irods_client_nfsrods](https://github.com/irods/irods_client_nfsrods)
        - Samba/CIFS/SMB project to surface iRODS as SMB
        - containerization and CI

    - iRODS Capability - Automated Ingest
        - working to test edge cases, keep cache true
        - [https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)

    - Lustre Integration
        - working on testing with partners
        - preparing for LUG 2019
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

    - Storage Tiering Capability Package
        - considering data transfer protocol abstraction
        - [https://github.com/irods/irods_capability_storage_tiering](https://github.com/irods/irods_capability_storage_tiering)

    - iRODS clients listing
        - see https://irods.org/clients
        - improvements/opinions welcome

    - Metalnx packaging
        - finalizing v2.0.0
        - awaiting CI
        - [https://github.com/irods-contrib/metalnx-web](https://github.com/irods-contrib/metalnx-web)

    - Continous Integration (CI)
        - refactoring to use Docker
            - parallelized test runs (down from 8h to 30m)
        - public Jenkins
        - move to pull-request and peer-review
        - adding CockroachDB database plugin
        - adding Ceph RADOS resource plugin
        - adding QueryArrow database plugin
        - adding Nestle R Client Library
        - adding Metalnx
        - adding baton/tears
        - adding automated ingest
        - adding storage tiering
        - adding NFSRODS
        - adding collection mtime rule engine plugin

- Background Items

    - Python Rule Engine Plugin
        - working with irods/irods master

    - CockroachDB Database Plugin
        - refactored to use UUID
        - testing for concurrent writes
        - testing iRODS schema assumptions
        - not performant enough at this time

    - Multipart Transfer, v5 API
        - evaluating approach and timeline
        - [https://github.com/irods/irods_api_plugin_adapter](https://github.com/irods/irods_api_plugin_adapter)
        - [https://github.com/irods/irods_api_plugin_multipart](https://github.com/irods/irods_api_plugin_multipart)

    - Indexing Capability
        - new architecture, discussion
        - reacts to event stream from Audit Plugin
        - leverage similar architecture as Automated Ingest

    - Swagger REST API
        - working demo with metadata templates
        - [https://github.com/irods-contrib/irods_rest_services](https://github.com/irods-contrib/irods_rest_services)

    - Cloud Browser
        - need to finalize and publish docker image

