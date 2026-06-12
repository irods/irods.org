Title: iRODS Development Update: June 2026
Date: 2026-06-12 12:00
Author: Kory Draughn
Slug: irods-development-update-june-2026
Status: published


Hello reader,

The iRODS User Group Meeting is a few weeks away. We're working hard to make sure things are ready. Attend in-person or virtually to learn what people are doing with iRODS and how it can help you with your data management requirements. Visit <https://irods.org/ugm2026> to register now.

For the server, we've strengthened security for authentication by making certain cases report a more general error code (i.e. `CAT_INVALID_AUTHENTICATION`). We've also stabilized timing differences for various authentication failure paths. New microservices for the random scheme vault path policy have been merged. These microservices grant administrators slightly more control over randomly-generated physical paths. Not only that, but they open the door for extending the random scheme vault path policy feature set in new ways. The dstream library has been updated to track and make iRODS error codes available. This is important because it allows applications which use dstream to react to errors in more specialized ways.

The Logical Quotas rule engine plugin is receiving a number of bug fixes. It is being updated to use rodsadmin connections when updating quota values. This change resolves problems related to server redirects, the Metadata Guard rule engine plugin, and permissions.

For the Python iRODS Client, `iRODSDataObject` instances now provide more control over how replicas are sorted. Other additions include the ability to generate zone reports and making the connection information and comments for a zone available.

iRODS S3 API 0.6.0 is available now. This release improves compatibility with GUI applications and fixes various bugs. See the release notes at <https://github.com/irods/irods_client_s3_api/releases/tag/0.6.0> to learn more.

Checksum performance in the Globus Connector has been improved by making the buffer size for file reads configurable. More logging around data transfers has been added as well.

Rounding out this month's update is a question about usage of the iCommand `irule`. We are considering making it require rodsadmin privileges or constraining its interface. We're looking for feedback regarding use-cases. If you have opinions or suggestions, consider leaving a comment on the issue at <https://github.com/irods/irods/issues/8992>.

Thanks for reading.


### June Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - working on an OMERO integration
    - working meeting
        - Thur, June 18, 2026, 10am ET

- Community Office Hours

    - third Wednesday of every month
    - Wed, June 17, 2026, 930am ET

- [5.1.0](https://github.com/irods/irods/milestone/47)

    - 0 bugs / 6 open, 174 closed

- New Development Work

    - added option to plugin build hooks which enables compilation using released packages

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - merged improvements to resource-rebalance operation
            - continues when data object has no good replica
            - covers all replica status, e.g. write-locked
        - invalid usernames and passwords now return CAT_INVALID_AUTHENTICATION
        - stabilized timing differences for authentication failures
            - invalid passwords, nonexistent users
        - added new microservices for customizing random scheme vault path policy
            - allows admins to reduce the possibility of name collisions at the physical layer
        - restored printing of INFO-level log messages during setup
        - deprecated irule filename extension requirement
        - updated dstream to track and make iRODS error codes available

    - [Logical Quotas Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - opened PR which makes plugin use rodsadmin connection for all quota operations
            - https://github.com/irods/irods_rule_engine_plugin_logical_quotas/pull/146
            - fixes bug involving metadata guard rule engine plugin and server redirects

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - fixed upload failures when using multi-1247 parallel transfer via the HTTP API
            - https://github.com/irods/irods_client_http_api/issues/481
            - https://github.com/irods/irods_resource_plugin_s3/issues/2295
            - requires a cache file due to limited transfer information
                - investigating how to provide transfer information

    - [Audit AMQP Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - updating ELK stack, used for training
        - implementing long-lived AMQP connection
        - implementing multi-endpoint support
        - exposing many new configuration options
            - https://github.com/irods/irods_rule_engine_plugin_audit_amqp/pull/185

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - provided engineering build to Consortium member
            - addresses checksum performance issue
            - makes size of read buffer configurable for checksum operation

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - iRODSDataObject instances now provide more control over how replicas are sorted
        - added zone report capability to zone manager
        - added connection information column to zone model
        - added comment column to zone model

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - separating ListObjectsV2 and ListObjects endpoints
        - preparing 0.6.0 release

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - fixed bug where server terminates on invalid rule syntax
        - fixed group permission expansion bug for data objects
        - fixed bug which caused the server to crash on closed socket and logging of client IP
        - fixed bug where parallel_write_init operation created N+1 streams
        - added config property which allows admins to change display name for ips

    - [iRODS GenQuery2 API Plugin](https://github.com/irods/irods_api_plugin_genquery2)
        - project is EOL, archived May 2026

    - [NetCDF Microservices Plugin](https://github.com/irods/irods_netcdf)
        - project is EOL, archived May 2026

- Background Items

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

    - [irods4j](https://github.com/irods/irods4j)
        - last updated: December 2025
        - released 0.6.0
            - https://github.com/irods/irods4j/releases/tag/0.6.0
            - added support for JSSE TrustManagers
            - added automated testing via GitHub Actions

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - last updated: November 2025
        - released 3.1.1

    - Build and Packaging
        - last updated: October 2025
        - migrated apt repo setup instructions from apt-key

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

    - [R client (rirods)](https://github.com/irods/irods_client_library_rirods)
        - last update: September 2023
        - released 0.1.1
        - submitted and accepted to CRAN
        - new website - https://irods4r.org
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

    - Do you have non-rodsadmin users who rely on irule?
        - we are considering limiting use of rcExecMyRule (irule) to rodsadmin users, or
        - constraining its inputs to disallow arbitrary rule text
        - see https://github.com/irods/irods/issues/8992 for more information
