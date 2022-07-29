Title: iRODS Development Update: July 2022
Date: 2022-07-29 17:00
Author: Kory Draughn
Slug: irods-development-update-july-2022
Status: published


July was an exciting month. The [iRODS User Group Meeting](https://irods.org/ugm2022) happened and best of all, it was in person!

It was great seeing everyone and hearing about the interesting things they've been working on using iRODS. We're reviewing footage and hope to post videos very soon.

Our interns are working hard to put the finishing touches on their summer work. They'll be talking about their experience at [TRiRODS](https://irods.org/trirods) on August 10th. We hope you'll listen in.

Aside from the work being done by the interns, we've started working on improving the documentation. This documentation will cover basic and advanced concepts in iRODS. You can expect to find information on topics such as data objects, logical locking, and high-level operations. We're also working on adding an experimental section called **Policy Cookbook**. Here you'll find various policy-related topics covering things such as metadata-based synchronization, simulating user quotas, and more. We're very interested in what the community thinks of this effort, so if you have opinions and suggestions, let us know.

The [S3 resource plugin](https://github.com/irods/irods_resource_plugin_s3) is growing a new ability. Support for **Glacier Deep Archive** is almost complete. We've taken care of a few bugs as well.

Work on the [Automated Ingest Capability](https://github.com/irods/irods_capability_automated_ingest) is ramping up. Soon, the automated ingest tool will give administrators a way to remap unwanted characters in filenames. The original filename will be attached to the data object as metadata. This creates a pointer from the data object to the original file and gives users a way to track the origin of an ingested file.

That wraps up the development update. Thanks and see you next month!
