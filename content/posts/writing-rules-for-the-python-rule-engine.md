Title: Writing rules for the Python rule engine
Date: 2016-07-20 12:13
Author: Rick Skarbez
Slug: writing-rules-for-the-python-rule-engine
Status: published

Thanks to the pluggable rule engine framework in iRODS 4.2, rules can
now be written in languages other than the native iRODS rule language.
In particular, iRODS 4.2 ships with a Python rule engine plugin,
enabling rules to be written in Python.

There are some notable differences between rules in the native rule
engine and in the Python rule engine. It is important to note that the
native iRODS rule language is a domain-specific language, which has
benefits and detriments. One benefit is that syntactic sugar is provided
for many common tasks: for example, consider Line 15 in the native rule
engine example below. `foreach(*GenQOut)` iterates over the rows of the
returned SQL result, while doing the same thing in Python requires
manual iteration over the “serialized” (that is, turned into a Python
dictionary) genQueryOut object, as in Lines 20-21 in the Python rule
engine example below. Another “benefit” is that the native iRODS rule
engine is very safe, in that it does not have the ability to modify the
filesystem other than through iRODS. With Python, you have the ability
to run arbitrary Python code as an iRODS rule, which could potentially
cause problems by modifying the filesystem directly. With great power
comes great responsibility.

NOTE: The `delay(){}` and `remote(){}` microservice calls do not work in
the Python rule engine. If you need to use delayed or remote execution,
you will need to use `delayExec()` or `remoteExec()`, respectively.

ALSO NOTE: The `remoteExec()` microservice requires you to pass in code
written for the default rule engine ON THE REMOTE SERVER. This may mean,
for example, that even though your rule is written in Python, the code
you pass into `remoteExec()` must be written in the iRODS native rule
language, or vice versa.

iRODS Native Rule Language example rule
---------------------------------------

    myTestRule {                                                                                                  
        #Input parameters are:
        #  Structure holding the query
        #Output parameter is:
        #  Structure holding the query result
        #Output from running the example is:
        #  List of the number of files and size of files in collection /tempZone/home/rods/large-coll
        *ContInxOld = 1;
        *Count = 0;
        *Size = 0;
        msiMakeGenQuery("DATA_ID, DATA_SIZE",*Condition,*GenQInp);
        msiExecGenQuery(*GenQInp, *GenQOut);
        msiGetContInxFromGenQueryOut(*GenQOut,*ContInxNew);
        while(*ContInxOld > 0) {
             foreach(*GenQOut) {
                 msiGetValByKey(*GenQOut, "DATA_SIZE", *Fsize);
                 *Size = *Size + double(*Fsize);
                 *Count = *Count + 1;
            }
            *ContInxOld = *ContInxNew;
            if(*ContInxOld > 0) {msiGetMoreRows(*GenQInp,*GenQOut,*ContInxNew);}
        }
        writeLine("stdout","Number of files in *Coll is *Count and total size is *Size");
    }
    INPUT *Coll = "/tempZone/home/rods/large-coll", *Condition="COLL_NAME like *Coll”
    OUTPUT ruleExecOut

