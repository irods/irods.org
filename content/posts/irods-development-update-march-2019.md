Title: iRODS Development Update: March 2019
Date: 2019-03-31 15:00
Author: Terrell Russell
Slug: irods-development-update-march-2019
Status: published


We are moving full-speed towards Utrecht at this point - [Register today and submit your Talks](https://irods.org/ugm2019)!

The [Storage Tiering capability](https://github.com/irods/irods_capability_storage_tiering) has been refactored and will be released very soon with updated capacity for admin-defined policies for access time, data movement, data replication, and data verification. 

Due to the refinement and clarification in the storage tiering capability, early work on the Indexing capability is very promising.  We had a skeleton framework up and running within 48 hours of beginning to code.  We expect indexing and publishing to be part of the training at the User Group Meeting in Utrecht in June.

We spent a week testing and improving the [Ceph RADOS resource plugin](https://github.com/irods/irods_resource_plugin_rados) with a Docker compose setup provided by Consortium Member Maastricht University.  It is now passing our test suite, manually.

With a goal of simplification and general purpose usage, we are questioning [NFSRODS](https://github.com/irods/irods_client_nfsrods)'s current requirement of Kerberos authentication and authorization.  We love removing code, so trusting the client's username could be quite rewarding.

We have demonstrated parallel builds and parallel testing of the iRODS core code via Docker.  We have demontrated builds and tests of a single iRODS plugin via Docker.  Adding parallel plugin build and test is the next step.  After that, we only need to add topology testing (multiple-server Zone) and federation testing (multiple Zones).


### March Technology Working Group

- [4.2.6](https://github.com/irods/irods/milestone/31)

    - 88 issues open, 53 bugs

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 111 issues open, 48 bugs
    - clang6, cmake3.11
    - c++17
    - genQuery iterator
    - new logger
    - irods::filesystem
    - irods::iostreams
    - clang format
    - irodsDelayServer
    - not supported for Ubuntu14, LTS ends April 2019
    - add support for Ubuntu18

- Active Development Work

    - Python iRODS Client (PRC)
        - OpenID integration PR under discussion
        - Awaiting Docker in CI for testing/release
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Cacheless and Detached S3
        - works with current iRODS parallel transfer
        - moving to shared memory for new multi-process transfer

    - Access Protocols
        - NFSRODS, release is imminent, looking to remove Kerberos requirement
        - [https://github.com/irods/irods_client_nfsrods](https://github.com/irods/irods_client_nfsrods)
        - Samba/CIFS/SMB project to surface iRODS as SMB
        - containerization and CI

    - iRODS Capability - Automated Ingest
        - working to test edge cases, keep cache true
        - testing with storage tiering, new irodsDelayServer
        - [https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)

    - Lustre Integration
        - working on testing with partners
        - preparing for LUG 2019
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

    - Storage Tiering Capability Package
        - abstraction work newrly complete
        - releasing before UGM
        - [https://github.com/irods/irods_capability_storage_tiering](https://github.com/irods/irods_capability_storage_tiering)

    - Metalnx packaging
        - 2.0.0 released?  not quite.
        - awaiting CI
        - [https://github.com/irods-contrib/metalnx-web](https://github.com/irods-contrib/metalnx-web)

    - Cloud Browser
        - multi-dataobject move
        - need to finalize and publish Docker image

    - Continuous Integration (CI)
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

    - Indexing Capability
        - new architecture, discussion
        - leverage similar architecture as Automated Ingest

    - Swagger REST API
        - working demo with metadata templates
        - [https://github.com/irods-contrib/irods_rest_services](https://github.com/irods-contrib/irods_rest_services)

