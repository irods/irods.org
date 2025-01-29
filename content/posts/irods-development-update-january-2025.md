Title: iRODS Development Update: January 2025
Date: 2025-01-29 14:00
Author: Kory Draughn
Slug: irods-development-update-january-2025
Status: published


Happy New Year!

I hope you had a wonderful and safe holiday. People are still getting back into the swing of things, so this will be a short update.

TRiRODS will be happening on February 12th. Justin James, of the iRODS Consortium, will be giving a presentation on the upcoming Metalnx 3.0.0 release. You can register and find more information about the event at [https://irods.org/trirods/](https://irods.org/trirods/). We hope to see you there.

Efforts to release Storage Tiering capability plugin 4.3.3.1 are in progress. This upcoming release is all about improving stability and addressing bugs. To help with tracking down memory errors, we've added support for Address Sanitizer.

Python iRODS client (PRC) 3.0.0 is now available! It was released on December 19, 2024 and closed 26 issues. The most important change of the release is the removal of Python 2 compatibility. With that comes improved handling of the **.irodsA** file and improved support for PAM authentication. To learn more, see the release notes at [https://github.com/irods/python-irodsclient/releases/tag/v3.0.0](https://github.com/irods/python-irodsclient/releases/tag/v3.0.0). A new release doesn't mean the work stops there though. We're now working to bring full compatibility with the iRODS 4.3 authentication framework, sync functionality, and enhancements to I/O buffering.

Last but not least, Jargon and Metalnx have been updated to use log4j 2.

Thanks for reading!


### January Technology Working Group

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

- [TRiRODS](https://irods.org/trirods)

    - Wed, February 12, 2025, 4pm ET
    - Justin James, Metalnx 3.0.0

- [4.3.4](https://github.com/irods/irods/milestone/44)

    - 54 bugs / 185 open, 41 closed

- [4.3.5](https://github.com/irods/irods/milestone/43)

    - 77 bugs / 267 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 124 bugs / 291 open, 0 closed

- [5.0.0](https://github.com/irods/irods/milestone/41)

    - 7 bugs / 94 open, 30 closed

- [5.0 Backlog](https://github.com/irods/irods/milestone/6)

    - 0 bugs / 37 open, 0 closed

- New Development Work

    - no updates

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - updated iadmin to return non-zero error code on structural failures
        - removal of user now deletes associated ACLs
        - added missing required configuration properties to JSON schema files
        - deprecations
            - dataObjLock and dataObjUnlock APIs
            - imeta qu, imeta interactive mode
            - original GenQuery1 string-based parser
        - iRODS 5.0.0
            - merged startup/shutdown redesign work into upstream
            - merged new GenQuery1 parser, resolving all long-standing GenQuery1 issues
            - working on enhancements for systemd service manager communication
            - started investigating unicode improvements
            - removed ilocate and igetwild icommands
            - planning to absorb metadata guard rule engine plugin into server

    - Build and Packaging
        - working on moving more dependencies over to find_package
            - mostly focused on Boost libraries
        - added new CMake cache variable for package configuration install directory
        - added new jsoncons externals package
        - normalized Boost externals package across distros
        - updated Clang package to include a few Python script fixes
        - investigating updating compiler to Clang 15
        - removed support for EL7 from externals

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - removed support for EL7

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - removed support for EL7

    - [PAM Interactive Authentication Plugin](https://github.com/irods/irods_auth_plugin_pam_interactive)
        - removed post-install script from client packages

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - working toward 4.3.3.1 release
        - added support for Address Sanitizer
            - fixed some memory leaks

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - released 3.0.0
        - removed nearly all Python 2 compatibility workarounds from codebase
        - improved handling of .irodsA file
        - improved support for PAM authentication
            - properly escapes special characters
                - https://github.com/irods/python-irodsclient/issues/650
        - working to add an rsync library/utility
        - working to add full implementation of new 4.3+ auth framework
        - working on experimental enhancements around I/O buffering
            - adds ability to change buffer block sizes
            - introduces non-buffered objects as part of the interface

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - released 0.5.0
        - added support for Undefined Behavior Sanitizer
        - added GitHub workflows for compilation, code formatting, and static analysis
        - added Keycloak Docker image for OIDC testing
        - added option for enabling stricter checking of aud for Introspection Endpoint
        - working to make server extend timeouts on long-running reads/writes of data objects

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - updated log4j from 1.x to 2.x, removed dependency on slf4j

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - removed dependency on irods-ext database
        - removed favorites, templates, user profiles, and bookmarks
        - user information is now obtained directly from iRODS
        - updated log4j from 1.x to 2.x, removed dependency on slf4j

- Background Items

    - iRODS Documentation
        - last update: September 2024
        - added data_object_finalize database PEP implementation to Policy Cookbook
        - added Testing section to Developer docs for how to add and run tests
        - documented GenQuery2

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

    - Member Survey - being collected/compiled - received 7 so far
