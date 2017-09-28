Title: iRODS Development Update: September 2017
Date: 2017-09-28 14:30
Author: Terrell Russell
Slug: irods-development-update-september-2017
Status: published


We have made some steady progress this month and picked up some new projects.  The loose ends around 4.1.11 are being tied up.

Additionally, we have started synchronizing the work across the Python iRODS Client to Python Ingest Tool to the Landing Zone package we hope to demo soon.  This will be the first of our packaged capabilities (we've identified 8 so far).  We are beginning the work to package the tiering code first demonstrated last month.  We have ported the Ceph RADOS plugin to 4.2 and are picking up work on the multipart transfers again.

We have development code for a [CockroachDB database plugin](https://github.com/irods/irods_database_plugin_cockroachdb) that we hope will open a new era of global-spanning iRODS namespaces.  Performance testing will begin as soon as it compiles and installs.

We'll be at [All Things Open](https://allthingsopen.org) again next month and [SC17](https://sc17.supercomputing.org/) in November.  [RSVP for our SC17 iRODS Workshop today]({filename}/pages/sc17.html)!

If you have interest in any or all of the work we're doing - please reach out.  This is open source and is driven by community feedback!


### September Technology Working Group

- Preparing [4.1.11](https://github.com/irods/irods/milestone/25) release

    Still finalizing.  A new use case and some debugging for deeply nested rebalance operations has been a blocker.

- Preparing [4.2.2](https://github.com/irods/irods/milestone/26) release

    Considering moving open items to 4.2.3 to release sooner for audit plugin compatibility, a fix for imeta mod, recursive ireg with checksums, and memory leak fixes.

- Preparing 4.3.0 development kickoff

    We plan to select a logging library and begin work on the design of an integrated irodsMonitor process to sit alongside the main irodsServer process.

- Active Development Work

    - Python iRODS Client (PRC)
        - now supports registration in place
        - preparing 0.7.0
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Python Ingest Tool
        - preparing package to use PRC
        - refactored to use Redis Queue
        - [https://github.com/irods-contrib/irods_tools_ingest](https://github.com/irods-contrib/irods_tools_ingest)

    - Landing Zone Package
        - first of the packaged capabilities
        - uses the Python Ingest Tool
        - [https://github.com/irods-contrib/irods_capability_landing_zone](https://github.com/irods-contrib/irods_capability_landing_zone)

    - Tiered Storage Demo/Package
        - automatic tiering based on named tiers and access time
        - can also be based on an admin-defined query
        - [https://github.com/irods/irods_training/tree/master/advanced/data_tiering](https://github.com/irods/irods_training/tree/master/advanced/data_tiering)

    - Multipart DataObjects, v5 API
        - started work on get
        - refactoring for demo at SC17
        - [https://github.com/irods/irods_api_plugin_adapter](https://github.com/irods/irods_api_plugin_adapter)
        - [https://github.com/irods/irods_api_plugin_multipart](https://github.com/irods/irods_api_plugin_multipart)

    - QueryArrow Database Plugin
        - adding to continuous integration
        - [https://github.com/xu-hao/QueryArrow](https://github.com/xu-hao/QueryArrow)

    - CockroachDB Database Plugin
        - initial proof of concept
        - [https://github.com/irods/irods_database_plugin_cockroachdb](https://github.com/irods/irods_database_plugin_cockroachdb)

    - Nestle R Client Library
        - nearly passing in CI
        - [https://github.com/irods/irods_client_library_r_cpp](https://github.com/irods/irods_client_library_r_cpp)

    - Ceph RADOS Resource Plugin
        - updated for 4.2
        - awaiting automation in CI
        - [https://github.com/irods/irods_resource_plugin_rados](https://github.com/irods/irods_resource_plugin_rados) (for 4.2+)

- Ongoing Development Work

    - Lustre Integration
        - code review and refactoring
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

    - Swagger REST API
        - working demo with metadata templates
        - [https://github.com/irods-contrib/irods_rest_services](https://github.com/irods-contrib/irods_rest_services)


- Upcoming Releases

    - [Cloud Browser](https://github.com/dice-unc/irods-cloud-browser) (shibboleth, permissions)
    - [AMQP Audit Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp) (awaiting iRODS 4.2.2)

### Upcoming Working Groups

- Packaging (community standards, externals)
