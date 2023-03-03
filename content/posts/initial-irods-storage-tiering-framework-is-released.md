Title: Initial iRODS Storage Tiering Framework is released
Date: 2018-02-26 10:30
Author: Terrell Russell
Slug: initial-irods-storage-tiering-framework-is-released
Status: published

We are very excited to announce the release of the first version of the [iRODS Storage Tiering Framework](https://github.com/irods/irods_capability_tiered_storage).

This packaged storage tiering framework provides iRODS the capability of automatically moving data between identified tiers of storage within a configured tiering group.

To define a storage tiering group, selected storage resources can be labeled with metadata to define both their place in the group and how long data should reside in that tier before being migrated to the next tier.

No rules necessary!  Just metadata on resources!

<div class="full_image"><img src="{static}/images/storage_tiering_diagram.jpg" /></div>

## Data Tributary Pattern

The design of this framework was informed from nearly a dozen large-scale deployments of iRODS from around the world, touching multiple types of storage and deployed in multiple different configurations.  The most powerful pattern we have noticed is what we are currently calling the 'Data Tributary Pattern'.

    Data Tributary Pattern - Independent data flows moving into a central archive

At the edge of an iRODS deployment, there is usually a use case for ingestion of new incoming data, potentially from a large number of concurrent sources (instruments, satellites, sensors, etc.).  These sources may naturally be classified by being of different types (different labs, different classes of sensor, from different continents) which should be handled slightly differently on their way into a centralized archive or namespace.

The storage tiering capability allows for this pattern very nicely.

<div class="full_image"><img src="{static}/images/storage_tiering_tributary_pattern.png" /></div>

Each lab would be named as a separate `irods::storage_tier_group` and employ a number of tiers on the way into the downstream terminal tier.


## Packages

By shipping a C++ rule engine plugin, we have removed the need for iRODS administrators to write their own custom rules for moving data around their zones to maximize utilization of their purchased storage technologies.  Defining the tiers and setting migration policy with metadata results in a very flexible, supportable, documented means to future-proof existing infrastructure and support storage purchasing decisions.

This package is currently compatible with iRODS 4.2.2 and will be updated to support future releases.

Binary packages are currently available for Ubuntu14, Ubuntu16, and CentOS7 [in our APT and YUM repositories](https://packages.irods.org).

Please share your feedback.  The flexibility of this approach should allow many different use cases to be solved very elegantly - and we would like to know about yours!
