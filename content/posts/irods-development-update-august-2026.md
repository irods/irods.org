Title: iRODS Development Update: August 2026
Date: 2026-08-25 10:00
Author: Kory Draughn
Slug: irods-development-update-august-2026
Status: published


Hello reader,

We've made it through another month, which means it's time for the development update.

First, slides and videos from the 2026 iRODS User Group Meeting are now available. All videos and presentation material can be found at <https://irods.org/library>. More specifically, <https://irods.org/library> is a new tool that makes it easy to find all the presentations, slides, videos, and other information from all past user group meetings back to 2009.

We had the pleasure of working with three interns this summer. Through their hard work comes a brand new GUI-based ingest tool for the system tray (Windows) and menu bar (MacOS). The tool is built for ease-of-use and is released as 0.1.0. Learn more by watching the [interns' presentations](https://www.youtube.com/playlist?list=PLU500BTseN_s) and visiting the GitHub repository at <https://github.com/irods-contrib/irods_client_system_tray>.

iRODS 5.1.0 is still creeping towards a release. Support for Ubuntu 26.04 is complete and work to tighten the screws is in progress. With that comes a new vault path random scheme style that removes the filename from the physical path. The quality of stacktraces has been improved by moving the responsibility of logging them from the main server process to the agent factory. `istream` has been updated to report iRODS error codes on failure and `ils` has been updated to handle file permission errors.

The work to improve testing of PAM Interactive authentication in the Python iRODS client (PRC) has been merged. This work makes sure that multi-step authentication flows are supported and operating as intended.

irods4j 0.7.0 is now available. This release fixes a bug involving TLS and server redirects. See the release notes at <https://github.com/irods/irods4j/releases/tag/0.7.0> to learn more.

During the user group meeting, we had a discussion regarding the iRODS Consortium's yet-to-exist policy on AI usage. That has resulted in draft wording located under the [Discussion](#discussion) section. We look forward to community feedback.

Thanks for reading.


### August Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - working on an OMERO integration
    - working meeting
        - Thur, August 20, 2026, 10am ET

- Community Office Hours

    - third Wednesday of every month
    - Wed, August 19, 2026, 930am ET

- [5.1.0](https://github.com/irods/irods/milestone/47)

    - 1 bug / 5 open, 196 closed

- New Development Work

    - https://irods.org/library/
        - webpage that makes it easy to find past UGM presentations, slides, and videos
    - interns putting finishing touches on new project and preparing presentations

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - fixed ils core dump caused by file permission issues
        - working on improving logging of database error messages
        - merged new random scheme style option that removes filename from physical path
            - https://github.com/irods/irods/pull/9040
        - improved stacktrace quality by having the agent factory log stacktrace files
        - updated istream to report iRODS error codes on failure

    - Build and Packaging
        - Ubuntu 26.04 support is almost done

    - [Logical Quotas Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - released 5.1.1 and 5.1.0 for iRODS 5
        - released 4.3.5.1 and 4.3.4.1 for iRODS 4.3

    - [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - released 5.1.0
        - working on supporting uploads that would require more than the 10000-part limit
            - applies to the current scheme
            - circular buffers will be drained immediately
                - does not need to be large enough to hold the entire part in memory
            - retries on part upload failures are disabled
                - no mechanism to have the client resend them

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - released 5.1.0

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - working on automated testing for PAM Interactive auth scheme

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - released 0.7.0

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - released 0.6.0

    - [irods4j](https://github.com/irods/irods4j)
        - fixed handling of SHARED_SECRET payload for TLS
            - motivated by https://github.com/iterate-ch/cyberduck/issues/18152
        - released 0.7.0

    - [R client (rirods)](https://github.com/irods/irods_client_library_rirods)
        - released 0.3.0
            - no functional changes
            - updated maintainer information for CRAN

- Background Items

    - Audit [AMQP Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - last update: June 2026
        - updating ELK stack, used for training
        - implementing long-lived AMQP connection
        - implementing multi-endpoint support
        - exposing many new configuration options
            - https://github.com/irods/irods_rule_engine_plugin_audit_amqp/pull/185

    - [iRODS GenQuery2 API Plugin](https://github.com/irods/irods_api_plugin_genquery2)
        - last update: June 2026
        - project is EOL, archived May 2026

    - [NetCDF Microservices Plugin](https://github.com/irods/irods_netcdf)
        - last update: June 2026
        - project is EOL, archived May 2026

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

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - last updated: November 2025
        - released 3.1.1

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

<div id="discussion"></div>
- Discussion

    - iRODS Consortium AI Policy v20260723
        - iRODS Consortium Mission
            - The mission of the iRODS Consortium is to ensure the sustainability of the integrated Rule-Oriented Data System (iRODS) and to further its adoption and continued evolution. To this end, the Consortium works to standardize the definition, development, and release of iRODS-based data middleware technologies, evangelize iRODS among potential users, promote new advances in iRODS, and expand the adoption of iRODS-based data middleware technologies through the development and release of iRODS as open-source, mission-critical, production-level software.
        - iRODS Consortium Artificial Intelligence (AI) Policy
            - The iRODS Consortium has a responsibility to develop and maintain the iRODS technologies at a quality suitable for mission-critical, production-level deployments.
            - The Consortium takes no position on the particular software and design tools used to meet that bar of quality.
