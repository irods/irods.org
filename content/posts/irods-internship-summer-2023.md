Title: iRODS Internship: Summer 2023
Date: 2023-01-18 08:00
Author: Terrell Russell
Slug: irods-internship-summer-2023
Status: published

**Update:**  We have filled this internship for the summer.  Thank you to all our applicants!

## Join Us

The iRODS Consortium is looking for qualified, motivated candidates for a paid, full-time, remote, summer internship (probably three months, June-August).  We have brainstormed five separate projects, each appropriate for a summer of focus.  Each project is real work that we would like to have done and will be an important part of the iRODS ecosystem in the near future.

This internship would provide experience with working in a production-quality software engineering environment with global reach, mentorship and periodic code reviews, direct feedback from community members, and a final presentation about the work and its impact.

This internship is open to international students, but would require extra paperwork.  A US Bank account is required for candidates not in the United States.

The Integrated Rule-Oriented Data System (iRODS) is open source data management software used by research, commercial, and governmental organizations worldwide.

The iRODS Consortium brings together businesses, research organizations, universities, and government agencies to ensure the sustainability of iRODS by guiding further development of the software, growing the user and developer communities, and facilitating iRODS support, education, and collaboration opportunities.  The iRODS Consortium fields a team of software developers, application engineers, and support staff housed at RENCI at the University of North Carolina at Chapel Hill.

[https://irods.org](https://irods.org)

[https://irods.org/documentation](https://irods.org/documentation)

[https://irods.org/ugm2022](https://irods.org/ugm2022)

[https://github.com/irods](https://github.com/irods)

## Five Projects

In no particular order:


### 1) Implement PUT_SYNC from S3 for iRODS Automated Ingest (Python)

The Automated Ingest tool is a Python application designed to keep the iRODS catalog up to date with changes in an existing filesystem or S3 bucket.  The S3 scanner has implemented the REGISTER_SYNC operation for registering data in-place, but does not yet know how to make a copy of the scanned data into iRODS.  Implementing PUT_SYNC will fill out this requested feature.

[https://github.com/irods/irods_capability_automated_ingest/issues/129](https://github.com/irods/irods_capability_automated_ingest/issues/129)


### 2) Add features to Zone Management Tool (ZMT) (ReactJS + REST)

The iRODS Zone Management Tool has become mostly feature complete in the last year.  However, there are a few things that it still does not yet know how to manage.  The open issues currently cover management of iRODS Tickets, the Delay Server, and a number of new health checks.

[https://github.com/irods/irods_client_zone_management_tool/issues/92](https://github.com/irods/irods_client_zone_management_tool/issues/92)

[https://github.com/irods/irods_client_zone_management_tool/issues/141](https://github.com/irods/irods_client_zone_management_tool/issues/141)

[https://github.com/irods/irods_client_zone_management_tool/issues?q=is%3Aissue+is%3Aopen+check](https://github.com/irods/irods_client_zone_management_tool/issues?q=is%3Aissue+is%3Aopen+check)


### 3) Configure GitLab as CI to run the iRODS test suite (DevOps)

The iRODS Build and Test infrastructure has continued to mature, but running under manual control.  It is time to add automatic builds to every commit in a way that is helpful to both developers and the community.  Our current plan is to run a deployment of GitLab and push build and test jobs into local or shared VMs or a Kubernetes cluster.

[https://github.com/irods/irods_development_environment](https://github.com/irods/irods_development_environment)

[https://github.com/irods/irods_testing_environment](https://github.com/irods/irods_testing_environment)

[https://docs.gitlab.com/ee/tutorials/#use-cicd-pipelines](https://docs.gitlab.com/ee/tutorials/#use-cicd-pipelines)


### 4) Implement new version of ZoneReport (C++)

An iRODS Zone can describe its own configuration with a ZoneReport.  The schema that defines the ZoneReport is now a bit out of date as the server itself has changed for 4.3.0.  We would like to refactor the zone_bundle.json schema and update the machinery that produces and depends on this format.  Known issues include the naming of server roles, duplicate plugins, hierarchy information for resources, and self-aware versioning.  Cleaning this up will affect the testing environment, downgrading service accounts, and clients such as the Zone Management Tool (ZMT).

[https://github.com/irods/irods/issues/3682](https://github.com/irods/irods/issues/3682)

[https://github.com/irods/irods/issues/3739](https://github.com/irods/irods/issues/3739)

[https://github.com/irods/irods/issues/6855](https://github.com/irods/irods/issues/6855)

[https://github.com/irods/irods/issues/6856](https://github.com/irods/irods/issues/6856)

[https://github.com/irods/irods/issues/6857](https://github.com/irods/irods/issues/6857)


### 5) Update NFSRODS to use persistent identifiers for inodes (Java)

NFSRODS is a client to iRODS that presents iRODS as the NFSv4.1 protocol.  We have found that restarting the server disrupts existing clients because the inodes (file handles) do not remain consistent across restarts.

[https://github.com/irods/irods_client_nfsrods/issues/46](https://github.com/irods/irods_client_nfsrods/issues/46)

Additional issues could be addressed with any remaining time.

[https://github.com/irods/irods_client_nfsrods/issues](https://github.com/irods/irods_client_nfsrods/issues)


## Contact Us

If you're interested, please send your resume to [info@irods.org](mailto:info@irods.org) and we'll be in touch.
