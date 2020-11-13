Title: iRODS Development Update: November 2020
Date: 2020-11-13 16:00
Author: Terrell Russell
Slug: irods-development-update-november-2020
Status: published


This month is apparently already half over and the Holidays are coming soon.

We're still focusing our efforts to get 4.2.9 out the door.  

We're building more docker-based testing into CI for clients, testing the S3 plugin against various member appliances, filling out more Admin GUI functionality, bettering our CMake build and packaging, experimenting with RDMA, and writing policy for our partners.

TRiRODS in December is still an open slot.  Let us know if you're interested in sharing some work in progress.



### November Technology Working Group

- [4.2.9](https://github.com/irods/irods/milestone/35)

    - 45 issues, 28 bugs
    - intermediate replicas
    - logical locking
    - rule execution context (reiFiles) migrated to catalog

- [4.2 Backlog](https://github.com/irods/irods/milestone/34)

    - 207 issues, 115 bugs

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 111 issues, 43 bugs
    - clang format
    - new logger (rsyslog or stdout)
    - irodsDelayServer refactoring / with implicit remote()
    - support for Ubuntu20 and CentOS8
    - GenQuery reimplemented in flex/bison
    - unified server_config.json
    - plugin-driven authentication framework
    - Python3 support (control scripts and Python rule engine plugin)

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - progress towards SwaggerAPI
    - working towards demo of Metalnx-API-iRODS
    - next meeting - November 17, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - next meeting - November 24, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - December 2, 2020, 4pm ET
    - Speaker TBD

- New Development Work

    - RDMA transport experimentation
        - via dstream (all across 1247, no more multi-high-ports)
        - working with KTH cluster and RENCI Hatteras cluster
    - Jenkins Testing Client Job Template
        - based on docker-compose
        - will simplify existing framework
        - template for other iRODS clients
    - Build and Packaging
        - building with Clang10
        - reduced build time by 30% by consolidating symbols
        - master branch is now green again at Travis-CI
        - improved standardized packaging
    - Admin GUI
        - React application
        - talking to new C++ REST API
    - Longstanding imeta bugs cleaned up

- Active Development Work

    - Rule Execution Info (for delay rules) migrated to the catalog
        - the server no longer creates REI files
        - REI information is stored in the catalog as JSON
        - JSON REI stored in a new database column called r_rule_exec.exe_context
        - new column is TEXT/CLOB
        - uses server_config.advanced_settings.run_delay_server = True/False
        - documented assumption of one per zone
        - no migration tool - no downtime - just processes any existing REI files
        - delay rules that use session variables will not be migrated
            - will continue to be executed as long as the REI file exists
        - [RFC at GitHub](https://github.com/irods/irods_rfcs/blob/master/0006_static_peps_and_delay_rules.md)

    - Logical Locking
        - making 'replica' a first class item in the code
        - preliminary tests passing
        - using replica_state_table and data_object_finalize

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
        - found/fixing bug with >4.7G files
        - new release soon with search and indexing update
        - want to turn on quotas visibility
        - testbed for metadata templates initial implementation
        - working to eventually remove database dependency
        - awaiting CI

    - [Hard Links Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_hard_links)
        - complete, ready for 4.2.9

    - [C++-based REST API](https://github.com/irods/irods_client_rest_cpp)
        - working on packaging
        - part of new Data Transfer Nodes pattern

    - C++ S3 API
        - working on packaging
        - part of new Data Transfer Nodes pattern

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - released v0.8.4, Oct 19
            - connection handling
            - sets application name for ips
            - PAM authentication with environment file
        - awaiting CI

    - [Cacheless S3 Plugin / S3_Connector](https://github.com/irods/irods_resource_plugin_s3)
        - rebased atop upstream bji/libs3 - passing all tests
        - will be ready for 4.2.9
        - awaiting CI

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - Hard Links support now complete
        - now supports (configurable) overwriting data objects to match POSIX semantics
        - no need to use the mtime rule engine plugin with 4.2.9+
        - awaiting CI

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - collection metadata can now be indexed
        - indexed metadata can be arbitrarily formatted (including JSON)
        - appropriate and configurable logging
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
            - Admin GUI
        - OS (to be added)
            - CentOS8
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
    - [AWS S3 Lambda](https://github.com/irods/irods_client_aws_lambda_s3)
        - future release
            - could brute-force confirm checksums to detect renames
            - would persist metadata
    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
    - Parallel Filesystem Integration
        - iRODS API plugin
        - have split BeeGFS and Lustre implementations into aggregator and listener
        - testing against known configurations        
    - SMBRODS project to surface iRODS as SMB
    - CockroachDB Database Plugin
    - Cloud Browser
    - Member Ticketing System

- Discussion

    - itouch may need to be limited to admin-only
        - breaks assumptions for Utrecht’s use cases / integrity checks
    - interest in a Testing Working Group - to provide a mechanism for
        - gathering use cases and tests from the community
        - greater confidence with upcoming releases
