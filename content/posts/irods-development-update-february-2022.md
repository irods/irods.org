Title: iRODS Development Update: February 2022
Date: 2022-02-21 15:00
Author: Kory Draughn
Slug: irods-development-update-february-2022
Status: published


First off, [TRiRODS](https://irods.org/trirods) happened! Illyoung Choi of CyVerse gave a talk about the new MinIO Gateway he's implemented for iRODS. The video is available now, so go check that out.

You'll be happy to know that work on iRODS 4.3.0 has been very smooth. We're making steady enhancements and fixing several bugs. With that said, let's jump right into the highlights for this month.

All compilation issues regarding the building of externals packages have been resolved. We've also added an option to the build process that allows building and packaging from a git repository outside of the iRODS github namespace. This makes it easier to experiment and build new versions of externals packages without needing to modify the build process.

Piggybacking off of that, we've also confirmed that iRODS 4.3.0 fully supports Debian 11.

We're pleased to annonunce that the work produced by the [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication) has been merged and will be available in iRODS 4.3.0. This is an important change as it allows the client and server to have a dynamic conversation around authentication.

Major work on the project structure is also underway. Doing this will help in providing better CMake support, understanding of how components fit together, and help new developers contribute to the project.

Given that many workloads involve the delay server, we hope people are excited to hear that work on allowing migration of the delay server is partially complete. Changes to the setup script and database are in-place. The final piece of the puzzle involves implementing the leader/successor algorithm.

The Zone Management Tool has grown the ability to manage passwords and support for case-insensitive search. These changes are powered by enhancements to the C++ REST API. Not only that, but more health checks centered around resources have been added.

Notable releases this month include the Python iRODS Client 1.1.1, Python Rule Engine Plugin 4.2.11.1, Globus Connector 4.2.11.1, NFSRODS 2.1.0, C++ REST API 0.9.0, and Jargon 4.3.2.4-RELEASE.

We hope you found this month's development update exciting. See you next month!


### February Technology Working Group

- [4.2.12](https://github.com/irods/irods/milestone/38)

    - 18 bugs / 27 open, 3 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 135 bugs / 250 open, 0 closed

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 31 bugs / 137 open, 169 closed
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
        - Thur, February 17, 2022, 10am ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - progress towards SwaggerAPI
    - working towards demo of Metalnx-API-iRODS
    - working meeting
        - Tues, February 15, 2022, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - working meeting
        - Tues, February 22, 2022, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - initial effort will be a MinIO gateway and integration services
    - working meeting
        - Fri, March 4, 3pm ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, February 16, 2022, 4pm ET
    - speaker, Illyoung Choi, University of Arizona / CyVerse

- New Development Work

    - delay server migration
        - setup script and database structures are in place
        - need to implement leader/successor algorithm
    - main branch of irods/irods now supports debian 11
    - integrated new authentication plugin framework into 4.3.0 (still testing)
        - from the Authentication Working Group
    - resolved all compilation issues for 4.3.0 externals packages
        - removed support for qpid-cpp and qpid-with-proton packages
        - supports cloning from git repository outside of irods namespace

- Active Development Work

    - Build and Packaging
        - reorganizing irods/irods repository (main branch only)
            - header file locations, cmake files, etc.
        - adding boost/Qt5-style build system targets
        - consistent / better use of CMake
        - targeting gcc again and defining minimum requirements

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - added support for testing 4.3.x branch
        - created 4-2-stable branch for testing 4.2.x
        - supports running core tests in parallel

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - supports building externals packages and using custom externals packages
        - supports building the 4.3.x branch of irods/irods in Ubuntu 18.04 and CentOS 7

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - working on UI consistency
            - metadata templates
        - awaiting CI

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - released 0.9.0
        - supports changing passwords
        - no longer logs password information
        - awaiting CI

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - supports user password management
        - supports case-insensitive search
        - added more health checks for resources
        - fixed bug around handling key events on /resource page
        - working on new view for remote zone management

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - released 1.1.0 and 1.1.1
        - adding support for parallel transfer to/from S3 storage
        - implementing fix for age-off of stale connections
        - adding support for ipasswd functionality
        - adding support for path normalization
        - 1.1.2 release imminent
        - now in CI

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - released 4.2.11.1
        - working on allowing true binary writes to data objects
        - should consider a later Python 3.x (3.6 EOL pretty soon)

    - [R client (rirods)](https://github.com/irods/irods_client_library_r_cpp)
        - doing investigation / packaging for 4.2.x
        - in support of the new R Consortium proposal

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - reproduced issue where large file (>10GB) uploads fail
            - troubleshooting
        - now in CI

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - released 4.3.2.4-RELEASE
        - fully supports parallel transfer over port 1247
            - 4.3.2.5-SNAPSHOT includes fix for composable resources

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - released 2.0.4 and 2.1.0
        - replication resources are not yet supported
            - for details, see https://github.com/irods/irods/issues/6142
        - awaiting CI

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - correctly handles group-owned collections
        - no longer hides underlying error codes

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - added user/group permissions as part of indexed object metadata

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

    - NetCDF microservices
        - released 4.2.9.0, 4.2.10.0, and 4.2.11.0
        - full HDF5 support could come later

- Discussion

    - GenQuery should use a syntax closer to SQL
        - https://github.com/irods/irods/issues/6168

    - Grouper integration / syncing

