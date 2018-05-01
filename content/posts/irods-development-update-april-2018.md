Title: iRODS Development Update: April 2018
Date: 2018-04-30 23:30
Author: Terrell Russell
Slug: irods-development-update-april-2018
Status: published


The proofs-of-concept have come together.  The plugins are green in CI.  A release is imminent.

This month has been a lot of tying up loose ends as we prepare for the [iRODS User Group Meeting in Durham, NC (June 5-7, 2018)]({filename}/pages/ugm2018.html).

We're going to announce the agenda within the next week and begin preparing our own presentations and demos.  There is a lot to share and to show.



### April Technology Working Group

- [4.1.12](https://github.com/irods/irods/milestone/27)

    We are so very close now.  If we get the logging done well, we are aiming for this to be the last 4.1.x release.

- [4.2.3](https://github.com/irods/irods/milestone/28)

    The last of the plugins are coming online now - we'll release as soon as possible.  Outstanding issues will be moved to a 4.2.4 milestone.

- [4.3.0](https://github.com/irods/irods/milestone/16)

    Not as much focus here at this time.  We port all bugfixes back and all features forward.  So the work above is going into the master branch as well.

- Fourth Metalnx Working Group

    Hosted on April 16.  The domains have been transfered to the iRODS Consortium, website updates soon.  The branches are merged, and a v2.0.0 release will occur before the iRODS User Group Meeting in June.

- Active Development Work

    - Python iRODS Client (PRC)
        - upcoming 0.8.0 with new work to support Python Automated Ingest
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - iRODS Capability - Automated Ingest
        - formerly known as Python Ingest Tool
        - better documentation
        - part of multiple POCs
        - designing packaging now
        - parallel and distributed based on redis queue

    - Landing Zone Package
        - will be handled by the packaging above

    - Storage Tiering Capability Package
        - updated release (now at v1.1.1)
        - tiering verification
        - minimum restage tier
        - specific-query as restage query
        - multiple restage queries
        - preserve replicas per tier (no trim)
        - limiting the violating query results
        - custom logging level for tiering
        - [https://github.com/irods/irods_capability_storage_tiering](https://github.com/irods/irods_capability_storage_tiering)

    - Indexing Capability
        - new architecture, discussion
        - reacts to event stream from Audit Plugin
        - leverage same architecture as Automated Ingest

    - CockroachDB Database Plugin
        - cockroach itself released their 2.0
        - performance improvement, geo-partitioning capability
        - our plugin passing full test suite, adding to CI
        - [https://github.com/irods/irods_database_plugin_cockroachdb](https://github.com/irods/irods_database_plugin_cockroachdb)

    - Ceph RADOS Resource Plugin
        - tested against 4.2, adding to CI
        - [https://github.com/irods/irods_resource_plugin_rados](https://github.com/irods/irods_resource_plugin_rados)

    - Multipart Transfer, v5 API
        - iget and iput complete
        - manual testing
        - reliable restarts
        - progress indication
        - standing up testing with CyVerse and TACC
        - deep dive for inclusion with Jargon and PRC
        - work with UWisconsin-Madison
        - [https://github.com/irods/irods_api_plugin_adapter](https://github.com/irods/irods_api_plugin_adapter)
        - [https://github.com/irods/irods_api_plugin_multipart](https://github.com/irods/irods_api_plugin_multipart)

    - Lustre Integration
        - using dedicated hardware and performance testing
        - preparing paper/talk for Lustre User Group (LUG)
        - testing with KTH and TACC
        - two API plugins for registration, one for bulk update and one allowing for iRODS Policy
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

    - Metalnx packaging
        - docker containers
        - [https://github.com/irods-contrib/metalnx-web](https://github.com/irods-contrib/metalnx-web)

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

    - Cloud Browser
        - need to finalize and publish docker image

    - Packaging Working Group (community standards, externals)

- Lazlo Westerhof (Utrecht)
    - pep_api_exec_cmd_pre is not called before msiExecCmd is executed
    - [https://github.com/irods/irods/issues/3867](https://github.com/irods/irods/issues/3867)
    - fix is ready, going through CI
    - alternative faster fix… microservice plugin, or generate engineering build

- Kyle Ferriter (RENCI)
    - demo of OpenID auth plugin against Globus Auth
    - [https://github.com/irods-contrib/irods_auth_plugin_openid](https://github.com/irods-contrib/irods_auth_plugin_openid)

- Othmar Weber (Bayer)
    - Cloud-Compatible iRODS Architecture Discussion
    - regarding open-routing expectation of iRODS servers
    - possible data DMZ, other considerations for point-to-point connections
    - possibly via multipart "topology resolution"
    - will create https://github.com/irods/irods_rfcs for this architecture use case

- S3 frontend presentation of iRODS
    - CyVerse seeing strong upside/requests for iRODS as S3
    - [https://www.minio.io/](https://www.minio.io/)

- Compliance Capability Discussion
    - examples: FAIR, GDPR
    - suggest other use cases

- Provenance Capability Discussion
    - [https://www.w3.org/TR/prov-overview/](https://www.w3.org/TR/prov-overview/)
    - Nirav: project with Air Force interested in utilization vs provenance - chain of custody
 
- Boilerplate for iRODS, history and consortium sustainability for proposal writing
    - Nirav will take first pass, could get it onto the iRODS website

