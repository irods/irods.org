Title: iRODS Development Update: November 2024
Date: 2024-11-27 22:00
Author: Kory Draughn
Slug: irods-development-update-november-2024
Status: published


Hello reader,

We're back from [Supercomputing 2024]({filename}/pages/sc24.html) and it was great! It's always nice to speak to existing and potentially new users.

For the server, we've improved the tracking of ticket information. Exceeding the use-count of a ticket no longer results in an ODBC error. We've also adjusted the ODBC code to return the appropriate iRODS error code when a duplicate key constraint is violated.

Progress on the iRODS 5 server is going well. Two rule engine plugin operations, `setup` and `teardown`, have been added to improve configuration management. These operations speed up agent startup by moving the loading of configuration information to the agent factory. Servers are no longer sensitive to launch order. That means, catalog service consumers now wait for catalog service providers to start before accepting client connections, and catalog service providers now wait for the database to start before accepting client connections. The delay server now locks delay rules before execution to keep other delay servers from duplicating the work. This change helps simplify delay server migration and also sets the foundation for future capabilities.

Work to remove support for Python 2 from the Python iRODS Client (PRC) is close. The initial work is complete. Python 2 has been EOL for many years, so this is a very important step for the PRC. Support for PAM passwords has improved as well. Users will soon be able to include special characters in their passwords. The iRODS Consortium has taken ownership of the **irods** namespace in PyPI. Installing the **irods** module via `pip` will now result in the installation of the PRC. To wrap up the PRC update, we have been exploring the possibility of offering a new CLI via the PRC. The goal of this new CLI would be to provide a client that works on all platforms and offer the same power as the iCommands. This effort would take the place of the [C++ CLI](https://youtu.be/wsvvyd0Ot8s?si=CyATYEXuXCWwAXjX) we presented during [UGM 2023](https://irods.org/ugm2023/). We'll have more to share in the future so stay tuned.

iRODS HTTP API 0.5.0 has been released. It includes a user-mapping plugin system that enables dynamic user-mapping and improved security through token validation. To learn more, see the release notes at [https://github.com/irods/irods_client_http_api/releases/tag/0.5.0](https://github.com/irods/irods_client_http_api/releases/tag/0.5.0).

Metalnx users will be happy to know that development is ramping up again. We are now working to make Metalnx a pure client. That means removing the requirement on a local database. We're making good progress and hope to have more information soon.

That wraps up this month's update. Talk to you in December!


### November Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - working meeting
        - Thur, January 16, 2025, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - PAM Interactive auth plugin v0.1.0 is released
    - working meeting
        - Tues, January 28, 2025, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - have released C++ S3 API
    - working meeting
        - Fri, February 7, 2025, 3pm ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - draft paper for circulation among group
    - server-side validation now working
    - working meeting
        - Tues, January 21, 2025, 10am ET

- [4.3.4](https://github.com/irods/irods/milestone/44)

    - 64 bugs / 214 open, 12 closed

- [4.3.5](https://github.com/irods/irods/milestone/43)

    - 62 bugs / 216 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 124 bugs / 290 open, 0 closed

- [5.0.0](https://github.com/irods/irods/milestone/41)

    - 7 bugs / 64 open, 3 closed

- [5.0 Backlog](https://github.com/irods/irods/milestone/6)

    - 0 bugs / 39 open, 0 closed

- New Development Work

    - New Python Metapackage 'irods'
        - [https://github.com/irods/irods_python_metapackage](https://github.com/irods/irods_python_metapackage)
    - started exploratory work on new iRODS CLI in python-irodsclient
    - working with intern to enable fuzz testing of the HTTP API

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - modified ticket use logic so behavior stays consistent when at a ticket use limit
            - had caused a Function Sequence Error in the database
        - fixed issue where server returned SQL error instead of duplicate catalog item error
            - CAT_SQL_ERR vs CATALOG_ALREADY_HAS_ITEM_BY_THAT_NAME
            - had caused a Function Sequence Error in the database
        - iRODS 5.0.0
            - considering changing acPreConnect()'s default value to CS_NEG_REQUIRE
            - working to improve handling of passwords for native auth
                - integrating with existing native auth plugin and password-setting mechanisms
            - reverted absolute path change for iRODS Rule Language plugin
            - started testing and addressing review comments
            - upgrade logic is no longer run on server startup
                - requires the admin to manually run the upgrade operation
            - provider servers now wait for the catalog to become available before starting
            - consumer servers now wait for the provider to become available before starting
            - added new setup/teardown operations to rule engine plugin interfaces
                - rule engine plugins no longer read configuration on agent startup
                - reload functionality available via SIGHUP
            - delay server now marks delay rules it is actively executing
                - keeps multiple delay servers from executing the same delay rules
                - execution of delay rules is visible in real time via GenQuery
                - in support of the configuration reload functionality
            - removed irods-grid command
                - removes need for port 1248

    - Build and Packaging
        - working on moving more dependencies over to find_package
        - mostly focused on boost libraries

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - work on interpreter configuration is now on hold
        - work to add support for virtual environments is now on hold
        - will use/depend on setup/teardown operations in rule engine plugins
            - to prevent spinning up multiple python interpreters (aka performance)

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - released 2.2.0
        - working on 3.0.0
            - completed initial work to remove all Python 2 compatibility
        - completed work to make PAM passwords work with special characters
            - see [https://github.com/irods/python-irodsclient/pull/656](https://github.com/irods/python-irodsclient/pull/656)
            - tests are passing against 4.2 and 4.3
            - will look for testing/confirmation from RUG soon

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - released 0.6.0
        - [https://github.com/irods/irods_capability_automated_ingest/releases/tag/v0.6.0](https://github.com/irods/irods_capability_automated_ingest/releases/tag/v0.6.0)

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - 0.5.0 release imminent
            - implemented local JWT access token validation for OpenID Connect
            - added additional validation to introspection endpoint response
            - added validation of the OIDC metadata returned from the well-known endpoint
            - improved error message on connection failure to OIDC provider
            - improved documentation for tls_certificates_directory config property

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - working towards pure iRODS client - removing the required local database

- Background Items

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
        - moved pam_interactive to PRC 3.1 for now

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

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - last update: September 2024
        - released 4.3.4.0-RELEASE

    - [iRODS Password Booth](https://github.com/irods/irods_client_password_booth)
        - last update: February 2024
        - CherryPy web application, uses PRC to let users modify their own password

    - [R client (rirods)](https://github.com/irods/irods_client_library_rirods)
        - last update: September 2023
        - released 0.1.1
        - submitted and accepted to CRAN
        - new website - [https://irods4r.org](https://irods4r.org)
        - presented at UGM 2023

    - [Policy Composition](https://github.com/irods/irods_policy_composition_framework)
        - [https://github.com/irods/irods_rule_engine_plugins_policy](https://github.com/irods/irods_rule_engine_plugins_policy)
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
