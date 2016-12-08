Title: HPSS Resource Plugin v1.0 released
Date: 2014-08-26 11:11
Author: Terrell Russell
Slug: hpss-resource-plugin-v1-0-released
Status: published

Just after [releasing five bumped versions of plugins
yesterday](http://irods.org/2014/08/five-plugins-released-alongside-irods-4-0-3/),
today we are releasing v1.0 of the HPSS plugin.

This plugin can be used either as a first class resource or as an
archive resource under a compound resource. Please note that bundle and
structured file operations will not work in a first class configuration
due to those operations making assumptions about an underlying POSIX
interface.

A tested package for CentOS 6 can be found at
<ftp://ftp.renci.org/pub/irods/plugins/irods_resource_plugin_hpss/1.0/>.

This package has been tested against HPSS 7.4.x with the full iRODS
4.0.3 testsuite.

Please confirm the checksums for the package(s) you download before
installing.

The code is open source and available, along with a README:

<https://github.com/irods/irods_resource_plugin_hpss>

As always, please contact <info@irods.org> if you have any questions.
