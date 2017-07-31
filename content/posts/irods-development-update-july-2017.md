Title: iRODS Development Update: July 2017
Date: 2017-07-31 15:30
Author: Terrell Russell
Slug: irods-development-update-july-2017
Status: published


We have been working hard to solidify a few things - and we've had a couple good ideas that may prove important as we head into planning for All Things Open in October and Supercomputing2017 in November.


### Workbooks


We are planning to continue writing and telling stories around some best practices and usage patterns that we see in the wild.  However, in addition, the iRODS Consortium will begin packaging small bits of software that address some of these particular patterns.

The first will probably involve the 'Landing Zone' pattern, originally drawn as part of the [Data to Compute use case]({filename}/images/data_to_compute.jpg).  We plan to use a combination of python functions, our upcoming ingest tool, and the [Python Rule Engine Plugin]({filename}/posts/initial-irods-python-rule-engine-plugin-is-released.md).

After that, we hope to create some metadata extraction packages for different domains including genomics, microscopy, and GIS systems.

If there are other things that you would find helpful, please let us know.


### July Technology Working Group

- Nestle rirods package has been accepted as Consortium software

    The votes are in and the iRODS Consortium will be releasing and supporting the [rirods package contributed by Nestle](https://github.com/irods/irods_client_library_r_cpp).  This marks the first major third party code contribution since the [Ceph RADOS storage resource plugin](https://github.com/irods/irods_resource_plugin_rados) more than two years ago.

- Preparing [4.1.11](https://github.com/irods/irods/milestone/25) release

    There are 10 open issues at the time of this writing.  The remaining work involves rebalance behavior, checksum verifications, and some other small bugs.  We hope to release 4.1.11 within the next month and we aim for this to be the last release necessary on the 4-1-stable branch.  4.1.0 was released in May of 2015.

- Preparing 4.3 development kickoff
    
    iRODS 4.3 will be focused on two major features.  The rest of the work will be about addressing 150+ open issues that did not make the cut for 4.2.x.
    
    The first focus will be on selecting and implementing a comprehensive modern logging framework for iRODS.  We need to decide how we will log things as a standalone service as well as alongside other enterprise-grade services sharing information on a high-speed messaging bus of some kind.
    
    The second focus will be on providing resource monitoring out of the box.  iRODS has required external services to monitor iRODS storage resources and mark them 'up' or 'down' to allow iRODS to route requests to the correct server.  An additional service owned and operated by the iRODS service account will be able to provide that functionality directly.
    
    We hope to begin work on 4.3 as soon as possible.

- Ongoing Development Work

    - Swagger REST API
        - working demo with metadata templates
        - [https://github.com/irods-contrib/irods_rest_services](https://github.com/irods-contrib/irods_rest_services)

    - Python iRODS Client (PRC)
        - now supports specific queries
        - 0.6.0 released June 1
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Python Ingest Tool
        - working demo, checksums, restarts, etc.
        - will be used in landing zone package soon
        - [https://github.com/irods-contrib/irods_tools_ingest](https://github.com/irods-contrib/irods_tools_ingest)

    - Multipart DataObjects, v5 API
        - working demo for multipart transfer
        - [https://github.com/irods/irods_api_plugin_adapter](https://github.com/irods/irods_api_plugin_adapter)
        - [https://github.com/irods/irods_api_plugin_multipart](https://github.com/irods/irods_api_plugin_multipart)

    - Lustre Integration
        - bulk activity, capnproto work
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

    - QueryArrow database plugin
        - passing iRODS test suite, except SSL
        - working on getting into continuous integration
        - [https://github.com/xu-hao/QueryArrow](https://github.com/xu-hao/QueryArrow)

    - Cloud Browser
        - permissions, paging, release coming
        - [https://github.com/dice-unc/irods-cloud-browser](https://github.com/dice-unc/irods-cloud-browser)

- Upcoming Releases

    - [AMQP Audit Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
    - [Nestle R Client Library](https://github.com/irods/irods_client_library_r_cpp)


### New Packaging Working Group

We are looking to convene a new working group around best practices regarding packaging.

We currently package our entire build chain (see [https://github.com/irods/externals](https://github.com/irods/externals)), the iRODS software itself, as well as a variety of plugins, all across two major Linux distributions.

We want to make sure these packages are both what the community needs and expects, and we need a good process to ensure this is the case and continues to be the case going forward.

Details will be shared soon.  Please join us if you have opinions, or if you just want to know more about what we already have built.

