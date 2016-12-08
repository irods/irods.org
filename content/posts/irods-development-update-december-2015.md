Title: iRODS Development Update: December 2015
Date: 2016-01-04 15:01
Author: Jason Coposky
Slug: irods-development-update-december-2015
Status: published

December was largely dominated by the holidays, yet we have managed to
close a few issues for our upcoming 4.1.8 release in support of
Membership migration.  We have also continued work on the 4.2 rule
engine plugin framework within the experimental-build-system branch.

<!--more-->

### CI Migration

Federation testing is nearly complete as is the migration of the rest of
the plugins.  We still need to expand platform coverage on the Kerberos
and GSI plugins.  Once that is complete Run-In-Place will be next on the
list for automated testing.

### [iRODS 4.1.8](https://github.com/irods/irods/issues?q=is%3Aopen+is%3Aissue+milestone%3A4.1.8)

We have been working closely with one of our members during their
migration from the legacy 3.3.x system to the latest in the 4.1.x
series.  As issues have been identified we have slated them for a
near-term 4.1.8 release.  We have also included several issues from the
community and others that have already been fixed for 4.2.

Of note, we have added a capability to the unix file system plugin: a
[high water mark](https://github.com/irods/irods/issues/2981).  This
context string option will allow a user to set a high water mark for the
file system which will report "Out of Free Space" to iRODS if adding a
new replica will push the used space past the number of bytes specified.
 Coupled with a Round Robin or Random coordinating resource, this will
effectively create Read Only child resources while allowing head room
for additional writes to existing replicas. The parent resources will
simply try another child if the current child votes "no" for a create
operation.

Additionally, we have [significantly improved the reliability of iRODS
under heavy network load](https://github.com/irods/irods/issues/2803),
as well as improved the interaction of some system microservices with
resource hierarchies.

### iRODS 4.2

The majority of the work for 4.2 has been integrating the rule engine
plugin framework.  The code was merged and then brought up to date with
the newly implemented C++14 plugin architecture.  This new code is now
passing all existing tests.  The next step will be to add
Avro serialization of all plugin operation parameters which will be
passed to the dynamic policy enforcement point.  This new
serialization will normalize the behavior across all possible rule
engine plugins while giving the policy author maximal information when
making policy decisions.
