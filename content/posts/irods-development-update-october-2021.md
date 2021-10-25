Title: iRODS Development Update: October 2021
Date: 2021-10-25 15:00
Author: Kory Draughn
Slug: irods-development-update-october-2021
Status: published


Wooh! It has been a busy month, but we're making a lot of progress.

Interest in the [iRODS client library for the R programming language](https://github.com/irods/irods_client_library_r_cpp) is starting to grow. We have demonstrated that the project, contributed back in 2016, compiles and runs against iRODS v4.2.10. The goal is to make a conformant R package so that people in the R community can leverage iRODS.

Ticket support in the iRODS server and clients have received some enhancements. The [Python iRODS client (PRC)](https://github.com/irods/python-irodsclient) can now query ticket information and delete tickets. On top of that, administrators will soon be able to delete tickets created by other users.

We also implemented a prototype of the S3 Ticket Booth. After some discussion and experimentation, we've determined that the [C++ REST API](https://github.com/irods/irods_client_rest_cpp) is best suited for satisfying the requirements originally set by the ticket booth. This means the C++ REST API will be getting full support for tickets (i.e. read/write tickets).

Support for Amazon Glacier is now available in the [S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3) so give that a look if you find that interesting.

The [iRODS Testing Environment](https://github.com/irods/irods_testing_environment) is growing support for SSL. This effort lead to some investigation around federation and negotiation keys. This project continues to help improve the stability and correctness of the iRODS server and clients.

Progress has been made on iRODS v4.3.0 as well. Administrators will no longer need to manage multiple configuration files! All server configuration files have been consolidated into a single file, server_config.json. As for new features, the Atomic Database API is awaiting final approval. We are working hard to get 4.3 ready for UGM 2022 so keep an eye out for that.

Last but not least, to help create a more inviting and inclusive community for new and existing users, we are replacing some language used throughout the iRODS ecosystem. If you have thoughts on this, let us know [here](https://github.com/irods/irods/issues/5926).

The future continues to be very bright for iRODS users. See you next month!


### October Technology Working Group

- [4.2.11](https://github.com/irods/irods/milestone/37)

    - 19 bugs / 30 open, 30 closed

- [4.2 Backlog](https://github.com/irods/irods/milestone/34)

    - 134 bugs / 238 open, 0 closed

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 41 bugs / 152 open, 116 closed
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
        - Thur, October 21, 10am ET

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
        - Fri, November 5, 3pm ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, December 1, 2021, 4pm ET
    - speakers TBD

- New Development Work

    - [rirods](https://github.com/irods/irods_client_library_r_cpp)
        - doing investigation / packaging for 4.2.x
        - in support of the new R Consortium proposal
    - [S3 Ticket Booth](https://github.com/irods/irods_client_s3_ticketbooth)
        - for use with minIO, discussed as part of the S3 Working Group
        - brainstormed API design and shared secret for JWT
        - three endpoints, only one needed for MVP
        - working on initial prototype, possibly Python w/ Flask

- Active Development Work

    - Build and Packaging
        - consistent / better use of CMake
        - targeting gcc again and defining minimum requirements

    - Docker-based Testing Environment
        - added support for custom externals packages
        - improved CLI options for running tests
            - intelligently determines platform and database type
        - added support for federation and running federation test suite
        - adding SSL support

    - NetCDF microservices
        - 4.2.10.0 coming soon
        - full HDF5 support could come later

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - released 2.5.0
        - improved compatibility with the indexing plugin schema
        - builds URLs from data obtained from the indexing plugin
        - awaiting CI

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - released 0.8.0

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - released 0.1.0

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - resolved issues stemming from issue #285
            - multiple streams could not be opened on multi-replica data object
            - after a write, two replicas could differ but both marked as good
        - now in CI

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - implemented full support for Glacier
            - awaiting official release of it and libs3
        - now in CI

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - investigating large file transfers via NFS4J
            - requires Jargon to learn replica access tokens
        - awaiting CI

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - no longer responsible for building URLs
        - added upper bound to number of jobs spawned per collection operation
        - preparing for release against 4.2.10
        - preparing backport for 4.2.7 for Sanger

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
        - https://github.com/irods/irods_client_cli

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)

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

- Discussion

