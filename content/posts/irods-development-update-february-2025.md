Title: iRODS Development Update: February 2025
Date: 2025-02-13 18:00
Author: Kory Draughn
Slug: irods-development-update-february-2025
Status: published


Hello reader,

For this month's development update, work to allow the server to communicate its status to the service manager has been merged along with support for Undefined Behavior sanitizer. Efforts to make the server track access time has begun. Tracking access time for collections and data objects is important because it allows administrators and managers to gain more insight into hot and cold data. It's still in the early stages, but we expect to have this implemented for the initial release of iRODS 5.

We've made some progress on the packaging side of things. Long-time administrators of iRODS deployments will be happy to learn that the externals package for libarchive has been dropped in favor of the distro-provided package. We expect the same to happen for other externals packages as we move the software closer and closer to _Normal and Boring_, 

Work to remove support for Enterprise Linux 7 is progressing well. We most recently removed support from the iRODS Testing Environment.

The Docker runner images provided by the iRODS Development Environment have been updated to support systemd. This is primarily in support of iRODS 5.

Storage Tiering 4.3.3.1 is now available. This is a bug fix release which resolves all permission-based issues. We expect users of the plugin to find this latest version more stable. See the release notes at [https://github.com/irods/irods_capability_storage_tiering/releases/tag/4.3.3.1](https://github.com/irods/irods_capability_storage_tiering/releases/tag/4.3.3.1) for more details.

The Python iRODS client is on schedule to provide full compatibility with the iRODS 4.3 authentication framework. This means the next release of the PRC will contain a full port of the C++ authentication framework and flows for native and pam_password authentication schemes. The pam_interactive authentication scheme will arrive in a later release.

The biggest news of this development update is - Metalnx 3.0.0 is now available! This represents a huge milestone for the software because it removes the need for the PostgreSQL database. This makes Metalnx a pure client _(i.e. it no longer requires rodsadmin credentials to deploy)_. Release notes can be found at [https://github.com/irods-contrib/metalnx-web/releases/tag/3.0.0](https://github.com/irods-contrib/metalnx-web/releases/tag/3.0.0). Not only that, but the [TRiRODS presentation](https://youtu.be/lbC9eR0yXT8?si=i03lCmJwCLFvzrIh) is available for those wanting to see a live demonstration.

Notable updates include a [Java 8 compatible implementation of irods4j](https://github.com/irods/irods4j/tree/java8) and [new release of Jargon](https://github.com/DICE-UNC/jargon/releases/tag/4.3.5.0-RELEASE).


### February Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - working meeting
        - Thur, February 20, 2025, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - PAM Interactive auth plugin v0.1.0 is released
    - working meeting
        - Tues, February 25, 2025, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - have released C++ S3 API
    - working meeting
        - Fri, March 7, 2025, 3pm ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - draft paper for circulation among group
    - server-side validation now working
    - working meeting
        - Tues, February 18, 2025, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, February 12, 2025, 4pm ET
    - Justin James, Metalnx 3.0.0

- [4.3.4](https://github.com/irods/irods/milestone/44)

    - 48 bugs / 103 open, 62 closed

- [4.3.5](https://github.com/irods/irods/milestone/45)

    - 6 bugs / 72 open, 0 closed

- [4.3.6](https://github.com/irods/irods/milestone/43)

    - 77 bugs / 263 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 124 bugs / 294 open, 0 closed

- [5.0.0](https://github.com/irods/irods/milestone/41)

    - 8 bugs / 103 open, 36 closed

- [5.0 Backlog](https://github.com/irods/irods/milestone/6)

    - 0 bugs / 40 open, 0 closed

- New Development Work

    - [irods4j](https://github.com/irods/irods4j)
        - a new Java client library for iRODS 4.3.2 and later
        - released 0.1.0
        - available via Maven Central repository

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - wrapping up work to add support for Undefined Behavior Sanitizer
        - fixed various memory leaks in server and icommands
        - iRODS 5.0.0
            - merged service manager communication enhancements
            - added systemd service unit template file to server package
            - removed dependencies on Avro, ZeroMQ, and cppzmq
                - working on cleaning out buildsystem
            - discussing tracking of access time in the catalog

    - Build and Packaging
        - working on moving more dependencies over to find_package
            - Avro, ZeroMQ, cppzmq
        - replaced libarchive externals dependency with distro-provided package
        - investigating update from Clang 13 to Clang 15

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - removed support for EL7

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - added support for running systemd inside runner containers

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - released 4.3.3.1
            - https://github.com/irods/irods_capability_storage_tiering/releases/tag/4.3.3.1
            - fixes all known issues related to permissions
            - supports more PEPs

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - implemented 4.3 authentication flow for native and pam_password scheme
            - will ship as part of PRC 3.1.0
            - support for pam_interactive auth scheme will be added later
        - finished fs-irods/PyFilesystem2
            - in support of sync functionality

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - preparing 4.3.5.0 release
        - working on improvements in support of Metalnx

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - preparing 3.0.0 release
        - updated Metalnx and Jargon dependencies
        - added support for 10-level permission model
        - fixed various bugs

- Background Items

    - iRODS Documentation
        - last update: September 2024
        - added data_object_finalize database PEP implementation to Policy Cookbook
        - added Testing section to Developer docs for how to add and run tests
        - documented GenQuery2

    - [PAM Interactive Authentication Plugin](https://github.com/irods/irods_auth_plugin_pam_interactive)
        - last update: January 2025
        - removed post-install script from client packages

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - last update: November 2024
        - work on interpreter configuration is now on hold
        - work to add support for virtual environments is now on hold
        - will use/depend on setup/teardown operations in rule engine plugins
            - to prevent spinning up multiple python interpreters (aka performance)

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - last update: September 2024
        - released 4.3.3.0

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - last update: September 2024
        - released 4.3.3.0

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - last update: September 2024
        - released 4.3.3.0

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - last update: September 2024
        - released 4.3.3.0

    - [Metadata Guard](https://github.com/irods/irods_rule_engine_plugin_metadata_guard)
        - last update: September 2024
        - released 4.3.3.0

    - [CURL microservices](https://github.com/irods/irods_microservice_plugins_curl)
        - last update: September 2024
        - released 4.3.3.0

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - last updated: November 2024
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

    - [Mungefs](https://github.com/irods/mungefs)
        - last update: December 2023
        - removed dependency on externals, can be built as a standalone project

- Discussion
