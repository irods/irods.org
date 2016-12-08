Title: iRODS Development Update: October 2015
Date: 2015-11-06 15:11
Author: Jason Coposky
Slug: irods-development-update-october-2015
Status: published

In October we held a joint Planning Committee and Technology Working
Group meeting due to scheduling conflicts.  Development has continued
for iRODS 4.2 as well as a gathering of issues for a 4.1.7 release
driven by two memory leaks reported from the field.

<!--more-->

### October TWG

As it was a joint meeting, we had a brief agenda for the TWG:

-   Stable Release Support Period
    -   There was discussion on the length of a support period for a
        stable branch of iRODS.  We had one request from a member for at
        least a year's worth of bug fixes for a given stable branch such
        as iRODS 4.1.x
-   Working Groups Updates
    -   The first meeting of the MIME-Type Working Group will meet
        November 23rd at 11:00am
    -   No updates on the Persistent Identifier Working Group
-   Open Issues of Note
    -   We discussed the issues which warrant a 4.1.7 release
-   Progress toward iRODS 4.2
    -   see below
-   CI Migration
    -   see below

CI Migration
------------

We have completed the preliminary work to automate the configuration of
Kerberos for the final authentication plugin.  These scripts are now
being ported to our Anisble framework to finalize the deployment for CI.
 Kerberos is our final plugin requiring migration, leaving only
Federation and Run-In-Place as features requiring deployment in CI.

[iRODS 4.1.7](https://github.com/irods/irods/search?utf8=%E2%9C%93&q=closed%3A%222015-10-01..2015-10-31%22+milestone%3A4.1.7&type=Issues)
-----------------------------------------------------------------------------------------------------------------------------------------

We will issue another release of iRODS given a couple memory leaks
reported from the field.  We have also included several updates to the
Compound Resource plugin which will provide options to invoke more
legacy-style behavior as well as a fix for iphymv which allows migrating
data objects between child resources.

iRODS 4.2
---------

The current focus for iRODS 4.2 has been in three areas: building
packages for external dependencies, refactoring the setup scripts, and
refactoring the RPC API system into a proper plugin framework.

The external dependencies build on all supported platforms, with some
additional effort needed to smooth out issues for run-in-place on OSX.

The set up scripts are passing the tests, and require a bit of
additional work for python on older systems.

Refactoring of the RPC API is necessary in order to integrate the Rule
Engine Plugin framework.  The current implementation does not support
Dynamic Policy Enforcement Points (PEPs) which is a desirable feature.
 Also, in order to pass complex types to other languages, such as
python, we require a new serialization technology.  In anticipation of
the upcoming next generation API, we have elected to use Avro to pass
the various data structures between the existing system and the Rule
Engine plugins.
