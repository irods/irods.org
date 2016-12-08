Title: iRODS Development Update: January 2016
Date: 2016-02-01 16:23
Author: Jason Coposky
Slug: irods-development-update-january-2016
Status: published

During January we held a Technology Working Group, and worked with a
Consortium member to migrate from 3.3.x to the 4.1 series.  We also
continued work on iRODS 4.2: reimplementation of the build system
in CMake, adding serialization to the rule engine framework, and further
work on the python configuration system.

<!--more-->

### Technology Working Group

The TWG met on January 11 with the following agenda
([slides](http://slides.com/jasoncoposky/twg_january_11_2016)):

-   New Plugin Framework
-   Resource IDs
-   Proposed Deprecations
    -   XMessage
    -   iphybun and the bundleResc

##### New Plugin Framework

We discussed the new plugin framework that has been enabled from our use
of clang.  In short, the old framework relied on variadic parameters for
type erasure which provided no type safety across the shared object
boundary.  With the use of clang we can now use variadic templates along
with std::function to hold plugin operations.  We store these operations
in a map of boost::any for type erasure, but given the variadic
templates we are guaranteed type safety at the point of call. This is a
breaking change from the previous framework which will require an update
to any plugins not shipped with the iRODS core. A follow up technology
update on how to do this will be posted shortly.

##### Resource IDs

Currently the resource hierarchy is stored in the database as a string,
and this has several draw backs. Primarily it makes the update of a
hierarchy potentially slow given a large number of data objects in a
given leaf. In order to address this issue we have proposed to deprecate
the use of hierarchy strings in the catalog and move to the use of the
resource id of the leaf on which the data object resides.  This
abstraction allows for the immediate renaming of the resource, as well
as swift editing of resource hierarchies. This change will require a
schema update as an automatic part of the upgrade process to 4.2.

##### Proposed Deprecations

We proposed that XMessage, iphybun, and the bundleResc be deprecated for
4.2, and potentially removed or replaced at a future date. We invite
comment from the user community regarding this issue.  If these are
mission critical features to any of our users we would like to hear as
soon as possible.

### [iRODS 4.1.8](https://github.com/irods/irods/issues?utf8=%E2%9C%93&q=closed%3A%222016-01-01..2016-01-31%22+milestone%3A4.1.8)

The next release in the 4.1 series of iRODS is largely finished and
awaiting sign-off by a Consortium member who is in the process of
migrating from the legacy 3.3.x series.  Efforts this month have mostly
been related to documentation and testing. The migration of our
supported plugins has been completed, and a full suite of resource and
authentication plugins can be expected alongside this release.

### iRODS 4.2

Development of iRODS 4.2 continues in the experimental-build-system
branch of the github repository in order to insulate the community from
broken builds while doing the heavy lifting.  As mentioned above during
the TWG, the resource ID work began and is mostly complete with updates
to the replication rebalance code left to finish.

Development has also begun on the new build system using CMake, with the
added benefit of the move to dynamically linked executables and plugins.
 CMake will generate a build environment in a target directory which
will be used as a basis for the packaging system, or as the target
location for a run-in-place deployment.

We have also began work on the serialization system for the new rule
engine framework. When a plugin operation is called, iRODS will
automatically attempt to trigger a dynamic policy enforcement point.
Currently, data is serialized into key-value pairs for the native iRODS
rule engine.  Now that we have a range of choices in rule language, a
common representation of data is necessary for cross language
communication. Having chosen Avro, we have began creating schemas for
the native iRODS data types which will allow for the maximal
communication between the rule engine and iRODS. This implies that when
a new data type is introduced to iRODS which is passed to a plugin
operation an associated serialization function will also be required.

 
