Title: iRODS Development Update: August 2022
Date: 2022-08-30 17:00
Author: Kory Draughn
Slug: irods-development-update-august-2022
Status: published


Hello everyone! August is on its way out and that means it's time for another development update.

To start things off, TRiRODS was a success. Our interns did a wonderful job on their projects and presentations. If you're interested in hearing about their experience, you can view their talks online at [https://irods.org/trirods](https://irods.org/trirods).

The iRODS 4.3 server has received some improvements. The main iRODS server process now supports live reloading of **server_config.json**. Another notable improvement is that the `remote()` microservice now honors the `INST_NAME` hint. This will allow users to not only target a specific server, but also target a specific Rule Engine Plugin, just like the `delay()` microservice. Work has also been done to disallow downgrades of the iRODS user account used to manage an iRODS server. This change helps to prevent users and applications from breaking a deployment.

We are also working with SURF to make PAM authentication the default scheme for authenticating with an iRODS server. Leveraging the [PAM interactive](https://github.com/stefan-wolfsheimer/irods/tree/interactive_pam) work SURF is doing means iRODS can support different authentication schemes all while providing a more dynamic conversation with clients. Please see the [Authentication Working Group minutes](https://github.com/irods-contrib/irods_working_group_authentication) for additional details.

On the client-side, Metalnx is seeing some improvements. Metalnx now honors the `compute.checksum` property in metalnx.properties. Data objects can now be downloaded using tickets. We are working on a few more bug fixes, so you can expect a new release soon.

The C++ REST API has received some big enhancements as well. Two new endpoints have been added to the API, `/metadata` and `/logicalpath`. As hinted by the name, `/metadata` is all about manipulating metadata. It is backed by the atomic metadata operations API. The `/logicalpath` endpoint gives users a way to interact with data objects and collections outside of just reading and writing to them. With this endpoint, users will be able to rename and unlink objects.

Several plugins have been improved this past month. The S3 Resource Plugins for the 4.3 series and 4.2 series now support Amazon Glacier / Deep Archive. Not only that, but several bugs have been fixed as well (e.g. support for `itouch` and `istream --append`).

Work on the Indexing Capability Plugin has been merged. It now handles configuration properties that accept integers and strings more gracefully. It also handles `iput --metadata` without any issues. Work to support an SSL-capable elasticlient is in full swing too.

Work to replace all use of the Jansson JSON library in the Audit AMQP Rule Engine Plugin has been going well. Aside from the plugin, the [ELK stack](https://github.com/irods/contrib/tree/main/irods_audit_elk_stack), used for training, has received some major updates. All components in the project have been updated to a supported version. The project now works with the iRODS 4.3 series and 4.2 series.

We hope you found this month's development update exciting. See you next month!


### August Technology Working Group

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - working on whitepaper covering WG activities and findings
    - working meeting
        - Tues, August 16, 2022, 10am ET

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - awaiting word on CZI proposal for sync agent
    - working meeting
        - Thur, August 18, 2022, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - working meeting
        - Tues, August 23, 2022, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - MinIO has deprecated the gateway interface
    - discussion has shifted focus to custom S3 implementation
    - working meeting
        - Fri, August 5, 2022, 3pm ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, August 10, 2022, 4pm ET
    - iRODS Summer Interns 2022 (5!)

- [4.2.12](https://github.com/irods/irods/milestone/38)

    - 31 bugs / 59 open, 45 closed

- [4.3.1](https://github.com/irods/irods/milestone/39)

    - 33 bugs / 152 open, 6 closed
    - goals
        - support for HA (single irodsDelayServer defined in the catalog)
        - GenQuery reimplemented in flex/bison

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 134 bugs / 278 open, 0 closed

- New Development Work

    - expanding documentation around data objects, replicas, and related APIs
        - https://github.com/irods/irods_docs/pull/149

    - working on experimental policy cookbook and library examples documentation
        - https://github.com/irods/irods_docs/pull/148

    - working on project templates for implementing iRODS components using C/C++
        - clients, microservices, rule engine plugins, api plugins, and resource plugins
        - includes various github actions for checking correctness, etc.

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - working with SURF to officially support pam_interactive auth plugin
            - targeting 4.3.1 or 4.3.2
        - dropped support for Kerberos auth plugin
        - implemented change that makes remote() honor INST_NAME hint
            - supported by Native Rule Engine Plugin and Python Rule Engine Plugin
        - added configuration reload facility to main server process
        - invoking external scripts/binaries no longer results in log errors
            - leverages Boost.Process library
        - adding new C++ ticket API wrapper
        - fixed C++ ODR violations with metadata library
        - server no longer allows downgrade of rodsadmin user who manages a server
        - modernizing and cleaning up main server logic (rodsServer.cpp)
        - added github action for clang-tidy

    - Build and Packaging
        - investigating CMake Presets
        - merged various packaging fixes for 4.3.0
        - updated icommands userspace tarball packager
        - adding boost/Qt5-style build system targets
        - consistent / better use of CMake
        - targeting gcc/libstdc++ again and defining minimum requirements
        - entered early stages of moving externals to use standard packaging tools
            - rpmbuild and dpkg-buildpackage

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - fixed rsyslog issues for CentOS 7 and Almalinux 8

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - added support for building plugins on Almalinux 8, Debian 11, and Ubuntu 20.04
        - added debugger and runner images for Almalinux 8, Debian 11, and Ubuntu 20.04
        - added various other enhancements

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - fixed download issues with tickets
            - server now honors compute.checksum property
        - separated compilation of the JAR file from the building of the docker image
        - working on UI consistency
            - metadata templates
        - awaiting CI

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - adding metadata endpoint (uses the atomic metadata operations API)
            - https://github.com/irods/irods_client_rest_cpp/pull/115
        - adding logicalpath endpoint for data objects and collections
            - https://github.com/irods/irods_client_rest_cpp/pull/116
            - supports unlink and rename
        - investigating ways to improve the implementation
            - performance and maintainability
        - awaiting CI

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - released 0.2.0, requires C++ REST API 0.9.1
        - supports remote zones and users
        - supports default and custom checkfiles
        - supports specific query management

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - released 1.1.4 (targets iRODS 4.3.0)
        - now in CI

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - now passes full test suite
        - incorporating fixes for Python 3 syntax and GenQuery iterator
        - should consider a later Python 3.x (3.6 EOL pretty soon)

    - [R client (rirods)](https://github.com/irods/irods_client_library_r_cpp)
        - considering the use of the C++ REST API instead of the iRODS runtime
            - simplifies dependencies and accessibility to iRODS
            - can be a pure R client, no C++/compiling in user's environment
        - latest work https://github.com/irods/irods_client_library_r_cpp/pull/5 
        - Docker container?   Alternative ways to get irods dev tooling?
        - in support of the new R Consortium proposal

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - implemented Glacier / Deep Archive support for 4.3 and 4.2 series
        - fixed multiple bugs
            - itouch (#1978)
            - support for stat() prior to file close, fixes istream --append (#2078)
            - fixed invalid translation of POSIX open flags to dstream openmode (#2079)
            - detect negative value for RESTORATION_DAYS (#2075)
                - provides warning when default value is being used
        - now in CI

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - released 4.3.2.5-RELEASE

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - adding option that allows compilation in environments without TTY support
        - replication resources are not yet supported
            - for details, see https://github.com/irods/irods/issues/6142
        - awaiting CI

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - privilege checks only apply to irule invocations
        - handles touch API PEPs

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - merged flexible int/string config variables PR (issue #91)
        - merged iput –metadata fix (issue #92)
        - integrating support for SSL-capable elasticlient

    - [Publishing Capability](https://github.com/irods/irods_capability_publishing)
        - needs more README
        - awaiting CI

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - implementing character-map translation for paths of ingested objects (#166)
            - original POC implemented using “pre” event handler

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - updated example ELK stack project
            - https://github.com/irods/contrib/tree/main/irods_audit_elk_stack
            - replaced logstash with python script
            - updates elastic, kibana, etc to supported versions
            - new startup script sets up the kibana index pattern and dashboard
            - dashboard visualization now looks for both 4.2 and 4.3 PEP names
            - includes README
        - replacing all use of jansson JSON library with nlohmann JSON library

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

    - [iRODS Command Line Interface (CLI)](https://github.com/irods/irods_client_cli)
        - single binary
        - eventual replacement for ~50 iCommands
        - ls/put/get/rm/cp/repl/query
        - https://github.com/irods/irods_client_cli

    - [Hard Links Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_hard_links)
        - awaiting more use cases before release
        - https://github.com/irods/irods_rule_engine_plugin_hard_links

    - [AWS S3 Lambda](https://github.com/irods/irods_client_aws_lambda_s3)
        - future release
            - could brute-force confirm checksums to detect renames
            - would persist metadata
        - could use atomic database operations to increase batch size > 1
        - https://github.com/irods/irods_client_aws_lambda_s3

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)

    - Parallel Filesystem Integration
        - iRODS API plugin
        - have split BeeGFS and Lustre implementations into aggregator and listener
        - testing against known configurations

    - SMBRODS project to surface iRODS as SMB

    - CockroachDB Database Plugin

    - Cloud Browser

    - Member Ticketing System

    - [NetCDF microservices](https://github.com/irods/irods_netcdf)
        - released 4.2.9.0, 4.2.10.0, and 4.2.11.0
        - full HDF5 support could come later

- Discussion

    - tickets, permissions, and sharing data - a question about expectations
        - https://github.com/irods/irods/issues/6501

