Title: iRODS Development Update: November 2026
Date: 2026-11-10 12:00
Author: Kory Draughn
Slug: irods-development-update-november-2026
Status: published


Hello reader,

iRODS 5.1.0 is now available. It took a year to get it out the door, but we did it. See the release notes at <https://docs.irods.org/5.1.0/release_notes> to learn more.

For the server, we've made it so that Clang-Tidy reports appear in the diff view of pull requests. This makes issues more noticeable during code review. Work to add support for generating code coverage reports is in progress as well.

Work on a new project that aims to ease deployment and federation of iRODS servers is underway. This work is motivated by use-cases for the [MESA (Multidisciplinary Environment for Scientific Advancement) project](https://idss-mesa.github.io/). We will have more to share later.

S3 resource plugin 5.1.1 is now available. See the release notes at <https://github.com/irods/irods_resource_plugin_s3/releases/tag/5.1.1> to learn more. Aside from that, we've started investigating ways to provide more information about an upload beforehand. This would allow us to simplify the implementation of the plugin.

For the Python iRODS client, we've developed a new SpecificQuery that returns the highest permission for a user or group. This work is important for performance and will be useful to projects like NFSRODS. If testing goes well, the SpecificQuery will be included in a future release of the iRODS server.

irods4j 0.8.0 is available. This release includes the new **irods** authentication scheme and other improvements. See the release notes at <https://github.com/irods/irods4j/releases/tag/0.8.0> for more information.

iRODS System Tray 0.2.0 is now available. This release improves the UI's layout and naming consistency. It also exposes more configuration options. See the release notes at <https://github.com/irods-contrib/irods_client_system_tray/releases/tag/0.2.0> for more information.

Thanks for reading.


### November Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - working on an OMERO integration
    - working meeting
        - Thur, TBD 2027, 10am ET

- Community Office Hours

    - third Wednesday of every month
    - Wed, December 16, 2026, 930am ET

- [5.2.0](https://github.com/irods/irods/milestone/51)

    - 56 bug / 157 open, 9 closed

- New Development Work

    - working on small Python service alongside server
        - for adding new servers to a zone and handling federation requests

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - released 5.1.0
        - continuing hardening efforts
        - updated GitHub Actions workflow to show Clang-Tidy reports in diff view of PRs
        - fixed irsync reporting errors in verbose mode
        - adding support for generating code coverage reports
        - motivated by work on the S3 resource plugin
            - adding mechanism for describing how multithreaded uploaded are structured
            - modified iput
                - implemented multi-1247 parallel transfer
                - uses rc_get_resource_info_for_operation to get preferred resource info
                    - host, resource hierarchy, number of threads
                - sends transfer info to server before starting multithreaded transfer

    - [Audit AMQP Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - released 5.0.2
            - https://github.com/irods/irods_rule_engine_plugin_audit_amqp/releases/tag/5.0.2
        - considering vendoring Qpid-Proton to strengthen refactor
        - refactoring plugin
            - https://github.com/irods/irods_rule_engine_plugin_audit_amqp/pull/185

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - released 5.1.1
            - https://github.com/irods/irods_resource_plugin_s3/releases/tag/5.1.1
        - completed work to fix shared memory leaks
        - fixed thread-safety bug involving calls to addRErrorMsg function

    - [Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - released 5.1.1
            - https://github.com/irods/irods_capability_storage_tiering/releases/tag/5.1.1
            - no change in plugin behavior

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - released 5.0.2
            - https://github.com/irods/irods_rule_engine_plugin_python/releases/tag/5.0.2

    - [Policy Composition](https://github.com/irods/irods_rule_engine_plugin_policy_composition)
        - released 0.2.0
            - https://github.com/irods/irods_rule_engine_plugin_policy_composition/releases/tag/0.2.0

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - reworking plugin architecture to align with new use-cases and mental model
            - e.g. support for public buckets

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - integrated SpecificQuery for determining max permission for a user or group
        - received PR from external contributor that implements the new irods auth scheme

    - [irods4j](https://github.com/irods/irods4j)
        - released 0.8.0
            - https://github.com/irods/irods4j/releases/tag/0.8.0

    - [R client (rirods)](https://github.com/irods/irods_client_library_rirods)
        - preparing 0.3.1 release
            - no functional changes
            - updating to satisfy CRAN requirements

    - [iRODS System Tray](https://github.com/irods-contrib/irods_client_system_tray)
        - preparing 0.2.0 release
            - cleaning up implementation
            - adding mode that optimizes throughput for uploads
            - adding view for throughput graph

- Background Items

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - last update: October 2026
        - released 5.0.2
            - https://github.com/irods/irods_capability_indexing/releases/tag/5.0.2

    - Build and Packaging
        - last update: October 2026
        - required build options for iRODS plugins now implemented in mold
            - https://github.com/rui314/mold/issues/1707

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - last update: October 2026
        - added functionality to help catch integer overflow and type narrowing cases
        - investigating fix for MySQL 9 support

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - last update: September 2026
        - added support for physical quotas
        - added support for built-in logical quotas
        - updated server to parse application/x-www-form-urlencoded data correctly

    - [Logical Quotas Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - last update: August 2026
        - released 5.1.1 and 5.1.0 for iRODS 5
        - released 4.3.5.1 and 4.3.4.1 for iRODS 4.3

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - last update: August 2026
        - released 5.1.0

    - [PAM Interactive Authentication Plugin](https://github.com/irods/irods_auth_plugin_pam_interactive)
        - last update: March 2026
        - released 0.1.1 (for 4.3.5)

    - [Metadata Guard Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_metadata_guard)
        - last update: March 2026
        - released 4.3.5.0

    - [CURL Microservices Plugin](https://github.com/irods/irods_microservice_plugins_curl)
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
