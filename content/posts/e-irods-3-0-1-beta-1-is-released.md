Title: E-iRODS 3.0.1 Beta 1 is released
Date: 2013-10-31 10:53
Author: Terrell Russell
Slug: e-irods-3-0-1-beta-1-is-released
Status: published

RENCI is pleased to announce a beta of the second open source release of
E-iRODS, managed and overseen by the [iRODS
Consortium](http://irods-consortium.org/).

This release marks a significant step towards a full plugin architecture
while remaining API compatible with the community iRODS releases.  We
are committed to keeping Federation with community iRODS grids a first
class use case.

3.0.1b1 includes all community bugfixes through iRODS 3.3.

The release notes include:

> - API Compatibility with Community iRODS for purposes of Federation  
>  - Met all US Export Control requirements for distribution  
>  - Introduced pluggable interface for networks  
>      - TCP  
>      - SSL  
>  - Introduced pluggable interface for authentication  
>      - Native iRODS password  
>      - OSAuth  
>      - GSI  
>      - PAM  
>      - Kerberos  
>      - LDAP (via PAM)  
>  - Additional coordinating resource plugins  
>      - Compound  
>      - Replication  
>  - Migration support for composable resources  
>      - Rebalance mechanism  
>      - Adding/removing child resources with existing data  
>      - itrim from child resources of replication resources  
>  - Full python-based testing framework  
>  - Certified against full Jargon test suite  
>  - Continuous integration testing via hudson  
>  - Continuous static analysis via cppcheck  
>  - Increased code coverage from \~50% to over 56%  
>  - Continuously built and tested across 3 major linux distributions  
>  - Packaged for 3 major linux distributions

This release includes packages that have been tested on CentOS 5 and 6,
SuSE 11 and 12, and Ubuntu 10 and 12.

E-iRODS Manual (3.0.1b1), Oct 2013 [(PDF,
390KB)]({static}/uploads/2013/10/eirods-manual-3.0.1b1.pdf)

Please find the latest files available
at <ftp://ftp.renci.org/pub/eirods/releases/3.0.1b1/>.

Please send feedback to info@eirods.org.
