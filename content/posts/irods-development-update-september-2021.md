Title: iRODS Development Update: September 2021
Date: 2021-09-27 08:00
Author: Kory Draughn
Slug: irods-development-update-september-2021
Status: published


Hello all! We've reached the end of another month and with that comes exciting iRODS news.

We're excited to report that the [C++ REST API](https://github.com/irods/irods_client_rest_cpp) and [Zone Management Tool (ZMT)](https://github.com/irods/irods_client_zone_management_tool) are approaching their first official release! We have a few more issues to take care of before release, so look for those within a few days/weeks.

The [indexing plugin](https://github.com/irods/irods_capability_indexing) is almost ready to be released. Support for the NIEHS schema has been implemented and tested. It is now in the final stages of polish.

Metalnx has received quite a number of changes in the past month. Search has been reimplemented to use GenQuery. This change allows Metalnx to honor permissions and present only the logical space. The AVU search and Property search have been combined to provide an interface closer to that of iquest. We hope the community finds these changes helpful moving forward.

Jargon is getting support for Replica Access Tokens which enable parallel transfer over multiple streams. Development is going well and we hope to see a release soon. Big thanks to Mike Conway for his work.

Like Jargon, we're working to add support for Replica Access Tokens to the [Globus Connector](https://github.com/irods/irods_client_globus_connector).

We've also been developing a new [docker-based test environment for iRODS](https://github.com/irods/irods_testing_environment). This new system is a companion to the [iRODS development environment](https://github.com/irods/irods_development_environment) and is being developed with the community in mind. It will allow anyone to run the test suite, add support for new operating systems, iRODS clients, etc. It has already helped us identify bugs that weren't exposed through previous testing systems.

We look forward to seeing what the community thinks of the new tools.

Until next time, have a wonderful day.


### September Technology Working Group

- [4.2.11](https://github.com/irods/irods/milestone/37)

    - 19 bugs / 31 open, 29 closed

- [4.2 Backlog](https://github.com/irods/irods/milestone/34)

    - 135 bugs / 254 open, 0 closed

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 39 bugs / 130 open, 115 closed
    - clang format
    - new logger (rsyslog or stdout)
    - irodsDelayServer refactoring / with implicit remote()
    - support for HA (single irodsDelayServer defined in the catalog)
    - support for Ubuntu20
    - GenQuery reimplemented in flex/bison
    - unified server_config.json
    - plugin-driven authentication framework
    - Python3 support (control scripts and Python rule engine plugin)
    - now uses a PID file

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort will be an OMERO integration
    - working meeting
        - Thur, September 16, 10am ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - progress towards SwaggerAPI
    - working towards demo of Metalnx-API-iRODS
    - working meeting
        - Tues, October 19, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - working meeting
        - Tues, October 26, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - initial effort will be a MinIO gateway and integration services
    - working meeting
        - Tues, October 1, 3pm ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, December 1, 2021, 4pm ET
    - speakers TBD

- New Development Work

    - [new docker-based testing environment](https://github.com/irods/irods_testing_environment)
        - companion to [iRODS development environment](https://github.com/irods/irods_development_environment)
        - provides more flexibility and control through set of python scripts
            - built on top of the docker API
        - demonstrated that test suite can be run in a topology
        - adding support for installing custom packages, SSL, plugins, and more

- Active Development Work

    - Build and Packaging
        - consistent / better use of CMake
        - targeting gcc again and defining minimum requirements

    - NetCDF microservices
        - 4.2.10.0 coming soon
        - full HDF5 support could come later

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - reimplemented search to use GenQuery only
            - metadata and properties tab have been consolidated
        - updated to use iRODS terminology (collections and data objects)
        - interfaces are more consistent
        - working on compatibility with the indexing plugin schema
        - awaiting CI

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - fixed an URL encoding bug involving ZMT 
        - now in CI

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - uses new C++ REST API
        - fixed URL encoding issue
        - updated support for sorting data
        - preparing initial release

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - now honors ssl_verify_server = "none" setting
        - now supports VERIFY_CHKSUM_KW keyword provided by the checksum API
        - working on parallel put for objects with multiple replicas
        - working on parallel transfer (multi-1247)
            - including with redirect for point-to-point with storage server
        - now in CI

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - finished Glacier support work
            - in testing with Fujifilm
        - completed regression testing on AWS, Fujifilm, MinIO, CEPH, and GCS
        - now in CI

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - investigating large file transfers via NFS4J
            - requires Jargon to learn replica access tokens
        - awaiting CI

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - now reacts to atomic metadata API
        - now handles graceful deletion before indexing
        - updated to work with NIEHS schema used by Metalnx
        - updated for elasticsearch 6 and 7 (configurable)
        - now passes test suite

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
    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - working on memory leaks for multiple/looping microservice calls
        - working towards Python3 compatibility
        - demonstrated Python3 virtual environment
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

    - Deployment Statistics
        - consider form/queries to gather stats from community members
        - consider how/where to publish - on website?
        - sortable table
            - organization
            - bytes (w and w/o replicas)
            - object count
            - metadata rows
            - date updated

