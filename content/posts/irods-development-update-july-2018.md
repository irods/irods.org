Title: iRODS Development Update: July 2018
Date: 2018-07-31 22:00
Author: Terrell Russell
Slug: irods-development-update-july-2018
Status: published

We're starting to pick up the pace again -- and we've got quite a few updates this month.

Earlier this month we posted [An Automated Ingest and Sync Policy Example]({filename}/posts/automated-ingest-and-sync-policy-example.md) where we shared a policy set that embodies "nearly every one of our new proofs-of-concept and potential members in the last year."  It's quite powerful and requires only a bit of configuration to set up - check it out.

The [irods/externals repository](https://github.com/irods/externals) has been updated and all the software that iRODS depends on has been bumped to their latest versions for what will become iRODS 4-3-stable.  This includes Clang 6.0, CMake 3.11, and Boost 1.67.  The repositories at [packages.irods.org](https://packages.irods.org) have been populated and if you're building the master branch of iRODS, you can install these new versions alongside your existing irods-externals (the version numbers are included in the package names so they do not collide with one another). 

With the landing of 4.3.0-related externals, we are readying for the first run of clang-format and the integration of the work to refactor logging.

One of the limitations of using the Python Rule Engine Plugin has proven to be the lack of an integrated GenQuery iterator (in the iRODS Rule Language, we have [LIGQ](https://docs.irods.org/4.2.3/plugins/irods_rule_language/#language-integrated-general-query)).  We are working on making a `genquery_iterate.py` module available so GenQuery results can be returned as a Python iterable.

We have begun work on a performance lab to deterministically select the best queueing technology for the [automated ingest framework](https://github.com/irods/irods_capability_automated_ingest).  We have very short jobs (we're usually just issuing a filesystem `stat()`) and would like to know that any sized filesystem can be scanned in a set amount of time by simply adding more workers.  The first release was based on [RQ](http://python-rq.org/), our current prototype is based on a default [Celery](http://www.celeryproject.org/) implementation, and our other candidates to be tested include [RabbitMQ](https://www.rabbitmq.com/) and [Bee-Queue](https://github.com/bee-queue/bee-queue).


### July Technology Working Group

- [4.1.12](https://github.com/irods/irods/milestone/27)

    We have delivered an engineering build and are awaiting test results before release.

- [4.2.4](https://github.com/irods/irods/milestone/29)

    61 items open, 37 bugs.  Readying a release to include the 11 issues that have already been closed.

- [4.3.0](https://github.com/irods/irods/milestone/16)

    108 issues open, 50 bugs.

- Metadata Templates Working Group

    Met on July 17 and discussed initial reworking of the Swagger definition of metadata templates.  This work will settle and be included in the v2.0.0 release.

- Active Development Work

    - Python iRODS Client (PRC)
        - work towards 0.8.1
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Access Protocols
        - NFS4J project to surface iRODS as NFS
        - Samba/CIFS/SMB project to surface iRODS as SMB
        
    - iRODS Capability - Automated Ingest
        - moved to celery queueing
        - setting up performance lab
        - needs more documentation / examples / use cases
        - [https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)

    - CockroachDB Database Plugin
        - adding to CI
        - vanilla installation is slow, need community insight
        - [https://github.com/irods/irods_database_plugin_cockroachdb](https://github.com/irods/irods_database_plugin_cockroachdb)

    - Ceph RADOS Resource Plugin
        - adding to CI, basic four-node cluster
        - [https://github.com/irods/irods_resource_plugin_rados](https://github.com/irods/irods_resource_plugin_rados)

    - Multipart Transfer, v5 API
        - demo'd at UGM, hardening before release
        - testing at distance
        - better error messages
        - [https://github.com/irods/irods_api_plugin_adapter](https://github.com/irods/irods_api_plugin_adapter)
        - [https://github.com/irods/irods_api_plugin_multipart](https://github.com/irods/irods_api_plugin_multipart)

    - Lustre Integration
        - working on testing with partners
        - integrated with CockroachDB
        - multiple registration locations / directory mappings now working
        - working on multi-MDS/MDT support
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

    - Metalnx packaging
        - v2.0.0 coming soon
        - finalizing issues and metadata templates implementation
        - [https://github.com/irods-contrib/metalnx-web](https://github.com/irods-contrib/metalnx-web)

    - Indexing Capability
        - new architecture, discussion
        - reacts to event stream from Audit Plugin
        - leverage same architecture as Automated Ingest

- Ongoing Items

    - Storage Tiering Capability Package
        - considering data transfer protocol abstraction
        - [https://github.com/irods/irods_capability_storage_tiering](https://github.com/irods/irods_capability_storage_tiering)

    - QueryArrow Database Plugin
        - adding to CI
        - [https://github.com/xu-hao/QueryArrow](https://github.com/xu-hao/QueryArrow)

    - Nestle R Client Library
        - adding to CI
        - [https://github.com/irods/irods_client_library_r_cpp](https://github.com/irods/irods_client_library_r_cpp)

    - Swagger REST API
        - working demo with metadata templates
        - [https://github.com/irods-contrib/irods_rest_services](https://github.com/irods-contrib/irods_rest_services)

    - Cloud Browser
        - need to finalize and publish docker image

    - Packaging Working Group (community standards, externals)

    - [Demo of Minio S3 Gateway for iRODS](https://bioteam.net/2018/07/exposing-your-irods-zone-as-aws-s3-object-storage/)
        - John Jacquay, BioTeam
        - "This technology bridges the gap between cloud-native applications and your data stored in iRODS. Now any modern S3 aware application can utilize iRODS data as if it was S3 cloud object storage."

    - iRODS client discussion
        - commands, cyberduck, web GUIs
        - future directions
        - clients listing page on the website (show options, examples)
        - sprint and feedback

    - iRODS market analysis (crowdsourced)
        - to be shared soon

    - iRODS Docker Images published as part of release process
        - iRODS resource server as docker image
        - follow up conversation, possible working group
        - reference test images
