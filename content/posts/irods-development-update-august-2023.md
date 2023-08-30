Title: iRODS Development Update: August 2023
Date: 2023-08-30 12:00
Author: Kory Draughn
Slug: irods-development-update-august-2023
Status: published


Hello Everyone,

A lot has happened since the last development update so let's jump right into it.

TRiRODS was amazing! The interns who joined us for the summer did an amazing job on the projects they were assigned and it shows through the presentations they gave at this past TRiRODS. The talks are available online for anyone interested in what each intern worked on. All videos can be found at [https://irods.org/trirods](https://irods.org/trirods).

Since last month, the iRODS server now exposes options for TCP keepalive. The length of passwords for PAM authentication is now configurable. That means passwords can be longer than 50 characters now! The `rc_switch_user` API endpoint exposes more options, which allows clients to control its behavior. We also added a new API endpoint called `rc_check_auth_credentials`. This new API endpoint allows clients to determine if native authentication credentials are correct. People building clients which act as servers should find this new API useful.

`iquery`, provided by the GenQuery2 project, has received some nice quality of life changes. It can now read queries from **stdin**. A new option for listing all supported GenQuery columns is now available. The listing includes the GenQuery column name and the table and column it is mapped to in the database.

The iRODS Development Environment has been updated to use the new Dockerfile syntax. The new syntax helps us improve the build process by decreasing the size of Docker images and wear on SSDs. Work to provide Dockerfiles for Debian 12 and Rocky Linux 9 is almost complete too.

Jargon, the Java client library for iRODS, finally allows clients to report their name to the iRODS server! With this change, administrators will be able to identify Jargon-based clients using `ips`. The next release of NFSRODS will use this new feature.

Speaking of NFSRODS, work to make it resilient across restarts has seen some major progress. The move to use the **data_id** and **coll_id** as the inode number was the key to solving the issue. We're now testing and working out the kinks. We hope to have a new release soon. For those interested, you can find the pull request at [https://github.com/irods/irods_client_nfsrods/pull/182](https://github.com/irods/irods_client_nfsrods/pull/182).

The HTTP API is becoming better each month. Support for the OAuth authentication code grant flow has been implemented. We're now in the polishing phase. Once that's complete, we'll merge it. You can follow that work at [pull request #75](https://github.com/irods/irods_client_http_api/pull/75). Native authentication is significantly better thanks to the new API endpoint, `rc_check_auth_credentials`. We're now considering the idea of making the HTTP API compatible with iRODS 4.2.12. Doing that would expose the new interface to more users and allow us to receive more feedback. We haven't made any decisions on this yet. Stay tuned for updates!

A new experimental Python client library is in development. It is being built on top of the new HTTP API. It's still in early stages, so there's not a lot to report at this time. We'll have more to report in the coming months.

Interested in the new R client for iRODS? If so, there's a whole website dedicated to providing the latest information about it. You can check it out at [https://irods4r.org](https://irods4r.org).

Automated Ingest now supports **PUT_SYNC** for S3. It also supports parallel transfers (over port 1247) for S3 too. If you want to learn more, consider watching the talk presented at [TRiRODS](https://irods.org/trirods).

The Zone Management Tool has been updated to work with the next release of iRODS. It has grown partial support for tickets. Administrators can view tickets, but not create them (yet). They can also change where the delay server runs.

Notable updates include compatibility with the upcoming iRODS 4.3.1 release and improved stability for the iRODS S3 Resource plugin. Stability for the Globus Connector has been improved. There are also some topics for discussion related to `iput` and bulk operations, as well as how the Consortium plans to handle EOL for OS distributions.

Wow, that was a lot. That wraps up this month's update.

Talk to you next month!


### August Technology Working Group

- [Imaging Working Group](https://github.com/irods-contrib/irods_working_group_imaging)

    - initial effort is an OMERO integration
    - looking at UNC and/or NSF funding opportunities
    - working meeting
        - Thur, August 17, 2023, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - building a new API endpoint to provide a flexible authentication mechanism
    - new authentication plugins will drive the flow
    - working meeting
        - Tues, August 22, 2023, 10am ET

- [S3 Working Group](https://github.com/irods-contrib/irods_working_group_s3)

    - develop tools to present iRODS as S3-compatible storage to existing S3 clients
    - developing C++ S3 implementation
    - working meeting
        - Fri, September 1, 2023, 3pm ET

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - draft paper for circulation among group
    - working on microservices
    - working meeting
        - Tues, August 15, 2023, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - Wed, August 16, 2023, 4pm ET
    - 4 Internship project presentations
        - Zone Report
        - Zone Management Tool
        - XML Protocol Specification
        - S3 PUT_SYNC for Automated Ingest

- [4.3.1](https://github.com/irods/irods/milestone/39)

    - 16 bugs / 27 open, 181 closed
    - goals
        - targeting end of August / early September for release
        - address memory leaks
        - iinit to learn about pam_interactive (new auth framework)
        - support for HA (single irodsDelayServer defined in the catalog)

- [4.3.2](https://github.com/irods/irods/milestone/40)

    - 61 bugs / 244 open, 0 closed

- [4.3 Backlog](https://github.com/irods/irods/milestone/34)

    - 136 bugs / 290 open, 0 closed

- [4.4.0](https://github.com/irods/irods/milestone/41)

    - 0 bugs / 7 open, 0 closed

- New Development Work

    - documenting iRODS XML protocol
    - accepted project template for building resource plugins
        - https://github.com/irods/irods_project_template_cpp_resource_plugin

- Active Development Work

    - [iRODS Server](https://github.com/irods/irods)
        - added server config options for TCP keepalive
        - working on allowing PAM password length to be configurable
            - and longer than 50 characters
        - exposed additional options via the rc_switch_user API
            - clients can control whether the proxy user is switched
            - clients can control what the API does when open replicas are detected
            - clients can control how server-to-server connections are handled
        - added new API endpoint: rx_check_auth_credentials
            - allows clients to check whether native auth credentials are correct

    - [iRODS Command Line Interface (CLI)](https://github.com/irods/irods_client_cli)
        - now in active development
        - added support for many basic operations
            - ls, mv, tree, mkdir, get, put, cd, pwd, touch, etc
        - presented at UGM 2023

    - [iRODS GenQuery2](https://github.com/irods/irods_api_plugin_genquery2)
        - iquery can now read queries from stdin
        - iquery can now list all supported columns with database info
        - adding support for escaping special characters

    - Build and Packaging
        - adding boost/Qt5-style build system targets
        - consistent / better use of CMake
        - targeting libstdc++ for iRODS 4.4 

    - [iRODS Documentation](https://github.com/irods/irods_docs)
        - roadmap has been approved and published
            - https://irods.org/roadmap

    - [Docker-based Testing Environment](https://github.com/irods/irods_testing_environment)
        - topology tests can now be run in parallel
            - tests complete in ~2.25 hrs for provider, ~3 hrs for consumer (concurrency of 4)

    - [Docker-based Development Environment](https://github.com/irods/irods_development_environment)
        - migrated to new Dockerfile syntax
        - Dockerfiles for Debian 12 and Rocky Linux 9 are almost ready

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - working towards removing the required local database

    - [Jargon](https://github.com/DICE-UNC/jargon)
        - preparing release of 4.3.3.0
        - clients can now report their name to the iRODS server for ips
        - updated docker test framework for 4.2
            - bumped base OS image to Ubuntu 18.04
            - pinned iRODS version to 4.2.12

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - server is now resilient to restarts
        - server reports its name to iRODS server for ips

    - [C++ REST API](https://github.com/irods/irods_client_rest_cpp)
        - working on 0.9.4
        - will be replaced by iRODS HTTP API

    - [iRODS HTTP API](https://github.com/irods/irods_client_http_api)
        - implemented OAuth authorization code grant flow
            - not merged yet
        - working on OIDC JWT verification
        - improved native auth performance
        - added tests
        - considering the idea of making it compatible with iRODS 4.2.12

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - working on experimental HTTP client library built on top of the HTTP API
        - working on adding client-side redirection for uploads/downloads
            - uncovered bug in iRODS server (see issue irods/irods#7250)

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - released 4.2.12.0
        - completed effort to reduce build duration and compiler memory usage
        - fixed libpython symbol availability issue

    - [R client (rirods)](https://github.com/irods/irods_client_library_rirods)
        - released 0.1.1
        - submitted and accepted to CRAN
        - new website - https://irods4r.org
        - presented at UGM 2023

    - [Streaming S3 Resource Plugin](https://github.com/irods/irods_resource_plugin_s3)
        - fixed multiple bugs
        - updated code for 4.3.1 compatibility

    - [Globus Connector](https://github.com/irods/irods_client_globus_connector)
        - fixed reported memory leaks

    - [C++ S3 API](https://github.com/irods/irods_client_s3_cpp)
        - updated code to make it easier to launch
        - experimented with various S3 clients (e.g. boto, mc, aws, etc)
        - demoed at S3 working group meeting

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - released 4.2.12.0

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - released 4.2.12.0

    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - released 0.4.2
        - working on PUT_SYNC from an S3 source/bucket
        - updated from single stream to multi-stream PUT, is now faster

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
        - now compatible with iRODS 4.3.1
        - added support for remembering rows per page
            - /servers, /resources, /users, /groups
        - added ability to view ticket information
            - ticket creation not supported yet
        - added ability to change where the delay server is run
            - retrieving where the delay server runs is not supported yet

    - Policy Composition
        - merged PR submitted for 4.3.0 compatibility

- Background Items

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

    - What should iput -b -f do in the face of resource hierarchies?
        - https://github.com/irods/irods/issues/7110#issuecomment-1659256517
        - option 1: resolve hierarchy once when updating the bundled data
            - fail when data objects do not exist on resolved hierarchy
            - how to convey partial success back to the caller
        - option 2: resolve hierarchy for each data object in the bundle
            - guarantees data objects will overwrite appropriately
            - slow, removes benefit of using the bulk flag
        - option 3: iput -b -f is not allowed
            - favorite, easiest to implement, relatively small impact

    - How should the Consortium handle (near-)EOL OS distributions?
        - membership and community influences OS selection
        - we intend to support an OS for the lifetime of a stable branch
            - unless it is 'hard' / 'too much work' / 'not safe'
        - we do not intend to support an OS after it has reached EOL
