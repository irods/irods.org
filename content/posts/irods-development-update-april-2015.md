Title: iRODS Development Update: April 2015
Date: 2015-04-30 23:06
Author: Jason Coposky
Slug: irods-development-update-april-2015
Status: published

This month we will cover the minutes from the Technology Working Group,
and we will review the run-up to the 4.1 feature freeze at the end April
(today).

<!--more-->

### Technology Working Group

The TWG met on April 10th, where we covered several topics:

-   Review of 4.1 with a June release
    -   We reviewed new features, open and outstanding issues
-   Call for testing
    -   Post-feature freeze, we are inviting community members to field
        test engineering builds before the June release
-   Open discussion of version 4.2
    -   Our focus for the next year, also the floor has been opened for
        Member and Community feature requests
-   WebDAV demo
    -   Dan demonstrated the new WebDAV interface for iRODS
-   Cesar’s progress
    -   Screenshots of the next generation iRODS Web interface framework
-   Parallel restart for Jargon
    -   discussion of the issues surrounding reliability of parallel
        transfers

### <!--StartFragment -->Development Highlights

#### 

#### Feature Freeze

In the past month we have had an energetic run-up to the 4.1 feature
freeze.  Per our statistics on GitHub we have closed [97
issues](https://github.com/irods/irods/issues?q=closed%3A2015-03-31..2015-05-01) (31
enhancements, 46 bugs) in April.  As of April 30th, we are no longer
accepting enhancements and will continue our work in closing the last
[24 issues](https://github.com/irods/irods/issues?q=is%3Aopen+is%3Aissue+milestone%3A4.1.0)
and polishing the release.

#### Call for Testing

Once the feature freeze is past and things settle down in Continuous
Integration we will post links to engineering builds which we invite our
members and community to test.  Please put iRODS 4.1 through its paces,
try new features and help to shake out any of the lingering bugs that
lead to point releases.  We will keep a close eye on GitHub for new bugs
to fix, and pull requests are always welcome.  Please note that there
will be no supported upgrade path from the engineering builds, these
packages are strictly for testing only.

#### Overview of 4.1

-   Weighted Passthru
    -   new feature allowing the passthru coordinating resource plugin
        to weight votes in order to allow programmatic direction of
        resource hierarchy behavior
-   Zero-length files now trigger resource hierarchy behavior (e.g.
    replication)
-   Key-Value passthrough for iCommands
    -   users can now pass configuration to resource plugins via iput
        and iget
-   No config files in packages, cleaner upgrades
-   Full move to JSON configuration
-   Use OpenSSL MD5/SHA1 implementation
-   Schema Validation on all configuration files and the izonereport
    output
-   Core code is Coverity Clean
    -   1,099 Fixed
    -   35 Outstanding, all boost/compiler related
-   Federation Testing is now captured in a testing suite, soon to be
    added to CI
    -   master \<-\> 4.0.3
    -   master \<-\> 3.3.1

#### iRODS Cloud Browser development

[Cesar](http://irods.org/about/who-we-are/) from the Consortium team is
working on the new [Cloud
Browser](https://github.com/DICE-UNC/irods-cloud-browser). It is a
reference user interface designed in concert with DICE to demonstrate
key iRODS capabilities as well as some experimental features that may
eventually migrate into the iRODS core.

This month's development has been functional code representing the basic
layout, login/logout, and file upload/download. The two screenshots
below show multiselect and a details page about an iRODS Data Object.

<div class="full_image"><img src="{filename}/uploads/2015/04/s2.jpg" /></div>

<div class="full_image"><img src="{filename}/uploads/2015/04/s3.jpg" /></div>

<!--EndFragment -->
