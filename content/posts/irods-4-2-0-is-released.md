Title: iRODS 4.2.0 is released
Date: 2016-11-14 13:34
Author: Terrell Russell
Slug: irods-4-2-0-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.2.0.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ImG7xg9V8EQ" frameborder="0" allowfullscreen></iframe>
(**Released live on stage from the iRODS Workshop at Supercomputing
2016**)

iRODS 4.2.0 is the product of over a year and a half of refactoring and
significant reorganization of the rule engine framework into the seventh
iRODS plugin interface.

This release consists of [951 commits from 9
contributors](https://github.com/irods/irods/compare/4.1.0...4.2.0) and
[closed 275
issues](https://github.com/irods/irods/issues?q=milestone%3A4.2.0).

All the code and current working issues are hosted at GitHub:
<https://github.com/irods/irods>

APT and YUM Repositories are available at <https://packages.irods.org>.

[The release notes
include](https://docs.irods.org/4.2.0/release_notes/):

> **Notable Features**
>
> <ul>
> <li>
> Pluggable Rule Engine - Seventh plugin interface now supports writing
> rule engines for any language. The iRODS Rule Language has been moved
> to a plugin, alongside a default policy C++ rule engine.
>
> </li>
> <li>
> First Class API Plugins - Enabling dynamic policy enforcement points
> (PEPs) and full parameter serialization for every plugin operation
>
> </li>
> <li>
> Refactored build system - CMake, Clang, APT/YUM repositories
>
> </li>
> -   CMake - Now a standard CMake project, much more developer friendly
> -   Clang - All supported platforms now building the C++14 codebase
> -   Packages separated - Cleaner dependencies, dev and runtime ready
>     for developers
> -   APT/YUM Repositories - Packages now hosted at RENCI, making
>     installations and upgrades much easier
>
> <li>
> All control scripts in Python - Reusable module, reduced codepaths
>
> </li>
> <li>
> New process model - Two long running processes to amortize dynamic
> linking startup cost
>
> </li>
> <li>
> Configuration schemas now included - Default setups will no longer
> need a public network connection for validation
>
> </li>
> <li>
> Run-In-Place now a first class citizen - Now called Non-Package
> Install
>
> </li>
> </li>
> </ul>
>
> **Notes**
>
> <ul>
> <li>
> Externalization of code into separate repositories
>
> </li>
> -   iCommands client
> -   Fuse client
> -   Microservice objects (MSOs)
>
> <li>
> idbug removed
>
> </li>
> <li>
> iphybun, ixmsg, irodsXmsgServer marked as deprecated
>
> </li>
> <li>
> Resource hierarchies refactored to use IDs - Upgrades will experience
> a one-time full table scan whereby all data objects are updated. A 10M
> data object lab test installation took 13 minutes to update. 100M data
> objects are estimated to take 2-3 hours to update.
>
> </li>
> <li>
> Distributing iCommands to users who do not have root is not yet
> supported for 4.2. It will be included again in a later release.
>
> </li>
> <li>
> Quieter rodsLog during normal operations
>
> </li>
> </ul>

