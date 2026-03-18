Title: iRODS Development Update: March 2026
Date: 2026-03-19 10:00
Author: Kory Draughn
Slug: irods-development-update-march-2026
Status: published


Hello reader,

iRODS 4.3.5 is available for download, bringing the 4.3 series to a close. We will continue to provide support by answering questions and possibly fixing bugs in plugins until the 4.3 series is declared EOL. A lot of effort went into this release and we hope users find it to be a solid addition to the series. The release notes are available at <https://irods.org/2026/03/irods-4-3-5-is-released/>.

To start things off, we've dissolved two long-running working groups, the Authentication Working Group and S3 Working Group. These working groups led to the delivery of the 4.3 authentication plugin framework, the PAM Interactive authentication plugin, native support for OIDC in the iRODS HTTP API, several enhancements to the S3 resource plugin, and the iRODS S3 API server. We want to thank all the members who attended the meetings and provided feedback. Your participation is appreciated.

With iRODS 4.3.5 released, we can now focus on iRODS 5, starting with the Audit AMQP rule engine plugin. Work to improve the performance of the plugin through the use of long-lived AMQP connections is in progress. We are also aiming to provide multi-endpoint support. You can follow the conversation and development at <https://github.com/irods/irods_rule_engine_plugin_audit_amqp/issues/107> and <https://github.com/irods/irods_rule_engine_plugin_audit_amqp/pull/185>, respectively.

The long-awaited release of Policy Composition is very close. Testing is complete, packaging expectations are in alignment with other plugins. Remaining work items include adding the changelog, building packages, and publishing them.

Support for performing server upgrades in an automated fashion has been added to the iRODS Testing Environment.

The iRODS S3 API has received some updates as well. We've added the ability to create and delete empty folders/collections, automated testing through the use of GitHub Actions, and fixed a bug involving the encoding-type parameter for the ListObjectsV2 API. For those users who compile the software directly, the minimum development package version for compilation is now 4.3.2.

In case you missed it, we released a new Python wrapper library for the iRODS HTTP API. This work was initially developed by Christopher Lee, one of our interns in 2024. The library is released as version 0.1.0. Wrappers for Java and TypeScript are underway as well.

Thanks for reading.


### March Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - working on an OMERO integration
    - working meeting
        - Thur, March 19, 2026, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, May 13, 2025, 4pm ET
    - Community Office Hours?

- [5.1.0](https://github.com/irods/irods/milestone/49)

    - 53 bugs / 170 open, 45 closed

- New Development Work

    - [HTTP API Python Wrapper](https://github.com/irods/irods_client_http_python)
        - released 0.1.0
            - https://pypi.org/project/irods-http/

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - released 4.3.5
            - final release of the 4.3 series
        - integrating logical quotas into the server
        - fixed various memory leaks, some related to the delay server and rule language
        - fixed stalling of delay rule processing in delay server
            - removed use of unnecessary pool memory resource

    - [PAM Interactive Authentication Plugin](https://github.com/irods/irods_auth_plugin_pam_interactive)
        - released 0.1.1 (for 4.3.5)

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - released 4.3.5.0

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - released 4.3.5.0
        - updating ELK stack, used for training
        - implementing long-lived AMQP connection
        - implementing multi-endpoint support

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - released 4.3.5.0

    - [Metadata Guard](https://github.com/irods/irods_rule_engine_plugin_metadata_guard)
        - released 4.3.5.0

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - released 4.3.5.0

    - [CURL microservices](https://github.com/irods/irods_microservice_plugins_curl)
        - released 4.3.5.0

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - released 4.3.5.0
        - adding support for CRC64/NVME trailing checksum on upload
            - investigating test failures reported by GitHub Actions

    - [Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - released 4.3.5.0

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - released 4.3.5.0

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - added options for testing upgrade logic in an automated fashion

    - [Policy Composition](https://github.com/irods/irods_rule_engine_plugins_policy)
        - added automated testing via GitHub Actions
        - applying polish (logging, documentation, etc.)
        - preparing initial release

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - implementing convenience functions for constructing and listing tickets
        - preparing 3.3.0 release

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - added ability to create and delete empty "folders"
        - added automated testing via GitHub Actions
        - bumped minimum version requirement for building project to 4.3.2
        - fixed ListObjectsV2 not honoring encoding-type parameter

    - Cyberduck
        - released 9.4.0
            - includes irods4j-backed implementation
            - requires a minimum server version of iRODS 4.3.2

    - [idrop](https://github.com/irods-contrib/idrop)
        - switched from maven-assembly plugin to maven-shade plugin for building uber JARs
        - added OS-specific build scripts for Linux and Windows

- Background Items

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
