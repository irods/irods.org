Title: iRODS Development Update: June 2024
Date: 2024-06-26 12:00
Author: Kory Draughn
Slug: irods-development-update-june-2024
Status: published


Hello reader,

The [iRODS User Group Meeting](https://irods.org/ugm2024) has come and gone. There were a total of 120+ attendees spanning 15+ countries. We appreciate all who attended in-person and virtually. Presentations will be made available over the next few weeks.

For this month's update, let's start off by talking about new development work. We are joined by three new interns this summer and their primary task is to design and implement client-side wrappers for the HTTP API. The first set of wrappers will support Python, Java, and JavaScript. Aside from the HTTP API wrappers, one of the interns is also working on converting the Zone Management Tool to use the HTTP API instead of the now archived C++ REST API.

The last thing I'll mention for new development work is that the Consortium is investigating the possibility of offering a new web GUI for non-admin users. The GUI would provide a minimalist interface designed to be lightweight, stable, and easy to use. Depending on how things go, it might even replace Metalnx. We'll keep you updated as we learn more.

For the iRODS server, all python scripts have been updated to work with later versions of Python. We improved the stability of the server by fixing intermittent crashes during startup. The GenQuery2 implementation which ships with the server now supports nested, multi-argument function calls in the **WHERE** _(left-hand side of condition only)_ and **ORDER BY** clauses. Documentation for configuring iRODS to work with PostgreSQL 15 and later is underway as well.

Our build and packaging situation has improved. We are now able to apply complex patches to new builds of externals, some of which come from various distributions. We also have the ability to declare dependencies per-distribution per-version. Last but not least, we're happy to announce that iRODS 4.3.3 will officially support Ubuntu 24.04.

Support for old versions of Ubuntu and MySQL have been removed from the iRODS Testing Environment. If you find the need to launch one of the old versions of Ubuntu and/or MySQL, you'll be happy to know the commits where these were last known to work are tagged using the following scheme, `EOL-<operating_system>` and `EOL-<database>`. 

In the lead up to the User Group Meeting, we updated the ELK stack docker image _(for the Audit AMQP rule engine plugin)_ to use the distribution-provided Java Runtime Environment (JRE). For those unfamiliar with the ELK stack docker image, it's an image designed specifically for training purposes.

For the S3 resource plugin, we fixed an issue involving intermittent compiler crashes during compilation. We also fixed an upload issue involving `iput -N` and an incorrect number of threads used for write operations.

It's been a while since we mentioned the PAM-interactive authentication plugin. The project's structure has been re-organized and the CMake responsible for packaging has been fixed.

The GenQuery module which ships with the Python rule engine plugin is growing support for GenQuery2. There's still a number of things that need to happen before this is ready. Given the differences between GenQuery1 and GenQuery2, it's not yet clear whether all functionality provided by the python module will be supported. For those interested, the work for this can be found at [https://github.com/irods/irods_rule_engine_plugin_python/pull/206](https://github.com/irods/irods_rule_engine_plugin_python/pull/206).

The next version of the Python iRODS client (PRC) is close. Big thanks to Utrecht University for doing the work to add support for GenQuery2. Not only that, but the PRC will also support the **touch** API endpoint. For those unfamiliar with the **touch** API, it allows users to modify the mtime of collections and data objects. As always, a few issues have been resolved as well. Specifically, we fixed an issue where the number of connections would grow due to redirection within the PRC. Lastly, listing of ACLs on data objects with multiple replicas no longer results in redundant ACLs.

For those following the iRODS S3 API, you'll be happy to know work to improve the performance of multipart upload has begun. We'll have more to say about this in the coming months.

To wrap up, the Jargon library has received a few updates. It now supports GenQuery2 and the new replica truncate API. A new version detection method for iRODS 4.3.2 has been added and the documentation for the docker test framework has been improved.

That was quite the development update. Talk to you next month!


### June Technology Working Group

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
        - Fri, July 5, 2024, 3pm ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - draft paper for circulation among group
    - working on microservices
        - attach/detach/gather/validate
    - work shown at UGM 2024 was merged
    - working meeting
        - Tues, June 18, 2024, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, August 14, 2024, 4pm ET
    - intern projects
        - HTTP API wrappers
        - ZMT refactored to use HTTP API

- [4.3.3](https://github.com/irods/irods/milestone/42)

    - 52 bugs / 136 open, 1 closed

- [4.3.4](https://github.com/irods/irods/milestone/43)

    - 71 bugs / 244 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 131 bugs / 297 open, 0 closed

- [5.0.0](https://github.com/irods/irods/milestone/41)

    - 6 bugs / 43 open, 2 closed

- [5.0 Backlog](https://github.com/irods/irods/milestone/6)

    - 0 bugs / 40 open, 0 closed

- New Development Work

    - interns investigating designs for client-side wrappers around the iRODS HTTP API
    - interns have started working to update the ZMT to use the iRODS HTTP API
        - originally used the iRODS C++ REST API (archived)
    - investigating the possibility of offering a minimalist web GUI for iRODS
        - goals include: maximum stability, non-admin user focused, fast, easy to enhance
        - gives new comers a tool to quickly try out iRODS
        - could possibly replace Metalnx

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - python scripts updated for new versions of python
        - fixed intermittent crashes on startup
            - caused by race condition related to loading of network plugins
        - implemented support for the following in GenQuery2
            - nested function calls
            - multi-argument function calls
            - function calls in WHERE clause (left-hand side of condition only)

    - Build and Packaging
        - working on Ubuntu 24.04 support
        - externals can now apply complex patches before building packages
        - externals packages now pull in some patches from distributions
        - externals packages now declare dependencies per-distribution per-version

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - removed support for old versions of Ubuntu and MySQL

    - [iRODS Documentation](https://github.com/irods/irods_docs)
        - adding documentation for setup with PostgreSQL 15+

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - fixed intermittent compiler crashes while building plugin
        - fixed upload issue involving iput -N and incorrect number of expected write threads

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - updated ELK stack docker image for plugin demonstration purposes
            - now uses distribution-provided JRE

    - [PAM Interactive Authentication Plugin](https://github.com/irods/irods_auth_plugin_pam_interactive)
        - reorganized project structure
        - fixed packaging

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - updated genquery.py module to support GenQuery2
            - not all features of the Query interface are supported
            - awaiting tests

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - added support for GenQuery2
            - contributed by Utrecht University
        - fixing issue with growing connection list due to redirection in the client
        - fixing issue with redundant reporting of ACLs when data objects have multiple replicas
        - adding support for touch API endpoint
        - general improvements - more automatic/comprehensive testing for next release

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - started designing/implementing performance enhancements for multipart upload
            - 'efficient store-and-forward'

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - preparing next release
        - added support for GenQuery2
        - added support for replica truncate API
        - added version detection methods for iRODS 4.3.2
        - updated documentation for docker test framework

- Background Items

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - updated to support libstdc++

    - iRODS Kubernetes Testing Environment
        - v9 of the build and test infrastructure
        - can stand up iRODS Providers and Consumers
        - can run core tests
        - running in RENCI K8s cluster, but could run on any cluster

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - released 0.3.0

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

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - now compatible with iRODS 4.3.1
        - added support for remembering rows per page
            - /servers, /resources, /users, /groups
        - added ability to view ticket information
            - ticket creation not supported yet
        - added ability to change where the delay server is run
            - retrieving where the delay server runs is not supported yet

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - test suite is now passing
        - updated dependencies via dependabot

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - added automated testing framework
        - plugin now reports its name to the server for ips
        - plugin properly sets O_CREAT flag on file uploads
        - implemented support for file modification time preservation
        - implemented rename functionality

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

- Discussion
