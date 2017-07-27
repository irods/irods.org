Title: iRODS Development Update: May 2017
Date: 2017-05-31 22:30
Author: Terrell Russell
Slug: irods-development-update-may-2017
Status: published


May has been a very busy month.  We are in the final stretch before we head to the [User Group Meeting in Utrecht, Netherlands in under two weeks]({filename}/pages/ugm2017.html).   The agenda has been posted, register today!


### Travel

- BioIT World 2017

    The iRODS Consortium met many new faces and reconnected with many members and users at [BioITWorld 2017](http://www.bio-itworldexpo.com/).  We attended the [Best Practices for Big Data in Life Sciences Workshop hosted by DDN](http://www.ddn.com/company/events/best-practices-big-data-life-sciences-workshop-2017/) and were impressed with the breadth of expertise in the room.  They are all struggling with managing their continued growth and expressed a shared need for a metadata solution that could span their entire infrastructure.  Of course, we think iRODS is an answer.

- Lustre User Group 2017

    The iRODS Consortium is being represented at this moment in Bloomington, IN for [LUG 2017](http://opensfs.org/lug-2017/).  We are sharing our experience with building a new connector that listens to [LCAP](https://github.com/cea-hpc/lcap) and updates the iRODS Catalog.


### May Technology Working Group

- Nestle rirods package has been accepted as Consortium software

    The votes are in and the iRODS Consortium will be releasing and supporting the [rirods package contributed by Nestle](https://github.com/irods/irods_client_library_r_cpp).  This marks the first major third party code contribution since the [Ceph RADOS storage resource plugin](https://github.com/irods/irods_resource_plugin_rados) more than two years ago.

- Preparing [4.1.11](https://github.com/irods/irods/milestone/25) and [4.2.1](https://github.com/irods/irods/milestone/24) releases

    We are getting closer.  The 4.2.1 release will be necessary prior to the User Group Meeting, as it is the basis for the training we will be conducting on June 13.

- Metadata Templates Working Group
  
    The TRiRODS event on May 17 featured Rick Skarbez's work on Metadata Templates.  The video and slides will be shared soon.

- Ongoing Development Work

    In addition to our travel and preparation for the UGM, these other efforts have the following updates:

    - Swagger REST API
        - working demo with metadata templates
        - [https://github.com/irods-contrib/irods_rest_services](https://github.com/irods-contrib/irods_rest_services)

    - Python iRODS Client (PRC)
        - now supports specific queries
        - preparing for 0.6.0 release
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Python Ingest Tool
        - working demo, checksums, restarts, etc.
        - [https://github.com/irods-contrib/irods_tools_ingest](https://github.com/irods-contrib/irods_tools_ingest)

    - Multipart DataObjects, v5 API
        - working demo for multipart transfer
        - [https://github.com/irods/irods_api_plugin_adapter](https://github.com/irods/irods_api_plugin_adapter)
        - [https://github.com/irods/irods_api_plugin_multipart](https://github.com/irods/irods_api_plugin_multipart)

    - Lustre Integration
        - bulk activity, capnproto work
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

    - QueryArrow database plugin
        - running full iRODS test suite

    - Cloud Browser
        - paging, release coming
        - [https://github.com/dice-unc/irods-cloud-browser](https://github.com/dice-unc/irods-cloud-browser)

- Upcoming Releases

    We have three plugin and library releases coming soon as well.  They are each working their way through CI and need to be packaged and announced.

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
    - [AMQP Audit Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
    - [Nestle R Client Library](https://github.com/irods/irods_client_library_r_cpp)
