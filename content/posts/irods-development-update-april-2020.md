Title: iRODS Development Update: April 2020
Date: 2020-04-15 17:00
Author: Terrell Russell
Slug: irods-development-update-april-2020
Status: published


First of all, we hope everyone is safe.  Please reach out if the iRODS Community can help in any way.

While working from home, we have made some tremendous progress towards getting 4.2.8 out the door.  It's shaping up to be the biggest release since 4.2.0 (over 100 issues closed).  We are down to a few items and are ready to start the release machinery.  This month saw new work on the addition of the '_finally' state to the policy enforcement point (PEP) Flow Control state machine.  We are confirming support for Ubuntu18 (indeed, just in time for the release of Ubuntu20) and we are modernizing the NetCDF microservices for use with iRODS 4.2.x.

The upcoming 12th Annunal iRODS User Group Meeting (June 9-12) has been converted to a Virtual event.  Both [registration ($20 w/ T-Shirt or FREE)](https://irods.org/ugm2020) and the [call for speakers](https://irods.org/ugm2020/cfp) are open.  Please join us and share your ongoing or planned research, site reports, new clients, policy, or integration with existing infrastructure.

The Best Student Technology Award will also be presented at the iRODS UGM2020.  To be eligible, the student (from undergraduate to doctoral) must be a named author on the submission and present their work at the User Group Meeting.  Submissions will be judged based on the technology, not the presentation. The award will be announced by the beginning of the conference.


### April Technology Working Group

- [4.2.8](https://github.com/irods/irods/milestone/33)

    - 12 issues, 4 bugs
    - multiple new libraries
    - client API whitelist
    - '_finally' PEPs
    - updates externals
    - Ubuntu18 will be supported

- [4.2.9](https://github.com/irods/irods/milestone/35)

    - 21 issues, 15 bugs
    - intermediate replicas
    - logical locking

- [4.2 Backlog](https://github.com/irods/irods/milestone/34)

    - 156 issues, 85 bugs

- [4.3.0](https://github.com/irods/irods/milestone/16)

    - 112 issues, 43 bugs
    - clang format
    - new logger (rsyslog or stdout)
    - irodsDelayServer refactoring / with implicit remote()
    - CentOS8 will be supported

- [Metadata Templates Working Group](https://github.com/irods-contrib/irods_working_group_metadata_templates)

    - progress towards SwaggerAPI
    - working towards demo of Metalnx-API-iRODS
    - next meeting - April 21, 2020, 10am ET

- [Authentication Working Group](https://github.com/irods-contrib/irods_working_group_authentication)

    - provide a more flexible authentication mechanism to the iRODS Server
    - initial use cases driven by multi-factor and OpenID usages of the PAM plugin
    - next meeting - April 28, 2020, 10am ET

- [TRiRODS](https://irods.org/trirods)

    - May 20, 2020 - Speaker/Topic TBD

- New Development Work

    - New API plugin - rc_data_object_modify_info
        - client version of rcModDataObjMeta
    - Added '_finally' PEPs
    - NetCDF microservices
        - modernizing packaging for 4.2.x

- Active Development Work

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
        - worked on memory leaks for multiple/looping microservice calls

    - [AWS S3 Lambda](https://github.com/irods/irods_client_aws_lambda_s3)
        - added SSL support
        - added S3->SNS->Lambda support
        - added multibucket support
        - initial release
            - s3 is a fully decoupled system
            - without ability to convey rename
            - loses data object metadata on rename
        - later release
            - could brute-force confirm checksums to detect renames
            - would persist metadata

    - [Logical Quotas](https://github.com/irods/irods_rule_engine_plugin_logical_quotas)
        - will release with 4.2.8
        - awaiting CI

    - [Hard Links Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_hard_links)
        - will release with 4.2.8
        - awaiting CI

    - C++-based REST API
        - working on packaging
        - part of new Data Transfer Nodes pattern

    - C++ S3 API
        - working on packaging
        - part of new Data Transfer Nodes pattern

    - [Storage Tiering Capability](https://github.com/irods/irods_capability_storage_tiering)
        - unified will release with 4.2.8
        - policy composed still in progress

    - [Python iRODS Client (PRC)](https://github.com/irods/python-irodsclient)
        - awaiting CI

    - [Cacheless and Detached S3](https://github.com/irods/irods_resource_plugin_s3)
        - added irods::thread_pool for upload/download threads
        - new shared_memory_object to use boost managed shared memory
            - now used in the S3_connector
        - added the use of a cache file when necessary (partial reads/writes)
            - implemented seeks and writes to the cache file
            - implemented cache staging and flushing
        - awaiting CI

    - [NFSRODS](https://github.com/irods/irods_client_nfsrods)
        - released v0.9.4 on March 25
            - with sssd support
            - with SSL
            - fixed inode reuse bug
        - no parallel transfer, investigating
        - awaiting CI

    - Parallel Transfer Engine
        - based on new dstream operator
        - available via new C++ client library
        - all new transfers within iRODS will use this single method to move data
        - possibly incorporating with_durability()

    - [Indexing Capability](https://github.com/irods/irods_capability_indexing)
        - needs more README
        - will release with 4.2.8
        - Elasticsearch now, second implementation possible for Apache Solr
        - awaiting CI

    - [Publishing Capability](https://github.com/irods/irods_capability_publishing)
        - needs more README
        - will release with 4.2.8

    - [Continuous Integration (CI)](https://github.com/irods/irods_testing_jenkins)
        - still has a few RENCI-specific things to be removed
        - core
            - ub16 / ub18 / cen7
            - pg / mysql / oracle
            - core / topology / federation / upgrade
        - plugins
            - kerberos
            - curl
            - s3
            - audit amqp
            - storage tiering
            - collection mtime rule engine plugin
            - python rule engine plugin
        - plugins (to be added)
            - publishing
            - indexing
            - metadata guard policy engine
            - hard links
            - logical quotas
        - clients (to be added)
            - baton/tears
            - automated ingest
            - Python iRODS Client (PRC)
            - Metalnx
            - NFSRODS
        - maybe later
            - CephFS via unixfilesystem
            - gsi
            - Nestle R Client Library
            - Ceph RADOS resource plugin
            - CockroachDB database plugin
            - QueryArrow database plugin

- Background Items

    - [Metalnx](https://github.com/irods-contrib/metalnx-web)
        - working to eventually remove database dependency
        - testbed for metadata templates initial implementation
        - search and indexing update is very fast
        - want to turn on quotas visibility
        - awaiting CI
    - [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest)
        - refactoring to abstract the source filesystem/object
        - investigating splitting storage backends
            - celery workers -> redis
            - python/iRODS cache -> scylla (C++ distributed keystore)
    - Parallel Filesystem Integration
        - iRODS API plugin
        - have split BeeGFS and Lustre implementations into aggregator and listener
        - testing against known configurations        
    - SMBRODS project to surface iRODS as SMB
    - CockroachDB Database Plugin
    - Cloud Browser
    - Member Ticketing System

- Discussion

    - unregistering a data object *not* in a vault, will no longer unlink that physical file
        - now making a stronger claim about 'under management'
        - 'under management' means 'in a Vault'
        - [https://github.com/irods/irods/issues/4848](https://github.com/irods/irods/issues/4848)
        - possible ingest use case being complicated alongside use with storage tiering
        - suggestions
            - STRONG logging for unregistration from non-vault locations
            - control this behavior/option with policy/metadata triggered preference
