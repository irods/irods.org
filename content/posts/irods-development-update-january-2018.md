Title: iRODS Development Update: January 2018
Date: 2018-01-31 22:30
Author: Terrell Russell
Slug: irods-development-update-january-2018
Status: published


A new year has arrived and hasn't given us much chance to catch our breath.

We have already kicked off the 4.3.0 development cycle, hosted the first Metalnx Working Group, and started to interview for two new C++ developers (if you're interested, please get in touch).

The Python iRODS Client (PRC) 0.7.0 has been released and the ingest tool has matured enough for its first contact with live data.

We have many plugins that need to be put into our continuous integration environment.  We're excited to get them released and into our package repositories.


### January Technology Working Group

- [4.1.12](https://github.com/irods/irods/milestone/27)

    Steady work towards the final 4-1-stable release.  No surprises so far.

- [4.2.3](https://github.com/irods/irods/milestone/28)

    Focused on a hardening release.  If there are specific blockers for anyone, we can release sooner.

- [Cloud Browser](https://github.com/dice-unc/irods-cloud-browser)

    We released a feaure-complete beta4 of the Cloud Browser that includes updates for shibboleth, SSL, and the presented permissions model.  The final release of 1.0.2.0 may be the last release of Cloud Browser as more work is now being put into Metalnx.

    The [beta4 is available via Docker Hub](https://hub.docker.com/r/diceunc/cloudbrowser/tags/) and can be deployed much more easily.

- Metalnx Working Group

    Hosted on January 11, this first meeting worked mostly on governance and process as the Metalnx codebase moves from Dell EMC to the iRODS Consortium.  The codebase was updated to BSD-3 License and has been moved to the [irods-contrib namespace](https://github.com/irods-contrib/metalnx-web).  The bulk of new work will be done by NIEHS, and this working group will continue to meet monthly to coordinate the process and any decisions that affect the most prominent iRODS GUI going forward.  The goal is to keep the GUI as iRODS-centric as possible and provide a white-label, easily installable, usable front-end to an iRODS Zone.

- Kickoff for 4.3.0

    Held January 22 with around 20 attendees.  We explained the RFC process ([https://github.com/irods/irods_rfcs](https://github.com/irods/irods_rfcs)) and decided that it is more important for releases to be of high quality than on a regular schedule.  We would love to have a release by UGM2018 in June, but since our plugin architecture can now support it, we may focus on demonstrating and training with new plugins rather than getting out a new release.

    The focus for 4.3.0 will remain:

    - [logging technology overhaul](https://github.com/irods/irods_rfcs/blob/master/0001_logging.md)
    - [irodsMonitor process](https://github.com/irods/irods_rfcs/blob/master/0002_irodsmonitor.md)
    - [moving the checksum operation to resource plugins](https://github.com/irods/irods/issues/3127)

- Active Development Work

    - Python Ingest Tool
        - added register and admin options
        - will release soon based on live demos and client feedback
        - [https://github.com/irods-contrib/irods_tools_ingest](https://github.com/irods-contrib/irods_tools_ingest)

    - Landing Zone Package
        - using the Python Ingest Tool
        - [https://github.com/irods-contrib/irods_capability_landing_zone](https://github.com/irods-contrib/irods_capability_landing_zone)

    - Tiered Storage Demo/Package
        - readying for release
        - needs tests for unreliable storage
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
