Title: iRODS Internship: Summer 2024
Date: 2024-01-05 08:00
Author: Terrell Russell
Slug: irods-internship-summer-2024
Status: published

## Join Us

The iRODS Consortium is looking for qualified, motivated candidates for a paid, full-time, remote, summer internship (probably three months, June-August).  We have brainstormed five separate projects, each appropriate for a summer of focus.  Each project is real work that we would like to have done and will be an important part of the iRODS ecosystem in the near future.

This internship would provide experience with working in a production-quality software engineering environment with global reach, mentorship and periodic code reviews, direct feedback from community members, and a final presentation about the work and its impact.

This internship is open to United States citizens who are students at least 18 years of age.

The Integrated Rule-Oriented Data System (iRODS) is open source data management software used by research, commercial, and governmental organizations worldwide.

The iRODS Consortium brings together businesses, research organizations, universities, and government agencies to ensure the sustainability of iRODS by guiding further development of the software, growing the user and developer communities, and facilitating iRODS support, education, and collaboration opportunities.  The iRODS Consortium fields a team of software developers, application engineers, and support staff housed at RENCI at the University of North Carolina at Chapel Hill.

[https://irods.org](https://irods.org)

[https://irods.org/documentation](https://irods.org/documentation)

[https://irods.org/ugm2023](https://irods.org/ugm2023)

[https://github.com/irods](https://github.com/irods)

## Five Projects

In no particular order:


### 1) Create an iRODS database plugin template repository (C++)

The iRODS Development Team has built project templates as examples for four of the seven plugin interfaces into iRODS and one more as an example C++ client.  The next target for a template is the database plugin.  iRODS currently supports PostgreSQL, MySQL/MariaDB, and Oracle, but the code has not been pulled out into separate repositories, yet.  This example repository would allow easier experimentation with different database technologies.

[https://github.com/orgs/irods/repositories?q=irods_project_template](https://github.com/orgs/irods/repositories?q=irods_project_template)

[https://github.com/irods/irods/tree/main/plugins/database](https://github.com/irods/irods/tree/main/plugins/database)


### 2) Convert existing web applications to our new HTTP API (ReactJS + HTTP)

The relatively new iRODS Zone Management Tool is due for its first refactor.  Originally built to talk with a REST API, it needs to be converted to talk to the new iRODS HTTP API.  If this work on the administrator tool proves pretty straightforward, we are interested in evaluating a similar refactor for our user-level GUI, Metalnx (or to even start designing a new webapp from scratch).

[https://github.com/irods/irods_client_zone_management_tool](https://github.com/irods/irods_client_zone_management_tool)

[https://github.com/irods/irods_client_http_api](https://github.com/irods/irods_client_http_api)

[https://github.com/irods-contrib/metalnx-web](https://github.com/irods-contrib/metalnx-web)


### 3) Connect iRODS to many different cloud storage technologies via rclone (Linux)

iRODS has long had a plugin model which abstracts connecting to various types of storage technologies.  A recent test showed that rclone's mount command can be used by the iRODS unixfilesystem plugin to talk to Google Cloud Storage (with some caveats).  We would like to explore and document how well rclone can be leveraged by administrators to bridge additional cloud storage technologies to the iRODS namespace.

[https://rclone.org/](https://rclone.org/)


### 4) Add an iRODS backend to rclone (Go)

The rclone tool can speak to many cloud storage technologies, as well as local disk.  But it does not yet know how to reach into an iRODS namespace.  We are interested to explore adding an iRODS backend to rclone, making rclone an iRODS client.

[https://rclone.org/](https://rclone.org/)

[https://github.com/rclone/rclone/tree/master/backend](https://github.com/rclone/rclone/tree/master/backend)


### 5) Create new client libraries around our new HTTP API (Various Languages)

Our new iRODS HTTP API is making it easier for developers to interact with the iRODS ecosystem.  We would like to help them even more by providing new client libraries in various languages that wrap their native or library-provided http calls.  We are most interested in Java, Python, and Javascript, but any language will provide a learning opportunity and help map out the space for other languages.

[https://github.com/irods/irods_client_http_api](https://github.com/irods/irods_client_http_api)


## Contact Us

If you're interested, please send your resume to [info@irods.org](mailto:info@irods.org) and we'll be in touch.
