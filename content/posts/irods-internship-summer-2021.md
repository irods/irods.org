Title: iRODS Internship: Summer 2021
Date: 2021-04-06 09:00
Author: Terrell Russell
Slug: irods-internship-summer-2021
Status: published


**Update:**  This internship is open to international students, but would require extra paperwork.  A US Bank account is required for candidates not in the United States.

## Join Us

The iRODS Consortium is looking for qualified, motivated candidates for a paid, full-time, remote, summer internship (probably three months, June-August).  There is interesting work to be done in C++, Python, and Java.  We have brainstormed five separate projects, each appropriate for a summer of focus.  Each project is real work that we would like to have done and will be an important part of the iRODS ecosystem in the near future.

This internship would provide experience with working in a production-quality software engineering environment with global reach, mentorship and periodic code reviews, direct feedback from community members, and a final presentation about the work and its impact.

The Integrated Rule-Oriented Data System (iRODS) is open source data management software used by research, commercial, and governmental organizations worldwide.

The iRODS Consortium brings together businesses, research organizations, universities, and government agencies to ensure the sustainability of iRODS by guiding further development of the software, growing the user and developer communities, and facilitating iRODS support, education, and collaboration opportunities.  The iRODS Consortium fields a team of software developers, application engineers, and support staff housed at RENCI at the University of North Carolina at Chapel Hill.

[https://irods.org](https://irods.org)

[https://irods.org/documentation](https://irods.org/documentation)

[https://irods.org/ugm2020](https://irods.org/ugm2020)

[https://github.com/irods](https://github.com/irods)

## Five Projects

In no particular order:

### 1) Metalnx Refactor (Java)

Metalnx is a Java web GUI that currently provides both regular user and administrative functionality.  The administrative functionality, as implemented, is tied to a single database flavor (PostgreSQL) and will be replaced by the more targeted and flexible Zone Management Tool.  This work will be to remove the administrative functionality from Metalnx and prepare a streamlined release for use by multiple organizations around the world.

[https://github.com/irods-contrib/metalnx-web](https://github.com/irods-contrib/metalnx-web)

[https://github.com/irods/irods_client_zone_management_tool](https://github.com/irods/irods_client_zone_management_tool)

### 2) Ingest Refactor (Python)

The iRODS Automated Ingest tool can currently scan in parallel a local filesystem and an S3 bucket for new and updated files.  We are interested in adding the ability to scan an iRODS path as well.  This will allow the scanner to see when files are removed (the negative space).  The current logic needs to be refactored to provide these different targets as separate scanning strategies.

Separating these strategies would also allow us to scan a queue or log (Kafka, RabbitMQ, etc.).
  
[https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)

### 3) Policy Libraries (C++/Python)

Recent iRODS development has provided for Policy Composition within the iRODS Server.  This work would be to explore creating new libraries (building blocks) to be used within this Policy Composition.  Interesting use cases already exist for image thumbnailing and indexing.

[https://github.com/irods/irods_policy_composition_framework](https://github.com/irods/irods_policy_composition_framework)

[https://github.com/irods/irods_rule_engine_plugins_policy](https://github.com/irods/irods_rule_engine_plugins_policy)

### 4) Asynchronous Server Tasks (C++)

The iRODS Server Process Model consists of a main long-running server, a child long-running Agent Factory, and many short-lived Agent processes to serve client requests.  There are a number of 'background tasks' that would be nice to have running as well that could do clean up, bookkeeping, etc.  This project would be to design and implement an asynchronous facility for the iRODS Server.

[https://github.com/irods/irods/issues/4977](https://github.com/irods/irods/issues/4977)

### 5) OMERO Integration

OMERO is the Open Microscopy Environment's open source image management software.  It provides a robust ecosystem of tooling and visualization for images coming from microscopes.  It maintains its own database and local storage.  An integration with iRODS would provide the abstraction for OMERO's storage and metadata layer to be queried/updated/managed by other tools.  This is very interesting to a number of large organizations around the world.

A full integration will cover three areas...

a) Publishing updates from iRODS to OMERO.  This work will be learning the OMERO API, and configuring the iRODS publishing capability to send relevant updates to that API.

b) Ingesting updates from OMERO into iRODS.  This work will employ Change Data Capture (CDC) to watch the OMERO system for relevant updates and get them into the iRODS catalog.  This work will be configuration of Debezium, Kafka, and the iRODS Ingest tool.

c) Making updates to the files/images themselves available to both systems.  This can be handled by providing an NFS mountpoint to OMERO with NFSRODS.  This work will be configuration only.

[https://www.openmicroscopy.org/omero](https://www.openmicroscopy.org/omero/)

[https://debezium.io](https://debezium.io/)

[https://kafka.apache.org](https://kafka.apache.org)

[https://github.com/irods/irods_capability_automated_ingest](https://github.com/irods/irods_capability_automated_ingest)

[https://github.com/irods/irods_client_nfsrods](https://github.com/irods/irods_client_nfsrods)


## Contact Us

If you're interested, please send your resume to [info@irods.org](mailto:info@irods.org) and we'll be in touch.
