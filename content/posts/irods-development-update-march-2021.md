Title: iRODS Development Update: March 2021
Date: 2021-03-22 12:00
Author: Terrell Russell
Slug: irods-development-update-march-2021
Status: published


Spring is near.  Vaccines are happening.  The sun may shine again.

We are still making steady progress.  Logical locking code is beginning to be tested using all
the underlying machinery that's been added and refactored since 4.2.8.  We've fixed a couple
issues with Metadata Guard and Logical Quotas around permissions and have landed a solution
for the long-standing PackStruct XML serialization issue.

[The Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool) has grown
configuration options for logo, background color, and additional
information in the footer.  It also required some concurrency additions to the C++ REST API
around authentication and token handling.

The Streaming S3 plugin has been under load testing at a new partner installation and has
developed a more sophisticated retry and exponential backoff implementation.  The circular
buffers have also been updated to hold bytes, rather than blocks to allow retries to be
more gracefully handled.  Performance continues to increase and we're uncovering bugs in
various S3-compatible backend appliances.

NFSRODS is improving its own cache performance.  Large collections are still hitting the iRODS
server too many times for stat() and ACL information.  We expect to improve large listings by
an order of magnitude or two.

Work has also begun on the long-requested, and long-awaited non-root iCommands packaging.  When
complete, this should allow non-root users in an HPC context (or anywhere else) to install
the iCommands themselves by just expanding a tarball and running `iinit`.

[Metalnx has grown a simple roadmap to help plan for Metalnx 3.0](https://github.com/irods-contrib/metalnx-web/blob/master/roadmap.md).
The goals for that release
are to remove the separate database, the rodsadmin requirement, the user/group/resource management,
and the dashboard overview.  It will be focused on providing a rodsuser view into Search,
Browse, and Metadata.  Administrative functionality will be assumed to be handled by the
Zone Management Tool.



### March Technology Working Group

- [4.2.9](https://github.com/irods/irods/milestone/35)

    - 63 issues, 35 bugs
    - intermediate replicas
    - logical locking
    - rule execution context (reiFiles) migrated to catalog

- [4.2 Backlog](https://github.com/irods/irods/milestone/34)

    - 231 issues, 125 bugs

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 112 issues, 42 bugs
    - clang format
    - new logger (rsyslog or stdout)
    - irodsDelayServer refactoring / with implicit remote()
    - support for Ubuntu20
    - GenQuery reimplemented in flex/bison
    - unified server_config.json
    - plugin-driven authentication framework
    - Python3 support (control scripts and Python rule engine plugin)

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - progress towards SwaggerAPI
    - working towards demo of Metalnx-API-iRODS
    - next meeting - March 16, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - next meeting - March 23, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - May 19, 2021, 4pm ET
    - Speaker/Topic TBD

- New Development Work

    - iRODS server now caches DNS lookup information in shared memory

    - iRODS server now caches hostname resolution results in shared memory

    - Parallel transfer now uses the longest hostname alias in hosts_config.json

    - Metadata Guard
        - no longer allows AVUs to be added to protected namespace

    - Fixed PackStruct XML encoding - now dependent on server version
        - backwards compatible with older servers and clients

- Active Development Work

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - no longer allows multiple metadata attributes with different values

    - Build and Packaging
        - consistent / better use of CMake
        - working on portable iCommands (for non-root users)

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - uses new C++ REST API
        - simple deploy via 'docker-compose up'
        - configurable logo, background colors
        - version information in footer
        - consistent table views
        - background requests to keep totals current

    - Logical Locking
        - simple write-lock implementation demonstrated using replica state table
        - reworked interfaces for clarity and consistency
            - replica state table, data_object_finalize, and logical_locking
        - now using data_status column to 'remember' certain system metadata

    - [iRODS Command Line Interface (CLI)](https://github.com/irods/irods_client_cli)
        - single binary
        - eventual replacement for ~50 iCommands
        - ls/put/get/rm/cp/repl/query

    - New RPC API framework
        - Leverages design from Authentication Working Group
        - Supports synchronous and asynchronous operations
        - Refactored into parallel_collection_operation base class
            - supports pre/post operations and an object operation

    - [Policy Composition](https://github.com/irods/irods_rule_engine_plugins_policy)
        - releases with 4.2.9 for storage tiering, indexing, publishing
        - leverages new parallel server api endpoint

    - [NetCDF microservices](https://github.com/irods/irods_netcdf)
        - modernizing packaging for 4.2.8+
        - working with CyVerse
        - full HDF5 support could come later

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - worked on memory leaks for multiple/looping microservice calls
        - working towards Python3 compatibility
        - demonstrated Python3 virtual environment

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - new roadmap published
        - fixed login page redirects
        - fixed CSV export of metadata
        - fixed CSV export of search results
        - working on gallery view (thumbnails) of collections
        - working on elasticsearch consistency with irods_capability_indexing schema
        - next release with search and indexing update
        - awaiting CI

    - [C++-based REST API](https://github.com/irods/irods_client_rest_cpp)
        - working on packaging
        - connection pooling via JWT - mostly used for query endpoint for paging
        - configuration get/put - touching server configuration remotely (for the first time)
        - being used by Zone Management Tool

    - C++ S3 API
        - working on packaging
        - part of new Data Transfer Nodes pattern

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - atomic metadata results now available to remainder of session
        - awaiting CI

    - [Cacheless S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - handling case where client requests overwhelm the S3 backend
            - implemented retry and exponential backoff
            - tested under various scenarios - results successful
        - changed circular buffer logic to allow retries
            - circular buffer holds bytes, not blocks
            - size of circular buffer defined as multiple of minimum part size
            - hard requirement that it be at least twice the minimum part size
            - bytes now not removed from circular buffer
                - until request (full or partial) is completed successfully
            - significant logic changes to determine number of parts, part ranges, etc.
                - thread that reads the circular buffer and sends to iRODS
                    - updated so part sizes do not exceed circular buffer size
                    - each thread may now send more than one part
                    - multipart may be used, even with one thread
                        - if file size is greater than circular buffer size
                - thread that writes to circular buffer
                    - must break up writes if not enough room in circular buffer
                - these changes are all to avoid deadlocks
        - awaiting CI

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - working to prefetch/cache listings for large collections
        - ready for 4.2.9
        - awaiting CI

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - working to incorporate geospatial / GeoJSON / bounding boxes
        - second implementation coming for Apache Solr

    - [Publishing Capability](https://github.com/irods/irods_capability_publishing)
        - needs more README
        - awaiting CI

    - [Continuous Integration (CI)](https://github.com/irods/irods_testing_jenkins)
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
            - QueryArrow database plugin

- Background Items

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - refactoring to abstract the source filesystem/object
            - considering kafka as source of events (for OMERO via debezium.io)
        - investigating splitting storage backends
            - celery workers -> redis
            - python/iRODS cache -> scylla (C++ distributed keystore)
    - [Hard Links Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_hard_links)
        - complete, ready for 4.2.9
    - [AWS S3 Lambda](https://github.com/irods/irods_client_aws_lambda_s3)
        - future release
            - could brute-force confirm checksums to detect renames
            - would persist metadata
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
    - Metalnx Roadmap to 3.0.0
    - [https://github.com/irods-contrib/metalnx-web/blob/master/roadmap.md](https://github.com/irods-contrib/metalnx-web/blob/master/roadmap.md)
    - Seems good from community - moving forward with this plan

