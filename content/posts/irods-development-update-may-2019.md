Title: iRODS Development Update: May 2019
Date: 2019-05-31 15:00
Author: Terrell Russell
Slug: irods-development-update-may-2019
Status: published


We're almost ready for Utrecht.  [Register today!](https://irods.org/ugm2019)

The UGM 2019 abstracts have been posted.  The agenda is being finalized, and will be available within the next couple days.

The milestone for iRODS 4.2.6 has all its issues closed, and is being put through the paces.  Expect a release as soon as all the plugins are green.

Our Dockerized CI is nearly complete.  This is a major step up for us as it will provide unparalleled flexibility as we support additional platforms and plugins, but also it means that outside developers can build and test the same way we do.

We have been testing [NFSRODS](https://github.com/irods/irods_client_nfsrods) in an enterprise environment and have finalized the access and permission model to span the differences between Unix/NFS and iRODS.  The talk in Utrecht will be demonstrating its design decisions, capabilities, and performance.  We welcome all feedback - this is a very important new client and expect it to be deployed in a variety of very interesting environments.

The new [query_processor library](https://github.com/irods/irods/blob/4-2-stable/lib/core/include/query_processor.hpp) has recently landed in the source tree, and will be available from 4.2.6 and beyond.  It will allow the server code to issue a General Query and not have to worry about handling continuations or error codes.  This is the third of three new libraries to be included in 4.2.6.

We are working to implement a third 'state' of data in iRODS.  Since the beginning, physical data replicas in iRODS could be marked 'good' or 'stale'.  This is generally handy since updating replicas somewhere far away could be expensive and undesireable.  However, it also led to some confusing corner cases, since data that was still being moved around was sometimes marked 'good' before it was ready.  We are adding a third state, 'intermediate', and working through the codebase to make all the relevant calls honor (and properly ignore) this new third state appropriately.  Accessing a replica in the intermediate state will be disallowed.  It should be transparent to existing usage patterns but remove an entire class of bug we've seen over the last few years with networks under contention and retry logic being required on the client side to deal with the strange corner cases.  'ils' output will now report good replicas with '&' (same as before), stale replicas with 'X' (a change from ' '), and intermediate replicas with '?' (the new, transient state).  This will probably land in 4.2.7 and be included in the master branch for 4.3.0+.

Last month's discussion around how to satisfy competing interests with regards to server logging, foreground behavior, Non-Package Installs, and Docker interaction has led us to plan to offer two settings in 4.3+.  One will define where logging is sent (rsyslog or stdout) while the other defines whether the server is installed/managed by a package.  These two will give enough flexibility for Docker deployments, regular packages, HPC centers, and scenarios with centralized logging to all be satisfied.

The iRODS Consortium has been hearing similar requests for various parallel file systems to play well with iRODS.  One of the biggest hurdles for iRODS to play nicely with these systems is for the parallel file systems to continue handling their existing interactions and job management at high speed but for the iRODS catalog to also know what has happened.  The different parallel file systems have different (or no!) ways to inform other software about those changes.  We are considering spinning up a Changelog Working Group to help codify and standardize a common format for these systems to emit their changelogs.  This would encourage compatibility and transferability across different systems.  Please get in touch if this is interesting to you or you have a use case that you would like to make sure we keep in mind as the design sessions get started.




### May Technology Working Group

- [4.2.6](https://github.com/irods/irods/milestone/31)

    - 1 issue open, 0 bugs

- [4.2.7](https://github.com/irods/irods/milestone/32)

    - 108 issues open, 63 bugs

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 117 issues open, 49 bugs
    - clang6, cmake3.11
    - c++17
    - genQuery iterator
    - new logger (rsyslog or stdout)
    - irods::filesystem
    - irods::iostreams
    - irods::query_processor
    - clang format
    - irodsDelayServer
    - Ubuntu18 will be supported
    - Ubuntu14 will not be supported, LTS ended April 2019

- Active Development Work

    - Python iRODS Client (PRC)
        - OpenID integration PR under discussion
        - Awaiting Docker in CI for testing/release
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Cacheless and Detached S3
        - works with current iRODS parallel transfer
        - moved to shared memory for new multi-process transfer
        - working on multiple bucket, replication scenarios
        - testing in progress

    - NFSRODS
        - in testing in corporate environment
        - release 1.0.0 is imminent
        - containerization and CI
        - [https://github.com/irods/irods_client_nfsrods](https://github.com/irods/irods_client_nfsrods)

    - iRODS Capability - Automated Ingest
        - working to test edge cases, keep cache true
        - testing with storage tiering, new irodsDelayServer
        - [https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)

    - Multipart Transfer, v5 API
        - investigating new approach
        - based on new dstream operator
        - [https://github.com/irods/irods/issues/4336](https://github.com/irods/irods/issues/4336)

    - Lustre Integration
        - testing with partners
        - performance optimizations
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

    - Storage Tiering Capability Package
        - abstraction work complete, and merged
        - policy composition as a practice
        - releasing before UGM
        - [https://github.com/irods/irods_capability_storage_tiering](https://github.com/irods/irods_capability_storage_tiering)

    - Indexing Capability
        - rule engine plugin(s)
        - similar approach as storage tiering
        - testing beginning
        - first, elasticsearch, both full_text and AVUs
        - second implementation coming for Apache Solr

    - Publishing Capability
        - rule engine plugin(s)
        - nearly identical to indexing
        - initial implementation to push to data.world

    - Metalnx packaging
        - 2.0.0 released!
        - awaiting CI
        - [https://github.com/irods-contrib/metalnx-web](https://github.com/irods-contrib/metalnx-web)

    - Cloud Browser
        - multi-dataobject move
        - need to finalize and publish Docker image

    - Continuous Integration (CI)
        - refactoring to use Docker
            - parallelized test runs (down from 8h to 30m)
            - developer friendly - can run full tests locally
        - public Jenkins
        - move to pull-request and peer-review
        - adding CockroachDB database plugin
        - adding Ceph RADOS resource plugin
        - adding QueryArrow database plugin
        - adding Nestle R Client Library
        - adding Metalnx
        - adding baton/tears
        - adding automated ingest
        - adding storage tiering
        - adding NFSRODS
        - adding collection mtime rule engine plugin

- Background Items

    - Samba/CIFS/SMB project to surface iRODS as SMB

    - Python Rule Engine Plugin
        - working with irods/irods master

    - CockroachDB Database Plugin
        - refactored to use UUID
        - testing for concurrent writes
        - testing iRODS schema assumptions
        - not performant enough at this time

    - Swagger REST API
        - working demo with metadata templates
        - [https://github.com/irods-contrib/irods_rest_services](https://github.com/irods-contrib/irods_rest_services)
