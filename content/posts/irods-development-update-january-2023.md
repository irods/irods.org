Title: iRODS Development Update: January 2023
Date: 2023-01-23 16:00
Author: Kory Draughn
Slug: irods-development-update-january-2023
Status: published


Happy New Year!

We hope everyone had a wonderful holiday break. If not, then perhaps this update will help with that :-)

We've spent a good amount of time fixing memory issues in the iRODS 4.3.0 server. All of that work is now merged and the server is more stable for it. We've also been working to improve thread-safety within the server.

If you compile iRODS from source frequently, then you'll be happy to know that support for [Ccache](https://ccache.dev) has been added to the iRODS Development Environment. This enhancement has significantly improved compile-times. Iterating on the server has never been easier.

We have an update about the GenQuery reimplementation. We've decided to ship it as a separate package. It will be maintained in its own repository so that we can get it in the hands of the community early. Doing that allows us to deploy bug fixes and enhancements frequently because it won't be tied to a particular version of the iRODS server. We'll release more information as development moves forward. If that sounds interesting, then please get involved. We would love to hear feedback. You can follow along at [https://github.com/irods/irods_api_plugin_genquery2](https://github.com/irods/irods_api_plugin_genquery2).

The iRODS Testing Environment now allows SSL to be enabled for federation testing. We've also added an experimental xunit viewer for viewing test results.

The iCommands are receiving some improvements. `iinit` will soon provide options that instruct it to prompt for SSL and authentication configuration properties. Handling of long path strings is being improved as well. `itree` is being updated to match the behavior of the Linux `tree` command more closely.

Resource objects obtained via the Python iRODS Client (PRC) now expose the resource parent ID, resource parent name, and resource hierarchy. Compatibility with Microsoft Windows has been improved in the PRC as well.

We've tested and verified that the S3 Resource Plugin for iRODS 4.2.11 and 4.3.0 is compatible with [Wasabi](https://wasabi.com) S3.

To wrap up, we've released a new version of the Globus Connector for iRODS 4.2.11.

We hope you found this update informative.

See you next month!


### January Technology Working Group

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - working on whitepaper covering WG activities and findings
    - working meeting
        - Tues, January 17, 2023, 10am ET

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - did not receive CZI funding
    - looking at UNC and/or NSF funding opportunities
    - working meeting
        - Thur, January 19, 2023, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - working meeting
        - Tues, January 24, 2023, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - planning and investigation into custom C++ S3 implementation
    - working meeting
        - Fri, January 6, 2023, 3pm ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, February 15, 2023
    - speaker, TBD

- [4.2.12](https://github.com/irods/irods/milestone/38)

    - 30 bugs / 41 open, 81 closed

- [4.3.1](https://github.com/irods/irods/milestone/39)

    - 14 bugs / 32 open, 85 closed
    - goals
        - iinit to learn about pam_interactive (new auth framework)
        - support for HA (single irodsDelayServer defined in the catalog)

- [4.3.2](https://github.com/irods/irods/milestone/40)

    - 33 bugs / 168 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 132 bugs / 278 open, 0 closed

- New Development Work

    - no updates

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - working with SURF to officially support pam_interactive auth plugin
            - targeting 4.3.1 or 4.3.2
        - merged fixes for memory leaks found in 4.3.0 server
        - GenQuery reimplementation will be released independently of the server
            - will be released as an API plugin along with microservices
            - allows admins to opt into using it
            - allows frequent updates to the API plugin and microservices
        - improving thread-safety around server properties
        - iinit now supports longer paths for home directory
        - adding prompts for SSL configuration and authentication scheme to iinit
        - updating itree to match the behavior of the Linux tree command more closely

    - Build and Packaging
        - adding boost/Qt5-style build system targets
        - consistent / better use of CMake
        - targeting gcc/libstdc++ again and defining minimum requirements
        - entered early stages of moving externals to use standard packaging tools
            - rpmbuild and dpkg-buildpackage

    - [iRODS Documentation](https://github.com/irods/irods_docs)
        - updating roadmap

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - added SSL support for federation scripts
        - added experimental xunit viewer for viewing test results

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - improved compile time by adding support for Ccache

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - working towards removing the required local database

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - released 0.9.3
        - increased maximum size of requests for uploading data via the /stream endpoint

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - released 0.3.1

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - preparing 1.1.6 release
        - added Microsoft Windows compatibility (all modules load and make_session works)
        - iRODS keywords option use in DataObject.open() now regularized
        - exposed parent id, parent name, and resource hierarchy for resource objects

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)

    - [R client (rirods)](https://github.com/irods/irods_client_library_r_cpp)
        - https://github.com/irods/irods_client_library_rirods
        - Martin Schobben presented rirods at latest TRiRODS event (video is available now)
        - expected release: Summer 2023

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - successfully tested with Wasabi S3 (4.2.11 and 4.3.0)

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - released 4.2.11.2

    - [C++ S3 API](https://github.com/irods/irods_client_s3_cpp)
        - https://github.com/irods/irods_client_s3_cpp
        - added unit tests for basic operations
        - working to add the persistence necessary for multipart uploads

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

    - [Jargon](https://github.com/DICE-UNC/jargon)

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
        - https://github.com/irods/irods_client_cli

    - [Hard Links Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_hard_links)
        - awaiting more use cases before release
        - https://github.com/irods/irods_rule_engine_plugin_hard_links

    - [AWS S3 Lambda](https://github.com/irods/irods_client_aws_lambda_s3)
        - future release
            - could brute-force confirm checksums to detect renames
            - would persist metadata
        - could use atomic database operations to increase batch size > 1
        - https://github.com/irods/irods_client_aws_lambda_s3

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

