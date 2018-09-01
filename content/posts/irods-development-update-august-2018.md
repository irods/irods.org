Title: iRODS Development Update: August 2018
Date: 2018-08-31 21:00
Author: Terrell Russell
Slug: irods-development-update-august-2018
Status: published

The pace has picked up and we're moving towards a final 4.1.12 release, a 4.2.4 release, and progress towards 4.3.0.

The work we've been doing on [Automated Ingest](https://github.com/irods/irods_capability_automated_ingest) and a [Sync Policy Example]({filename}/posts/automated-ingest-and-sync-policy-example.md) are taking shape as new releases as well.  The Automated Ingest Framework has been ported to Celery and has been demonstrated to scan over 5 Million files cleanly and quickly.  The flexibility it affords, along with the powerful features of the iRODS Rule Engine make it an easy decision for at least two organizations that we hope will be joining the iRODS Consortium soon.  At least one of them has been using a commercial solution for a while but found that iRODS and the Automated Ingest Framework provide a compelling alternative.

Our intern, Alex Mieczkowski, completed his summer's work of presenting iRODS over the NFS4 protocol (via NFS4J and Jargon).  We will be releasing that supported project soon.

The final touches are going into a post about the GenQuery iterator for the Python Rule Engine Plugin.  It should be out within the next week.

To prepare for 4.3.0, we now have pull requests posted for clang-format, C++17 compatibility, the new logger (using spdlog), and the integration of a unit test framework (Catch2).

We have a busy fall ahead of us.  We are preparing for engagements with life sciences companies on both US coasts, training in Spain, SuperComputing18 in Dallas, and events in South Africa and Australia before the end of the year.


### August Technology Working Group

- [4.1.12](https://github.com/irods/irods/milestone/27)

    - 6 issues, 1 bug.

- [4.2.4](https://github.com/irods/irods/milestone/29)

    - 6 issues, 3 bugs. Release is imminent, have bumped others to 4.2.5.

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 110 issues open, 48 bugs.
    - moving to new clang/cmake/externals
    - c++17
    - clang format
    - new logging
    - irodsMonitor
    - genQuery parser

- Metadata Templates Working Group

    Met on August 21 to see an update on the Swagger definitions.

- Active Development Work

    - Python iRODS Client (PRC)
        - work towards 0.8.1
        - will be supporting PAM soon
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Access Protocols
        - NFS4J project to surface iRODS as NFS
        - [https://github.com/irods/irods_client_nfsrods](https://github.com/irods/irods_client_nfsrods)
        - Samba/CIFS/SMB project to surface iRODS as SMB

    - iRODS Capability - Automated Ingest
        - moved to celery queueing
        - testing with other possible queues/backends
        - creating performance lab to select the fastest
        - [https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)

    - CockroachDB Database Plugin
        - adding to CI
        - vanilla installation is slow, need community insight
        - [https://github.com/irods/irods_database_plugin_cockroachdb](https://github.com/irods/irods_database_plugin_cockroachdb)

    - Ceph RADOS Resource Plugin
        - adding to CI, basic four-node cluster
        - [https://github.com/irods/irods_resource_plugin_rados](https://github.com/irods/irods_resource_plugin_rados)

    - Multipart Transfer, v5 API
        - testing, cleaning up error messages
        - adding progress indicator
        - added force flag
        - [https://github.com/irods/irods_api_plugin_adapter](https://github.com/irods/irods_api_plugin_adapter)
        - [https://github.com/irods/irods_api_plugin_multipart](https://github.com/irods/irods_api_plugin_multipart)

    - Lustre Integration
        - working on testing with partners
        - integrated with CockroachDB
        - multiple MDT servers implemented
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

    - Metalnx packaging
        - finalizing v2.0.0
        - [https://github.com/irods-contrib/metalnx-web](https://github.com/irods-contrib/metalnx-web)

- Ongoing Items

    - Python Rule Engine Plugin
        - GenQuery iterator as module, genquery.py
        - added documentation regarding remote()
        - added documentation regarding non-rodsadmin irule
        - added documentation regarding cross-language microservices

    - Indexing Capability
        - new architecture, discussion
        - reacts to event stream from Audit Plugin
        - leverage same architecture as Automated Ingest

    - Storage Tiering Capability Package
        - considering data transfer protocol abstraction
        - [https://github.com/irods/irods_capability_storage_tiering](https://github.com/irods/irods_capability_storage_tiering)

    - QueryArrow Database Plugin
        - adding to CI
        - [https://github.com/xu-hao/QueryArrow](https://github.com/xu-hao/QueryArrow)

    - Nestle R Client Library
        - adding to CI
        - [https://github.com/irods/irods_client_library_r_cpp](https://github.com/irods/irods_client_library_r_cpp)

    - Swagger REST API
        - working demo with metadata templates
        - [https://github.com/irods-contrib/irods_rest_services](https://github.com/irods-contrib/irods_rest_services)

    - Cloud Browser
        - need to finalize and publish docker image

    - Packaging Working Group (community standards, externals)
