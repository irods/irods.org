Title: iRODS Development Update: April 2021
Date: 2021-04-20 21:00
Author: Terrell Russell
Slug: irods-development-update-april-2021
Status: published


It's getting very real.  Just over six weeks until our [2021 iRODS User Group Meeting]({$filename}/pages/ugm2021.html).

We have a draft list of talks from the Consortium.  We have around 40 registrations (and counting).  We have
T-shirts and stickers being printed.  It's all coming together... mostly.  4.2.9 will be ready.

4-2-stable has just seen write locks merged, along with additional cleanups for checksums and streaming overwrites.
The delay server now honors a priority level for delayed jobs, along with honoring the delay time units as they were
documented.  An atomic database operations library is under development that will allow one-stop resource hierarchy
editing as well as a potential path forward for the [iRODS Lambda function](https://github.com/irods/irods_client_aws_lambda_s3)
to increase its batch size (both increasing throughput and lowering cost).

[NFSRODS](https://github.com/irods/irods_client_nfsrods) now lists very large collections correctly (we had a paging bug),
and with its additional caches, is under additional testing in larger environments.  We expect a major release at UGM again this year.

We have a month of development time left.  Heads down.


### April Technology Working Group

- [4.2.9](https://github.com/irods/irods/milestone/35)

    - 33 bugs / 67 issues, 221 closed
    - intermediate replicas
    - logical locking
    - rule execution context (reiFiles) migrated to catalog
    - priority available to delayed rules

- [4.2 Backlog](https://github.com/irods/irods/milestone/34)

    - 131 bugs / 242 open, 0 closed

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 42 bugs / 112 open, 107 closed
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
    - next meeting - July 20, 10a ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - next meeting - July 27, 10a ET

- [TRiRODS](https://irods.org/trirods)

    - May 19, 2021, 4pm ET
    - David Wade - SCADA and iRODS

- New Development Work

    - re-enabled PLUSET delay time units
    - imeta console fix
    - fix for atomic metadata api encoding JSON within XML
    - checksum API now reads up to r_data_main.data_size bytes
    - istream read now reads up to r_data_main.data_size bytes
    - put operations always honor the VERIFY_CHKSUM_KW flag
    - ils now supports -d option, to not print contents of a collection
    - delay server now honors priority level
        - set via delay hint PRIORITY or via iqmod
        - valid levels in range of 1 to 9 (default 5)
        - grandfathered rules will get priority 5
    - 4.2.9 Breaking Changes
        - an overwrite will always erase the existing checksum
        - an overwrite via put operation will no longer recalculate a checksum
            - unless requested in the put operation
    - new library under development for unrelated atomic database operations
        - supports inserts, updates, and deletes
        - supports data objects, collections, resources, and metadata
        - currently generating proper SQL
        - first use expected for new iadmin subcommand
            - iadmin setparentresc

- Active Development Work

    - Build and Packaging
        - consistent / better use of CMake
        - portable iCommands (for non-root users)
            - engineering PR to CyVerse and Sanger

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - uses new C++ REST API
        - connection status in footer
        - user/group/resource editing is cleaner
        - readying for UGM

    - Logical Locking
        - initial implementation for write lock interface nearing completion
        - tightened up error/edge cases
            - to ensure data objects do not get stuck in the lock state
        - working on making the test suite pass

    - New RPC API framework
        - leverages design from Authentication Working Group
        - supports synchronous and asynchronous operations
        - refactored into parallel_collection_operation base class
            - supports pre/post operations and an object operation

    - [Policy Composition](https://github.com/irods/irods_rule_engine_plugins_policy)
        - releases with 4.2.9 for storage tiering, indexing, publishing
        - leverages new parallel server api endpoint

    - [NetCDF microservices](https://github.com/irods/irods_netcdf)
        - ready for packaging for 4.2.8+
        - CyVerse has pre-release to test
        - full HDF5 support could come later

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - pull request to support 'anonymous' login
        - working on gallery view (thumbnails) of collections
        - working on elasticsearch consistency with irods_capability_indexing schema
        - next release with search and indexing update
        - awaiting CI

    - [C++-based REST API](https://github.com/irods/irods_client_rest_cpp)
        - working on packaging
        - being used by Zone Management Tool

    - C++ S3 API
        - working on packaging
        - part of new Data Transfer Nodes pattern

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - now in CI

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - continue testing scenario when S3 backend is overwhelmed
            - added a max retry wait time during failure exponential backoff
        - added timeout handling when writing to or reading from circular buffer
        - updated libs3 to fix rename issue on Oracle S3
        - added resource name to salt for shared memory key
        - awaiting CI

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - added connection caching
        - iRODS permissions, user types, query results, all now cached
        - large collections now listing correctly (fixed paging issue)
        - improved list operation performance
            - listing a collection with 500 entries... ~1 second
            - listing a collection with 3000 entries... ~3-4 seconds
            - listing a collection with 65000 entries... <5 minutes
        - cached list operation performance
            - all ~0.1 seconds
        - ready for 4.2.9
        - awaiting CI

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - updating to work with NIEHS schema used by Metalnx
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

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - working on memory leaks for multiple/looping microservice calls
        - working towards Python3 compatibility
        - demonstrated Python3 virtual environment
    - [iRODS Command Line Interface (CLI)](https://github.com/irods/irods_client_cli)
        - single binary
        - eventual replacement for ~50 iCommands
        - ls/put/get/rm/cp/repl/query
    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
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
