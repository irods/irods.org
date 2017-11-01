Title: iRODS Development Update: October 2017
Date: 2017-10-31 23:30
Author: Terrell Russell
Slug: irods-development-update-october-2017
Status: published


A release!  We did it, and nearly a year in the making.  [4.1.11]({filename}/posts/irods-4-1-11-is-released.md) is out and many small bugfixes are included.  Please upgrade if you are on the 4.1.x series.  

We are working hard on our demos and talks for [SC17](https://sc17.supercomputing.org/) in a couple weeks.  [RSVP for our SC17 iRODS Workshop today]({filename}/pages/sc17.html)!

The work on a [CockroachDB database plugin](https://github.com/irods/irods_database_plugin_cockroachdb) is moving along nicely.  It now builds, installs, and passes nearly the entire iRODS test suite.  Once that is complete, we will begin learning some best practices to leverage a truly distributed global namespace.


### October Technology Working Group

- Preparing [4.1.11](https://github.com/irods/irods/milestone/25) release

    Done.

- Preparing [4.2.2](https://github.com/irods/irods/milestone/26) release

    All but done - out within a day or so.

- Preparing 4.3.0 development kickoff

    By the end of the year, we hope to select a logging library and begin work on the design of an integrated irodsMonitor process to sit alongside the main irodsServer process.

- Active Development Work

    - Python iRODS Client (PRC)
        - community activity/usage is increasting
        - work on adding SSL
        - preparing 0.7.0
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Python Ingest Tool
        - using PRC, Redis Queue, gaining options
        - demo available
        - [https://github.com/irods-contrib/irods_tools_ingest](https://github.com/irods-contrib/irods_tools_ingest)

    - Landing Zone Package
        - using the Python Ingest Tool
        - [https://github.com/irods-contrib/irods_capability_landing_zone](https://github.com/irods-contrib/irods_capability_landing_zone)

    - Tiered Storage Demo/Package
        - will be part of the SC17 workshop
        - [https://github.com/irods-contrib/irods_capability_tiered_storage](https://github.com/irods-contrib/irods_capability_tiered_storage)

    - CockroachDB Database Plugin
        - now building and installing
        - [https://github.com/irods/irods_database_plugin_cockroachdb](https://github.com/irods/irods_database_plugin_cockroachdb)

    - Ceph RADOS Resource Plugin
        - updated for 4.2
        - awaiting automation in CI
        - [https://github.com/irods/irods_resource_plugin_rados](https://github.com/irods/irods_resource_plugin_rados)

    - Multipart DataObjects, v5 API
        - cleaning up edge cases for multipart transfer
        - refactoring for demo at SC17
        - [https://github.com/irods/irods_api_plugin_adapter](https://github.com/irods/irods_api_plugin_adapter)
        - [https://github.com/irods/irods_api_plugin_multipart](https://github.com/irods/irods_api_plugin_multipart)

- Ongoing Development Work

    - QueryArrow Database Plugin
        - packaging and readying for continuous integration
        - [https://github.com/xu-hao/QueryArrow](https://github.com/xu-hao/QueryArrow)

    - Nestle R Client Library
        - nearly passing in continuous integration
        - [https://github.com/irods/irods_client_library_r_cpp](https://github.com/irods/irods_client_library_r_cpp)

    - Lustre Integration
        - ready for testing
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

    - Swagger REST API
        - working demo with metadata templates
        - [https://github.com/irods-contrib/irods_rest_services](https://github.com/irods-contrib/irods_rest_services)


- Upcoming Releases

    - [Cloud Browser](https://github.com/dice-unc/irods-cloud-browser) (shibboleth, permissions)
    - [AMQP Audit Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp) (awaiting iRODS 4.2.2)

### Upcoming Working Groups

- Packaging (community standards, externals)
