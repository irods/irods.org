Title: iRODS Development Update: December 2017
Date: 2017-12-31 18:30
Author: Terrell Russell
Slug: irods-development-update-december-2017
Status: published


2017 is ending - and we've come a long way in the last 12 months.

[Four TRiRODS Meetups]({filename}/pages/trirods.html).

[UGM2017]({filename}/pages/ugm2017.html).

[SC17]({filename}/pages/sc17.html).

Three releases.

A few plugins.

New members.

2018 should move even faster.


### December Technology Working Group

- [4.1.11](https://github.com/irods/irods/milestone/25?closed=1)

    Released Oct 18.

- [4.2.2](https://github.com/irods/irods/milestone/26?closed=1)

    Released Nov 8.

- [Audit (AMQP) Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)

    Released Nov 2.

- Kickoff for 4.3.0 Announced

    We will meet in January to kickoff the push towards 4.3.0.  We will begin writing RFCs to better lay out the vision and definition of new work.  This RFC process will provide insight and hopefully become a model for community discussion and decision making as iRODS development transitions from primarily fixing existing implementation bugs to designing new protocols and increasing developer-friendliness.

    The focus for 4.3.0 will be:

    - logging technology selection
    - server design for irodsMonitor
    - incorporate use of the new GenQuery iterator

- Active Development Work

    - Python iRODS Client (PRC)
        - 0.7.0 released
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Python Ingest Tool
        - needs register and admin options
        - was shown at SC17
        - [https://github.com/irods-contrib/irods_tools_ingest](https://github.com/irods-contrib/irods_tools_ingest)

    - Landing Zone Package
        - using the Python Ingest Tool
        - [https://github.com/irods-contrib/irods_capability_landing_zone](https://github.com/irods-contrib/irods_capability_landing_zone)

    - Tiered Storage Demo/Package
        - was shown at SC17
        - [https://github.com/irods-contrib/irods_capability_tiered_storage](https://github.com/irods-contrib/irods_capability_tiered_storage)

    - CockroachDB Database Plugin
        - passing nearly all the tests
        - [https://github.com/irods/irods_database_plugin_cockroachdb](https://github.com/irods/irods_database_plugin_cockroachdb)

    - Ceph RADOS Resource Plugin
        - readying for 4.2
        - [https://github.com/irods/irods_resource_plugin_rados](https://github.com/irods/irods_resource_plugin_rados)

    - Multipart Transfer, v5 API
        - finishing iget and unipart functionality
        - [https://github.com/irods/irods_api_plugin_adapter](https://github.com/irods/irods_api_plugin_adapter)
        - [https://github.com/irods/irods_api_plugin_multipart](https://github.com/irods/irods_api_plugin_multipart)

    - Lustre Integration
        - code review
        - allowing multiple iRODS server endpoints
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

- Ongoing Development Work

    - QueryArrow Database Plugin
        - packaging and readying for continuous integration
        - [https://github.com/xu-hao/QueryArrow](https://github.com/xu-hao/QueryArrow)

    - Nestle R Client Library
        - nearly passing in continuous integration
        - [https://github.com/irods/irods_client_library_r_cpp](https://github.com/irods/irods_client_library_r_cpp)

    - Swagger REST API
        - working demo with metadata templates
        - [https://github.com/irods-contrib/irods_rest_services](https://github.com/irods-contrib/irods_rest_services)


- Upcoming Releases

    - [Cloud Browser](https://github.com/dice-unc/irods-cloud-browser) (shibboleth, permissions)

### Upcoming Working Groups

- Packaging (community standards, externals)

- Metalnx Coordination
