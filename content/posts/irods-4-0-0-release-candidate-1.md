Title: iRODS 4.0.0 RC1
Date: 2014-03-10 11:47
Author: Terrell Russell
Slug: irods-4-0-0-release-candidate-1
Status: published

RENCI is pleased to announce the first release candidate of the fourth
major open source release of iRODS, managed and overseen by the [iRODS
Consortium](http://irods-consortium.org/).

iRODS 4.0.0 will mark a reunification and merger of the community
codebase of iRODS and the Enterprise codebase of E-iRODS which diverged
at iRODS 3.0 (released September 30, 2011).

All the code and current working issues are hosted at GitHub:
<https://github.com/irods/irods>

This release is another significant step towards a full plugin
architecture while remaining API compatible with existing iRODS 3.x
releases.  We are committed to keeping Federation with iRODS 3.x grids a
first class use case.

4.0.0rc1 includes all features and bugfixes through iRODS 3.3.1. This
release candidate represents a full merger of the code through
[community iRODS r5680 (March 4,
2014)](https://github.com/irods/irods-legacy/commit/1e2320f95254ddb465387ae15ddd76a070e938e0).

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
> -   Full merge of 3.3.1 features and bugfixes
> -   Full python-based testing framework
> -   Certified against full Jargon test suite
> -   Continuous integration testing via hudson
> -   Continuous static analysis via cppcheck
> -   Optimized builds with "-O3" and "-Werror"
> -   Code coverage over 56%
> -   Topology testing
> -   Continuously built and tested across 3 major linux distributions
> -   Packaged for 3 major linux distributions
> -   Support for package upgrade via package manager
>
> <span style="line-height: 1.5em;">This release includes packages that
> have been tested on CentOS 5 and 6, SuSE 11 and 12, and Ubuntu 10 and
> 12.</span>

The MySQL database plugin is not packaged for CentOS 5, as the required
regular expression plugin (lib\_mysqludf\_preg) does not currently build
on CentOS 5.

The Oracle database plugin is packaged only for Ubuntu at this time, but
as more test machines are configured, more Oracle packages will be made
available.

iRODS Manual (4.0.0rc1), Mar 2014 [(PDF,
404KB)]({filename}/uploads/2014/03/irods-manual-4.0.0rc1.pdf)

Please find the latest files available
at <ftp://ftp.renci.org/pub/irods/releases/4.0.0rc1/>.

At this time, upgrading from either community 3.x or E-iRODS 3.0.1 will
require a manual set of steps by the grid/system administrator. Refining
this process is a central part of getting to our final release of 4.0.0
by the end of March. If you have a production system and would like to
be a part of the testing before 4.0.0 is released, please contact us
through the email below.

Please send feedback to <info@irods.org>.
