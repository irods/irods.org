Title: Database plugins v1.4 for iRODS 4.0.3 released
Date: 2015-01-20 14:21
Author: Terrell Russell
Slug: database-plugins-v1-4-for-irods-4-0-3-released
Status: published

The iRODS database plugins (currently PostgreSQL, MySQL, and Oracle)
have been released and marked as v1.4. This is a minor update that
addresses a few Oracle-specific bugs and one data-loss bug affecting
metadata after an administrator runs \`irmtrash\`. This data-loss bug is
silent in that it could affect a random data object by deleting all of
its metadata due to an uninitialized objectID on the stack. This bug was
found with Valgrind.  
<!--more-->

These plugins are compatible with iRODS 4.0.3 and offer the following
updates:

-   Oracle - [\$ORACLE\_HOME
    honored](https://github.com/irods/irods/issues/2342)
-   Oracle - [memory leak
    fix](https://github.com/irods/irods/issues/2349)
-   Oracle - [schema update script
    fix](https://github.com/irods/irods/issues/2355)
-   PostgreSQL, MySQL, Oracle - [irmtrash -M
    fix](https://github.com/irods/irods/issues/2461)

Tested packages for Ubuntu 10, 12 and CentOS 6 can be found at the
following location:

-   <ftp://ftp.renci.org/pub/irods/releases/4.0.3-with-v1.4-database-plugins/>

Please confirm the checksums for the package(s) you download before
installing.

As always, please contact <info@irods.org> if you have any questions.
