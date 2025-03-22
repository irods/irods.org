Title: iRODS Development Update: March 2025
Date: 2025-03-24 10:00
Author: Kory Draughn
Slug: irods-development-update-march-2025
Status: published


Hello reader,

In case you missed it, [iRODS 4.3.4 is available](https://irods.org/2025/03/irods-4-3-4-is-released/)! Check it out and let us know what you think.

_**NOTE:** A bug involving the passing of a `KeyValPair` between the iRODS Rule Language and Python rule engine plugin was discovered following the release of iRODS 4.3.4. A fix will be included in the next version of iRODS. To learn more, see [https://github.com/irods/irods/issues/8265](https://github.com/irods/irods/issues/8265)._

Work on the iRODS 5 server is making good progress. We're cleaning out unused dependencies such as Avro, ZeroMQ, and cppzmq. Work to make the server track access time is also on schedule to land in iRODS 5. For those interested in following the development, see the pull request at [https://github.com/irods/irods/pull/8269](https://github.com/irods/irods/pull/8269).

On the build and packaging side of things, efforts to move more dependencies over to CMake's find_package continues. Not only that, but we're updating CMake policy requirements for newer versions of CMake, looking into a newer version of the Clang compiler, and working on the removal of libarchive as an externals package. See the updates that follow for more information.

The release of iRODS 4.3.4 was a very smooth process. This is due to the many improvements to the server, iCommands, and test infrastructure. However, the release process is still very manual. We are now working on a python script capable of testing iRODS across all supported platforms, hands-free. We're also planning to improve the testing of plugins by simplifying the requirements for running plugin tests, improving concurrency support, and reporting the status of tests while running.

Python iRODS client 3.1.0 is released and ready for use! The big news of this release is that it includes a full port of the iRODS 4.3 authentication framework with working implementations for the native and pam_password authentication schemes. Support for the pam_interactive authentication scheme will be added later. Users looking to use this new version of the client will need Python 3.9 or later.

Other notable updates include the Docker-based Development Environment growing support for the Undefined Behavior Sanitizer, work on Metalnx to remove the need for rodsadmin credentials, and efforts to migrate Mungefs to use system-provided packages instead of externals packages.


### March Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - working meeting
        - Thur, March 20, 2025, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - PAM Interactive auth plugin v0.1.1 is released
    - working meeting
        - Tues, March 25, 2025, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - have released C++ S3 API
    - working meeting
        - Fri, April 4, 2025, 3pm ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - draft paper for circulation among group
    - server-side validation now working
    - working meeting
        - Tues, March 18, 2025, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, May 14, 2025, 4pm ET
    - speaker, TBD

- [4.3.5](https://github.com/irods/irods/milestone/45)

    - 30 bugs / 126 open, 0 closed

- [4.3.6](https://github.com/irods/irods/milestone/43)

    - 76 bugs / 265 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 124 bugs / 293 open, 0 closed

- [5.0.0](https://github.com/irods/irods/milestone/41)

    - 15 bugs / 111 open, 44 closed

- [5.0 Backlog](https://github.com/irods/irods/milestone/6)

    - 0 bugs / 40 open, 0 closed

- New Development Work

    - no updates

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - released 4.3.4
            - regression in passing of KeyValPair between Native REP and Python REP
                - issue at https://github.com/irods/irods/issues/8265
                - 4.3.5 solution at https://github.com/irods/irods/pull/8267
        - added support for Undefined Behavior Sanitizer
        - added SSL certificate information to imiscsvrinfo output
        - iRODS 5.0.0
            - cleaning out Avro, ZeroMQ, and cppzmq dependencies from buildsystem
            - opened PR containing initial implementation for tracking access time
                - motivated by storage tiering needs and desire for nice dashboards
                - only supports data objects right now, but considering collections
                - https://github.com/irods/irods/pull/8269

    - Build and Packaging
        - working on moving more dependencies over to find_package
        - updating CMake policy requirements for newer versions of CMake
        - investigating updating compiler to Clang 16
        - working on removing libarchive from externals
        - working on including headers and code templates in target sources

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - working on python script which automates release testing of the server and plugins
        - working on improving support for plugin testing
            - removing need for OS-specific package subdirectory
            - better concurrency support, reporting of test status, setup failure handling
            - SyntaxWarning clean-up for newer versions of Python
            - new Dockerfile syntax

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - added support for Undefined Behavior Sanitizer

    - [PAM Interactive Authentication Plugin](https://github.com/irods/irods_auth_plugin_pam_interactive)
        - released 0.1.1

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - released 4.3.4.0

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - released 4.3.4.0

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - released 4.3.4.0

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - released 4.3.4.0

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - released 4.3.4.0

    - [Metadata Guard](https://github.com/irods/irods_rule_engine_plugin_metadata_guard)
        - released 4.3.4.0

    - [CURL microservices](https://github.com/irods/irods_microservice_plugins_curl)
        - released 4.3.4.0

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - released 4.3.4.0

    - [Mungefs](https://github.com/irods/mungefs)
        - migrating externals package to use system-provided libarchive and ZeroMQ

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - polishing 4.3 authentication framework PR
            - https://github.com/irods/python-irodsclient/pull/685

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - released 4.3.5.0
        - deprecated, restricted to trivial updates

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - released 3.0.0
        - working to remove requirement for admin credentials

- Background Items

    - iRODS Documentation
        - last update: September 2024
        - added data_object_finalize database PEP implementation to Policy Cookbook
        - added Testing section to Developer docs for how to add and run tests
        - documented GenQuery2

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - last update: October 2024
        - released 0.6.0
        - https://github.com/irods/irods_capability_automated_ingest/releases/tag/v0.6.0

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - last update: January 2025
        - released 0.5.0
        - added support for Undefined Behavior Sanitizer
        - added GitHub workflows for compilation, code formatting, and static analysis
        - added Keycloak Docker image for OIDC testing
        - added option for enabling stricter checking of aud for Introspection Endpoint
        - working to make server extend timeouts on long-running reads/writes of data objects

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
