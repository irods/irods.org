Title: iRODS Development Update: May 2022
Date: 2022-05-13 17:00
Author: Kory Draughn
Slug: irods-development-update-may-2022
Status: published


Hello again! Time for another monthly development update.

iRODS 4.3.0 is very close. Delay server migration is now possible. With that comes new `iadmin` subcommands for setting the delay server and determining who is running the delay server. We've successfully ported the legacy Kerberos authentication plugin to the new authentication plugin framework. Issues with compilation of Python byte-code and RPM package generation have been resolved as well. Who would've guessed that was a thing.

The Development Environment is receiving some enhancements in the form of debuggers and runner images for Ubuntu 20, Debian 11, and Almalinux 8. And since we're talking about Docker-based tools, you'll be happy to know that support for SSL is being added to the Testing Environment's federation test infrastructure.

Finishing touches are being applied to the Indexing plugin. Once released, it will support `iput --metadata` and user/group ownership metadata. Not only that, but the handling of configuration settings is now a bit more flexible regarding integers and strings.

Something that we haven't spoken about much is the R client library. Given the challenges around creating a standalone compilable R package, the idea of using the iRODS C++ REST API in R has been floated as an alternative. This would reduce the dependencies for the R client library and make it much easier to expose it to the R community. If you have thoughts/concerns/ideas about that process, please reach out to us via email or open an issue at https://github.com/irods/irods_client_library_r_cpp.

That wraps up this month's update.

This is the month of iRODS 4.3.0 so keep a close eye on that email! It could arrive any day now :-)


### May Technology Working Group

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - progress towards SwaggerAPI
    - working towards demo of Metalnx-API-iRODS
    - working meeting
        - Tues, May 17, 2022, 10am ET

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort will be an OMERO integration
    - working on CZI proposal for sync agent
    - working meeting
        - Thur, May 19, 2022, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - working meeting
        - Tues, May 24, 2022, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - MinIO has deprecated the gateway interface
    - discussion has shifted focus to custom S3 implementation
    - working meeting
        - Fri, August 5, 2022, 3pm ET

