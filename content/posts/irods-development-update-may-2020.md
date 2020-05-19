Title: iRODS Development Update: May 2020
Date: 2020-05-18 19:00
Author: Terrell Russell
Slug: irods-development-update-may-2020
Status: published


We are still working very hard on all the things, but of course, from home.  Be safe everyone.

This month has seen many things come together for both 4.2.8 and the iRODS User Group Meeting in June.  We have a release candidate and are now running the core code and more than a dozen plugins through their paces across three databases and three operating systems.  We're very close.

[We have sent notification to nearly 20 accepted talks](https://irods.org/ugm2020) for our virtual UGM.  The agenda will be posted very soon.  Please share the information widely and encourage virtual attendance among your colleagues.

We'll be sprinting for these last few days.  We're very excited to share so many new things with everyone.


### May Technology Working Group

- [4.2.8](https://github.com/irods/irods/milestone/33)

    - 3 issues, 0 bugs
    - multiple new libraries
    - client API whitelist
    - flow control in the rule engine plugin framework
        - continuation
        - '_finally' PEPs
    - updates externals
    - Ubuntu18 will be supported

- [4.2.9](https://github.com/irods/irods/milestone/35)

    - 24 issues, 17 bugs
    - intermediate replicas
    - logical locking

- [4.2 Backlog](https://github.com/irods/irods/milestone/34)

    - 167 issues, 90 bugs

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 112 issues, 43 bugs
    - clang format
    - new logger (rsyslog or stdout)
    - irodsDelayServer refactoring / with implicit remote()
    - CentOS8 will be supported

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - progress towards SwaggerAPI
    - working towards demo of Metalnx-API-iRODS
    - next meeting - May 19, 2020, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - next meeting - May 26, 2020, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - May 20, 2020, 4pm ET
    - iRODS 7th Generation Build and Test Infrastructure
    - Jaspreet Gill, iRODS Consortium

- New Development Work

    - Policy Composition
        - implemented Data Transfer Nodes as composition
        - applying philosophy to existing plugins
            - indexing
            - tiering
        - query processor policy engine
        - event handlers for data objects, collections, resources
        - added conditionals
        - completed support for metadata driven configuration

- Active Development Work

    - [NetCDF microservices](https://github.com/irods/irods_netcdf)
        - modernizing packaging for 4.2.x

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - worked on memory leaks for multiple/looping microservice calls

    - [AWS S3 Lambda](https://github.com/irods/irods_client_aws_lambda_s3)
        - added S3->SQS->Lambda support, with batch_size=1
        - 1.0 release
            - before UGM
            - s3 is a fully decoupled system
            - without ability to convey rename
            - loses data object metadata on rename
        - later release
            - could brute-force confirm checksums to detect renames
            - would persist metadata

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - will release with 4.2.8
        - added to CI

    - [Hard Links Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_hard_links)
        - will release with 4.2.8
        - added to CI

    - C++-based REST API
        - working on packaging
        - part of new Data Transfer Nodes pattern

    - C++ S3 API
        - working on packaging
        - part of new Data Transfer Nodes pattern

    - [Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - will release with 4.2.8

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - will release new version by UGM
        - awaiting CI

    - [Cacheless and Detached S3](https://github.com/irods/irods_resource_plugin_s3)
        - finished implementation of S3_connector
            - added unit tests
        - integrating S3_connector into the new S3 plugin
            - implemented open, close, seek, and read
            - looking to discover any unimplemented use cases
        - awaiting CI

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - will release 1.0 for UGM
        - no parallel transfer, investigating
        - awaiting CI

    - Parallel Transfer Engine
        - based on new dstream operator
        - available via new C++ client library
        - all new transfers within iRODS will use this single method to move data

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - working to incorporate geospatial / GeoJSON / bounding boxes
        - working with Sanger on more robust metadata schema for elasticsearch
        - will release with 4.2.8
        - second implementation coming for Apache Solr

    - [Publishing Capability](https://github.com/irods/irods_capability_publishing)
        - needs more README
        - looking to support DataVerse as target (via Odum Institute)
        - bumping release until after 4.2.8

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
            - Metalnx
            - NFSRODS
        - OS (to be added)
            - CentOS8
            - Ubuntu20
            - SUSE Linux Enterprise Server (SLES)
        - maybe later
            - CephFS via unixfilesystem
            - gsi
            - Nestle R Client Library
            - Ceph RADOS resource plugin
            - CockroachDB database plugin
            - QueryArrow database plugin

- Background Items

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - working to eventually remove database dependency
        - testbed for metadata templates initial implementation
        - search and indexing update is very fast
        - want to turn on quotas visibility
        - awaiting CI
    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - refactoring to abstract the source filesystem/object
            - considering kafka as source of events (for OMERO via debezium.io)
        - investigating splitting storage backends
            - celery workers -> redis
            - python/iRODS cache -> scylla (C++ distributed keystore)
    - Parallel Filesystem Integration
        - iRODS API plugin
        - have split BeeGFS and Lustre implementations into aggregator and listener
        - testing against known configurations        
    - SMBRODS project to surface iRODS as SMB
    - CockroachDB Database Plugin
    - Cloud Browser
    - Member Ticketing System

- Discussion
