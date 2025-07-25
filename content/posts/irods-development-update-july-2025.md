Title: iRODS Development Update: July 2025
Date: 2025-07-25 16:00
Author: Kory Draughn
Slug: irods-development-update-july-2025
Status: published


Hello reader,

After a much needed break, the iRODS team is back and ready to start the next development cycle.

For the iCommands, `irsync` has been updated to not error out when stale replicas are skipped. Work to make `irsync -l` not create collections unexpectedly is in development as well.

On the build and packaging side of things, support for Enterprise Linux 10 is in progress. As always, we're working to improve management of externals packages.

The S3 resource plugin has received some important updates. The plugin no longer crashes when writing large files in cache mode for iRODS 5. Decoupled mode is now honored following a server redirect. We've fixed a couple upload bugs related to parallel transfer over the zone port.

Support for the PAM Interactive authentication scheme is being added to the Python iRODS client (PRC). This effort is being handled by one of our interns. If everything goes as intended, this enhancement will be part of the upcoming 3.2.0 release. For those interested in following along, see the pull request at <https://github.com/irods/python-irodsclient/pull/752>.

Efforts to improve support of iRODS in Cyberduck is in motion! Work to replace Jargon with irods4j is being carried out by another one of our interns and is going very well. We'll have more to share in the coming weeks.

Zone Management Tool 0.4.1 is now available. It's been nearly a year since 0.4.0 was released. This latest release is due to the amazing work of our third intern.

For the HTTP API, we've removed support for running the server as an OpenID client. We're working to remove the implicit behavior from symmetrically signed JWTs. A bug which resulted in stalled connections to the OpenID Provider has been fixed. Lastly, the `write` operation has been updated to allow immediate streaming of data to data objects without needing to buffer the entire HTTP request in memory.

NFSRODS 2.3.1 is available. This release makes NFSRODS compatible with iRODS 5.

Notable updates include the release of irods4j 0.2.0 and Jargon 4.3.7.0-RELEASE.

See you next month.


### July Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - working meeting
        - Thur, July 17, 2025, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - working meeting
        - Tues, July 22, 2025, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - working meeting
        - Fri, August 1, 2025, 3pm ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, Aug 13, 2025, 4pm ET
    - speaker, iRODS Summer Interns

- [4.3.5](https://github.com/irods/irods/milestone/45)

    - 53 bugs / 160 open, 34 closed

- [5.1.0](https://github.com/irods/irods/milestone/47)

    - 13 bugs / 113 open, 4 closed

- New Development Work

    - no updates

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - iRODS 5.0.1
            - released May 27, 2025
        - updating irsync -l to not create directories
        - updating irsync to not error out on stale replica targets

    - Build and Packaging
        - focusing on support for EL10
        - cleaning up externals

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - fixed 2252 - crash when writing large file in cache mode in 5.0
        - fixed 2146 - decoupled mode not honored after redirect
        - fixed 2260, 2261 - fixes for multiprocess uploads

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - support for pam_interactive implemented by intern
            - working on tests
        - preparing 3.2.0 release

    - Cyberduck
        - intern working to replace Jargon with irods4j
            - demonstrated a working PoC
            - no support for parallel transfer yet

    - [irods4j](https://github.com/irods/irods4j)
        - released 0.2.0
        - updated to be compatible with iRODS 5
        - fixed several bugs

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - released 4.3.7.0

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - released 3.1.0

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - removing OIDC client mode
        - removing implicit behavior from symmetrically signed JWTs
        - fixed bug stalling connections to OpenID Provider
        - investigating improvements for writing data to data objects

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - intern working to resolve build failures

- Background Items

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

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - last update: April 2025
        - looking into making systemd the default entrypoint for runner images

    - [Mungefs](https://github.com/irods/mungefs)
        - last update: April 2025
        - updating CMake policy requirements for newer versions of CMake
        - migrated externals package to use system-provided libarchive and ZeroMQ

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - last update: March 2025
        - working on python script which automates release testing of the server and plugins
        - working on improving support for plugin testing
            - removing need for OS-specific package subdirectory
            - better concurrency support, reporting of test status, setup failure handling
            - SyntaxWarning clean-up for newer versions of Python
            - new Dockerfile syntax

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - last update: October 2024
        - released 0.6.0
        - https://github.com/irods/irods_capability_automated_ingest/releases/tag/v0.6.0

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - last update: October 2024
        - released 0.3.0
        - performance 'efficient store-and-forward' - ~40% throughput improvement
        - implemented ListParts and ListMultipartUploads operations

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
