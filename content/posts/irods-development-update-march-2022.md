Title: iRODS Development Update: March 2022
Date: 2022-03-25 12:00
Author: Kory Draughn
Slug: irods-development-update-march-2022
Status: published


March is coming to a close and with that comes a new development update!

iRODS 4.3.0 is right around the corner and we're firing on all cylinders to get it over the finish line.

On the server-side of things ...

The [irods/irods](https://github.com/irods/irods) project structure for 4.3.0 has undergone huge changes in regards to CMake. Each directory contains a CMakeLists.txt file. This change alone improves maintainability and visibility into what makes up a target (e.g. libirods_client.so). This also makes it much easier for newcomers to discover things and understand each component.

The legacy PAM authentication plugin has been ported to the new Authentication Plugin Framework. Although the legacy PAM auth plugin hasn't been merged, the fact that we were able to port it helps build confidence in the auth plugin framework. Our next task is to allow for more dynamic PAM conversations.

The metadata API endpoint has received a new enhancement in that it now supports the admin mode flag. This change is important because it simplifies implementations (e.g. Logical Quotas). There are many times where code needs to manipulate metadata, but doesn't have permission to do so. Getting around this case requires modifying permissions temporarily. With this change, that isn't required anymore. And obviously, we made sure to expose this option to administrators via `imeta -M` :-).

Since we're still talking about the server, we're happy to say that the Python Rule Engine Plugin now supports reading and writing binary data into data objects.

Let's talk about what's happened on the client-side now ...

The Python iRODS Client (PRC) has grown several new features. It now supports operations found in `ipasswd`, provides utilities for path normalization, and here is the big one ... it supports parallel transfer to and from S3 storage! Even more important than that is the fact that once this version is released, it will likely be the last to support Python 2.

New versions of the Zone Management Tool (ZMT) and C++ REST API were released this month. With them comes support for managing remote zones, remote users, checkfiles (default and custom), specific queries, and passwords.

Outside of servers and clients, the development and testing environments have gained support for new platforms! Support for Ubuntu 20, Debian 11, and AlmaLinux 8 have been added. Given that AlmaLinux 8 is EL8 compatible, we expect 4.3.0 to work with Rocky Linux 8. The development environment also grew the ability to build externals packages. Hopefully, that simplifies the build process for users.

That feels like a good place to end this development update. The full update is just below. Give that a look and we'll see you next month!


### March Technology Working Group

- [4.2.12](https://github.com/irods/irods/milestone/38)

    - 13 bugs / 24 open, 30 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 134 bugs / 257 open, 0 closed

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 31 bugs / 133 open, 185 closed
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
        - Thur, March 17, 2022, 10am ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - progress towards SwaggerAPI
    - working towards demo of Metalnx-API-iRODS
    - working meeting
        - Tues, March 15, 2022, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - working meeting
        - Tues, March 22, 2022, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - initial effort will be a MinIO gateway and integration services
    - working meeting
        - Fri, April 1, 2022, 3pm ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, May 11, 2022, 4pm ET
    - speaker, TBD

- New Development Work

    - ported legacy PAM auth plugin to new auth plugin framework (not yet merged)
    - added support for group permissions to atomic metadata / ACLs APIs
    - added support for the admin flag to imeta and the metadata C APIs
    - enabled support for C++20 (main branch only)

- Active Development Work

    - Build and Packaging
        - reorganizing irods/irods repository (main branch only)
            - header file locations, cmake files, etc.
            - first phase done
        - adding boost/Qt5-style build system targets
        - consistent / better use of CMake
        - targeting gcc again and defining minimum requirements

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - added support for Ubuntu 20, Debian 11, and Almalinux 8
            - working on docker container issues regarding rsyslogd
        - added duration tracking to core and unit test results
        - fixed useability issues
            - MySQL-based catalog testing
            - on-demand rebuild of docker images

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - added support for Ubuntu 20, Debian 11, and Almalinux 8
            - includes support for building externals packages

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
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
        - added ipasswd-like functionality
            - includes improved screening of passwordless entry
            - passwordless entry is allowed for the anonymous user
        - added support for S3 parallel transfer
        - added support for path normalization
            - includes built-in support for collections
            - includes functions for general use
        - adding finishing touches for stale connection cleanup
            - courtesy of Kaivan Kamali of Galaxy Training
        - possibly the final release that supports Python 2
        - release 1.1.2 imminent
        - now in CI

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - supports binary I/O to and from data objects
        - should consider a later Python 3.x (3.6 EOL pretty soon)

    - [R client (rirods)](https://github.com/irods/irods_client_library_r_cpp)
        - doing investigation / packaging for 4.2.x
        - latest work https://github.com/irods/irods_client_library_r_cpp/pull/5 
        - Docker container?   Alternative ways to get irods dev tooling?
        - in support of the new R Consortium proposal

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - resolved issues with large file (> 5GB) uploads
        - added code that ensures no single part is greater than 5GB (configurable)
        - release imminent
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
    
