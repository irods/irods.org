Title: iRODS Development Update: March 2017
Date: 2017-03-31 15:59
Author: Terrell Russell
Slug: irods-development-update-march-2017
Status: published


Wow, it's [been a while since the last update]({filename}/posts/irods-development-update-february-and-march-2016.md).  Sorry about that.

We have grown a lot in the last year.  We are [up to 14 members]({filename}/pages/about.html) and we have 4-5 additional proofs of concept in the works that will hopefully lead to membership in the future.  Our core development pace has slowed, but the pace of work on integration libraries, rule engine plugins, and work on new API endpoints has picked up.  This trend will likely continue through the 4.x set of releases and into iRODS 5.0.

The March TWG meeting agenda is a good encapsulation of where we are on a variety of projects.  I'll give a bit more granular detail in the next update.  If you have questions or want to know more, please don't hesitate to get in touch.


### March Technology Working Group


- Call for Proposals for UGM2017 is available

    The iRODS User Group Meeting is coming up in under three months in the Netherlands.  Please submit your talks and demos.  We want to know what you're working on and how iRODS has been a part of that planning and execution.  If you have new tools, please share.  If you have new metrics, please share.  This meeting is shaping up to be the biggest yet.  Find the call for proposals here: [https://irods.org/ugm2017/cfp]({filename}/pages/ugm2017/cfp.html)

- 4.3 Roadmap

    [The roadmap has been sent to the Planning Committee for a vote]({filename}/pages/roadmap.html).  It should be official within the next month.

- Preparing [4.1.11](https://github.com/irods/irods/milestone/25) and [4.2.1](https://github.com/irods/irods/milestone/24) releases

    Most of the work has been done for both of these releases, but we need to get the edits cherry-picked to more recent branches and run everything through CI.

- Preparing advanced training agenda for UGM2017

    The training from 2016 will be updated to include what the Consortium has seen in the wild and some of our best practices.  These will be included as Design Patterns and will include some examples and their implementation.  There will be both beginner and advanced training available at the User Group Meeting.  [Registration is Open]({filename}/pages/ugm2017.html).

- Multipart DataObjects

    As we move towards iRODS 5.0, we will be working on proofs of concept by writing API plugins for v4.  This will allow full functionality as well as provide a smooth transition for groups that cannot upgrade the core as quickly.  The initial v5 API proof of concept can now send multipart dataobjects and work is captured in the following two repositories:

    - [https://github.com/irods/irods_api_plugin_adapter](https://github.com/irods/irods_api_plugin_adapter)
    - [https://github.com/irods/irods_api_plugin_multipart](https://github.com/irods/irods_api_plugin_multipart)

    This work will continue to move forward and is planning to be shown in June at the User Group Meeting.

- QueryArrow database plugin

    Initial testing of the QueryArrow database plugin has been completed.  It can query remote databases of metadata and filesystem information.  This is a proof of concept to show that the required flexibility is available within the system.  There is still a significant amount of work to provide full functionality of a generic FileSystem Integration QueryArrow Plugin.  This plugin will provide a baseline benchmark to test against when we have a more specific implementation of a Lustre MDS integration ready later in the year.

- Metadata Template Working Group

    This Consortium working group has found strong concensus and has produced some working code.  The meeting was held Wednesday, March 15, 2017, 11am EDT.  Both the draft specification, and a draft whitepaper are available.

- Swagger spec for REST API proof of concept

    As the REST API continues to move forward, the Consortium has decided to investigate Swagger as the point of truth for defining the endpoints and their functionality.  An initial Swagger spec and some example code has been posted to [https://github.com/irods-contrib/irods_rest_services](https://github.com/irods-contrib/irods_rest_services).

- Python Rule Engine Plugin

    This plugin has been hammered recently and is nearly ready for running the entire iRODS test suite.  The recent work has been to get all the iRODS rule engine data types available within python data structures.  This will be pulled into CI and once it's green, we'll release.

- AMQP Audit Rule Engine Plugin

    The testing of the audit plugin has been done manually.  To test this plugin requires setting up an AMQP listener to catch the messages and compare them to a known good set.  Once this work is automated in CI, we will release as soon as possible.

- Nestle R Client Library

    The R client library code has been ported to 4.1.10 compatibility and is now available at [https://github.com/irods/irods_client_library_r_cpp](https://github.com/irods/irods_client_library_r_cpp).  The tests pass manually.  We are working to get these tests automated and running in CI.  Then the Planning Committee will be sent a proposal to pull this code under Consortium management.

- Python Ingest Tool

    We have a new project within the iRODS Consortium to support, more generally, large-scale ingest of existing data for new or existing customers/members.  A pure python tool makes the most sense from a maintainability and flexibility standpoint.  It will be leveraging the significant work done on the python iRODS client (PRC) and we have a working prototype.  Initial work suggests order-of-magnitude similarity with iput/iget so far.  Feature development will come first, before we worry about optimization.  The focus over the next little bit includes restarts, parallel transfers, user-defined metadata extraction, and work-list filtering.
