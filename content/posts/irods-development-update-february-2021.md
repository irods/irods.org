Title: iRODS Development Update: February 2021
Date: 2021-02-24 09:00
Author: Terrell Russell
Slug: irods-development-update-february-2021
Status: published


It's been very wet this month.  And cold.  We hope you are safe and warm.

This month's work was full of small victories.  We have closed a number of long-standing issues and
are preparing for the rush of commits before 4.2.9 is ready for release.

[TRiRODS](https://irods.org/trirods) last week was a success - go add to the viewcount for
"Python iRODS Client: Atomic Metadata and Parallel Transfer".  There is lots of community
excitement about the new possibilities this work opens up.

Other new work consisted of the creation of a hostname cache and a dns cache within each iRODS
Agent to help reduce repeated network lookups.  We have also developed the 'client dot' for Jenkins so
that we can automate the tests for various iRODS clients we support.  This will be design-by-contract
with each client repository holding a test hook that Jenkins will know how to fire.

We also fixed a couple issues in the Automated Ingest tool related to running a periodic scan.

Heads down, we're close.   And spring is coming.



### February Technology Working Group

- [4.2.9](https://github.com/irods/irods/milestone/35)

    - 53 issues, 29 bugs
    - intermediate replicas
    - logical locking
    - rule execution context (reiFiles) migrated to catalog

- [4.2 Backlog](https://github.com/irods/irods/milestone/34)

    - 221 issues, 120 bugs

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 111 issues, 42 bugs
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
    - next meeting - February 16, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - next meeting - February 23, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - February 17, 2021, 4pm ET
    - Daniel Moore, iRODS Consortium
        - Python iRODS Client: Atomic Metadata and Parallel Transfer

- New Development Work

    - Verified that iquest does not require escaping embedded single quotes
        - LIGQ requires escaping single quotes using backslash

    - Bulk put operations now store the checksums in the catalog

    - Server now removes leftover rulebase PID files on startup

    - `ichksum -r` now organizes data objects and collections correctly

    - `ilocate` now supports case-insensitive search

    - Hostname Cache
        - will incorporate hosts_config.json
        - every iRODS Agent needs hostnames for all servers in the Zone/Fede
        - will reduce load on DNS

    - Generic 'client dot' in Jenkins
        - will call well-named script in each client repository
        - assumes repository script will run docker-compose
        - will catch results from repository script
        - will be cloned for each of our 7-8 clients

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - fixed post_job() event handler for periodic jobs
        - refactoring to abstract the source filesystem/object
            - considering kafka as source of events (for OMERO via debezium.io)
        - investigating splitting storage backends
            - celery workers -> redis
            - python/iRODS cache -> scylla (C++ distributed keystore)

- Active Development Work

    - Build and Packaging
        - consistent / better use of CMake

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - React application
        - talking to new C++ REST API
        - demonstrated at Dec 2020 TRiRODS

    - Logical Locking
        - have switched the order of source/destination file close events
        - done: phymv, repl, single buffer put
        - todo: parallel put, get, copy, compound
        - locking implementation should be quick
        - confirm with existing tests
        - add concurrent tests

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
        - releases soon for storage tiering, indexing, publishing
        - leverages new parallel server api endpoint

    - [NetCDF microservices](https://github.com/irods/irods_netcdf)
        - modernizing packaging for 4.2.x
        - working with CyVerse
        - full HDF5 support could come later

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - worked on memory leaks for multiple/looping microservice calls
        - working towards Python3 compatibility
        - demonstrated Python3 virtual environment

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - working on gallery view (thumbnails) of collections
        - working on elasticsearch consistency with irods_capability_indexing schema
        - new release soon with search and indexing update
        - want to turn on quotas visibility
        - testbed for metadata templates initial implementation
        - working to eventually remove database dependency
        - awaiting CI

    - [C++-based REST API](https://github.com/irods/irods_client_rest_cpp)
        - working on packaging
        - being used by Zone Management Tool

    - C++ S3 API
        - working on packaging
        - part of new Data Transfer Nodes pattern

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - new chksum endpoint
        - cleaner logs
        - ability to generate native iRODS login credentials on Windows
        - parallel transfer on port 1247 (with upcoming 4.2.9)
        - released v0.8.6, Jan 22
            - atomic metadata
            - better user management
            - cleanup on disconnect
        - awaiting CI

    - [Cacheless S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - integrated S3_ENABLE_MPU and S3_MPU_THREADS into cacheless mode:
            - if MPU is disabled and using parallel transfer
                - force a cache file
            - S3_MPU_THREADS only applies to flushing cache files
                - otherwise controlled by iRODS
        - when client requests overwhelm the S3 backend...
            - introduced preliminary throttling of simultaneous puts
            - will migrate this to throttle transfer threads rather than files
            - will be a configurable parameter
            - considering other solutions to queue waiting requests
        - awaiting CI

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - Hard Links support awaiting merge
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
            - collection mtime rule engine plugin
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
        - clients (to be added)
            - baton/tears
            - automated ingest
            - Python iRODS Client (PRC)
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

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
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
