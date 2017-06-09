Title: Initial iRODS Python Rule Engine Plugin is released
Date: 2017-06-09 14:20
Author: Terrell Russell
Slug: initial-irods-python-rule-engine-plugin-is-released
Status: published

Today has been a long time coming.

We are happy to announce the release of the first version of the [iRODS Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python).

This is the first rule engine plugin to provide support for writing iRODS rules in a language different than the originally included iRODS domain specific language (DSL) known as the iRODS Rule Language.

The Python Rule Engine Plugin allows an organization to encode its organizational data management policy in a language already familiar to its system administrators.  This capability increases confidence in the developed rules and opens the door for many more developers interacting with iRODS at a level of sophistication above merely tracking storage and providing access to their files.  In addition, since more than one rule engine plugin can be loaded and active at the same time, an organization can explore deeper integrations with their infrastructure without deciding to make a hard switchover to entirely new technology.  Introducing well-rehearsed and hardened policies one at a time when they are ready helps minimize risk in production.

[The Rule Engine Plugin Framework](https://docs.irods.org/4.2.1/plugins/pluggable_rule_engine/) was introduced in iRODS 4.2.0 but in finalizing the abstraction layers around data structures and return values in and out of the plugins, some changes were needed to the core.  Because of these changes, [upgrading to iRODS 4.2.1]({filename}/posts/irods-4-2-1-is-released.md) is required for running the Python Rule Engine Plugin.

Binary packages are currently available for Ubuntu12, Ubuntu14, and CentOS7 [in our APT and YUM repositories](https://packages.irods.org).

Please try it out!  We're very excited for this new chapter of external development and experimentation in policy-based data management.

[See you in Utrecht next week!]({filename}/pages/ugm2017.html)
