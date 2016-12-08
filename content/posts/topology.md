Title: iRODS Demos: Data Grid Topology
Date: 2014-06-26 15:50
Author: Dan Bedard
Slug: topology
Status: published

One of my responsibilities at RENCI is to set up and present iRODS demos
for customers. Over the coming weeks, I will describe my experiences
setting up these demonstrations.

The first thing to understand is how data grids are structured in iRODS.
I made this simple little diagram to help:

<div class="full_image"><img src="{filename}/uploads/2014/06/iRODS-Grid-Topology1.png" /></div>

<!--more-->

**An iRODS Zone**- Each iRODS deployment is an individual *Zone* with a
single set of management policies and a single metadata catalog.
Usually, an iRODS Zone will be spread over multiple machines (iCAT
servers and resource servers).

**iCAT Server** - The essential element of any iRODS Zone is an iCAT
Server. The iCAT is a database (presently Postgres, MySQL, or Oracle)
that holds metadata about the data stored in iRODS.

**Resource Servers **- Resource servers host data collections. Each
resource server in a Zone connects to a single iCAT server. The iCAT
server provides the resource server with the information necessary for
policy enforcement.

**Federation **- Federation is the connection between two iRODS Zones.
Users from one Zone can access data from another, with restrictions
determined by the administrator of the host Zone. Federation is brokered
between ICAT servers.

In my next post, I'll describe how to set up an iCAT-enabled resource
server, which combines the functionality of an iCAT server and a
resource server on the same machine.


