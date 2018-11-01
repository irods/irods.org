Title: iRODS Development Update: October 2018
Date: 2018-10-31 11:00
Author: Terrell Russell
Slug: irods-development-update-october-2018
Status: published

October was very quick.  We've had presence at converences and meetings around the world and will be in Dallas for SC18 in a couple weeks.  [Please register for our Workshop]({filename}/pages/sc18.html) if you'll be in town.

Work on 4.1.12 is complete.  We expect to release within a day or so once the tests pass with the committed code.

Look for a 4.2.5 release soon as it will hold new functionality for NFSRODS as well as new work to support exception handling in the policy engine ('_except' PEPs).

[Automated Ingest](https://github.com/irods/irods_capability_automated_ingest) v0.3.3 was released with SSL support.

Our move from vSphere to Docker is making progress.  We have a first pass at a standalone Jenkins container that can build and test iRODS code.  It has been demonstrated to pass our entire suite in 25 minutes (down from ~8 hours in our current CI).



### October Technology Working Group

- [4.1.12](https://github.com/irods/irods/milestone/27)

    - No open issues
    - Releasing this week
    - 4-1-stable is now EOL

- [4.2.5](https://github.com/irods/irods/milestone/30)

    - 79 issues, 50 bugs.

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 109 issues open, 48 bugs.
    - moving to new clang/cmake/externals
    - c++17
    - clang format
    - new logging
    - irodsMonitor
    - genQuery parser

- Metadata Templates Working Group

    Met on October 16 and solidified selection of a many-to-many representation in iRODS AVUs for schema information.

- Active Development Work

    - Python iRODS Client (PRC)
        - released 0.8.1
        - 0.9.0 will include PAM, patch exists, need to automate a test
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Access Protocols
        - NFS4J project to surface iRODS as NFS, passing tests, scoping a first release
        - [https://github.com/irods/irods_client_nfsrods](https://github.com/irods/irods_client_nfsrods)
        - Samba/CIFS/SMB project to surface iRODS as SMB

    - iRODS Capability - Automated Ingest
        - released v0.3.3 - added SSL capability
        - creating performance lab to select the fastest queue/backend combination
        - [https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)

    - Multipart Transfer, v5 API
        - evaluating approach and timeline
        - [https://github.com/irods/irods_api_plugin_adapter](https://github.com/irods/irods_api_plugin_adapter)
        - [https://github.com/irods/irods_api_plugin_multipart](https://github.com/irods/irods_api_plugin_multipart)

    - Lustre Integration
        - beginning tests on chameleon cloud
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

    - Python Rule Engine Plugin
        - GenQuery iterator as module, genquery.py
        - flushing bugs in the iRODS Rule Engine Plugin Framework and GenQuery itself

    - Metalnx packaging
        - finalizing v2.0.0
        - [https://github.com/irods-contrib/metalnx-web](https://github.com/irods-contrib/metalnx-web)

    - iRODS clients listing
        - adding to website
        - iRODS-REST being contributed to the Consortium

    - Continous Integration (CI)
        - refactoring to use Docker
        - public Jenkins
        - move to pull-request and peer-review
        - adding CockroachDB database plugin
        - adding Ceph RADOS resource plugin
        - adding QueryArrow database plugin
        - adding Nestle R Client Library

- Ongoing Items

    - Indexing Capability
        - new architecture, discussion
        - reacts to event stream from Audit Plugin
        - leverage similar architecture as Automated Ingest

    - Storage Tiering Capability Package
        - considering data transfer protocol abstraction
        - [https://github.com/irods/irods_capability_storage_tiering](https://github.com/irods/irods_capability_storage_tiering)

    - Swagger REST API
        - working demo with metadata templates
        - [https://github.com/irods-contrib/irods_rest_services](https://github.com/irods-contrib/irods_rest_services)

    - Cloud Browser
        - need to finalize and publish docker image
