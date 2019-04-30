Title: iRODS Development Update: April 2019
Date: 2019-04-30 15:00
Author: Terrell Russell
Slug: irods-development-update-april-2019
Status: published


A pretty full month for development this time - we're in a full sprint until the Netherlands.

It's the last day for submission of UGM2019 abstracts! [Register today and submit your talks for Utrecht](https://irods.org/ugm2019)!

In working towards our 4.3.0 release, we now have parallel building and testing of our many plugins.  We've got a prototype of topology testing Dockerized and hope to have Federation completed soon as well.  We can start building and testing iRODS in parallel within days.  This has been a long time coming.

[NFSRODS](https://github.com/irods/irods_client_nfsrods) is all but ready - expect a first release soon.  It has already been deployed into an enterprise environment and is being tested for performance and compliance.  We simplified the security model to assume identity/user management is already in place.  The new model assumes that the user traversing the mount point is already authenticated - and presents that user with a view of their iRODS collections and data objects.  It's very clean.

[Metalnx 2.0.0 was released a couple weeks ago!]({files}/posts/metalnx-2-0-0-is-released.md)  Since the merger of Dell and EMC was announced in 2015, this release marks the completion of the contribution of the codebase to the iRODS Consortium.  We'll continue to work to make Metalnx even easier to stand up and maintain.  It's nice to have a few different iRODS clients production-ready.

We are investigating new transport mechanisms within iRODS.  [With our new stream operators](https://irods.org/trirods/), we are looking into new approaches that work with [UDT](http://udt.sourceforge.net/), [FDT](http://monalisa.cern.ch/FDT/), and [RDMA](https://en.wikipedia.org/wiki/Remote_direct_memory_access).  If you have interest or working knowledge of best practices or design criteria, please get in touch.  If there is enough interest, we could schedule a quick conference call (or even spin up a Working Group).

We have isolated and fixed [an issue within the irodsReServer](https://github.com/irods/irods/issues/4351) that will be included in 4.2.6.  Also to be included is some [additional](https://github.com/irods/irods/issues/4340) [work](https://github.com/irods/irods/issues/4346) on the new irods::filesystem collection iterator.  As we continue to refactor our own code, the new things are being more deeply exercised.  Expect this release within the week.

In the run-up to iRODS 4.3.0, we have settled on rsyslog and JSON for the new logging infrastructure.  However, the option to run iRODS as a Non-Package Install requires a bit more thinking (rsyslog may not be running or under the control of the user running the iRODS server).  [We've started a promising conversation around how these options can play well with each other (perhaps a 'foreground' option...).  Please share your input in the Google Group.](https://groups.google.com/forum/#!topic/irod-chat/UMtIONRhwvo)


### April Technology Working Group

- [4.2.6](https://github.com/irods/irods/milestone/31)

    - 102 issues open, 61 bugs

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 112 issues open, 48 bugs
    - clang6, cmake3.11
    - c++17
    - genQuery iterator
    - new logger
    - irods::filesystem
    - irods::iostreams
    - clang format
    - irodsDelayServer
    - Ubuntu18 will be supported
    - Ubuntu14 will not be supported, LTS ends April 2019
    - Considering removal of Non-Package Install optional_arguments
        - due to rise of containers
        - due to rsyslog, logrotate

- Active Development Work

    - Python iRODS Client (PRC)
        - OpenID integration PR under discussion
        - Awaiting Docker in CI for testing/release
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Cacheless and Detached S3
        - works with current iRODS parallel transfer
        - moved to shared memory for new multi-process transfer
        - slow download speed, working on issue

    - NFSRODS
        - have removed Kerberos as requirement
        - in testing in corporate environment
        - containerization and CI
        - [https://github.com/irods/irods_client_nfsrods](https://github.com/irods/irods_client_nfsrods)

    - iRODS Capability - Automated Ingest
        - working to test edge cases, keep cache true
        - testing with storage tiering, new irodsDelayServer
        - [https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)

    - Multipart Transfer, v5 API
        - investigating new approach
        - [https://github.com/irods/irods/issues/4336](https://github.com/irods/irods/issues/4336)

    - Lustre Integration
        - working on testing with partners
        - preparing for LUG 2019
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

    - Storage Tiering Capability Package
        - abstraction work nearly complete
        - releasing before UGM
        - [https://github.com/irods/irods_capability_storage_tiering](https://github.com/irods/irods_capability_storage_tiering)

    - Indexing Capability
        - rule engine plugin(s)
        - similar approach as storage tiering
        - initial implementation complete
        - testing beginning
        - first, elasticsearch, both full_text and AVUs

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
