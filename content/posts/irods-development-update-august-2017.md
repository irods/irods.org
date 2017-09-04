Title: iRODS Development Update: August 2017
Date: 2017-08-31 17:30
Author: Terrell Russell
Slug: irods-development-update-august-2017
Status: published


August has been a blur.  We have been transferring our testing knowledge from Ben to Jaspreet as fast as possible - and we have a new reason to hurry.  Ben is leaving the iRODS development team and taking a new job at Google.  He has had a large impact on both the code and the culture of iRODS for the last few years.  We wish him the best.

We also held [TRiRODS](https://irods.org/trirods/) this month with Mike Conway talking about [Jargon](https://github.com/dice-unc/jargon) and working at the mid-tier and Antoine de Torcy talking about his work with the [PRC](https://github.com/irods/python-irodsclient) and the [Python Ingest Tool](https://github.com/irods-contrib/irods_tools_ingest) (demoing distributed ingest via Redis).  Those videos should be up soon.


### Workbooks

[From last month's update]({filename}/posts/irods-development-update-july-2017.md), we are working towards packaging our "one-pagers" into released software that can be installed and configured to meet the most common patterns we've seen in iRODS deployments around the world.

The first will be the "Landing Zone".  The second will be "Tiering".  Please look into the new, flexible, metadata-driven tiering code now resident in the [advanced irods_training repository](https://github.com/irods/irods_training/tree/master/advanced/data_tiering).  This is very exciting work and brings enterprise-class, hands-free tiering down to the price of a few configuration text files.


### August Technology Working Group

- Preparing [4.1.11](https://github.com/irods/irods/milestone/25) release

    We are planning to ship 4.1.11 this week or next.

- Ongoing Development Work

    - Swagger REST API
        - working demo with metadata templates
        - [https://github.com/irods-contrib/irods_rest_services](https://github.com/irods-contrib/irods_rest_services)

    - Python iRODS Client (PRC)
        - now supports specific queries
        - preparing 0.7.0
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Python Ingest Tool
        - preparing package to use PRC
        - [https://github.com/irods-contrib/irods_tools_ingest](https://github.com/irods-contrib/irods_tools_ingest)

    - Multipart DataObjects, v5 API
        - working demo for multipart transfer
        - [https://github.com/irods/irods_api_plugin_adapter](https://github.com/irods/irods_api_plugin_adapter)
        - [https://github.com/irods/irods_api_plugin_multipart](https://github.com/irods/irods_api_plugin_multipart)

    - Lustre Integration
        - code review and refactoring
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

    - QueryArrow database plugin
        - adding to continuous integration
        - [https://github.com/xu-hao/QueryArrow](https://github.com/xu-hao/QueryArrow)

- Upcoming Releases

    - [Cloud Browser](https://github.com/dice-unc/irods-cloud-browser)
    - [AMQP Audit Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp) (awaiting iRODS 4.2.2)
    - [Nestle R Client Library](https://github.com/irods/irods_client_library_r_cpp)
    - [Ceph RADOS Storage Plugin](https://github.com/irods/irods_resource_plugin_rados) (for 4.2+)

### Upcoming Working Groups

- Packaging (community standards, externals)

- Access and Modify Time (per data object, not physical file)
