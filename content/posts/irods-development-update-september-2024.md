Title: iRODS Development Update: September 2024
Date: 2024-09-19 15:00
Author: Kory Draughn
Slug: irods-development-update-september-2024
Status: published


Hello reader,

iRODS 4.3.3 is now available! You can read all about it at [https://irods.org/2024/08/irods-4-3-3-is-released/](https://irods.org/2024/08/irods-4-3-3-is-released/).

For this month's update, work on the iRODS 5.0 server has begun. Our goal is to make the iRODS server cloud-friendly. That means we're going to focus on improvements to the process model and management of hostnames. The C++ project template for the database plugin is coming together. Those looking to integrate other databases with iRODS will soon have a starter project they can use to quickly hit the ground running. Efforts to move more dependencies to `find_package()` are still in progress too.

Documentation for iRODS has been updated. The Policy Cookbook now covers the data object finalize PEPs. The data object finalize PEPs expose all details of a replica, making them very useful for many tasks. To learn more, check out [https://docs.irods.org/4.3.3/administrators/policy_cookbook/#enforcing-policy-when-data-transfers-complete](https://docs.irods.org/4.3.3/administrators/policy_cookbook/#enforcing-policy-when-data-transfers-complete). We're also adding documentation which explains how to add and run tests. For those looking to learn about GenQuery2, you'll be happy to know that full coverage of the new parser is explained at [https://docs.irods.org/4.3.3/system_overview/genquery/#genquery2](https://docs.irods.org/4.3.3/system_overview/genquery/#genquery2).

The PAM Interactive Authentication plugin is now available for iRODS 4.3.3. See [https://irods.org/2024/08/initial-release-of-the-irods-pam-interactive-auth-plugin/](https://irods.org/2024/08/initial-release-of-the-irods-pam-interactive-auth-plugin/) for details.

Work on the Python Rule Engine plugin is progressing well. An issue involving the GIL and concurrent access was resolved in the lead up to 4.3.3. Aside from that, we're working hard to add support for virtual environments. If done correctly, administrators will be able to use a different set of modules than those provided by their system's package manager. You can follow that effort at [https://github.com/irods/irods_rule_engine_plugin_python/pull/224](https://github.com/irods/irods_rule_engine_plugin_python/pull/224).

For the Automated Ingest capability, a new Docker Compose project was added for demonstration purposes. Work to provide a clean separation between filesystem scanner tasks and S3 scanner tasks is in progress. We expect that to land very soon. The big news is we've successfully demonstrated a new Celery task which recursively removes data in parallel. Early performance testing has shown a 55% improvement over `irm -rf`.

Version 0.4.0 of the iRODS HTTP API is now available. You can view the full list of closed issues at [https://github.com/irods/irods_client_http_api/milestone/5?closed=1](https://github.com/irods/irods_client_http_api/milestone/5?closed=1).

The iRODS S3 API now supports the **AbortMultipartUpload** operation. The performance improvements for multipart upload are now complete. All that's left to do is to polish the changes. We expect the updates to be merged into upstream within a few weeks.

This is a big one - Jargon 4.3.4.0-RELEASE is now available for download! To learn more, see [https://github.com/DICE-UNC/jargon/releases/tag/4.3.4.0-RELEASE](https://github.com/DICE-UNC/jargon/releases/tag/4.3.4.0-RELEASE).

Thanks for reading. Talk to you next month!


### September Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - working meeting
        - Thur, September 19, 2024, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - PAM Interactive auth plugin v0.1.0 is released
    - working meeting
        - Tues, September 24, 2024, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - have released C++ S3 API
    - working meeting
        - Fri, October 4, 2024, 3pm ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - draft paper for circulation among group
    - server-side validation now working
    - working meeting
        - Tues, September 17, 2024, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, December 4, 2024, 4pm ET
    - speaker, TBD

- [4.3.4](https://github.com/irods/irods/milestone/44)

    - 61 bugs / 197 open, 1 closed

- [4.3.5](https://github.com/irods/irods/milestone/43)

    - 62 bugs / 216 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 126 bugs / 297 open, 0 closed

- [5.0.0](https://github.com/irods/irods/milestone/41)

    - 6 bugs / 47 open, 2 closed

- [5.0 Backlog](https://github.com/irods/irods/milestone/6)

    - 0 bugs / 41 open, 0 closed

- New Development Work

    - working on new C++ project template for auth plugin

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - released 4.3.3
        - working on C++ project template for database plugin
        - working on refactor for iRODS 5.0.0
            - simpler process model (configs only loaded at startup)
            - hostname caching/config in catalog
            - aiming for more cloud-friendly

    - Build and Packaging
        - working on moving more dependencies over to find_package

    - iRODS Documentation
        - added data_object_finalize database PEP implementation to Policy Cookbook
        - added Testing section to Developer docs for how to add and run tests
        - documented GenQuery2

    - [PAM Interactive Authentication Plugin](https://github.com/irods/irods_auth_plugin_pam_interactive)
        - released 0.1.0
        - removed .irodsA.json feature
        - added configuration for PAM stack
        - fixed issues with authenticating while connected to catalog service consumer

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - released 4.3.3.0

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - released 4.3.3.0

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - released 4.3.3.0

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - released 4.3.3.0

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - released 4.3.3.0

    - [Metadata Guard](https://github.com/irods/irods_rule_engine_plugin_metadata_guard)
        - released 4.3.3.0

    - [CURL microservices](https://github.com/irods/irods_microservice_plugins_curl)
        - released 4.3.3.0

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - released 4.3.3.0
        - fixed concurrent handling of GIL
            - fixes crash when using Python 3.12+ on Ubuntu 24.04
        - working on interpreter configuration
        - working to add support for virtual environments

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - released 2.1.0

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - added a Docker Compose project to demo ingest projects
        - removed old Docker projects
        - demonstrated a Celery task for fully parallel recursive removal
            - roughly 55% speedup compared to irm -rf
        - created new Celery application with separated tasks for filesystem and S3
            - not yet merged

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - released 0.4.0
        - interns completed clients for Python, JavaScript, and Java
        - working to make user mapping plugin thread-safe
            - now out of draft
        - working on C++ project template for user mapping plugin

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - implemented performance enhancements for multipart upload
            - efficient store-and-forward (roughly ~35% improvement)
        - implemented AbortMultipartUpload

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - intern successfully replaced use of the C++ REST API with the HTTP API

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - released 4.3.3.0

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - released 4.3.4.0-RELEASE

- Background Items

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - added projects for PostgreSQL 16
        - added projects for MySQL 8.4
        - added projects for MariaDB 10.6, 10.11, and 11.4

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - updated to support libstdc++

    - iRODS Kubernetes Testing Environment
        - v9 of the build and test infrastructure
        - can stand up iRODS Providers and Consumers
        - can run core tests
        - running in RENCI K8s cluster, but could run on any cluster

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

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - released 2.2.0

    - [iRODS Password Booth](https://github.com/irods/irods_client_password_booth)
        - CherryPy web application, uses PRC to let users modify their own password

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - working towards removing the required local database

    - [R client (rirods)](https://github.com/irods/irods_client_library_rirods)
        - released 0.1.1
        - submitted and accepted to CRAN
        - new website - https://irods4r.org
        - presented at UGM 2023

    - [Policy Composition](https://github.com/irods/irods_policy_composition_framework)
        - https://github.com/irods/irods_rule_engine_plugins_policy
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
        - CRDB license has changed

    - [Mungefs](https://github.com/irods/mungefs)
        - removed dependency on externals, can be built as a standalone project

- Discussion
