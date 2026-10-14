Title: iRODS Development Update: October 2026
Date: 2026-10-14 20:00
Author: Kory Draughn
Slug: irods-development-update-october-2026
Status: published


Hello reader,

iRODS 5.1.0 is almost here. Since last month's update, most of our time has been focused on testing and hardening the server. The new logical quotas system has been updated to include modification time information. We've also put some energy into improving development build time through the use of ccache. Given the rising popularity of the mold linker, we opened an issue requesting that the mold development team add the necessary build options needed by iRODS plugins. We're pleased to see that that request has already been fulfilled.

For the S3 resource plugin, more cases involving shared memory leaks have been identified and fixed.

In the run up to iRODS 5.1.0, it was reported that the Python rule engine plugin was not executing `except` and `finally` PEPs. That is now fixed.

Indexing capability plugin 5.0.2 is now available. This release improves the plugins ability to handle embedded single quotes. The release notes can be viewed at <https://github.com/irods/irods_capability_indexing/releases/tag/5.0.2>.

For the Python iRODS client (PRC), support for GenQuery1 now includes exposure of zone create/modify time information. We are also looking into improvements for managing metadata. Lastly, we've started investigating the possibility of a new Python library. This effort shares the same goals as irods4j and is in the early stages of development. Development on the existing PRC interface will continue.

Thanks for reading.


### October Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - working on an OMERO integration
    - working meeting
        - Thur, October 15, 2026, 10am ET

- Community Office Hours

    - third Wednesday of every month
    - Wed, October 21, 2026, 930am ET

- [5.1.0](https://github.com/irods/irods/milestone/47)

    - 1 bug / 4 open, 227 closed

- New Development Work

    - no updates

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - testing release candidate, hardening server
        - updated logical quotas API to include modification time information
        - opened PR that improves ccache performance for development builds

    - Build and Packaging
        - required build options for iRODS plugins now implemented in mold
            - https://github.com/rui314/mold/issues/1707

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - added functionality to help catch integer overflow and type narrowing cases
        - investigating fix for MySQL 9 support

    - [Audit AMQP Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - considering vendoring Qpid-Proton to strengthen refactor

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - fixed more cases where shared memory is leaked

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - restored execution of except/finally PEPs
            - iRODS 4.3 series not affected

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - released 5.0.2
            - https://github.com/irods/irods_capability_indexing/releases/tag/5.0.2

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - investigating experimental movement toward a simpler library
        - investigating support for simpler, more flexible metadata assignments
        - made zone create/modify time information available via GenQuery1 

- Background Items

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - last update: September 2026
        - added support for physical quotas
        - added support for built-in logical quotas
        - updated server to parse application/x-www-form-urlencoded data correctly

    - [iRODS System Tray](https://github.com/irods-contrib/irods_client_system_tray)
        - last update: September 2026
        - released 0.1.0
            - https://github.com/irods-contrib/irods_client_system_tray/releases/tag/0.1.0

    - [Logical Quotas Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - last update: August 2026
        - released 5.1.1 and 5.1.0 for iRODS 5
        - released 4.3.5.1 and 4.3.4.1 for iRODS 4.3

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - last update: August 2026
        - released 5.1.0

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - last update: August 2026
        - released 0.6.0

    - [irods4j](https://github.com/irods/irods4j)
        - last update: August 2026
        - fixed handling of SHARED_SECRET payload for TLS
            - motivated by https://github.com/iterate-ch/cyberduck/issues/18152
        - released 0.7.0

    - [R client (rirods)](https://github.com/irods/irods_client_library_rirods)
        - last update: August 2026
        - released 0.3.0
            - no functional changes
            - updated maintainer information for CRAN

    - [Policy Composition](https://github.com/irods/irods_rule_engine_plugin_policy_composition)
        - last update: April 2026
        - released 0.1.0

    - [PAM Interactive Authentication Plugin](https://github.com/irods/irods_auth_plugin_pam_interactive)
        - last update: March 2026
        - released 0.1.1 (for 4.3.5)

    - [Metadata Guard Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_metadata_guard)
        - last update: March 2026
        - released 4.3.5.0

    - [CURL Microservices Plugin](https://github.com/irods/irods_microservice_plugins_curl)
        - last update: March 2026
        - released 4.3.5.0

    - [Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - last update: March 2026
        - released 4.3.5.0

    - Cyberduck
        - last update: March 2026
        - released 9.4.0
            - includes irods4j-backed implementation
            - requires a minimum server version of iRODS 4.3.2

    - [idrop](https://github.com/irods-contrib/idrop)
        - last update: March 2026
        - switched from maven-assembly plugin to maven-shade plugin for building uber JARs
        - added OS-specific build scripts for Linux and Windows

    - [HTTP API Python Wrapper](https://github.com/irods/irods_client_http_python)
        - last update: March 2026
        - released 0.1.0
            - https://pypi.org/project/irods-http/

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - last updated: January 2026
        - added automated testing via GitHub Actions

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - last updated: November 2025
        - released 3.1.1

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - last update: August 2025
        - genericizing EL Dockerfiles

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - last update: August 2025
        - released 0.4.1
            - intern has resolved build failures

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - last update: August 2025
        - updated to support change in rcGeneralAdmin for adding groups in iRODS 4.3.4+

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - last update: July 2025
        - released 2.3.1

    - [Mungefs](https://github.com/irods/mungefs)
        - last update: April 2025
        - updating CMake policy requirements for newer versions of CMake
        - migrated externals package to use system-provided libarchive and ZeroMQ

    - CockroachDB Database Plugin
        - last update: September 2024
        - CRDB license has changed

    - iRODS Kubernetes Testing Environment
        - last update: April 2024
        - v9 of the build and test infrastructure
        - can stand up iRODS Providers and Consumers
        - can run core tests
        - running in RENCI K8s cluster, but could run on any cluster

    - [iRODS Password Booth](https://github.com/irods/irods_client_password_booth)
        - last update: February 2024
        - CherryPy web application, uses PRC to let users modify their own password

    - [iRODS Command Line Interface (CLI)](https://github.com/irods/irods_client_cli)
        - last update: September 2023
        - added support for many basic operations
            - ls, mv, tree, mkdir, get, put, cd, pwd, touch, etc
        - presented at UGM 2023

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
        - last update: July 2020

    - [Publishing Capability](https://github.com/irods/irods_capability_publishing)
        - last update: August 2020
        - needs more README
        - awaiting CI

    - Parallel Filesystem Integration
        - last update: March 2020
        - iRODS API plugin
        - have split BeeGFS and Lustre implementations into aggregator and listener
        - testing against known configurations

- Discussion
