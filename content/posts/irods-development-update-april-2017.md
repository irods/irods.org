Title: iRODS Development Update: April 2017
Date: 2017-04-30 22:30
Author: Terrell Russell
Slug: irods-development-update-april-2017
Status: published


This month's TWG touched on the many irons we have in the fire in the run up to the [User Group Meeting in Utrecht, Netherlands in June]({filename}/pages/ugm2017.html).   Remember, registration and submission deadlines are very soon.



### April Technology Working Group

- New Hire - Jaspreet Gill, Automation Engineer

    Jaspreet comes to us from Cisco, and IBM before that.  She will be taking the reins of our testing infrastructure as soon as she learns all things iRODS.  The Python-based testing framework is much more self-contained in its latest edition and ready for new eyes.  Jaspreet has already identified her first iRODS bug and trapped it in short order.  We're very excited about her joining our team.

- 4.3 Roadmap

    The [iRODS 4.3 roadmap has been approved by the Planning Committee]({filename}/pages/roadmap.html).

- Metadata Templates Working Group
  
    The working group met on March 15 and attracted 17 attendees.  We very much appreciate the enthusiasm and expect to continue the work through the stages of released code and approved standardization.  Thank you to everyone who attended and sent feedback.

    The working [whitepaper]({static}/uploads/2017/20170315-MetadataTemplates-Whitepaper.pdf), [slides]({static}/uploads/2017/20170315-MetadataTemplates-Slides.pdf), and [specification](https://github.com/irods-contrib/irods_rest_services/tree/master/metadata_templates) have been posted.  A recorded demo will be a part of the May 17 [TRiRODS]({filename}/pages/trirods.html) meeting in Chapel Hill.

- Preparing [4.1.11](https://github.com/irods/irods/milestone/25) and [4.2.1](https://github.com/irods/irods/milestone/24) releases

    Still moving towards release soon.  These two releases span our different build systems (g++/make vs. clang/cmake) as well as different sets of control scripts (perl/bash vs. python).  This makes every cherry-pick a bit more work than normal.

- Preparing advanced training agenda for UGM2017

    [The training agenda has been set and is posted]({filename}/pages/ugm2017.html).  The beginner training will look very similar to the last two years while the advanced training will focus more on design patterns and some best practices in addition to the hands-on learn/build/test modules from last year.

- Ongoing Development Work

    In addition to releasing the core and working on training materials for June, these other efforts have the following updates:

    - Swagger REST API
        - working demo with metadata templates
        - [https://github.com/irods-contrib/irods_rest_services](https://github.com/irods-contrib/irods_rest_services)

    - Python Ingest Tool
        - working demo, adding filtering, restarts, etc.
        - [https://github.com/irods-contrib/irods_tools_ingest](https://github.com/irods-contrib/irods_tools_ingest)

    - Multipart DataObjects, v5 API
        - working demo
        - [https://github.com/irods/irods_api_plugin_adapter](https://github.com/irods/irods_api_plugin_adapter)
        - [https://github.com/irods/irods_api_plugin_multipart](https://github.com/irods/irods_api_plugin_multipart)

    - Lustre Integration
        - working demo, using lcapd, bulk activity
        - [https://github.com/irods-contrib/irods_tools_lustre](https://github.com/irods-contrib/irods_tools_lustre)

    - QueryArrow database plugin
        - nearly ready to run iRODS test suite

    - Cloud Browser
        - permissions, paging, release coming
        - [https://github.com/dice-unc/irods-cloud-browser](https://github.com/dice-unc/irods-cloud-browser)

- Upcoming Releases

    We have three plugin and library releases coming soon as well.  They are each working their way through CI and need to be packaged and announced.

    - [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python)
    - [AMQP Audit Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp)
    - [Nestle R Client Library](https://github.com/irods/irods_client_library_r_cpp)
