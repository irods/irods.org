Title: iRODS Development Update: April 2022
Date: 2022-04-20 12:00
Author: Kory Draughn
Slug: irods-development-update-april-2022
Status: published


Wooh! April has been a busy, yet exciting month. 4.3.0 is looking really good. We have a few more issues to take care of before it's ready. 

Let's get into this month's development update.

The 4.3.0 server implementation has received some important changes. We've changed the name of the delay server binary from `irodsReServer` to `irodsDelayServer`. This change covers more than a renaming of the binary; It includes tests, variables, configuration properties, etc. The upgrade logic will now synchronize your server_config.json file with the template. On upgrade, all configuration properties will be defined in server_config.json. Aside from the delay server and upgrade logic, we've demonstrated the ability to migrate the delay server between iRODS servers. 

`irods-grid` will no longer be provided via the icommands. Given its design, we've decided to include it with the server. This change is important because `irods-grid` is special, in that it does not authenticate or carry out operations like the other icommands.

The iRODS Testing Environment has continued to receive steady improvements as well as expose issues previous testing systems were not able to. We've consolidated the main and 4-2-stable branches and because of the implementation, we can now parallelize many if not all plugin tests. Not only have we provided enhancements, we've also fixed several bugs including but not limited to, a Python/SSH namespace collision that prevented driver downloads. iRODS 4.3.0 will be the first official release based on the iRODS Testing Environment.

The S3 Resource Plugin has seen some recent updates as well. In regards to iRODS 4.3.0, it now uses the new Logging API. With this comes the ability to adjust the log output in real-time and identify which messages were produced by the plugin. A new version of the plugin was released as well. Aside from performance and stability improvements, the most notable change provided by S3 Resource Plugin 4.2.11.2 is the fix for large file uploads. If you're experiencing issues around large file uploads, give this new version a try.

The Indexing Capability Plugin has been under heavy development. Indexing is now triggered by `iput --metadata`. Handling of configuration values has received a nice quality of life change. That is, integers can be used for properties that only took integers as strings. Lastly, the plugin has grown the ability to index user permissions based on the NIEHS AVU/system-metadata schema. We hope users of this plugin find these changes helpful.

Python iRODS Client (PRC) 1.1.3 was released this month. And since we're on the topic of Python now, you'll be happy to know that the Python Rule Engine Plugin (PREP) can now be built using the development environment. It is also supported by the testing environment.

We hope you found this month's update exciting. As always, see you next month!


### April Technology Working Group

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - progress towards SwaggerAPI
    - working towards demo of Metalnx-API-iRODS
    - working meeting
        - Tues, April 19, 2022, 10am ET

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort will be an OMERO integration
    - working on CZI proposal for sync agent
    - working meeting
        - Thur, April 21, 2022, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - working meeting
        - Tues, April 26, 2022, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - initial effort will be a MinIO gateway and integration services
    - working meeting
        - Fri, May 6, 2022, 3pm ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, May 18, 2022, 4pm ET
    - speaker, TBD

- [4.2.12](https://github.com/irods/irods/milestone/38)

    - 17 bugs / 29 open, 34 closed

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 11 bugs / 55 open, 223 closed
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

    - 133 bugs / 266 open, 0 closed

- New Development Work

    - ported legacy PAM auth plugin to new auth plugin framework (not yet merged)
    - added support for group permissions to atomic metadata / ACLs APIs
    - added support for the admin flag to imeta and the metadata C APIs
    - enabled support for C++20 (main branch only)

- Active Development Work

    - [iRODS Server (4.3.0)](https://github.com/irods/irods)
        - renamed references to the delay server
            - irodsReServer -> irodsDelayServer
            - tests, variables, configuration properties, etc.
        - adjusted the upgrade logic
            - adds all missing server configuration properties
            - properties added by admins are carried forward
            - removes properties that are no longer used by the server
            - correctly handles properties that have been renamed
        - updated all JSON schemas to use the latest specification
        - partially implemented delay server migration
            - graceful handling of errors
            - robustness and reliability
        - working to externalize the control plane
            - helps to improve delay server migration robustness
        - adding two new sub-commands to iadmin
            - set_delay_server and get_delay_server_info

    - Build and Packaging
        - reorganizing irods/irods repository (main branch only)
            - header file locations, namelinks, cmake files, etc.
            - first phase done
            - irods-grid command has been absorbed by the server
            - new phony targets
        - adding boost/Qt5-style build system targets
        - consistent / better use of CMake
        - targeting gcc again and defining minimum requirements

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - preparing to use for 4.3.0 release
        - merged main and 4-2-stable branches together
        - enhancing all plugin test hooks so that tests can run in parallel
        - making plugin tests compatible with Python 3 and containers
        - discovered and fixed several problems in plugins and plugin tests
        - fixed Python/ssh namespace collisions preventing driver download
        - misc. other fixes include UnicodeEncodeError-proof stdout

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
        - released 1.1.3
        - now in CI

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - can now be built using the development environment
        - can now be run in the testing environment
        - is actively being tested now
        - should consider a later Python 3.x (3.6 EOL pretty soon)

    - [R client (rirods)](https://github.com/irods/irods_client_library_r_cpp)
        - doing investigation / packaging for 4.2.x
        - latest work https://github.com/irods/irods_client_library_r_cpp/pull/5
        - Docker container?   Alternative ways to get irods dev tooling?
        - in support of the new R Consortium proposal

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - 4.3.0 specific updates
            - uses new logging API (includes custom log category)
            - added ability to adjust the log level via server_config.json
            - removed use of ASSERT_* macros
            - replaced use of bzero() with std::memset()
        - released 4.2.11.2, which includes:
            - large file upload fixes
            - use of fmtlib instead of std::stringstream / Boost.Format
            - use of fixed size types where possible (i.e. std::int64_t)
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
        - privilege checks only apply to irule invocations
        - handles touch API PEPs

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - tests pass for 4-2-stable and main
        - implemented new fixes
            - (a) iput --metadata
            - (b) accepting integers as configuration values
            - (c) indexing of user permissions (NIEHS AVU/system-metadata schema)
        - backporting (a) and (b) to 4.2.7

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

    - possible creation of pure-R client to hit the CPP REST API
        - solves the packaging problem with current rirods work

