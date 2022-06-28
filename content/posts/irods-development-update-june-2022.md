Title: iRODS Development Update: June 2022
Date: 2022-06-28 17:00
Author: Kory Draughn
Slug: irods-development-update-june-2022
Status: published


First off, for people who may have missed it, [iRODS 4.3.0 is available now](https://irods.org/2022/06/irods-4-3-0-is-released/)!

Our annual User Group Meeting (UGM) is only one week away as well! You can read more about that [here](https://irods.org/ugm2022/).

One more thing before we get into the development update ... Five new interns have joined us for the summer! We'll talk more about what they're working on at UGM.

With that said, let's talk about what's happened since last month.

Support for Almalinux 8, Debian 11, and Ubuntu 20.04 has been improved in the Development Environment and Testing Environment.

Debugging tools and runner images have been added to the Development Environment. The Testing Environment can now launch containers on remote computers via the Docker daemon. Not only that, but MySQL 8 can now be used for testing.

Since we're on the topic of MySQL, users who prefer MySQL as their database will be happy to know that the database schema for it has been tweaked to fully support UTF-8. However, this change applies to new installations of iRODS 4.3.0 only. Existing deployments will remain as-is.

The Metadata API provided by the Python iRODS Client (PRC) now supports the `ADMIN_KW` keyword. This change improves the developer experience around managing metadata by removing the need for complicated permission handling logic. Users relying on PAM for authentication will be happy to know that the PRC now escapes special characters in PAM passwords.

Work on the Indexing Capability has been merged. This includes improved handling of configuration integer/string values and support for `iput --metadata`.

To wrap up, we've been discussing how to present iRODS as an S3 endpoint. MinIO was the original choice for providing this functionality. However, MinIO has officially dropped support for its gateway interface. For that reason, we are now considering the idea of implementing the S3 API directly. If you're interested in that, please reach out to us.

iRODS 4.3.0 contains so many improvements and we can't wait to talk about them at UGM.

See you next month!


### June Technology Working Group

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - progress towards SwaggerAPI
    - working towards demo of Metalnx-API-iRODS
    - working meeting
        - Tues, June 21, 2022, 10am ET

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort will be an OMERO integration
    - working on CZI proposal for sync agent
    - working meeting
        - Thur, June 16, 2022, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - working meeting
        - Tues, June 28, 2022, 10am ET

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

    - 29 bugs / 48 open, 41 closed

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - Released June 12, 2022!
    - 306 issues closed
    - goals
        - clang format
        - new logger (rsyslog or stdout)
        - irodsDelayServer refactoring / with implicit remote()
        - support for HA (single irodsDelayServer defined in the catalog)
        - GenQuery reimplemented in flex/bison
        - unified server_config.json
        - plugin-driven authentication framework
        - Python 3 support (control scripts and Python rule engine plugin)
        - support for Ubuntu 20, Debian 11, AlmaLinux 8, and Rocky Linux 8

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 133 bugs / 269 open, 0 closed

- New Development Work

    - submitted demo of FCS parsing and ingesting of header key-value pairs as metadata

- Active Development Work

    - [iRODS Server (4.3.0)](https://github.com/irods/irods)
        - renamed pam authentication scheme to pam_password
        - Kerberos authentication will not be released alongside 4.3.0
        - enabled full support of utf-8 for MySQL backed deployments
            - applies to new installations only

    - Build and Packaging
        - merged various packaging fixes for 4.3.0
        - updated icommands userspace tarball packager
        - adding boost/Qt5-style build system targets
        - consistent / better use of CMake
        - targeting gcc/libstdc++ again and defining minimum requirements
        - entered early stages of moving externals to use standard packaging tools
            - rpmbuild and dpkg-buildpackage

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - added support for Almalinux 8, Debian 11, and Ubuntu 20.04
        - fixed rsyslog not running on some platforms and being misconfigured on others
        - added support for MySQL 8 for some platforms
        - added support for remote daemon execution via ssh client in scripts

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - added support for building plugins on Almalinux 8, Debian 11, and Ubuntu 20.04
        - added debugger and runner images for Almalinux 8, Debian 11, and Ubuntu 20.04
        - added various other enhancements

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - addressing hard-wired name for metadata indices in search endpoint
        - working on UI consistency
            - metadata templates
        - awaiting CI

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - released 0.9.1, should be run behind https proxy
        - supports changing passwords
        - no longer logs password information
        - awaiting CI

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - released 0.2.0, requires C++ REST API 0.9.1
        - supports remote zones and users
        - supports default and custom checkfiles
        - supports specific query management

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - added support for the ADMIN_KW to the metadata API
        - PAM password characters are now escaped
            - adapted solution from Lazlo Westerhof
        - tests are now passing for iRODS 4.3.0
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
        - testing against Spectralogic Vail
        - now in CI

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - released 4.3.2.5-RELEASE

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - released 2.0.4 and 2.1.0
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

    - [iRODS Command Line Interface (CLI)](https://github.com/irods/irods_client_cli)
        - single binary
        - eventual replacement for ~50 iCommands
        - ls/put/get/rm/cp/repl/query

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

    - NetCDF microservices
        - released 4.2.9.0, 4.2.10.0, and 4.2.11.0
        - full HDF5 support could come later

- Discussion

     - presenting iRODS as S3 still top of mind for community
        - burned twice by other open projects
        - could be C++ S3 API, or built atop REST

     - documentation for 4.3.0, needs to be updated
        - done, had a stale local installation when building the docs

