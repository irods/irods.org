Title: iRODS releases Cacheless S3 Resource Plugin
Date: 2019-09-06 16:00
Author: Terrell Russell
Slug: irods-releases-cacheless-s3-resource-plugin
Status: published

The iRODS Consortium is pleased to announce the release of its
S3 Resource Plugin with Cacheless and Detached Mode for iRODS 4.2.6.

This new plugin release removes the need for iRODS to manage a cache
and compound resource in front of an S3-compatible storage system. The
plugin now directly handles the translation from POSIX to Object Storage
and vice versa internally and removes the additional write/read required
by the cache as well as any policy to keep the cache under control.

If the plugin is configured to be detached, then any iRODS server
with the plugin installed can service the requests and will not have
to redirect to a server specifically named to handle the connections.  This
allows for horizontal scaling of access to your Object Storage.

Configuration for the new plugin requires only a tweak to its
context string to define the new 'HOST_MODE' and then an update
to its resource hierarchy to pull it out from under its compound
resource parent.

The following is an example of how to configure a cacheless_attached S3 resource:

```
iadmin mkresc s3resc s3 `hostname`:/irods-bucket/irods/Vault "S3_DEFAULT_HOSTNAME=s3.amazonaws.com;S3_AUTH_FILE=/var/lib/irods/s3.keypair;S3_REGIONNAME=us-east-1;S3_RETRY_COUNT=1;S3_WAIT_TIME_SEC=3;S3_PROTO=HTTP;ARCHIVE_NAMING_POLICY=consistent;HOST_MODE=cacheless_attached"
```

[More details can be found in the README](https://github.com/irods/irods_resource_plugin_s3#using-the-s3-plugin-in-cacheless-mode).

The video below is from the iRODS UGM 2019 in June and discusses the
development, configuration, and performance profile of the new plugin.

<iframe width="560" height="315" src="https://www.youtube.com/embed/aEzJHA1qctE"
frameborder="0" allow="accelerometer; autoplay; encrypted-media;
gyroscope; picture-in-picture" allowfullscreen></iframe>


