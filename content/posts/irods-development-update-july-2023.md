Title: iRODS Development Update: July 2023
Date: 2023-07-28 12:00
Author: Kory Draughn
Slug: irods-development-update-july-2023
Status: published


Hello Everyone,

It's time for another monthly development update!

To start, the interns are doing an excellent job on their projects. They are quickly steam-rolling through the issues. We now have an improved version of the zone report, a better Zone Management Tool, low-level examples of the XML protocol, and support for S3 PUT_SYNC in the Ingest tool. They will present their work at this upcoming TRiRODS meeting. Please join us.

For the iRODS server, we're making good progress towards a 4.3.1 release. The goal is to have it all tested and released by the end of August. That gives us a month. No pressure :-)

We've exposed new options in **server_config.json** for controlling socket timeouts, delay server migration, etc. The C++ connection libraries now support alternative forms of authentication.

The new iRODS CLI was presented at UGM. It now has partial support for many operations such as `ls`, `mv`, `get`, `put`, `touch`, etc.

GenQuery2 is in a good position for the community to begin experimenting with it. We've added support for 4.2.11 and 4.2.12 so more users have access to it.

We presented a new HTTP API for iRODS at UGM. This project is an experimental redesign of the C++ REST API. It's coming together really well. The goal is to release it on the heels of iRODS 4.3.1. Once released, users of the C++ REST API are encouraged to switch to the new HTTP API. 0.9.4 will be the final release of the C++ REST API.

Python iRODS Client 1.1.9 is growing some new abilities. Work to make the PRC connect directly to the storage resource holding the replica for reading and writing is in progress. This upcoming release will also support auto-closing of data objects and the new authentication plugin framework.

Effort to reduce the build duration and compiler memory usage for the Python Rule Engine Plugin is complete and was a success. We've also resolved a symbol availability issue with libpython.

Version 0.1.1 of the new R client for iRODS, rirods, was released. It was submitted and accepted to CRAN, making it available to many users of R. This too was presented at UGM.


### July Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - did not receive CZI funding
    - looking at UNC and/or NSF funding opportunities
    - working meeting
        - Thur, July 20, 2023, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - working meeting
        - Tues, July 25, 2023, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - planning and investigation into custom C++ S3 implementation
    - working meeting
        - Fri, August 4, 2023, 3pm ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - draft paper for circulation among group
    - working meeting
        - Tues, July 18, 2023, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, August 16, 2023, 4pm ET
    - 4 Internship project updates
        - Zone Report
        - Zone Management Tool
        - XML Protocol Specification
        - S3 PUT_SYNC for Automated Ingest

- [4.3.1](https://github.com/irods/irods/milestone/39)

    - 35 bugs / 69 open, 137 closed
    - goals
        - iinit to learn about pam_interactive (new auth framework)
        - support for HA (single irodsDelayServer defined in the catalog)

- [4.3.2](https://github.com/irods/irods/milestone/40)

    - 44 bugs / 209 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 136 bugs / 286 open, 0 closed

- New Development Work

    - [iRODS GenQuery2](https://github.com/irods/irods_api_plugin_genquery2)
        - presented at UGM 2023
        - can now be compiled against iRODS 4.2.11 and 4.2.12
            - use 4-2-stable branch
    - documenting iRODS XML protocol
    - accepted project template for building resource plugins
        - https://github.com/irods/irods_project_template_cpp_resource_plugin

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - released 4.2.12
            - final release of 4.2 series
        - added new advanced settings
            - DNS/hostname cache, agent factory watcher
            - delay server migration and socket timeouts
        - improved C++ connection libraries
            - added support for alternative authentication schemes and proxy users
        - updated zone report and schema to better reflect zone
            - catalog provider now appears in list of servers
            - exposed info and comment fields
            - plugins now include checksums

    - [iRODS Command Line Interface (CLI)](https://github.com/irods/irods_client_cli)
        - now in active development
        - added support for many basic operations
            - ls, mv, tree, mkdir, get, put, cd, pwd, touch, etc
        - presented at UGM 2023

    - Build and Packaging
        - adding boost/Qt5-style build system targets
        - consistent / better use of CMake
        - targeting gcc/libstdc++ again and defining minimum requirements
        - entered early stages of moving externals to use standard packaging tools
            - rpmbuild and dpkg-buildpackage

    - [iRODS Documentation](https://github.com/irods/irods_docs)
        - roadmap has been approved and published
            - https://irods.org/roadmap

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - topology tests can now be run in parallel
            - tests complete in ~2.25 hrs for provider, ~3 hrs for consumer (concurrency of 4)

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - migrating to new Dockerfile syntax to improve image builds
        - working on images for use with qtcreator
        - investigating various other improvements

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - working towards removing the required local database

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - preparing release of 4.3.3.0

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - working on 0.9.4
        - will be replaced by iRODS HTTP API

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - an experimental redesign of the C++ REST API
        - requires iRODS 4.3.1
        - adding tests
        - presented at UGM 2023

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - released 1.1.8
        - working on new additions for 1.1.9 release
            - client redirect to resource for data object open/put/get
            - auto-closing data objects (opt-in)
            - pam_password compatibility for 4.3, including client-side auth plugin capability
            - fixing dataSize parameter in data object open()
                - resolves issues with free space tracking for unixfilesystem resources

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - released 4.2.12.0
        - completed effort to reduce build duration and compiler memory usage
        - fixed libpython symbol availability issue

    - [R client (rirods)](https://github.com/irods/irods_client_library_rirods)
        - released 0.1.1
        - submitted and accepted to CRAN
        - presented at UGM 2023

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - released 4.2.12.0
        - handled multiple issues
            - better handling of part upload timeouts
            - reducing part sizes when flushing a cache file
            - fixing error when checksum is enabled on replication of when using a cache file

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - 4.3.0.0 beta available at unstable.irods.org

    - [C++ S3 API](https://github.com/irods/irods_client_s3_cpp)
        - initial implementation has been merged into upstream
            - highly experimental
        - presented at UGM 2023

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - released 4.2.12.0

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - released 4.2.12.0

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - released 0.4.2
        - working on PUT_SYNC from an S3 source/bucket

    - [Unified Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - released 4.2.12.0

    - [NetCDF microservices](https://github.com/irods/irods_netcdf)
        - released 4.2.12.0
        - full HDF5 support could come later

    - [Audit AMQP Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
        - preparing 4.3.0.0 release
        - next stage of refactor
            - add support for handling multiple AMQP endpoints
            - improve stewardship of AMQP connections
            - improve handling of connection errors
        - merged updated example ELK stack (used for training)

    - [Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool)
        - added new health checks
            - users in invalid zones, unused metadata, coordinating resources as leaves, etc
        - general enhancements and improvements
            - better checkfile validation, user filtering for all columns, etc
        - updating to handle new layout of zone report
        - adding administrative support for the delay server and tickets

    - Policy Composition
        - PR submitted for 4.3.0 compatibility

- Background Items

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)

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

    - Nirav Merchant:
        - Is there information on the savings/benefits for using the iRODS S3 resource plugin?
        - Is there a way to allow users to bring their own S3?

    - Paul Borgermans:
        - Is support for Rocky Linux 9 planned?
