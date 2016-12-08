Title: HPSS Resource Plugin v1.1 released
Date: 2015-11-30 14:51
Author: Terrell Russell
Slug: hpss-resource-plugin-v1-1-released
Status: published

We have released v1.1 of the HPSS storage resource plugin, compatible
with iRODS 4.1.7.

This plugin can be used either as a first class resource or as an
archive resource under a compound resource. Please note that bundle and
structured file operations will not work in a first class configuration
due to those operations making assumptions about an underlying POSIX
interface.

A tested package for CentOS 6 can be found at
<ftp://ftp.renci.org/pub/irods/plugins/irods_resource_plugin_hpss/1.1/>.

This package has been tested against HPSS 7.4.x with the full iRODS
4.1.7 testsuite.

Please confirm the checksums for the package(s) you download before
installing.

The code is open source and available, along with a README:

<https://github.com/irods/irods_resource_plugin_hpss>

As always, please contact <info@irods.org> if you have any questions.
