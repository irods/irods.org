Title: iRODS Development Update: November 2015
Date: 2015-12-01 13:23
Author: Jason Coposky
Slug: irods-development-update-november-2015
Status: published

November was dominated by the SuperComputing 2015 conference in Austin,
Texas, and Thanksgiving.  At SC15 we held a workshop, caught up with
existing members, and met many new future iRODS users.  In that time we
also managed to release iRODS 4.1.7 and continue work on the 4.2
release.

<!--more-->

### CI Migration

We have completed the Kerberos plugin migration and have now begun
releasing plugins built against the 4.1.7 library.  Kerberos and GSI
still need support for additional platforms beyond the initial work.  We
continue to automate testing with the inclusion of Federation testing
within CI which requires the ability to deploy several iRODS Zones and
configure them for Federation.  Once Federation is complete,
Run-In-Place deployments will be added which will complete this round
of our CI effort.

### iRODS 4.1.7

We [recently
released](http://irods.org/2015/11/irods-4-1-7-is-released/) iRODS 4.1.7
which, barring any major bugs, will conclude the point release cycle for
the 4.1 branch.  The 4-1-stable branch will continue to receive
back-ported bug fixes for a year following the release of 4.2 at which
point the 4.2 branch will become the stable branch and the 4-1-stable
branch will fall out of maintenance.

### iRODS 4.2

All of the current 4.2 work resides in an
[experimental-build-system](https://github.com/irods/irods/tree/experimental-build-system)
branch where we are isolating the master branch from the changes in the
build and setup scripts until they have stabilized.

#### Packaging Externals

Automating the build of the
[externals](https://github.com/irods/externals) packages is now complete
for all supported platforms, which has enabled us to modify the existing
build system to reference the new location for the build dependencies.
 The external packages will now install in /opt/irods-externals to avoid
any collisions with existing system packages.  For Run-In-Place
installation the user may build the externals repository in place.
 iRODS will expect a fully-qualified path to the location of the
compiled externals repository as an option to the --run-in-place switch.

#### The API and Rule Engine Plugins

Now that we are able to build with a modern compiler, we are moving
forward with development of the new plugin framework.  In the existing
framework, extending back to E-iRODS, plugin operations were referenced
through a variadic function type which lost the type signature from the
point of call to the point which the plugin operation was invoked. This
allowed us to keep as much C++ out of the plugins as possible as well as
allowed for a homogeneous table of function pointers. Given our new
compiler and the inclusion of the RPC API as a proper plugin interface
we can now provide complete type safety from the point of call down
through to the plugin operation with the use of variadic templates and
std::function. While this change will require modification of plugins
for compatibility, we significantly reduce the code within iRODS and
off-load many potential bugs to the compiler.

A follow-up technical update will contain more on this topic. Once the
plugin framework is refactored we can merge the Rule Engine plugin
interface at which point we begin testing, working on the new
serialization, and the creation of new Rule Engine plugins.

#### Setup Scripts

The supporting setup scripts are nearly complete.  All of the Perl has
now been replaced with Python, including the use of
[pypyodbc](https://pypi.python.org/pypi/pypyodbc) as a common interface
for database configuration.  We are currently working to replace the
last of the bash scripting at which point these changes will be pushed
to the experimental-build-system for testing.
