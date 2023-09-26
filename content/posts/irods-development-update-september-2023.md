Title: iRODS Development Update: September 2023
Date: 2023-09-26 17:00
Author: Kory Draughn
Slug: irods-development-update-september-2023
Status: published


Hello Everyone,

To start this month's update, let's talk about two new API endpoints that will be provided by iRODS 4.3.1. The first API is called `rc_get_resource_info_for_operation`. It is designed as a more flexible alternative to `rcGetHostForPut` and `rcGetHostForGet`. The problem with those APIs is that they only return the hostname of the server holding the storage. Any hierarchy information obtained on the server-side is thrown away. The new API improves upon the old APIs by returning the hostname and the resource hierarchy. The second API is `rc_get_library_features`. This API allows non-C/C++ clients to query the connected server for supported features. The goal of this is to give clients a proper way to detect features without needing to check version numbers. The C++ connection pool library has grown new connection refresh options. These options are important for C++ clients which run as servers (e.g. the HTTP API). We've improved the delay server migration logic by making it more difficult for there to be two or more delay servers running within the same zone.

Here's a big one, we're planning to make iRODS 4.4 compile against libstdc++ by default. This change is important because libstdc++ is installed by default on many Linux distributions. This change also means iRODS becomes more approachable for people who have to compile from source, among other things.

In preparation of iRODS 4.3.1, we've made some adjustments to the set of externals packages needed to compile iRODS Consortium projects. **jansson**, **cpr**, **elasticlient**, and **imagemagick** will not be shipped as externals packages any longer. Due to the OIDC work for the HTTP API, we've added **jwt-cpp** as an externals package.

Development on the iRODS S3 API is going very well. Progress is slow, but steady. We've finally fixed issues with HMAC signatures. This was a roadblock in the beginning, but now the path is clear and we expect things to be mostly straight forward. Not only that, but we've improved the implementations for **ListObjectV2** and **HeadObject**. We're also starting to see some success with the AWS client. We're hoping to have the iRODS S3 API ready _(for test purposes)_ shortly after the release of iRODS 4.3.1. We know there's a lot of interest surrounding this project, so stay tuned.

Talk to you next month!


### September Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - looking at UNC and/or NSF funding opportunities
    - HackDay scheduled Sept 22, may preclude the meeting itself
    - working meeting
        - Thur, September 21, 2023, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - working meeting
        - Tues, September 26, 2023, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - developing C++ S3 implementation
    - working meeting
        - Fri, October 6, 2023, 3pm ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - draft paper for circulation among group
    - working on microservices
    - working meeting
        - Tues, September 19, 2023, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, December 6, 2023, 4pm ET
    - speaker, TBD

- [4.3.1](https://github.com/irods/irods/milestone/39)

    - 4 bugs / 15 open, 202 closed
    - goals
        - targeting end of September for release
        - address memory leaks
        - iinit to learn about pam_interactive (new auth framework)
        - support for HA (single irodsDelayServer defined in the catalog)

- [4.3.2](https://github.com/irods/irods/milestone/40)

    - 69 bugs / 260 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 137 bugs / 293 open, 0 closed

- [4.4.0](https://github.com/irods/irods/milestone/41)

    - 1 bugs / 9 open, 0 closed

- New Development Work

    - documenting iRODS XML protocol
    - accepted project template for building resource plugins
        - https://github.com/irods/irods_project_template_cpp_resource_plugin

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - delay server now checks if it's the leader before running any rules
        - added new API endpoint: rx_get_resource_info_for_operation
        - added new API endpoint: rx_get_library_features
        - connection pool now supports new refresh options
            - via age, retrieval count, and resource modifications
        - fixed several memory leaks

    - [iRODS Command Line Interface (CLI)](https://github.com/irods/irods_client_cli)
        - now in active development
        - added support for many basic operations
            - ls, mv, tree, mkdir, get, put, cd, pwd, touch, etc
        - presented at UGM 2023

    - [iRODS GenQuery2](https://github.com/irods/irods_api_plugin_genquery2)
        - iquery can now read queries from stdin
        - iquery can now list all supported columns with database info
        - adding support for escaping special characters

    - Build and Packaging
        - adding boost/Qt5-style build system targets
        - consistent / better use of CMake
        - targeting libstdc++ for iRODS 4.4
        - removed jansson, CPR, elasticlient, and imagemagick from externals
        - added jwt-cpp to externals

    - [iRODS Documentation](https://github.com/irods/irods_docs)
        - roadmap has been approved and published
            - https://irods.org/roadmap

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - topology tests can now be run in parallel
            - tests complete in ~2.25 hrs for provider, ~3 hrs for consumer (concurrency of 4)

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - migrated to new Dockerfile syntax
        - Dockerfiles for Debian 12 and Rocky Linux 9 are almost ready

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - working towards removing the required local database

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - preparing release of 4.3.3.0
        - clients can now report their name to the iRODS server for ips
        - updated docker test framework for 4.2
            - bumped base OS image to Ubuntu 18.04
            - pinned iRODS version to 4.2.12

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - server is now resilient to restarts
        - server reports its name to iRODS server for ips

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - working on 0.9.4
        - will be replaced by iRODS HTTP API

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - refactored the authentication endpoint
        - improved error handling for OIDC
        - added documentation on the OIDC configuration
        - added support for tickets to various operations
        - added support for modifying several ACLs on an object atomically
        - merged the functionality of /metadata into other endpoints
        - added connection refresh options to configuration
        - added more tests

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - work on client-side redirect-to-resource for data objects is near completion
        - implemented long-needed fix for the ticket API

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - released 4.2.12.0
        - completed effort to reduce build duration and compiler memory usage
        - fixed libpython symbol availability issue

    - [R client (rirods)](https://github.com/irods/irods_client_library_rirods)
        - released 0.1.1
        - submitted and accepted to CRAN
        - new website - https://irods4r.org
        - presented at UGM 2023

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - fixed multiple bugs
        - updated code for 4.3.1 compatibility

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - investigating data objects remaining in intermediate state after failures

    - [C++ S3 API](https://github.com/irods/irods_client_s3_cpp)
        - updated to use new Boost 1.81.0 externals package
        - updated to work with the AWS S3 client
        - added modify time for ListObject
        - fixed signature issues by not URL encoding data multiple times
        - HeadObject now reports data object size and modify time
        - improved error handling around opening data objects via odstream

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - released 4.2.12.0

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - released 4.2.12.0

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - released 0.4.2
        - working on PUT_SYNC from an S3 source/bucket
        - updated from single stream to multi-stream PUT, is now faster

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - released 4.2.12.0

    - [NetCDF microservices](https://github.com/irods/irods_netcdf)
        - released 4.2.12.0
        - full HDF5 support could come later

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - preparing 4.3.0.0 release
        - next stage of refactor
            - add support for handling multiple AMQP endpoints
            - improve stewardship of AMQP connections
            - improve handling of connection errors
        - merged updated example ELK stack (used for training)

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - now compatible with iRODS 4.3.1
        - added support for remembering rows per page
            - /servers, /resources, /users, /groups
        - added ability to view ticket information
            - ticket creation not supported yet
        - added ability to change where the delay server is run
            - retrieving where the delay server runs is not supported yet

    - Policy Composition
        - merged PR submitted for 4.3.0 compatibility

- Background Items

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

- Discussion

    - considering dropping support for Oracle as a database
        - it's hard to test without paying Oracle

    - consider support for S3 API with 4.2

    - EOL discussion for linux distributions
        - RUG - support for lifetime of branch, and then not past EOL
        - will add this policy to the irods.org/download page
