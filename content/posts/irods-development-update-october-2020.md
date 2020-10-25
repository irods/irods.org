Title: iRODS Development Update: October 2020
Date: 2020-10-26 10:00
Author: Terrell Russell
Slug: irods-development-update-october-2020
Status: published


First order of the day - we have two new faces around our virtual office.  A new software developer, Markus.  And a new web developer, Bo.  Welcome!   They're going to help us go fast.

Our 4.2.9 work is coming into focus.  Recent commits are related to logical locking, imeta, itouch, and [getting the delay rule context files stored in the catalog](https://groups.google.com/g/irod-chat/c/CsShunUkTqg).

We have released the [Python iRODS Client library, now at v0.8.4](https://github.com/irods/python-irodsclient/releases/tag/v0.8.4), including work on PAM authentication, testing, and stale connection pools.

The C++ REST API is being exercised by a new iRODS Administration GUI being developed in React.  We're excited to share that publicly soon, once there are a few more pieces in place.

We are also working on prototype code for an RDMA connector, alongside the ongoing Lustre integration efforts.

This last month has seen us virtually attend and present at BioIT World and eResearch Australasia.  We'll be at BioData World Congress and Supercomputing 2020 in the next month.  Less travel is easier, but spanning the global timezones from home is definitely not.



### October Technology Working Group

- [4.2.9](https://github.com/irods/irods/milestone/35)

    - 39 issues, 26 bugs
    - intermediate replicas
    - logical locking
    - rule execution context (reiFiles) migrated to catalog

- [4.2 Backlog](https://github.com/irods/irods/milestone/34)

    - 205 issues, 110 bugs

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 108 issues, 42 bugs
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
    - next meeting - October 20, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - next meeting - October 28, 2020, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - December 2, 2020, 4pm ET
    - Speaker TBD

- New Development Work

    - New iCommand - itouch
        - modeled after unix touch
        - via new API plugin that enables support by other clients
        - Utrecht - interested in considering policy to make this admin-only
    - Rule Execution Info (for delay rules) migrated to the catalog
        - the server no longer creates REI files.
        - REI information is stored in the catalog as JSON
        - JSON REI stored in a new database column called r_rule_exec.exe_context
        - new column is TEXT/CLOB
        - includes a migration tool to read/convert/insert any existing REI on upgrade
        - uses server_config.advanced_settings.run_delay_server = True/False
        - documented assumption of one per zone
    - Merged the mtime rule engine plugin's functionality into the server
        - now embedded in the API calls
        - does not require any configuration changes
        - users of NFSRODS, no need to use the mtime rule engine plugin with 4.2.9+
    - Logical Locking
        - machinery in place, including new replica_state_table
        - working to complete and test

- Active Development Work

    - Reimplementation of GenQuery with new flex/bison parser
        - will solve two issues client side for 4.2.9
        - rest of parsing issues to be fixed for 4.3.0

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
        - exposed irods error and state codes
        - worked on memory leaks for multiple/looping microservice calls
        - working to move to Python3

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - found/fixing bug with large files
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
        - awaiting CI

    - [Cacheless S3 Plugin / S3_Connector](https://github.com/irods/irods_resource_plugin_s3)
        - combining old and new behavior into single codebase
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

