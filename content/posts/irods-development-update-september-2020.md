Title: iRODS Development Update: September 2020
Date: 2020-09-23 22:00
Author: Terrell Russell
Slug: irods-development-update-september-2020
Status: published


We are about to turn the corner on 4.2.9.  The open issue count is dropping relatively quickly and morale is good.
The logical locking work is wrapping up and we'll soon begin to bump all the plugins in preparation for final testing and release.

New work this month saw a first draft reimplementation of GenQuery with flex and bison.  This work targets a few otherwise-unfixable bugs in the current string-based parsing of incoming General Queries.
There has also been new work on a resource library and better separation between the data object and replica libraries.  As we continue to use these new internal interfaces, they are proving solid and extremely productive.
We've restarted the research into using RDMA as a transport mechanism for iRODS and have consolidated the cacheless S3 plugin code after all its tests have passed.

We will be (virtually) speaking at BioIT World and eResearch Australasia 2020 in the next month.  Come wave at us in the computer.

Stay safe everyone.


### September Technology Working Group

- [4.2.9](https://github.com/irods/irods/milestone/35)

    - 36 issues, 24 bugs
    - intermediate replicas
    - logical locking

- [4.2 Backlog](https://github.com/irods/irods/milestone/34)

    - 210 issues, 110 bugs

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 111 issues, 42 bugs
    - clang format
    - new logger (rsyslog or stdout)
    - irodsDelayServer refactoring / with implicit remote()
    - CentOS8 will be supported
    - unified server_config.json
    - plugin-driven authentication framework
    - Python3 support (control scripts and Python rule engine plugin)

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - progress towards SwaggerAPI
    - working towards demo of Metalnx-API-iRODS
    - next meeting - September 15, 2020, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - next meeting - September 22, 2020, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - August 19, 2020, 4pm ET
    - Illyoung Choi, CyVerse
    - iRODS Container Storage Interface (CSI) Driver

- New Development Work

    - Reimplementation of GenQuery with new flex/bison parser
    - Writing to a replica using multiple streams now requires a replica token
    - Added new C++ resource management library
    - Investigating support for data movement using RDMA
    - Started working on modernizing support for special collections
        - PLAN: Deprecate "imcoll", provide a better interface into archive files
        - QUESTION: Is anyone using "imcoll"?  If so, how?
            - cyverse was using softlinks, but has abandoned due to performance
                - imaging world is DICOM files, tons of small files in an archive
            - maastricht using tar, possible users
            - hydroshare at RENCI is also using tar/bagit files
            - use case indexing of the contents, storing the archive
    - XML encoding/decoding issue (4132):
        - Server should handle special characters correctly
        - Could break compatibility between clients, new servers, and old servers
        - QUESTION: Cost for making 4.2.9 handle special characters correctly?
            - old/existing python and java applications affected

- Active Development Work

    - [iRODS Command Line Interface (CLI)](https://github.com/irods/irods_client_cli)
        - single binary
        - eventual replacement for ~50 iCommands
        - ls/put/get/rm/cp

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
        - added ability to name the python application (for ips)
        - awaiting CI

    - [Cacheless S3 Plugin / S3_Connector](https://github.com/irods/irods_resource_plugin_s3)
        - combining old and new behavior into single codebase
        - will be ready for 4.2.9
        - awaiting CI

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - Hard Links support now complete
        - now supports (configurable) overwriting data objects to match POSIX semantics
        - awaiting CI

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - working to index collection metadata
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
