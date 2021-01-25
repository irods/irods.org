Title: iRODS Development Update: January 2021
Date: 2021-01-25 09:00
Author: Terrell Russell
Slug: irods-development-update-january-2021
Status: published

Happy New Year - we've gotten off to a quick start in 2021.

On the client side, the [iRODS Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
is coming into focus with consistent layouts
and interactions across the different elements it's being designed to manage.
[Metalnx](https://github.com/irods-contrib/metalnx-web) is
growing a gallery view for a collection that will show thumbnails of any
image-related data objects.  The [Python iRODS Client](https://github.com/irods/python-irodsclient)
has landed its atomic metadata implementation and was released just this weekend.  Parallel
transfer on port 1247 is coming to the Python client alongside the main iRODS 4.2.9 release.

In the server, we have been standardizing our build and packaging processes with better
use of GNUInstallDirs as well as a move to GitHub Actions.  We have added a couple new
tools to our analysis and have fixed a number of memory leaks.  Intermediate replicas
have landed and logical locking is now partially implemented... we're moving faster
into the light.

The [S3 plugin](https://github.com/irods/irods_resource_plugin_s3) has been rebased atop
the upstream libs3 client library and released as 4.2.8.1, compatible with iRODS 4.2.8.
The new streaming S3 plugin will be released for iRODS 4.2.9.  Additionally, the logical
quotas plugin has been updated to work with the intermediate replicas in preparation for 4.2.9.

We have decided on another [Virtual iRODS User Group Meeting]({filename}/pages/ugm.html) in June 2021
- so make your plans for June 8-11 -- three days of live presentations and demos and then a day of
brainstorming and troubleshooting with the development team.  More details will
be available within a month or so.

Here's to a very boring, safe, healthy, and productive year!


### January Technology Working Group

- [4.2.9](https://github.com/irods/irods/milestone/35)

    - 51 issues, 31 bugs
    - intermediate replicas
    - logical locking
    - rule execution context (reiFiles) migrated to catalog

- [4.2 Backlog](https://github.com/irods/irods/milestone/34)

    - 221 issues, 120 bugs

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 110 issues, 42 bugs
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
    - next meeting - January 19, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - next meeting - January 26, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - February 17, 2021, 4pm ET
    - Speaker TBD

- New Development Work

    - Build and Packaging
        - use GNUInstallDirs consistently via CMake
        - moved from travis-ci to github actions

    - Checksum API refactor to provide two modes
        - lookup/update (can result in a catalog update)
        - verification (never results in a catalog update)
        - https://github.com/irods/irods/commit/22f1a5a63a4126a5fdcac9ca5d439f2a1c2095f2

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - updated to work with intermediate replicas
            - the tracking around streaming operations have been loosened
            - only counts replicas marked as good
        - added new rule - returns the quota values for a collection as JSON
        - https://github.com/irods/irods_rule_engine_plugin_logical_quotas

- Active Development Work

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - React application
        - talking to new C++ REST API
        - demonstrated at Dec 2020 TRiRODS

    - Logical Locking
        - ongoing because of deeply rooted assumptions in core code (APIs, resource plugins, etc.)
            - history: changing replica status has always been static
                - stale or good, only after the data is at rest
            - goal: a replica's status should be changed any time the replica's data is in flight to reflect the truth about the data
            - hard: allowing for dynamic catalog updates while maintaining consistency and mitigating interface breakage
        - implemented the Replica State Table
            - what: in-memory, per-agent, JSON-based snapshot of the catalog for a particular data object which is to be opened
            - why: instrumental in maintaining the story of in-flight data for logical locking
                - restoring replica statuses
                - keeping track of the catalog across an agent
            - how: working on moving away from rsDataObjClose usage in major server-side APIs
                - done: rsDataObjPut, rsDataObjRepl
                - make use of replica_close/data_object_finalize API plugins in place of rsDataObjClose/rsModDataObjMeta
                - this allows for atomic updates to replica statuses as it relates to locking/unlocking data objects

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
        - atomic metadata operations
        - parallel transfer on port 1247 (with upcoming 4.2.9)
        - released v0.8.5, Nov 10
            - use connection create time to determine stale connections
        - awaiting CI

    - [Cacheless S3 Plugin / S3_Connector](https://github.com/irods/irods_resource_plugin_s3)
        - implemented decoupled naming mode for cacheless
        - rebased atop upstream bji/libs3 - passing all tests
        - ready for 4.2.9
        - awaiting CI

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - Hard Links support upcoming
        - now supports (configurable) overwriting data objects to match POSIX semantics
        - no need to use the mtime rule engine plugin with 4.2.9+
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

    - [Hard Links Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_hard_links)
        - complete, ready for 4.2.9
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
    - Parallel Filesystem Integration
        - iRODS API plugin
        - have split BeeGFS and Lustre implementations into aggregator and listener
        - testing against known configurations        
    - SMBRODS project to surface iRODS as SMB
    - CockroachDB Database Plugin
    - Cloud Browser
    - Member Ticketing System

- Discussion
