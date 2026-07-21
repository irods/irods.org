Title: iRODS Development Update: July 2026
Date: 2026-07-22 10:00
Author: Kory Draughn
Slug: irods-development-update-july-2026
Status: published


Hello reader,

The iRODS User Group Meeting has come and gone. Big thanks to our sponsors, the speakers, and all attendees for making the conference a success. Videos will be posted in the near future.

This month's development update highlights several software releases leading up to the conference.

iRODS S3 resource plugin 5.1.0 is available. This release implements support for trailing checksums, the ability to read checksums directly from the storage device, and fixes bugs for archive mode and cache file usage. See the release notes at <https://github.com/irods/irods_resource_plugin_s3/releases/tag/5.1.0> for more details.

Four new releases of the iRODS Logical Quotas rule engine plugin are available. The plugin has been updated for iRODS 5, 4.3.5, and 4.3.4. It addresses bugs related to quota updates, server redirects, and permissions. See <https://github.com/irods/irods_rule_engine_plugin_logical_quotas/releases> for more information.

iRODS HTTP API 0.7.0 has been released. It addresses a number of bugs and also re-purposes an existing configuration property. See the release notes at <https://github.com/irods/irods_client_http_api/releases/tag/0.7.0> to learn more.

iRODS Globus Connector 5.1.0 is available. This release improves the buildsystem, addresses build warnings, and adds a new configuration property for improving the performance of checksum calculations. The release notes are can be found at <https://github.com/irods/irods_client_globus_connector/releases/tag/5.1.0>.

Thanks for reading.
