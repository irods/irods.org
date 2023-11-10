Title: Initial release of the iRODS S3 API
Date: 2023-11-10 23:00
Author: Kory Draughn
Slug: initial-release-of-the-irods-s3-api
Status: published


It's been a long time coming, but the iRODS Consortium is pleased to announce the first release of the [iRODS S3 API](https://github.com/irods/irods_client_s3_api).

It is released today as v0.1.0 and is designed to offer both multi-user and multi-bucket support.

The initial investigation and foundational work was done by Violet White (a past intern with the iRODS Consortium) and then picked up and carried over the finish line by Justin James.

For many years, iRODS has supported speaking to S3 compatible storage. Today marks the first time an iRODS zone is able to present as S3 compatible storage. With this new ability, users will be able to interact with an iRODS zone using their favorite S3 client.

The following operations are currently supported:

- CopyObject
- DeleteObject
- GetBucketLocation
- GetObject
- GetObjectLockConfiguration
- HeadObject
- ListBuckets
- ListObjectsV2
- PutObject

A [Docker image](https://hub.docker.com/r/irods/irods_s3_api) has also been published on Docker Hub for ease of deployment.

We hope you found this news exciting and we look forward to hearing from you on how we can improve the project.

To learn more, watch the [Consortium's iRODS User Group Meeting 2023 talk](https://www.youtube.com/watch?v=5PzR_rkvsvE&list=PL29FhEN41mZPWLhE4CY4AvWA1vXygxoXx) or visit the [GitHub repository](https://github.com/irods/irods_client_s3_api).

<iframe width="560" height="315" src="https://www.youtube.com/embed/5PzR_rkvsvE" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
