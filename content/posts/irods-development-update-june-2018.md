Title: iRODS Development Update: June 2018
Date: 2018-06-29 23:00
Author: Terrell Russell
Slug: irods-development-update-june-2018
Status: published

I missed last month's update.  In that time, we've been busy.  We [released some software]({filename}/posts/irods-4-2-3-is-released.md), [held an international conference]({filename}/pages/ugm2018.html), and have started working towards 4.3.

4.2.3 was released at the end of May.  We have already identified an issue which demands a 4.2.4 relatively soon.  If there are any open issues that are holding up a migration or upgrade for you, please get in touch.

The presentations from the 2018 iRODS User Group Meeting have been collected and will be published this week.  Again, we thank everyone who could attend and join the discussions about where this software and community are going.  We have announced that the 2019 User Group Meeting will be returning to the Netherlands, to be hosted by our friends at Utrecht University.  The dates have yet to be determined, but expect early-to-mid June prior to ISC in Frankfurt.

Progress on 4.3 has begun.  We are moving to C++17 (by way of upgrading to using Clang6.0), will be requiring CMake 3.7+, and have selected [spdlog](https://github.com/gabime/spdlog) for the overhaul of the logging infrastructure for iRODS.  These, alongside the use of clang-format and a new irodsMonitor will be the basis for our next series of stable releases.  You will see the work in the master branch in the run up to 4.3.0.

### June Technology Working Group

- [4.1.12](https://github.com/irods/irods/milestone/27)

    We have delivered an engineering build and are awaiting test results before release.

- [4.2.3](https://github.com/irods/irods/milestone/28)

    [Done!]({filename}/posts/irods-4-2-3-is-released.md)

- [4.2.4](https://github.com/irods/irods/milestone/29)

    56 items open, 32 marked as bugs.

- [4.3.0](https://github.com/irods/irods/milestone/16)

    104 issues open.

- Metadata Templates Working Group

    Hosted on June 19.  The Metalnx working group's list of deliverables has largely been completed and has now been merged back into this working group.  The Metadata Templates Working Group will continue to meet on the third Tuesday of each month to share use cases, define best practice, and communicate progress across the different projects.

- Active Development Work

    - Python iRODS Client (PRC)
        - 0.8.0 released
        - [https://github.com/irods/python-irodsclient](https://github.com/irods/python-irodsclient)

    - iRODS Capability - Automated Ingest
        - 0.1.0 released for UGM
        - Needs more documentation / examples / use cases
        - Define why this is helpful / original motivation
        - moving to Celery and Redis backend
        - [https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)

    - Storage Tiering Capability Package
        - 2.3.0 released for UGM
        - [https://github.com/irods/irods_capability_storage_tiering](https://github.com/irods/irods_capability_storage_tiering)

    - CockroachDB Database Plugin
        - adding to CI
        - [https://github.com/irods/irods_database_plugin_cockroachdb](https://github.com/irods/irods_database_plugin_cockroachdb)

    - Ceph RADOS Resource Plugin
        - adding to CI
        - [https://github.com/irods/irods_resource_plugin_rados](https://github.com/irods/irods_resource_plugin_rados)

    - Multipart Transfer, v5 API
        - demo'd at UGM, hardening before release
        - [https://github.com/irods/irods_api_plugin_adapter](https://github.com/irods/irods_api_plugin_adapter)
        - [https://github.com/irods/irods_api_plugin_multipart](https://github.com/irods/irods_api_plugin_multipart)

    - Lustre Integration
        - LUG talk given
        - working on testing with partners
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

    - Metalnx packaging
        - moved to irods-contrib namespace
        - consortium now has metalnx.{org|net|info}
        - demo'd at UGM
        - v2.0.0 coming soon
        - [https://github.com/irods-contrib/metalnx-web](https://github.com/irods-contrib/metalnx-web)

    - Indexing Capability
        - new architecture, discussion
        - reacts to event stream from Audit Plugin
        - leverage same architecture as Automated Ingest

- Ongoing Items

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
