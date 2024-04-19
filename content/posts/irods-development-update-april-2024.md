Title: iRODS Development Update: April 2024
Date: 2024-04-19 12:00
Author: Kory Draughn
Slug: irods-development-update-april-2024
Status: published


Hello reader,

We're more than half-way through April now, which means the [iRODS User Group Meeting](https://irods.org/ugm2024) is right around the corner. If you're curious about iRODS, consider registering for the conference. We hope to see you there.

iRODS 4.3.2 is inching closer to a release. The next release of the server brings several deprecations: GeneralUpdate API, RBUDP, msiSendMail, msiSetResource, and BACKUP_RESC_NAME_KW. Not only that, but the GenQuery2 parser has been absorbed into the server and will ship with the 4.3.2 release. You may be wondering if the GenQuery2 parser is used within the server and the answer is ... not at this time. There are plans to start using it within the server and plugins, but only after confidence is built and that takes time.

Metadata Guard 4.3.1.1 is now available. This release includes support for the atomic metadata operations API.

Python iRODS Client 2.0.1 is almost ready. We're down to the final pull requests. We appreciate your patience.

Last but not least, HTTP API 0.3.0 is now available. With this release comes improved support for OpenID Connect and TLS.


### April Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - working meeting
        - Thur, April 18, 2024, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a flexible authentication mechanism
    - now incorporated into iRODS 4.3.1
    - working meeting
        - Tues, April 23, 2024, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - developing C++ S3 implementation
    - working meeting
        - Fri, May 3, 2024, 3pm ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - draft paper for circulation among group
    - working on microservices
    - working meeting
        - Tues, April 16, 2024, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, August 14, 2024, 4pm ET
    - speaker, TBD

- [4.3.2](https://github.com/irods/irods/milestone/40)

    - 19 bugs / 43 open, 105 closed

- [4.3.3](https://github.com/irods/irods/milestone/42)

    - 21 bugs / 67 open, 0 closed

- [4.3.4](https://github.com/irods/irods/milestone/43)

    - 69 bugs / 237 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 129 bugs / 292 open, 0 closed

- [5.0.0](https://github.com/irods/irods/milestone/41)

    - 6 bugs / 42 open, 2 closed

- [5.0 Backlog](https://github.com/irods/irods/milestone/6)

    - 0 bugs / 37 open, 0 closed

- New Development Work

    - started initial planning/design work for improved startup sequence for iRODS 5.0

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - preparing 4.3.2 release
        - adding GenQuery2
            - will not be used within the server for this release
        - deprecated, may be removed in iRODS 5.0
            - GeneralUpdate, RBUDP, BACKUP_RESC_NAME_KW
            - msiSendMail, msiSetResource

    - [iRODS Documentation](https://github.com/irods/irods_docs)
        - added policy for reporting security vulnerabilities

    - iRODS Kubernetes Testing Environment
        - v9 of the build and test infrastructure
        - can stand up iRODS Providers and Consumers
        - can run core tests
        - running in RENCI K8s cluster, but could run on any cluster

    - [Metadata Guard](https://github.com/irods/irods_rule_engine_plugin_metadata_guard)
        - released 4.3.1.1

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - preparing 2.0.1 release
            - adding support for automated testing using GitHub actions
            - exception info is preserved for PAM login failures
            - adding iinit-like enhancements for auto-refresh and initialization of PAM sessions

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - released 0.3.0

- Background Items

    - Build and Packaging
        - adding boost/Qt5-style build system targets
        - consistent / better use of CMake
        - iRODS 5.0.0 will be built against libstdc++
        - published new externals packages
            - includes packages for libc++ and libstdc++
            - updated clang to 13.0.1
            - improved dependency declarations
        - MySQL database plugin no longer conflicts with MariaDB on Ubuntu
        - includes custom CMake package version file
            - accounts for the version numbering change

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - updated to support libstdc++

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - released 0.2.0
            - removed use of C++20 coroutines
            - implemented multipart uploads
                - using 'store and forward', at least for now
            - implemented DeleteObjects and GetObjectTagging
            - added config validation, connection pooling, and more

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - released 4.3.1.0
            - removed dependency on cpr and elasticlient
            - added support for TLS communication with elasticsearch
            - added support for Basic Authentication with elasticsearch
            - requires a minimum version of elasticsearch 7

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - support for podman contributed by Marco Roeland
            - https://github.com/irods/irods_testing_environment/pull/180

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - renamed global_vars to irods_rule_vars
        - irods_rule_vars are now available in more contexts
        - global_vars name is now deprecated

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - released 4.3.1.1
        - fixed tiering rules triggered by remote users (contributed by SURF)
        - fixed restaging replicas accessed in various tiers (contributed by SURF)
        - fixed restaging to higher tiers
        - fixed failing to migrate to tier with existing replica
        - expanded testing and documentation

    - [NetCDF microservices](https://github.com/irods/irods_netcdf)
        - released for 4.3.1
        - considering archiving this project in favor of other solutions
            - possible existing Python libraries are 'enough'

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

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - released for 4.3.1
        - Looking at issue of a write doing a create/open/write/close
        - Updating README to describe how to set spOption for ips.

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - fixed issue with decoupled mode not being honored after a server redirect
        - fixed issue with istream append errors
            - caused by iRODS doing a stat before the file exists in S3
            - file hasn't been closed and flushed from cache yet
        - libs3 has been absorbed into this repository
        - re-licensed to LGPLv3/GPLv2

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - released 2.2.0

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - now compatible with iRODS 4.3.1
        - added support for remembering rows per page
            - /servers, /resources, /users, /groups
        - added ability to view ticket information
            - ticket creation not supported yet
        - added ability to change where the delay server is run
            - retrieving where the delay server runs is not supported yet

    - [iRODS Password Booth](https://github.com/irods/irods_client_password_booth)
        - CherryPy web application, uses PRC to let users modify their own password

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

    - [Mungefs](https://github.com/irods/mungefs)
        - removed dependency on externals, can be built as a standalone project

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - preparing release of 4.3.3.0
        - added option to test framework that allows users to install other versions of iRODS 4.3
        - updated FilePermissionEnum to support new permission levels
        - added server version detection methods for iRODS 4.3
        - StartupPack now sends the correct value for <option> element

- Discussion