- [4.2.12](https://github.com/irods/irods/milestone/38)

    - 24 bugs / 41 open, 38 closed

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 4 bugs / 28 open, 264 closed
    - goals
        - clang format
        - new logger (rsyslog or stdout)
        - irodsDelayServer refactoring / with implicit remote()
        - support for HA (single irodsDelayServer defined in the catalog)
        - GenQuery reimplemented in flex/bison
        - unified server_config.json
        - plugin-driven authentication framework
        - Python 3 support (control scripts and Python rule engine plugin)
        - support for Ubuntu 20, AlmaLinux 8, and Rocky Linux 8

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 133 bugs / 267 open, 0 closed

- New Development Work

    - investigating parsing of Flow Cytometry Standard (FCS) data in Python

- Active Development Work

    - [iRODS Server (4.3.0)](https://github.com/irods/irods)
        - ported legacy kerberos auth plugin to the new auth plugin framework
        - added two new sub-commands to iadmin
            - set_delay_server and get_delay_server_info
        - delay server can now be migrated between iRODS servers
            - see https://github.com/irods/irods/issues/5249
            - target server must have database credentials defined in server_config.json
            - automatic promotion to leader after three failed communication attempts
            - delay server can be disabled by migrating to an unknown iRODS server

    - Build and Packaging
        - resolved all issues with RPM Python byte-code compilation
        - updating icommands userspace tarball packager
            - see https://github.com/irods/irods/issues/6276
        - added CMake module that captures common packaging definitions and functionality
        - reorganizing irods/irods repository (main branch only)
            - header file locations, namelinks, cmake files, etc.
            - first phase done
            - irods-grid command has been absorbed by the server
            - new phony targets
        - adding boost/Qt5-style build system targets
        - consistent / better use of CMake
        - targeting gcc again and defining minimum requirements

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - adding support for SSL configuration logic to federate.py

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - adding debuggers and runner images for Ubuntu 20, Debian 11, and Almalinux 8

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - addressing hard-wired name for metadata indices in search endpoint
        - working on UI consistency
            - metadata templates
        - awaiting CI

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - released 0.9.1, should be run behind https proxy
        - supports changing passwords
        - no longer logs password information
        - awaiting CI

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - released 0.2.0, requires C++ REST API 0.9.1
        - supports remote zones and users
        - supports default and custom checkfiles
        - supports specific query management

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - released 1.1.3
        - now in CI

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - now passes full test suite
        - incorporating fixes for Python 3 syntax and GenQuery iterator
        - should consider a later Python 3.x (3.6 EOL pretty soon)

    - [R client (rirods)](https://github.com/irods/irods_client_library_r_cpp)
        - considering the use of the C++ REST API instead of the iRODS runtime
            - simplifies dependencies and accessibility to iRODS
            - can be a pure R client, no C++/compiling in user's environment
        - latest work https://github.com/irods/irods_client_library_r_cpp/pull/5 
        - Docker container?   Alternative ways to get irods dev tooling?
        - in support of the new R Consortium proposal

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - testing against Spectralogic Vail
        - now in CI

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - released 4.3.2.5-RELEASE

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - released 2.0.4 and 2.1.0
        - replication resources are not yet supported
            - for details, see https://github.com/irods/irods/issues/6142
        - awaiting CI

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - privilege checks only apply to irule invocations
        - handles touch API PEPs

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - applied finishing touches for several fixes (will be merged soon)
            - iput --metadata
            - accepting strings and integers as configuration values
            - user/group ownership metadata
        - investigating solutions to eliminate redundant collection operations

    - [Publishing Capability](https://github.com/irods/irods_capability_publishing)
        - needs more README
        - awaiting CI

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - refactored to abstract the source filesystem/object
            - considering kafka as source of events (for OMERO via debezium.io)
        - investigating splitting storage backends
            - celery workers -> redis
            - python/iRODS cache -> scylla (C++ distributed keystore)
        - implementing a docker-based performance test harness

    - [Continuous Integration (CI)](https://github.com/irods/irods_testing_jenkins)
        - targeting docker-compose, generation 8
        - core
            - ub16 / ub18 / cen7
            - pg / mysql / oracle
            - core / topology / federation / upgrade
        - plugins
            - audit amqp
            - curl
            - hard links
            - indexing
            - kerberos
            - logical quotas
            - metadata guard policy engine
            - s3
            - python rule engine plugin
            - storage tiering
        - plugins (to be added)
            - publishing
        - clients
            - Python iRODS Client (PRC)
            - Jargon
            - C++ REST API
        - clients (to be added)
            - baton/tears
            - automated ingest
            - iRODS Command Line Interface (CLI)
            - Metalnx
            - NFSRODS
            - Zone Management Tool
        - OS (to be added)
            - Ubuntu20
            - SUSE Linux Enterprise Server (SLES)
            - OpenSUSE
        - maybe later
            - CephFS via unixfilesystem
            - gsi
            - Nestle R Client Library
            - Ceph RADOS resource plugin
            - CockroachDB database plugin

- Background Items

    - Logical Locking
        - read-locks to be implemented

    - New RPC API framework
        - leverages design from Authentication Working Group
        - supports synchronous and asynchronous operations
        - refactored into parallel_collection_operation base class
            - supports pre/post operations and an object operation

    - [Policy Composition](https://github.com/irods/irods_rule_engine_plugins_policy)
        - will release for storage tiering, indexing, publishing
        - leverages new parallel server api endpoint

    - C++ S3 API
        - working on packaging
        - part of new Data Transfer Nodes pattern

    - [iRODS Command Line Interface (CLI)](https://github.com/irods/irods_client_cli)
        - single binary
        - eventual replacement for ~50 iCommands
        - ls/put/get/rm/cp/repl/query
        - https://github.com/irods/irods_client_cli

    - [Hard Links Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_hard_links)
        - awaiting more use cases before release
        - https://github.com/irods/irods_rule_engine_plugin_hard_links

    - [AWS S3 Lambda](https://github.com/irods/irods_client_aws_lambda_s3)
        - future release
            - could brute-force confirm checksums to detect renames
            - would persist metadata
        - could use atomic database operations to increase batch size > 1
        - https://github.com/irods/irods_client_aws_lambda_s3

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)

    - Parallel Filesystem Integration
        - iRODS API plugin
        - have split BeeGFS and Lustre implementations into aggregator and listener
        - testing against known configurations

    - SMBRODS project to surface iRODS as SMB

    - CockroachDB Database Plugin

    - Cloud Browser

    - Member Ticketing System

    - NetCDF microservices
        - released 4.2.9.0, 4.2.10.0, and 4.2.11.0
        - full HDF5 support could come later

- Discussion


