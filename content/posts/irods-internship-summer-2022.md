Title: iRODS Internship: Summer 2022
Date: 2022-04-06 09:00
Author: Terrell Russell
Slug: irods-internship-summer-2022
Status: published


## Join Us

The iRODS Consortium is looking for qualified, motivated candidates for a paid, full-time, remote, summer internship (probably three months, June-August).  This summer, we're primarily focusing on C++.  We have brainstormed five separate projects, each appropriate for a summer of focus.  Each project is real work that we would like to have done and will be an important part of the iRODS ecosystem in the near future.

This internship would provide experience with working in a production-quality software engineering environment with global reach, mentorship and periodic code reviews, direct feedback from community members, and a final presentation about the work and its impact.

This internship is open to international students, but would require extra paperwork.  A US Bank account is required for candidates not in the United States.

The Integrated Rule-Oriented Data System (iRODS) is open source data management software used by research, commercial, and governmental organizations worldwide.

The iRODS Consortium brings together businesses, research organizations, universities, and government agencies to ensure the sustainability of iRODS by guiding further development of the software, growing the user and developer communities, and facilitating iRODS support, education, and collaboration opportunities.  The iRODS Consortium fields a team of software developers, application engineers, and support staff housed at RENCI at the University of North Carolina at Chapel Hill.

[https://irods.org](https://irods.org)

[https://irods.org/documentation](https://irods.org/documentation)

[https://irods.org/ugm2021](https://irods.org/ugm2021)

[https://github.com/irods](https://github.com/irods)

## Five Projects

In no particular order:

### 1) Refactor to modernize `irodsServer` (C++)

The iRODS server was originally written in C around 20 years ago. We would like to refactor the core server software with C++ to use modern, high-level techniques for purposes of maintainability and performance as well as extensibility. The main iRODS server process is currently responsible for the following:

  - Receiving incoming client connections
  - Managing process spawner
  - Launches and monitors other important sub-processes/threads
  - Managing system resources (shared memory, sockets, etc.)

### 2) Add live reload to `irodsServer` server_config and `irodsAgent` resource manager (C++)

An iRODS server uses a process model which spawns independent agents to service incoming requests. While performant and relatively safe, the agents do not currently interact and will hold stale information when another part of the system changes. Two places where it would be beneficial for these things to be smarter would be the configuration of the storage resources in the zone or of the server itself.

[https://github.com/irods/irods/issues/3794](https://github.com/irods/irods/issues/3794)

[https://github.com/irods/irods/issues/5816](https://github.com/irods/irods/issues/5816)

### 3) Refactor Audit Plugin to fix invalid JSON (C++)

The iRODS Consortium supports the [AMQP Audit Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp/) which sends information to a message broker for every policy enforcement point (PEP) in the iRODS server. We have discovered that the information we are sending to the message broker includes some slightly malformed JSON.  We need to identify what is happening and make it better.

[https://github.com/irods/irods_rule_engine_plugin_audit_amqp/issues/57](https://github.com/irods/irods_rule_engine_plugin_audit_amqp/issues/57)

### 4) Implement detached mode for unixfilesystem storage resource plugin (C++)

iRODS abstracts storage technologies through the use of resource plugins. Different storage technologies can be accessed over the network without being directly attached to any particular server (e.g. NFS, EBS, NAS, OrangeFS, Lustre, BeeGFS, GPFS, etc.). Our S3 resource plugin allows any iRODS server to make a direct connection to S3 without redirecting to a particular iRODS server. We would like to provide similar functionality for the unixfilesystem resource.

[https://github.com/irods/irods/issues/4421](https://github.com/irods/irods/issues/4421)

### 5) Libraries! (C++)

iRODS has been around for a long time. Like other similarly sized projects, iRODS has grown several low-level libraries. We'd like to provide higher level APIs that wrap these existing low-level libraries to simplify use and enable easier maintenance of the software. The new libraries should take full advantage of what is provided by modern C++.



## Contact Us

If you're interested, please send your resume to [info@irods.org](mailto:info@irods.org) and we'll be in touch.
