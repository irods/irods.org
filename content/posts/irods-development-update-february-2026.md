Title: iRODS Development Update: February 2026
Date: 2026-02-13 10:00
Author: Kory Draughn
Slug: irods-development-update-february-2026
Status: published


Hello reader,

iRODS 4.3.5 is coming together very well. For those who aren't aware, it is the final release of the 4.3 series. We've closed a little over 100 issues and plan to resolve a few more before starting release testing. 

Let's talk about what's happened since last month. Starting with the server, we've taught the UnregDataObj and RegReplica APIs to honor logical locking. The `TicketAdminInput` data structure used by the TicketAdmin API is now being serialized for policy enforcement. Work to absorb the Logical Quotas rule engine plugin is in progress. It is being modeled after physical quotas. We've re-integrated the iCommands source code into the server repository since the version numbers were always going to be tightly coupled. Lastly, the Oracle database plugin is now scheduled for deprecation.

The iRODS Testing Environment has received a very important update. This project relied on the Docker Compose v1 python library to manipulate docker containers through docker compose files. That library was deprecated some years back. We're happy to say that the Testing Environment no longer depends on the Docker Compose v1 python library.

For Policy Composition, we're still making progress towards an initial release. The access time policy engine has been removed and we're now working on various smaller tasks such as build and test hooks for automated testing via GitHub Actions.

Work to add support for CRC64/NVME to the S3 resource plugin continues. We have an initial implementation that shows promise. It is now going through the review process.

The Storage Tiering rule engine plugin has received a small, but important fix involving permissions during checksum verification. The fix will be included in the next release of the plugin.

For the Python iRODS client (PRC), a new reusable GitHub Actions workflow was added to help catch formatting issues and potential bugs.

On the iRODS S3 API front, we're working to improve compatibility with various GUI applications such as Cyberduck and S3 Browser. If there are other GUIs we should test against, please reach out to us.

To wrap up, the pull requests for Cyberduck which replace Jargon with irods4j have been merged. This work was initially implemented by one of our interns.

Thanks for reading.


### February Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - working on an OMERO integration
    - working meeting
        - Thur, February 19, 2026, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - working meeting
        - Tues, February 24, 2026, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - working meeting
        - Fri, March 6, 2026, 3pm ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, February 11, 2025, 4pm ET
    - Community Office Hours

- [4.3.5](https://github.com/irods/irods/milestone/45)

    - 34 bugs / 44 open, 116 closed

- [5.1.0](https://github.com/irods/irods/milestone/49)

    - 32 bugs / 255 open, 32 closed

- New Development Work

    - implemented automated testing for many plugins via GitHub Actions
        - Python REP and Audit AMQP REP still under development

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - implemented logical locking in UnregDataObj and RegReplica APIs
        - started initial work to absorb logical quotas into the server
        - re-integrated iCommands repository into server repository
        - implemented serialization of TicketAdminInput for policy enforcement
        - deprecating Oracle database plugin in 5.1.0

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - removed dependency on Docker Compose v1 (docker-compose) Python library

    - [Policy Composition](https://github.com/irods/irods_rule_engine_plugins_policy)
        - removed access time policy engine
        - absorbed policy composition framework repository
            - https://github.com/irods/irods_policy_composition_framework
        - adding build/test hooks, misc. details (clang files, build artifact names, etc.)
        - preparing initial release

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - adding support for CRC64/NVME trailing checksum on upload
            - saves roundtrip of additional 'read', significantly faster
        - restored build compatibility with released versions of iRODS server

    - [Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - fixed permission issue observed during checksum verification

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - reviewing bug and enhancement issues for upcoming 3.3.0 release
        - implemented automated linting via GitHub Actions (git-ruff)
            - https://github.com/irods/irods_reusable_github_workflows/blob/main/git_ruff.py 

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - working to improve compatibility with various GUIs

    - Cyberduck
        - irods4j refactor is merged
        - documentation PR is approved, not yet merged
        - general purpose iRODS profile will not be downloadable
            - template provided by documentation
        - will require a minimum server version of iRODS 4.3.2

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

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - last updated: November 2025
        - released 5.0.1
        - improving buildsystem
            - consistency sweep, reorganization, and housekeeping

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
