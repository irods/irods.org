Title: iRODS Development Update: November 2021
Date: 2021-11-24 12:00
Author: Kory Draughn
Slug: irods-development-update-november-2021
Status: published


So Supercomputing 2021 happened and while it was very different, it was great being able to see so many people in tech again.

This month we saw many improvements to the main server. Server-to-server negotiation and semantics around managing users and groups have been tightened up. The server also grew a new configuration option that allows administrators to apply a limit on the amount of memory available to the delay server. No more out-of-memory errors! The checksum API received some updates to make reacting to verification results better as well.

The Docker-based Testing Environment has grown support for SSL. We've modularized the code a bit more so that it is easier to maintain and development is still progressing smoothly. If you can run docker, then you can run the test suite. If that sounds interesting, give it a try. Your feedback will help us produce a better tool.

The Indexing Capability Plugin has received numerous fixes, major and minor. One exciting aspect is that it is now interoperable with Metalnx and the NIEHS developed global-search endpoint. Expect a release of Indexing Capability 4.2.10.1 very soon.

The C++ REST API and Python iRODS Client have grown full support for tickets. We are actively preparing releases for both projects.

We've finally seen NFSRODS successfully transfer a file in parallel. This is all possible due to Jargon's newly added support for replica access tokens and multi-1247 parallel I/O. We have a few more things to work out for NFSRODS, so stay on the lookout for the next release. It's going to be so good!

Last but not least, there's been some discussion around replacing imcoll and the structured file APIs. Take a look at the Discussion section for information around that.

Well, that wraps up this month's update. iRODS 4.2.11 is right around the corner, so stay tuned!


### November Technology Working Group

- [4.2.11](https://github.com/irods/irods/milestone/37)

    - 20 bugs / 40 open, 73 closed

- [4.2 Backlog](https://github.com/irods/irods/milestone/34)

    - 132 bugs / 236 open, 0 closed

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 46 bugs / 164 open, 121 closed
    - clang format
    - new logger (rsyslog or stdout)
    - irodsDelayServer refactoring / with implicit remote()
    - support for HA (single irodsDelayServer defined in the catalog)
    - support for Ubuntu20
    - GenQuery reimplemented in flex/bison
    - unified server_config.json
    - plugin-driven authentication framework
    - Python3 support (control scripts and Python rule engine plugin)
    - now uses a PID file

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort will be an OMERO integration
    - working meeting
        - Thur, January 20, 2022, 10am ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - progress towards SwaggerAPI
    - working towards demo of Metalnx-API-iRODS
    - working meeting
        - Tues, February 15, 2022, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - working meeting
        - Tues, January 25, 2022, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - initial effort will be a MinIO gateway and integration services
    - working meeting
        - Fri, December 3, 2021, 3pm ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, December 1, 2021, 4pm ET
    - speakers TBD

- New Development Work

    - federated servers with mismatched negotiation keys results in negotiation errors
    - adjusted handling of users and groups in the iRODS server
        - remote groups are no longer allowed
        - rodsgroups can no longer have passwords
        - user zones can no longer be modified
        - users can no longer be changed to groups and vice versa
    - a memory limit can now be applied to the delay server’s delay queue
    - checksum API returns error to clients if verification finds issues
        - ichksum returns an error to the OS
        - verification results are returned to the client as a JSON string

- Active Development Work

    - Build and Packaging
        - consistent / better use of CMake
        - targeting gcc again and defining minimum requirements

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - broke up run_test.py script for better maintainability
	    - topology and federation use different scripts
	    - simplifies implementation and management of options
        - added support for SSL

    - NetCDF microservices
        - 4.2.10.0 coming soon
        - full HDF5 support could come later

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - released 2.5.1
            - links to sub-collections with spaces in the name are clickable
        - minor key event bug fixes and enhancements
            - return key submits global search field
        - awaiting CI

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - exposed full support of the ticket API
        - exposed new options for the /query endpoint
            - options controlling case-sensitivity and row uniqueness
        - preparing 0.9.0 release

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - added new health check dashboard
            - can run various checks (built-ins and custom)
            - admins can create custom check-files
        - admins can now define parent context string in tree view
        - released 0.1.0

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - added full support for tickets
            - create, query, supply, modify, delete
        - improved usefulness for Debian Linux
            - replaced xmlrunner with unittest-xml-reporting
        - available in upcoming release
            - support for targeting a specific rule engine instance
            - support for checksum functionality
            - support for ErrorStack messages
        - now in CI

    - [R client (rirods)](https://github.com/irods/irods_client_library_r_cpp)
        - doing investigation / packaging for 4.2.x
        - in support of the new R Consortium proposal

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - implemented full support for Glacier
            - awaiting official release of it and libs3
        - now in CI

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - have fix for large file transfers
            - enabled through new Jargon parallel transfer API
            - demonstrated through custom build of client
        - awaiting CI

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - preparing 4.2.10.1 release
        - includes fixes for major issues
        - interoperable with Metalnx and NIEHS developed global-search endpoint

    - [Publishing Capability](https://github.com/irods/irods_capability_publishing)
        - needs more README
        - awaiting CI

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - refactored to abstract the source filesystem/object
            - considering kafka as source of events (for OMERO via debezium.io)
        - investigating splitting storage backends
            - celery workers -> redis
            - python/iRODS cache -> scylla (C++ distributed keystore)
        - implementing a docker-based performance test harness

    - [Continuous Integration (CI)](https://github.com/irods/irods_testing_jenkins)
        - targeting docker-compose, generation 8
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

    - Logical Locking
        - read-locks to be implemented

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

    - replace structured file APIs and commands (i.e. imcoll)
        - does anyone depend on the functionality of imcoll?
        - https://github.com/irods/irods/issues/5986 

    - remove parent resource check when adding resource as child
        - makes changing the parent resource atomic
        - removes one step (i.e. removing the child is not necessary)
        - https://github.com/irods/irods/issues/5934

