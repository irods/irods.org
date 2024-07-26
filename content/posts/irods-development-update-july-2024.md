Title: iRODS Development Update: July 2024
Date: 2024-07-26 14:45
Author: Kory Draughn
Slug: irods-development-update-july-2024
Status: published


Hello reader,

We've been hard at work preparing iRODS 4.3.3. We've closed 60+ issues and have 9 more to go.

For the iRODS server, a regression in the replication implementation has been fixed. This change restores the users' ability to replicate data when they only have permissions via a group. `trimPrefix` and `trimStrings` _(C functions provided by the iRODS library)_ are now deprecated. Here's a big one, the next release of iRODS will officially support Ubuntu 24.04! We're getting better and better at adding support for new operating systems. Aside from that, we've added documentation for new versions of PostgreSQL and MySQL. Lastly, a new GenQuery1 parser has been implemented. The new parser preserves all of the capabilities and features of GenQuery1, but adds the ability to escape characters and bytes, just like in GenQuery2. Given that GenQuery2 is very different from GenQuery1, we wanted to see if we could offer a parser which focused on the immediate issues, embedded single quotes and keywords in string literals. We're unsure whether this work will ever be merged into iRODS, but if you're interested in following along, take a look at [https://github.com/irods/irods/pull/7819](https://github.com/irods/irods/pull/7819).

Users of the iRODS Testing Environment will be happy to know that projects for PostgreSQL 16, MySQL 8.4, and MariaDB 10.6, 10.11, and 11.4 are now available.

The GenQuery python module _(i.e. genquery.py)_ which ships with the Python rule engine plugin is gaining support for GenQuery2. Once complete, the `Query` class will give users the ability to choose the GenQuery parser they'd like to use. With these changes, administrators will have an easy migration path from GenQuery1 to GenQuery2. This is especially helpful in situations where the policy makes heavy use of the `Query` class.

The S3 resource plugin received a couple fixes. The first fix resolves an issue where the server was not honoring the number of threads specified by `iput -N`. The second fix resolves an issue with `irsync` and checksum operations failing.

For the Python iRODS client (PRC), session objects now propagate connection timeout information to the socket layer as originally intended. Support for progress bars has been improved. Users will soon be able to use their favorite progress bar library with the PRC. And last but not least, a question about the recently published ISO standard, ISCC, was presented to the community. If you find that interesting and/or have suggestions, please see [https://github.com/irods/python-irodsclient/issues/573](https://github.com/irods/python-irodsclient/issues/573). The issue also provides a link to an implementation of ISCC for the PRC!

Automated Ingest 0.5.0 has been released. This new release includes adjustments to the event handler interface to account for changes introduced in an unreleased update. This is a **breaking** change. Users of the the Automated Ingest tool will need to update their event handlers. We've also added a Docker Compose project which makes it possible to easily test the S3 scanner.

The iRODS HTTP API has received several updates. The next release of the HTTP API will allow users to modify properties of resources, manage SpecificQueries, apply expiration timestamps to tickets, and manage zones. Not only that, but administrators will soon be able to track activity better due to the server growing the ability to log IP addresses. Finally, the interns are making excellent progress on the client wrappers for the HTTP API. The client wrappers will be covered at the next TRiRODS meeting on August 14th, so keep an eye out for that.

The Zone Management Tool is being updated to use the HTTP API instead of the now archived C++ REST API. This work is being handled by one of our interns and is nearly done.

Users of the Globus Connector will be happy to know that a fix was merged which allows the plugin to handle apostrophes in filenames.

That wraps up this month's development update. Talk to you next month!


### July Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - working meeting
        - Thur, July 18, 2024, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a flexible authentication mechanism
    - now incorporated into iRODS 4.3.1
    - working meeting
        - Tues, July 23, 2024, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - have released C++ S3 API
    - working meeting
        - Fri, August 2, 2024, 3pm ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - draft paper for circulation among group
    - working on microservices
        - attach/detach/gather/validate
    - work shown at UGM 2024 was merged
    - working meeting
        - Tues, July 16, 2024, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, August 14, 2024, 4pm ET
    - intern projects
        - HTTP API wrappers
        - ZMT refactored to use HTTP API

- [4.3.3](https://github.com/irods/irods/milestone/42)

    - 6 bugs / 9 open, 66 closed

- [4.3.4](https://github.com/irods/irods/milestone/44)

    - 52 bugs / 167 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 126 bugs / 292 open, 0 closed

- [5.0.0](https://github.com/irods/irods/milestone/41)

    - 6 bugs / 44 open, 2 closed

- [5.0 Backlog](https://github.com/irods/irods/milestone/6)

    - 0 bugs / 41 open, 0 closed

- New Development Work

    - no updates

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - fixed regression in replication API
            - restored ability for users to replicate when they only have permission via a group
        - deprecated trimPrefix() and trimStrings()
            - can affect C/C++ clients
        - implemented new flex/bison parser for GenQuery1
            - https://github.com/irods/irods/pull/7819
            - resolves all reported issues with special characters and embedded single quotes
            - passes all tests
            - not merged yet
                - changes in error codes and messages
                - could break existing deployments
                - may become an opt-in

    - Build and Packaging
        - merged support for Ubuntu 24.04
        - updated externals packages

    - iRODS Documentation
        - updated documentation for new versions of PostgreSQL and MySQL

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - added projects for PostgreSQL 16
        - added projects for MySQL 8.4
        - added projects for MariaDB 10.6, 10.11, and 11.4

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - updated genquery.py module to support GenQuery2
            - https://github.com/irods/irods_rule_engine_plugin_python/pull/206
            - not all features of the Query interface are supported
            - awaiting tests

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - fixed upload issue involving iput -N and incorrect number of expected write threads
            - https://github.com/irods/irods_resource_plugin_s3/issues/2198
        - fixed issue where irsync with checksum operation fails
            - https://github.com/irods/irods_resource_plugin_s3/issues/2204

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - fixed unreliable propagation of session object's connection timeout to socket layer
        - implemented generic solution for progress bars in data transfers

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - fixed event handler interface changes introduced in unreleased update
        - created demo Docker Compose project for testing S3 scanning
            - may serve as the basis for automated S3 scan testing

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - interns working to make sure each client-side wrapper has a similar look and feel
            - Java, JavaScript, and Python
        - implemented support for modifying properties of a resource
        - implemented support for adding and removing specific queries
        - implemented support for setting ticket expiration on creation
        - implemented support for adding, modifying, and removing zones
        - implemented support for including IPs in several log messages

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - intern working to replace use of the C++ REST API with the HTTP API
            - HTTP API missing operations for modify properties of resources
            - HTTP API missing operations for managing zones

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - fixed issue with data transfers of files with apostrophes in the filename

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
    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - started designing/implementing performance enhancements for multipart upload
            - 'efficient store-and-forward'

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

    - [PAM Interactive Authentication Plugin](https://github.com/irods/irods_auth_plugin_pam_interactive)
        - reorganized project structure
        - fixed packaging

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

    - PRC - Any interest in ISCC codes for iRODS data objects?
        - https://github.com/irods/python-irodsclient/issues/573
        - implementation at https://github.com/ll4strw/python-irodsclient-iscc
