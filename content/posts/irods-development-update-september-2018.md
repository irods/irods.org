Title: iRODS Development Update: September 2018
Date: 2018-09-30 8:00
Author: Terrell Russell
Slug: irods-development-update-september-2018
Status: published

September was a month of polishing and releasing things we've been working on for a while.  Testing and production rollouts uncovered a few bugs that were quickly fixed and incorporated.  Planning continues for SC18 in Dallas.

[iRODS 4.2.4 was released]({filename}/posts/irods-4-2-4-is-released.md) early this month, along with seven plugins for compatibility.  It marked `iexecmd` as deprecated.

[Automated Ingest](https://github.com/irods/irods_capability_automated_ingest) has seen six releases this month, v0.2.0, v0.2.1, v0.2.2, v0.3.0, v0.3.1, and v0.3.2.  The v0.2.0 release changed the queuing backend to Celery.  The v0.3.0 release added the ability to scan an S3 bucket and provides a significant speedup by chunking the work done in each celery task.  Cursory testing suggested we set the default to 50 files_per_task, but as a runtime configuration, we've seen performance improvements up to 300 files_per_task for some server topology and network configurations.  This is important because the framework appears to be providing linear scaling (so far).  More testing is coming, but it takes time.

The Python iRODS Client v0.8.1 was released.  A bug was fixed in filename handling with ampersands and size information is now available for replicas.

The [NFSRODS](https://github.com/irods/irods_client_nfsrods) codebase is being readied for its initial release.  We are exploring Docker as the primary deployment mechanism.

We are also working to move our CI system from VSphere to Docker.  This work would make our Jenkins instance runnable on an individual developer's workstation and reduce our dependency on the limited IP range we currently use.

Work on 4.1.12 is nearly complete.  We're so close.  It is expected to be the final release in the 4.1.x series.  We strongly encourage an upgrade to 4.2+ at this time.


### September Technology Working Group

- 4.2.4

    - released Sept 5, 2018
    - along with seven plugins

- iRODS Capability - Automated Ingest

    - released v0.2.0, v0.2.1, and v0.2.2
        - based on Celery and Redis
        - handling non-UTF8-encodeable filenames

    - released v0.3.0, v0.3.1, and v0.3.2
        - added S3 scanning
        - added chunking via files_per_task
        - 4M files in 1.5h on GPFS with 2x32 workers

- [4.1.12](https://github.com/irods/irods/milestone/27)

    - 3 issues, 1 bug.

- [4.2.5](https://github.com/irods/irods/milestone/30)

    - 74 issues, 47 bugs.

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 110 issues open, 48 bugs.
    - moving to new clang/cmake/externals
    - c++17
    - clang format
    - new logging
    - irodsMonitor
    - genQuery parser

- Metadata Templates Working Group

    Met on September 18 to discuss the storage of schema information in AVUs.  The two candidates consist of GUIDs for everything (flexible, but more opaque) vs. a many-to-many mapping from objects to templates.

- Active Development Work

    - Python iRODS Client (PRC)
        - released 0.8.1
        - 0.9.0 will include PAM, work to be started this month
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Access Protocols
        - NFS4J project to surface iRODS as NFS
        - [https://github.com/irods/irods_client_nfsrods](https://github.com/irods/irods_client_nfsrods)
        - Samba/CIFS/SMB project to surface iRODS as SMB

    - iRODS Capability - Automated Ingest
        - release 0.3.0 incorporated S3 scanning and chunking files_per_task
        - creating performance lab to select the fastest queue/backend combination
        - [https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)

    - Multipart Transfer, v5 API
        - testing, cleaning up error messages
        - adding progress indicator
        - added force flag
        - [https://github.com/irods/irods_api_plugin_adapter](https://github.com/irods/irods_api_plugin_adapter)
        - [https://github.com/irods/irods_api_plugin_multipart](https://github.com/irods/irods_api_plugin_multipart)

    - Lustre Integration
        - working on testing with partners
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

    - Python Rule Engine Plugin
        - GenQuery iterator as module, genquery.py

    - Metalnx packaging
        - finalizing v2.0.0
        - [https://github.com/irods-contrib/metalnx-web](https://github.com/irods-contrib/metalnx-web)

    - Continuous Integration (CI)
        - refactoring to use Docker
        - public Jenkins
        - move to pull-request and peer-review
        - adding CockroachDB database plugin
        - adding Ceph RADOS resource plugin
        - adding QueryArrow database plugin
        - adding Nestle R Client Library

- Ongoing Items

    - Indexing Capability
        - new architecture, discussion
        - reacts to event stream from Audit Plugin
        - leverage similar architecture as Automated Ingest

    - Storage Tiering Capability Package
        - considering data transfer protocol abstraction
        - [https://github.com/irods/irods_capability_storage_tiering](https://github.com/irods/irods_capability_storage_tiering)

    - Swagger REST API
        - working demo with metadata templates
        - [https://github.com/irods-contrib/irods_rest_services](https://github.com/irods-contrib/irods_rest_services)

    - Cloud Browser
        - need to finalize and publish docker image
