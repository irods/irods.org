Title: iRODS Development Update: August 2015
Date: 2015-09-01 14:54
Author: Jason Coposky
Slug: irods-development-update-august-2015
Status: published

This month we had excellent attendance and a full agenda for the
Technology Working Group. The development team continued to push forward
in migrating plugins from the old Hudson system to our new cloud-based
Jenkins system as well as putting together our 4.1.5 release.

<!--more-->

### August TWG

1.  4.1.5 Update
    - [Issues](https://github.com/irods/irods/issues?q=milestone%3A4.1.5+is%3Aclosed)
    -   We will release as soon as CI is green
    -   Adding support for CentOS 7
    -   Engineering preview for Ubuntu 14 on POWER8
    -   Fixes for Fuse
    -   Clean up memory leaks
    -   Better error reporting
    -   Fix for runtime error where database statement table was
        exhausted

2.  Update on GenQuery v2
    -   Discuss background on why we are pursuing a new GenQuery
        implementation
    -   Introduce the new GenQuery v2 query engine
        [prototype](https://github.com/xu-hao/QueryArrow)
    -   Will support simultaneous queries across multiple databases and
        types: Graph, NoSQL, and Relational

3.  Request for participation in new consortium working groups
    -   Mime-types
    -   Persistent identifiers
    -   Enterprise message bus

4.  Discussion of hosting repositories for iRODS packages, externals for
    4.2, and CMake
    -   RENCI will host repositories for iRODS and related dependencies
    -   Properly package and distribute iRODS externals for build
    -   Run-In-Place will still need to build Externals if the packages
        cannot be installed
    -   Open request for Mirrors

5.  Discussion of a C++14 compliant compiler: Clang vs G++
    -   Simplify iRODS development going forward
    -   Necessary for the new Rule Engine plugin framework
    -   Chosen compiler will be built for all platforms and hosted in
        the new repositories

6.  Focus for 4.2 release
    -   Infrastructure - build and configuration
    -   Rule Engine plugin framework
    -   Architectural performance enhancements

7.  Additional topics
    -   At the request of Sanger, three issues were reviewed
        -   Issue [2833](https://github.com/irods/irods/issues/2833) –
            Fix is pushed and will be released in 4.1.5.
        -   Issue [2676](https://github.com/irods/irods/issues/2676) –
            Consortium will talk to Sanger off-line about mirroring.
        -   Issue [2803](https://github.com/irods/irods/issues/2803) –
            Sanger will send us the scripts that they used.
    -   Tom Langborg brought up performance and the need for a focus on
        this. Need to reduce the number of trips to the database. Jason
        affirmed that we will increase performance for iRODS 4.

### [August Development Activities](https://github.com/irods/irods/search?utf8=%E2%9C%93&q=closed%3A%222015-08-01..2015-08-31%22+milestone%3A4.1.5&type=Issues)

#### iRODS 4.1.5

We have had [16
issues](https://github.com/irods/irods/issues?q=milestone%3A4.1.5+is%3Aclosed)
reported against 4.1.4 which we have been fixing in the last month. We
will be issuing a release of 4.1.5 as soon as the 4-1-stable branch
passes through CI and federation testing.

#### iRODS 4.2

The two primary activities for 4.2 are currently the refactor of the
configuration scripts, moving from a mix of bash, perl and python into a
pure python library. We are now using pyodbc to configure the database
which simplifies things greatly. This code should be available in the
master branch soon.

The other major activity is the creation of proper apt and yum
repositories. These repositories will be used to house the iRODS
packages, the externalized plugins as well as all of the dependencies
for build and installation. This will allow for a much more smooth
installation and upgrade experience as well as allow the Consortium to
more easily transition away from the legacy build system.

#### Plugin Testing

We still continue to
[migrate](https://jenkins.irods.org/view/2.%20Plugin%20Verification/)
our external plugins to the new Jenkins system. HPSS and GSI are next on
the list for migration. We should have an additional release of these
plugins after 4.1.5 has shipped.
