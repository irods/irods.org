Title: iRODS 4.1.9 Networking Performance Whitepaper
Date: 2016-09-15 18:13
Author: Terrell Russell
Slug: irods-4-1-9-networking-performance-whitepaper
Status: published

We had heard rumors for a while that iRODS was not handling data
transfers over high-bandwidth, high-latency connections very well. But
until recently, nobody had taken the time to generate any experimental
data to show what was happening.

With work done at CyVerse at the University of Arizona, Texas Advanced
Computing Center (TACC), and the University of Wisconsin, the picture
became clearer.

At RENCI, we have now demonstrated the first definitive benchmarking of
iRODS over high-bandwidth, high-latency connections.

And 4.1.9 is up to 100x faster than 4.1.8!

[Download PDF
(330k)]({static}/uploads/2016/09/russell2016-iRODS-networking-419.pdf)

> Summary
>
> iRODS 4.1.9 presents a significant improvement over 4.1.8 (and all
> prior versions). With proper tuning of the Linux TCP kernel settings,
> iRODS 4.1.9, released July 28, 2016, represents up to a 100x speedup
> over iRODS 4.1.8 at high latency (100ms RTT). This whitepaper
> demonstrates the recent gains in configurability and throughput as
> well as defines best practice for administrators and organizations
> using iRODS.

The python test harness and the paper itself can be found on GitHub:  

<https://github.com/irods/contrib/tree/master/4.1.9-networking-whitepaper>
