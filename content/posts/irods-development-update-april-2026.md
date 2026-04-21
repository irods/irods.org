Title: iRODS Development Update: April 2026
Date: 2026-04-22 10:00
Author: Kory Draughn
Slug: irods-development-update-april-2026
Status: published


Hello reader,

This year's iRODS User Group Meeting is right around the corner. If you're working on cool stuff and would like to give a talk, please reach out to us. Registration for the event can be found at <https://irods.org/ugm2026>. We hope to see you there!

For this month's update, we're going to start things off with the initial release of the iRODS Policy Composition rule engine plugin. It is released as 0.1.0. Visit <https://irods.org/2026/04/initial-release-of-irods-policy-composition/> to read all about it.

Work on iRODS 5.1.0 is still going strong. The native implementation of the Logical Quotas rule engine plugin is nearing completion. The hashers used by the server to calculate checksums now grant the developer control over the output format. To support FIPS compliance, we've added configuration options for selecting the hash scheme used to sign zone keys. The DataObjRename API has been updated to honor logical locking. We've fixed some bugs pertaining to group permission expansion in GenQuery2 and the filesystem library. Not only that, but GenQuery2 now exposes columns for determining when metadata is attached to an entity. Lastly, work to make the resource-rebalance operation continue when there are no good replicas of a data object is in progress.

For the S3 resource plugin, work to add support for CRC64/NVME trailing checksums on upload is complete and has been merged into upstream. This new feature will be available for iRODS 5.1.0.

Python iRODS client (PRC) 3.3.0 is now available. Users can expect improvements in stability and correctness. For the full set of changes, visit <https://github.com/irods/python-irodsclient/releases/tag/v3.3.0>. Since this release, support for the atomic ACLs API has been implemented. We've also started investigating how to enable automated testing for Microsoft Windows.

To wrap up, the iRODS Consortium will no longer host quarterly [TRiRODS](https://irods.org/trirods) meetings. We appreciate everyone who participated over the last 10 years. Going forward, we'll be offering monthly Community Office Hours, where anyone can drop in and ask questions about iRODS and how we can help.

Thanks for reading.


### April Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - working on an OMERO integration
    - working meeting
        - Thur, April 16, 2026, 10am ET

- Community Office Hours

    - third Wednesday of every month
    - Wed, April 15, 2026, 930am ET

- [5.1.0](https://github.com/irods/irods/milestone/49)

    - 43 bugs / 140 open, 127 closed

- New Development Work

    - no updates

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - integrating logical quotas into the server
            - implemented core features - enforcement, command line, microservices, etc.
            - pull request in review
        - added ability to control digest output string in hasher client library
            - supports hex and base64 encodings
            - supports including or not including checksum prefix
        - added configuration for selecting the hash scheme used to sign zone keys
            - for server-to-server authentication (local and federated)
            - currently supports "md5" and "sha256" as valid configuration options
            - default will continue to be md5 in iRODS 5
            - default will change to sha256 in iRODS 6
        - implemented logical locking for DataObjRename API
        - exposed GenQuery2 columns for determining when metadata is attached to an object
        - updated GenQuery2 API to return helpful error information via rError stack
        - fixed group permission expansion bug in filesystem library and GenQuery2 API
        - more deprecations
            - legacy auth API numbers, user auth names (e.g. iadmin aua)
            - user/data token addition and removal (i.e. iadmin at/rt)
            - interactive mode for iadmin and igroupadmin
        - working to make resource-rebalance continue when there are no good replicas

    - [Policy Composition](https://github.com/irods/irods_rule_engine_plugin_policy_composition)
        - released 0.1.0

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - updating ELK stack, used for training
        - implementing long-lived AMQP connection
        - implementing multi-endpoint support

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - merged support for CRC64/NVME trailing checksum on upload

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - released 3.3.0
        - implemented support for atomic ACLs API endpoint
        - fixed PRC autodoc problem w.r.t. Pydoc
        - investigating Windows platform for automated testing PRC

- Background Items

    - PAM [Interactive Authentication Plugin](https://github.com/irods/irods_auth_plugin_pam_interactive)
        - last update: March 2026
        - released 0.1.1 (for 4.3.5)

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - last update: March 2026
        - released 4.3.5.0

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - last update: March 2026
        - released 4.3.5.0

    - [Metadata Guard](https://github.com/irods/irods_rule_engine_plugin_metadata_guard)
        - last update: March 2026
        - released 4.3.5.0

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - last update: March 2026
        - released 4.3.5.0

    - [CURL microservices](https://github.com/irods/irods_microservice_plugins_curl)
        - last update: March 2026
        - released 4.3.5.0

    - [Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - last update: March 2026
        - released 4.3.5.0

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - last update: March 2026
        - released 4.3.5.0

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - last update: March 2026
        - added options for testing upgrade logic in an automated fashion

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - last update: March 2026
        - added ability to create and delete empty "folders"
        - added automated testing via GitHub Actions
        - bumped minimum version requirement for building project to 4.3.2
        - fixed ListObjectsV2 not honoring encoding-type parameter

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

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - last update: October 2025
        - released 0.6.0
        - adding support for quota system
        - adding support for extending lifetime of basic-auth bearer tokens

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

    - [iRODS GenQuery2](https://github.com/irods/irods_api_plugin_genquery2)
        - last update: April 2024
        - packages for 4.2 and 4.3 can be built using the iRODS Development Environment
            - use the plugin builder images

    - [iRODS Password Booth](https://github.com/irods/irods_client_password_booth)
        - last update: February 2024
        - CherryPy web application, uses PRC to let users modify their own password

    - [NetCDF microservices](https://github.com/irods/irods_netcdf)
        - last update: January 2024
        - released for 4.3.1
        - considering archiving this project in favor of other solutions
            - possible existing Python libraries are 'enough'

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
