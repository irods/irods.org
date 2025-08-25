Title: iRODS Development Update: August 2025
Date: 2025-08-28 10:00
Author: Kory Draughn
Slug: irods-development-update-august-2025
Status: published


Hello reader,

For those who missed it, three iRODS interns presented their impressive work at [TRiRODS](https://irods.org/trirods). They covered work on Cyberduck, the Zone Management Tool, GenQuery2, and PAM Interactive for the Python iRODS client. Videos are available now, so check them out.

With iRODS 5 now available, we've started investigating the idea of a metrics reporting tool built on access time information. The goal is to enable organizations to make decisions based on data access patterns. We're still in the early stages, so please get in touch with any ideas you'd like to see implemented.

For the server, we've merged support for Enterprise Linux 10 (EL10) and Debian 13. Work on `irsync` has landed. It no longer creates directories unexpectedly and we've improved handling of stale replicas and overwrites of data objects. Through the work of our interns, the GROUP-BY clause for GenQuery2 has grown support for multi-argument/nested functions. All of this work will be available in iRODS 5.0.2.

On the build and packaging side of things, work to sunset many externals packages and migrate to distro-provided compilers has begun. As we move towards Normal-and-Boring, the externals packages list continues to shrink and make it easier to support more environments. The process is working!

For the Docker-based development and testing environments, the Enterprise Linux Dockerfiles have been made generic and new projects for EL10, Debian 13, PostgreSQL 17, and MariaDB 11.8 have been added.

Python iRODS client (PRC) 3.2.0 is available. The big news of this release is that the PRC is fully compatible with iRODS 5 and adds support for the PAM Interactive authentication scheme. See the [release notes](https://github.com/irods/python-irodsclient/releases/tag/v3.2.0) for additional information.

iRODS S3 API 0.4.0 is also available. Just like the PRC, the S3 API has been updated for iRODS 5. While iRODS 5 compatibility is important, the big news of this release is support for Presigned URLs. To learn more, see the [release notes](https://github.com/irods/irods_client_s3_api/releases/tag/0.4.0).

iRODS HTTP API 0.6.0 is available. This release makes the application compatible with iRODS 5, removes the OAuth client mode, improves write performance to data objects, and more. Of particular note is the user claim plugin granting administrators the ability to modify user claims received from the identity provider via a regular expression. See the [release notes](https://github.com/irods/irods_client_http_api/releases/tag/0.6.0) for more information.

The heavy lifting to replace Jargon in Cyberduck with irods4j is nearly complete. A pull request is now open and awaiting review from the Cyberduck team. We've demonstrated various operations and we're sure that with a few more tweaks, the pull request will be merged. For those interested in viewing this work, see <https://github.com/iterate-ch/cyberduck/pull/17341>.

While working on Cyberduck, we ended up releasing irods4j 0.3.0. This release includes improved compatibility for Microsoft Windows and support for the PAM Interactive authentication scheme. You can learn more about that by viewing the [release notes](https://github.com/irods/irods4j/releases/tag/0.3.0).

Jargon has been updated to fix a bug in how groups are added in iRODS 4.3.4 and later. While Jargon is officially deprecated, a new release is on the way. This is in support of the upcoming Metalnx 3.1.1 release.

To wrap up, we've moved the jargon-irods-ext codebase into Metalnx. This was done to ease the release process, but more importantly, to make it easier to replace Jargon with irods4j. We've also removed the rules sidebar option and all supporting code.

Let's see, that was four releases in one month! We hope you found this month's update informative. Let us know what you think of the new releases and consider adding a star to the GitHub repositories if you like how things are progressing.

See you next month!


### August Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - working meeting
        - Thur, August 21, 2025, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - working meeting
        - Tues, August 26, 2025, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - working meeting
        - Fri, September 5, 2025, 3pm ET

- [TRiRODS](https://irods.org/trirods)

    - Mon, Aug 11, 2025, 4pm ET
    - speaker, iRODS Summer Interns

- [4.3.5](https://github.com/irods/irods/milestone/45)

    - 57 bugs / 166 open, 38 closed

- [5.0.2](https://github.com/irods/irods/milestone/47)

    - 3 bugs / 9 open, 8 closed

- [5.1.0](https://github.com/irods/irods/milestone/49)

    - 13 bugs / 113 open, 0 closed

- New Development Work

    - investigating metrics reporting tool built on access time information

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - intern has implemented support for functions in the GROUP-BY clause for GenQuery2
            - changes are under review
        - merged fix for irsync -l to not create directories
        - merged fix for irsync to not error out on stale replica targets
        - working to make irsync -a not fail when overwriting data objects
        - opened draft PRs to add support for EL10 and Debian 13
            - waiting for externals packages to be published

    - Build and Packaging
        - merged support for EL10 and Debian 13 into externals repo
            - packages coming soon
        - sunsetting many externals packages
        - beginning migration to distro-provided compilers

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - genericizing EL Dockerfiles

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - adding projects for EL10, Debian 13, PostgreSQL 17, and MariaDB 11.8

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - intern is addressing review comments on pam_interactive PR
        - working on iRODS 5 compatibility
            - updating implementation to use new keyword when adding groups
            - adjustments to data object structures for access time
        - added the ability to negate columns in GenQuery1 SELECT clause
        - preparing 3.2.0 release

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - implemented support for Presigned URLs
            - in support of Dataverse 'direct upload'
        - implemented stub for DeleteObjectTagging API operation
        - opened draft PR which addresses several issues
            - update code to be compatible with iRODS 5
            - use jsoncons C++ library for config validation
            - bug fixes and GitHub Actions workflow for building

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - removed OIDC client mode
        - removed implicit behavior from symmetrically signed JWTs
        - updated user claim plugin to allow modification of username returned from IDP
        - working on setting default TLS cert directory automatically for OIDC connections
        - working on allowing the access token validation method to be configurable
        - merged header-driven implementation for writing data to data objects
        - improved error reporting for write operations involving bad output streams
        - fixed forward/backward compatibility for create_group and modify_replica operations
        - added support to parallel_write_init operation for specifying root resource

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - released 0.4.1
            - intern has resolved build failures

    - Cyberduck
        - intern has completed foundational work which replaces Jargon with irods4j
            - adds parallel transfer capability, significant speedup
            - reviewing changes and making adjustments to submit a PR
                - https://github.com/korydraughn/cyberduck/tree/jargon_to_irods4j

    - [irods4j](https://github.com/irods/irods4j)
        - replaced use of Java Path API to fix MS Windows compatibility
        - working to complete PAM Interactive implementation
        - preparing 0.3.0 release

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - updated to support change in rcGeneralAdmin for adding groups in iRODS 4.3.4+

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - opened PR which absorbs jargon-irods-ext code, not yet merged
        - removed rules sidebar option and all supporting code
        - working to replace Jargon with irods4j

- Background Items

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
