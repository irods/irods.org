Title: iRODS Development Update: February 2024
Date: 2024-02-26 16:00
Author: Kory Draughn
Slug: irods-development-update-february-2024
Status: published


Hello reader,

For this month's update, we'll start off with two important changes to the server. First, we're changing hierarchy resolution for write operations to prefer good replicas rather than stale replicas. This change is required to correctly support appending to data objects, avoiding data loss, and it's required for the new truncate API endpoint that's in active development. As a result of this change, we're also tweaking the rules of replication and the replication API. For the most part, replication will become a little more lenient in what it accepts. For example, targeting a good replica with a good source replica will result in a no-op. In some cases, clients will be allowed pass the same resource name for the source and destination.

The Metadata Guard rule engine plugin has been updated to fully support the atomic metadata operations API. Work to disallow use of `imeta rmw` and the APIs underlying it is now complete. Users can expect a new release within the coming weeks.

Python iRODS Client 2.0.0 was released. This release brings **pam_password** compatibility with iRODS 4.3, better TTL behavior, the ability to manipulate and query quotas, and more.

iRODS HTTP API 0.2.0 is now available. This release includes 57 closed issues based on community feedback and other areas that needed attention. You can view the list of closed issues, see [https://github.com/irods/irods_client_http_api/milestone/2?closed=1](https://github.com/irods/irods_client_http_api/milestone/2?closed=1). As for new development work, we've started working to allow the server to operate as an OAuth Protected Resource. This feature will allow the HTTP API to accept OAuth access tokens and verify them, resulting in more flexibility for client applications and a simpler OIDC implementation within the HTTP API.

For the iRODS S3 API, we've started refactoring it to not rely on C++20 coroutines. There are two reasons for doing this. The first being the development team's lack of knowledge and experience with the relatively new C++20 coroutines. The other reason being it helps with our transition from libc++ to libstdc++. Aside from that, the S3 API now supports the **DeleteObjects** API endpoint. The last big item for this project is we've started working to add support for Multipart uploads.

To wrap things up, NFSRODS 2.2.0 is available now. NFSRODS 2.1.0 was released in February 2022. That's two years! The big news with this release is that NFSRODS is now resilient to restarts of the iRODS server. This is an important enhancement because it helps to make the job of the administrator a little easier.

That's it for this month's development update.

See you next month!


### February Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - looking at UNC and/or NSF funding opportunities
    - working meeting
        - Thur, February 15, 2024, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - working meeting
        - Tues, February 27, 2024, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - developing C++ S3 implementation
    - working meeting
        - Fri, March 1, 2024, 3pm ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - draft paper for circulation among group
    - working on microservices
    - working meeting
        - Tues, February 20, 2024, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, February 14, 2024, 4pm ET
    - pam_interactive iRODS Authentication Plugin and OIDC
        - speakers: Alan King (iRODS) and Harry Kodden (SURF)

- [4.3.2](https://github.com/irods/irods/milestone/40)

    - 100 bugs / 358 open, 21 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 130 bugs / 286 open, 0 closed

- [5.0.0](https://github.com/irods/irods/milestone/41)

    - 3 bugs / 24 open, 0 closed

- [5.0 Backlog](https://github.com/irods/irods/milestone/6)

    - 0 bugs / 38 open, 0 closed

- New Development Work

    - implemented iRODS Password Booth
        - https://github.com/irods/irods_client_password_booth
        - CherryPy web application, uses PRC to let users modify their own password

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - decided the next major release of iRODS will be 5.0.0
        - changing hierarchy resolution for write operations to prefer good replicas
            - https://github.com/irods/irods/issues/7476
            - required in order to correctly append to a data object
            - existing implementation can lead to data loss
            - required to implement upcoming truncate API endpoint
        - changing rules of replication and the replication API endpoint
            - required as a result of changing the way hierarchy resolution works
            - targeting a good replica with a good source replica is now a no-op, not an error
            - clients are allowed to explicitly use the same resource for the src/dst in some cases
            - the server resolving a dst hier which is identical to src hier will not result in an error
            - the rules and API for phymv will remain unchanged

    - Build and Packaging
        - adding boost/Qt5-style build system targets
        - consistent / better use of CMake
        - iRODS 5.0.0 will be built against libstdc++
        - removed libs3 from externals
        - externals packages will have better version numbers moving forward
        - overhauled dependency declaration management for externals packages

    - [Metadata Guard](https://github.com/irods/irods_rule_engine_plugin_metadata_guard)
        - added support for the atomic metadata operations PEPs
        - working to disallow imeta rmw

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - preparing 2.0.0 release
            - added 4.3+ pam_password compatibility
            - better TTL behavior
            - support for opening data objects for append
            - improved documentation and stability
            - adding ability to manipulate and query quotas

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - released 0.2.0
        - working to allow the server to operate as an OAuth Protected Resource
            - adding support for confidential clients (i.e. client secret)
            - adding configuration option for enabling/disabling behavior
        - tested OIDC compatibility with external providers
            - https://github.com/irods/irods_client_http_api/issues/109
            - some providers are not standards compliant
        - fixed TLS communication issue with iRODS server
            - https://github.com/irods/irods_client_http_api/issues/249

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - renamed global_vars to irods_rule_vars
        - irods_rule_vars are now available in more contexts
        - global_vars name is now deprecated

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - began refactor to remove use of C++20 coroutines
            - https://github.com/irods/irods_client_s3_api/pull/90
            - derived from the HTTP API implementation
            - porting 0.1.0 functionality
        - implemented DeleteObjects API endpoint
        - began work to add support for multipart upload
            - will use store-and-forward approach

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - released 2.2.0

- Background Items

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - removed most Python 2 packages

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - support for podman contributed by Marco Roeland
            - https://github.com/irods/irods_testing_environment/pull/180

    - [iRODS GenQuery2](https://github.com/irods/irods_api_plugin_genquery2)
        - packages for 4.2 and 4.3 can be built using the iRODS Development Environment
            - use the plugin builder images

    - [iRODS Command Line Interface (CLI)](https://github.com/irods/irods_client_cli)
        - added support for many basic operations
            - ls, mv, tree, mkdir, get, put, cd, pwd, touch, etc
        - presented at UGM 2023

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - released 0.4.2
        - implemented PUT_SYNC from an S3 source/bucket
        - updated from single stream to multi-stream PUT, is now faster

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - release for 4.3.1 postponed until situation with elasticlient is resolved
            - https://github.com/irods/irods_capability_indexing/issues/128

    - [NetCDF microservices](https://github.com/irods/irods_netcdf)
        - released for 4.3.1
        - considering archiving this project in favor of other solutions
            - possible existing Python libraries are 'enough'

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - released 4.3.1.1
        - fixed tiering rules triggered by remote users (contributed by SURF)
        - fixed restaging replicas accessed in various tiers (contributed by SURF)
        - fixed restaging to higher tiers
        - fixed failing to migrate to tier with existing replica
        - expanded testing and documentation

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - released for 4.3.1

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - fixed issue with decoupled mode not being honored after a server redirect
        - fixed issue with istream append errors
            - caused by iRODS doing a stat before the file exists in S3
            - file hasn't been closed and flushed from cache yet
        - libs3 has been absorbed into this repository
        - re-licensed to LGPLv3/GPLv2

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - now compatible with iRODS 4.3.1
        - added support for remembering rows per page
            - /servers, /resources, /users, /groups
        - added ability to view ticket information
            - ticket creation not supported yet
        - added ability to change where the delay server is run
            - retrieving where the delay server runs is not supported yet

    - [iRODS Documentation](https://github.com/irods/irods_docs)
        - documented iRODS XML protocol
        - roadmap has been approved and published
            - https://irods.org/roadmap

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - working towards removing the required local database

    - [R client (rirods)](https://github.com/irods/irods_client_library_rirods)
        - released 0.1.1
        - submitted and accepted to CRAN
        - new website - https://irods4r.org
        - presented at UGM 2023

    - Policy Composition
        - merged PR submitted for 4.3.0 compatibility

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

    - CockroachDB Database Plugin

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - released for 4.3.1
        - next stage of refactor
            - add support for handling multiple AMQP endpoints
            - improve stewardship of AMQP connections
            - improve handling of connection errors
        - merged updated example ELK stack (used for training)

    - [CURL microservices](https://github.com/irods/irods_microservice_plugins_curl)
        - released for 4.3.1

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - released for 4.3.1

    - [mungefs](https://github.com/irods/mungefs)
        - removed dependency on externals, can be built as a standalone project

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - preparing release of 4.3.3.0
        - added option to test framework that allows users to install other versions of iRODS 4.3
        - updated FilePermissionEnum to support new permission levels
        - added server version detection methods for iRODS 4.3
        - StartupPack now sends the correct value for <option> element

- Discussion
