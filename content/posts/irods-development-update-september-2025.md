Title: iRODS Development Update: September 2025
Date: 2025-09-17 10:00
Author: Kory Draughn
Slug: irods-development-update-september-2025
Status: published


Hello reader,

For this month's development update, we've started brainstorming how to improve data transfers. This has led us to reviewing the rsync delta-transfer algorithm and how that could fit into iRODS. We've also started looking into making the server FIPS compliant. This means removing all uses of MD5 within the server and iCommands in a backward compatible way. This will make iRODS available to organizations which require FIPS in their environment.

Support for unattended installation is now part of the Docker-based Testing Environment. This strengthens our ability to detect problems with unattended installation before release.

To wrap up, release testing for iRODS 5.0.2 is planned for this week. We expect testing to be smooth and quick. Users looking for Enterprise Linux 10 or Debian 13 support will not have to wait much longer, so stay tuned.

See you next month!


### September Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - working meeting
        - Thur, September 18, 2025, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - working meeting
        - Tues, September 23, 2025, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - working meeting
        - Fri, October 3, 2025, 3pm ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, December 3, 2025, 4pm ET
    - speaker, TBD

- [4.3.5](https://github.com/irods/irods/milestone/45)

    - 64 bugs / 163 open, 57 closed

- [5.0.2](https://github.com/irods/irods/milestone/47)

    - 0 bugs / 2 open, 17 closed

- [5.1.0](https://github.com/irods/irods/milestone/49)

    - 16 bugs / 135 open, 0 closed

- New Development Work

    - investigating improvements for rsync - rsync delta-transfer algorithm
        - https://github.com/irods/irods/issues/8648 

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - investigating metrics reporting tool built on access time information
        - investigating alternative implementation for native Logical Quotas
            - modeled after physical quotas
            - https://github.com/irods/irods/issues/8632 
        - merged support for EL10 and Debian 13
        - merged support for functions in the GROUP-BY clause of GenQuery2
        - implemented fix to allow GenQuery2 to find objects lacking user permissions
        - fixed bug in quota recalculation logic
        - replacing MD5 usage in server and iCommands in backward compatible way
            - in service of FIPS compliance
            - targeting 5.1.0 only

    - Build and Packaging
        - published externals packages for EL10 and Debian 13

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - adding support for unattended installation

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - released 3.2.0
            - iRODS 5 compatibility
        - investigating automated testing in GitHub Actions

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - released 0.4.0
            - Presigned URL support
            - iRODS 5 compatibility

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - released 0.6.0
        - adding support for quota system
        - adding support for extending lifetime of basic-auth bearer tokens

    - Cyberduck
        - reviewing CLA from Cyberduck
        - investigating support for parallel transfer
        - reviewing iRODS-specific configuration options
        - polishing pull request
            - https://github.com/korydraughn/cyberduck/tree/jargon_to_irods4j

    - [irods4j](https://github.com/irods/irods4j)
        - released 0.3.0

- Background Items

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

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - last update: August 2025
        - opened PR which absorbs jargon-irods-ext code, not yet merged
        - removed rules sidebar option and all supporting code
        - working to replace Jargon with irods4j

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - last update: July 2025
        - fixed 2252 - crash when writing large file in cache mode in 5.0
        - fixed 2146 - decoupled mode not honored after redirect
        - fixed 2260, 2261 - fixes for multiprocess uploads

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - last update: June 2025
        - released 5.0.0.0

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - last update: June 2025
        - released 5.0.0.0

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - last update: June 2025
        - released 5.0.0.0

    - [Metadata Guard](https://github.com/irods/irods_rule_engine_plugin_metadata_guard)
        - last update: June 2025
        - released 5.0.0.0

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - last update: June 2025
        - released 5.0.0.0

    - [CURL microservices](https://github.com/irods/irods_microservice_plugins_curl)
        - last update: June 2025
        - released 5.0.0.0

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - last update: June 2025
        - released 5.0.0.0

    - [PAM Interactive Authentication Plugin](https://github.com/irods/irods_auth_plugin_pam_interactive)
        - last update: May 2025
        - released 0.1.2

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - last update: May 2025
        - released 4.3.4.0

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

    - [Policy Composition](https://github.com/irods/irods_policy_composition_framework)
        - https://github.com/irods/irods_rule_engine_plugins_policy
        - last update: August 2023
        - merged PR submitted for 4.3.0 compatibility

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

    - Mockarchive resource - anyone using it for anything other than testing?
        - No - will move ahead with making that repository more clear

    - Podman - anyone have experience with it? Do you like it? How much effort to switch?
        - Some - definitely not zero work, but not too bad
