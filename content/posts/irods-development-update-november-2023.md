Title: iRODS Development Update: November 2023
Date: 2023-11-28 16:00
Author: Kory Draughn
Slug: irods-development-update-november-2023
Status: published


Hello Everyone,

We're finally back from Supercomputing and it went very well. For those who attended, we hope you had as good a time as us. For those who did not attend, maybe we'll see you next year.

Now for this month's update.

With [iRODS 4.3.1 finally released](https://irods.org/2023/10/irods-4-3-1-is-released/), we're going to focus the beam on projects surrounding the server. That means addressing long standing issues in plugins and clients.

First up is the iRODS S3 API. We've improved support for the MinIO client, added a configuration option which allows administrators to define the region, and added support for the `GetObjectLockConfiguration` API operation. We've also containerized the tests around the project. Now anyone can run the tests and build confidence using only `docker compose`. [v0.1.0 was released earlier this month](https://irods.org/2023/11/initial-release-of-the-irods-s3-api/).

For the iRODS HTTP API, we're investigating alternative designs for OpenID Connect. Specifically, we're looking at making the HTTP API act as a resource server instead of an OAuth client. For more information, see issue [#155](https://github.com/irods/irods_client_http_api/issues/155). [v0.1.0 was released earlier this month](https://irods.org/2023/11/initial-release-of-the-irods-http-api/).

We've finally finished updating and testing the NetCDF plugin for iRODS 4.3.1. All that's left is to compile and publish packages for each OS. We expect they'll be available within a week or two.

Work on the next release of the Python iRODS client is progressing well. Support for quotas has been implemented and a pull request to fix interactions with unixfilesystem resource freespace tracking is nearly complete.

Thanks for reading!
