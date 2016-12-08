Title: iRODS 4.0.0 is released
Date: 2014-03-28 16:23
Author: Terrell Russell
Slug: irods-4-0-0-released
Status: published

RENCI is pleased to announce the fourth major open source release of
iRODS, managed and overseen by the [iRODS
Consortium](http://irods-consortium.org/).

iRODS 4.0.0 marks a reunification and merger of the community codebase
of iRODS and the Enterprise codebase of E-iRODS which diverged at iRODS
3.0 (released September 30, 2011).

All the code and current working issues are hosted at GitHub:
<https://github.com/irods/irods>

This release is another significant step towards a full plugin
architecture while remaining API compatible with existing iRODS 3.x
releases.  We are committed to keeping Federation with iRODS 3.x grids a
first class use case for the lifetime of iRODS 4.x.

4.0.0 includes all features and bugfixes through iRODS 3.3.1. This
release represents a full merger of the code through [community iRODS
r5681 (March 11,
2014)](https://github.com/irods/irods-legacy/commit/2a815f477a840b84f5c3891f6a00e1ca439cfc1a).

The release notes include:

> Development of this release has focused on the following features and
> efforts:
>
> -   Introduced pluggable interface for databases
>     -   PostgreSQL
>     -   MySQL
>     -   Oracle
> -   Introduced pluggable interface for the API
>     -   NetCDF
> -   Additional resource plugins
>     -   Amazon S3
>     -   DDN WOS
>     -   Direct Access
> -   Additional authentication plugins
>     -   Grid Security Infrastructure (GSI)
>     -   Kerberos
> -   Full merge of 3.3.1 features and bugfixes
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

The Oracle database plugin is packaged only for Ubuntu at this time, but
as more test machines are configured, more Oracle packages will be made
available.

iRODS Manual (4.0.0), Mar 2014 [(PDF,
497KB)]({filename}/uploads/2014/03/irods-manual-4.0.0.pdf)

Please find the latest files available
at <ftp://ftp.renci.org/pub/irods/releases/4.0.0/>.

At this time, upgrading from either community 3.3.x or E-iRODS 3.0.1
requires a manual set of steps by the grid/system administrator. Please
read more in section 7 of the Manual.

Please send feedback to <info@irods.org>.
