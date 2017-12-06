Title: SC17 Demo: Python Ingest Tool
Date: 2017-12-04 12:04
Author: Terrell Russell
Slug: sc17-demo-python-ingest-tool
Status: published

At the [iRODS Workshop at Supercomputing 2017]({filename}/pages/sc17.html) a couple weeks ago in Denver, we demonstrated three new capabilities:

- Ingest
- Tiering
- Audit

This post will be about the efforts that went into the [Python Ingest Tool](https://github.com/irods-contrib/irods_tools_ingest) and then capturing the demo that was presented.  The other two demos will follow in subsequent posts.

### Goals and Process

The design goals for this ingest tool include the ability to both distribute and parallelize the process of getting new files into the iRODS catalog.  This means both through moving existing files into an iRODS Vault as well as registering files in place without any data movement.  The target for one of our current proofs-of-concept is to ingest over 40 billion files - so this needs to be a robust means of walking that many files, organizing their ingestion into the system, and providing progress information.  Of course, we also wanted to handle this level of activity as quickly as possible.

We looked at a variety of technologies, means of sharing connections, pooling existing resources, and measured their performance profiles.

Parallel Approach | Speedup
----------------- | ------------
Python multiprocessing | ~1x
gevent | ~1x
AsyncIO | n/a
Redis Queue | 2-3x

The base implementation of using the [multiprocessing module](https://docs.python.org/3.5/library/multiprocessing.html) worked fine for a single machine.  In order to coordinate with other instances of the ingest tool, we would have had to implement a lot of additional functionality which both sounded hard and fraught with race conditions.

We implemented a working example with [gevent](https://github.com/gevent/gevent) which allowed us to use our existing code base, but we didn't gain much in performance over using multiprocessing.

Then we tried [asyncio](https://docs.python.org/3/library/asyncio.html).  This looked promising, but required us to rewrite most of our existing functionality to use the asyncio library.  We did not implement the ingest tool with asyncio.

Then we turned to [Redis Queue](http://python-rq.org/).  We had originally avoided the overhead of Redis.  Surely we could find something simpler with fewer moving parts to get files into iRODS.  But then after the research, both the performance and the architecture of RQ seemed compelling.  It has the built-in features, the prioritization capabilities, and the dependency declaration we found necessary for the feature set we wanted the Python Ingest Tool to have.

After seeing the results above, we decided to formalize the dependency on Redis Queue.  RQ allows for multiple topologies, and provides a straightforward method for scaling an ingest operation horizontally to deal with a large rate of new incoming files as well as large existing corpus of data that needs to be loaded in a one-time event.

### Demo

<script type="text/javascript" src="https://asciinema.org/a/150435.js" id="asciicast-150435" async></script>
[https://asciinema.org/a/150435](https://asciinema.org/a/150435)

First, we ingest 3000 files using the existing iCommand `iput`, both with and without verifying checksums on the server.

Then we start with the Redis Queue.  The same 3000 files are added to the queue with the `irodsqueue` command.  Then 16 worker processes are launched in burst mode to pull jobs off the queue and ingest them into iRODS.

**Both with and without checksums, the RQ implementation is 2-3x faster than `iput`**.

We expect this tool to be useful both for initial onboarding of existing data into new iRODS deployments as well as using its filesystem scanning capability to watch an incoming directory (or set of directories) for new files to pull into iRODS.

Future work includes registering files in place (without copying them into the iRODS Vault) and distributing the scanner itself to be able to keep up with parallel filesystems.

