Title: iRODS Development Update: February 2018
Date: 2018-02-28 17:30
Author: Terrell Russell
Slug: irods-development-update-february-2018
Status: published


A rebuilding month.

We have hired two new developers (welcome Kory and Andrew!).

We have demo-quality code for our filesystem scanner (distributed and parallel).

We have [released the first version of our tiered storage framework]({filename}/posts/initial-irods-storage-tiering-framework-is-released.md).

We are working hard on nearly a dozen proofs-of-concept for organizations around the world.

[Register for the iRODS User Group Meeting in Durham, NC (June 5-7, 2018)]({filename}/pages/ugm2018.html).

### February Technology Working Group

- [4.1.12](https://github.com/irods/irods/milestone/27)

    Only 2-3 features remaining - getting close.

- [4.2.3](https://github.com/irods/irods/milestone/28)

    We have identified a blocker for one of our members, and hope to release within the week.  Outstanding issues will be moved to a 4.2.4 milestone.

- Second Metalnx Working Group

    Hosted on February 20.  We saw many mockups and a demo of Metalnx v2.0.0-beta.  It has been refactored a bit for easier skinning, deployment, and 508 compliance.  The repositories have moved under the irods-contrib namespace and will be curated there from now on.

- Active Development Work

    - Python Ingest Tool
        - added sync walker
        - [https://github.com/irods-contrib/irods_tools_ingest](https://github.com/irods-contrib/irods_tools_ingest)

    - Landing Zone Package
        - using the Python Ingest Tool
        - [https://github.com/irods-contrib/irods_capability_landing_zone](https://github.com/irods-contrib/irods_capability_landing_zone)

    - Tiered Storage Demo/Package
        - released Feb 21 at TRiRODS
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
        - awaiting testing on a live system
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

- Ongoing Development Work

    - Python iRODS Client (PRC)
        - 0.7.0 released
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - QueryArrow Database Plugin
        - packaging and readying for continuous integration
        - [https://github.com/xu-hao/QueryArrow](https://github.com/xu-hao/QueryArrow)

    - Nestle R Client Library
        - nearly passing in continuous integration
        - [https://github.com/irods/irods_client_library_r_cpp](https://github.com/irods/irods_client_library_r_cpp)

    - Swagger REST API
        - working demo with metadata templates
        - [https://github.com/irods-contrib/irods_rest_services](https://github.com/irods-contrib/irods_rest_services)


### Upcoming Working Groups

- Packaging (community standards, externals)
