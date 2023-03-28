Title: iRODS Development Update: March 2023
Date: 2023-03-28 17:00
Author: Kory Draughn
Slug: irods-development-update-march-2023
Status: published


Hello Everyone,

To start things off, we've modified how resource hierarchy resolution works with replica numbers. If a client requests a specific replica by number, the resource hosting that replica will return that replica if it votes higher than 0.0. Otherwise, an error is returned. The `||` operator can be used with `DATA_RESC_HIER` in GenQuery now. `iinit` (4.3.1 only) now supports the PAM interactive authentication plugin.

The iCommands have been improved. We've restored the ability to create users via `igroupadmin mkuser`. The help text for `igroupadmin` has been updated as well. Not only that, but improvements for pattern matching in `itree` have been merged and `iqstat` now supports searching all users for a specific delay rule ID.

Work on groupadmin support in the Python iRODS client (PRC) is now complete. With that, raw ACL retrieval no longer fails when deleted users are encountered. Work to expose asynchronous transfer information for PUT and GET has started. The goal for this is to give applications built on top of the PRC a way to report progress.

We've updated the iRODS Globus plugin to be compatible with iRODS 4.3.0. You can expect a release soon.

The last item for this month is about federation and negotiation keys. If you rely on federation, then consider providing feedback on the issue at [https://github.com/irods/irods/issues/6826](https://github.com/irods/irods/issues/6826). We look forward to hearing what the community thinks about this.

We hope you found this month's update informative.

Be safe and see you in April!


### March Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - did not receive CZI funding
    - looking at UNC and/or NSF funding opportunities
    - working meeting
        - Thur, March 16, 2023, 10am ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - working on whitepaper covering WG activities and findings
    - working meeting
        - Tues, March 21, 2023, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - working meeting
        - Tues, March 28, 2023, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - planning and investigation into custom C++ S3 implementation
    - working meeting
        - Fri, April 7, 2023, 3pm ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, May 10, 2023, 4pm ET
    - TBD

- [4.2.12](https://github.com/irods/irods/milestone/38)

    - 18 bugs / 26 open, 127 closed

- [4.3.1](https://github.com/irods/irods/milestone/39)

    - 15 bugs / 33 open, 93 closed
    - goals
        - iinit to learn about pam_interactive (new auth framework)
        - support for HA (single irodsDelayServer defined in the catalog)

- [4.3.2](https://github.com/irods/irods/milestone/40)

    - 35 bugs / 182 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 134 bugs / 280 open, 0 closed

- New Development Work

    - initial investigation into PyQt6 as cross-platform approach for small use-case-specific GUIs
        - Nirav: investigating an iRODS-aware Django widget (also Python)

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - modified how hierarchy resolution works for operations on a replica targeted by number
            - if the resource hosting the target replica votes > 0.0, that replica wins the vote
            - if the resource hosting the target replica votes 0.0, an error is returned
        - added support for || operator with DATA_RESC_HIER in GenQuery
        - iinit now supports pam_interactive auth plugin in main/4-3-stable
             - https://github.com/irods/irods/issues/6576
        - groupadmin mkuser behaving as expected, with better help text
        - itree regex/globs working for both listing and excluding objects
        - iqstat now allows -a (all users) with a taskID

    - Build and Packaging
        - adding boost/Qt5-style build system targets
        - consistent / better use of CMake
        - targeting gcc/libstdc++ again and defining minimum requirements
        - entered early stages of moving externals to use standard packaging tools
            - rpmbuild and dpkg-buildpackage

    - [iRODS Documentation](https://github.com/irods/irods_docs)
        - first draft of the roadmap

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - migrating to new Dockerfile syntax to improve image builds
        - working on images for use with qtcreator
        - investigating various other improvements

    - [Metalnx](https://github.com/irods-contrib/metalnx-web) / [Jargon](https://github.com/DICE-UNC/jargon)
        - preparing release of 2.6.1
        - working towards removing the required local database

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - increased maximum size of requests for uploading data via the /stream endpoint

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - improved groupadmin functionality
        - raw ACL retrievals correctly interprets deleted users
        - working on Windows use cases
        - working to expose transfer progress information

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)

    - [R client (rirods)](https://github.com/irods/irods_client_library_rirods)
        - expected release: Summer 2023
        - usage discussion with KU Leuven

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - successfully tested with Wasabi S3 (4.2.11 and 4.3.0)
        - potential performance test suite against multiple services

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - releasing 4.3.0.0

    - [C++ S3 API](https://github.com/irods/irods_client_s3_cpp)
        - initial implementation complete
        - packaging works
        - working on test suite configuration and execution

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)

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
        - full HDF5 support could come later

- Discussion

    - federation redirection - in regard to correct zone_key signing
        - https://github.com/irods/irods/issues/6826#issuecomment-1458901344
