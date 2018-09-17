Title: GenQuery Iterator for the iRODS Python Rule Engine Plugin
Date: 2018-09-17 16:00
Author: Dan Moore
Slug: genquery-iterator-for-the-irods-python-rule-engine-plugin
Status: published


Administrators and users of iRODS have, for a long time, found its rule engine
and associated rule language a valuable tool for customizing their systems'
data policy, workflows, and other data management needs. Whether you are
configuring a specific Policy Enforcement Point (PEP) with a series of actions to respond to
iRODS system events, or writing an application more specific to your iRODS 
Zone, the process of authoring rules sometimes demands a knowledge of certain techniques and
idioms.

A frequently-used technique involves the retrieval of information about
data and other objects registered to the iRODS Catalog (in a relational database).  More specifically,
this means querying and extracting individual rows from that database via the iRODS server that manages the
local iRODS Zone. This near-SQL feature of iRODS is known as the General Query (or GenQuery), and in the native iRODS rule
language the corresponding idiom is the [Language Integrated General Query (or LIGQ)](https://docs.irods.org/master/plugins/irods_rule_language/#language-integrated-general-query).

When authoring in the iRODS rule language, anyone familiar with SQL can use the LIGQ to query the
iRODS Catalog of all objects and metadata that have been registered to it.

The following iRODS rule language snippet utilizes the LIGQ:

```
*host = ''
foreach (*h in SELECT RESC_LOC WHERE DATA_RESC_NAME = '*resc_name' ) {
    *host = *h.RESC_LOC;
}
```

The above example uses the Language Integrated General Query syntax to
find the hostname of the iRODS server hosting the storage resource named `*resc_name`. The
hostname yielded by the query is placed in the output variable `*host`.

### Python Rules

Of course not everyone has the time to learn a domain specific language, and that is
why a plugin interface has been designed to allow rules to be written in a variety of languages.
In fact, it's already very practical to write rules in the
Python scripting language, as long as your local administrator has installed and configured
the [Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python) (PREP).

Python is a particularly good fit for this task since it is full-featured,
easy to learn, and of late incredibly popular, to the extent that it is typically named
as being among the top 5 programming languages used in science and industry.

In addition, Python's object orientation and "iterable" abstraction are of great interest here.
Its generator functions and user-definable, class-based iterators can offer a streamlined and
straightforward interface to things such as database queries.

### Iterator Magic

Without the iterator abstraction, we might have written the following code to scan, and place
into a Python list structure, all data objects in our local zone that are owned by the
user `alice`:

```
def findMyObjects(rule_args, callback, rei):

    My_Results_List = []

    ret_val = callback.msiMakeGenQuery( "COLL_NAME, DATA_NAME" , "DATA_OWNER_NAME = 'alice'",
		                        irods_types.GenQueryInp())
    genQueryInp = ret_val['arguments'][2]

    ret_val = callback.msiExecGenQuery(genQueryInp, irods_types.GenQueryOut())
    genQueryOut = ret_val['arguments'][1]

    continue_index = 1

    while continue_index > 0:
	for j in range(genQueryOut.rowCnt):
	    entry = '{}/{}'.format(genQueryOut.sqlResult[0].row(j), genQueryOut.sqlResult[1].row(j))
	    My_Results_List.append(entry)
	continue_index = genQueryOut.continueInx
	if continue_index > 0:
	    ret_val = callback.msiGetMoreRows(genQueryInp, genQueryOut, 0)
	    genQueryOut = ret_val['arguments'][1]
```

This does work, but is not very compact or even terribly readable. It might be improved
with the help of some clever refactoring, but the better choice would would be to create
an iterator to streamline row-by-row access to the query results.

We have done exactly that and the effort will be included in the next *PREP* release
in the form of the `genquery.py` module.  Like the `session_vars.py` module, it needs only
to be imported from within `core.py` or from Python rules submitted to `irule`.

With use of the new iterator, the above code becomes merely:

```
from genquery import ( row_iterator, paged_iterator, AS_DICT, AS_LIST )
# ...
def findMyObjects(rule_args, callback, rei):
    My_Results_List = []
    rows = row_iterator(
		    ["COLL_NAME","DATA_NAME"],   # requested columns
		    "DATA_OWNER_NAME = 'alice'", # condition for query
		    AS_DICT,                     # retrieve as key/value structure
		    callback)
    for row in rows:
        My_Results_List.append("{COLL_NAME}/{DATA_NAME}".format(**row))
```

To page through a potentially large number of results from the catalog, we can also retrieve them in
lists of up to 256 (MAX_SQL_ROWS) rows at a time.

This approach can be seen in the following example, which could be used to log the paths to all
the data objects in the local zone that exceed a certain size limit:

```
MY_SIZE_LIMIT = (4 * 1024**3) # 4 gibibytes
for page in paged_iterator(["COLL_NAME","DATA_NAME","DATA_SIZE"],
                                  "DATA_SIZE > '{}'".format(MY_SIZE_LIMIT),
                                  AS_LIST, callback):
    for row in page:
        callback.writeLine("serverLog",
            ("Size exceeded:\t" +
             "Collection_Name: {0}\t" +
             "Data_Name: {1}\t" +
             "Data_Size: {2}" ).format( *row )
        )
```

### A Practical Example: "Pub-Sub"

For a more thorough example of the depth, utility, and flexibility possible with the new iterators
presented here, examine the following implementation of a rudimentary publish-subscribe framework. This
code can be added to an existing `core.py`, and makes use of the `genquery` module in a two-deep nested
loop to calculate the intersection of "publish" and "subscribe" metadata:

```
import session_vars
from genquery import *

changelog_share_path = '/tempZone/home/public/dataShare'

def pep_api_data_obj_put_post(rule_args, callback, rei):

    from datetime import datetime as dt
    varmap = session_vars.get_map(rei)
    client_user = varmap['client_user']['user_name']
    put_obj_path = str(rule_args[2].objPath)
    put_coll = '/'.join(put_obj_path.split('/')[:-1])

    publish_query = ( "META_COLL_ATTR_NAME = 'irods_put_path::publish' "
		      " and META_COLL_ATTR_VALUE = '{}' "
		      " and META_COLL_ATTR_UNITS like '%y%' || like '%Y%' "
		      " and COLL_NAME = '{}'").format(client_user, put_coll )

    subscribe_query = ( "META_DATA_ATTR_NAME = 'irods_put_path::subscribe' "
			" and META_DATA_ATTR_UNITS like '%.{}.%' "
			" and META_DATA_ATTR_VALUE ='{}'").format( client_user, put_coll )

    if not put_obj_path.startswith( changelog_share_path + "/" ):
        return

    group_users = [ r[0] for r in
        row_iterator( "USER_NAME", "USER_NAME != 'changelog' and "
				   "USER_GROUP_NAME = 'changelog'", AS_LIST, callback ) ]

    if client_user not in group_users:
        return

    for row_Pub in row_iterator(['META_COLL_ATTR_VALUE'], publish_query, AS_LIST, callback):

        if row_Pub[0] == client_user:

            for row_Sub in row_iterator( ['COLL_NAME','DATA_NAME','DATA_OWNER_NAME'],
                                         subscribe_query, AS_DICT, callback):

                if row_Sub['DATA_OWNER_NAME'] not in group_users:
                    continue
                datetime_string = dt.ctime(dt.now())
                chlog = DataObject("{COLL_NAME}/{DATA_NAME}".format(**row_Sub))
                chlog.appendString(
                     "PUT:\t{datetime_string}\t{put_obj_path}\n".format(**locals()))

# -- end pep_api_data_obj_put_post(...)

class DataObject_Access_Error(RuntimeError):
    pass

# -- Python class to abstract iRODS DataObject appending-write operation

class DataObject(object):

    def __init__(self, objPath, callback = None):
        self.callback = callback
        self.desc = -1
        rv = callback.msiDataObjOpen("objPath={}++++openFlags=O_RDWR".format(objPath),0)
        self.desc = rv['arguments'][1]
        if self.desc <= 0:
            raise DataObject_Access_Error(objPath)

    def appendString(self, string):
        rv = self.callback.msiDataObjLseek(self.desc,0,"SEEK_END",0)
        seek_result = rv['arguments'][3]
        rv = self.callback.msiDataObjWrite(self.desc, string, 0);
        bytesWritten = rv['arguments'][2]

    def cleanup (self):
        if self.desc > 0:
            rv = self.callback.msiDataObjClose(self.desc, 0)
            close = rv['arguments'][1]
            self.desc = 0

    def __del__(self):
        self.cleanup()
```

### Explanation

While it is true that the above-utilized Dynamic PEP (`pep_api_data_obj_put_post`) executes whenever *any* user PUTs a file into an iRODS
collection (PUT being a part of the iRODS API), in fact it achieves its "pub-sub" effect only when *both* of the following conditions are met:

  - the client user enacting the PUT (`bobby`) has registered the target collection as one possibly of interest to other users; and

  - another user (`alice`) has registered interest in receiving a notification of this type of event via the reciprocal registration of a "changelog" data object.

In each case, the registration is enacted by attaching a metadata tag (attribute-value-unit triple, or 'AVU') to an iRODS object.  The end result of the code above
 will be to append a suitably informative line of text at the end of the changelog with every qualifying PUT performed.

It should be mentioned that the other preconditions for this code to function properly are that:

  - both `bobby` and `alice` must belong to a `changelog` group; and, that

  - appropriate ACL's (access control lists) must have been placed on the appropriate iRODS collections
and data objects using the `ichmod` command or an equivalent:

    * the iRODS `changelog` group must be able to write the collection being PUT to, and the changelog itself

    * the iRODS `changelog` group must be able to read the collection containing the changelog

  - User `alice` must be the exclusive owner of the changelog
  
The metadata tags to be leveraged in the above example should coordinate as follows:

  - User `bobby` should have tagged the target collection with the "publish" metadata tag
```
imeta set -C /tempZone/home/public/dataShare \
  "irods_put_path::publish" "bobby" "Y"  ## (set 'N' to disable)
```
  - User `alice` should have tagged a data object with "subscribe" metadata, effectively marking it as a changelog:
```
imeta set -d /tempZone/home/public/alice/changes.txt \
  "irods_put_path::subscribe" \
  "/tempZone/home/public/dataShare" \
  ".bobby."
```
  - If `alice` desires a changelog entry in the event of a PUT to the same collection by another `changelog` group user, e.g. `charlie`, she can either attach another metadata record similar to the above, or append the extra name to the UNITS field of the existing AVU, making it: `.bobby.charlie.`.
  
  
When everything is correctly in place, the result of `bobby` performing a PUT operation into the `dataShare` "collection-of-interest" will append the text notification to `alice`'s changelog, the data object located at `/tempZone/home/public/alice/changes.txt`


### Advanced Moves

The above examples illustrate some of the power and improved ease Python iterators bring to the extraction and productive use of information in
the context of iRODS-enabled data management.  But the scope of what is possible is much broader.  To see all iCAT
object attributes that are recognized by and available from the General Query facility, consider the listing returned by `iquest attrs`:

```
ZONE_ID
ZONE_NAME
ZONE_TYPE
ZONE_CONNECTION
ZONE_COMMENT
ZONE_CREATE_TIME
ZONE_MODIFY_TIME
USER_ID
USER_NAME
USER_TYPE
USER_ZONE
USER_DN
USER_INFO
USER_COMMENT
USER_CREATE_TIME
USER_MODIFY_TIME
RESC_ID
RESC_NAME
RESC_ZONE_NAME
RESC_TYPE_NAME
RESC_CLASS_NAME
RESC_LOC
RESC_VAULT_PATH
RESC_FREE_SPACE
RESC_FREE_SPACE_TIME
RESC_INFO
RESC_COMMENT
RESC_CREATE_TIME
RESC_MODIFY_TIME
RESC_STATUS
RESC_CHILDREN
RESC_CONTEXT
RESC_PARENT
RESC_PARENT_CONTEXT
DATA_ID
DATA_COLL_ID
DATA_NAME
DATA_REPL_NUM
DATA_VERSION
DATA_TYPE_NAME
DATA_SIZE
DATA_RESC_NAME
DATA_RESC_HIER
DATA_PATH
DATA_OWNER_NAME
DATA_OWNER_ZONE
DATA_REPL_STATUS
DATA_STATUS
DATA_CHECKSUM
DATA_EXPIRY
DATA_MAP_ID
DATA_COMMENTS
DATA_CREATE_TIME
DATA_MODIFY_TIME
DATA_RESC_ID
DATA_ACCESS_TYPE
DATA_ACCESS_NAME
DATA_TOKEN_NAMESPACE
DATA_ACCESS_USER_ID
DATA_ACCESS_DATA_ID
COLL_ID
COLL_NAME
COLL_PARENT_NAME
COLL_OWNER_NAME
COLL_OWNER_ZONE
COLL_MAP_ID
COLL_INHERITANCE
COLL_COMMENTS
COLL_CREATE_TIME
COLL_MODIFY_TIME
COLL_ACCESS_TYPE
COLL_ACCESS_NAME
COLL_TOKEN_NAMESPACE
COLL_ACCESS_USER_ID
COLL_ACCESS_COLL_ID
META_DATA_ATTR_NAME
META_DATA_ATTR_VALUE
META_DATA_ATTR_UNITS
META_DATA_ATTR_ID
META_DATA_CREATE_TIME
META_DATA_MODIFY_TIME
META_COLL_ATTR_NAME
META_COLL_ATTR_VALUE
META_COLL_ATTR_UNITS
META_COLL_ATTR_ID
META_COLL_CREATE_TIME
META_COLL_MODIFY_TIME
META_NAMESPACE_COLL
META_NAMESPACE_DATA
META_NAMESPACE_RESC
META_NAMESPACE_USER
META_NAMESPACE_RESC_GROUP
META_NAMESPACE_RULE
META_NAMESPACE_MSRVC
META_NAMESPACE_MET2
META_RESC_ATTR_NAME
META_RESC_ATTR_VALUE
META_RESC_ATTR_UNITS
META_RESC_ATTR_ID
META_RESC_CREATE_TIME
META_RESC_MODIFY_TIME
META_RESC_GROUP_ATTR_NAME
META_RESC_GROUP_ATTR_VALUE
META_RESC_GROUP_ATTR_UNITS
META_RESC_GROUP_ATTR_ID
META_RESC_GROUP_CREATE_TIME
META_RESC_GROUP_MODIFY_TIME
META_USER_ATTR_NAME
META_USER_ATTR_VALUE
META_USER_ATTR_UNITS
META_USER_ATTR_ID
META_USER_CREATE_TIME
META_USER_MODIFY_TIME
META_RULE_ATTR_NAME
META_RULE_ATTR_VALUE
META_RULE_ATTR_UNITS
META_RULE_ATTR_ID
META_RULE_CREATE_TIME
META_RULE_MODIFY_TIME
META_MSRVC_ATTR_NAME
META_MSRVC_ATTR_VALUE
META_MSRVC_ATTR_UNITS
META_MSRVC_ATTR_ID
META_MSRVC_CREATE_TIME
META_MSRVC_MODIFY_TIME
META_MET2_ATTR_NAME
META_MET2_ATTR_VALUE
META_MET2_ATTR_UNITS
META_MET2_ATTR_ID
META_MET2_CREATE_TIME
META_MET2_MODIFY_TIME
USER_GROUP_ID
USER_GROUP_NAME
RULE_EXEC_ID
RULE_EXEC_NAME
RULE_EXEC_REI_FILE_PATH
RULE_EXEC_USER_NAME
RULE_EXEC_ADDRESS
RULE_EXEC_TIME
RULE_EXEC_FREQUENCY
RULE_EXEC_PRIORITY
RULE_EXEC_ESTIMATED_EXE_TIME
RULE_EXEC_NOTIFICATION_ADDR
RULE_EXEC_LAST_EXE_TIME
RULE_EXEC_STATUS
TOKEN_NAMESPACE
TOKEN_ID
TOKEN_NAME
TOKEN_VALUE
TOKEN_VALUE2
TOKEN_VALUE3
TOKEN_COMMENT
AUDIT_OBJ_ID
AUDIT_USER_ID
AUDIT_ACTION_ID
AUDIT_COMMENT
AUDIT_CREATE_TIME
AUDIT_MODIFY_TIME
SL_HOST_NAME
SL_RESC_NAME
SL_CPU_USED
SL_MEM_USED
SL_SWAP_USED
SL_RUNQ_LOAD
SL_DISK_SPACE
SL_NET_INPUT
SL_NET_OUTPUT
SL_CREATE_TIME
SLD_RESC_NAME
SLD_LOAD_FACTOR
SLD_CREATE_TIME
RULE_BASE_MAP_VERSION
RULE_BASE_MAP_PRIORITY
RULE_BASE_MAP_BASE_NAME
RULE_BASE_MAP_OWNER_NAME
RULE_BASE_MAP_OWNER_ZONE
RULE_BASE_MAP_COMMENT
RULE_BASE_MAP_CREATE_TIME
RULE_BASE_MAP_MODIFY_TIME
RULE_ID
RULE_VERSION
RULE_BASE_NAME
RULE_NAME
RULE_EVENT
RULE_CONDITION
RULE_BODY
RULE_RECOVERY
RULE_STATUS
RULE_OWNER_NAME
RULE_OWNER_ZONE
RULE_DESCR_1
RULE_DESCR_2
RULE_INPUT_PARAMS
RULE_OUTPUT_PARAMS
RULE_DOLLAR_VARS
RULE_ICAT_ELEMENTS
RULE_SIDEEFFECTS
RULE_COMMENT
RULE_CREATE_TIME
RULE_MODIFY_TIME
DVM_BASE_MAP_VERSION
DVM_BASE_MAP_BASE_NAME
DVM_BASE_MAP_OWNER_NAME
DVM_BASE_MAP_OWNER_ZONE
DVM_BASE_MAP_COMMENT
DVM_BASE_MAP_CREATE_TIME
DVM_BASE_MAP_MODIFY_TIME
DVM_ID
DVM_VERSION
DVM_BASE_NAME
DVM_EXT_VAR_NAME
DVM_CONDITION
DVM_INT_MAP_PATH
DVM_STATUS
DVM_OWNER_NAME
DVM_OWNER_ZONE
DVM_COMMENT
DVM_CREATE_TIME
DVM_MODIFY_TIME
FNM_BASE_MAP_VERSION
FNM_BASE_MAP_BASE_NAME
FNM_BASE_MAP_OWNER_NAME
FNM_BASE_MAP_OWNER_ZONE
FNM_BASE_MAP_COMMENT
FNM_BASE_MAP_CREATE_TIME
FNM_BASE_MAP_MODIFY_TIME
FNM_ID
FNM_VERSION
FNM_BASE_NAME
FNM_EXT_FUNC_NAME
FNM_INT_FUNC_NAME
FNM_STATUS
FNM_OWNER_NAME
FNM_OWNER_ZONE
FNM_COMMENT
FNM_CREATE_TIME
FNM_MODIFY_TIME
QUOTA_USER_ID
QUOTA_RESC_ID
QUOTA_LIMIT
QUOTA_OVER
QUOTA_MODIFY_TIME
QUOTA_USAGE_USER_ID
QUOTA_USAGE_RESC_ID
QUOTA_USAGE
QUOTA_USAGE_MODIFY_TIME
QUOTA_USER_NAME
QUOTA_USER_ZONE
QUOTA_USER_TYPE
QUOTA_RESC_NAME
MSRVC_ID
MSRVC_NAME
MSRVC_SIGNATURE
MSRVC_DOXYGEN
MSRVC_VARIATIONS
MSRVC_STATUS
MSRVC_OWNER_NAME
MSRVC_OWNER_ZONE
MSRVC_COMMENT
MSRVC_CREATE_TIME
MSRVC_MODIFY_TIME
MSRVC_MODULE_NAME
MSRVC_VERSION
MSRVC_HOST
MSRVC_LOCATION
MSRVC_LANGUAGE
MSRVC_TYPE_NAME
MSRVC_VER_OWNER_NAME
MSRVC_VER_OWNER_ZONE
MSRVC_VER_COMMENT
MSRVC_VER_CREATE_TIME
MSRVC_VER_MODIFY_TIME
META_ACCESS_TYPE
META_ACCESS_NAME
META_TOKEN_NAMESPACE
META_ACCESS_USER_ID
META_ACCESS_META_ID
RESC_ACCESS_TYPE
RESC_ACCESS_NAME
RESC_TOKEN_NAMESPACE
RESC_ACCESS_USER_ID
RESC_ACCESS_RESC_ID
RULE_ACCESS_TYPE
RULE_ACCESS_NAME
RULE_TOKEN_NAMESPACE
RULE_ACCESS_USER_ID
RULE_ACCESS_RULE_ID
MSRVC_ACCESS_TYPE
MSRVC_ACCESS_NAME
MSRVC_TOKEN_NAMESPACE
MSRVC_ACCESS_USER_ID
MSRVC_ACCESS_MSRVC_ID
TICKET_ID
TICKET_STRING
TICKET_TYPE
TICKET_USER_ID
TICKET_OBJECT_ID
TICKET_OBJECT_TYPE
TICKET_USES_LIMIT
TICKET_USES_COUNT
TICKET_WRITE_FILE_COUNT
TICKET_WRITE_FILE_LIMIT
TICKET_WRITE_BYTE_COUNT
TICKET_WRITE_BYTE_LIMIT
TICKET_EXPIRY
TICKET_CREATE_TIME
TICKET_MODIFY_TIME
TICKET_ALLOWED_HOST_TICKET_ID
TICKET_ALLOWED_HOST
TICKET_ALLOWED_USER_TICKET_ID
TICKET_ALLOWED_USER_NAME
TICKET_ALLOWED_GROUP_TICKET_ID
TICKET_ALLOWED_GROUP_NAME
TICKET_DATA_NAME
TICKET_DATA_COLL_NAME
TICKET_COLL_NAME
TICKET_OWNER_NAME
TICKET_OWNER_ZONE
```

For a few examples of the types of queries possible via `iquest` using GenQuery,
see the listing at the end of the help text (`iquest -h`):

```
iquest "SELECT DATA_NAME, DATA_CHECKSUM WHERE DATA_RESC_NAME like 'demo%'"
iquest "For %-12.12s size is %s" "SELECT DATA_NAME ,  DATA_SIZE  WHERE COLL_NAME = '/tempZone/home/rods'"
iquest "SELECT COLL_NAME WHERE COLL_NAME like '/tempZone/home/%'"
iquest "User %-6.6s has %-5.5s access to file %s" "SELECT USER_NAME,  DATA_ACCESS_NAME, DATA_NAME WHERE COLL_NAME = '/tempZone/home/rods'"
iquest " %-5.5s access has been given to user %-6.6s for the file %s" "SELECT DATA_ACCESS_NAME, USER_NAME, DATA_NAME WHERE COLL_NAME = '/tempZone/home/rods'"
iquest no-distinct "select META_DATA_ATTR_NAME"
iquest uppercase "select COLL_NAME, DATA_NAME WHERE DATA_NAME like 'F1'"
iquest "SELECT RESC_NAME, RESC_LOC, RESC_VAULT_PATH, DATA_PATH WHERE DATA_NAME = 't2' AND COLL_NAME = '/tempZone/home/rods'"
iquest "User %-9.9s uses %14.14s bytes in %8.8s files in '%s'" "SELECT USER_NAME, sum(DATA_SIZE),count(DATA_NAME),RESC_NAME"
iquest "select sum(DATA_SIZE) where COLL_NAME = '/tempZone/home/rods'"
iquest "select sum(DATA_SIZE) where COLL_NAME like '/tempZone/home/rods%'"
iquest "select sum(DATA_SIZE), RESC_NAME where COLL_NAME like '/tempZone/home/rods%'"
iquest "select order_desc(DATA_ID) where COLL_NAME like '/tempZone/home/rods%'"
iquest "select count(DATA_ID) where COLL_NAME like '/tempZone/home/rods%'"
iquest "select RESC_NAME where RESC_CLASS_NAME IN ('bundle','archive')"
iquest "select DATA_NAME,DATA_SIZE where DATA_SIZE BETWEEN '100000' '100200'"
iquest "%s/%s %s" "SELECT COLL_NAME, DATA_NAME, DATA_CREATE_TIME WHERE COLL_NAME like '/tempZone/home/rods%' AND DATA_CREATE_TIME like '01508165%'"

```

### Coming Soon

The `genquery.py` module will be included by default in the next release of the Python Rule Engine Plugin.

Existing deployments of iRODS can add a copy as `/etc/irods/genquery.py` and then use an import statement at the top of `core.py`:

```
from genquery import *
```
