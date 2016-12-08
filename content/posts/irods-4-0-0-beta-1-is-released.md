Title: iRODS 4.0.0 Beta 1 is released
Date: 2014-01-21 13:08
Author: Terrell Russell
Slug: irods-4-0-0-beta-1-is-released
Status: published

RENCI is pleased to announce the first beta of the fourth major open
source release of iRODS, managed and overseen by the [iRODS
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

4.0.0b1 includes all community bugfixes through iRODS 3.3 as well as the
newest rule engine. This beta represents a full merger of the code
through [community iRODS r5575 (October 20,
2013)](https://github.com/irods/irods-legacy/commit/69f778e48e64f).

The release notes include:

> Development of this release has focused on the following features and
> efforts:
>
>  - Introduced pluggable interface for databases  
>      - PostgreSQL  
>   - Full python-based testing framework  
>   - Certified against full Jargon test suite  
>   - Continuous integration testing via hudson  
>   - Continuous static analysis via cppcheck  
>   - Optimized builds with "-O3" and "-Werror"  
>   - Increased code coverage from \~55% to over 56%  
>   - Topology testing  
>   - Continuously built and tested across 3 major linux distributions  
>   - Packaged for 3 major linux distributions  
>   - Support for package upgrade via package manager

This release includes packages that have been tested on CentOS 5 and 6,
SuSE 11 and 12, and Ubuntu 10 and 12.

iRODS Manual (4.0.0b1), Jan 2014 [(PDF,
396KB)]({filename}/uploads/2014/01/irods-manual-4.0.0b1.pdf)

Please find the latest files available
at <ftp://ftp.renci.org/pub/irods/releases/4.0.0b1/>.

At this time, upgrading from either community 3.x or E-iRODS 3.0.1 will
require a manual set of steps by the grid/system administrator. Refining
this process is a central part of getting to our final release of 4.0.0
in March. If you have a production system and would like to be a part of
the testing before 4.0.0 is released, please contact us through the
email below.

Please send feedback to <info@irods.org>.
