Title: iRODS 4.0.1 is released
Date: 2014-06-06 11:55
Author: Terrell Russell
Slug: irods-4-0-1-released
Status: published

RENCI is pleased to announce the first point release of iRODS 4.0+,
managed and overseen by the [iRODS
Consortium](http://irods-consortium.org/).

iRODS 4.0.1 represents a polishing of 4.0.0 and should pave the way for
easier upgrades and broadened platform support via --run-in-place.

This release consists of [201 commits from 12
contributors](https://github.com/irods/irods/compare/4.0.0...4.0.1) and
[closed 68
issues](https://github.com/irods/irods/issues?milestone=7&state=closed).

All the code and current working issues are hosted at GitHub:
<https://github.com/irods/irods>

The release notes include:

> Development of this release has focused on the following features and
> efforts:
>
> -   Memory leak analysis via valgrind
> -   Security fixes
> -   --run-in-place support
> -   MacOSX support (via --run-in-place)
> -   Developer-friendly microservice templating
> -   Database schema update mechanism
>
> Ongoing efforts include:
>
> -   Full python-based testing framework
> -   Certified against full Jargon test suite
> -   Continuous integration testing via hudson
> -   Continuous static analysis via cppcheck
> -   Optimized builds with "-O3" and "-Werror"
> -   Code coverage over 57%
> -   Topology testing
> -   Continuously built and tested across 3 major linux distributions
> -   Packaged for 3 major linux distributions
> -   Support for package upgrade via package manager
>
> This release includes packages that have been tested on CentOS 5 and
> 6, SuSE 11 and 12, and Ubuntu 10 and 12.

The MySQL database plugin is not packaged for CentOS 5, as the required
regular expression plugin (lib\_mysqludf\_preg) does not currently build
on CentOS 5 ([github
issue](https://github.com/mysqludf/lib_mysqludf_preg/issues/13)).

The Oracle database plugin is not packaged for SuSE at this time.

iRODS Manual (4.0.1), Jun 2014 [(PDF,
506KB)]({filename}/uploads/2014/06/irods-manual-4.0.1.pdf)

Please find the latest files available
at <ftp://ftp.renci.org/pub/irods/releases/4.0.1/>.

At this time, upgrading from either community 3.3.x or E-iRODS 3.0.1
requires a manual set of steps by the grid/system administrator. Please
read more in section 7 of the Manual.

Please send feedback to <info@irods.org>.
