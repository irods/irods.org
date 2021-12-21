Title: iRODS Development Update: December 2021
Date: 2021-12-21 12:00
Author: Kory Draughn
Slug: irods-development-update-december-2021
Status: published


iRODS v4.2.11 has been released! You can read all about it [here]({filename}/posts/irods-4-2-11-is-released.md).

For this month's development update, we've started shifting focus to iRODS 4.3. Work on the 4.2.x branch is coming to an end. The goal is to have 4.3 tested and released by next year's UGM. With that in mind, let's start by talking about what has changed for the 4.3 branch ...

First off, [irods/externals](https://github.com/irods/externals) has been updated to require Python 3. Not only that, but it has gained support for Ubuntu 20, Debian 11, AlmaLinux 8, and Rocky Linux 8. Support for Ubuntu 14, Debian 9, and Debian 10 have been dropped.

The Python iRODS Client has received some improvements as well. Just like `irule`, it now supports targeting a specific rule engine plugin instance when executing rules. It also supports switchable XML parsers. This change allows the PRC to handle XML encoding issues with single quotes and apostrophes seen in earlier versions of iRODS.

In other Python news, the Python Rule Engine Plugin can now be built against Python 3. Given that Python 2 has reached EOL, this marks one of many important steps towards getting iRODS 4.3 released.

NFSRODS is inching closer to a release. Notable changes include, but aren't limited to, use of Java 17, better compatibility with Kubernetes and Docker, and improvements to the build process.

The future of iRODS continues to shine bright. We hope everyone stays safe and we'll see you in 2022!


### December Technology Working Group

- [4.2.11](https://github.com/irods/irods/milestone/37)

    - 0 bugs / 1 open, 121 closed

- [4.2 Backlog](https://github.com/irods/irods/milestone/34)

    - 131 bugs / 234 open, 0 closed

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 46 bugs / 171 open, 128 closed
    - clang format
    - new logger (rsyslog or stdout)
    - irodsDelayServer refactoring / with implicit remote()
    - support for HA (single irodsDelayServer defined in the catalog)
    - GenQuery reimplemented in flex/bison
    - unified server_config.json
    - plugin-driven authentication framework
    - Python3 support (control scripts and Python rule engine plugin)
    - now uses a PID file
    - added new atomic database operations library
    - added support for Ubuntu 20, AlmaLinux 8, and Rocky Linux 8
    - server startup script no longer depends on irods-grid icommand
    - server now uses a signal handler for graceful shutdown

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort will be an OMERO integration
    - working meeting
        - Thur, January 20, 2022, 10am ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - progress towards SwaggerAPI
    - working towards demo of Metalnx-API-iRODS
    - working meeting
        - Tues, February 15, 2022, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - working meeting
        - Tues, January 25, 2022, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - initial effort will be a MinIO gateway and integration services
    - working meeting
        - Fri, February 4, 3pm ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, February 16, 2022, 4pm ET
    - speaker, Illyoung Choi, University of Arizona / CyVerse

- New Development Work

    - fixed several memory leaks in microservices related to MsParams
    - adding support for building plugins to the iRODS development environment
    - externals and iRODS 4.3 have been updated to require Python 3

- Active Development Work

    - Build and Packaging
        - merged several packaging touchups
        - consistent / better use of CMake
        - targeting gcc again and defining minimum requirements

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - broke up run_test.py script for better maintainability
            - topology and federation use different scripts
            - simplifies implementation and management of options
        - added support for SSL

    - NetCDF microservices
        - updated the 4.2.8 implementation for 4.2.9 and later
            - compiles and passes tests
        - 4.2.10.0 coming soon
        - full HDF5 support could come later

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - released 2.5.1
            - links to sub-collections with spaces in the name are clickable
        - minor key event bug fixes and enhancements
            - return key submits global search field
        - awaiting CI

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - exposed full support of the ticket API
        - exposed new options for the /query endpoint
            - options controlling case-sensitivity and row uniqueness
        - preparing 0.9.0 release

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - health check now enforces min/max server version
        - each check has its own "interval" property
            - allows each check to run at different times
            - admins can modify this property via the file or UI
        - checks can be marked as "inactive"
            - state is stored in localStorage

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - integrated Quasi-XML parser
            - originally written by Chris Smeele at Utrecht
            - added Python 2 compatible fixes and switchable parsers
            - permits object names to contain arbitrary characters ("/" and NULL)
        - supports targeting a specific rule engine plugin instance for rule execution
            - matches functionality provided via "irule -r"
        - now in CI

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - can now be built against Python 3

    - [R client (rirods)](https://github.com/irods/irods_client_library_r_cpp)
        - doing investigation / packaging for 4.2.x
        - in support of the new R Consortium proposal

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - implemented full support for Glacier
            - awaiting official release of it and libs3
        - now in CI

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - bumped java version to 17
        - bumped container base OS to Ubuntu 18
        - correctly responds to shutdown signals
        - removed requirement on stdin (improves compatibility with kubernetes)
        - launchable via docker-compose
        - separated build step from run step
            - building the docker image now uses the local repository
        - have fix for large file transfers
            - enabled through new Jargon parallel transfer API
            - demonstrated through custom build of client
        - awaiting CI

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - provided engineering build that ports 4.2.10.1 improvements to 4.2.7
        - implementing user/group permission entry in Elasticsearch metadata schema

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

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)

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

- Discussion

