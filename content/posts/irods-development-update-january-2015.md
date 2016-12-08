Title: iRODS Development Update: January 2015
Date: 2015-01-26 18:32
Author: Jason Coposky
Slug: irods-development-update-january-2015
Status: published

This is the first installment of a series of blog posts detailing the
ongoing efforts of the iRODS Consortium development team.  We intend to
highlight new directions in the design and specifics in the
implementation as well as encourage further discussion within the iRODS
community. There is a comments section below if you have questions or
opinions about anything iRODS.

### iRODS Configuration Moving to a JSON Format

<!--more-->  
The first topic for the next several posts will discuss the move to the
use of JSON as the markup language for iRODS configuration.  We decided
to unify the syntax of all iRODS configuration files rather than
maintain several different parser implementations, each with their own
personality and quirks.

JSON was chosen for a number of reasons:

-   We can maintain an independently versioned history of schemas
-   The configuration files can be validated for correctness
-   There is consistent, reliable parsing
-   JSON is web friendly
-   JSON has wide language support
-   JSON will be easier to automatically upgrade with new additions

We currently have
the [v1](https://github.com/irods/irods_schema_configuration/tree/master/v1 "v1") release
of the iRODS schemas, which has been included for use within the
independently released Zone Report tool for iRODS 4.0.3.  iRODS 4.1 will
leverage a new v2 release for the 4.1 Zone Report, as well as all
configuration files used by iRODS. This includes the client environment
(*irods\_environment.json*), the server configuration
(*server\_config.json*), the *irods\_hosts.json* file, as well as the
*host\_access\_control.json* file.

Backward compatibility for the client environment and the server
configuration will be maintained in the upcoming 4.1 release.  On
startup, iRODS will first look for the JSON version of the configuration
file.  If the JSON configuration file is not available, the server will
attempt to load and translate the legacy version of the file into the
new in-memory data structure.  Support for legacy configuration will be
deprecated and eventually removed.

### Configuring the Client Environment

Focusing on the iRODS [client
environment](https://github.com/irods/irods_schema_configuration/blob/master/v1/service_account_environment.json "client environment"),
a few changes have been made.  While the client environment file still
resides in the path \$HOME/.irods it is now named
\$HOME/.irods/*irods\_environment.json* rather than
\$HOME/.irods/*.irodsEnv*.  For consistency in behavior, the PID files
which contain the current working directory from a given instance of the
use of *icd* are also named *irods\_environment.json.pid* and
*irods\_environment.json.cwd*.

For clarity, the naming convention for the entries within the client
environment have also changed to follow an all lower case,
underscore-separated format with no abbreviations.  For example
"irodsHost" is now referenced as "irods\_host", and "irodsAuthFileName"
is now "irods\_authentication\_file".  Additionally, any client
environment value provided as a shell environment variable will follow
the same convention, but using upper case letters. For example,
IRODS\_HOST or IRODS\_AUTHENTICATION\_FILE.

The following is a quick review of some of the default client
environment parameters:

*irods\_user\_name* - the username within iRODS for this account  
*irods\_host* - a fully qualified domain name for the given iRODS
server  
*irods\_port* - the port number for the given iRODS Zone  
*irods\_home* - the home directory within the iRODS Zone for a given
user  
*irods\_cwd* - the current working directory within iRODS  
*irods\_authentication\_scheme* - this user's iRODS authentication
method, currently: "pam", "krb", "gsi" or "native"  
*irods\_default\_resource* - the name of the resource used for iRODS
operations if one is not specified  
*irods\_zone* - the name of the iRODS Zone in question  
*irods\_authentication\_file* - fully qualified path to a file holding
the credentials of an authenticated iRODS user  
*irods\_log\_level* - desired verbosity of the iRODS logging  
*irods\_debug* - desired verbosity of the debug logging level

We have also added two other parameters for the advanced client-server
negotiation:

*irods\_client\_server\_negotiation* - set to
"request\_server\_negotiation" indicating advanced negotiation is
desired, for use in enabling SSL and other technologies  
*irods\_client\_server\_policy* - "CS\_NEG\_REFUSE" for no SSL,
"CS\_NEG\_REQ" to demand SSL, or "CS\_NEG\_DONT\_CARE" to allow the
server to decide

Since parallel transfer does not make use of SSL, we have added a full
set of encryption parameters for this method of transport:

*irods\_encryption\_key\_size* - key size for parallel transfer
encryption  
*irods\_encryption\_salt\_size* - salt size for parallel transfer
encryption  
*irods\_encryption\_num\_hash\_rounds* - number of hash rounds for
parallel transfer encryption  
*irods\_encryption\_algorithm* - EVP supplied encryption algorithm for
parallel transfer encryption

iRODS 4.x also supports configurable hashing for checksums:

*irods\_default\_hash\_scheme* - currently either MD5 or SHA256  
*irods\_match\_hash\_policy* - 'strict' to refuse defaulting to another
scheme or 'compatible' for supporting alternate schemes

iRODS 4.1 and beyond will also include the SSL configuration within the
client environment:

*irods\_ssl\_ca\_certificate\_path* - location of a directory containing
CA certificates in PEM format. The files each contain one CA
certificate. The files are looked up by the CA subject name hash value,
which must hence be available. If more than one CA certificate with the
same name hash value exist, the extension must be different (e.g.
9d66eef0.0, 9d66eef0.1 etc). The search is performed in the ordering of
the extension number, regardless of other properties of the
certificates. Use the 'c\_rehash' utility to create the necessary links.

*irods\_ssl\_ca\_certificate\_file* - location of a file of trusted CA
certificates in PEM format. Note that the certificates in this file are
used in conjunction with the system default trusted certificates.

*irods\_ssl\_verify\_server* - what level of server certificate based
authentication to perform. 'none' means not to perform any
authentication at all. 'cert' means to verify the certificate validity
(i.e. that it was signed by a trusted CA). 'hostname' means to validate
the certificate and to verify that the *irods\_host*'s FQDN matches
either the common name or one of the subjectAltNames of the certificate.
'hostname' is the default setting.

*irods\_ssl\_certificate\_chain\_file* - the file containing the
server's certificate chain. The certificates must be in PEM format and
must be sorted starting with the subject's certificate (actual client or
server certificate), followed by intermediate CA certificates if
applicable, and ending at the highest level (root) CA.

*irods\_ssl\_certificate\_key\_file* - private key corresponding to the
server's certificate in the certificate chain file.

*irods\_ssl\_dh\_params\_file* - the Diffie-Hellman parameter file
location

### Next Time...

The next development update will review the new iRODS
server\_config.json and database\_config.json files.  Please add
comments with any questions, feedback, or requests for topics to be
covered in later updates.
