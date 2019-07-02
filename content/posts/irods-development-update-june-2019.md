Title: iRODS Development Update: June 2019
Date: 2019-07-02 15:00
Author: Terrell Russell
Slug: irods-development-update-june-2019
Status: published


We did it!  Thank you to everyone who attended, presented, hacked, and played with us in Utrecht last week!  We are working to get slides and video posted as soon as possible.

We are still working to finalize the dates for next year's iRODS User Group Meeting, but we did announce it will be held in Tucson at the University of Arizona, again.  [They first hosted us in 2012]({filename}/pages/ugm.html), and we're excited to be going back.

Prior to the meeting, we were able to get 4.2.6 out the door.  We haven't heard from anyone that we broke anything, so there are not currently any plans to rush out a 4.2.7.

More updates to come next month...!


### June Technology Working Group

- [4.2.6](https://github.com/irods/irods/milestone/31)

    - released June 5, 2019

- [4.2.7](https://github.com/irods/irods/milestone/32)

    - 108 issues open, 63 bugs

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 118 issues open, 49 bugs
    - clang6, cmake3.11
    - clang format
    - c++17
    - new logger (rsyslog or stdout)
    - irods::query
    - irods::filesystem
    - irods::iostreams
    - irods::thread_pool
    - irods::connection_pool
    - irods::query_processor
    - irodsDelayServer
    - Ubuntu18 will be supported
    - Ubuntu14 will not be supported, LTS ended April 2019

- Active Development Work

    - Python iRODS Client (PRC)
        - dynamic rule inputs PR merged
        - OpenID integration PR under discussion
        - Awaiting Docker in CI for testing/release
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Cacheless and Detached S3
        - working on multiple bucket, replication scenarios
        - testing complete
        - pull request, under review

    - NFSRODS
        - in testing in corporate environment
        - iRODS multi-owner <-> unix
        - NFS POSIX test suite, successes and known failures
        - released v0.8.0 at UGM2019
        - containerization and CI
        - [https://github.com/irods/irods_client_nfsrods](https://github.com/irods/irods_client_nfsrods)

    - iRODS Capability - Automated Ingest
        - working to test edge cases, keep cache true
        - testing with storage tiering, new irodsDelayServer
        - [https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)

    - Multipart Transfer, v5 API
        - investigating new approach
        - based on new dstream operator
        - involves a new irods console
        - [https://github.com/irods/irods/issues/4336](https://github.com/irods/irods/issues/4336)

    - Lustre Integration
        - testing with partners
        - performance optimizations
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

    - Storage Tiering Capability Package
        - abstraction work complete
        - released alongside 4.2.6
        - [https://github.com/irods/irods_capability_storage_tiering](https://github.com/irods/irods_capability_storage_tiering)

    - Indexing Capability
        - rule engine plugin(s)
        - similar approach as storage tiering
        - testing beginning
        - first, elasticsearch, both full_text and AVUs
        - second implementation coming for Apache Solr

    - Publishing Capability
        - rule engine plugin(s)
        - nearly identical to indexing
        - initial implementation to push to data.world

    - Metalnx packaging
        - 2.0.1 release imminent
        - awaiting CI
        - [https://github.com/irods-contrib/metalnx-web](https://github.com/irods-contrib/metalnx-web)

    - Cloud Browser
        - multi-dataobject move
        - need to finalize and publish Docker image

    - Continuous Integration (CI)
        - refactoring to use Docker
            - parallelized test runs (down from 8h to 30m)
            - developer friendly - can run full tests locally
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

    - Samba/CIFS/SMB project to surface iRODS as SMB
    - Python Rule Engine Plugin
    - CockroachDB Database Plugin
    - Swagger REST API
