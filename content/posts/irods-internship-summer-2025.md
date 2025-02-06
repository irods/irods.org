Title: iRODS Internship: Summer 2025
Date: 2025-01-09 14:00
Author: Kory Draughn
Slug: irods-internship-summer-2025
Status: published

**Update:**  Due to an unexpected change in our funding situation, this process has been closed for the summer.

## Join Us

The iRODS Consortium is looking for qualified, motivated candidates for a paid, full-time, remote, summer internship (probably three months, June-August).  We have brainstormed five separate projects, each appropriate for a summer of focus.  Each project is real work that we would like to have done and will be an important part of the iRODS ecosystem in the near future.

This internship would provide experience with working in a production-quality software engineering environment with global reach, mentorship and periodic code reviews, direct feedback from community members, and a final presentation about the work and its impact.

This internship is open to United States citizens who are students at least 18 years of age.

The Integrated Rule-Oriented Data System (iRODS) is open source data management software used by research, commercial, and governmental organizations worldwide.

The iRODS Consortium brings together businesses, research organizations, universities, and government agencies to ensure the sustainability of iRODS by guiding further development of the software, growing the user and developer communities, and facilitating iRODS support, education, and collaboration opportunities.  The iRODS Consortium fields a team of software developers, application engineers, and support staff housed at RENCI at the University of North Carolina at Chapel Hill.

[https://irods.org](https://irods.org)

[https://irods.org/documentation](https://irods.org/documentation)

[https://irods.org/ugm2024](https://irods.org/ugm2024)

[https://github.com/irods](https://github.com/irods)

## Five Projects

In no particular order:


### 1) Create an easy-to-use client for ingesting local data (Python)

The iRODS Automated Ingest tool enables highly efficient ingestion of large amounts of data across multiple servers from the command line. While it's very good at that, for some, it is overwhelming to use due to the number of configuration options. We are interested in building a new client GUI which focuses on simplicity and the most common use-cases _(e.g. uploading new data as it appears)_.

[https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)


### 2) Add an iRODS backend to rclone (Go)

The rclone tool can speak to many cloud storage technologies, as well as local disk. But it does not yet know how to reach into an iRODS namespace. We are interested to explore adding an iRODS backend to rclone, making rclone an iRODS client.

[https://rclone.org](https://rclone.org)

[https://github.com/rclone/rclone/tree/master/backend](https://github.com/rclone/rclone/tree/master/backend)


### 3) Fuzz test the iRODS HTTP API (C++)

The iRODS HTTP API is an iRODS client _(and HTTP server)_ which presents the iRODS API over HTTP. We are interested in discovering any software vulnerabilities in the HTTP API through the use of fuzz testing.

[https://github.com/irods/irods_client_http_api](https://github.com/irods/irods_client_http_api)

[https://en.wikipedia.org/wiki/Fuzzing](https://en.wikipedia.org/wiki/Fuzzing)


### 4) Polish HTTP API client libraries (Various Languages)

Last summer, our interns developed three client libraries for the iRODS HTTP API. Great progress was made and we're now ready to get them over the finish line. The goal of this project is to complete the implementation and packaging of each client library for an initial release.

[https://github.com/irods/irods_client_http_api](https://github.com/irods/irods_client_http_api) _(server)_

[https://github.com/irods/irods_client_http_python](https://github.com/irods/irods_client_http_python) _(client library)_

[https://github.com/irods/irods_client_http_java](https://github.com/irods/irods_client_http_java) _(client library)_

[https://github.com/irods/irods_client_http_typescript](https://github.com/irods/irods_client_http_typescript) _(client library)_


### 5) Add functionality to the iRODS Zone Management Tool (React)

The iRODS Zone Management Tool is a web application designed to make it easy for administrators to manage an iRODS zone. The application has not yet reached 1.0, and there are a few things we'd like to add before the next release.

[https://github.com/irods/irods_client_zone_management_tool](https://github.com/irods/irods_client_zone_management_tool)

[https://github.com/irods/irods_client_zone_management_tool/issues](https://github.com/irods/irods_client_zone_management_tool/issues)


## Contact Us

If you're interested, please send your resume to [info@irods.org](mailto:info@irods.org) and we'll be in touch.
