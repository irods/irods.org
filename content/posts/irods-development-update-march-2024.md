Title: iRODS Development Update: March 2024
Date: 2024-03-13 11:00
Author: Kory Draughn
Slug: irods-development-update-march-2024
Status: published


Hello reader,

It's time for another development update. For the server, the trim API received an important bug fix so that it can no longer trim the last replica. The `--link` option for `iput` and `irsync` was updated to correctly ignore symlinks. Before this change, the `--link` option would result in immediate termination of the operation.

There's been a huge amount of activity in regard to the build and packaging effort. We now offer packages built against libc++ (for the 4.3 series) and libstdc++ (for the upcoming 5.x series). Dependency declarations for externals packages are better. The Clang compiler has been bumped to version 13.0.1. Users experiencing packaging issues involving the MySQL database plugin and MariaDB packages will be happy to know we've resolved the problem. And finally, the CMake package version file has been updated to meet the requirements of the version numbering change. As a result, the Docker-based Development Environment has been updated to support libstdc++.

Work on the Kubernetes Testing Environment is progressing. For those unaware, we've been working on new test infrastructure designed to run all tests on every GitHub pull request, hands-free. As of now, we can launch iRODS Providers and Consumers and run core tests. There's even a GUI! We see a lot of promise, but there's still a lot of work to do.

We have released the Indexing capability plugin for iRODS 4.3.1. The plugin now uses **Boost.Beast** for HTTP communication with Elasticsearch. This release includes support for TLS communication and Basic authentication with Elasticsearch. The plugin is designed to work with Elasticsearch 7 and later. An important note about this release - the **document-type** rule engine plugin is no longer provided by the Indexing capability plugin and as a result, you'll need to remove the **document-type** rule engine plugin from your server_config.json file. See the README at [https://github.com/irods/irods_capability_indexing/tree/88bbf7ba6a8276c1349ad41afb0346fbb0ca9ac8](https://github.com/irods/irods_capability_indexing/tree/88bbf7ba6a8276c1349ad41afb0346fbb0ca9ac8) for details.

Metadata Guard 4.3.1.1 is almost ready. The release will land shortly after this update. The big news for this release is it now understands the atomic metadata operations API PEPs.

The Python iRODS Client (PRC) is receiving steady improvements. Work to add support for automated testing via GitHub actions is slowly taking shape. Support for PAM is being improved. Specifically, the exception information will be preserved following PAM login failures. Last but not least, the PRC is growing iinit-like capabilities such as auto-refresh and initialization of PAM sessions.

We'll end things with this ... iRODS S3 API 0.2.0 is now available! This release includes 25 closed issues providing enhancements such as **multipart upload**, connection pooling, configuration validation, etc. To view the list of closed issues, see [https://github.com/irods/irods_client_s3_api/milestone/2?closed=1](https://github.com/irods/irods_client_s3_api/milestone/2?closed=1). Docker images are available at Docker Hub.

See you next month!


### March Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - working meeting
        - Thur, March 21, 2024, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a flexible authentication mechanism
    - now incorporated into iRODS 4.3.1
    - working meeting
        - Tues, March 26, 2024, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - developing C++ S3 implementation
    - working meeting
        - Fri, April 5, 2024, 3pm ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - draft paper for circulation among group
    - working on microservices
    - working meeting
        - Tues, March 19, 2024, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, August 14, 2024, 4pm ET
    - speaker, TBD

- [4.3.2](https://github.com/irods/irods/milestone/40)

    - 115 bugs / 382 open, 53 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 130 bugs / 287 open, 0 closed

- [5.0.0](https://github.com/irods/irods/milestone/41)

    - 2 bugs / 30 open, 1 closed

- [5.0 Backlog](https://github.com/irods/irods/milestone/6)

    - 0 bugs / 37 open, 0 closed

- New Development Work

    - no updates

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - decided the next major release of iRODS will be 5.0.0
        - stopped trim API from trimming the last replica
        - fixed handling of --link option in iput and irsync

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

    - iRODS Kubernetes Testing Environment
        - v9 of the build and test infrastructure
        - can stand up iRODS Providers and Consumers
        - can run core tests
        - running in RENCI K8s cluster, but could run on any cluster

    - [Metadata Guard](https://github.com/irods/irods_rule_engine_plugin_metadata_guard)
        - preparing 4.3.1.1 release

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - released 4.3.1.0
            - removed dependency on cpr and elasticlient
            - added support for TLS communication with elasticsearch
            - added support for Basic Authentication with elasticsearch
            - requires a minimum version of elasticsearch 7

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - preparing 2.0.1 release
            - adding support for automated testing using GitHub actions
            - exception info is preserved for PAM login failures
            - adding iinit-like enhancements for auto-refresh and initialization of PAM sessions

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - working to allow the server to operate as an OAuth Protected Resource
            - adding support for confidential clients (i.e. client secret)
            - adding configuration option for enabling/disabling behavior

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - released 0.2.0
            - removed use of C++20 coroutines
            - implemented multipart uploads
                - using 'store and forward', at least for now
            - implemented DeleteObjects and GetObjectTagging
            - added config validation, connection pooling, and more

- Background Items

    - [iRODS Documentation](https://github.com/irods/irods_docs)
        - documented iRODS XML protocol
        - roadmap has been approved and published
            - https://irods.org/roadmap

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

    - rcDataObjTruncate - deprecation and new API endpoint
        - https://github.com/irods/irods/issues/7104 (new API)
        - https://github.com/irods/irods/issues/7555 (deprecate current API)
        - is anyone using the current endpoint?
            - currently truncates all replicas
            - does not honor policy, hierarchies, etc.
        - rc_replica_truncate/_ftruncate?
        - alternatively, we just alter the existing endpoint rather than deprecate/new

    - iRODS 5.0.0 - hostnames and ephemeral servers
        - https://github.com/irods/irods/issues/7428
        - want to be normal and boring and cloudy
        - gets us 'most' of the way
            - detached mode for unixfilesystem and s3
            - all servers have database connection information (all as providers)
        - except these things that use server-server connections
            - ips
            - delay server
            - izonereport
            - irods-grid
