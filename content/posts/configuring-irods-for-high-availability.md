Title: Configuring iRODS for High Availability
Date: 2015-07-07 15:14
Author: Justin James
Slug: configuring-irods-for-high-availability
Status: published

Recently, a customer asked us how to set up iRODS in a high
availability/high throughput configuration. Every iRODS Zone requires
exactly one iCAT server, so the Zone becomes inaccessible if the iCAT
goes down. In this post, I explain how to set up multiple redundant iCAT
servers, fronted by a software local balancer. By combining this
technique with database replication (not described in this post), it is
possible to create a fault-tolerant iRODS Zone that can scale to high
loads.

This post is based on [High Availability iRODS System
(HAIRS)]({filename}/uploads/2015/07/irods_HA_London.pdf)
by Yutaka Kawai at KEK and Adil Hasan at the University of Liverpool. I
use HAProxy for this demonstration, which was not applicable at the time
of the original HAIRS presentation.

To achieve full redundancy, the following key iRODS components should be
replicated:

1.  **ICAT Database:** Implementing replication for RDBMS systems is
    outside of the scope of this blog post.
2.  **iCAT Enabled Resource Server (or "iCAT server"):** Multiple iCAT
    servers will reside behind a load balancer to provide iCAT
    redundancy.
3.  **iRODS Resource Servers:** The iRODS native replication resource
    hierarchy will provide resource redundancy.

Basic Setup
-----------

For this demonstration, I set up 7 virtual servers.

-   LoadBalancer.example.org - 192.168.1.150
-   ICAT1.example.org - 192.168.1.151
-   ICAT2.example.org - 192.168.1.152
-   DB1.example.org - 192.168.1.153
-   Resource1.example.org - 192.168.1.155
-   Resource2.example.org - 192.168.1.156
-   CLI1.example.org - 192.168.1.154

<div class="full_image"><img src="{filename}/uploads/2015/07/high_a.jpg" /></div>

To give each server the IP addresses and hostnames listed above,
configure /etc/hosts as follows:

#### LoadBalancer.example.org

~~~~
127.0.0.1        LoadBalancer.example.org localhost
192.168.1.151    ICAT1.example.org
192.168.1.152    ICAT2.example.org
~~~~

#### ICAT1.example.org

~~~~
127.0.0.1        ICAT1.example.org localhost
192.168.1.150    LoadBalancer.example.org
192.168.1.153    DB1.example.org
192.168.1.155    Resource1.example.org
192.168.1.156    Resource2.example.org
~~~~

#### ICAT2.example.org

~~~~
127.0.0.1        ICAT2.example.org localhost
192.168.1.150    LoadBalancer.example.org
192.168.1.153    DB1.example.org
192.168.1.155    Resource1.example.org
192.168.1.156    Resource2.example.org
~~~~

#### Resource1.example.org

~~~~
127.0.0.1        Resource1.example.org localhost
192.168.1.156    Resource2.example.org
192.168.1.150    LoadBalancer.example.org
~~~~

####  Resource2.example.org

~~~~
127.0.0.1        Resource2.example.org localhost
192.168.1.155    Resource1.example.org
192.168.1.150    LoadBalancer.example.org
~~~~

####  CLI1.example.org

~~~~
127.0.0.1        CLI1.example.org localhost
192.168.1.155    Resource1.example.org
192.168.1.156    Resource2.example.org
192.168.1.150    LoadBalancer.example.org
~~~~

####  DB1.example.org

~~~~
127.0.0.1        DB1.example.org localhost
192.168.1.151    ICAT1.example.org
192.168.1.152    ICAT2.example.org
~~~~

All components will access the iCAT servers via the load balancer. 
Since iRODS uses hostnames as identifiers for the various components,
this load balancer will be referred to as LoadBalancer.example.org.

Configuring the Load Balancer
-----------------------------

In our test setup we use HAProxy to perform software level HTTP and TCP
load balancing.  HAProxy can be downloaded on Ubuntu 14.04 systems using
the following commands:

~~~~
echo deb http://archive.ubuntu.com/ubuntu trusty-backports main universe |  sudo tee /etc/apt/sources.list.d/backports.list
sudo apt-get update
sudo apt-get install haproxy -t trusty-backports
~~~~

Configure the load balancer to use TCP routing.  Incoming requests on
port 1247 will be redirected in a round-robin fashion to one of the two
ICAT servers.

> Port 1247 is the default port for iRODS communications.  Ports 20000
> through 20199 are also used to transfer large files.  However, these
> are direct connections between the resource servers and the clients
> and do not go through the load balancer.

