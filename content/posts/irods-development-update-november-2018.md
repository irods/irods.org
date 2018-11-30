Title: iRODS Development Update: November 2018
Date: 2018-11-30 9:00
Author: Terrell Russell
Slug: irods-development-update-november-2018
Status: published

Our November was pretty full.  We released 4.1.12 (after dusting off the levers from late 2017), attended SC18 in Dallas, and have been landing some big chunks of code into the master branch in our preparation for 4.3.0.

Supercomputing saw our team [give a Workshop]({filename}/pages/sc18.html) in the [beautiful Old Red Museum](https://www.oldred.org/) where we demonstrated the Automated Ingest and Storage Tiering Capabilities.  We gave talks in two of our members' booths, Western Digital and DDN.  In addition, the iRODS Team held 25 meetings in the booth over the three day conference.  We're very excited about some of our new partnerships.

Some of our plans for 4.3 have been realized.  The master branch is now using Clang6 and C++17.  We've added unit test support in the form of the [Catch2 library](https://github.com/catchorg/Catch2), and the logging infrastructure has been changed to use [spdlog](https://github.com/gabime/spdlog) pointing to syslog.  We're working through the default installation configuration now, so if you have experience and opinions about logging, please share.  Additionally, we've incorporated the work done in the Storage Tiering plugin for iterating over GenQuery results into the main codebase.  This greatly reduces the complexity of handling query results from the catalog when writing new code.

We have also been whiteboarding some work around some new classes of storage resources.  Until now, composable resources have been classified as either coordinating or storage.  Coordinating resources were for making routing and policy decisions and had one or more child resources.  Storage resources were always leaf resources in the composite resource trees and were anchored to a particular host running an iRODS server.  Now, [we are working on abstracting the storage resources and freeing them from being tied to any particular server](https://github.com/irods/irods_resource_plugin_s3/issues/1849).  We are currently planning to have a new context string (first on the S3 resource plugin) named 'HOST_MODE' that can be one of three settings: 'archive_attached', 'cacheless_attached', or 'cacheless_detached'.  The current behavior is captured by 'archive_attached', and would remain the default configuration. But setting HOST_MODE to one of the other two options would allow the S3 plugin to stand alone and no longer require a POSIX-compatible cache sibling resource under a compound resource.  Setting HOST_MODE to 'cacheless_detached' would additionally allow an S3 resource plugin to be instantiated on any iRODS server making cloud-based iRODS deployments much more manageable and straightforward.

These developments are moving quickly - we're looking for additional input and expertise around cloud deployments to inform our design decisions.

The Technology Working Group and Metadata Templates Working Group should reconvene in December.

