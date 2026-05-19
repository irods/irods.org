Title: iRODS Development Update: May 2026
Date: 2026-05-19 11:00
Author: Kory Draughn
Slug: irods-development-update-may-2026
Status: published


Hello reader,

The list of accepted talks for this year's User Group Meeting are now public. You can view the list and register for the event at <https://irods.org/ugm2026>.

Work on Logical Quotas is complete and has been merged into the server. It is the second plugin to be absorbed into the server and aligns with the goals of the 2025 roadmap.

Work to support FIPS-enabled environments is making steady progress. We've added the ability to configure SSL/TLS via the `setup_irods.py` script. The setup script can also generate self-signed certificates.

Using only the setup script, we were able to configure a server to use only the new **irods** authentication scheme. This feature needs a bit more time to cook, so it will not be part of the 5.1.0 release.

Work to make the resource-rebalance operation continue where there are no good replicas of a data object is complete and has been merged. This enhancement should make management easier for large deployments.

The univmss resource plugin now supports escaping single quotes in physical paths. This feature is disabled by default. Administrators can enable it through the context string.

To strengthen security, the server has been updated to disallow running with root privileges. It reports UID/GID information to help administrators in debugging situations. The server also reports when it is launched by a user who does not own the service account home directory.

The iCommands now perform a compatibility check against the server. If the major version numbers do not match, a warning is printed to stderr. For situations where the warning negatively impacts scripts and automation, we've provided a way for users to suppress the warning for all iCommands.

The AMQP Audit rule engine plugin is undergoing a significant rework. Several configuration options are being exposed and connection management is being overhauled.

A bug in the S3 resource plugin's ability to handle parallel transfer over port 1247 was discovered through the use of the HTTP API. The bug has been fixed and will be included in the next release of the plugin.

To wrap things up, the GenQuery2 API plugin and NetCDF plugin repositories are now EOL and have been archived.

Thanks for reading.


### May Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - working on an OMERO integration
    - working meeting
        - Thur, May 21, 2026, 10am ET

- Community Office Hours

    - third Wednesday of every month
    - Wed, May 20, 2026, 930am ET

- [5.1.0](https://github.com/irods/irods/milestone/47)

    - 6 bugs / 12 open, 154 closed

- New Development Work

    - no updates

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - merged new logical quotas implementation
        - working to make resource-rebalance continue when there are no good replicas
            - now in testing
        - setup_irods.py can now set up servers with TLS using the --tls option
            - supports generation of self-signed certificates
        - demonstrated configuring server using only "irods" auth scheme
            - towards FIPS compliance
        - server now disallows running with root privileges
            - reports UID/GID information to aid in debugging launch issues
            - reports when launched by a non-owner of the service account home directory
        - fixed initialization of server boot time for GetMiscSvrInfo API
        - iCommands now warn users of potential compatibility issues
            - shown on major version number mismatch between the iCommands and server
        - added option to univmss resource plugin for escaping single quotes

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - updating ELK stack, used for training
        - implementing long-lived AMQP connection
        - implementing multi-endpoint support
        - exposing many new configuration options
            - https://github.com/irods/irods_rule_engine_plugin_audit_amqp/pull/185

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - troubleshooting failures when using multi-1247 parallel transfer via the HTTP API
            - https://github.com/irods/irods_client_http_api/issues/481

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - preparing debug build to help troubleshoot uploads speeds

- Background Items

    - [Policy Composition](https://github.com/irods/irods_rule_engine_plugin_policy_composition)
        - last update: April 2026
        - released 0.1.0

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - last update: April 2026
        - released 3.3.0
        - implemented support for atomic ACLs API endpoint
        - fixed PRC autodoc problem w.r.t. Pydoc
        - investigating Windows platform for automated testing PRC

    - [PAM Interactive Authentication Plugin](https://github.com/irods/irods_auth_plugin_pam_interactive)
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
