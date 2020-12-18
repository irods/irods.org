Title: iRODS Development Update: December 2020
Date: 2020-12-18 13:00
Author: Terrell Russell
Slug: irods-development-update-december-2020
Status: published


We've had fewer meetings this month and are finishing 2020 strong.

Earlier this December, [TRiRODS]({filename}/pages/trirods.html) showcased two complementary Consortium projects, the [iRODS C++ REST API](https://github.com/irods/irods_client_rest_cpp) and the new [iRODS Zone Management Tool](https://github.com/irods/irods_client_zone_management_tool), an administrative ReactJS web application that speaks only to the C++ REST API.

We have continued to update our build system and CI to be a bit more standardized.  We are moving, like many others, away from Travis-CI to GitHub Actions for our public continuous build confirmation.  We will be looking to incorporate some additional static analysis tooling into GitHub Actions in the future and will investigate adding some containerized testing.

4.2.9 is still looming large.  All the pieces for implementing logical locking are now in place and we hope to have the new functionality landed soon.  We have refactored the checksum API to be more consistent and behave in an expected manner in light of intermediate replicas.

Development of the new [iRODS Globus Connector]({filename}/posts/globus-for-irods-connector-is-released.md) has been completed and announced.

We have rebased [our fork of the libs3 library](https://github.com/irods/libs3) and successfully tested a rebuilt iRODS S3 Resource Plugin against Amazon, MinIO, and Ceph's S3 Object Gateway.  This work will be released both for 4.2.8 and alongside the upcoming 4.2.9.

The Python iRODS Client (PRC) is growing the ability to transfer files in parallel(!).  This implementation uses multiple threads to send the parts of a file to iRODS (4.2.8+), all on port 1247.  This will use encrypted connections if iRODS is configured to use SSL.  Performance appears to be consistent with `iput` so far.  We are planning a more detailed write-up as we transition to providing this same functionality for C++ and Java clients.

The policy composition framework is nearing completion as well.  Five event handlers (data objects, collections, metadata, resources, users and groups) now serve as the interface into a simplified means of policy creation and management.  We expect to release examples and recipes for configuration alongside 4.2.9.

It's been such a long, strange year.  We sincerely hope you are safe and your friends and family are healthy.

Happy holidays and maybe we'll see you in 2021!
