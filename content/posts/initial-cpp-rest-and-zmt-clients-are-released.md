Title: Initial C++ REST and ZMT Clients are released
Date: 2021-10-08 09:00
Author: Terrell Russell
Slug: initial-cpp-rest-and-zmt-clients-are-released
Status: published


The iRODS Consortium is pleased to announce the initial release of two new iRODS clients this morning.

One depends on the other, so they make their debut together.

### iRODS C++ REST API

The [iRODS C++ REST API](https://github.com/irods/irods_client_rest_cpp) is released today as v0.8.0.

The initial design and implementation was by Jason Coposky, and then refactored and pushed over the finish line by Kory Draughn.  It provides a mid-tier REST API (usually to be run on port 80/443) that translates calls to the iRODS Protocol (usually port 1247).  This opens up development opportunities widely and we are excited to see what new applications can be built more rapidly with web-standard tools.

Plans for v1.0.0 include possible repackaging or dockerization for possible concurrent/side-by-side deployments of different versions over time.

Watch Jason's iRODS User Group Meeting 2021 talk to learn more.

<iframe width="560" height="315" src="https://www.youtube.com/embed/tQPQqBXR-Xw" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>


### iRODS Zone Management Tool (ZMT)

The [iRODS Zone Management Tool (ZMT)](https://github.com/irods/irods_client_zone_management_tool) is released today as v0.1.0.

This application was designed and implemented by Bo Zhou and Terrell Russell.  This ReactJS application provides an administrative web GUI to an iRODS Zone.

Deployment requires a single configuration file pointing to an iRODS C++ REST API endpoint and then `docker-compose up`.

Watch Bo's iRODS User Group Meeting 2021 talk to learn more.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jO7pyG1Am28" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
