Title: iRODS Development Update: September 2015
Date: 2015-09-30 17:01
Author: Jason Coposky
Slug: irods-development-update-september-2015
Status: published

This past month we skipped the TWG due to the lack of sufficient agenda
items. The development team continued work on migration to our new CI
system, iRODS 4.2 and the soon to be released iRODS 4.1.6.  The
Consortium has also traveled to the University of Utrecht for two days
of advanced iRODS training.

<!--more-->

### CI Migration

We have completed migration of the GSI authentication plugin to the new
[jenkins](https://jenkins.irods.org/view/2.%20Plugin%20Verification/)
system.  This leaves the Kerberos plugin and the final clean up of the
HPSS plugin. The next steps for CI will be inclusion of automated
Federation testing, and testing of the Run In Place deployment.

### iRODS 4.2

Progress continues for iRODS 4.2.  We are close to pushing the first
implementation of the fully refactored python configuration suite and
have implemented a trial repository for the Debian based package
managers.  We ran into a small roadblock for the rpm based systems, but
are [working with the
developer](https://github.com/dnbert/prm/issues/52) of our chosen
tool: [PRM](https://github.com/dnbert/prm). Once this step is complete,
we will build packages for all of our external dependencies.

### [iRODS 4.1.6](https://github.com/irods/irods/search?utf8=%E2%9C%93&q=closed%3A%222015-09-01..2015-09-30%22+milestone%3A4.1.6&type=Issues)

We have collected 23 issues for the 4.1.6 release, which was driven
primarily by an issue with the development libraries.  We have now
further partitioned the iRODS client library into a specific library for
plugins as well as a client core library. This partitioning is another
step closer to a dynamically linked iRODS build where we may maintain
functionality in individually versioned dynamic shared objects.

### Advanced Training in [Utrecht](https://www.google.com/maps/place/Utrecht,+Netherlands/@52.0841868,5.0824915,12z/data=!3m1!4b1!4m2!3m1!1s0x47c66f4339d32d37:0xd6c8fc4c19af4ae9)

Dan and I traveled to the University of Utrecht where we were hosted by
the Research Services and Data Management Group.  We
[presented](https://slides.com/irods) two days of advanced iRODS
training, focusing on writing rules, microservice plugins, resource
composition and data grid management.  We had a lot of fun working with
everybody, debugging broken demos, and discussing everyone's individual
use cases.
