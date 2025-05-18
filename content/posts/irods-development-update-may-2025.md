Title: iRODS Development Update: May 2025
Date: 2025-05-19 10:00
Author: Kory Draughn
Slug: irods-development-update-may-2025
Status: published


Hello reader,

iRODS 5 is almost ready for prime time. As of this development update, all issues have been closed and we have entered the confirmation testing phase. Let's talk about what's changed since last month's update.

For the server, work to make the server permanently enforce strict ACLs is complete. We've also improved logging for the database plugin and GenQuery1 by replacing all rodsLog API calls with the new logging API. This change to logging gives administrators visibility into how the database plugin and GenQuery1 work. To add to that, GenQuery1 will have its very own log category. Work to remove the server's dependency on the service account `irods_environment.json` file has been merged. More deprecated APIs and options have been removed as well.

For packaging, we've updated policy requirements for CMake and replaced some externals packages with system-provided packages.

To wrap up, it was reported that the Logical Quotas rule engine plugin did not cover the touch API PEPs as intended. That has been fixed. Not only that, but a new release of Metalnx is on the way. This next release focuses on improving stability.

Thanks for reading and don't forget to register for the [User Group Meeting](https://irods.org/ugm2025/). The abstracts for accepted talks are now posted and available.


### May Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - working meeting
        - Thur, May 15, 2025, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - PAM Interactive auth plugin v0.1.1 is released
    - working meeting
        - Tues, May 27, 2025, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - have released C++ S3 API
    - working meeting
        - Fri, June 6, 2025, 3pm ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, Aug 13, 2025, 4pm ET
    - speaker, iRODS Summer Interns

