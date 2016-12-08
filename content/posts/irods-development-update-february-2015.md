Title: iRODS Development Update: February 2015
Date: 2015-02-26 19:42
Author: Jason Coposky
Slug: irods-development-update-february-2015
Status: published

In this post, I will talk about our decision to accelerate the release
of iRODS 4.1, and I will present part two of our three-part discussion
of the new JSON-based configuration model for iRODS.

<!--more-->

### Notes from the Technology Working Group

During the February 9th TWG, the development team proposed a change in
scope for the 4.1 release. We have pushed hundreds of bug fixes on our
journey toward fixing all of the issues identified by Coverity, as well
as other fixes identified by the community. To get these fixes out to
the community sooner rather than later, we have made the hard decision
to push some milestones to a later release.

The important things we are keeping for iRODS 4.1:

-   [Coverity Clean](https://scan.coverity.com/projects/2605) – this is
    huge and one reason to accelerate the release
-   The new JSON configuration schemas, described below and [last
    month](http://irods.org/post/irods-development-update-january-2015/)
-   [2297](https://github.com/irods/irods/issues/2297),
    [2298](https://github.com/irods/irods/issues/2298) - The control
    plane for graceful pause and shutdown, and grid status
-   [2070](https://github.com/irods/irods/issues/2070) – key value
    pass-through from iCommands to resource plugins
-   [2064](https://github.com/irods/irods/issues/2064) – atomic put with
    metadata

We will push the following new architectural development to iRODS 4.2:

-   [2308](https://github.com/irods/irods/issues/2308) – create a server
    runtime library
-   [2307](https://github.com/irods/irods/issues/2307) – isolate the C
    API into the client library
-   [2290](https://github.com/irods/irods/issues/2290) – configurable
    parallel transfer
-   [2291](https://github.com/irods/irods/issues/2291) – shared memory
    for properties table

This way we can get the most stable version of iRODS out to the
community as quickly as possible, while maintaining focus on key
features requested by consortium members and the community.

### JSON Server Configuration File

[Last
month](http://irods.org/post/irods-development-update-january-2015) we
introduced the new JSON-based iRODS configuration files and discussed
the client-side *irods\_environment.json* file. Continuing
our discussion of the new JSON configuration files, I will review the
server configuration, which was our primary motivation for the move to
JSON.

Given a markup language with structure, scoping, and name spacing, we
have created a much richer system for describing iRODS, which has
allowed us to consolidate all of the myriad configuration options--once
spread out over several locations--into one single source of truth.
 [These configuration files are now managed in a single
repository](https://github.com/irods/irods_schema_configuration) with
subdirectories organized by version number, which allows the
configuration model to grow and change as the project develops.  For
iRODS 4.1, we will be releasing the server against v2 of the
configuration schema, which will be packaged with the server itself.

#### Basic Configuration

<span style="line-height: 1.5;">The *server\_config.json* file, found in
*/etc/irods* for packaged binary installations, contains a considerable
number of knobs and switches.  Starting with the basic configuration
parameters, we have the following top level entries:</span>

*icat\_host* - The fully qualified domain name of the iCAT Enabled
Server

*zone\_name -*<span style="line-height: 1.5;">The name of the Zone in
which the server participates</span>

*zone\_user - *The name of the rodsadmin user running this iRODS
instance

*zone\_port*<span style="line-height: 1.5;"> - The port used by the Zone
for communication  
</span>

*zone\_auth\_scheme - *<span style="line-height: 1.5;">The
authentication scheme used by the</span>*zone\_user:*<span
style="line-height: 1.5;">native, PAM, OSAuth, KRB, or GSI  
</span>

*zone\_id*<span style="line-height: 1.5;"> - The server ID used for
authentication and identification of server-to-server communication --
this can be a string of any length, excluding the use of hyphens, for
historical purposes</span>

*negotiation\_key -*<span style="line-height: 1.5;">a 32-byte encryption
key shared by the zone for use in the advanced negotiation handshake at
the beginning of an iRODS client connection  
</span>

*default\_dir\_mode* - The unix filesystem octal mode for a newly
created directory within a resource vault

*default\_file\_mode*<span style="line-height: 1.5;"> - The unix
filesystem octal mode for a newly created file within a resource
vault</span>

*default\_hash\_scheme* - The hash scheme used for file integrity
checking: MD5 or SHA256

*match\_hash\_policy* - Indicates to iRODS whether to use the hash
used by the client or the data at rest, or to force the use of the
default hash scheme: strict or compatible

*pam\_password\_length* - Maximum length of a PAM password

*pam\_no\_extend* - Set PAM password lifetime: 8 hours or 2 weeks,
either true or false

*pam\_password\_min\_time* - Minimum allowed PAM password lifetime

*pam\_password\_max\_time* - Maximum allowed PAM password lifetime

*xmsg\_port* - Port on which the XMessage Server operates, should it be
enabled

*kerberos\_name* - Kerberos Distinguished Name for KRB and GSI
authentication

*control\_plane\_port* - Port on which the control plane operates, with
a default of 1248

*control\_plane\_key* - Encryption key required for communicating with
the iRODS grid control plane

#### Rule Engine

Moving on to the new, structured portions of the JSON configuration, we
have been able to create a more robust syntax for referencing the
configuration files for the rule engine.  The following three sections
are used to configure the rule engine:

*re\_rule\_base\_set* - this is an array of file names comprising the
list of rule files used by the rule engine, for example: { "filename":
"core" } which references 'core.re'.  This array is ordered as the order
of the rule files affects which (multiply) matching rule would fire
first.

*re\_function\_name\_mapping\_set* - an array of file names comprising
the list of function name map used by the rule engine, for example: {
"filename": "core" } which references 'core.fnm'

*re\_data\_variable\_mapping\_set* - an array of file names comprising
the list of data to variable mappings used by the rule engine, for
example: { "filename": "core" } which references 'core.dvm'

#### Server Environment

We now have a section for setting environment variables for the server
environment, which allows for the consolidation of the configuration
environment:

*environment\_variables* - This section is an array of strings of the
form VARIABLE=VALUE such as "ORACLE\_HOME=/full/path"

#### Federation

And finally, we have a section which defines the environment in which
(multiple) federation operates:

*federation* - This section is an array of objects which define the
parameters necessary for federating with another grid:  
*        zone\_name* -  The name of the zone with which we are
federating  
*        zone\_id* - The server ID for the federated zone  
*        negotiation\_key* - A 32 byte encryption key used for
connections across a federation

### Database Configuration File

The database configuration has been broken out into its own file known
as *database\_config.json*, which is also found in */etc/irods* for
 packaged binary installations.  Currently it only contains three
parameters:

*catalog\_database\_type* - The flavor of database: postgres, mysql, or
oracle  
*db\_username* - The username which the iRODS agent uses to connect to
the database  
*db\_password* - The password which the iRODS agent uses to connect to
the database

### Next Time...

In our next update, we will review the final two configuration files
that have moved to JSON, *irods\_host.json* and
*host\_access\_control.json*, and perhaps touch on the new control plane
capabilities.
