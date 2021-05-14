Title: iRODS Development Update: May 2021
Date: 2021-05-14 14:00
Author: Terrell Russell
Slug: irods-development-update-may-2021
Status: published



It's happening.  Release season is upon us.  4.2.9 is down to just the release notes and plugin testing.
[NFSRODS](https://github.com/irods/irods_client_nfsrods) is nearing its release.  The
[Python iRODS Client](https://github.com/irods/python-irodsclient) will be 1.0 soon.  The
[iRODS Globus Connector](https://github.com/irods/irods_client_globus_connector) is out.
[Metalnx](https://github.com/irods-contrib/metalnx-web) with gallery/icon view is landing imminently.

The release notes for 4.2.9 are covering nearly 300 issues, the most in a very long time.  As it turns out, that's
what happens when new states (intermediate and locking) are added and everything needs to be refactored.

The Technology Update at the [2021 Virtual iRODS User Group Meeting]({filename}/pages/ugm2021.html) will be very dense this year.
Please make sure to register!

[The submission deadline is tomorrow]({filename}/pages/ugm2021/cfp.html) - send in your site reports, your integrations,
your big plans, your strategic thinking about data management policy, we want to learn from everyone.  And also, remember the
Best Student Technology Award - to be eligible, the student (from undergraduate to doctoral) must be a named author
on the submission and present their work at the User Group Meeting.

We're so close - hope everyone is safe.



### May Technology Working Group

- [4.2.9](https://github.com/irods/irods/milestone/35)

    - 15 bugs / 27 issues, 276 closed
    - intermediate replicas
    - logical locking
    - rule execution context (reiFiles) migrated to catalog
    - priority available to delayed rules

- [4.2.10](https://github.com/irods/irods/milestone/36)

    - 6 bugs / 11 open, 0 closed

- [4.2 Backlog](https://github.com/irods/irods/milestone/34)

    - 136 bugs / 252 open, 0 closed

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 38 bugs / 109 open, 109 closed
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

    - delay server now honors priority level (range 1-9, default 5)
    - ifsck does not terminate on sub-directory permission denied errors
    - checksums are erased on overwrite of a replica
        - checksums are not automatically updated on overwrite
            - this is a breaking change
    - checksums, if requested, will still be calculated and stored on failure
        - to help identify different replicas
    - considering having server absorb some specific queries
        - some specific queries do not work on all supported databases
            - found through the use of NFSRODS

- Active Development Work

    - Build and Packaging
        - consistent / better use of CMake
        - portable iCommands (for non-root users)
            - engineering build to CyVerse and Sanger
            - should be ready with 4.2.9
            - working to prepare manually for 4.2.8

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - uses new C++ REST API
        - readying for UGM

    - Logical Locking
        - write-lock implementation has landed - scoped by open and close
        - locks also affect non-open operations such as unlink and rename
        - tests continue to pass
            - continuing to discover/think about/fix edge cases
            - confidence increasing!
        - some documentation has been written, continuing effort

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
        - now supports anonymous login
        - working on gallery view (thumbnails) of collections
        - resource names now displayed correctly
        - error messages now honor configured download limit
        - displays error message when deletion of a collection fails
        - collection browser listing now sortable
        - awaiting CI

    - [C++-based REST API](https://github.com/irods/irods_client_rest_cpp)
        - working on packaging
        - being used by Zone Management Tool
        - https://github.com/irods/irods_client_rest_cpp
        - now in CI

    - C++ S3 API
        - working on packaging
        - part of new Data Transfer Nodes pattern

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - added parallel transfer (multithreaded put and get behavior)
        - added ichksum-like functionality
        - added queryable iRODS delay rule objects
        - added temporary passwords (Paul van Schayck)
        - JSON-oriented APIs must be binbytesbuf because of XML standard
            - introduces no inefficiencies for the binary protocol
            - means larger base64-encoded payloads when used from PRC
        - more sane logging behavior
        - refresh visibility of atomic metadata within the session that changed it
        - true client/server isolation now possible for object registration tests
        - now in CI

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - ready for 4.2.9
        - now in CI

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
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
