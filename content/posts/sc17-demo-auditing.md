Title: SC17 Demo: Auditing
Date: 2017-12-06 18:00
Author: Terrell Russell
Slug: sc17-demo-auditing
Status: published

At the [iRODS Workshop at Supercomputing 2017]({filename}/pages/sc17.html) a couple weeks ago in Denver, we demonstrated three new capabilities:

- Ingest
- Tiering
- Audit

The [ingest demo was covered in Monday's post]({filename}/posts/sc17-demo-python-ingest-tool.md). The [storage tiering demo was covered in yesterday's post](). This post will be about demonstrating [the recently released Audit (AMQP) Rule Engine Plugin]({filename}/posts/initial-irods-audit-amqp-rule-engine-plugin-is-released.md).

### Goals and Process

The design goal for this demo was to tell a story about a particular data object within iRODS as it moved through a standard data object lifecycle.  This might include ingestion, annotation, sharing, etc.

For compliance and provenance use cases, this feature is very powerful and provides an unprecedented ability to make assertions about an entire infrastructure and its internal interactions.

### Demo

<script type="text/javascript" src="https://asciinema.org/a/150261.js" id="asciicast-150261" async></script>
[https://asciinema.org/a/150261](https://asciinema.org/a/150261)

When the demo begins, the full stack and message flow has already been configured and established.  iRODS is running, along with ApacheMQ, Logstash, and Elasticsearch.

We create and put a file (named `science.txt`), modify its metadata, show the metadata, then get the data object and remove it from iRODS.  During this sequence, we query the elasticsearch database to monitor the activity associated with the data object through its lifecycle.

The code powering the demo can be found here:
  [https://github.com/irods/irods_sc17/tree/master/audit](https://github.com/irods/irods_sc17/tree/master/audit)
