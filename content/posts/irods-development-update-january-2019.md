Title: iRODS Development Update: January 2019
Date: 2019-01-31 20:00
Author: Terrell Russell
Slug: irods-development-update-january-2019
Status: published

We are spinning back up from the Holidays.

We have trimmed the list of open issues for 4.2.5 to those most requested by the community and bumped the rest to a new 4.2.6 milestone.  We plan to burn this list down as quickly as possible and get 4.2.5 out the door soon.

Docker containers are now humming in our development continuous integration.  We've cut a full iRODS test cycle down from 8 hours to 30 minutes by running our tests in parallel and hope to get all our plugins tested in parallel within the next week.  This will dramatically improve our pace towards a release of 4.3.0.

We have begun a rewrite of the irodsReServer to be more robust in the face of long-running asynchronous jobs.  This work is currently targeting the 4-2-stable branch, but may need to be held for inclusion until 4.3.0.  Renaming the binaries may be too much for a patch release.

The cacheless and detached storage resource code is now passing tests and should be in a state to share with others very soon.  We are looking forward to a demo at TRiRODS on February 20th.

The `irods::filesystem` library work has spawned a related `irods::iostreams` library.  We're trying hard to standardize the interfaces into iRODS, to play well with others and not surprise other developers.

Stay warm!



### January Technology Working Group

- [4.2.5](https://github.com/irods/irods/milestone/30)

    - 31 issues, 18 bugs
    - 3-5 priority items before starting release process

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 108 issues open, 47 bugs
    - clang6, cmake3.11
    - c++17
    - genQuery iterator
    - new logger
    - irods::filesystem
    - irods::iostreams
    - clang format
    - irodsMonitor

- Active Development Work

    - Python iRODS Client (PRC)
        - OpenID integration PR coming
        - Awaiting Docker in CI for testing/release
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - CockroachDB Database Plugin
        - refactored to use UUID
        - testing for concurrent writes
        - testing iRODS schema assumptions

    - Cacheless and Detached S3
        - initial prototype working - get/put

    - Access Protocols
        - NFS4J project to surface iRODS as NFS
        - [https://github.com/irods/irods_client_nfsrods](https://github.com/irods/irods_client_nfsrods)
        - Samba/CIFS/SMB project to surface iRODS as SMB
        - caching and performance
        - containerization and CI

    - iRODS Capability - Automated Ingest
        - working to test edge cases, keep cache true
        - [https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)

    - Lustre Integration
        - working on testing with partners
        - preparing for LUG 2019
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

    - Python Rule Engine Plugin
        - GenQuery iterator as module, genquery.py
        - now using C++17
        - refactored compilation units (reduce rebuild times)
        - working with irods/irods master
        - should be settled, moving back to ongoing items

    - Storage Tiering Capability Package
        - considering data transfer protocol abstraction
        - [https://github.com/irods/irods_capability_storage_tiering](https://github.com/irods/irods_capability_storage_tiering)

    - iRODS clients listing
        - list is ready - adding to website

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

- Background Items

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

