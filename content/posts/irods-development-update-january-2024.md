Title: iRODS Development Update: January 2024
Date: 2024-01-16 10:00
Author: Kory Draughn
Slug: irods-development-update-january-2024
Status: published


Happy New Year!

I hope everyone had a nice relaxing break. It's time for our first development update so let's get started.

Since the release of iRODS 4.3.1, we've shifted focus to projects around the iRODS server.

The first update is about externals packages. They are receiving a much needed improvement in the form of better version numbers. If you'd like to read more about that, see [https://github.com/irods/externals/issues/219](https://github.com/irods/externals/issues/219). Not only that, but work to provide better dependency declarations for externals packages is also in progress.

One thing we haven't mentioned is that we've been working on new test infrastructure. The Docker-based Testing Environment made running tests and standing up different configurations significantly easier. We're very pleased with the results of the Docker-based Testing environment and we intend to continue maintaining it. However, this new test infrastructure is being designed for Kubernetes. This is still in the early phases of development. We'll share more as UGM approaches.

Next up is the Metadata Guard rule engine plugin. We're now updating the plugin to understand atomic metadata operations. This will bring the plugin closer to covering all paths to metadata manipulation.

We've fixed a few issues in the S3 resource plugin. Decoupled mode does a better job at honoring server redirects. Support for appending data has been improved as well. Due to **libs3** being absorbed into the plugin, we've re-licensed the plugin to **LGPLv3/GPLv2**. For those who are worried about the change in licensing, you can rest easy knowing you don't have to change anything you're doing.

Storage Tiering 4.3.1.1 is now available. This latest release included several improvements, two of which were contributed by SURF _(a Consortium member)_. Please see the Technology Working Group notes below for details.

A much needed tweak to the Python rule engine plugin is almost ready. To be specific, the next release of the plugin will make `global_vars` available to all imported modules. This means administrators can keep their **core.py** file clean and delegate the business logic to imported modules.

Last month, we announced the release of the NetCDF project for iRODS 4.3.1. We're now looking into **possibly** archiving this project because we feel there are better alternatives (e.g. Python). If you have questions about this, don't hestitate to reach out to us via email or any other channel.

We've covered packaging, testing, and plugins. Let's talk about clients.

First up is the Python iRODS client (PRC). For those users working in a 4.3.1 environment, you'll be happy to know support for **pam_password** has been implemented. Improvements for TTL have also been implemented. A new release of the PRC is inching closer and closer, so stay tuned.

The HTTP API is seeing steady improvements. Support for HTTPS for OpenID Connect is very close. There have been a number of general improvements across the board. For example, configuring OpenID Connect is becoming simpler, the data objects endpoint now supports streaming reads like the C++ REST API, and the server now validates the configuration on startup.

To wrap up, our next goal for the S3 API is to add support for multipart upload. This will require a lot of thought and care, but we're confident we can deliver.

That's it! Talk to you in February.


### January Technology Working Group

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
        - Fri, February 2, 2024, 3pm ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - draft paper for circulation among group
    - working on microservices
    - working meeting
        - Tues, January 16, 2024, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, February 14, 2024, 4pm ET
    - speaker, TBD

- [4.3.2](https://github.com/irods/irods/milestone/40)

    - 93 bugs / 323 open, 15 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 131 bugs / 289 open, 0 closed

- [4.4.0](https://github.com/irods/irods/milestone/41)

    - 3 bugs / 18 open, 0 closed

- New Development Work

    - announced 5 internship projects for the summer
        - https://irods.org/2024/01/irods-internship-summer-2024/

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
        - next major release of iRODS will be built against libstdc++
        - removed libs3 from externals
        - externals packages will have better version numbers
        - working on better dependency declarations for externals

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - working on simplifying OIDC configuration
        - switched from using libcurl to Boost.URL in OIDC implementation
        - verifying HTTPS works for OIDC
        - working on stability and QoL improvements
            - simplified read op, better error handling, documentation, config validation, etc

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - added 4.3+ pam_password compatibility
        - better TTL behavior

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - working to make global_vars dict available to user imported modules
            - https://github.com/irods/irods_rule_engine_plugin_python/issues/183

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - released for 4.3.1

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - fixed issue with decoupled mode not being honored after a server redirect
        - fixed issue with istream append errors
            - caused by iRODS doing a stat before the file exists in S3
            - file hasn't been closed and flushed from cache yet
        - libs3 has been absorbed into this repository
        - re-licensed to LGPLv3/GPLv2

    - [iRODS S3 API](https://github.com/irods/irods_client_s3_api)
        - removing Boost.URL submodule, now uses externals package
        - will be refactored to not use coroutines, to help the transition to libstdc++
        - multipart support is next

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - preparing release of 4.3.3.0
        - added option to test framework that allows users to install other versions of iRODS 4.3
        - updated FilePermissionEnum to support new permission levels
        - added server version detection methods for iRODS 4.3
        - StartupPack now sends the correct value for <option> element

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - preparing 2.2.0 release
        - changed base OS of Docker image to Ubuntu 22.04
        - server clears more caches to avoid stale file handle errors
        - removed unnecessary stat in list operation
        - investigating performance improvements related to concurrent usage

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - release for 4.3.1 postponed until situation with elasticlient is resolved
            - https://github.com/irods/irods_capability_indexing/issues/128

    - [NetCDF microservices](https://github.com/irods/irods_netcdf)
        - released for 4.3.1
        - considering archiving this project in favor of other solutions
            - possible existing Python libraries are 'enough'

    - [Metadata Guard](https://github.com/irods/irods_rule_engine_plugin_metadata_guard)
        - working to add support for the atomic metadata operations PEPs

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - released 4.3.1.1
        - fixed tiering rules triggered by remote users (contributed by SURF)
        - fixed restaging replicas accessed in various tiers (contributed by SURF)
        - fixed restaging to higher tiers
        - fixed failing to migrate to tier with existing replica
        - expanded testing and documentation

- Background Items

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - removed most Python 2 packages

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - support for podman contributed by Marco Roeland
            - https://github.com/irods/irods_testing_environment/pull/180

    - [iRODS GenQuery2](https://github.com/irods/irods_api_plugin_genquery2)
        - packages for 4.2 and 4.3 can be built using the iRODS Development Environment
            - use the plugin builder images

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

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - released for 4.3.1
        - next stage of refactor
            - add support for handling multiple AMQP endpoints
            - improve stewardship of AMQP connections
            - improve handling of connection errors
        - merged updated example ELK stack (used for training)

    - [CURL microservices](https://github.com/irods/irods_microservice_plugins_curl)
        - released for 4.3.1

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - released for 4.3.1

    - [mungefs](https://github.com/irods/mungefs)
        - removed dependency on externals, can be built as a standalone project

- Discussion
