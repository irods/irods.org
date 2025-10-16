Title: iRODS Development Update: October 2025
Date: 2025-10-16 17:00
Author: Kory Draughn
Slug: irods-development-update-october-2025
Status: published


Hello reader,

September has come and gone, which means it's time for another development update. For those who missed it, iRODS 5.0.2 is available. See the release notes at <https://irods.org/2025/10/irods-5-0-2-is-released/> to learn more.

Now for the actual development update ...

For the server, we've started implementing a brand new authentication scheme. This new scheme is in support of FIPS compliance and will introduce various features. Work on physical quotas _(also known as resource quotas)_ has started. Quotas are an important tools for decision makers, so we want to make sure that support in iRODS is solid.

On the build and packaging side of things, we've updated the instructions for setting up the apt repository to avoid use of `apt-key`.

Policy Composition is being prepared for its first release. It aims to simplify policy enforcement by reducing the amount of prerequisite iRODS knowledge needed by the administrator. This release is planned for iRODS 5 only.

Work to move testing of the Python iRODS client (PRC) into GitHub Actions has made significant progress. It includes coverage of multiple iRODS server versions and Python versions. The motivation behind this effort is to make it so that the PRC is always tested and therefore ready for release. If this proves stable and good, the process will be replicated to other repositories.

For the S3 resource plugin, we're investigating ways to improve the performance of checksum verification. We are looking into CRC64/NVME as a new checksum algorithm and leveraging checksum information stored in an S3 service or appliance directly.

The Metalnx web application has absorbed the jargon-irods-ext repository to ease the release process. Work to replace Jargon with irods4j is still making progress.

We are pleased to say that work on Cyberduck support for iRODS is nearly complete. Parallel transfer over port 1247 is supported. A new general purpose profile is in development, exposing common client-side configuration options. An important note to keep in mind is that this update raises the minimum compatible server version to iRODS 4.3.2. Links to various pull requests are provided in the notes below.

iDrop has been updated and is now compatible with iRODS 4.3.4 and later. This work was carried out by [Jakob Saternus](https://github.com/jaksat0202). At this time, users will need to compile from from source themselves.

Other notable updates include preparation of a new release of the Globus Connector and a new release of irods4j.

See you next month!


### October Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - working on an OMERO integration
    - working meeting
        - Thur, October 16, 2025, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - working meeting
        - Tues, October 28, 2025, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - working meeting
        - Fri, November 7, 2025, 3pm ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, December 3, 2025, 4pm ET
    - speaker, TBD

- [4.3.5](https://github.com/irods/irods/milestone/45)

    - 63 bugs / 90 open, 63 closed

- [5.1.0](https://github.com/irods/irods/milestone/49)

    - 19 bugs / 211 open, 1 closed

- New Development Work

    - no updates

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - released 5.0.2
            - https://irods.org/2025/10/irods-5-0-2-is-released/
        - implementing utilities for maintaining backward/forward compatibility
        - started work to improve support for physical quotas
        - designing/implementing new built-in authentication scheme
            - currently named irods
            - no MD5 usage, in support of FIPS compliance
            - opt-in alternative/replacement for native authentication, targeting 5.1.0
                - iRODS 5: opt-in
                - iRODS 6: native auth deprecated, new auth becomes default
                - iRODS 7: native auth removed
            - passwords will use scrypt algorithm, scrypt parameters will be configurable
            - passwords will be stored in a new table called R_USER_CREDENTIALS
            - introduces session tokens
                - supports expiration/lifetime
                - expiration/lifetime is controlled by administrators
                - information stored in new .irods_secrets file (similar to .irodsA file)
            - server configuration will determine what happens when setting a user's password
                - applies to ipasswd and "iadmin moduser"

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - released 5.0.1

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - released 5.0.1

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - released 5.0.1

    - [Metadata Guard](https://github.com/irods/irods_rule_engine_plugin_metadata_guard)
        - released 5.0.1
        - planning to absorb into the server

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - released 5.0.1
        - planning to absorb into the server

    - [CURL microservices](https://github.com/irods/irods_microservice_plugins_curl)
        - released 5.0.1
        - may be absorbed into the server

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - released 5.0.1

    - Build and Packaging
        - migrated apt repo setup instructions from apt-key

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - added support for unattended installation

    - [Policy Composition](https://github.com/irods/irods_policy_composition_framework)
        - https://github.com/irods/irods_rule_engine_plugins_policy
        - added support for Address Sanitizer
        - successfully compiled against iRODS 5
        - reviewing implementation and tests for first official release
            - targeting iRODS 5 only

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - implemented/demonstrated automated testing of client in GitHub Actions
            - https://github.com/irods/python-irodsclient/pull/772
            - includes coverage of multiple iRODS versions and Python versions
            - testing of PAM Interactive not integrated yet, but planned

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - investigating performance improvements for checksum validation
            - added CRC64/NVME as a checksum scheme
            - adding CRC64/NVME trailing checksum on upload
            - working to retrieve checksum recorded by S3 rather than reading the entire object

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - absorbed jargon-irods-ext code
        - working to replace Jargon with irods4j

    - Cyberduck
        - implemented and demonstrated support for multi-1247 parallel transfer
        - adding new general purpose iRODS profile to Cyberduck profiles repository
            - https://github.com/iterate-ch/profiles/pull/163
            - includes common configuration options seen in iRODS clients
            - profile will be available through GUI
        - resolving review comments on pull request
            - https://github.com/korydraughn/cyberduck/tree/jargon_to_irods4j
        - will require a minimum server version of iRODS 4.3.2

    - [irods4j](https://github.com/irods/irods4j)
        - released 0.4.0
            - fixed support for strings containing multibyte characters

    - [idrop](https://github.com/irods-contrib/idrop)
        - merged PR from contributor
            - updates application to use Jargon 4.3.7.0-RELEASE
            - https://github.com/irods-contrib/idrop/pull/139
            - enables compatibility with iRODS 4.3.4 and later

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - preparing 5.0.1 release

- Background Items

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - last update: October 2025
        - released 0.6.0
        - adding support for quota system
        - adding support for extending lifetime of basic-auth bearer tokens

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - last update: October 2025
        - released 0.4.0
            - Presigned URL support
            - iRODS 5 compatibility
        - adding support for separated key management

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

    - [PAM Interactive Authentication Plugin](https://github.com/irods/irods_auth_plugin_pam_interactive)
        - last update: May 2025
        - released 0.1.2

    - [Mungefs](https://github.com/irods/mungefs)
        - last update: April 2025
        - updating CMake policy requirements for newer versions of CMake
        - migrated externals package to use system-provided libarchive and ZeroMQ

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - last update: October 2024
        - released 0.6.0
        - https://github.com/irods/irods_capability_automated_ingest/releases/tag/v0.6.0

    - CockroachDB Database Plugin
        - last update: September 2024
        - CRDB license has changed

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - last update: May 2024
        - released 2.3.0

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

    - [iRODS Password Booth](https://github.com/irods/irods_client_password_booth)
        - last update: February 2024
        - CherryPy web application, uses PRC to let users modify their own password

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

    - Who uses Cyberduck to interact with iRODS?
        - What version of iRODS are you connecting to?
        - Which features of Cyberduck do you rely on for your work?
