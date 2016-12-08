Title: Monitoring iRODS Resources with Nagios
Date: 2016-09-21 12:00
Author: Justin James
Slug: monitoring-irods-resources-with-nagios
Status: published

This post will present one way to monitor iRODS with
[Nagios](https://www.nagios.org/).

We will start with a Nagios service which will monitor the status of
iRODS resource servers and if a resource server is non-responsive, mark
all the iRODS resources on that server down. Finally we will create a
Nagios service to monitor the percentage of a resource's capacity being
used and generate Nagios warning and critical statuses for resources
that have exceeded certain thresholds.

Basic Setup
-----------

As a demonstration, we will set up an iRODS grid with one iCAT enabled
server (catalog producer) and two iRODS resource servers (catalog
consumers). Each server will host exactly one resource.

-   ICAT.example.org - 192.168.1.150
-   Resource1.example.org - 192.168.1.151
-   Resource2.example.org - 192.168.1.152

After setting up the servers, make sure each server can access the
others by fully qualified domain name (FQDN). Install iRODS on each
server. In this demonstration we installed iRODS 4.2 (preview).

We will use the default resources created on Resource1.example.org and
Resource2.example.org.

-   Resource1Resource
-   Resource2Resource

The instructions that follow are based on Ubuntu (14). Minor changes
would be needed if installed on another Linux distribution.

Building the iping Command
--------------------------

We have created a simple application which will ping the iRODS services
on each server. This application performs an rcConnect() to an iRODS
server given the IP or hostname and port.

To build the iping binary we need to first build the iRODS externals as
described in [Building iRODS Externals](https://core-dev.irods.org/).

After the externals are built, we need to clone the iRODS contrib
package from GitHub, build and then install the iping package.

Perform the following steps on ICAT.example.org:

~~~~ 
export PATH=/opt/irods-externals/cmake3.5.2-0/bin:$PATH 
cd ~
git clone https://github.com/irods/contrib
mkdir ipingbuild
cd ipingbuild
cmake ~/contrib/iping
make package
sudo dpkg -i irods-iping_4.2.0~trusty_amd64.deb
~~~~

Now let's test the iping command:

~~~~ 
$ iping -h Resource1.example.org
OK : connection to iRODS server successful
$ iping -h Resource2.example.org
OK : connection to iRODS server successful
$ echo $?
0
~~~~

As another test, bring down one of the resource servers by either
shutting down the machine or stopping the iRODS service (or possibly
specifying a port other than the default of 1247).

~~~~ 
$ iping -h Resource1.example.org -p 1247
ERROR: _rcConnect: connectToRhost error, server on Resource1.example.org:1247 is probably down status = -305111 USER_SOCK_CONNECT_ERR, Connection refused
$ echo $?
2
~~~~

The iping command will return a return code of 2 on failure. This will
be used by Nagios to determine success (0) or failure (2).

Installing Nagios on the iCAT server
------------------------------------

For simplicity, we will install Nagios on the iCAT server since we
already have the iping command installed there.

~~~~ 
sudo apt install nagios3 nagios-nrpe-plugin
~~~~

Go to the local Nagios web tool to make sure everything is up. This
would be http://localhost/nagios3/ if running from a browser on the iCAT
server. Use "nagiosadmin" and the password you specified during
Nagios installation.

Configuring Nagios
------------------

We need to create a directory for iRODS configuration and update the
nagios.cfg to look for configuration files in this new directory.

~~~~ 
mkdir -p /etc/nagios3/irods
echo "cfg_dir=/etc/nagios3/irods" >> /etc/nagios3/nagios.cfg
~~~~

Now create `/etc/nagios3/irods/irods.cfg` which will be a configuration
file for the iping service. Put the following contents in this file:

~~~~ 
define host {
    name             irods-server-template
    use              generic-host 
    check_interval   1
    register         0
}

define host {
    use              irods-server-template
    host_name        Resource1
    alias            Resource1Resource 
    address          Resource1.example.org 
}

define host {
    use              irods-server-template
    host_name        Resource2
    alias            Resource2Resource
    address          Resource2.example.org
}

define hostgroup{
    hostgroup_name   irods-resource-servers 
    alias            iRODS Servers
    members          Resource1,Resource2
}

define command{
    command_name     iping-irods-server
    command_line     /usr/lib/nagios/plugins/iping.sh -h $HOSTADDRESS$ -p $ARG1$ 
}

define command {
    command_name     update-irods-resource-state 
    command_line     /usr/lib/nagios/plugins/update_irods_resc_state.sh $HOSTADDRESS$ $SERVICESTATE$ $SERVICESTATETYPE$ $SERVICEATTEMPT$
}

define service {
    use                     generic-service
    hostgroups              irods-resource-servers 
    service_description     IPING 
    check_command           iping-irods-server!1247
    check_interval          1
    event_handler           update-irods-resource-state
}
~~~~

### Configuration Explanation

We have created a template called irods-server-template for our iRODS
servers. Nagios allows configurations to be inherited from other
configurations. Our servers will inherit from this template. This
template itself inherits from the generic-host template. Nagios
identifies this as a template by the "register 0" parameter. The key
configuration in this template is the check\_interval which is set to
one (1) minute.

We have defined two hosts which are derived from the
irods-server-template. The address parameter is set to the hostname for
a resource server.

The hostgroup is simply a grouping of hosts. In our case we have a
single hostgroup for the two resource servers.

Next we defined two commands:

-   iping-irods-server - This executes a wrapper shell script which will
    execute the iping binary. The \$ARG1\$ is the port number which is
    defined in the service definition.
-   update-irods-resource-state - This executes a shell script which
    will update the resource state.

The last configuration item is the service definition itself.

The service runs the iping-irods-server command with \$ARG1\$ of 1247
for the iRODS port (see "!1247" in the configuration). A failure is
indicated by a return code of 2. On a change in state, the
event\_handler is executed. In this case it executes the command
update-irods-resource-state which executes the
\`update\_irods\_resc\_state.sh\` script. This script will update the
resource state in the iRODS catalog to either "up" or "down". Finally,
this service runs against all hosts that are defined in the
irods-servers hostgroup.

Create scripts to perform the iping and update the resource states
------------------------------------------------------------------

Now we will create a bash script that is a wrapper around iping. This
script will be placed in `/usr/lib/nagios/plugins/iping.sh`.

~~~~ 
#!/bin/bash

export HOME=/var/lib/nagios

return=0
/usr/bin/iping "$@" 2>&1 || return=$?

if [ $return -gt 3 ]; then
   exit 2
else
   exit $return
fi
~~~~

Make sure that this script can be executed.

~~~~ 
chmod +x /usr/lib/nagios/plugins/iping.sh
~~~~

When the iping service notices a resource state has changed, it will
update the resource's status in the iRODS database. Create the following
script in `/usr/lib/nagios/plugins/update_irods_resc_state.sh`:

~~~~ 
#/bin/bash

export HOME=/var/lib/nagios

LOGFILE=/tmp/update_resc.log

echo update_irods_resc_state.sh "$@" >> $LOGFILE

HOST=$1
SERVICE_STATE=$2
SERVICE_STATE_TYPE=$3
SERVICE_ATTEMPT=$4

RESOURCES=$(iquest "%s" "select RESC_NAME where RESC_LOC = '$HOST'")

echo RESOURCES = $RESOURCES >> $LOGFILE
echo SERVICES_STATE = $SERVICE_STATE >> $LOGFILE


case "$SERVICE_STATE" in
OK)
    for RESOURCE in $RESOURCES; do
        iadmin modresc $RESOURCE status up
    done
    ;;
WARNING)
    ;;
UNKNOWN)
    ;;
CRITICAL)
    for RESOURCE in $RESOURCES; do
        iadmin modresc $RESOURCE status down
    done
    ;;

esac
exit 0
~~~~

Restart Nagios and Test
-----------------------

Restart Nagios

~~~~ 
sudo service nagios3 restart
~~~~

Now bring down a resource server. Wait for approximately a minute and
check the resource status.

~~~~ 
$ iadmin lr Resource1Resource | grep resc_status
resc_status: down
~~~~

Bring up the resource server. Wait another minute and check the resource
status.

~~~~ 
$ iadmin lr Resource1Resource | grep resc_status
resc_status: up
~~~~

Using Resource Status Updates in a Replication Scenario
-------------------------------------------------------

Now we will create a resource hierarchy with the two resources as
children of a replication resource. When a resource is unavailable and a
resource is marked down the replica will serve up the appropriate file
as necessary.

Let's create the resource hierarchy:

~~~~ 
$ iadmin mkresc RootResource replication
Creating resource:
Name:       "RootResource"
Type:       "replication"
Host:       ""
Path:       ""
Context:    ""
$ iadmin addchildtoresc RootResource Resource1Resource
$ iadmin addchildtoresc RootResource Resource2Resource
$ ilsresc
demoResc
RootResource:replication
├── Resource1Resource
└── Resource2Resource
~~~~

With both resources up let's put a file into iRODS.

~~~~ 
$ echo test > test.txt
$ iput -R RootResource test.txt
$ ils -l test.txt
  rods              0 RootResource;Resource1Resource            5 2016-09-09.10:24 & test.txt
  rods              1 RootResource;Resource2Resource            5 2016-09-09.10:24 & test.txt
~~~~

Bring Resource1Resource down and quickly try to get test.txt. Since
Resource1Resource is the lowest replica number, iRODS will attempt to
read test.txt from this resource. If Resource1Resource is still marked
as up this will fail.

~~~~ 
$ iget test.txt -
ERROR: getUtil: get error for - status = -305111 USER_SOCK_CONNECT_ERR, Connection refused
~~~~

Now let's wait a minute or so and try to get test.txt one more time. By
this time Resource1Resource will have been marked as down and the system
will retrieve the file from Resource2Resource as we would prefer.

~~~~ 
$ iget test.txt -
test
~~~~

Monitoring Resource Use (bytes)
-------------------------------

As another example of using Nagios to monitor resources, we will create
a Nagios plugin to monitor the resource use (bytes) so that we can get a
warning or error when the resource nears the max\_bytes.

The first step is to add a max\_bytes setting to our resources' context
string. Just for demonstration purposes we will set the max\_bytes to
500 bytes.

~~~~ 
iadmin modresc context Resource1Resource "max_bytes=500"
iadmin modresc context Resource2Resource "max_bytes=500"
~~~~

We will not enforce this max\_bytes setting in our example as we are
concerned with the monitoring aspects. Refer to the information in
[Composable
Resources](http://slides.com/irods/ugm2016-composable-resources#/) for
information on how to get started with enforcing the max\_bytes setting.

Next we need to update our configuration to create a service to monitor
the bytes. Update `/etc/nagios3/irods/irods.cfg` and append the
following to the bottom of this file:

~~~~ 
define command {
        command_name  check-resource-use
        command_line /usr/lib/nagios/plugins/check_resource_use.sh $HOSTALIAS$ $ARG1$ $ARG2$
}

define service {
        use                     generic-service
        hostgroups              irods-resource-servers
        service_description     check-resource-use
        check_command           check-resource-use!90.0!95.0
        check_interval          1
}
~~~~

We have added a new command called check-resource-use. This command will
execute the `check_resource_use.sh` script (not yet defined) and send
the host alias as the first argument. We have already set the host alias
to the resource name for the resource on that host. The next two
arguments are warning and critical thresholds as percentages of the
max\_bytes setting.

We then defined a service that will execute this command. The service
runs against all servers in the irods-resource-server group, executes
the check-resource-use command. We have hardcoded the warning level to
90.0% and critical level to 95.0%

> Notes:
>
> In this example we have a single resource for each server. If you had
> multiple resources you could create a separate host for each resource
> with an alias that matches the resource name, create a hostgroup for
> all of the resources, and add this new hostgroup to the
> check-resource-use service.
>
> We have set the check\_interval to 1 (minute) for the
> check-resource-use service. In a real world scenario it may be more
> appropriate to do this once an hour (60) or maybe even once a day
> (1440).

Now we just need to create the `check_resource_use.sh` script. This
script is provided below.

~~~~ 
#!/bin/bash

export HOME=/var/lib/nagios
 
STATE_OK=0
STATE_WARNING=1
STATE_CRITICAL=2
STATE_UNKNOWN=3

if [ $# -lt 3 ]; then
    echo "Use: check_resource_use.sh   "
    exit $STATE_UNKNOWN
fi 

max_bytes=0
percent_used=0

warning_level=$2
critical_level=$3

if ! [[ $warning_level =~ ^[0-9]+([.][0-9]+)?$ ]]; then
    echo "Warning level provided is not a valid number."
    exit $STATE_UNKNOWN
fi

if ! [[ $critical_level =~ ^[0-9]+([.][0-9]+)?$ ]]; then
    echo "Critical level provided is not a valid number."
    exit $STATE_UNKNOWN
fi
 
context=$(iquest "%s" "select RESC_CONTEXT where RESC_NAME = '$1'") 

for i in $(echo $context | tr ";" "\n"); do
    [[ $i =~ "max_bytes=" ]] && max_bytes=$(echo $i | cut -b11-)
done 

used=$(iquest "%s" "select sum(DATA_SIZE) where RESC_NAME = '$1'")
if [ -z $used ]; then
    used=0
fi

if [[ $max_bytes -gt 0 && $used -gt 0 ]]; then
    percent_used=$(echo "scale=2; ($used / $max_bytes) * 100.0" | bc)
fi

if [ $(echo "$percent_used > $critical_level" | bc -l) -eq "1" ]; then
    echo "CRITICAL - Resource use is above critical level.  byte_used=$used; max_bytes=$max_bytes; critical_threshold=${critical_level}%"
    exit $STATE_CRITICAL
fi

if [ $(echo "$percent_used > $warning_level" | bc -l) -eq "1" ]; then
    echo "WARNING - Resource usage is above warning level.  byte_used=$used; max_bytes=$max_bytes; warning_threshold=${warning_level}%"
    exit $STATE_WARNING
fi

echo "OK - Resource use is below warning and critical levels.  bytes_used=$used; max_bytes=$max_bytes"
exit $STATE_OK
~~~~

Testing Resource Use
--------------------

Restart Nagios so that it can read the new configuration.

~~~~ 
sudo service nagios3 restart
~~~~

Refresh the Nagios monitoring tool services page. You should now see
check-resource-use services for both Resource1 and Resource2. If your
resources are empty the status should be green (OK).

Now play around with adding files to the resources so that your use is
between the warning and critical levels and then above the critical
level. Nagios will update the service status appropriately.

Monitoring Connection Count
---------------------------

As one final example we will monitor the connection count on all iRODS
servers.

We will be using the irods-grid command to get the connection count.
Before this command can be executed, we need to add a few lines into the
nagios's `irods_environment.json`. Update
`~nagios/.irods/irods_environment.json` and add the following lines.
Adjust the values for these to match what you have in your server
configuration.

~~~~ 
    "irods_server_control_plane_encryption_algorithm": "AES-256-CBC",
    "irods_server_control_plane_encryption_num_hash_rounds": 16,
    "irods_server_control_plane_key": "12345678901234567890123456789012",
    "irods_server_control_plane_port": 1248
~~~~

Next we need to update our configuration to add a host for the ICAT
server, a hostgroup for the ICAT and two resource servers, a command to
execute and a service to execute this command. Update
`/etc/nagios3/irods/irods.cfg` and append the following to the bottom of
this file:

~~~~ 
define host {
        use             irods-server-template
        host_name       ICAT
        address         ICAT.example.org
}

define hostgroup {
        hostgroup_name          irods-servers
        alias                   iRODS Servers
        members                 ICAT,Resource1,Resource2
}

define command {
        command_name  check-active-connections
        command_line /usr/lib/nagios/plugins/check_agent_count.sh $HOSTADDRESS$
}

define service {
        use                     generic-service
        hostgroups              irods-servers
        service_description     check active connections
        check_command           check-active-connections
        check_interval          1
}
~~~~

We now need to create the `check_agent_count.sh` script. Create
`/usr/lib/nagios/plugins/check_agent_count.sh` with the following
contents and make this file executable.

~~~~ 
#!/bin/bash

export HOME=/var/lib/nagios

STATE_OK=0
STATE_UNKNOWN=3

if [ $# -lt 1 ]; then
    echo "Use: check_agent_count.sh "
    exit $STATE_UNKNOWN
fi

host_name=$1

agent_count=$(irods-grid --all status | jq ' .hosts[] |  .hostname + " " + "\(.agents[].agent_pid)"' | grep $host_name | wc -l)

echo "OK - open connections = $agent_count"
~~~~

This script takes the hostname as the first argument and performs an
irods-grid status command. We use jq to parse the JSON output and write
a single line of output for each server/pid combination. Then we get the
number of connections for this host by searching for only lines that
contain this hostname and counting the number of lines returned.

> Note: If you don't have jq, you can download it on Ubuntu with "sudo
> apt-get install jq".

Since the output is just informational, we will always return 0 (OK) as
long as the call was formatted correctly.

Restart Nagios and try it out. Refresh the Nagios monitoring tool
services page. By default all three servers should have a count of 1.
Try running multiple iRODS commands in parallel (possibly large puts
that take a long time) and wait for an update. As long as the processes
are still running when the check is performed you should have a count
greater than 1.

Accessing Code
--------------

The final version of all of the files can be accessed here:

<https://github.com/irods/contrib/tree/master/nagios_monitoring>
