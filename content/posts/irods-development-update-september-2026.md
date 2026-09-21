Title: iRODS Development Update: September 2026
Date: 2026-09-22 10:00
Author: Kory Draughn
Slug: irods-development-update-september-2026
Status: published


Hello reader,

For the server, we identified that the ObjStat API can return information about replicas that are not marked good. Work to correct that is nearing completion. We've fixed a logical quotas bug where it would count similarly-named collections. We've fixed a delay server bug which resulted in it connecting as the local rodsadmin.

The S3 resource plugin has been updated to detect and report when a file upload exceeds the 10,000 part limit. Visit the GitHub repository to learn more. Aside from that, we've also fixed three issues involving shared memory.

For the Python iRODS client, we've exposed the `RULE_EXEC_CONTEXT` column for GenQuery1. Work to fix a bug involving unexpected preservation of flags across session objects is nearing completion as well.

For the HTTP API, support for physical quotas and logical quotas has been added. We've also fixed a long-standing bug involving reserved characters and application/x-www-form-urlencoded.

Thanks for reading.


### September Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - working on an OMERO integration
    - working meeting
        - Thur, September 17, 2026, 10am ET

- Community Office Hours

    - third Wednesday of every month
    - Wed, September 16, 2026, 930am ET

- [5.1.0](https://github.com/irods/irods/milestone/47)

    - 1 bug / 5 open, 207 closed

- New Development Work

    - no updates

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - updating ObjStat API to prefer good replicas as originally intended
        - fixed bug in logical quotas where it would count similarly-named collections
        - fixed bug in which delay server would connect as rodsadmin instead of requested user

    - Build and Packaging
        - added support for Ubuntu 26.04

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - updated plugin to detect when upload will exceed the 10000 part limit
            - based on thread count and circular buffer size
            - when detected, reports detailed error message
        - fixed 3 cases where shared memory is leaked

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - completed work for automated testing of the PAM Interactive auth scheme
        - added support for querying the RULE_EXEC_CONTEXT column via GenQuery
        - fixing issue where admin settings are preserved across independent sessions

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - added support for physical quotas
        - added support for built-in logical quotas
        - updated server to parse application/x-www-form-urlencoded data correctly

    - [iRODS System Tray](https://github.com/irods-contrib/irods_client_system_tray)
        - released 0.1.0
            - https://github.com/irods-contrib/irods_client_system_tray/releases/tag/0.1.0

- Background Items

    - Logical [Quotas Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
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

    - [Audit AMQP Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - last update: June 2026
        - updating ELK stack, used for training
        - implementing long-lived AMQP connection
        - implementing multi-endpoint support
        - exposing many new configuration options
            - https://github.com/irods/irods_rule_engine_plugin_audit_amqp/pull/185

    - [Policy Composition](https://github.com/irods/irods_rule_engine_plugin_policy_composition)
        - last update: April 2026
        - released 0.1.0

    - [PAM Interactive Authentication Plugin](https://github.com/irods/irods_auth_plugin_pam_interactive)
        - last update: March 2026
        - released 0.1.1 (for 4.3.5)

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - last update: March 2026
        - released 4.3.5.0

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - last update: March 2026
        - released 4.3.5.0

    - [Metadata Guard Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_metadata_guard)
        - last update: March 2026
        - released 4.3.5.0

    - [CURL Microservices Plugin](https://github.com/irods/irods_microservice_plugins_curl)
        - last update: March 2026
        - released 4.3.5.0

    - [Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - last update: March 2026
        - released 4.3.5.0

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - last update: March 2026
        - added options for testing upgrade logic in an automated fashion

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

    - iRODS Consortium AI Policy v20260723
        - Plan is to publish this on the website
        - iRODS Consortium Mission
            - The mission of the iRODS Consortium is to ensure the sustainability of the integrated Rule-Oriented Data System (iRODS) and to further its adoption and continued evolution. To this end, the Consortium works to standardize the definition, development, and release of iRODS-based data middleware technologies, evangelize iRODS among potential users, promote new advances in iRODS, and expand the adoption of iRODS-based data middleware technologies through the development and release of iRODS as open-source, mission-critical, production-level software.
        - iRODS Consortium Artificial Intelligence (AI) Policy
            - The iRODS Consortium has a responsibility to develop and maintain the iRODS technologies at a quality suitable for mission-critical, production-level deployments.
            - The Consortium takes no position on the particular software and design tools used to meet that bar of quality.
