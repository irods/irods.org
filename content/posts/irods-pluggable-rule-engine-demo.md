Title: iRODS Pluggable Rule Engine Demo
Date: 2016-01-20 14:15
Author: Terrell Russell
Slug: irods-pluggable-rule-engine-demo
Status: published

I presented at [CurateGear 2016 in Chapel Hill,
NC](http://ils.unc.edu/digccurr/curategear2016.html) last week and
demonstrated some of the capabilities of the upcoming iRODS Pluggable
Rule Engine. It will be available at part of iRODS 4.2 in a couple
months.

The slides are available at
<http://slides.com/irods/curategear2016-pluggable-rule-engine>:

<iframe src="//slides.com/irods/curategear2016-pluggable-rule-engine/embed" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<!--more-->

### Three Rule Engine Plugins

I demonstrate rules written in the existing iRODS Rule Language,
Javascript, and Python.

Additionally, I install an auditing rule engine plugin written in C++ to
demonstrate the list of policy enforcement points that are hit during a
simple execution of an iRODS Agent (in this case, a basic \`iput\`).

  Rule Engine Plugin    LOC (w/ comments)
  --------------------- -------------------
  iRODS Rule Language   253
  Javascript            244
  Python                252
  Auditing (C++)        157

Each of the rule engine plugins are written in C++ and \~200 lines of
code (without comments and whitespace). Given an appropriate rule engine
plugin, iRODS rules can be written in any language (both interpreted and
compiled).

The rule engine plugin interface to iRODS is defined by four (soon,
probably five) operations:

-   start
-   stop
-   rule\_exists
-   exec\_rule
-   (probably also) prepend\_to\_rulebase

Each of the three rule engine plugins are running concurrently. Each of
the three demonstration rule bases will call rules written in the other
two languages.

### Policy Enforcement Points

A Policy Enforcement Point (or PEP) is a location in the iRODS Server
code where policy can be inserted by an organization. Policy takes the
form of a set of rules that are executed by the rule engine.

The following is a sorted list of some of the dynamic PEPs hit by a
simple \`iput\` by the auditing rule engine plugin:

~~~~ 
audit_pep_auth_agent_auth_response_post 
audit_pep_auth_agent_auth_response_pre 
audit_pep_auth_agent_start_post 
audit_pep_auth_agent_start_pre 
audit_pep_database_check_auth_post 
audit_pep_database_check_auth_pre 
audit_pep_database_gen_query_access_control_setup_post 
audit_pep_database_gen_query_access_control_setup_pre 
audit_pep_database_gen_query_post 
audit_pep_database_gen_query_pre 
audit_pep_database_get_rcs_post 
audit_pep_database_get_rcs_pre 
audit_pep_database_mod_data_obj_meta_post 
audit_pep_database_mod_data_obj_meta_pre 
audit_pep_database_reg_data_obj_post 
audit_pep_database_reg_data_obj_pre 
audit_pep_exec_microservice_post 
audit_pep_exec_microservice_pre 
audit_pep_exec_rule_post 
audit_pep_exec_rule_pre 
audit_pep_resource_resolve_hierarchy_post 
audit_pep_resource_resolve_hierarchy_pre 
audit_pep_resource_stat_post 
audit_pep_resource_stat_pre 
audit_pep_resource_write_post 
audit_pep_resource_write_pre 
~~~~

They represent a pre- and post- hook for every operation in the system.
Each is an opportunity to run custom code to enforce an organization's
data management policy.

Consider, for example, a rule to transfer ownership of data objects to
the project manager when a user is deleted; the trigger (or PEP) is the
deletion of the user.

Rules could be written to extract metadata or pre-process data whenever
a file is uploaded to a storage device. Or, upon access to particular
data objects, a rule can create a log of the event, send an email
notification to the project manager, or perform some other task you need
to occur as a result of the data's access.

I use \`acPostProcForPut()\` for this demo.

This is the location in the code that is hit after a file has been
uploaded into iRODS. This location in the code has a full picture of the
context in which it is executing. It knows the username, the filename,
the location on disk, etc.

### Three Rule Bases

Each rule engine plugin is demonstrated with an accompanying rule base
file written in the associated language. They are 'turned on' by listing
them in an ordered stanza in \`/etc/irods/server\_config.json\`:

~~~~
    "re_plugins": [
        {
            "instance_name": "irods_rule_engine_plugin_python-instance",
            "plugin_name": "irods_rule_engine_plugin_python"
        },
        {
            "instance_name": "re-v8-instance",
            "plugin_name": "re-v8"
        },
        {
            "instance_name": "re-irods-instance",
            "plugin_name": "re-irods"
        }
    ],
    "re_rulebase_set": [
        {
            "filename": "custom"
        },
        {
            "filename": "core"
        }
    ],
~~~~

The following three rule bases are installed into \`/etc/irods/\`:

#### iRODS Rule Language

~~~~ 
# existing iRODS Rule Language - custom.re

irodsFunc0() {
    writeLine("serverLog", "custom.re - BEGIN - irodsFunc0()");
    writeLine("serverLog", "custom.re -- Hi Curate Gear!");
    writeLine("serverLog", "custom.re - END   - irodsFunc0()");
}

irodsFunc1(*foo) {
    writeLine("serverLog", "custom.re - BEGIN - irodsFunc1(foo): [*foo]");
    pyFunc1("called from custom.re");
    writeLine("serverLog", "custom.re - END   - irodsFunc1(foo)");
}

add_metadata_to_objpath(*str, *objpath, *objtype) {
    msiString2KeyValPair(*str, *kvp);
    msiAssociateKeyValuePairsToObj(*kvp, *objpath, *objtype);
}

getSessionVar(*name, *output) {
    *output = eval("str($"++*name++")");
}
~~~~

#### Javascript

~~~~
/* Javascript - core.js */

function jsFunc0(callback) {
    callback.writeLine("serverLog", "JAVASCRIPT - BEGIN - jsFunc0(callback)");
    callback.writeLine("serverLog", "JAVASCRIPT -- Happy New Year!");
    callback.writeLine("serverLog", "JAVASCRIPT - END   - jsFunc0(callback)");
}

function jsFunc1(foo, callback) {
    callback.writeLine("serverLog", "JAVASCRIPT - BEGIN - jsFunc1(foo, callback)");
    callback.writeLine("serverLog", "  - with parameter foo[" + foo + "]");
    try {
        callback.doesnotexist("nope");
    } catch(e) {
        throw e + " -- ERROR HANDLING FTW!";
    }
    callback.writeLine("serverLog", "JAVASCRIPT - END   - jsFunc1(foo, callback)");
}

/**********************************
 * DEMO 1 - Just Print To rodsLog *
 **********************************/
function XXXacPostProcForPut(callback) {
    callback.writeLine("serverLog", "JAVASCRIPT - BEGIN - acPostProcForPut()");
    callback.irodsFunc0();
    callback.pyFunc0();
    callback.writeLine("serverLog", "JAVASCRIPT - END   - acPostProcForPut()");
}
~~~~

#### Python

~~~~
# Python - core.py

import datetime

def pyFunc0(rule_args, callback):
    callback.writeLine('serverLog', 'PYTHON - BEGIN - pyFunc0(callback)')
    callback.writeLine('serverLog', 'PYTHON -- ' + str(datetime.datetime.now()))
    callback.writeLine('serverLog', 'PYTHON - END   - pyFunc0(callback)')

def pyFunc1(rule_args, callback):
    callback.writeLine('serverLog', 'PYTHON - BEGIN - pyFunc1(rule_args, callback)')
    for arg in (rule_args):
        callback.writeLine('serverLog', 'PYTHON -- arg=[' + arg + ']')
    callback.writeLine('serverLog', 'PYTHON - END   - pyFunc1(rule_args, callback)')

##########################################
# DEMO 2 - Parameters and Error Handling #
##########################################
def XXXacPostProcForPut(rule_args, callback):
    callback.writeLine('serverLog', 'PYTHON - BEGIN - acPostProcForPut()')
    callback.irodsFunc1("called from python, apples")
    callback.jsFunc1("called from python, bananas")
    session_vars = ['userNameClient', 'dataSize',]
    for s in session_vars:
        v = callback.getSessionVar(s, 'dummy')[1]
        callback.writeLine('serverLog', s + ' :: ' + v)
    callback.writeLine('serverLog', 'PYTHON - END   - acPostProcForPut()')

#################################
# DEMO 3 - EXIF Extraction Demo #
#################################
import os
import sys
from PIL import Image
from PIL.ExifTags import TAGS
def XXXacPostProcForPut(rule_args, callback):
    phypath = callback.getSessionVar('filePath', 'dummy')[1]
    callback.writeLine('serverLog', phypath)
    objpath = callback.getSessionVar('objPath', 'dummy')[1]
    callback.writeLine('serverLog', objpath)
    exiflist = []
    for (k, v) in Image.open(phypath)._getexif().iteritems():
        exifpair = '%s=%s' % (TAGS.get(k), v)
        exiflist.append(exifpair)
    exifstring = "%".join(exiflist)
    callback.add_metadata_to_objpath(exifstring, objpath, '-d')
    callback.writeLine('serverLog', 'PYTHON - acPostProcForPut() EXIF complete')
~~~~

### DEMO - Baseline

To get started and establish a baseline, we run a simple \`iput\`
without manipulating any of the PEPs in the system.

iput a file into iRODS

~~~~ 
$ iput puppies.jpg
~~~~

rodsLog:

~~~~ 
Jan 13 13:00:04 pid:26540 NOTICE: Agent process 30793 started for puser=rods and cuser=rods from #.#.#.#
Jan 13 13:00:04 pid:30793 NOTICE: readAndProcClientMsg: received disconnect msg from client
Jan 13 13:00:04 pid:30793 NOTICE: Agent exiting with status = 0
Jan 13 13:00:04 pid:26540 NOTICE: Agent process 30793 exited with status 0
~~~~

An agent was started by the server, the agent received a disconnect from
the client, exited, and then the server notes the agent exited.

### DEMO 1 - Just Print To rodsLog

First, we overload the base \`core.re\` acPostProcForPut() which was a
no-op (demonstrated in the baseline). We do this by making sure the name
of the function in the javascript rule base is the same (and confirm
that the Javascript rule engine plugin is listed above the existing
iRODS Rule Language rule engine plugin in \`server\_config.json\`). By
confirming the string is the same, we can see that it is fired when
running the same \`iput puppies.jpg\` command.

overload the acPostProcForPut() policy enforcement point

~~~~ 
# remove prepended XXX in core.js DEMO 1 function name
function acPostProcForPut(callback) {...}
~~~~

remove, then iput the same file into iRODS

~~~~ 
$ irm -rf puppies
$ iput puppies.jpg
~~~~

rodsLog:

~~~~ 
Jan 13 13:01:34 pid:26540 NOTICE: Agent process 30936 started for puser=rods and cuser=rods from #.#.#.#
Jan 13 13:01:35 pid:30936 NOTICE: readAndProcClientMsg: received disconnect msg from client
Jan 13 13:01:35 pid:30936 NOTICE: Agent exiting with status = 0
Jan 13 13:01:35 pid:26540 NOTICE: Agent process 30936 exited with status 0

Jan 13 13:01:35 pid:26540 NOTICE: Agent process 30943 started for puser=rods and cuser=rods from #.#.#.#
Jan 13 13:01:35 pid:30943 NOTICE: writeLine: inString = JAVASCRIPT - BEGIN - acPostProcForPut()
Jan 13 13:01:35 pid:30943 NOTICE: writeLine: inString = custom.re - BEGIN - irodsFunc0()
Jan 13 13:01:35 pid:30943 NOTICE: writeLine: inString = custom.re -- Hi Curate Gear!
Jan 13 13:01:35 pid:30943 NOTICE: writeLine: inString = custom.re - END   - irodsFunc0()
Jan 13 13:01:35 pid:30943 NOTICE: writeLine: inString = PYTHON - BEGIN - pyFunc0(callback)
Jan 13 13:01:35 pid:30943 NOTICE: writeLine: inString = PYTHON -- 2016-01-13 13:01:35.522276
Jan 13 13:01:35 pid:30943 NOTICE: writeLine: inString = PYTHON - END   - pyFunc0(callback)
Jan 13 13:01:35 pid:30943 NOTICE: writeLine: inString = JAVASCRIPT - END   - acPostProcForPut()
Jan 13 13:01:35 pid:30943 NOTICE: readAndProcClientMsg: received disconnect msg from client
Jan 13 13:01:35 pid:30943 NOTICE: Agent exiting with status = 0
Jan 13 13:01:35 pid:26540 NOTICE: Agent process 30943 exited with status 0
~~~~

Note the first four lines are just the client connecting and then
disconnecting during the \`irm\` of \`puppies.jpg\`.

The next few lines show that the Javascript \`acPostProcForPut()\` was
triggered. It then called over to the \`irodsFunc0\` function in
\`custom.re\`, followed by a call to \`pyFunc0\` in \`core.py\`. Then
the Javascript function ends, and the agent and server print out their
disconnection messages.

This demonstrated calling from language to language with functions with
zero parameters. Note that the \`writeLine\` function is defined by
iRODS out of the box, and did not need to be implemented in any of these
additional demo rule bases.

### DEMO 2 - Parameters and Error Handling

Next, we overload, again, the \`acPostProcForPut()\` PEP by preparing
the \`core.py\` file. It will take precedence since the Python rule
engine plugin is listed before the Javascript rule engine plugin in
\`server\_config.json\`.

overload the acPostProcForPut() policy enforcement point

~~~~
# remove prepended XXX in core.py DEMO 2 function name
def acPostProcForPut(rule_args, callback):
~~~~

remove, then iput the same file into iRODS

~~~~ 
$ irm -rf puppies
$ iput puppies.jpg
~~~~

rodsLog:

~~~~ 
Jan 13 13:02:01 pid:26540 NOTICE: Agent process 30986 started for puser=rods and cuser=rods from #.#.#.#
Jan 13 13:02:01 pid:30986 NOTICE: readAndProcClientMsg: received disconnect msg from client
Jan 13 13:02:01 pid:30986 NOTICE: Agent exiting with status = 0
Jan 13 13:02:01 pid:26540 NOTICE: Agent process 30986 exited with status 0

Jan 13 13:02:01 pid:26540 NOTICE: Agent process 30993 started for puser=rods and cuser=rods from #.#.#.#
Jan 13 13:02:01 pid:30993 NOTICE: writeLine: inString = PYTHON - BEGIN - acPostProcForPut()
Jan 13 13:02:01 pid:30993 NOTICE: writeLine: inString = custom.re - BEGIN - irodsFunc1(foo): [called from python, apples]
Jan 13 13:02:01 pid:30993 NOTICE: writeLine: inString = PYTHON - BEGIN - pyFunc1(rule_args, callback)
Jan 13 13:02:01 pid:30993 NOTICE: writeLine: inString = PYTHON -- arg=[called from custom.re]
Jan 13 13:02:01 pid:30993 NOTICE: writeLine: inString = PYTHON - END   - pyFunc1(rule_args, callback)
Jan 13 13:02:01 pid:30993 NOTICE: writeLine: inString = custom.re - END   - irodsFunc1(foo)
Jan 13 13:02:01 pid:30993 NOTICE: writeLine: inString = JAVASCRIPT - BEGIN - jsFunc1(foo, callback)
Jan 13 13:02:01 pid:30993 NOTICE: writeLine: inString =   - with parameter foo[called from python, bananas]
Jan 13 13:02:01 pid:30993 ERROR: [-]    iRODS/server/re/src/rules.cpp:674:int actionTableLookUp(irods::ms_table_entry &, char *) :  status [PLUGIN_ERROR_MISSING_SHARED_OBJECT]  errno [] -- message []
    [-] iRODS/server/re/src/irods_ms_plugin.cpp:110:irods::error irods::load_microservice_plugin(ms_table &, const std::string) :  status [PLUGIN_ERROR_MISSING_SHARED_OBJECT]  errno [] -- message [Failed to create ms plugin entry.]
        [-] iRODS/lib/core/include/irods_load_plugin.hpp:145:irods::error irods::load_plugin(PluginType *&, const std::string &, const std::string &, const std::string &, const std::string &) [PluginType = irods::ms_table_entry] :  status [PLUGIN_ERROR_MISSING_SHARED_OBJECT]  errno [] -- message [shared library does not exist [/var/lib/irods/plugins/microservices/libdoesnotexist.so]]
Jan 13 13:02:01 pid:30993 ERROR: -1102000 -- ERROR HANDLING FTW!
Jan 13 13:02:01 pid:30993 NOTICE: writeLine: inString = userNameClient :: rods
Jan 13 13:02:01 pid:30993 NOTICE: writeLine: inString = dataSize :: 95891
Jan 13 13:02:01 pid:30993 NOTICE: writeLine: inString = PYTHON - END   - acPostProcForPut()
Jan 13 13:02:01 pid:30993 NOTICE: readAndProcClientMsg: received disconnect msg from client
Jan 13 13:02:01 pid:30993 NOTICE: Agent exiting with status = 0
Jan 13 13:02:01 pid:26540 NOTICE: Agent process 30993 exited with status 0
~~~~

This result is a bit deeper. The first four lines are the \`irm\` again.
The next section begins with the Python acPostProcForPut() line,
verifying that the Python PEP took precedence.

The Python called \`irodsFunc1()\` in \`custom.re\` which called
\`pyFunc1()\` back in \`core.py\`.

Then the Python called \`jsFunc1()\` which tried to call
\`doesnotexist()\` which is not defined in any rule base. The Javascript
used a try...catch pattern to handle the error gracefully and return
control to the Python rule (note that 'JAVASCRIPT - END - jsFunc1()' was
never printed).

PLUGIN\_ERROR\_MISSING\_SHARED\_OBJECT is emitted due to the iRODS
behavior of looking for rules of a certain name, and then falling
through to look for microservice plugins of the same name. Since no
microservice plugin was found either, the log complains loudly.

After the error handling has returned, the Python acPostProcForPut()
reads two session variables from the running context and prints them to
the log. You can see that the 'userNameClient' is 'rods' and that the
'dataSize' of puppies.jpg is '95891' bytes. Then the Python exits and
the agent and server exit cleanly.

### DEMO 3 - EXIF Extraction Demo

This third demo uses the Python Image Library to extract EXIF
information from 'puppies.jpg' and then save that metadata into the
iRODS metadata catalog (iCAT) as AVU (attribute-value-unit) triples. In
this case, the Units will be empty.

First, the DEMO 2 \`acPostProcForPut()\` name must be changed to
something else so that it does not fire. Then, DEMO 3
\`acPostProcForPut()\` must be enabled by removing the XXX. Alternately,
we could have defined the DEMO 3 PEP before the DEMO 2 PEP. Ultimately,
we want to make sure we are running the DEMO 3 PEP when we \`iput\` a
file.

overload the acPostProcForPut() policy enforcement point

~~~~ 
# prepend XXX in core.py DEMO 2 function name to disable
def XXXacPostProcForPut(rule_args, callback):
~~~~

~~~~ 
# remove prepended XXX in core.py DEMO 3 function name
def acPostProcForPut(rule_args, callback):
~~~~

remove, then iput the same file into iRODS

~~~~ 
$ irm -rf puppies
$ iput puppies.jpg
~~~~

rodsLog:

~~~~ 
Jan 13 13:02:50 pid:26540 NOTICE: Agent process 31039 started for puser=rods and cuser=rods from #.#.#.#
Jan 13 13:02:50 pid:31039 NOTICE: readAndProcClientMsg: received disconnect msg from client
Jan 13 13:02:50 pid:31039 NOTICE: Agent exiting with status = 0
Jan 13 13:02:50 pid:26540 NOTICE: Agent process 31039 exited with status 0

Jan 13 13:02:50 pid:26540 NOTICE: Agent process 31046 started for puser=rods and cuser=rods from #.#.#.#
Jan 13 13:02:50 pid:31046 NOTICE: writeLine: inString = /var/lib/irods/iRODS/Vault/home/rods/puppies.jpg
Jan 13 13:02:50 pid:31046 NOTICE: writeLine: inString = /tempZone/home/rods/puppies.jpg
Jan 13 13:02:51 pid:31046 NOTICE: writeLine: inString = PYTHON - acPostProcForPut() EXIF complete
Jan 13 13:02:51 pid:31046 NOTICE: readAndProcClientMsg: received disconnect msg from client
Jan 13 13:02:51 pid:31046 NOTICE: Agent exiting with status = 0
Jan 13 13:02:51 pid:26540 NOTICE: Agent process 31046 exited with status 0
~~~~

The log here is much less verbose than in DEMO 2. The first four lines
represent the \`irm\`.

The next section has the physical path and then the logical path of the
file in flight (puppies.jpg). Then we see the EXIF complete line. The
work in DEMO 3 was done in the database rather than in the rodsLog.

We can see the extracted EXIF information in the database with a
separate command.

list the newly extracted and associated metadata

~~~~ 
$ imeta ls -d puppies.jpg
AVUs defined for dataObj puppies.jpg:
<snip>
----
attribute: DateTimeOriginal
value: 2012:10:31 18:37:26
units:
----
attribute: ExifImageHeight
value: 518
units:
----
attribute: ExifImageWidth
value: 777
units:
----
attribute: ExposureTime
value: (1, 40)
units:
----
attribute: Flash
value: 16
units:
----
<snip>
----
attribute: Make
value: Canon
units:
----
attribute: MeteringMode
value: 5
units:
----
attribute: Model
value: Canon EOS REBEL T3i
units:
----
attribute: Orientation
value: 1
units:
----
<snip>
~~~~

This information be verified by using a third-party tool \`jhead\`:

~~~~ 
$ jhead puppies.jpg
File name    : puppies.jpg
File size    : 95891 bytes
File date    : 2016:01:11 22:16:02
Camera make  : Canon
Camera model : Canon EOS REBEL T3i
Date/Time    : 2012:10:31 18:37:26
Resolution   : 777 x 518
Flash used   : No
Focal length : 18.0mm  (35mm equivalent: 188mm)
CCD width    : 3.45mm
Exposure time: 0.025 s  (1/40)
Aperture     : f/3.5
ISO equiv.   : 2500
Whitebalance : Auto
Metering Mode: pattern
Exposure     : program (auto)
JPEG Quality : 94
~~~~

### Conclusion and Next Steps

This is an extremely powerful abstraction and will allow iRODS 4.2 to be
integrated more tightly into existing infrastructure and workflows. In
turn, this means that iRODS will be able to make stronger claims about
the data that is under management, rather than calling out to third
party code that is harder to verify over time.

The next few candidates for additional rule engine plugins are: Haskell
(already under development), Go, PHP, Ruby, and Perl. If you are
interested in working on these new rule engine plugins, please get in
touch with the iRODS Development Team to coordinate and/or assist.