iRODS Python example rule
-------------------------

    def testRule(rule_args, callback):                                                                            
        condition = rule_args['*Condition'][1:-1]
        continue_index_old = 1
        size = 0
        count = 0
        inDict = {}
        inDict[PYTHON_MSPARAM_TYPE] = PYTHON_GENQUERYINP_MS_T
        retVal = callback.msiMakeGenQuery('DATA_NAME, DATA_SIZE', condition, inDict)
        inDict = retVal[PYTHON_RE_RET_OUTPUT][2]
        inDict[PYTHON_MSPARAM_TYPE] = PYTHON_GENQUERYINP_MS_T

        outDict = {}
        outDict[PYTHON_MSPARAM_TYPE] = PYTHON_GENQUERYOUT_MS_T
        retVal = callback.msiExecGenQuery(inDict, outDict)
        outDict = retVal[PYTHON_RE_RET_OUTPUT][1]

        dummy = {}
        dummy[PYTHON_MSPARAM_TYPE] = PYTHON_INT_MS_T
        while continue_index_old > 0:
            for row in range(0, int(outDict['rowCnt'])):
                keyStr = 'value_' + str(row) + '_1'
                size = size + int(outDict[keyStr])
                count = count + 1
            continue_index_old = int(outDict['continueInx'])
            if continue_index_old > 0:
                outDict[PYTHON_MSPARAM_TYPE] = PYTHON_GENQUERYOUT_MS_T
                retVal = callback.msiGetMoreRows(inDict, outDict, dummy)
                outDict = retVal[PYTHON_RE_RET_OUTPUT][1]

        callback.writeLine('stdout', 'Number of files in ' + coll + 'is ' + str(count) + 'and total size is ' + str(size))

    INPUT *Condition="COLL_NAME like '/tempZone/home/rods/large_coll'"
    OUTPUT ruleExecOut

What these example rules do
---------------------------

In both rule engines, the preceding rules:

-   Make a genQueryInp object from the INPUT parameters, using the
    msiMakeGenQuery microservice
-   Use that genQueryInp to execute a genquery, using the
    msiExecGenQuery microservice, returning a genQueryOut object
-   While the continue index of the genQueryOut object is greater than
    0:
    -   For each row in the SQL object returned in genQueryOut:
        -   Add 1 to the file count
        -   Add the file size to the file size sum
    -   If the continue index is still greater than 0:
        -   Re-run the query and get more rows
-   Print the total number of files and total size of all the files
    matching the given genquery. (In this case, all the files present in
    /tempZone/home/rods/large-coll)

Important differences in the Python rule language
-------------------------------------------------

*You can’t reference INPUT variables within other INPUT variables*  
For example, in the native rule language, the \*Condition variable is
defined as “COLL\_NAME like \*Coll”. In the Python rule engine, the
\*Coll variable is omitted and \*Condition is defined as “COLL\_NAME
like ‘/tempZone/home/rods/large-coll’”. This is because the Python rule
engine receives the variables as strings, and doesn’t know how to look
inside the strings to do the substitution.

*The Python rule function takes two arguments, rule\_args and callback*  
The rule\_args dictionary contains the INPUT and OUTPUT variable lists.
The callback object enables the calling of other iRODS rules and
microservices from within the Python rule engine.

*The INPUT and OUTPUT variables are accessible from the rule\_args
dictionary object*

*Variables arrive wrapped in double quotes*  
This is why Line 2 is `condition = rule_args['*Condition’][1:-1]`
instead of just `condition = rule_args[‘*Condition’]`. The [1:-1]
removes the first and last characters from the string, removing the
double quotes.

*The Python language does not allow variables passed by reference into
rules and/or microservices*

*Even so, you must provide a dummy variable of the “appropriate type”
when calling a rule or microservice*  
For example, see Lines 6-8 of the Python rule language implementation.
Normally, msiMakeGenQuery takes a genQueryInp passed by reference as the
third argument, which is how it returns the populated genQueryInp to the
caller. Since Python doesn’t have a native genQueryInp type, you can
pass in a dict with the PYTHON\_MSPARAM\_TYPE element set to
PYTHON\_GENQUERY\_INP\_MS\_T. The Python rule engine plugin looks for an
object with this key in the dictionary and creates a genQueryInp object.

*“Return by reference” variables are available in the returned value*  
Rule/microservice calls in the Python rule language return a dictionary
containing the iRODS error status (PYTHON\_RE\_RET\_STATUS), the iRODS
error code (PYTHON\_RE\_RET\_CODE), and the rule/microservice parameters
(a list, PYTHON\_RE\_RET\_OUTPUT). For example, to get the returned
genQueryInp object from the call to msiMakeGenQuery, on Line 9, we
retrieve retVal[PYTHON\_RE\_RET\_OUTPUT][2], since the inDict was the
third parameter of that microservice call.
