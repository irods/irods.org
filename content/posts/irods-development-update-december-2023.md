Title: iRODS Development Update: December 2023
Date: 2023-12-18 10:00
Author: Kory Draughn
Slug: irods-development-update-december-2023
Status: published


Congratulations! This is the final development update for 2023!

Let's start off by talking about packaging. As mentioned in previous development updates, we are putting a great deal of effort into improving the packaging of iRODS software. One way we're accomplishing that is by reducing the number of externals packages needed by iRODS. For instance, **pistache** and **mungefs** will no longer be shipped as externals packages. Not only that, but **libs3** is being moved into the S3 resource plugin repository. We're also making adjustments so that iRODS code compiles against **libstdc++**. This is important because most UNIX-like OS ship with **libstdc++** already installed.

The Python iRODS Client (PRC) has seen some significant progress in the authentication department. Compatibility with the iRODS 4.3 **pam_password** authentication scheme has been achieved. This is the first step towards the PRC supporting the new authentication plugin framework. Users can expect support for this new authentication scheme in the next release of the PRC.

Users of the NetCDF project and the Globus Connector will be happy to know these projects are now compatible with iRODS 4.3.1. Packages are available at [packages.irods.org](https://packages.irods.org).

We're very close to a new release of NFSRODS. We updated the Dockerfile to use Ubuntu 22.04. NFSRODS does a better job at avoiding stale file handles. And as always, we're investigating ways to improve performance.

Jargon has received a few improvements too. We've added some support for the new permission levels which were exposed with the release of iRODS 4.3.0. The methods for detecting the version of the connected server have been expanded too.

Support for `podman` was added to the iRODS Testing Environment. Big thanks to Marco Roeland for the contribution.

Some users may have noticed we haven't released the Indexing Capability plugin for iRODS 4.3.1. The reason for this is captured in [issue #128](https://github.com/irods/irods_capability_indexing/issues/128). TLDR: We have to replace functionality provided by the elasticlient/CPR library. If you have suggestions on how to best handle this, please leave a comment in the issue.

I think it's safe to say iRODS has had a fantastic year. iRODS 4.2.12 closes out the 4.2 series with improved stability and a set of features that allow users to get work done. The release of iRODS 4.3.1 is a huge accomplishment. It is the definitive version of iRODS and sets the stage for increasing adoption. We also want to thank the community for its support and we ask that you continue to open issues and think of interesting ways to improve data management for everyone.

Happy Holidays and see you in the new year!


### December Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - looking at UNC and/or NSF funding opportunities
    - working meeting
        - Thur, January 18, 2024, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - working meeting
        - Tues, January 23, 2024, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - developing C++ S3 implementation
    - working meeting
        - Fri, January 5, 2024, 3pm ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - draft paper for circulation among group
    - working on microservices
    - working meeting
        - Tues, December 19, 2023, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, February 14, 2024, 4pm ET
    - speaker, TBD

- [4.3.1](https://github.com/irods/irods/milestone/39)

    - released October 20, 2023

- [4.3.2](https://github.com/irods/irods/milestone/40)

    - 88 bugs / 313 open, 14 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 132 bugs / 290 open, 0 closed

- [4.4.0](https://github.com/irods/irods/milestone/41)

    - 3 bugs / 18 open, 0 closed

- New Development Work

    - demonstrated iRODS 4.3.1 accessing Google Drive via rclone mount
        - as iRODS unixfilesystem resource
        - all worked except ibun (could make it work with a workaround)
    - demonstrated iRODS S3 plugin pointing to new S3 API
        - https://irods.org/trirods 

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - considering making the next major release be iRODS 5.0 instead of iRODS 4.4
            - https://github.com/irods/irods/issues/7361
            - completes our federation promise for compatibility with iRODS 3
            - allows us to start a new conversation about backwards compatibility
            - allows us to make improvements to packaging
        - considering deprecating msiSendMail
            - removes dependency on postfix and mail
            - possibly replaced by an external microservice plugin with enhanced capabilities
                - built on top of CURL development libraries

    - Build and Packaging
        - adding boost/Qt5-style build system targets
        - consistent / better use of CMake
        - iRODS 4.4 (5.0?) will be built against libstdc++
        - removed pistache from externals

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - removed most Python 2 packages

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - support for podman contributed by Marco Roeland
            - https://github.com/irods/irods_testing_environment/pull/180

    - [iRODS GenQuery2](https://github.com/irods/irods_api_plugin_genquery2)
        - packages for 4.2 and 4.3 can be built using the iRODS Development Environment
            - use the plugin builder images

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - released 0.1.0
        - investigating the idea of switching to an OAuth protected resource
        - working on adding HTTPS support for well-known endpoint query
        - working on OIDC JWT verification

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - released 1.1.9
        - added support for managing and querying quotas
        - achieved iRODS 4.3 pam_password compatibility
        - working on fix for data size / resource freespace compatibility
        - working on TTL fix

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - released for 4.3.1

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - investigated issue with decoupled mode not being honored after a server redirect
        - investigating issue with appending data via istream
            - caused by iRODS doing a stat before the file exists in S3
            - stat fails because the cache file has not be closed and stored in S3
        - began process of absorbing libs3 into repository
            - re-licensed plugin to LGPLv3/GPLv2
            - will remove libs3 as an externals package

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - ready for 4.3.1 release

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - released 0.1.0
        - added/updated tests
        - built a unittest docker framework
        - resolved issues
            - only include headers in SignedHeaders list for signature calculation
            - copy operation now sets copy_options::overwrite_existing flag
            - corrected GetBucketLocation operation
            - fixed MinIO chunk transfer encoding issue by manually parsing the upload chunks
        - additional features
            - added support for setting the region
            - implemented GetObjectLockConfiguration
            - implemented HeadBucket
        - removing Boost.URL submodule, will use externals package instead
        - will be refactored to not use coroutines, to help the transition to libstdc++

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - preparing release of 4.3.3.0
        - added option to test framework that allows users to install other versions of iRODS 4.3
        - updated FilePermissionEnum to support new permission levels
        - added server version detection methods for iRODS 4.3
        - StartupPack now sends the correct value for &lt;option&gt; element

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - preparing 2.2.0 release
        - changed base OS of Docker image to Ubuntu 22.04
        - server clears more caches to avoid stale file handle errors
        - removed unnecessary stat in list operation
        - investigating performance improvements related to concurrent usage

    - [mungefs](https://github.com/irods/mungefs)
        - removed dependency on externals, can be built as a standalone project

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - release for 4.3.1 postponed until situation with elasticlient is resolved
            - https://github.com/irods/irods_capability_indexing/issues/128

    - [NetCDF microservices](https://github.com/irods/irods_netcdf)
        - ready for 4.3.1 release

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - released for 4.3.1

    - [Metadata Guard](https://github.com/irods/irods_rule_engine_plugin_metadata_guard)
        - released for 4.3.1

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - released for 4.3.1

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - released for 4.3.1
        - next stage of refactor
            - add support for handling multiple AMQP endpoints
            - improve stewardship of AMQP connections
            - improve handling of connection errors
        - merged updated example ELK stack (used for training)

    - [CURL microservices](https://github.com/irods/irods_microservice_plugins_curl)
        - released for 4.3.1

- Background Items

    - [iRODS Command Line Interface (CLI)](https://github.com/irods/irods_client_cli)
        - added support for many basic operations
            - ls, mv, tree, mkdir, get, put, cd, pwd, touch, etc
        - presented at UGM 2023

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - released 0.4.2
        - implemented PUT_SYNC from an S3 source/bucket
        - updated from single stream to multi-stream PUT, is now faster

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - now compatible with iRODS 4.3.1
        - added support for remembering rows per page
            - /servers, /resources, /users, /groups
        - added ability to view ticket information
            - ticket creation not supported yet
        - added ability to change where the delay server is run
            - retrieving where the delay server runs is not supported yet

    - [iRODS Documentation](https://github.com/irods/irods_docs)
        - documented iRODS XML protocol
        - roadmap has been approved and published
            - https://irods.org/roadmap

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - working towards removing the required local database

    - [R client (rirods)](https://github.com/irods/irods_client_library_rirods)
        - released 0.1.1
        - submitted and accepted to CRAN
        - new website - https://irods4r.org
        - presented at UGM 2023

    - Policy Composition
        - merged PR submitted for 4.3.0 compatibility

    - [Publishing Capability](https://github.com/irods/irods_capability_publishing)
        - needs more README
        - awaiting CI

    - Logical Locking
        - read-locks to be implemented

    - New RPC API framework
        - leverages design from Authentication Working Group
        - supports synchronous and asynchronous operations
        - refactored into parallel_collection_operation base class
            - supports pre/post operations and an object operation

    - [Hard Links Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_hard_links)
        - awaiting more use cases before release

    - [AWS S3 Lambda](https://github.com/irods/irods_client_aws_lambda_s3)
        - future release
            - could brute-force confirm checksums to detect renames
            - would persist metadata
        - could use atomic database operations to increase batch size > 1

    - Parallel Filesystem Integration
        - iRODS API plugin
        - have split BeeGFS and Lustre implementations into aggregator and listener
        - testing against known configurations

    - CockroachDB Database Plugin

- Discussion

