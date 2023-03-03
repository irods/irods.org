Title: iRODS 4.0.3 is released
Date: 2014-08-20 16:45
Author: Terrell Russell
Slug: irods-4-0-3-released
Status: published

RENCI is pleased to announce the third point release of iRODS 4.0+,
managed and overseen by the [iRODS
Consortium](http://irods-consortium.org/).

iRODS 4.0.3 represents a continued polishing of 4.0.0 and provides more
flexible installation options (service account name/group), a block
storage operation fix, an impostor resource, security fixes, and fixes
for memory leaks.

This release consists of [458 commits from 7
contributors](https://github.com/irods/irods/compare/4.0.2...4.0.3) and
[closed 102
issues](https://github.com/irods/irods/issues?q=milestone%3A4.0.3+is%3Aclosed).

All the code and current working issues are hosted at GitHub:
<https://github.com/irods/irods>

The release notes include:

> Development of this release has focused on the following features and
> efforts:
>
> -   Security fixes
> -   Bug fixes
> -   Impostor resource plugin removes need for installation of plugins
>     across entire grid
> -   Better support for block-storage operations
> -   More flexible installation options (service account name/group)
>
> Ongoing efforts include:
>
> -   Memory leak analysis via valgrind
> -   Full python-based testing framework
> -   Certified against full Jargon test suite
> -   Continuous integration testing via hudson
> -   Continuous static analysis via cppcheck
> -   Static analysis via coverity
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

iRODS Manual (4.0.3), Aug 2014 [(PDF,
539KB)]({static}/uploads/2014/08/irods-manual-4.0.3.pdf)

Please find the latest files available
at <ftp://ftp.renci.org/pub/irods/releases/4.0.3/>.

At this time, upgrading from either community 3.3.x or E-iRODS 3.0.1
requires a manual set of steps by the grid/system administrator. Please
read more in section 7 of the Manual.

Please send feedback to <info@irods.org>.

We'd like to thank our friends at Sanger and SNIC and our community of
users for valuable feedback and testing prior to this release.