The following configuration file can be used to configure HAProxy:

~~~~
  global
        daemon
        maxconn 256

  defaults
        mode tcp
        timeout connect 5000ms
        timeout client 50000ms
        timeout server 50000ms

   frontend irods-in
                bind *:1247
                default_backend servers

   backend servers
        option tcp-check
        tcp-check connect
        tcp-check send PING\n
        tcp-check expect string `<MsgHeader_PI>\n<type>RODS_VERSION</type>`
        server ICAT1.example.org 192.168.1.151 check port 1247
        server ICAT2.example.org 192.168.1.152 check port 1247
~~~~

To determine if a particular iCAT server is up, any string can be sent
(in the above case we send "PING") to port 1247 and iRODS will respond
with text beginning with "\<MsgHeader\_PI\>".  This is used as a  health
check on the iRODS server.  This is sufficient to determine if an iCAT
instance is up or down. More robust health checks are possible but are
outside of the scope of this post.

Assuming the configuration listed above is in ./haproxy.cfg and HAProxy
is in the \$PATH, it can be started with the following command:

~~~~
haproxy -f haproxy.cfg
~~~~

Installing iRODS
----------------

Standard iRODS installation procedures can be performed to install iRODS
on the iCAT and resource servers as well as the CLI client.  See [iRODS
4.1.3
Installation](https://docs.irods.org/4.1.3/manual/installation/#installation).
 A DB client should be installed on the iCAT servers.  For PostgreSQL,
this can be performed with the following command:

~~~~
sudo apt-get install postgresql-client-9.4
~~~~

After installing and configuring PostgreSQL on DB1.example.org (see
[iRODS 4.1.3 Database
Setup](https://docs.irods.org/4.1.3/manual/installation/#icat-server)),
test the connection from each iCAT server to the DB with the following:

~~~~
psql -h 192.168.1.153 -U postgres
~~~~

Install iRODS on the iCAT servers.  During installation use
"192.168.1.153" or "DB1.example.org" when prompted for the database
server's hostname or IP address.

> Notes:  
>  The iCAT installation scripts set up the necessary tables in the iCAT
> database (by default, named "ICAT").  On the second installation the
> scripts will notice that the database tables have already been set up
> and will handle this condition gracefully.
>
> In a normal setup, the iCAT servers may play a dual role as a resource
> server.  However, this will cause problems in the multiple iCAT server
> configuration.  Therefore, data storage must be implemented only on
> separate resource servers.

Setting Up the Resource Servers and Data Replication
----------------------------------------------------

Install iRODS on the two resource servers as described in [iRODS 4.1.3
Resource Server
Installation](https://docs.irods.org/4.1.3/manual/installation/#resource-server). 
When prompted for the address of the iCAT server, enter
"LoadBalancer.example.org" which will resolve to the load balancer.

After the resource servers are set up, install the iRODS CLI client on
CLI1.  When prompted for the address of the iCAT server, enter
"LoadBalancer.example.org" which will again be resolved to the load
balancer.

After running "iinit" on the CLI server to setup up the client
configuration, perform the following steps to create redundant
resources.

~~~~
iadmin mkresc BaseResource replication
iadmin mkresc Resource1 'unixfilesystem' Resource1.example.org:/var/lib/irods/Vault
iadmin mkresc Resource2 'unixfilesystem' Resource2.example.org:/var/lib/irods/Vault
iadmin addchildtoresc BaseResource Resource1
iadmin addchildtoresc BaseResource Resource2
~~~~

The resource tree should appear as follows:

~~~~
$ ilsresc --tree
  BaseResource:replication
  |____Resource1
  |____Resource2
  demoResc
~~~~

On the CLI server, update \~/.irods/irods\_environment.json to use
"BaseResource" as the default resource.

~~~~
{
    "irods_default_resource": "BaseResource",
    "irods_host": "LoadBalancer.example.org",
    "irods_port": 1247,
    "irods_user_name": "rods",
    "irods_zone_name": "tempZone"
}
~~~~

 Testing the Setup
------------------

Perform the following steps to test this setup.

1.  From the CLI server, put (iput) a large file into iRODS.  Verify
    that the file has been stored on both resource servers.
2.  Get (iget) the file from iRODS.  Verify that the file retrieved from
    iRODS has the same contents as the one put into iRODS.
3.  Bring one resource server down and perform steps \#1 and \#2.
4.  Bring down one iCAT server and verify that iCommands can still be
    executed successfully.  (This may initially fail if the balancer has
    not yet performed a health check but should succeed after the first
    failure.)