- [4.3.5](https://github.com/irods/irods/milestone/45)

    - 44 bugs / 149 open, 23 closed

- [4.3.6](https://github.com/irods/irods/milestone/43)

    - 77 bugs / 271 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 120 bugs / 279 open, 0 closed

- [5.0.0](https://github.com/irods/irods/milestone/41)

    - 0 bugs / 3 open, 171 closed

- [5.1.0](https://github.com/irods/irods/milestone/47)

    - 8 bugs / 90 open, 0 closed

- [5.0 Backlog](https://github.com/irods/irods/milestone/6)

    - 1 bugs / 43 open, 0 closed

- [6.0.0](https://github.com/irods/irods/milestone/46)

    - 3 bugs / 21 open, 0 closed

- New Development Work

    - no updates

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - iRODS 5.0.0
            - wrapping up remaining issues, preparing for release testing
            - made server disallow overriding of strict ACLs
            - removed GeneralUpdate API
            - adjusted database configuration structure in server_config.json
            - updated database plugin to use database log category
            - updated GenQuery1 implementation to use new genquery1 log category
            - updated database plugin to use sql log category
            - removed GeneralRowInsert and GeneralRowPurge
            - removed imeta interactive
            - removed --wlock and --rlock options
            - removed server's dependency on service account irods_environment.json file
                - service account is no longer validated on server startup
            - removed client_api_allowlist_policy option from server_config.json
                - will always be enforced by server
            - applied more constraints to JSON schema for server_config.json

    - iRODS Documentation
        - updating docs for iRODS 5 release
            - access time, GenQuery, TLS, server configuration, process model
            - server upgrades, CentOS 7, etc.

    - Build and Packaging
        - working on moving more dependencies over to find_package
        - updated CMake policy requirements for newer versions of CMake
        - migrated to some system-provided dependencies
            - CMake, nlohmann-json, fmtlib/spdlog, catch2
        - working to remove some externals packages
            - cmake, nlohmann-json, fmtlib, spdlog, catch2
        - working on updating some externals packages
            - avro, nanodbc, qpid-proton - need patch for newer CMake
            - jsoncons
        - introduced compatibility with Catch2 v3 (still compatible with v2)
        - investigating removal of libc++ and libc++abi from clang package
        - investigating alternate default installation location for icommands
            - will provide package of symlinks in original location
            - will provide other means of getting icommands in PATH
                - e.g. environment modules and sourceable shell scripts
        - looking into replacing FPM with nFPM in externals packaging process

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - fixed support for touch API PEPs

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - released 4.3.3.1 release
        - released 4.3.4.1 release

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - preparing 4.3.7.0 release

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - preparing 3.1.0 release
            - updated dependencies to address vulnerabilities

- Background Items

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - last update: March 2025
        - working on python script which automates release testing of the server and plugins
        - working on improving support for plugin testing
            - removing need for OS-specific package subdirectory
            - better concurrency support, reporting of test status, setup failure handling
            - SyntaxWarning clean-up for newer versions of Python
            - new Dockerfile syntax

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - last update: April 2025
        - looking into making systemd the default entrypoint for runner images

    - [Mungefs](https://github.com/irods/mungefs)
        - last update: April 2025
        - updating CMake policy requirements for newer versions of CMake
        - migrated externals package to use system-provided libarchive and ZeroMQ

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - last update: April 2025
        - released 3.1.0

    - [PAM Interactive Authentication Plugin](https://github.com/irods/irods_auth_plugin_pam_interactive)
        - last update: March 2025
        - released 0.1.1

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - last update: March 2025
        - released 4.3.4.0

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - last update: March 2025
        - released 4.3.4.0

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - last update: March 2025
        - released 4.3.4.0

    - [Metadata Guard](https://github.com/irods/irods_rule_engine_plugin_metadata_guard)
        - last update: March 2025
        - released 4.3.4.0

    - [CURL microservices](https://github.com/irods/irods_microservice_plugins_curl)
        - last update: March 2025
        - released 4.3.4.0

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - last update: March 2025
        - released 4.3.4.0

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - last update: October 2024
        - released 0.6.0
        - https://github.com/irods/irods_capability_automated_ingest/releases/tag/v0.6.0

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - last update: April 2025
        - opened PR to add builder images for EL8 and EL9 packages

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - last update: October 2024
        - released 0.3.0
        - performance 'efficient store-and-forward' - ~40% throughput improvement
        - implemented ListParts and ListMultipartUploads operations

    - iRODS Kubernetes Testing Environment
        - last update: April 2024
        - v9 of the build and test infrastructure
        - can stand up iRODS Providers and Consumers
        - can run core tests
        - running in RENCI K8s cluster, but could run on any cluster

    - [NetCDF microservices](https://github.com/irods/irods_netcdf)
        - last update: January 2024
        - released for 4.3.1
        - considering archiving this project in favor of other solutions
            - possible existing Python libraries are 'enough'

    - [iRODS GenQuery2](https://github.com/irods/irods_api_plugin_genquery2)
        - last update: December 2023
        - packages for 4.2 and 4.3 can be built using the iRODS Development Environment
            - use the plugin builder images

    - [iRODS Command Line Interface (CLI)](https://github.com/irods/irods_client_cli)
        - last update: September 2023
        - added support for many basic operations
            - ls, mv, tree, mkdir, get, put, cd, pwd, touch, etc
        - presented at UGM 2023

    - [irods4j](https://github.com/irods/irods4j)
        - last update: February 2025
        - a new Java client library for iRODS 4.3.2 and later
        - released 0.1.0
        - available via Maven Central repository

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - last update: February 2024
        - released 2.2.0

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - last update: September 2024
        - intern successfully replaced use of the C++ REST API with the HTTP API

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - last update: September 2024
        - released 4.3.3.0

    - [iRODS Password Booth](https://github.com/irods/irods_client_password_booth)
        - last update: February 2024
        - CherryPy web application, uses PRC to let users modify their own password

    - [R client (rirods)](https://github.com/irods/irods_client_library_rirods)
        - last update: September 2023
        - released 0.1.1
        - submitted and accepted to CRAN
        - new website - https://irods4r.org
        - presented at UGM 2023

    - [Policy Composition](https://github.com/irods/irods_policy_composition_framework)
        - https://github.com/irods/irods_rule_engine_plugins_policy
        - last update: August 2023
        - merged PR submitted for 4.3.0 compatibility

    - [Publishing Capability](https://github.com/irods/irods_capability_publishing)
        - last update: August 2020
        - needs more README
        - awaiting CI

    - Logical Locking
        - last update: August 2021
        - read-locks to be implemented

    - New RPC API framework
        - last update: July 2021
        - leverages design from Authentication Working Group
        - supports synchronous and asynchronous operations
        - refactored into parallel_collection_operation base class
            - supports pre/post operations and an object operation

    - [Hard Links Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_hard_links)
        - last update: July 2021
        - awaiting more use cases before release

    - [AWS S3 Lambda](https://github.com/irods/irods_client_aws_lambda_s3)
        - last update: May 2021
        - future release
            - could brute-force confirm checksums to detect renames
            - would persist metadata
        - could use atomic database operations to increase batch size > 1

    - Parallel Filesystem Integration
        - last update: March 2020
        - iRODS API plugin
        - have split BeeGFS and Lustre implementations into aggregator and listener
        - testing against known configurations

    - CockroachDB Database Plugin
        - last update: September 2024
        - CRDB license has changed

- Discussion
