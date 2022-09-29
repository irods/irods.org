Title: iRODS Development Update: September 2022
Date: 2022-09-30 12:00
Author: Kory Draughn
Slug: irods-development-update-september-2022
Status: published


We've been chopping a lot of wood this month, so let's jump right in!

On the server side of things, work to add detached mode to the `unixfilesystem` resource plugin has begun. This is important as it allows one or more `unixfilesystem` resources to serve requests without the need for the physical object to be located on the local storage device (consider a mounted parallel filesystem). The `remote()` microservice has grown support for the `INST_NAME` hint. Just like the `delay()` microservice, the `remote()` microservice will now be able to target a specific rule engine plugin. Before this change, using the `remote()` microservice would result in the Rule Engine Plugin Framework attempting to execute the rule text on every configured rule engine plugin. While this would succeed, it resulted in a noisy log file. This change resolves that issue completely.

Work to modernize the Audit Rule Engine Plugin is in motion and is going very well. This refactor aligns with the recent work regarding the ELK stack project used in our training materials. A lot of effort is being put into making the Audit plugin much better. If that sounds interesting, you can follow that work at [https://github.com/irods/irods_rule_engine_plugin_audit_amqp/pull/105](https://github.com/irods/irods_rule_engine_plugin_audit_amqp/pull/105).

On the client side, you'll be happy to know that the C++ REST API has received some big updates. It can now be run independently of the iRODS server and iCommands. It has also been containerized! Building, running, and testing the C++ REST API is easier than ever. Please give it a try and let us know what you think.

This month we have news about the upcoming Metalnx 2.6.1 release. We've fixed issues with downloading data objects via tickets. We've improved the build process such that people wanting to make changes to the application can do so without running the risk of corrupting their local .m2 directory. Not only that, but configuration options have been added that allow administrators to hide AVUs based on one or more prefixes.

Back in July, we mentioned that efforts to improve documentation was in progress. Well, we're pleased to announce that that work has been completed in the form of a **Policy Cookbook** and detailed documentation explaining data objects, replicas, logical locking, and various other topics. We haven't published the changes yet, but you can expect to see those soon.

And now for the final update - we've been looking at adding support for Ubuntu 22.04! We've successfully built externals, iRODS, and iCommands packages for this platform. We have a few more things to verify before we can release anything, so stay tuned.

See you next month!


### September Technology Working Group

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - working on whitepaper covering WG activities and findings
    - working meeting
        - Tues, September 20, 2022, 10am ET

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - awaiting word on CZI proposal for sync agent
    - working meeting
        - Thur, September 15, 2022, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - working meeting
        - Tues, September 27, 2022, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - MinIO has deprecated the gateway interface
    - discussion has shifted focus to custom S3 implementation
    - working meeting
        - Fri, October 7, 2022, 3pm ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, December 7, 2022, 4pm ET

- [4.2.12](https://github.com/irods/irods/milestone/38)

    - 31 bugs / 60 open, 48 closed

- [4.3.1](https://github.com/irods/irods/milestone/39)

    - 34 bugs / 162 open, 23 closed
    - goals
        - iinit to learn about pam_interactive (new auth framework)
        - support for HA (single irodsDelayServer defined in the catalog)
        - GenQuery reimplemented in flex/bison

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 134 bugs / 281 open, 0 closed

- New Development Work

    - working on project templates for implementing iRODS components using C/C++
        - clients, microservices, rule engine plugins, api plugins, and resource plugins
        - includes various github actions for checking correctness, etc.

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - working with SURF to officially support pam_interactive auth plugin
            - targeting 4.3.1 or 4.3.2
        - adding support for detached mode to the unixfilesystem resource plugin
        - remote rule execution now honors the INST_NAME hint

    - Build and Packaging
        - adding boost/Qt5-style build system targets
        - consistent / better use of CMake
        - targeting gcc/libstdc++ again and defining minimum requirements
        - entered early stages of moving externals to use standard packaging tools
            - rpmbuild and dpkg-buildpackage

    - [iRODS Documentation](https://github.com/irods/irods_docs)
        - merged policy cookbook and library examples
        - merged expanded documentation for data objects, replicas, logical locking, etc

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - added Ubuntu 22.04 projects
            - not yet merged

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - successfully built externals, iRODS server, and iCommands packages for Ubuntu 22.04
            - not officially supported yet

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - fixed download issues with tickets
            - server now honors compute.checksum property
        - separated compilation of the JAR file from the building of the docker image
        - bumped Jargon version to 4.3.3.0-SNAPSHOT
        - compilation no longer pollutes the developer’s personal .m2 directory
        - added support for hiding AVUs (from rodsusers) based on one or more prefixes
        - working on UI consistency
            - metadata templates
        - awaiting CI

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - preparing for 0.9.2 release
        - client can now run independently of the iRODS server and iCommands
        - containerized the building and running of the client services and tests
        - added support for trim and replicate to /logicalpath endpoint
        - awaiting CI

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - released 0.2.0, requires C++ REST API 0.9.1
        - supports remote zones and users
        - supports default and custom checkfiles
        - supports specific query management

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - adding support for optionally including the create/modify timestamps in AVU objects
            - initial work submitted by Paul Borgermans
        - fixing logical path normalization on MS Windows
        - now in CI

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - remote rule execution now honors the INST_NAME hint
        - should consider a later Python 3.x (3.6 EOL pretty soon)

    - [R client (rirods)](https://github.com/irods/irods_client_library_r_cpp)
        - considering the use of the C++ REST API instead of the iRODS runtime
            - simplifies dependencies and accessibility to iRODS
            - can be a pure R client, no C++/compiling in user's environment
        - latest work https://github.com/irods/irods_client_library_r_cpp/pull/5 
        - Docker container?   Alternative ways to get irods dev tooling?
        - in support of the new R Consortium proposal

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - awaiting release of Deep Archive and bug fix changes
        - fixing issue with the current implementation of detached mode
        - certified Fujifilm’s S3 appliance with latest S3 plugin
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
        - implemented character-map translation for paths of ingested objects (#166)
            - writing tests now

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - updated example ELK stack project
            - https://github.com/irods/contrib/tree/main/irods_audit_elk_stack
            - replaced logstash with python script
            - updates elastic, kibana, etc to supported versions
            - new startup script sets up the kibana index pattern and dashboard
            - dashboard visualization now looks for both 4.2 and 4.3 PEP names
            - includes README
        - replacing all use of jansson JSON library with nlohmann JSON library
        - removing workarounds for bad ELK stack
        - general modernization

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

    - ichmod should not be allowed to bypass the permission model
        - https://github.com/irods/irods/issues/6579
        - general agreement that special cases are not great

