Title: iRODS Development Update: October 2022
Date: 2022-10-14 16:00
Author: Kory Draughn
Slug: irods-development-update-october-2022
Status: published


Hello everyone,

To start things off, we've increased the size of the core development team! We can't wait to see all of the amazing things he'll bring to the table. No pressure Martin :-)

For the server, we've adjusted things so that commands like `ichmod` no longer have the ability to bypass the permission model. This is a healthy change as it allows all clients to have the same behavior in regard to modifying permissions. Support for non-package installations has been restored as well.

Aside from permissions and non-package installs, we've been experimenting with switching the user associated with an agent. If we can prove this works, then iRODS can provide real support for connection pooling. One of the primary drivers of this effort is for improved performance in the C++ REST API. You can read all about that at [https://github.com/irods/irods/issues/6591](https://github.com/irods/irods/issues/6591).

Work to resolve issues with detached mode in the S3 Resource Plugin is almost complete. You can read about that at [https://github.com/irods/irods_resource_plugin_s3/issues/2082](https://github.com/irods/irods_resource_plugin_s3/issues/2082). We're aiming to have a new release within the coming weeks, so stay tuned.

The R iRODS client is taking a new direction. It will now leverage the C++ REST API to do its work. This removes the need for compiling C/C++ code, which was a big hurdle for users and developers. It also decreases the number of dependencies needed while providing improved accessibility to iRODS.

It's been a while since we last touched the [iRODS demo](https://github.com/irods/irods_demo) project, but you'll be happy to know it has finally been updated. It ships with the iRODS server, iCommands, the C++ REST API, Zone Management Tool (ZMT), Metalnx, and NFSRODS. For people wanting to try out iRODS, this project is an excellent way to do that.

To wrap things up, this month we saw new releases of the Python iRODS Client, C++ REST API, and ZMT. Please check those out and let us know what you think.

See you in November!


### October Technology Working Group

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - working on whitepaper covering WG activities and findings
    - working meeting
        - Tues, October 18, 2022, 10am ET

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - did not receive CZI funding
    - looking at UNC and/or NSF funding opportunities
    - working meeting
        - Thur, October 20, 2022, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - working meeting
        - Tues, October 25, 2022, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - planning and investigation into custom C++ S3 implementation
    - working meeting
        - Fri, November 4, 2022, 3pm ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, December 7, 2022, 4pm ET

- [4.2.12](https://github.com/irods/irods/milestone/38)

    - 32 bugs / 59 open, 51 closed

- [4.3.1](https://github.com/irods/irods/milestone/39)

    - 36 bugs / 167 open, 37 closed
    - goals
        - iinit to learn about pam_interactive (new auth framework)
        - support for HA (single irodsDelayServer defined in the catalog)
        - GenQuery reimplemented in flex/bison

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 134 bugs / 280 open, 0 closed

- New Development Work

    - new developer - Martin
        - beginner training
        - running development and testing environments
        - fixed ichmod behavior around bypassing the permission model
    - reworked irods_demo project
        - includes iRODS server, iCommands, C++ REST client, ZMT, Metalnx, and NFSRODS

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - working with SURF to officially support pam_interactive auth plugin
            - targeting 4.3.1 or 4.3.2
        - added support for detached mode to the unixfilesystem resource plugin
        - fixed support for non-package installs
        - removed setup logic for rsyslog and logrotate
            - added documentation that provides basic configuration for these services
        - investigating support for allowing the user tied to a connection to be changed
            - improves handling of OS resources
            - enables agent reuse across different users
            - https://github.com/irods/irods/issues/6591

    - Build and Packaging
        - adding boost/Qt5-style build system targets
        - consistent / better use of CMake
        - targeting gcc/libstdc++ again and defining minimum requirements
        - entered early stages of moving externals to use standard packaging tools
            - rpmbuild and dpkg-buildpackage

    - [iRODS Documentation](https://github.com/irods/irods_docs)

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - adding support for release images with iRODS servers pre-installed
            - useful for plugin testing
        - added shared volume for testing resources with a vault using a common directory

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - successfully built externals, iRODS server, and iCommands packages for Ubuntu 22.04
            - not yet officially supported

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - working towards removing the required local database

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - released 0.9.2
        - added endpoints for logicalpath, metadata
        - now standalone from server / dockerized

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - released 0.3.0
        - now requires C++ REST API 0.9.2

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - released 1.1.5
        - fixed logical path normalization on Windows (/ vs \)
        - support create and modify times when working with AVUs

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)

    - [R client (rirods)](https://github.com/irods/irods_client_library_r_cpp)
        - beginning new pure R client, no C++/compiling in user's environment
            - will use curl and just the C++ REST API
            - simplifies dependencies and accessibility to iRODS
        - work to be headed by Martin Schobben in Vienna

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - fixed detached mode
            - https://github.com/irods/irods_resource_plugin_s3/issues/2082
            - almost merged
        - added Deep Archive support
        - awaiting release

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - working on fix for overwrites not updating the modify time
        - updated code for 4.3.0 (not yet released)

    - [Jargon](https://github.com/DICE-UNC/jargon)

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)

    - C++ S3 API
        - planning has begun
        - looking at Drogon and Boost Beast frameworks

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - developing workaround for ~100byte leak per call to _delayExec()
        - will split the work into a set number of delay rules for initial walk of collection

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - merged character-map translation for paths of ingested objects

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - ongoing refactor
            - https://github.com/irods/irods_rule_engine_plugin_audit_amqp/pull/105 
            - replacing all use of jansson JSON library with nlohmann JSON library
            - removing workarounds for bad ELK stack
            - updating usage of qpid-proton
            - improving error handling and diagnostic logging
            - general modernization and housekeeping
        - next stage of refactor
            - add support for handling multiple AMQP endpoints
            - improve stewardship of AMQP connections
        - updating example ELK stack project (used for training)
            - https://github.com/irods/contrib/pull/31 
            - togglable workarounds for malformed JSON
            - new Dockerfile syntax

- Background Items

    - [Publishing Capability](https://github.com/irods/irods_capability_publishing)
        - needs more README
        - awaiting CI

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)

    - Logical Locking
        - read-locks to be implemented

    - New RPC API framework
        - leverages design from Authentication Working Group
        - supports synchronous and asynchronous operations
        - refactored into parallel_collection_operation base class
            - supports pre/post operations and an object operation

    - Policy Composition
        - will release for storage tiering, indexing, publishing
        - leverages new parallel server api endpoint

    - [iRODS Command Line Interface (CLI)](https://github.com/irods/irods_client_cli)
        - single binary
        - eventual replacement for ~50 iCommands
        - ls/put/get/rm/cp/repl/query

    - [Hard Links Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_hard_links)
        - awaiting more use cases before release

    - [AWS S3 Lambda](https://github.com/irods/irods_client_aws_lambda_s3)
        - future release
            - could brute-force confirm checksums to detect renames
            - would persist metadata
        - could use atomic database operations to increase batch size > 1

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)

    - Parallel Filesystem Integration
        - iRODS API plugin
        - have split BeeGFS and Lustre implementations into aggregator and listener
        - testing against known configurations

    - SMBRODS project to surface iRODS as SMB

    - CockroachDB Database Plugin

    - Cloud Browser

    - Member Ticketing System

    - [NetCDF microservices](https://github.com/irods/irods_netcdf)
        - released 4.2.9.0, 4.2.10.0, and 4.2.11.0
        - full HDF5 support could come later

- Discussion

