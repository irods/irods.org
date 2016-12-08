Title: Schemas, schemas everywhere
Date: 2014-09-23 13:59
Author: Terrell Russell
Slug: schemas-schemas-everywhere
Status: published

iRODS 4.x development is moving forward quickly.

One of the major things we'll be adding soon is better introspection...
iRODS needs much better capabilities with regard to reporting on what is
installed, what is configured, and its current status.

A bit of this functionality will be made possible by a standardization
of what an iRODS Zone is defined to be
[[http://schemas.irods.org/](http://schemas.irods.org)]. We have
developed [a first draft of a version 1
schema](http://schemas.irods.org/v1/) that defines an iRODS Zone, and
all its constituent parts.  
<!--more-->  
This schema serves two main purposes in the short term:

1.  We can use it internally to deploy and test topologically (meaning,
    multiple hosts). Our Continuous Integration server will be able to
    generate and dynamically deploy an iRODS zone\_bundle that can be
    put through the full test suite.
2.  We can use it externally by having Zones deployed by others issue a
    "Zone Report" in the form of a JSON file. This file can be sent to
    us for debugging, analysis, and/or redeployment for reproducibility.

**UPDATE 2014/12/04: This has been renamed to \`zone\_bundle\` - The
links below have been updated, but the displayed code remains the
original (and now outdated).**

The top level (\`zone\_bundle.json\`) that defines a set of iRODS Zones:

>     {
>         "id": "zone_bundle",
>         "$schema": "http://json-schema.org/draft-04/schema#",
>         "type": "object",
>         "description": "Schema for an iRODS zone bundle (possibly featuring Federation)",
>         "properties": {
>             "schema_version": {"type": "string"},
>             "zones": {
>                 "type": "array",
>                 "items": {
>                     "type": "object",
>                     "properties": {
>                         "icat_server": {
>                             "$ref": "icat_server"
>                         },
>                         "resource_servers": {
>                             "type": "array",
>                             "items": {
>                                 "$ref": "resource_server"
>                             }
>                         }
>                     },
>                     "required": ["icat_server", "resource_servers"]
>                 }
>             }
>         },
>         "required": ["schema_version", "zones"]
>     }

A Zone contains an iCAT Server and zero or more Resource Servers:

-   \`icat\_server.json\` - Defines a Resource Server with additional
    database connection information
-   \`resource\_server.json\` - Defines an iRODS Server, configuration,
    and plugins

An iCAT Server (\`icat\_server.json\`):

>     {
>         "id": "icat_server",
>         "$schema": "http://json-schema.org/draft-04/schema#",
>         "type": "object",
>         "allOf": [
>             {
>                 "$ref": "resource_server"
>             }
>         ],
>         "properties": {
>             "database_config": {
>                 "$ref": "database_config"
>             }
>         },
>         "required": ["database_config"]
>     }

A Resource Server (\`resource\_server.json\`):

>     {
>         "id": "resource_server",
>         "$schema": "http://json-schema.org/draft-04/schema#",
>         "type": "object",
>         "properties": {
>             "commit_id": {"type": "string", "pattern": "^[0-9a-f]{40}$"},
>             "os": {"type": "string"},
>             "resources": {
>                 "type": "array",
>                 "items": {
>                     "$ref": "resource"
>                 }
>             },
>             "configuration_directory": {
>                 "$ref": "configuration_directory"
>             },
>             "server_config": {
>                 "$ref": "server_config"
>             },
>             "hosts_config": {
>                 "$ref": "hosts_config"
>             },
>             "host_access_control_config": {
>                 "$ref": "host_access_control_config"
>             },
>             "service_account_environment": {
>                 "$ref": "service_account_environment"
>             },
>             "plugins": {
>                 "type": "array",
>                 "items": {
>                     "$ref": "plugin"
>                 }
>             }
>         },
>         "required": ["commit_id","os","resources","configuration_directory","server_config","hosts_config","host_access_control_config","service_account_environment","plugins"]
>     }

The database information (host, user, and password) will be stored in
\`database\_config.json\`:

>     {
>         "id": "database_config",
>         "$schema": "http://json-schema.org/draft-04/schema#",
>         "type": "object",
>         "properties": {
>             "catalog_database_type": {"enum": ["postgres","mysql","oracle"]},
>             "db_username": {"type": "string"},
>             "db_password": {"type": "string"}
>         },
>         "required": ["catalog_database_type","db_username","db_password"]
>     }

iRODS configuration files will (soon) themselves be JSON and will be
included directly in the zone\_bundle schema:

-   server\_config.json
-   host\_access\_control\_config.json
-   hosts\_config.json
-   service\_account\_environment.json

The rest of the files in the \`/etc/irods\` configuration directory will
be represented in \`configuration\_directory.json\`:

>     {
>         "id": "configuration_directory",
>         "$schema": "http://json-schema.org/draft-04/schema#",
>         "type": "object",
>         "properties": {
>             "path": {"type": "string"},
>             "files": {
>                 "type": "array",
>                 "items": {
>                     "type": "object",
>                     "properties": {
>                         "name": {"type": "string"},
>                         "contents": {
>                             "type": "string",
>                             "pattern": "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$"
>                         }
>                     },
>                     "required": ["name","contents"]
>                 }
>             }
>         },
>         "required": ["path","files"]
>     }

A plugin will be represented in \`plugin.json\`:

>     {
>         "id": "plugin",
>         "$schema": "http://json-schema.org/draft-04/schema#",
>         "type": "object",
>         "properties": {
>             "name": {"type": "string"},
>             "type": {"type": "string"},
>             "version": {"type": "string"},
>             "checksum_sha256": {"type": "string"}
>         },
>         "required": ["name","type","version","checksum_sha256"]
>     }

And every resource in the Zone will be listed as an instance of
\`resource.json\`:

>     {
>         "id": "resource",
>         "$schema": "http://json-schema.org/draft-04/schema#",
>         "type": "object",
>         "properties": {
>             "name": {"type": "string"},
>             "type": {"type": "string"},
>             "host": {"type": "string"},
>             "vault_path": {"type": "string"},
>             "context_string": {"type": "string"},
>             "parent_resource": {"type": "string"},
>             "free_space": {"type": "string"},
>             "status": {"type": "string", "enum": ["up","down"]},
>             "object_count": {"type": "integer"}
>         },
>         "required": ["name","type","host","vault_path","context_string","parent_resource","free_space","status"]
>     }

[A sample zone\_bundle file can be found in the draft v1 directory
listing](http://schemas.irods.org/v1/sample-zone_bundle.json).

We are using nodejs to validate zone\_bundle files against this schema.
This will allow us to make more assumptions in our code as we know that
a set of inputs are good before we start to process them (deploy a cloud
infrastructure, debug a tricky edge case, etc.).

We are actively developing this schema and welcome any input.
