Title: iRODS Development Update: December 2018
Date: 2018-12-30 13:00
Author: Terrell Russell
Slug: irods-development-update-december-2018
Status: published

Not as much to report this December - everything slows down quite a bit in University land over the holiday break.

Work on the Automated Ingest Framework has proceeded, mostly focused on hardening and testing coverage.

The cacheless and detached storage resource effort is very close to a working implementation for all plugin operations when talking to S3 (through Minio for testing).

And in some experimental work, iRODS can now be installed, configured, and started up while using UUIDs as primary identifiers within the catalog rather than sequences.  This is exciting as we continue to target a future consisting of all iRODS servers in the role of catalog provider (via CockroachDB).

2018 has flown by and we are very happy with our progress.  With 4-1-stable now EOL, all eyes are focused on 2019, increased adoption, and continued community development of higher-order solutions built on top of iRODS.

Happy New Year everyone!



### December Technology Working Group

- 4.1.12

    - Released November 1, 2018
    - 4-1-stable is now EOL

- [4.2.5](https://github.com/irods/irods/milestone/30)

    - 92 issues, 56 bugs

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 103 issues open, 47 bugs
    - clang format
    - irodsMonitor
    - genQuery parser

- New Logger

    - default log levels (currently warn)
        - independently for each of the 10 'types'
            - legacy (rodsLog), server, agent
            - 7 plugins (microservice, resource, api, rule_engine, database, network, auth)
    - syslog default configuration
        - writing to /var/log/irods/irods.log
        - writing to /var/log/irods/irods_delay_queue.log
    - logrotate default configuration
        - weekly, compressed, 26x
    - consider means to point different 'types' to separate log files/locations
    - [RFC](https://github.com/irods/irods_rfcs/blob/master/0001_logging.md)

- Cacheless and Detached Storage Resources

    - remove the need for a compound resource and cache management
    - first work on S3
    - plan to do the same with HPSS, unixfilesystem, WOS, UnivMSS 
    - HOST_MODE=['archive_attached', 'cacheless_attached', 'cacheless_detached']
    - fetching credentials from somewhere else… TBD
    - can my users BYOB(bucket/identity/credentials)?  Only accessible to particular set of users.
    - How would bad authentication to S3 get back to the user?
    - [#1849](https://github.com/irods/irods_resource_plugin_s3/issues/1849)

- Metadata RFC

    - irods::storage_tiering::<property>
    - filesystem::<property>
    - want to document the usage patterns
    - any other conventions that we should consider?
    - [RFC](https://github.com/irods/irods_rfcs/blob/master/0004_standard_metadata_attributes.md)

- Metadata Templates Working Group

    Will meet on Tuesday, Jan 15 2019, 10am EST

- Active Development Work

    - Python iRODS Client (PRC)
        - PAM support has been merged to master
        - Awaiting Docker in CI for testing/release
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - Access Protocols
        - NFS4J project to surface iRODS as NFS
        - [https://github.com/irods/irods_client_nfsrods](https://github.com/irods/irods_client_nfsrods)
        - Samba/CIFS/SMB project to surface iRODS as SMB
        - caching and performance
        - containerization

    - iRODS Capability - Automated Ingest
        - added S3 source functionality
        - working to capture edge cases, keep cache true
        - [https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)

    - Lustre Integration
        - beginning tests on chameleon cloud with partners
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

    - Python Rule Engine Plugin
        - GenQuery iterator as module, genquery.py
        - now using C++17
        - refactored compilation units (due to boost::python) (reduce rebuild times)
        - working with irods/irods master

    - Storage Tiering Capability Package
        - improved handling of large number of files
        - considering data transfer protocol abstraction
        - [https://github.com/irods/irods_capability_storage_tiering](https://github.com/irods/irods_capability_storage_tiering)

    - Metalnx packaging
        - finalizing v2.0.0
        - [https://github.com/irods-contrib/metalnx-web](https://github.com/irods-contrib/metalnx-web)

    - iRODS clients listing
        - adding to website

    - Cacheless and Detached S3
        - whiteboarded
        - working on initial prototype

    - Continous Integration (CI)
        - refactoring to use Docker
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

- Ongoing Items

    - Multipart Transfer, v5 API
        - evaluating approach and timeline
        - [https://github.com/irods/irods_api_plugin_adapter](https://github.com/irods/irods_api_plugin_adapter)
        - [https://github.com/irods/irods_api_plugin_multipart](https://github.com/irods/irods_api_plugin_multipart)

    - Indexing Capability
        - new architecture, discussion
        - reacts to event stream from Audit Plugin
        - leverage similar architecture as Automated Ingest

    - Swagger REST API
        - working demo with metadata templates
        - [https://github.com/irods-contrib/irods_rest_services](https://github.com/irods-contrib/irods_rest_services)

    - Cloud Browser
        - need to finalize and publish docker image

- Discussion Items

    - Coordinate on release of Jupyter Lab Notebook integration
        - [https://github.com/towicode/IJab](https://github.com/towicode/IJab)
