Title: iRODS Internship: Summer 2026
Date: 2026-01-05 16:00
Author: Kory Draughn
Slug: irods-internship-summer-2026
Status: published

## Join Us

The iRODS Consortium is looking for qualified, motivated candidates for an unpaid, remote, summer internship (probably three months, June-August).  We have brainstormed five separate projects, each appropriate for a summer of focus.  Each project is real work that we would like to have done and will be an important part of the iRODS ecosystem in the near future.

This internship would provide experience with working in a production-quality software engineering environment with global reach, mentorship and periodic code reviews, direct feedback from community members, and a final presentation about the work and its impact.

The Integrated Rule-Oriented Data System (iRODS) is open-source, policy-based data management software used by research, commercial, and governmental organizations worldwide.

The iRODS Consortium brings together businesses, research organizations, universities, and government agencies to ensure the sustainability of iRODS by guiding further development of the software, growing the user and developer communities, and facilitating iRODS support, education, and collaboration opportunities.  The iRODS Consortium fields a team of software developers, application engineers, and support staff housed at RENCI at the University of North Carolina at Chapel Hill.

[https://irods.org](https://irods.org)

[https://irods.org/documentation](https://irods.org/documentation)

[https://irods.org/ugm2025](https://irods.org/ugm2025)

[https://github.com/irods](https://github.com/irods)

## Five Projects

In no particular order:


### 1) Create a minimal system tray application to ingest local data (Python / C++)

The iRODS Automated Ingest tool enables highly efficient ingestion of large amounts of data across multiple servers from the command line. While it's very good at that, for some, it is overwhelming to use due to the number of configuration options. We are interested in building a new, cross-platform system tray application to watch a set of local directories and ingest (and manage) any new files found.

[https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)

[https://wxwidgets.org/](https://wxwidgets.org/)


### 2) Fuzz test the iRODS HTTP API (C++)

The iRODS HTTP API is an iRODS client _(and HTTP server)_ which presents the iRODS API over HTTP. We are interested in discovering any software vulnerabilities in the HTTP API through the use of fuzz testing.

[https://github.com/irods/irods_client_http_api](https://github.com/irods/irods_client_http_api)

[https://en.wikipedia.org/wiki/Fuzzing](https://en.wikipedia.org/wiki/Fuzzing)


### 3) Polish HTTP API client libraries (Various Languages)

Past interns have developed three client libraries for the iRODS HTTP API. Great progress was made and we're ready to get them over the finish line. The goal of this project is to complete the implementation and packaging of each client library for an initial release.

[https://github.com/irods/irods_client_http_api](https://github.com/irods/irods_client_http_api) _(server)_

[https://github.com/irods/irods_client_http_python](https://github.com/irods/irods_client_http_python) _(client library)_

[https://github.com/irods/irods_client_http_java](https://github.com/irods/irods_client_http_java) _(client library)_

[https://github.com/irods/irods_client_http_typescript](https://github.com/irods/irods_client_http_typescript) _(client library)_


### 4) Add the new 'irods' authentication scheme to various clients (Various Languages)

iRODS 5 has recently added a new 'irods' authentication scheme.  This functionality needs to be made available in our existing clients and client libraries.

[https://github.com/irods/irods/issues/8697](https://github.com/irods/irods/issues/8697)

[https://github.com/irods/irods4j/issues/139](https://github.com/irods/irods4j/issues/139)

[https://github.com/irods/python-irodsclient/issues/785](https://github.com/irods/python-irodsclient/issues/785)

[https://github.com/irods/irods_client_http_api/issues/468](https://github.com/irods/irods_client_http_api/issues/468)

[https://github.com/irods/irods_client_s3_api/issues/188](https://github.com/irods/irods_client_s3_api/issues/188)

[https://github.com/irods-contrib/metalnx-web/issues/438](https://github.com/irods-contrib/metalnx-web/issues/438)

[https://github.com/irods/irods_client_zone_management_tool/issues/223](https://github.com/irods/irods_client_zone_management_tool/issues/223)


### 5) Support OIDC and Kerberos via pam_interactive (C++ / Documentation)

Historically, the iRODS server supported authentication via OpenID Connect (OIDC) and Kerberos.  However, the iRODS server was required to receive the users' real passwords and authenticate with those services on the users' behalf.  Some organizations' security models do not allow this use of passwords and require that only access tokens be passed from the user to any tool the user wants to use.  This project would be to investigate using the pam_interactive authentication scheme to manage tokens for the OIDC and Kerberos authentication flows in the iRODS server.

[https://github.com/irods/irods_auth_plugin_pam_interactive](https://github.com/irods/irods_auth_plugin_pam_interactive)

[pam_krb5 - Kerberos PAM module](https://manpages.ubuntu.com/manpages/trusty/man5/pam_krb5.5.html)


## Contact Us

If you're interested, please send your resume to [info@irods.org](mailto:info@irods.org) and we'll be in touch.
