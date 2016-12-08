Title: iRODS Development Update: February and March 2016
Date: 2016-04-02 23:32
Author: Jason Coposky
Slug: irods-development-update-february-and-march-2016
Status: published

The past couple months we released iRODS 4.1.8 and associated plugins as
well as made considerable progress on iRODS 4.2.  Efforts include the
new build and configuration systems as well as rule engine plugin
integration. We skipped the February TWG in order to focus on
development and the new release and held one in March.  
<!--more-->

### March Technology Working Group

Slides are available
[here](http://slides.com/jasoncoposky/twg-march-14-2016#/).

The agenda included much of what is discussed in this post:

-   <span
    style="font-family: 'Times New Roman', serif; font-size: medium;"><span
    style="font-family: Calibri, sans-serif;">4.2 Update</span></span>
    -   <span
        style="font-family: 'Times New Roman', serif; font-size: medium;"><span
        style="font-family: Calibri, sans-serif;">C++ "Default Rule
        Engine" - optional vs default for new installs</span></span>
    -   <span
        style="font-family: 'Times New Roman', serif; font-size: medium;"><span
        style="font-family: Calibri, sans-serif;">New serialization for
        dynamic policy enforcement points</span></span>
-   <span
    style="font-family: 'Times New Roman', serif; font-size: medium;"><span
    style="font-family: Calibri, sans-serif;">Update on CI</span></span>
-   <span
    style="font-family: 'Times New Roman', serif; font-size: medium;"><span
    style="font-family: Calibri, sans-serif;">Update on the new
    configuration and build system</span></span>
-   <span
    style="font-family: 'Times New Roman', serif; font-size: medium;"><span
    style="font-family: Calibri, sans-serif;">Creating a standard
    json message format for the Enterprise Message
    Bus</span></span><span
    style="font-family: 'Times New Roman', serif; font-size: medium;"><span
    style="font-family: Calibri, sans-serif;"> </span></span>
-   <span
    style="font-family: 'Times New Roman', serif; font-size: medium;"><span
    style="font-family: Calibri, sans-serif;">4.3 - GQv2 and The Next
    Roadmap</span></span>
-   iRODS 4.1.8

We [closed 17
issues](https://github.com/irods/irods/issues?utf8=%E2%9C%93&q=closed%3A%222016-02-01..2016-02-29%22+milestone%3A4.1.8+)
for the final touches on the last release of the iRODS 4.1 series which
totaled 108 commits for 60 issues. This represents the final release of
the 4.1.x branch of development.

### [iRODS 4.2](https://github.com/irods/irods/issues?utf8=%E2%9C%93&q=closed%3A%222016-02-01..2016-03-31%22+milestone%3A4.2.0+)

We have made considerable progress towards an engineering preview of
iRODS 4.2.  We are nearly finished with the architectural and
infrastructure updates.  We have performed most of the heavy lifting for
the new build system in an experimental branch creatively called the
experimental-build-system.  As work progressed in both the master branch
as well as the experimental build branch ( XBB ) we have now merged the
two into XBB-2.  We will shepherd this through the CI system by hand and
then release the engineering preview from XBB-2 in order to gather
feedback as quickly as possible.  Once we cut the preview release we
will integrate the new build system into CI and then XBB-2 will become
the master branch.  We will feature freeze by the end of April and then
focus on testing and documentation for the month of May.

#### Infrastructure

As previously mentioned, we have now built packages for all our external
dependencies which include:  avro, boost, clang,
clang-runtime, cmake, cppzmq, jansson, libarchive, and zeromq.  These
will be provided via our new repositories hosted at packages.irods.org
along with the iRODS 4.2 release.  Any newer versions of iRODS and the
associated dependencies will also be subsequently available via the
repository as an upgrade.  We feel this should make both installation as
well as building the latest version of iRODS much simpler.

We have completely moved from the use of EPM as well as our bespoke
build system which was a combination of Make and bash.  We now have a
complete build and package system based on CMake and CPack.  The
highlights here are swifter build times, support for both Make and Ninja
build as well as the ability to generate Visual Studio projects.  We
have brought the time to build and package from 10 or more minutes down
to 2 minutes which has very much tightened our
development iteration time.  CMake will also allow us to better unify a
binary installation with a run-in-place installation.  iRODS will be
built the same, into a target build directory.  Rather than packaging
for a binary installation, a run-in-place installation will simply be
'make install'ed into a target location.  The directory organization of
the two installation types will be identical.

Following along with our new build system we have also standardized on a
modern compiler: clang.  We have built and provided clang 3.8 as a
package from our repository in order to make this move as simple as
possible for the community.  We chose clang both for its implementation
of the latest C++ features as well as the amazing suite of tools it
provides.  We heavily used both in the push for iRODS 4.2.  Both the
clang static analyzer as well as the address sanitizer have found a
number of issues missed by cppcheck, coverity, and valgrind.

The new python configuration system is nearly complete and is already
merged with the XBB-2 branch.  Installation has been nearly unified
across the various configurations as python has the necessary tools to
work with both the various databases as well as the JSON configuration
files.  Given all the nice things that the new configuration framework
provides we are also removing all installation and upgrade logic from
the packaging and placing that responsibility entirely on the
irods\_control.py script.  Upon a start or restart, the framework will
check the iRODS version, database schema version, and configuration
schema versions.  If any are behind in revision the framework will take
the appropriate measures to bring them up to date before starting iRODS.
 This includes any changes to the database schema as well as any
configuration files used by iRODS.  This means that the packager will
simply get files onto the disk and the framework will handle the rest in
a hands-free manner.  From this new point of view, a fresh installation
or the Nth upgrade will behave the same for both a binary install or
run-in-place.

#### New Feature Development

The refactoring of the RPC API is now complete, allowing for dynamic
policy enforcement for every API available within iRODS. This includes
both the statically linked and dynamically loaded plugins.  A new
capability is the serialization of the API parameters themselves into
the policy enforcement point.  This means that as much of the context as
possible is captured at the point of call and provided to the policy
enforcement point.  Each rule engine plugin can then individually decide
the best way to handle the serialized parameters.

The integration of the rule engine plugin framework is also nearly
complete. The native rule engine itself has been moved into the plugin
which removes the overhead of initialization unless requested by the
iRODS instance.  The use of irule, delayed execution, and remote
execution are now routed through the rule engine plugins which allows
for the use of python, javascript, or other rule languages every place
where the native rule language was once used.  This final separation of
the rule engine signifies the last interface created between the iRODS
core and the collection of services it provides.

Another step towards simplification of both the code and the
installation process is the unification of the ICAT enabled servers and
the resource servers.  Previously, this decision was made at compile
time which required two separate packages and other configuration
requirements.  We have now moved this compile-time option to a run-time
configuration decision which means we can ship a single server package
which may or may not provide the catalog services with the change of a
single parameter. This opens up the opportunity for a server to switch
roles automatically as necessary given either load or availability.
