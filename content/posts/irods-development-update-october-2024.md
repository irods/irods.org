Title: iRODS Development Update: October 2024
Date: 2024-10-16 10:00
Author: Kory Draughn
Slug: irods-development-update-october-2024
Status: published


Hello reader,

[Supercomputing 2024]({filename}/pages/sc24.html) is in Atlanta soon! If you're attending, swing by the RENCI booth and say hi. Let's get into the development update.

To start, the atomic ACLs API endpoint now supports the full range of permissions. Work on the iRODS 5 server is progressing well. For many years now, Python was used to validate configuration files. That job has now been moved into the server and now uses the jsoncons C++ library for validation. The server startup process has been redesigned and is showing signs of faster startup times. Server shutdown and configuration reload are now controlled through the use of signals just like other popular server applications. Lastly, the iRODS Rule Language rule engine plugin has been updated to require absolute paths for core.re and other files.

Last month we announced that a new C++ project template for authentication plugins was in development. That work is now complete and has been absorbed into the iRODS namespace. For those interested, see [https://github.com/irods/irods_project_template_cpp_auth_plugin](https://github.com/irods/irods_project_template_cpp_auth_plugin).

Work to add support for virtual environments to the Python rule engine plugin is still ongoing. We'll have more to share soon.

Python iRODS Client (PRC) 2.2.0 has been released. This release fixes several bugs and includes `iinit`-like functionality. Client-side redirection has been adjusted. It is now disabled by default, but can always be re-enabled. To understand why this change was made, see [https://github.com/irods/python-irodsclient/issues/627](https://github.com/irods/python-irodsclient/issues/627). The release notes can be found at [https://github.com/irods/python-irodsclient/releases/tag/v2.2.0](https://github.com/irods/python-irodsclient/releases/tag/v2.2.0).

Automated Ingest Capability 0.6.0 has been released as well. With this release comes improved documentation, support for `rsync --delete`-like functionality, and more information about individual jobs in the output of the `list` subcommand. It's been a long time coming, but users will finally be able to remove data objects and collections from iRODS based on the source being ingested. For more information, see the release notes at [https://github.com/irods/irods_capability_automated_ingest/releases/tag/v0.6.0](https://github.com/irods/irods_capability_automated_ingest/releases/tag/v0.6.0).

For the iRODS HTTP API, work to introduce user mapping plugins has been merged. The next release will allow administrators to modify the user mapping in real time. Not only that, but work to add support for local JWT validation has begun. This will help organizations using identity providers which do not expose an introspection endpoint for token validation.

To wrap up, iRODS S3 API 0.3.0 is available. This release includes support for **ListParts** and **ListMultipartUploads** operations and more importantly, a ~40% performance improvement for multipart upload. To learn more, see the release notes at [https://github.com/irods/irods_client_s3_api/releases/tag/0.3.0](https://github.com/irods/irods_client_s3_api/releases/tag/0.3.0).

Thanks for reading. Talk to you next month!


### October Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - working meeting
        - Thur, October 17, 2024, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - PAM Interactive auth plugin v0.1.0 is released
    - working meeting
        - Tues, October 22, 2024, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - have released C++ S3 API
    - working meeting
        - Fri, November 1, 2024, 3pm ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - draft paper for circulation among group
    - server-side validation now working
    - working meeting
        - Tues, October 15, 2024, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, December 4, 2024, 4pm ET
    - speaker, Andrew Su, iRODS Intern

- [4.3.4](https://github.com/irods/irods/milestone/44)

    - 64 bugs / 207 open, 8 closed

- [4.3.5](https://github.com/irods/irods/milestone/43)

    - 62 bugs / 216 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 125 bugs / 295 open, 0 closed

- [5.0.0](https://github.com/irods/irods/milestone/41)

    - 6 bugs / 54 open, 2 closed

- [5.0 Backlog](https://github.com/irods/irods/milestone/6)

    - 0 bugs / 41 open, 0 closed

- New Development Work

    - no updates

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - new C++ project template for auth plugin absorbed into irods namespace
        - atomic ACLs API endpoint supports full range of permissions
        - iRODS 5.0.0
            - configuration validation moved into server binary
            - configuration files can be placed anywhere in filesystem
            - redesigned / reimplemented server startup sequence
            - server uses SIGTERM (fast shutdown) and SIGQUIT (graceful shutdown)
            - server uses SIGHUP to reload configuration
            - removed control plane
            - iRODS Rule Language rule engine plugin requires absolute paths

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - working on interpreter configuration
        - working to add support for virtual environments

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - 2.2.0 release imminent
        - client-side resource redirection is now disabled by default
        - added iinit-like capability
        - fixed several bugs

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - 0.6.0 release imminent
        - merged new Celery application with separated tasks for filesystem and S3
        - expanded and reorganized README documentation
        - implemented Delete Mode event handler method to sync removals from source storage
            - modes: DO_NOT_DELETE (default), UNREGISTER, TRASH, NO_TRASH
            - only some Delete Modes are compatible with certain operations
                - e.g. cannot use NO_TRASH with REGISTER_SYNC
        - added job info to output of list subcommand for irods_sync script
        - fixed other issues in irods_sync script subcommands
        - added tests for S3 bucket syncs

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - merged user mapping plugin work
        - working to add support for local JWT validation for OAuth

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - released 0.3.0
        - performance 'efficient store-and-forward' - ~40% throughput improvement
        - implemented ListParts and ListMultipartUploads operations

- Background Items

    - Build and Packaging
        - last update: October 2024
        - working on moving more dependencies over to find_package

    - iRODS Documentation
        - last update: September 2024
        - added data_object_finalize database PEP implementation to Policy Cookbook
        - added Testing section to Developer docs for how to add and run tests
        - documented GenQuery2

    - [PAM Interactive Authentication Plugin](https://github.com/irods/irods_auth_plugin_pam_interactive)
        - last update: September 2024
        - released 0.1.0
        - removed .irodsA.json feature
        - added configuration for PAM stack
        - fixed issues with authenticating while connected to catalog service consumer

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - last update: September 2024
        - released 4.3.3.0

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
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

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - last update: July 2024
        - added projects for PostgreSQL 16
        - added projects for MySQL 8.4
        - added projects for MariaDB 10.6, 10.11, and 11.4

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - last update: March 2024
        - updated to support libstdc++

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

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - last update: September 2024
        - released 4.3.4.0-RELEASE

    - [iRODS Password Booth](https://github.com/irods/irods_client_password_booth)
        - last update: February 2024
        - CherryPy web application, uses PRC to let users modify their own password

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - last update: September 2023
        - working towards removing the required local database

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
        - last update: December 2024
        - removed dependency on externals, can be built as a standalone project

- Discussion
