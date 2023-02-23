Title: iRODS Development Update: February 2023
Date: 2023-02-23 16:30
Author: Kory Draughn
Slug: irods-development-update-february-2023
Status: published


Hello Everyone,

We're inching closer and closer to a release. Issues are being resolved and polish is being applied. TRiRODS happened. If you're interested in the status of GenQuery2, then you can find the presentation at [https://irods.org/trirods](https://irods.org/trirods).

To start things off, we've finally finished the first draft of the iRODS 2023 Roadmap. If you're a Consortium member, we look forward to your feedback.

The iRODS Consortium will be in Barcelona for CS3. If you're attending the conference, come say hi.

As for software development updates, the server no longer allows empty strings to be stored as metadata attribute values. The client-side and server-side interfaces of the filesystem library and dstream library can now be used within the same translation unit. A new server-side unit testing framework has been developed to improve server-side coverage. The iCommands have also received some improvement. `itouch` now reports a non-zero return code when it fails and `itree` now provides better support for pattern matching.

The Testing Environment now reports the SHA and version of the iRODS server which was just tested. A very helpful quality-of-life improvement. We've restored the ability to run tests on a remote Docker daemon as well.

The Development Environment is receiving some improvements. Work is being done to migrate to new Dockerfile syntax which will enable improved build times of images. We're also investigating ubi images, adding support for qtcreator, and various other things.

A new release of Metalnx is very close. Several issues have been resolved. With the release of iRODS 4.3.0, Metalnx was not able to manipulate metadata. That is now fixed. Metalnx will now create intermediate parent collections automatically. And finally, the search interface correctly handles queries involving fields which span multiple columns.

Users of the Python iRODS Client will be happy to know that it will soon provide similar features and functionality found in `igroupadmin`.

We'll end this month's update on the C++ S3 API. Support for the HeadObject, CopyObject, and DeleteObject operations have been implemented. We're now focused on packaging the software so that users can give it a try. Please stay tuned if you find that interesting.

As always, see you next month!


### February Technology Working Group

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - working on whitepaper covering WG activities and findings
    - working meeting
        - Tues, February 21, 2023, 10am ET

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - did not receive CZI funding
    - looking at UNC and/or NSF funding opportunities
    - working meeting
        - Thur, February 16, 2023, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - working meeting
        - Tues, February 28, 2023, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - planning and investigation into custom C++ S3 implementation
    - working meeting
        - Fri, March 3, 2023, 3pm ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, February 15, 2023, 4pm ET
    - Kory Draughn, Chief Technologist
    - GenQuery2: A richer query interface into the iRODS namespace

- [4.2.12](https://github.com/irods/irods/milestone/38)

    - 26 bugs / 36 open, 105 closed

- [4.3.1](https://github.com/irods/irods/milestone/39)

    - 14 bugs / 33 open, 91 closed
    - goals
        - iinit to learn about pam_interactive (new auth framework)
        - support for HA (single irodsDelayServer defined in the catalog)

- [4.3.2](https://github.com/irods/irods/milestone/40)

    - 35 bugs / 178 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 132 bugs / 278 open, 0 closed

- New Development Work

    - no updates

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - working with SURF to officially support pam_interactive auth plugin
            - targeting 4.3.1 or 4.3.2
        - fixed bug which allowed metadata attribute values to be set to an empty string
        - itouch now reports a non-zero return code on error
        - improved pattern matching support in itree
        - working to improve logical locking to keep things from getting stuck
        - implemented test fixture which exposes controls for triggering various errors
            - not merged yet, but considering it
        - made full filesystem / dstream library useable in the same source file
        - implemented simple server-side Catch2 inspired unit testing framework
        - implemented experimental plugins for testing the new GenQuery parser

    - Build and Packaging
        - adding boost/Qt5-style build system targets
        - consistent / better use of CMake
        - targeting gcc/libstdc++ again and defining minimum requirements
        - entered early stages of moving externals to use standard packaging tools
            - rpmbuild and dpkg-buildpackage

    - [iRODS Documentation](https://github.com/irods/irods_docs)
        - finished first draft of the roadmap (ready for review/voting)

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - SHA / version of iRODS server is now printed after test run is over
        - restored ability to run tests on a remote Docker daemon

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - migrating to new Dockerfile syntax to improve image builds
        - investigating ubi images
        - working on images for use with qtcreator
        - investigating various other improvements

    - [Metalnx](https://github.com/irods-contrib/metalnx-web) / [Jargon](https://github.com/DICE-UNC/jargon)
        - fixed #332 - creating a collection also creates missing parent collections
        - fixed #337 and #343 - restored ability to manipulate metadata
        - fixed #294 - searching collections and data objects no longer results in an error
        - preparing release of 2.6.1
        - working towards removing the required local database

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - released 0.9.3
        - increased maximum size of requests for uploading data via the /stream endpoint

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - released 0.3.1

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - released 1.1.6
        - working to improve groupadmin functionality
            - includes providing similar features found in igroupadmin (e.g. igroupadmin mkuser)

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)

    - [R client (rirods)](https://github.com/irods/irods_client_library_rirods)
        - Martin Schobben presented rirods at TRiRODS event on December 7, 2022 (video is available now)
        - expected release: Summer 2023

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - successfully tested with Wasabi S3 (4.2.11 and 4.3.0)

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - released 4.2.11.2

    - [C++ S3 API](https://github.com/irods/irods_client_s3_cpp)
        - implemented HeadObject, CopyObject, and DeleteObject
        - working on packaging

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - developing workaround for ~100byte leak per call to _delayExec()
        - will split the work into a set number of delay rules for initial walk of collection

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - working on fix to allow rodsusers to upload to their own collection

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - merged character-map translation for paths of ingested objects

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - stage one of refactor complete
            - https://github.com/irods/irods_rule_engine_plugin_audit_amqp/pull/105
            - replaced all use of jansson JSON library with nlohmann JSON library
            - switched from qpid-proton’s deprecated C API to the supported C++ API
            - removed workarounds for logstash
            - general modernization and housekeeping
        - next stage of refactor
            - add support for handling multiple AMQP endpoints
            - improve stewardship of AMQP connections
            - improve handling of connection errors
        - merged updated example ELK stack (used for training)

- Background Items

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)

    - [Publishing Capability](https://github.com/irods/irods_capability_publishing)
        - needs more README
        - awaiting CI

    - Logical Locking
        - read-locks to be implemented

    - New RPC API framework
        - leverages design from Authentication Working Group
        - supports synchronous and asynchronous operations
        - refactored into parallel_collection_operation base class
            - supports pre/post operations and an object operation

    - Policy Composition
        - will release for storage tiering, indexing, publishing
        - leverages new parallel server api endpoint

    - [iRODS Command Line Interface (CLI)](https://github.com/irods/irods_client_cli)
        - single binary
        - eventual replacement for ~50 iCommands
        - ls/put/get/rm/cp/repl/query

    - [Hard Links Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_hard_links)
        - awaiting more use cases before release

    - [AWS S3 Lambda](https://github.com/irods/irods_client_aws_lambda_s3)
        - future release
            - could brute-force confirm checksums to detect renames
            - would persist metadata
        - could use atomic database operations to increase batch size > 1

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)

    - Parallel Filesystem Integration
        - iRODS API plugin
        - have split BeeGFS and Lustre implementations into aggregator and listener
        - testing against known configurations

    - SMBRODS project to surface iRODS as SMB

    - CockroachDB Database Plugin

    - Cloud Browser

    - Member Ticketing System

    - [NetCDF microservices](https://github.com/irods/irods_netcdf)
        - released 4.2.9.0, 4.2.10.0, and 4.2.11.0
        - full HDF5 support could come later

- Discussion

