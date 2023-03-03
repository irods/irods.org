Title: iRODS Development Update: July 2019
Date: 2019-07-31 15:00
Author: Terrell Russell
Slug: irods-development-update-july-2019
Status: published

We're picking up the pace again after [UGM2019]({filename}/pages/ugm2019.html).  Slides, papers, and videos of the talks have all been posted.  Reservations have already been made for UGM2020 in Tucson, AZ!

Our work on NFSRODS has progressed and we now have an NFSv4-aware extended ACLs implementation under testing.  This should allow multiple owner/group permissions within iRODS to be visible and accessible on the NFS side of the mountpoint.  The unix commands `nfs4_getfacl` and `nfs4_setfacl` are behaving as expected, so far.  If you're interested in this work, we'd love to have more testers.

The [cacheless S3 resource]({static}/uploads/2019/James-iRODS-S3_Resource_Plugin_Cacheless_and_Detached-slides.pdf) code has been merged and will be released for 4.2.6 soon.

The refactoring of how replication works within iRODS is nearly complete.  We have introduced a new state so that replicas can now be either 'good', 'stale', or 'intermediate'.  We are very excited to be collapsing nearly ten different codepaths down to one or two.

While refactoring and building new libraries useful in 4.2.x, we're revisiting an effort to [carve out clean C](https://github.com/irods/irods_client_library_c) and [C++ Client Libraries](https://github.com/irods/irods_client_library_cpp) for iRODS.  This will force us to use the interfaces we're defining as well as serve as the publicly supported definition of the iRODS API.

### July Technology Working Group

- [4.2.7](https://github.com/irods/irods/milestone/32)

    - 122 issues open, 71 bugs

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 121 issues open, 48 bugs
    - clang6, cmake3.11
    - clang format
    - c++17
    - new logger (rsyslog or stdout)
    - iRODS Query Iterator
    - iRODS Filesystem
    - iRODS IOStreams
    - iRODS Thread Pool
    - iRODS Connection Pool
    - iRODS Query Processor
    - irodsDelayServer
    - Ubuntu18 will be supported
    - Ubuntu14 will not be supported, LTS ended April 2019

- Active Development Work

    - Python iRODS Client (PRC)
        - dynamic rule inputs PR merged
        - OpenID integration PR under discussion
        - Awaiting Docker in CI for testing/release
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Cacheless and Detached S3
        - working on multiple bucket, replication scenarios
        - testing complete
        - pull request, under review

    - NFSRODS
        - in testing in corporate environment
        - iRODS multi-owner <-> unix
        - NFS POSIX test suite, successes and known failures
        - released v0.8.0 at UGM2019
        - need to work towards extended ACLs for 1.0.0
        - containerization and CI
        - [https://github.com/irods/irods_client_nfsrods](https://github.com/irods/irods_client_nfsrods)

    - iRODS Capability - Automated Ingest
        - working to test edge cases, keep cache true
        - testing with storage tiering, new irodsDelayServer
        - [https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)

    - Multipart Transfer, v5 API
        - investigating new approach
        - based on new dstream operator
        - involves a new irods console
        - [https://github.com/irods/irods/issues/4336](https://github.com/irods/irods/issues/4336)

    - Lustre Integration
        - testing with partners
        - performance optimizations
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

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

    - Metalnx
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
        - adding publishing
        - adding indexing
        - adding NFSRODS
        - adding collection mtime rule engine plugin

- Background Items

    - Samba/CIFS/SMB project to surface iRODS as SMB
    - Python Rule Engine Plugin
    - CockroachDB Database Plugin
    - Storage Tiering Capability Package
    - Swagger REST API

