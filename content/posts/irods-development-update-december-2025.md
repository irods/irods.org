Title: iRODS Development Update: December 2025
Date: 2025-12-10 10:00
Author: Kory Draughn
Slug: irods-development-update-december-2025
Status: published


Hello reader,

We just held our final [TRiRODS](https://irods.org/trirods) meeting of the year. Terrell Russell, Executive Director of the iRODS Consortium, gave a talk about using open-source tools to gather and present various metrics derived from the iRODS catalog. The [video](https://www.youtube.com/watch?v=IWKrd5b-57Q) is now available at YouTube.

For our final development update, work on a new authentication scheme (called **irods**) has landed in upstream. It supports password hashing, session tokens, and various commands for managing user credentials. Support for the CRC64/NVME checksum algorithm has been merged too.

Here's a big one. We're preparing for an initial release of the Policy Composition framework! The code has been updated to address memory issues and we're now reviewing documentation to make sure users have what they need.

Testing of the Python iRODS client (PRC) is now automated via GitHub Actions. This is huge because it will speed up the release process. The current plan is to do the same for other repositories.

irods4j 0.6.0 is now available. This release includes support for JSSE TrustManagers. Just like the PRC, we've fully automated all testing of the library using GitHub Actions.

For Cyberduck, our efforts to replace Jargon with irods4j are coming to a close. Tests are passing and the primary PR has been approved. We're now wrapping up documentation. Keep in mind that this work raises the required iRODS server version to 4.3.2.

That wraps up this year's final development update. We hope you found this year to be as exciting as we did. Happy holidays and see you in the new year!


### December Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - working on an OMERO integration
    - working meeting
        - Thur, January 15, 2026, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - working meeting
        - Tues, January 27, 2026, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - working meeting
        - Fri, February 6, 2026, 3pm ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, December 3, 2025, 4pm ET
    - Terrell Russell, Easy iRODS Metrics: SQL Exporter, Prometheus, and Grafana
    - https://www.youtube.com/watch?v=IWKrd5b-57Q

- [4.3.5](https://github.com/irods/irods/milestone/45)

    - 63 bugs / 91 open, 75 closed

- [5.1.0](https://github.com/irods/irods/milestone/49)

    - 24 bugs / 233 open, 23 closed

- New Development Work

    - no updates

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - working to improve support for physical quotas
        - merged new 'irods' authentication scheme PRs
            - includes password hashing, session tokens, management, etc.
        - working to migrate icommands source code back into server repository
            - icommands will continue to be released as a separate package
        - added support for CRC64/NVME checksums

    - [Policy Composition](https://github.com/irods/irods_policy_composition_framework)
        - https://github.com/irods/irods_rule_engine_plugins_policy
        - merged existing PRs
        - reviewing documentation
        - preparing initial release

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - added automated testing via GitHub Actions
        - reviewing bug and enhancement issues for upcoming 3.3.0 release

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - investigating adding support for CRC64/NVME trailing checksum on upload

    - [irods4j](https://github.com/irods/irods4j)
        - released 0.6.0
            - https://github.com/irods/irods4j/releases/tag/0.6.0
            - added support for JSSE TrustManagers
            - added automated testing via GitHub Actions

    - Cyberduck
        - addressed all review comments from Cyberduck team
            - https://github.com/korydraughn/cyberduck/tree/jargon_to_irods4j
            - expected to be merged soon
        - finished new general purpose iRODS profile to Cyberduck profiles repository
            - https://github.com/iterate-ch/profiles/pull/163
            - expected to be merged soon
        - started working to update documentation
        - will require a minimum server version of iRODS 4.3.2

- Background Items

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - last updated: November 2025
        - released 5.0.1
        - improving buildsystem
            - consistency sweep, reorganization, and housekeeping

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - last updated: November 2025
        - released 0.5.0
            - added plugin architecture for bucket mapping and user mapping
            - mappings are defined outside of main configuration file
            - auto-reloads mappings without server restart

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - last updated: November 2025
        - released 3.1.1

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - last updated: October 2025
        - released 5.0.1

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - last updated: October 2025
        - released 5.0.1

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - last updated: October 2025
        - released 5.0.1

    - [Metadata Guard](https://github.com/irods/irods_rule_engine_plugin_metadata_guard)
        - last updated: October 2025
        - released 5.0.1
        - planning to absorb into the server

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - last updated: October 2025
        - released 5.0.1
        - planning to absorb into the server

    - [CURL microservices](https://github.com/irods/irods_microservice_plugins_curl)
        - last updated: October 2025
        - released 5.0.1
        - may be absorbed into the server

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - last updated: October 2025
        - released 5.0.1

    - Build and Packaging
        - last updated: October 2025
        - migrated apt repo setup instructions from apt-key

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - last updated: October 2025
        - added support for unattended installation

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

    - [PAM Interactive Authentication Plugin](https://github.com/irods/irods_auth_plugin_pam_interactive)
        - last update: May 2025
        - released 0.1.2

    - [idrop](https://github.com/irods-contrib/idrop)
        - last updated: October 2025
        - merged PR from contributor
            - updates application to use Jargon 4.3.7.0-RELEASE
            - https://github.com/irods-contrib/idrop/pull/139
            - enables compatibility with iRODS 4.3.4 and later

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
