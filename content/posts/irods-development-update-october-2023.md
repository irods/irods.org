Title: iRODS Development Update: October 2023
Date: 2023-10-13 12:00
Author: Kory Draughn
Slug: irods-development-update-october-2023
Status: published


Hello Everyone,

iRODS 4.3.1 is so close! All features are now set in stone and we're working hard to complete testing. Supercomputing 2023 is next month too! Where has all the time gone? Anyway, let's get into the update.

First, iRODS C++ REST API 0.9.4 has been released. This is the final release of the project. It includes a few bug fixes and quality-of-life improvements. The most important change is the maximum size of a request was increased so users can upload larger payloads. Once iRODS 4.3.1 is released, users should plan to migrate to the new iRODS HTTP API.

We've finally completed support for Ubuntu 22.04, Debian 12, and Enterprise Linux 9. That makes iRODS available on 8 platforms! Lifetime options for passwords have been moved from **server_config.json** to the **R_GRID_CONFIGURATION** table. With that comes two new sub-commands for `iadmin` called `get_grid_configuration` and `set_grid_configuration`. With these new sub-commands, administrators will be able to update various options in the **R_GRID_CONFIGURATION** table.

The iRODS C++ S3 API is coming together very well. Support for specifying byte ranges via the range header has been added. The **ListBuckets** API operation has been implemented as well.

The effort around OpenID Connect has finally landed in the iRODS HTTP API! This is a major step for iRODS, but there's still a lot of work to do. Aside from that, we've made the HTTP API compatible with iRODS 4.2.11 and 4.2.12. A compatibility option was added which, when enabled, instructs the iRODS HTTP API to only use 4.2.11+ API calls.

Python iRODS Client 1.1.9 is very close. The work for client-side redirection and auto-closing of data objects is mostly complete. All that's left is testing and documentation. To add to that, the PRC will soon give users a way to adjust the behavior of the library using a local settings file.

Lastly, the Consortium is now considering the idea of iRODS 5.0 being the next major release of iRODS. That ultimately means iRODS 4.3 would mark the end of the 4.x series. It also means iRODS gains more freedom to evolve. If that sounds interesting to you, see the **Discussion** section at the bottom of the page.

We hope you found this update exciting. Talk to you next month!


### October Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - looking at UNC and/or NSF funding opportunities
    - working meeting
        - Thur, October 19, 2023, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - working meeting
        - Tues, October 24, 2023, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - developing C++ S3 implementation
    - working meeting
        - Fri, November 3, 2023, 3pm ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - draft paper for circulation among group
    - working on microservices
    - working meeting
        - Tues, October 17, 2023, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, December 6, 2023, 4pm ET
    - speaker, TBD

- [4.3.1](https://github.com/irods/irods/milestone/39)

    - 0 bugs / 1 open, 233 closed
    - goals
        - address memory leaks
        - iinit to learn about pam_interactive (new auth framework)
        - support for HA (single irodsDelayServer defined in the catalog)

- [4.3.2](https://github.com/irods/irods/milestone/40)

    - 74 bugs / 276 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 136 bugs / 294 open, 0 closed

- [4.4.0](https://github.com/irods/irods/milestone/41)

    - 1 bugs / 11 open, 0 closed

- New Development Work

    - no updates

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - preparing 4.3.1 release
        - added support for Ubuntu 22.04, Debian 12, and Rocky Linux 9
        - moved password lifetime options into R_GRID_CONFIGURATION table
        - added new subcommands to iadmin
            - get_grid_configuration, set_grid_configuration

    - Build and Packaging
        - adding boost/Qt5-style build system targets
        - consistent / better use of CMake
        - targeting libstdc++ for iRODS 4.4
        - removed jansson, CPR, elasticlient, and imagemagick from externals
        - added jwt-cpp to externals

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - added Dockerfiles for Ubuntu 22.04, Debian 12, and Rocky Linux 9

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - preparing release of 4.3.3.0
        - clients can now report their name to the iRODS server for ips
        - updated docker test framework for 4.2
            - bumped base OS image to Ubuntu 18.04
            - pinned iRODS version to 4.2.12

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - preparing 2.2.0 release
            - recovers from restarts, reports name to iRODS server for ips

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - released 0.9.4
            - repository has been deprecated and archived
        - merged final fixes
            - see https://github.com/irods/irods_client_rest_cpp/pull/194
        - will be replaced by iRODS HTTP API

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - merged OIDC work
        - can now run against 4.2.11 and 4.2.12 iRODS servers
        - fixed memory issues
        - working on documentation
        - working on OIDC JWT verification

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - preparing 1.1.9 release
        - client-side redirect-to-resource for data objects is almost complete
        - auto-closing of data objects is almost complete
            - testing with automated ingest
        - auto-load/save of client-side settings is almost complete

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - preparing 4.3.1 release

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - preparing 4.3.1 release
        - discussing the idea of moving libs3 project into repository
            - removes libs3 as an externals package
            - licensing question BSD3 vs LGPL

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - preparing 4.3.1 release
        - investigating data objects remaining in intermediate state after failures

    - [C++ S3 API](https://github.com/irods/irods_client_s3_cpp)
        - added support for the range header for GetObject
        - implemented ListBuckets
        - added/updated tests
        - initial release coming soon

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - preparing 4.3.1 release

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - preparing 4.3.1 release

    - [Metadata Guard](https://github.com/irods/irods_rule_engine_plugin_metadata_guard)
        - preparing 4.3.1 release

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - preparing 4.3.1 release

    - [NetCDF microservices](https://github.com/irods/irods_netcdf)
        - preparing 4.3.1 release

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - preparing 4.3.1 release
        - next stage of refactor
            - add support for handling multiple AMQP endpoints
            - improve stewardship of AMQP connections
            - improve handling of connection errors
        - merged updated example ELK stack (used for training)

    - [CURL microservices](https://github.com/irods/irods_microservice_plugins_curl)
        - preparing 4.3.1 release

- Background Items

    - [iRODS GenQuery2](https://github.com/irods/irods_api_plugin_genquery2)
        - iquery can now read queries from stdin
        - iquery can now list all supported columns with database info
        - adding support for escaping special characters

    - [iRODS Command Line Interface (CLI)](https://github.com/irods/irods_client_cli)
        - now in active development
        - added support for many basic operations
            - ls, mv, tree, mkdir, get, put, cd, pwd, touch, etc
        - presented at UGM 2023

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - released 0.4.2
        - working on PUT_SYNC from an S3 source/bucket
        - updated from single stream to multi-stream PUT, is now faster

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

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - topology tests can now be run in parallel
            - tests complete in ~2.25 hrs for provider, ~3 hrs for consumer (concurrency of 4)

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

- Discussion

    - considering making the next major release be iRODS 5.0 instead of iRODS 4.4
        - https://github.com/irods/irods/issues/7361
        - completes our federation promise for compatibility with iRODS 3
        - allows us to start a new conversation about backwards compatibility
        - allows us to make improvements to packaging
