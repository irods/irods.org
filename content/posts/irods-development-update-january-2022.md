Title: iRODS Development Update: January 2022
Date: 2022-01-19 12:00
Author: Kory Draughn
Slug: irods-development-update-january-2022
Status: published


Oh my goodness, how time flies! It is hard to believe that we're in 2022.

Last month we released iRODS 4.2.11. The smoothest release yet. While a release of 4.2.12 is planned, the primary focus is now on iRODS 4.3.0.

On the client-side ...

The Python iRODS Client (PRC) has gained yet another XML parser called SECURE_XML. The goal of this new parser is to eliminate XML security vulnerabilities. Not only that, but support for parallel transfer to/from S3 storage is being added to the PRC.

Our next client, the Zone Management Tool (ZMT), is also seeing some very nice updates. It now issues alerts when resource hostnames do not match a known server. Also, support for case-insensitive search and user password management are in active development. We're getting closer to providing a full featured administrative GUI!

For NFSRODS users, you'll be happy to know that it is almost ready. We promise :). We've resolved the final issues around parallel transfer and all NFSRODS tests pass consistently. You can expect a new release by the end of next week.

Now that we've covered the client-side, let's talk about the server-side of things ...

For the Python Rule Engine Plugin (PREP), we've started investigating memory issues around raised exceptions. Resolving these memory issues is very important as it improves system stability for users relying on this plugin, especially in the context of deployments with long uptimes.

The Indexing Capability Plugin is receiving updates around user and group permissions for indexed object metadata.

For users interested in NetCDF, you'll be happy to know that we've released packages for iRODS 4.2.9, 4.2.10, and 4.2.11.

Last but not least, the iRODS Development Environment has received a nice update in the form of it now being able to build plugins. If you're tweaking existing plugins or implementing your own, this update should be useful to you if you're following the build pattern used by all iRODS plugins.

The push to iRODS 4.3.0 continues. See you next month!


### January Technology Working Group

- [4.2.11](https://github.com/irods/irods/milestone/37)

    - released December 18, 2021

- [4.2.12](https://github.com/irods/irods/milestone/38)

    - 8 bugs / 12 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 131 bugs / 235 open, 0 closed

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 48 bugs / 184 open, 139 closed
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

    - investigating invalid pointer free occurring in PREP due to raised exceptions

- Active Development Work

    - Build and Packaging
        - merged several packaging touchups
        - consistent / better use of CMake
        - targeting gcc again and defining minimum requirements

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - added test hook runner for testing plugins

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - added support for building plugins

    - NetCDF microservices
        - released 4.2.9.0, 4.2.10.0, and 4.2.11.0
        - full HDF5 support could come later

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - working on UI consistency
            - metadata templates
        - awaiting CI

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - exposed full support of the ticket API
        - exposed new options for the /query endpoint
            - options controlling case-sensitivity and row uniqueness
        - preparing 0.9.0 release

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - issues alert when resource hostnames do not match a known server
        - adding support for case-insensitive search
        - investigating user password management

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - added additional XML parser variant, SECURE_XML
            - eliminates XML security vulnerabilities
        - supports setting default parser via an environment variable
        - adding support for parallel transfer to/from S3 storage
        - now in CI

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - should consider a later Python 3.x (3.6 EOL pretty soon)

    - [R client (rirods)](https://github.com/irods/irods_client_library_r_cpp)
        - doing investigation / packaging for 4.2.x
        - in support of the new R Consortium proposal

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - released 4.2.11.0 with Glacier support
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

    - interest in HIPAA use cases / policy
        - CyVerse, Minnesota, NKI Amsterdam
        - best practices, dashboards, PEPs, common policies
        - sequestered, and then deletion policies

