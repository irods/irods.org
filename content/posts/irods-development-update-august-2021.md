Title: iRODS Development Update: August 2021
Date: 2021-08-21 08:00
Author: Terrell Russell
Slug: irods-development-update-august-2021
Status: published


Already two months since [UGM 2021]({filename}/pages/ugm2021.html), how is that possible?

In that time, [we've released 4.2.10]({filename}/posts/irods-4-2-10-is-released.md) and started to shift some focus to 4.3.0.

Our summer interns have been firing on all cylinders and have just presented their work at [TRiRODS]({filename}/pages/trirods.html) earlier this week.  The talk titles were "Ingest Refactor (Python)" and "Delay Server Availability and Scalability (C++)".  The videos are posted, go watch!

We have an interesting discussion brewing about how to perform a live migration of the delay server while under load, and we've started another working group about how to best present an iRODS Zone via the S3 protocol.  The indexing plugin is almost working with the NIEHS schema (and therefore the Metalnx pluggable search), and we've been working hard to get the shipped Metalnx search a bit more intuitive and functional.

Initial Glacier support has been added to the S3 resource plugin, as well as confirmation that the S3 plugin works with Google Cloud Storage (GCS), including multipart transfers.

We're still hopeful we can see some of you in St. Louis at Supercomputing in November.  Be well.


### August Technology Working Group

- [4.2.10](https://github.com/irods/irods/milestone/36)

    - released July 27, 2021

- [4.2.11](https://github.com/irods/irods/milestone/37)

    - 15 bugs / 24 open, 2 closed

- [4.2 Backlog](https://github.com/irods/irods/milestone/34)

    - 144 bugs / 265 open, 0 closed

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 39 bugs / 114 open, 111 closed
    - clang format
    - new logger (rsyslog or stdout)
    - irodsDelayServer refactoring / with implicit remote()
    - support for HA (single irodsDelayServer defined in the catalog)
    - support for Ubuntu20
    - GenQuery reimplemented in flex/bison
    - unified server_config.json
    - plugin-driven authentication framework
    - Python3 support (control scripts and Python rule engine plugin)

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort will be an OMERO integration
    - next meeting - September 16, 10a ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - progress towards SwaggerAPI
    - working towards demo of Metalnx-API-iRODS
    - next meeting - August 17, 10a ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - next meeting - October 26, 10a ET

- [TRiRODS](https://irods.org/trirods)

    - August 18, 2021, 4pm ET
    - iRODS Summer Internships
    - Speakers
        - Gabrielle Maxwell
        - Violet White

- New Development Work

    - Discussion about Delay Server Migration Protocol
        - https://github.com/irods/irods/issues/5249
    - Discussion about iRODS S3 presentation via MinIO
        - feasability of adding gateway-irods.go to upstream MinIO project
        - https://github.com/minio/minio/tree/master/cmd/gateway
        - https://github.com/irods-contrib/irods_working_group_s3

- Active Development Work

    - Build and Packaging
        - consistent / better use of CMake
        - targeting gcc again and defining minimum requirements

    - Logical Locking
        - read-locks to be implemented

    - NetCDF microservices
        - 4.2.9.0 coming soon
        - full HDF5 support could come later

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - reimplementing search to use GenQuery only
            - metadata and properties tab have been consolidated
        - updating to use iRODS terminology (collections and data objects)
        - https://github.com/irods-contrib/metalnx-web/pull/267
        - awaiting CI

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - adding ticket support
        - https://github.com/irods/irods_client_rest_cpp
        - now in CI

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - uses new C++ REST API
        - fixed URL encoding issue
        - preparing initial release

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - working on parallel transfer (multi-1247)
            - including with redirect for point-to-point with storage server
        - now in CI

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - adding Glacier support
            - in testing with fujifilm
        - need to consider automated policy to protect against overuse/highcost
        - now in CI

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - investigating large file transfers via NFS4J
            - requires Jargon to learn replica access tokens
        - awaiting CI

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - updated to work with NIEHS schema used by Metalnx
        - updated for elasticsearch >= 7.0
        - tests nearly passing

    - [Publishing Capability](https://github.com/irods/irods_capability_publishing)
        - needs more README
        - awaiting CI

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - refactoring to abstract the source filesystem/object
            - considering kafka as source of events (for OMERO via debezium.io)
        - investigating splitting storage backends
            - celery workers -> redis
            - python/iRODS cache -> scylla (C++ distributed keystore)

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
