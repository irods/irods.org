Title: iRODS Development Update: March 2020
Date: 2020-03-23 15:00
Author: Terrell Russell
Slug: irods-development-update-march-2020
Status: published


This month's update captures the work done just prior to the Unversity of North Carolina (and the rest of the world) significantly changing work patterns due to the ongoing COVID-19 pandemic.  We hope that all of you are safe and trying to keep your part of the world going strong while we weather the worst of this storm.  Please reach out if there is anything you think the community can help you with.

We have created a couple new milestones at GitHub to better capture the amount of remaining work for each release.  Until now, the Consortium has provided a [roadmap]({filename}/pages/roadmap.html) with the big picture changes coming in the next year or two as well as maintaining branches of the main code repository, one for each 'major' release set (aka 4-1-stable, 4-2-stable, etc.).  Upon discussion with a few Consortium Members, we will now provide a Backlog milestone for things that are not-yet-pulled-into a particular release.  The new [4.2 Backlog](https://github.com/irods/irods/milestone/34) milestone captures the items not already specifically targeted for 4.2.8 or 4.2.9.  Feedback on this new process is welcome.

In addition to the monthly Technology Working Group, the iRODS Consortium has been holding monthly meetings of the Metadata Templates Working Group for a couple years.  This next month, we are adding a third standing meeting for the Authentication Working Group.  The existing iRODS authentication plugins allow for a single challenge/response conversation to determine whether to allow a particular API call to proceed.  This is insufficient in the face of multi-factor or multi-party authentication protocols (like OpenID, etc.)  This new working group's charter is to define and implement a new authentication mechanism for iRODS that is more flexible and can handle the full conversation between a client and third-party identity provider, regardless of the technology chosen to handle the formal authentication.  Meetings are scheduled for the fourth Tuesday of each month at 10am Eastern.

New work this month focused on defining a client API whitelist for iRODS.  There has long been an understanding that any API available in the source code was available for client and server use (because the server *is* a client when speaking to another server), but we need something better.  Server-to-server communication can be identified and allowed greater latitude to make use of the iRODS API, but regular clients should be boxed in with a whitelist of allowable API endpoints.  This will limit the surface area of 'attack' for the bad guys and define a supportable surface for the Consortium moving forward.  This will not affect any existing, well-behaved clients.

Other work this month included efforts to make the AWS Lambda function allow S3->SNS->Lambda connections, a finalization of the new Metadata Guard Policy Engine and Logical Quotas, significant progress on the Cacheless S3 plugin with dstreams, and Hard Links for use with NFSRODS.


### March Technology Working Group

- [4.2.8](https://github.com/irods/irods/milestone/33)

    - 30 issues, 15 bugs
    - new user/group library
    - atomic metadata api plugin
    - proxy objects for old c-style structures
    - add showCollAcls on upgrade
    - client API whitelist
    - all new externals (clang8, cmake3.15, etc.)

- [4.2.9](https://github.com/irods/irods/milestone/35)

    - 20 issues, 15 bugs
    - intermediate replicas
    - logical locking
    - delay execution server with connection pool

- [4.2 Backlog](https://github.com/irods/irods/milestone/34)

    - 157 issues, 86 bugs

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 112 issues, 43 bugs
    - clang format
    - new logger (rsyslog or stdout)
    - irodsDelayServer refactoring / with implicit remote()
    - Ubuntu18 will be supported
    - CentOS8 will be supported

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - progress towards SwaggerAPI
    - working towards demo of Metalnx-API-iRODS

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - to provide a more flexible authentication mechanism to the iRODS Server
    - initial use cases driven by multi-factor and OpenID usages of the PAM plugin
    - keycloak use cases relevant here as well

- TRiRODS

    - [https://irods.org/trirods](https://irods.org/trirods)
    - Feb 19, 2020 - Jason Coposky
    - Policy Composition: Principles and Practice
    - Video: https://www.youtube.com/watch?v=LP6ywWCTB8A

- New Development Work

    - Client API Whitelist
        - will allow server to enforce more limited set of client API calls

- Active Development Work

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - significant README.md update
        - merged Chris Smeele's Query operator
        - removed memory leaks for multiple/looping microservice calls

    - [Metadata Guard Policy Engine](https://github.com/irods/irods_rule_engine_plugin_metadata_guard)
        - allows metadata to be protected by configuration
        - useful alongside other policy engines

    - [AWS S3 Lambda](https://github.com/irods/irods_client_aws_lambda_s3)
        - added SSL support
        - added S3->SNS->Lambda support
        - working to add multibucket support
        - initial release
            - s3 is a fully decoupled system
            - without ability to convey rename
            - loses data object metadata on rename
        - later release
            - could brute-force confirm checksums to detect renames
            - would persist metadata

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - working to initial release alongside 4.2.8
        - tests almost complete
        - uses new user and group library

    - [Hard Links Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_hard_links)
        - added RULE_ENGINE_SKIP_OPERATION as new REPF return code
        - partially implemented
            - supports creation of links
            - supports removal of links
            - partial support for trimming links
        - writing tests for corner cases

    - C++-based REST API
        - put/get working, streaming working
        - JWT token auth and tickets working
        - working on packaging
        - part of new Data Transfer Nodes pattern

    - C++ S3 API
        - defined via Swagger
        - uses C++ REST API
        - put/get working
        - part of new Data Transfer Nodes pattern

    - Storage Tiering Capability
        - refactored to use policy composition
        - will release with 4.2.8

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - awaiting CI

    - [Cacheless and Detached S3](https://github.com/irods/irods_resource_plugin_s3)
        - multiple code reviews
        - working prototype
            - multipart upload and download using the new S3 transport class
        - working on cases that still need a local cache file
            - all cases that are not full multipart uploads and downloads
        - awaiting CI

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - merging CU Boulder's sssd support
        - needs SSL
        - needs Hard Links
        - awaiting CI

    - Parallel Transfer Engine
        - based on new dstream operator
        - available via new C++ client library
        - all new transfers within iRODS will use this single method to move data

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - needs more README
        - ready to release for 4.2.8
        - second implementation coming for Apache Solr

    - [Publishing Capability](https://github.com/irods/irods_capability_publishing)
        - needs more README
        - ready to release for 4.2.8

    - Continuous Integration (CI)
        - almost hands-free release button
            - found two issues in externals
            - serialized for now
            - added plugins
        - adding coverage
            - CockroachDB database plugin
            - Cacheless S3 plugin
            - Ceph RADOS resource plugin
            - CephFS via unixfilesystem
            - QueryArrow database plugin
            - Nestle R Client Library
            - Metalnx
            - baton/tears
            - automated ingest
            - storage tiering
            - publishing
            - indexing
            - NFSRODS
            - collection mtime rule engine plugin

- Background Items

    - Metalnx
        - working to eventually remove database dependency
        - testbed for metadata templates initial implementation
        - search and indexing update is very fast
        - want to turn on quotas visibility
        - awaiting CI
        - [https://github.com/irods-contrib/metalnx-web](https://github.com/irods-contrib/metalnx-web)
    - Automated Ingest Capability
        - refactoring to abstract the source filesystem/object
        - investigating splitting storage backends
            - celery workers -> redis
            - python/iRODS cache -> scylla (C++ distributed keystore)
        - [https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)
    - Parallel Filesystem Integration
        - iRODS API plugin
        - have split BeeGFS and Lustre implementations into aggregator and listener
        - testing against known configurations        
    - SMBRODS project to surface iRODS as SMB
    - CockroachDB Database Plugin
    - Cloud Browser
    - Member Ticketing System

- Discussion
