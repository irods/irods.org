Title: Zonereport Plugins v1.0 released
Date: 2014-12-04 23:55
Author: Terrell Russell
Slug: zonereport-plugins-v1-0-released
Status: published

The iRODS Consortium is pleased to release v1.0 of the zonereport
plugins.

This set of two plugins (api and icommands) can be used to provide a
nearly comprehensive snapshot of the configuration of an iRODS Zone.
When run by an authenticated rodsadmin account, the \`izonereport\`
icommand will generate JSON. This JSON can be validated against the
[iRODS zone\_bundle.json
schema](http://irods.org/post/schemas-schemas-everywhere/) (found at
<http://schemas.irods.org/>).  
<!--more-->

Additional tools are being developed to parse/display/use this
information, but until they are ready, manual inspection may reveal
misconfigurations that would be tough to communicate otherwise. By
making this information more easy to extract, we expect diagnoses of
iRODS 4.0.3+ issues to go much more smoothly.

Tested packages for Ubuntu 10 and 12, CentOS 5 and 6, and SuSE 11 and 12
can be found at
<ftp://ftp.renci.org/pub/irods/plugins/irods_zonereport/1.0/>.

This set of two plugins has been designed and tested to run under iRODS
4.0.3. The irods-icommands-zonereport package requires the
irods-api-plugin-zonereport package as a dependency.

The \`izonereport\` icommand will be available natively in 4.1+ and is
already available in the master branch.

Please confirm the checksums for the package(s) you download before
installing.

The code is open source and available:

<https://github.com/irods/irods_zonereport>

As always, please contact <info@irods.org> if you have any questions.
