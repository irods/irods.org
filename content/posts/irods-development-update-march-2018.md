Title: iRODS Development Update: March 2018
Date: 2018-03-31 19:30
Author: Terrell Russell
Slug: irods-development-update-march-2018
Status: published


We're getting our footing again.  Our current development pace is picking up, but it's still slower than it was.  That will change.

Our filesystem scanner is shaping up nicely - and is now part of multiple proofs-of-concept.

The tiered storage framework has gained a few more features and an updated release is coming soon.

We are hard at work finalizing details for the [iRODS User Group Meeting in Durham, NC (June 5-7, 2018)]({filename}/pages/ugm2018.html).  Register, join us.




### March Technology Working Group

- [4.1.12](https://github.com/irods/irods/milestone/27)

    The few remaining features have proven harder to test than we expected.  Still working to get this released ASAP.

- [4.2.3](https://github.com/irods/irods/milestone/28)

    Awaiting a clean bill of health from CI, and we'll release.  Outstanding issues will be moved to a 4.2.4 milestone.

- Third Metalnx Working Group

    Hosted on March 19.  Live demo of upcoming 2.0.0.  Working on ease of deployment, search integration, metadata templates, and a user dashboard.

- Active Development Work

    - Python iRODS Client (PRC)
        - upcoming 0.8.0 with new work to support Python Filesystem Scanner
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Python Filesystem Scanner
        - added sync walker
        - append, register replica, non-root resources

    - Landing Zone Package
        - using the Python Filesystem Scanner
        - [https://github.com/irods-contrib/irods_capability_landing_zone](https://github.com/irods-contrib/irods_capability_landing_zone)

    - Tiered Storage Capability Package
        - first released Feb 21 at TRiRODS
        - growing new features
        - [https://github.com/irods-contrib/irods_capability_tiered_storage](https://github.com/irods-contrib/irods_capability_tiered_storage)

    - CockroachDB Database Plugin
        - passing full test suite, adding to CI
        - [https://github.com/irods/irods_database_plugin_cockroachdb](https://github.com/irods/irods_database_plugin_cockroachdb)

    - Ceph RADOS Resource Plugin
        - tested against 4.2, adding to CI
        - [https://github.com/irods/irods_resource_plugin_rados](https://github.com/irods/irods_resource_plugin_rados)

    - Multipart Transfer, v5 API
        - iget and iput complete
        - manual testing
        - [https://github.com/irods/irods_api_plugin_adapter](https://github.com/irods/irods_api_plugin_adapter)
        - [https://github.com/irods/irods_api_plugin_multipart](https://github.com/irods/irods_api_plugin_multipart)

    - Lustre Integration
        - allowing multiple iRODS server endpoints
        - installing on CentOS VMs, running tests
        - then dedicated hardware and performance testing
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

- Ongoing Items

    - QueryArrow Database Plugin
        - packaging and readying for continuous integration
        - [https://github.com/xu-hao/QueryArrow](https://github.com/xu-hao/QueryArrow)

    - Nestle R Client Library
        - nearly passing in continuous integration
        - [https://github.com/irods/irods_client_library_r_cpp](https://github.com/irods/irods_client_library_r_cpp)

    - Swagger REST API
        - working demo with metadata templates
        - [https://github.com/irods-contrib/irods_rest_services](https://github.com/irods-contrib/irods_rest_services)

    - Cloud Browser (shibboleth, permissions)
        - need to finalize and publish docker image

    - Packaging Working Group (community standards, externals)
