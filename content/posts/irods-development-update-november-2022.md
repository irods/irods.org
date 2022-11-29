Title: iRODS Development Update: November 2022
Date: 2022-11-30 12:00
Author: Kory Draughn
Slug: irods-development-update-november-2022
Status: published


We went to Supercomputing 2022!

We got a chance to talk with Consortium members in person and there was a lot of booth traffic. Overall, it was a success!

Also, TRiRODS will be happening on Wednesday, December 7 at 2pm ET. Martin Schobben will be talking about the new **rirods** project he's been working on. You can read more at [https://irods.org/trirods/](https://irods.org/trirods/).

Okay, enough about Supercomputing and TRiRODS. Let's get into the update.

For the server, we've been working hard to resolve several issues found in the 4.3.0 server. At the top of that list are memory leaks. The server has received some important changes and you can follow that work at [https://github.com/irods/irods/pull/6673](https://github.com/irods/irods/pull/6673).

It has been a long time coming, but `acPreConnect` has finally been updated. Administrators will now be able to make decisions based on a client's connection information! Delay server migration now uses the **host_resolution** configuration property if defined (a.k.a **hosts_config** in the 4.2 series). This change allows administrators to support zones that use FQDNs and host names. The **SimpleQuery** API has been marked as deprecated. The iCommands have been updated to reflect the deprecation of this API as well.

On the plugin side of things, the Audit AMQP plugin (for 4.3.0) has received a huge update. We've switched the plugin from using Qpid Proton's deprecated C API to the supported C++ API. We've also removed the workarounds for logstash and replaced the Jansson JSON library with the Nlohmann JSON library. That is only a subset of the changes introduced during the first pass. Next steps include the handling of multiple AMQP endpoints and re-use of AMQP connections.

Expect a release of the Audit AMQP plugin for iRODS 4.3 soon.

Work to add support for Deep Archive to the S3 resource plugin is now finished and merged. Expect a new release soon.

As for clients, we've been hard at work designing and implementing an S3 presentation layer for iRODS. This will allow any S3 client to interact directly with iRODS. We're making a lot of progress and can't wait to show what we've accomplished. If that sounds interesting, you can stay up to date on this effort by following the repository at [https://github.com/irods/irods_client_s3_cpp](https://github.com/irods/irods_client_s3_cpp).

The future is bright. See you in December!
