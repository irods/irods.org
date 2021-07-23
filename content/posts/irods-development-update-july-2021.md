Title: iRODS Development Update: July 2021
Date: 2021-07-22 14:00
Author: Terrell Russell
Slug: irods-development-update-july-2021
Status: published


We did it - [iRODS 4.2.9 is out]({filename}/posts/irods-4-2-9-is-released.md).  Releases for NFSRODS, Python iRODS Client, Metalnx, S3, and 
[UGM 2021]({filename}/pages/ugm2021.html) has come and gone, slides and videos are posted... and apparently, another month has passed.

4.2.10 is coming soon (testing is finishing up now) and we're excited about starting to focus on work for 4.3.0.

Our interns are doing great work and wrapping up their summer projects - they'll be presenting at TRiRODS on August 18.

Hope everyone is safe, and maybe we can get out of this pandemic before too long.


### July Technology Working Group

- [4.2.9](https://github.com/irods/irods/milestone/35)

    - released June 7, 2021

- [4.2.10](https://github.com/irods/irods/milestone/36)

    - 3 bugs / 4 open, 4 closed
    - fix for >2GB file reads

- [4.2.11](https://github.com/irods/irods/milestone/37)

    - 13 bugs / 22 open, 0 closed

- [4.2 Backlog](https://github.com/irods/irods/milestone/34)

    - 142 bugs / 263 open, 0 closed

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 39 bugs / 112 open, 109 closed
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
    - Goal: To provide a standardized suite of imaging policies and practices for integration with existing tools and pipelines
    - initial effort will be an OMERO integration
    - next meeting - July 15, 10a ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - progress towards SwaggerAPI
    - working towards demo of Metalnx-API-iRODS
    - next meeting - July 20, 10a ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - next meeting - July 27, 10a ET

- [TRiRODS](https://irods.org/trirods)

    - August 18, 2021, 4pm ET
    - Speaker TBD

- New Development Work

    - adding automatic restarts of Agent Factory and reServer in main()
    - docker-compose-based topology test framework

- Active Development Work

    - Build and Packaging
        - consistent / better use of CMake
        - targeting gcc again and defining minimum requirements

    - Logical Locking
        - write-locks included in 4.2.9
        - read-locks to be implemented

    - NetCDF microservices
        - released 4.2.8.0
        - 4.2.9.0 coming soon
        - full HDF5 support could come later

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - released 2.4.0
        - a few open issues to discuss
        - awaiting CI

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - adding ticket support to put/get
        - now in CI

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - uses new C++ REST API
        - preparing initial release

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - released 1.0.0
        - working on parallel transfer (multi-1247)
            - including with redirect for point-to-point with storage server
        - now in CI

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - released 4.2.9.0
        - released 4.2.9.1
            - detached mode was incorrectly redirecting
            - context was lost on server redirect
                - could not perform streaming transfers
                - temporary fix uses a cache file
        - now in CI

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - released 2.0.0
        - investigating large file transfers (NFS already trying parallel?)
        - needs better support for orchestration (k8s)
        - awaiting CI

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - updating to work with NIEHS schema used by Metalnx
        - updating for elasticsearch >= 7.0
        - working to incorporate geospatial / GeoJSON / bounding boxes
        - investigating second implementation for Apache Solr

    - [Publishing Capability](https://github.com/irods/irods_capability_publishing)
        - needs more README
        - awaiting CI

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - refactoring to abstract the source filesystem/object
            - considering kafka as source of events (for OMERO via debezium.io)
        - investigating splitting storage backends
            - celery workers -> redis
            - python/iRODS cache -> scylla (C++ distributed keystore)

    - [NetCDF microservices](https://github.com/irods/irods_netcdf)
        - ready for packaging for 4.2.8+
        - CyVerse has pre-release to test
        - full HDF5 support could come later

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
