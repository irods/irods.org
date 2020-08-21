Title: iRODS Development Update: August 2020
Date: 2020-08-21 09:00
Author: Terrell Russell
Slug: irods-development-update-august-2020
Status: published


Another month from home, another month of development with a great team.

The work on the S3 plugin and connector are complete, as is the work on the parallel transfer engine. The new [iRODS Command Line Interface (CLI)](https://github.com/irods/irods_client_cli) is methodically being populated with new subcommands to exercise some of the new parallel endpoints being exposed in the server.  We are finalizing the connection between NFSRODS and the Hard Links Rule Engine Plugin to support hard links within the NFSv4.1 mountpoint.

And earlier this week, we hosted the most recent [TRiRODS](https://irods.org/trirods) which demonstrated usage of the new [iRODS Container Storage Interface (CSI) Driver for Kubernetes](https://www.youtube.com/watch?v=6FOa6iyp7t0&list=PL29FhEN41mZNrmk7D7icrqt_fWsi_h6ye).

A final note, we are hiring an additional core C++ software developer(!).  If you're reading this and want to work with us, please get in touch.


### August Technology Working Group

- [4.2.9](https://github.com/irods/irods/milestone/35)

    - 37 issues, 14 bugs
    - intermediate replicas
    - logical locking

- [4.2 Backlog](https://github.com/irods/irods/milestone/34)

    - 192 issues, 101 bugs

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 114 issues, 45 bugs
    - clang format
    - new logger (rsyslog or stdout)
    - irodsDelayServer refactoring / with implicit remote()
    - CentOS8 will be supported

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - progress towards SwaggerAPI
    - working towards demo of Metalnx-API-iRODS
    - next meeting - August 18, 2020, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - next meeting - August 25, 2020, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - August 19, 2020, 4pm ET
    - Illyoung Choi, CyVerse
    - iRODS Container Storage Interface (CSI) Driver

- New Development Work

    - Rule Engine Plugin Framework
        - RULE_ENGINE_SKIP_OPERATION no longer skips post PEPs 
            - required to make Hard Links play well with others

- Active Development Work

    - [iRODS Command Line Interface (CLI)](https://github.com/irods/irods_client_cli)
        - single binary
        - eventual replacement for ~50 iCommands
        - ls/put/get/rm/cp

    - Prototype RPC API framework
        - Leverages design from Authentication Working Group
        - Supports synchronous and asynchronous operations
        - Allows for pause, resume, and cancellation of operations
        - Allows for parallel server side behavior

    - [Policy Composition](https://github.com/irods/irods_rule_engine_plugins_policy)
        - releases soon for storage tiering, indexing, publishing

    - [NetCDF microservices](https://github.com/irods/irods_netcdf)
        - modernizing packaging for 4.2.x
        - working with CyVerse
        - full HDF5 support could come later

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - fixed map() method of PluginContext, now working for all PEPs
        - worked on memory leaks for multiple/looping microservice calls

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - new release soon with search and indexing update
        - want to turn on quotas visibility
        - testbed for metadata templates initial implementation
        - working to eventually remove database dependency
        - awaiting CI

    - [Hard Links Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_hard_links)
        - patch in progress for 4.2.9.0

    - C++-based REST API
        - working on packaging
        - part of new Data Transfer Nodes pattern

    - C++ S3 API
        - working on packaging
        - part of new Data Transfer Nodes pattern

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - merged multiple authentication test harness
        - awaiting CI

    - [Cacheless S3 Plugin / S3_Connector](https://github.com/irods/irods_resource_plugin_s3)
        - streaming transport is passing all tests
        - will do some reorganization of the code before release
        - awaiting CI

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - working on correct Hard Links usage
        - awaiting CI

    - Parallel Transfer Engine
        - complete - merged into master

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
