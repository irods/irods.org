Title: iRODS Development Update: December 2022
Date: 2022-12-21 14:30
Author: Kory Draughn
Slug: irods-development-update-december-2022
Status: published


Hello everyone!

It's hard to believe we're already at the end of 2022. Time sure does fly.

To start things off, we've started working on updating the roadmap for iRODS. iRODS 4.3.0 was released back in June of this year and it's time to start thinking about what the next major release should deliver. We hope to have something to show soon.

Back in October, we mentioned that we were experimenting with allowing the identity attached to a connection/agent to be changed in realtime. Well, that effort was a success and that work will be available to all clients in the form of a new API plugin called `rc_switch_user`. With that also comes a new C header file, `library_features.h`, which gives C/C++ developers a way to query the iRODS library for various features at compile-time.

Python iRODS Client 1.1.6 is very close to a release. It will include enhancements and bug fixes for SSL, Microsoft Windows, permissions, and various other things. For example, the PRC now honors SSL settings in **irods_environment.json** just like the iCommands. Users will no longer be required to pass a default generated context to enable SSL. We hope Python users find the upcoming release very helpful.

For the iRODS Development Environment, we're adding support for Red Hat Universal Base Image 8 (ubi8), updating the Docker files to use new Dockerfile syntax/features, and adding Docker images for use with QtCreator. As for the iRODS Testing Environment, we've added support for Rocky Linux 8.

Notable mentions include new releases of the C++ REST API and the Zone Management Tool.

That wraps up the final development update for this year.

Have a wonderful holiday and see you in 2023!


### December Technology Working Group

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - working on whitepaper covering WG activities and findings
    - working meeting
        - Tues, January 17, 2023, 10am ET

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - did not receive CZI funding
    - looking at UNC and/or NSF funding opportunities
    - working meeting
        - Thur, December 15, 2022, 10am ET

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

    - 40 bugs / 70 open, 69 closed

- [4.3.1](https://github.com/irods/irods/milestone/39)

    - 13 bugs / 33 open, 68 closed
    - goals
        - iinit to learn about pam_interactive (new auth framework)
        - support for HA (single irodsDelayServer defined in the catalog)
        - GenQuery reimplemented in flex/bison

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 133 bugs / 280 open, 0 closed

- New Development Work

    - no updates

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - working with SURF to officially support pam_interactive auth plugin
            - targeting 4.3.1 or 4.3.2
        - client connection information is now available in acPreConnect
        - added new api plugin: rc_switch_user
        - added library_features.h for detecting various library features at compile-time
        - delay server migration now considers host_resolution configuration
        - working to resolve memory leaks found in 4.3.0

    - Build and Packaging
        - adding boost/Qt5-style build system targets
        - consistent / better use of CMake
        - targeting gcc/libstdc++ again and defining minimum requirements
        - entered early stages of moving externals to use standard packaging tools
            - rpmbuild and dpkg-buildpackage

    - [iRODS Documentation](https://github.com/irods/irods_docs)
        - updating roadmap

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - added support for Rocky Linux 8

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - migrating to new Dockerfile syntax
        - adding support for ubi8
        - adding containers for use with QtCreator

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - working towards removing the required local database

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - released 0.9.3
        - increased maximum size of requests for uploading data via the /stream endpoint

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - released 0.3.1

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - preparing 1.1.6 release
        - improved support for SSL (no longer requires user to construct SSLContext)
        - session object is cleaned up at application exit
        - user type is now available in iRODSAccess objects
        - session.permissions() has been deprecated in favor of session.acls()
        - restored support for allowing groupadmins to create groups
        - improved support for obfuscation algorithm in Microsoft Windows 

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)

    - [R client (rirods)](https://github.com/irods/irods_client_library_r_cpp)
        - https://github.com/irods/irods_client_library_rirods
        - Martin Schobben presented rirods at latest TRiRODS event (video is available now)
        - expected release: Summer 2023

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - merged support for Deep Archive (4.2 and 4.3)

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - working on fix for overwrites not updating the modify time
        - updated code for 4.3.0 (not yet released)

    - [Jargon](https://github.com/DICE-UNC/jargon)

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)

    - [C++ S3 API](https://github.com/irods/irods_client_s3_cpp)
        - selected Boost.Beast as the HTTP library
        - implemented basic support for authentication
        - implemented basic support for PutObject and GetObject

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - developing workaround for ~100byte leak per call to _delayExec()
        - will split the work into a set number of delay rules for initial walk of collection

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

    - [Publishing Capability](https://github.com/irods/irods_capability_publishing)
        - needs more README
        - awaiting CI

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)

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

