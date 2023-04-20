Title: iRODS Development Update: April 2023
Date: 2023-04-20 12:00
Author: Kory Draughn
Slug: irods-development-update-april-2023
Status: published


Happy Thursday Everyone,

A lot has happened since last month. We are closer than ever to a release of iRODS 4.2.12. Our annual [iRODS User Group Meeting (UGM)](https://irods.org/ugm2023) is right around the corner as well. Registration is open for people who want to learn more about iRODS.

For the server, we've made it so that `iexit` no longer removes the authentication file for the service account. This change protects administrators from losing the ability to manage their server. Of course, if you really need to remove the authentication file, then you have the option to forcibly remove it. `imkdir` has been tweaked to improve performance in regard to inheritance and large collections. We've also implemented new microservices which give users the ability to inspect JSON objects using the iRODS Rule Language. This is specifically useful for handling PEPs that deal with JSON strings.

We've fixed some important issues in the Logical Quotas rule engine plugin. It now uses the local rodsadmin user to update quota values. This avoids potential permission issues. Not only that, but it no longer crashes the agent when given unsupported rule text via `irule`.

Development on the new iRODS CLI has started again. We don't have any specifics at this time, but as soon as we have something to show, you'll know about it.

The Testing Environment has received a nice improvement in regard to topology testing. Topology tests can now be run in parallel. Before this change, the tests took upwards of 8 hours to complete. With this latest change, we've witnessed the tests taking as little as 2.25 hours to complete on our development machines.

Initial work on the iRODS S3 API has been merged into upstream. This is still a highly experimental project, so there are still quite a few things to resolve before it's ready for prime time.

Due to feedback from the community and what we learned working on the iRODS S3 API, we have started working on a full rewrite of the C++ REST API. The primary goals are to decrease the number of ports needed to run the application, consolidate all binaries, and add support for parallel transfer. We'll have more information as the rewrite is fleshed out. Stay tuned.

It's been a long time coming, but we've finally released a new version of Metalnx. This release sets us up to start cleaning up the Metalnx project. Specifically, removing the local database required by Metalnx.

Last but not least, Python iRODS Client 1.1.7 and Automated Ingest 0.4.1 have been released.

That wraps up this month's update.

See you next month!


### April Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - did not receive CZI funding
    - looking at UNC and/or NSF funding opportunities
    - working meeting
        - Thur, April 20, 2023, 10am ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - working on whitepaper covering WG activities and findings
    - working meeting
        - Tues, April 18, 2023, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - working meeting
        - Tues, April 25, 2023, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - planning and investigation into custom C++ S3 implementation
    - working meeting
        - Fri, May 5, 2023, 3pm ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, May 10, 2023, 4pm ET
    - TBD

- [4.2.12](https://github.com/irods/irods/milestone/38)

    - 9 bugs / 11 open, 148 closed

- [4.3.1](https://github.com/irods/irods/milestone/39)

    - 16 bugs / 40 open, 99 closed
    - goals
        - iinit to learn about pam_interactive (new auth framework)
        - support for HA (single irodsDelayServer defined in the catalog)

- [4.3.2](https://github.com/irods/irods/milestone/40)

    - 36 bugs / 189 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 135 bugs / 287 open, 0 closed

- New Development Work

    - initial investigation into PyQt6 as cross-platform approach for small use-case-specific GUIs
        - Nirav: investigating an iRODS-aware Django widget (also Python)

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - iexit will no longer remove auth file for service accounts, unless forced
        - tweaked imkdir to improve performance in regard to inheritance
        - added suite of (readonly) JSON microservices

    - [iRODS Command Line Interface (CLI)](https://github.com/irods/irods_client_cli)
        - now in active development

    - Build and Packaging
        - adding boost/Qt5-style build system targets
        - consistent / better use of CMake
        - targeting gcc/libstdc++ again and defining minimum requirements
        - entered early stages of moving externals to use standard packaging tools
            - rpmbuild and dpkg-buildpackage

    - [iRODS Documentation](https://github.com/irods/irods_docs)
        - first draft of the roadmap
        - updated REPF docs to reflect how things work

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - topology tests can now be run in parallel
            - tests complete in ~2.25 hrs for provider, ~3 hrs for consumer (concurrency of 4)

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - migrating to new Dockerfile syntax to improve image builds
        - working on images for use with qtcreator
        - investigating various other improvements

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - released 2.6.1
        - working towards removing the required local database

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - preparing release of 4.3.3.0

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - preparing to do a full refactor using Boost.Beast
            - lower the number of ports to one or two at most
            - single binary
            - add parallel transfer endpoint

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - released 1.1.7

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)

    - [R client (rirods)](https://github.com/irods/irods_client_library_rirods)
        - expected release: Summer 2023
        - usage discussion with KU Leuven 

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - successfully tested with Wasabi S3 (4.2.11 and 4.3.0)
        - potential performance test suite against multiple services

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - 4.3.0.0 beta available at unstable.irods.org

    - [C++ S3 API](https://github.com/irods/irods_client_s3_cpp)
        - initial implementation has been merged into upstream
            - still highly experimental

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - plugin now uses a rodsadmin connection to update quota values
            - avoids permission related issues
        - fixed issue where unsupported rule text submitted via irule caused agents to crash

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - released 0.4.1

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
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
        - full HDF5 support could come later

- Discussion
