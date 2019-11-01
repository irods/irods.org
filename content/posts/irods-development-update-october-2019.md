Title: iRODS Development Update: October 2019
Date: 2019-10-31 14:00
Author: Terrell Russell
Slug: irods-development-update-october-2019
Status: published

Happy Halloween.  Time is flying.  [SC19 in Denver]({filename}/pages/sc19.html) is almost here.

The work on Intermediate Replicas is now public in a pull request and awaiting passage through CI.  It will land on master and get ported to 4-2-stable as soon as 4.2.7 is out the door.  The main author was allowed to shave once the PR was submitted.  It had been a while.

Initial work on the new C++ REST API has been completed and is demonstrating a tantalizing new set of possibilities for iRODS.  In addition, a native S3 presentation may be coming our way.

We've been working closing with the University of Colorado Research Computing to get Logical Quotas ready for primetime.  An early implementation in the iRODS Rule Language showed promise, and is now being finalized in C++ as a rule engine plugin.  A separate effort will begin for providing hard links to iRODS.  NFSRODS presents an opportunity for clients to issue syscalls including link().  We are looking to answer the request with another rule engine plugin that does the proper bookkeeping on the server and, if installed, will provide hard link functionality to all clients, not just NFSRODS.

Continuous Integration is hard - but it's nearly complete.  We've now covered two databases, seven plugins, and core tests, topology, and federation.  One more plugin and one more database remain - then we can release 4.2.7!


### October Technology Working Group

- [4.2.7](https://github.com/irods/irods/milestone/32)

    - 157 issues open, 101 bugs

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 111 issues open, 42 bugs
    - all new externals (clang8, cmake3.15, etc.)
    - clang format
    - new logger (rsyslog or stdout)
    - irodsDelayServer refactoring / with implicit remote()
    - Ubuntu18 will be supported
    - Ubuntu14 will not be supported, LTS ended April 2019

- New Development Work

    - SURF OpenID/OAuth2 investigation
    - New S3 API using new REST API

- Active Development Work

    - New C++-based REST API
        - put/get working, streaming working
        - JWT token auth working
        - part of new Data Transfer Node pattern

    - Python iRODS Client (PRC)
        - OpenID integration PR under discussion
        - awaiting CI
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Cacheless and Detached S3
        - released 2.6.1 and 2.6.2 this month
        - awaiting CI
        - [https://github.com/irods/irods_resource_plugin_s3](https://github.com/irods/irods_resource_plugin_s3)

    - NFSRODS
        - released 0.9.0 - includes NFSv4 ACLs
        - awaiting CI
        - [https://github.com/irods/irods_client_nfsrods](https://github.com/irods/irods_client_nfsrods)

    - iRODS Capability - Automated Ingest
        - needs refactoring to abstract the source filesystem/object
        - [https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)

    - Parallel Transfer Engine
        - based on new dstream operator
        - available via new C++ client library

    - Parallel Filesystem Integration
        - iRODS API plugin
        - have split BeeGFS and Lustre implementations into aggregator and listener
        - testing against known configurations
        
    - Indexing Capability
        - needs more README
        - ready to release for 4.2.6
        - second implementation coming for Apache Solr

    - Publishing Capability
        - needs more README
        - ready to release for 4.2.6

    - Metalnx
        - removing caching for users/group
        - needs to be federation-ready
        - working to remove database dependency
        - testbed for metadata templates initial implementation
        - awaiting CI
        - [https://github.com/irods-contrib/metalnx-web](https://github.com/irods-contrib/metalnx-web)

    - Cloud Browser
        - open issue for multi-dataobject move
        - need to finalize and publish docker image

    - Continuous Integration (CI)
        - refactored to use Docker
            - backfilling pre-Docker coverage
            - almost ready to power a 4.2.7 release
        - public Jenkins
        - move to pull-request and peer-review
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

    - SMBRODS project to surface iRODS as SMB
    - Python Rule Engine Plugin
    - CockroachDB Database Plugin
    - Storage Tiering Capability Package
