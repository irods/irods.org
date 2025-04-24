Title: iRODS Development Update: April 2025
Date: 2025-04-25 09:00
Author: Kory Draughn
Slug: irods-development-update-april-2025
Status: published


Hello reader,

The iRODS User Group Meeting is close. Registration is open. Please visit <https://irods.org/ugm2025/> to learn more. We hope to see you there!

A lot of changes have been made to the upcoming iRODS 5 server since last month's update. We've removed several deprecated features including, but not limited to `imeta qu`, server monitoring microservices, RBUDP, and msiSendMail. Work to remove the option to disable strict ACLs is in progress. Logging within the database plugin is being improved. Avro, ZeroMQ, and cppzmq are no longer used by the server and have been removed. Not only that, but we've updated the compiler to Clang 16.

The Consortium has made the decision to not support EL8, Ubunutu 20.04, and Debian 11 for iRODS 5. This decision allows us to avoid potential issues with older platforms (e.g. OpenSSL 3, etc.).

Other important updates for iRODS 5 include an upgrade from OpenSSL 1 to OpenSSL 3, support for tracking access time, important changes to GenQuery2, and work to remove the server's dependency on the service account's irods_environment.json file. We'll have more to say about all of that at this year's UGM.

On the packaging side of things, we've reduced the number of externals packages needed by the iRODS ecosystem. libarchive, clang-runtime, zeromq, and various other packages will no longer ship as externals packages. Some packages are being replaced by distro-provided packages (e.g. CMake, nlohmann-json). We're also investigating the idea of providing an alternative default installation location for iCommands. For those interested in following that effort, see <https://github.com/irods/irods/issues/8361>.

For the Docker-based Development Environment, we've started looking into making systemd the default entrypoint for the runner images.

New releases of the S3 resource plugin are available for iRODS 4.3.4 and 4.3.3. Included is a fix which resolves a race condition involving the use of a cache file. See <https://github.com/irods/irods_resource_plugin_s3/issues/2241> to learn more.

Metalnx 3.0.1 is now available. This is a bug fix release which removes the need for rodsadmin credentials, fixes issues with multi-file downloads, and improves stability. To learn more, see the release notes at <https://github.com/irods-contrib/metalnx-web/releases/tag/3.0.1>.

A new Docker builder image for the HTTP API is in development. Users will soon be able to build packages for EL8 and EL9. This should prove useful to users looking to run the HTTP API directly on Enterprise Linux platforms.

I hope you found this update informative. There's still a lot of work left to do before iRODS 5 is ready, so stay tuned!


### April Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - working meeting
        - Thur, April 17, 2025, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - PAM Interactive auth plugin v0.1.1 is released
    - working meeting
        - Tues, April 22, 2025, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - have released C++ S3 API
    - working meeting
        - Fri, May 2, 2025, 3pm ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - dissolved as of March 19, 2025

- [TRiRODS](https://irods.org/trirods)

    - Wed, May 14, 2025, 4pm ET
    - speaker, TBD

- [4.3.5](https://github.com/irods/irods/milestone/45)

    - 34 bugs / 135 open, 6 closed

- [4.3.6](https://github.com/irods/irods/milestone/43)

    - 80 bugs / 273 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 121 bugs / 282 open, 0 closed

- [5.0.0](https://github.com/irods/irods/milestone/41)

    - 8 bugs / 61 open, 113 closed

- [5.1.0](https://github.com/irods/irods/milestone/47)

    - 1 bugs / 41 open, 0 closed

- [5.0 Backlog](https://github.com/irods/irods/milestone/6)

    - 0 bugs / 40 open, 0 closed

- [6.0.0](https://github.com/irods/irods/milestone/46)

    - 3 bugs / 8 open, 0 closed

- New Development Work

    - no updates

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - iRODS 5.0.0
            - removed deprecated functionality
                - imeta qu, imeta interactive mode
                - DataObjLock/Unlock APIs, GeneralRowPurge/Insert APIs
                - server monitoring microservices
                - backup mode for irepl, --link option for iput and irsync
                - RBUDP, msiSendMail, msiSetResource
            - working to remove option to change from STRICT ACLs policy
            - updating database plugin to use new logger
            - improving structure of database stanza in server_config.json
            - migrated code to use OpenSSL 3 APIs
                - disabled OpenSSL 1 compatibility
            - moved server-side TLS configuration properties into server_config.json
            - updating pam_password plugin to return error when TLS is not enabled
            - deprecated legacy authentication plugins
            - removed Avro, ZeroMQ, and cppzmq dependencies from buildsystem
            - removed support code for explicit libc++
            - updated compiler to Clang 16
            - working to remove support for various platforms
                - EL8, Ubuntu 20.04, and Debian 11
            - merged access time tracking PR into upstream
                - access times are initialized to 0 for upgraded deployments
            - fixed GenQuery2's ability to count data objects and replicas
                - granted users have full control over the placement of the DISTINCT keyword
            - fixed GenQuery2's handling of group permissions
            - removing server's dependency on service account irods_environment.json file
                - demonstrated working server without local irods_environment.json file
                - base implementation complete, under review

    - Build and Packaging
        - removed several packages from externals
            - libarchive, clang-runtime, zeromq, all *-libcxx packages
            - all EL8, Ubuntu 20.04, and Debian 11 packages
        - working on moving more dependencies over to find_package
        - updating CMake policy requirements for newer versions of CMake
        - migrating to some system-provided dependencies
            - CMake, nlohmann-json, fmtlib/spdlog, catch2
        - investigating removal of libc++ and libc++abi from clang package
        - investigating alternate default installation location for icommands
            - will provide package of symlinks in original location
            - will provide other means of getting icommands in PATH
                - e.g. environment modules and sourceable shell scripts
        - looking into replacing FPM with nFPM in externals packaging process

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - looking into making systemd the default entrypoint for runner images

    - [Mungefs](https://github.com/irods/mungefs)
        - updating CMake policy requirements for newer versions of CMake
        - migrated externals package to use system-provided libarchive and ZeroMQ

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - implemented fix for race condition involving cache file
            - https://github.com/irods/irods_resource_plugin_s3/issues/2241
        - preparing 4.3.3.1 release
        - preparing 4.3.4.1 release

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - released 3.1.0

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - released 4.3.6.0
            - in support of Metalnx 3.0.1 release
            - fixed bug for calculation of max total bytes for zip service configuration

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - released 3.0.1
            - removed requirement for admin credentials
            - bumped Tomcat version in Dockerfile to address security vulnerability
            - fixed issues with multi-file downloads, logging, and documentation
        - updating Spring and other dependencies

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - opened PR to add builder images for EL8 and EL9 packages

- Background Items

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - last update: March 2025
        - working on python script which automates release testing of the server and plugins
        - working on improving support for plugin testing
            - removing need for OS-specific package subdirectory
            - better concurrency support, reporting of test status, setup failure handling
            - SyntaxWarning clean-up for newer versions of Python
            - new Dockerfile syntax

    - iRODS Documentation
        - last update: September 2024
        - added data_object_finalize database PEP implementation to Policy Cookbook
        - added Testing section to Developer docs for how to add and run tests
        - documented GenQuery2

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

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
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

    - draft iRODS 2025 Roadmap
