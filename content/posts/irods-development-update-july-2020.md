Title: iRODS Development Update: July 2020
Date: 2020-07-21 09:00
Author: Terrell Russell
Slug: irods-development-update-july-2020
Status: published


We did it - the [Virtual iRODS User Group Meeting 2020](https://irods.org/ugm2020) was held last month.  We provided [a write-up of our process and outcomes]({filename}/posts/virtual-irods-user-group-meeting-2020-a-success.md).  We're pretty pleased with ourselves, given the circumstances.

We have recently released iRODS 4.2.8, PRC 0.8.3, NFSRODS 1.0, iRODS S3 Lambda 1.0 (and 1.1 and 1.2), Logical Quotas 4.2.8.0, and Hard Links 4.2.8.0.

Since the UGM, we have been hard at work on updating the authentication mechanism testing for PRC, adding a few more libraries for cleaner separation of concerns within the server, and begun preliminary work on a new iRODS Command Line Interface (CLI).  We continue work on intermediate replicas and logical locking for 4.2.9 alongside the new parallel transfer engine and direct streaming for the S3 plugin.

Everyone, please stay safe.


### July Technology Working Group

- [4.2.8](https://github.com/irods/irods/milestone/33)

    - released May 22

- [4.2.9](https://github.com/irods/irods/milestone/35)

    - 22 issues, 15 bugs
    - intermediate replicas
    - logical locking

- [4.2 Backlog](https://github.com/irods/irods/milestone/34)

    - 187 issues, 99 bugs

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 114 issues, 46 bugs
    - clang format
    - new logger (rsyslog or stdout)
    - irodsDelayServer refactoring / with implicit remote()
    - CentOS8 will be supported

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - progress towards SwaggerAPI
    - working towards demo of Metalnx-API-iRODS
    - next meeting - July 21, 2020, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - next meeting - July 28, 2020, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - August 19, 2020, 4pm ET
    - speaker TBD

- New Development Work

    - Atomic ACLs API plugin and microservice
        - API plugin fully implemented
        - microservice in development

    - [iRODS Command Line Interface (CLI)](https://github.com/irods/irods_client_cli)
        - single binary
        - eventual replacement for ~50 iCommands

    - Replica Access Table
        - new server side library
        - controls access to open replicas
        - introduced for parallel transfer engine

    - Replica Open API Plugin:
        - optimized version of rxDataObjOpen
        - on success, returns
            - iRODS file descriptor
            - all information about the replica as JSON

    - Replica Close API Plugin:
        - trimmed down version of rxDataObjClose
        - better for code handling parallel writes to the same replica
        - only closes the replica
        - provides options for controlling whether the server should:
            - update the catalog
            - compute a checksum

- Active Development Work

    - [Policy Composition](https://github.com/irods/irods_rule_engine_plugins_policy)
        - demonstrated at UGM2020
        - releases soon for storage tiering, indexing, publishing

    - [NetCDF microservices](https://github.com/irods/irods_netcdf)
        - modernizing packaging for 4.2.x

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - worked on memory leaks for multiple/looping microservice calls

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - new release soon with search and indexing update
        - want to turn on quotas visibility
        - testbed for metadata templates initial implementation
        - working to eventually remove database dependency
        - awaiting CI

    - [AWS S3 Lambda](https://github.com/irods/irods_client_aws_lambda_s3)
        - released 1.0 May 12
            - before UGM
            - s3 is a fully decoupled system
            - without ability to convey rename
            - loses data object metadata on rename
        - released 1.1 July 7
            - capture additional s3_event deletion
        - released 1.2 July 8
            - capture additional s3_event multipart creation
        - future release
            - could brute-force confirm checksums to detect renames
            - would persist metadata

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - released 4.2.8.0 May 22
        - added to CI

    - [Hard Links Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_hard_links)
        - released 4.2.8.0 May 22
        - added to CI
        - patch in progress for 4.2.9.0

    - C++-based REST API
        - working on packaging
        - part of new Data Transfer Nodes pattern

    - C++ S3 API
        - working on packaging
        - part of new Data Transfer Nodes pattern

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - released 4.2.8.0 May 22

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - released 0.8.3 June 4
        - developing multiple authentication test harness
        - awaiting CI

    - [Cacheless S3 Plugin / S3_Connector](https://github.com/irods/irods_resource_plugin_s3)
        - released 4.2.8.0 May 22
        - demonstrated integrated S3_connector into the new S3 plugin
            - added configurable minimum multipart part size (default is AWS)
            - added configurable default buffer size
            - fixed bug with reads that go beyond end of file to match POSIX behavior
            - added shared memory recovery in case of a crash
            - testing with SUSE and Ceph cluster
        - awaiting CI

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - released 1.0.0 June 4
        - awaiting CI

    - Parallel Transfer Engine
        - built on top of the IOStream/dstream library
        - has been updated to work with intermediate replicas

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - released 4.2.8.0 May 22
        - working to incorporate geospatial / GeoJSON / bounding boxes
        - second implementation coming for Apache Solr

    - [Publishing Capability](https://github.com/irods/irods_capability_publishing)
        - needs more README
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
    - Parallel Filesystem Integration
        - iRODS API plugin
        - have split BeeGFS and Lustre implementations into aggregator and listener
        - testing against known configurations        
    - SMBRODS project to surface iRODS as SMB
    - CockroachDB Database Plugin
    - Cloud Browser
    - Member Ticketing System

- Discussion
