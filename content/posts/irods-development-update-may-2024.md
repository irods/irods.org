Title: iRODS Development Update: May 2024
Date: 2024-05-22 12:00
Author: Kory Draughn
Slug: irods-development-update-may-2024
Status: published


Hello reader,

[iRODS 4.3.2 was released earlier this month](https://irods.org/2024/05/irods-4-3-2-is-released/) and the [iRODS User Group Meeting](https://irods.org/ugm2024/) is happening next week. May is turning out to be a pretty big month!

Development on iRODS has slowed a bit due to conference preparations. We're working hard to make sure this year's UGM is the best it can be.

For the server, work to add support for Ubuntu 24.04 has begun. Being able to focus on adding new operating systems is a clear sign that things are headed in the right direction.

Automated Ingest received a few updates to its dependencies and the tests are now passing. Aside from that, we're considering the idea of making backwards incompatible changes to the interface. If you have ideas, questions, and/or concerns about that, please reach out to us.

The Globus Connector now has an automated testing framework. The plugin was updated to report its name to the iRODS server for `ips`. It now sets the `O_CREAT` flag on file uploads. Lastly, support for file modification time preservation and rename functionality have been implemented.

That wraps up this month's development update. See you at UGM!


### May Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - working meeting
        - Thur, June 20, 2024, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a flexible authentication mechanism
    - now incorporated into iRODS 4.3.1
    - working meeting
        - Tues, June 25, 2024, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - have released C++ S3 API
    - working meeting
        - Fri, June 7, 2024, 3pm ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - draft paper for circulation among group
    - working on microservices
    - working meeting
        - Tues, June 18, 2024, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, August 14, 2024, 4pm ET
    - speaker, TBD

- [4.3.3](https://github.com/irods/irods/milestone/42)

    - 41 bugs / 112 open, 0 closed

- [4.3.4](https://github.com/irods/irods/milestone/43)

    - 70 bugs / 242 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 127 bugs / 290 open, 0 closed

- [5.0.0](https://github.com/irods/irods/milestone/41)

    - 6 bugs / 42 open, 2 closed

- [5.0 Backlog](https://github.com/irods/irods/milestone/6)

    - 0 bugs / 39 open, 0 closed

- New Development Work

    - no updates

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - released 4.3.2

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - released 4.3.2.0

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - released 4.3.2.0

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - released 4.3.2.0

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - released 4.3.2.0

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - released 4.3.2.0

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - released 4.3.2.0

    - [Metadata Guard](https://github.com/irods/irods_rule_engine_plugin_metadata_guard)
        - released 4.3.2.0

    - [CURL microservices](https://github.com/irods/irods_microservice_plugins_curl)
        - released 4.3.2.0

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - released 2.0.1

    - Build and Packaging
        - working on Ubuntu 24.04 support

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - test suite is now passing
        - updated dependencies via dependabot

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - added automated testing framework
        - plugin now reports its name to the server for ips
        - plugin properly sets O_CREAT flag on file uploads
        - implemented support for file modification time preservation
        - implemented rename functionality

- Background Items

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - updated to support libstdc++

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - support for podman contributed by Marco Roeland
            - https://github.com/irods/irods_testing_environment/pull/180

    - iRODS Kubernetes Testing Environment
        - v9 of the build and test infrastructure
        - can stand up iRODS Providers and Consumers
        - can run core tests
        - running in RENCI K8s cluster, but could run on any cluster

    - [iRODS Documentation](https://github.com/irods/irods_docs)
        - added policy for reporting security vulnerabilities

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - released 0.3.0

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - released 0.2.0
            - removed use of C++20 coroutines
            - implemented multipart uploads
                - using 'store and forward', at least for now
            - implemented DeleteObjects and GetObjectTagging
            - added config validation, connection pooling, and more

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

    - [Mungefs](https://github.com/irods/mungefs)
        - removed dependency on externals, can be built as a standalone project

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - preparing release of 4.3.3.0
        - added option to test framework that allows users to install other versions of iRODS 4.3
        - updated FilePermissionEnum to support new permission levels
        - added server version detection methods for iRODS 4.3
        - StartupPack now sends the correct value for <option> element

- Discussion

    - Automated Ingest Capability
        - is anyone concerned with us making changes to the interface?
