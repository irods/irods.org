Title: iRODS Development Update: May 2023
Date: 2023-05-23 12:00
Author: Kory Draughn
Slug: irods-development-update-may-2023
Status: published


Hello Everyone,

This month's development update is a little out of date, but that doesn't change the fact that a lot has happened since last month. Let's get into it.

First things first, iRODS 4.2.12 was released! You can read all about the final release of the 4.2 series by visiting [https://irods.org/2023/05/irods-4-2-12-is-released/](https://irods.org/2023/05/irods-4-2-12-is-released/). The key takeaway is we're now shifting focus to the 4.3 series. We have a lot of ideas in the pipeline and can't wait to get started on them.

We held our quarterly TRiRODS meeting in which the now published [iRODS 2023 Roadmap](https://irods.org/roadmap/) was covered. You can watch the presentation by visiting [https://irods.org/trirods](https://irods.org/trirods/).

Not only that, but the iRODS Consortium attended Bio-IT World in Boston, MA. The conference was very nice and we got a chance to speak to several people. Interest continues to grow and we expect more conversations to happen as a result.

Our annual [User Group Meeting (UGM)](https://irods.org/ugm2023/) is coming together. We're checking all the items off the list. We even published the agenda for people to see. Keep in mind the agenda is subject to change as things are finalized. We hope to see you there.

The Metadata Templates Working Group has concluded. We want to thank everyone who participated. The results of this working group will be captured in a whitepaper for everyone to read, so stay tuned.

Let's talk about the software now ...

Included in iRODS 4.2.12 is a nice safe-guard around adding and modifying zone information. The server now checks the connection strings for correctness. It's important to understand that the checks performed do not include testing connectivity. Rather, they make sure bad input is rejected (e.g. empty strings, missing hostname/port, etc).

The Python Rule Engine Plugin is receiving some quality-of-life improvements. Specifically, work to reduce compilation time has begun and is showing a lot of promise.

Investigation into adding support for OpenID Connect (OIDC) to the C++ REST API has begun. We'll have more information to share at UGM.

Python iRODS Client 1.1.8 was released as well. This release is primarily a bug fix release.

Thanks for reading. See you in June!


### May Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - did not receive CZI funding
    - looking at UNC and/or NSF funding opportunities
    - working meeting
        - Thur, May 18, 2023, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - working meeting
        - Tues, May 23, 2023, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - planning and investigation into custom C++ S3 implementation
    - working meeting
        - Fri, July 7, 2023, 3pm ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, May 10, 2023, 4pm ET
    - Kory Draughn, Chief Technologist
    - iRODS 2023 Roadmap

- [4.2.12](https://github.com/irods/irods/milestone/38)

    - 0 bugs / 1 open, 159 closed

- [4.3.1](https://github.com/irods/irods/milestone/39)

    - 20 bugs / 47 open, 101 closed
    - goals
        - iinit to learn about pam_interactive (new auth framework)
        - support for HA (single irodsDelayServer defined in the catalog)

- [4.3.2](https://github.com/irods/irods/milestone/40)

    - 40 bugs / 198 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 135 bugs / 291 open, 0 closed

- New Development Work

    - investigating how OAuth2/OIDC fit in the C++ REST API

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - preparing 4.2.12 release
        - when adding/modifying a zone, connection strings are now checked for correctness

    - [iRODS Command Line Interface (CLI)](https://github.com/irods/irods_client_cli)
        - now in active development

    - Build and Packaging
        - adding boost/Qt5-style build system targets
        - consistent / better use of CMake
        - targeting gcc/libstdc++ again and defining minimum requirements
        - entered early stages of moving externals to use standard packaging tools
            - rpmbuild and dpkg-buildpackage

    - [iRODS Documentation](https://github.com/irods/irods_docs)
        - roadmap has been approved and published
            - https://irods.org/roadmap

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - topology tests can now be run in parallel
            - tests complete in ~2.25 hrs for provider, ~3 hrs for consumer (concurrency of 4)

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - migrating to new Dockerfile syntax to improve image builds
        - working on images for use with qtcreator
        - investigating various other improvements

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - working towards removing the required local database

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - preparing release of 4.3.3.0

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - refactor in progress
            - single binary that requires only one port
            - implemented and demonstrated parallel transfer
            - implemented partial support for several operations
            - requires iRODS 4.3.1

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - preparing 1.1.8 release

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - preparing 4.2.12 release
        - started effort to reduce build duration and compiler memory usage
            - minor reorganization
            - splitting source files into smaller parts

    - [R client (rirods)](https://github.com/irods/irods_client_library_rirods)
        - expected release: Summer 2023
        - usage discussion with KU Leuven 

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - preparing 4.2.12 release
        - fixed #2102: Unknown thread count when replicating 8MB files
        - working on #104: Upload > 20GB fails after server-to-server redirect using cache

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - 4.3.0.0 beta available at unstable.irods.org

    - [C++ S3 API](https://github.com/irods/irods_client_s3_cpp)
        - initial implementation has been merged into upstream
            - highly experimental

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - preparing 4.2.12 release

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - preparing 4.2.12 release

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - preparing 4.2.12 release

    - [NetCDF microservices](https://github.com/irods/irods_netcdf)
        - preparing 4.2.12 release
        - full HDF5 support could come later

- Background Items

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - next stage of refactor
            - add support for handling multiple AMQP endpoints
            - improve stewardship of AMQP connections
            - improve handling of connection errors
        - merged updated example ELK stack (used for training)

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)

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

    - [Hard Links Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_hard_links)
        - awaiting more use cases before release

    - [AWS S3 Lambda](https://github.com/irods/irods_client_aws_lambda_s3)
        - future release
            - could brute-force confirm checksums to detect renames
            - would persist metadata
        - could use atomic database operations to increase batch size > 1

    - Parallel Filesystem Integration
        - iRODS API plugin
        - have split BeeGFS and Lustre implementations into aggregator and listener
        - testing against known configurations

    - SMBRODS project to surface iRODS as SMB

    - CockroachDB Database Plugin

    - Cloud Browser

    - Member Ticketing System

- Discussion
