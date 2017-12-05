Title: SC17 Demo: Storage Tiering
Date: 2017-12-05 15:00
Author: Terrell Russell
Slug: sc17-demo-storage-tiering
Status: published

At the [iRODS Workshop at Supercomputing 2017]({filename}/pages/sc17.html) a couple weeks ago in Denver, we demonstrated three new capabilities:

- Ingest
- Tiering
- Audit

The [ingest demo was covered in Monday's post]({filename}/posts/sc17-demo-python-ingest-tool.md). This post will be about the storage tiering demo.  We'll have one more post about the audit demo later this week.

### Goals and Process

In exploring this capability, we are primarily interested in providing an open source means to manage data across disparate storage technologies with minimal ongoing effort.  The design goals for this storage tiering demo include separation of the configuration from the implementation of any data movement.

The code running this demo can be found in the irods training repository:

  [https://github.com/irods/irods_training/master/advanced/storage_tiering/](https://github.com/irods/irods_training/master/advanced/storage_tiering/)

There is a default time-based policy in place that will move data from one tier to the next after a period of time.  This is implemented via a query that finds all data in violation of the policy parameters and schedules any matching replicas for a move (actually a replication and a trim).  When a data object is read, the replica is scheduled to move back to the first (presumably, fastest) tier.

The names of the tiers are configurable.  The grouping of tiers is configurable.  The time spent in a tier is configurable.  And most powerfully, the query itself that defines what replicas are in violation is configurable.

The query is run against the metadata stored in the iRODS Catalog, so any annotations that your organization decides are relevant can be part of the formula for when to tier data across the enterprise.


### Demo

<script type="text/javascript" src="https://asciinema.org/a/150254.js" id="asciicast-150254" async></script>

First, the code is downloaded and compiled, generating an installable package that delivers two microservice plugins, five iRODS Rule Language rulebases (four for configuration, and one with policy), and a rule for firing the tiering logic.  Next the resource hierarchies are created and defined as storage tiers via `imeta` by attaching well-defined metadata attributes and values to the storage resources.

A file is then placed into the hierarchy, and after a period of time, the data object is shown to have moved to the next tier.  This is repeated for the next tier.  Finally the data object is retrieved by the client and the data object is shown to have moved back to the original tier.

This demo is running using rules written in the iRODS Rule Language.  We have already begun work on an equivalent C++ iRODS Rule Engine Plugin that is configured via metadata only.  We expect to release that as a downloadable binary package in early 2018.
