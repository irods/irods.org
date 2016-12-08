Title: iRODS Development Update: July 2015
Date: 2015-08-10 22:28
Author: Jason Coposky
Slug: irods-development-update-july-2015
Status: published

In this post we review the July development activities of the iRODS
Consortium, which focused heavily on the 4.1.4 release.  The Technology
Working Group was cancelled and A Call For Participation was sent to the
TWG, Advisory Board and iRODS Chat list for working groups focused on
mime types, persistent identifiers, and the upcoming enterprise message
bus.

<!--more-->

### Focus on 4.1.4

For the month of July, most of the development team worked on issues
related to the
[4.1.4](https://github.com/irods/irods/issues?q=milestone%3A4.1.4)
release.  We worked with a developer from our collaborators at
[iPlant](http://www.iplantcollaborative.org/)on a new implementation of
the fuse client, which promises more stability.  During this time we
continued to fix other bugs as they arrived.  We closed [33
issues](https://github.com/irods/irods/search?utf8=%E2%9C%93&q=closed%3A%222015-07-01..2015-07-31%22+milestone%3A4.1.4&type=Issues)
for 4.1.4, out of the 38 created overall.

### External Plugins

We are currently working on new releases of external storage plugins for
HPSS and WOS.  The work on WOS has included the packaging of the wosrest
daemon in order to optimize the communications between iRODS and the
daemon.  The daemon will need to be launched as a separate service and
the plugin configured to communicate directly with the local service.
 HPSS has also been enhanced to include the ability to support unicode
characters in the physical path.

### iRODS 4.2

Progress continues for [iRODS
4.2](https://github.com/irods/irods/issues?q=is%3Aissue+milestone%3A4.2.0+is%3Aclosed) as
we first focus on infrastructure and bug fixes before we begin work on
integrating the new rule engine plugin interface. Highlights
from the infrastructure work include refactoring the entire setup and
upgrade code, removing the mix of perl and bash, into a new python
library. We are also investigating the standardization on a C++14
compliant compiler across all platforms for the support of the new rule
engine plugin.

### Working Group Call for Participation

The iRODS Consortium Technology Working Group has identified several
important topics that have broad impact, both on grant-funded
projects in the academic arena, as well as on new and existing users
from the community. These working groups would work to gather use cases,
examine existing implementations, and synthesize standards and best
practices around which the iRODS Consortium may provide packaged
reference implementations.

1.  Mime Types
2.  Persistent Identifiers
3.  Enterprise Message Bus (EMB)
4.  Services related to the EMB such as:
    1.  Auditing Framework
    2.  Notifications

Once participants have been identified, we expect each working group to
meet for hour-long web conferences about every two weeks for a span of
approximately 3 months. We will begin by hosting presentations from our
collaborators to examine existing production implementations.
 Ultimately, our desired outcomes are documentation and decisions on:
message formats, schemas, serialization technology, topics and
associated services, expected control flow from clients through iRODS to
and from these services, and potential new API calls from iRODS to
support new functionality.

If you are interested in playing a role in these discussions, please
email <info@irods.org> referencing any or all working groups you would
like to join.
