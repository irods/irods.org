Title: iRODS Development Update: August 2024
Date: 2024-08-14 18:00
Author: Kory Draughn
Slug: irods-development-update-august-2024
Status: published


Hello reader,

iRODS 4.3.3 is very close. We expect we'll have a release in a matter of days/weeks.

Starting with the server, it was discovered that the `rc_replica_truncate` API was not returning information in the JSON output parameter as documented. That has been resolved. We've confirmed the server works with MariaDB. For this to work, the MySQL ODBC Connector must be used. Work on the database plugin project template is progressing well. When it is complete, users looking to add support for new databases will be able to jump right into writing code instead of spending time configuring CMake. The Consortium has also decided not to release iRODS 4.3.3 packages for CentOS 7, as it has reached EOL.

On the packaging side of things, plugins and clients provided by the Consortium will now include the version of iRODS used to compile the binaries. For example, the Logical Quotas rule engine plugin for iRODS 4.3.3 / Ubuntu 22.04 will have a package name of **irods-rule-engine-plugin-logical-quotas_4.3.3.0-0+4.3.3~jammy_amd64.deb**. This is the first step towards independent versioning for plugins and clients. We'll have more to share as things develop.

The PAM Interactive Authentication plugin has received a good number of improvements since last month. Issues with TLS/SSL and account spoofing _(thanks Leiden University)_ have been resolved. The plugin now uses configuration from the **R_GRID_CONFIGURATION** table just like the PAM Password Authentication plugin. And, we've successfully demonstrated PAM Password and Kerberos flows using this plugin. We're very close to a first release so stay tuned.

Users of the Python iRODS client (PRC) will be happy to know that 2.1.0 has been released. To learn what's changed since 2.0.1, see the release notes at [https://github.com/irods/python-irodsclient/releases/tag/v2.1.0](https://github.com/irods/python-irodsclient/releases/tag/v2.1.0).

Work on the next release of the iRODS HTTP API is going well. The parser responsible for handling multipart/form-data has been rewritten to handle embedded CRLFs. We've also started to lay the foundation for user mapping plugins. The minimum version requirement for compiling the HTTP API is being bumped to iRODS 4.3.2. The reason for this is due to iRODS 4.3.2 providing built-in support for GenQuery2. This ultimately means the GenQuery2 API plugin will not be supported in the next release.

Multipart upload performance in the iRODS S3 API has been improved. We're very happy with how things are progressing, but there's still a few things to work out before this lands. If you find that interesting, check out the pull request at [https://github.com/irods/irods_client_s3_api/pull/115](https://github.com/irods/irods_client_s3_api/pull/115).

For the Zone Management Tool (ZMT), our intern has successfully replaced all use of the iRODS C++ REST API with the iRODS HTTP API. That work will land very soon.

It was brought to our attention that the Globus Connector was not available for iRODS 4.3.2. That has since been corrected. Packages are now available via the packages repository.

To wrap up, let's talk about Jargon. We've added support for the new library features API which shipped in iRODS 4.3.1. Not only that, but we've added support for manipulating metadata using rodsadmin-level privileges. Our goal is to release a new version around the same time as iRODS 4.3.3.

Thanks for reading. Talk to you next month!


### August Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - working meeting
        - Thur, August 15, 2024, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a flexible authentication mechanism
    - now incorporated into iRODS 4.3.1
    - working meeting
        - Tues, August 27, 2024, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - have released C++ S3 API
    - working meeting
        - Fri, September 6, 2024, 3pm ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - draft paper for circulation among group
    - working on microservices
        - attach/detach/gather/validate
    - work shown at UGM 2024 was merged
    - working meeting
        - Tues, August 20, 2024, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, August 14, 2024, 4pm ET
    - intern projects
        - HTTP API wrappers
        - ZMT refactored to use HTTP API

- [4.3.3](https://github.com/irods/irods/milestone/42)

    - 0 bugs / 1 open, 88 closed

- [4.3.4](https://github.com/irods/irods/milestone/44)

    - 58 bugs / 189 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 126 bugs / 296 open, 0 closed

- [5.0.0](https://github.com/irods/irods/milestone/41)

    - 6 bugs / 46 open, 2 closed

- [5.0 Backlog](https://github.com/irods/irods/milestone/6)

    - 0 bugs / 41 open, 0 closed

- New Development Work

    - no updates

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - fixed replica_truncate API not returning information in JSON output on success
        - confirmed server works with MariaDB, provided the MySQL ODBC connector is used
        - working on providing a database plugin project template
        - preparing 4.3.3 release
            - no new releases for CentOS 7

    - Build and Packaging
        - packages contain version of iRODS used to build them in package revision string
            - e.g. irods-rule-engine-plugin-logical-quotas_4.3.3.0-0+4.3.3~jammy_amd64.deb

    - [PAM Interactive Authentication Plugin](https://github.com/irods/irods_auth_plugin_pam_interactive)
        - merged account spoofing fix from Leiden University
        - fixed TLS issues
        - replaced configuration with R_GRID_CONFIGURATION
        - added a test suite
        - demonstrated pam_password and kerberos flow using this plugin
        - preparing 0.1.0 release for iRODS 4.3.3, maybe 4.3.2

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - merged support for GenQuery2 into genquery.py module
        - working to add support for virtual environments

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - preparing 2.1.0 release

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - released 0.5.0
            - contains a breaking change, see release notes
            - https://github.com/irods/irods_capability_automated_ingest/releases/tag/v0.5.0

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - interns have completed primary work on HTTP API wrappers
            - Java, JavaScript, and Python
        - reimplemented multipart/form-data parser to handle CRLFs in binary data
        - working to add support for user mapping plugins
        - minimum version requirement changing to 4.3.2
            - removes support for GenQuery2 API plugin
        - Nirav: asking for load balancer info / performance section in README

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - implemented performance enhancements for multipart upload
            - efficient store-and-forward

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - intern successfully replaced use of the C++ REST API with the HTTP API

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - released 4.3.2.0

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - added support for library features API
        - added support for ADMIN_KW to metadata operations
        - preparing next release

- Background Items

    - iRODS Documentation
        - updated documentation for new versions of PostgreSQL and MySQL

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

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - fixed upload issue involving iput -N and incorrect number of expected write threads
            - https://github.com/irods/irods_resource_plugin_s3/issues/2198
        - fixed issue where irsync with checksum operation fails
            - https://github.com/irods/irods_resource_plugin_s3/issues/2204

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - updated ELK stack docker image for plugin demonstration purposes
            - now uses distribution-provided JRE

    - [NetCDF microservices](https://github.com/irods/irods_netcdf)
        - released for 4.3.1
        - considering archiving this project in favor of other solutions
            - possible existing Python libraries are 'enough'

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - released 4.3.2.0

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - released 4.3.2.0

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - released 4.3.2.0

    - [Metadata Guard](https://github.com/irods/irods_rule_engine_plugin_metadata_guard)
        - released 4.3.2.0

    - [CURL microservices](https://github.com/irods/irods_microservice_plugins_curl)
        - released 4.3.2.0

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

    - [Mungefs](https://github.com/irods/mungefs)
        - removed dependency on externals, can be built as a standalone project

- Discussion
