Title: Writing a Rule Engine Plugin (Python example)
Date: 2016-07-11 17:11
Author: Rick Skarbez
Slug: writing-a-rule-engine-plugin-python-example
Status: published

One of the major features coming in iRODS 4.2 is the pluggable rule
engine framework. This enables plugins to be written (in C++) that
enable the development of rules in languages other than the native iRODS
rule language. The Python rule engine plugin that will ship with iRODS
4.2 is the first example of such a plugin. This blog post walks through
the source for the Python rule engine plugin, detailing the functions
and behaviors that need to be implemented by any rule engine plugin.
This is intended not only to introduce the Python rule engine plugin,
but also to guide the development of future rule engine plugins for
other languages.

Required operations
-------------------

Any rule engine plugin needs to implement the following six functions to
comply with the iRODS 4.2 pluggable rule engine framework: start, stop,
rule\_exists, exec\_rule, exec\_rule\_text, and exec\_rule\_expression.
Each of these functions has a return type of irods::error. (The
following code can be copied verbatim into your implementation of a rule
engine plugin.)

    extern "C"
    irods::pluggable_rule_engine*
    plugin_factory(const std::string& _inst_name, const std::string& _context) {
        irods::pluggable_rule_engine* re = new irods::pluggable_rule_engine( _inst_name , _context);

         re->add_operation&(
                 "start",
                 std::function( start ) );

         re->add_operation(
                 "stop",
                 std::function( stop ) );

         re->add_operation(
                 "rule_exists",
                 std::function( rule_exists ) );

         re->add_operation(
                 "exec_rule",
                 std::function( exec_rule ) );

         re->add_operation(
                 "exec_rule_text",
                 std::function( exec_rule_text ) );
     
         re->add_operation(
                 "exec_rule_expression",
                 std::function( exec_rule_expression ) );

        return re;
    }

These functions are used as follows:

-   `start` - Called when the rule engine is initialized. start needs to
    handle any setup that is needed to use this rule engine: loading
    libraries, initializing interpreters, initializing global variables,
    etc.
-   `stop` - Called when the rule engine terminates. If any teardown
    needs to happen, it should happen within stop.
-   `rule_exists` - Called by the dispatcher whenever a rule is called.
    This function needs to check if a rule with the given name is
    implemented in this particular rule engine, and if so, set its
    \_return parameter to true.
-   `exec_rule` - Called whenever a rule is triggered from within the
    rule engine. This is where rules are “normally” executed, that is,
    not from irule or delay/remote execution. This function needs to
    convert the input parameters (which arrive as a list of boost::anys)
    into a format that is usable in the language the rule engine is
    written for, execute the rule given those input parameters, and
    return output parameters (again as a list of boost::anys).
-   `exec_rule_text` - Called when a rule is executed using irule. Needs
    to parse the input rule string and turn it into a function that can
    be called with the given input and output parameters.
-   `exec_rule_expression` - Called when a block of code is run from the
    delay or remote execution queues. Likely to be similar to
    exec\_rule\_text, although the input code is formatted differently
    and so needs to be handled separately.

`start`
-------

The start function is called when the rule engine is initialized. start
needs to handle any setup that is needed to use this rule engine:
loading libraries, initializing interpreters, initializing global
variables, etc.

    irods::error
    start(irods::default_re_ctx&, const std::string&) {
        // Load the libpython2.7 shared object
        dlopen("libpython2.7.so", RTLD_LAZY | RTLD_GLOBAL); // https://mail.python.org/pipermail/new-bugs-announce/2008-November/003322.html
        // Initialize the Python interpreter
        Py_InitializeEx(0);

        try {
            // Adds /etc/irods to the system path
            bp::object main_module = bp::import("__main__");
            bp::object main_namespace = main_module.attr("__dict__");
            bp::exec("import sys\n"
                 "sys.path.append('/etc/irods')",
                 main_namespace);

            // Defines the variables defined in PYTHON_GLOBALS (a std::map of std::string to 
            //     std::string) in the Python core namespace
            bp::object core_module = bp::import("core");
            bp::object core_namespace = core_module.attr("__dict__");
            for (const auto& it : PYTHON_GLOBALS) {
                core_namespace[it.first] = it.second;
            }

            initplugin_wrappers();
            StringFromPythonUnicode::register_converter();

        } catch (const bp::error_already_set&) {
            const std::string formatted_python_exception = extract_python_exception();
            LOG("caught python exception\n", formatted_python_exception);
            std::string err_msg = std::string("irods_rule_engine_plugin_python::") + __PRETTY_FUNCTION__ + " Caught Python exception.\n" + formatted_python_exception;
            return ERROR(-1, err_msg);
        }

        return SUCCESS();
    }

In the Python rule engine plugin, it:

-   Loads the libpython2.7 shared object
-   Initializes the Python interpreter
-   Adds /etc/irods to the system path
-   Defines the variables defined in PYTHON\_GLOBALS (a std::map of
    std::string to std::string) in the Python core namespace

`stop`
------

The stop function is called when the rule engine terminates. If any
teardown needs to happen, it should happen within stop.

    irods::error
    stop(irods::default_re_ctx&, const std::string&) {
        return SUCCESS();
    }

In the Python rule engine plugin, it:

-   Does nothing; there’s nothing to tear down, so we simply return
    SUCCESS()

`rule_exists`
-------------

The rule\_exists function is called by the dispatcher whenever a rule is
called. This function needs to check if a rule with the given name is
implemented in this particular rule engine, and if so, set its \_return
parameter to true.

    irods::error
    rule_exists(irods::default_re_ctx&, std::string rule_name, bool& _return) {
        _return = false;
        try {
            // Import the Python core namespace
            bp::object core_module = bp::import("core");
            // Call PyObject_HasAttrString to see if there is a function with the name rule_name 
            //     defined in that namespace, and returns true if so, false if not.
            _return = PyObject_HasAttrString(core_module.ptr(), rule_name.c_str());
        } catch (const bp::error_already_set&) {
            const std::string formatted_python_exception = extract_python_exception();
            LOG("caught python exception\n", formatted_python_exception);
            std::string err_msg = std::string("irods_rule_engine_plugin_python::") + __PRETTY_FUNCTION__ + " Caught Python exception.\n" + formatted_python_exception;
            return ERROR(-1, err_msg);
        }

        return SUCCESS();
    }

In the Python rule engine plugin, it:

-   Imports the Python core namespace
-   Calls PyObject\_HasAttrString to see if there is a function with the
    name rule\_name defined in that namespace, and returns true if so,
    false if not.

`exec_rule`
-----------

The exec\_rule function is called whenever a rule is triggered from
within the rule engine. This is where rules are “normally” executed,
that is, not from irule or delay/remote execution.

    irods::error
    exec_rule(irods::default_re_ctx&, std::string rule_name, std::list& rule_arguments_cpp, irods::callback effect_handler) {
        try {
            // Import the Python core namespace
            bp::object core_module = bp::import("core");
            // Import the function rule_name from the Python core namespace as rule_function
            bp::object rule_function = core_module.attr(rule_name.c_str());

            // Call serialize_parameter_list_of_boost_anys_to_python_list on the input parameters to
            //     convert them from a C++ list of boost::anys to a Python list
            bp::list rule_arguments_python;
            rule_arguments_python = serialize_parameter_list_of_boost_anys_to_python_list(rule_arguments_cpp);

            // Call the Python function rule_function with 2 parameters: The input parameters as a 
            //     Python list, and the rule engine callback
            CallbackWrapper callback_wrapper{effect_handler};
            bp::object outVal = rule_function(rule_arguments_python, callback_wrapper);

            // Converts the parameter list from a Python list back to a list of boost::anys so they can
            //     be used as output parameters elsewhere
            int i = 0;
            for (auto itr = begin(rule_arguments_cpp); itr != end(rule_arguments_cpp); ++itr) {
                if (itr->type() == typeid(std::string)) {
                    boost::any_cast(*itr) = bp::extract(rule_arguments_python[i]);
                } else if (itr->type() == typeid(std::string*)) {
                    *boost::any_cast(*itr) = bp::extract(rule_arguments_python[i]);
                }
                i++;
            }
        } catch (const bp::error_already_set&) {
            const std::string formatted_python_exception = extract_python_exception();
            LOG("caught python exception\n", formatted_python_exception);
            std::string err_msg = std::string("irods_rule_engine_plugin_python::") + __PRETTY_FUNCTION__ + " Caught Python exception.\n" + formatted_python_exception;
            return ERROR(-1, err_msg);
        } catch (const boost::bad_any_cast& e) {
            LOG("bad any cast : ", e.what());
            std::string err_msg = std::string("irods_rule_engine_plugin_python::") + __PRETTY_FUNCTION__ + " bad_any_cast : " + e.what();
            return ERROR(-1, err_msg);
        }

        return SUCCESS();
    }

In the Python rule engine plugin, it:

-   Imports the Python core namespace
-   Imports the function rule\_name from the Python core namespace as
    rule\_function
-   Calls serialize\_parameter\_list\_of\_boost\_anys\_to\_python\_list
    on the input parameters to convert them from a C++ list of
    boost::anys to a Python list
-   Calls the Python function rule\_function with 2 parameters: The
    input parameters as a Python list, and the rule engine callback
-   Converts the parameter list from a Python list back to a list of
    boost::anys so they can be used as output parameters elsewhere

`exec_rule_text`
----------------

The exec\_rule\_text function is called when a rule is executed using
irule.

    irods::error
    exec_rule_text(irods::default_re_ctx&, std::string rule_text, std::list& rule_arguments_cpp, irods::callback effect_handler) {
    try {
            LOG(rule_text);
            // Extract the rule input parameters and output parameter from rule_arguments_cpp
            auto itr = begin(rule_arguments_cpp);
            ++itr;  // skip tuple
            ++itr;  // skip callback
            msParamArray_t* ms_params = boost::any_cast(*itr);
            ++itr;  // skip msparam
            std::string out_desc = *boost::any_cast(*itr);

            // Converts the input parameters and output parameter to a Python dict
            bp::dict rule_arguments_python;

            int i = 0;
            for (i = 0; i < ms_params->len; i++) {
                msParam_t* mp = ms_params->msParam[i];
                std::string label(mp->label);
                LOG("msParam : ", mp->inOutStruct);

                if (mp->type == NULL) {
                    rule_arguments_python[label] = NULL;
                    LOG("msParam : ", mp->inOutStruct);
                } else if (strcmp(mp->type, DOUBLE_MS_T) == 0) {
                    double* tmpDouble = (double*) mp->inOutStruct;
                    LOG("msParam : ", tmpDouble);
                    rule_arguments_python[label] = tmpDouble;
                } else if (strcmp(mp->type, INT_MS_T) == 0) {
                    int* tmpInt = (int*) mp->inOutStruct;
                    LOG("msParam : ", tmpInt);
                    rule_arguments_python[label] = tmpInt;
                } else if (strcmp(mp->type, STR_MS_T) == 0) {
                    char* tmpChar = (char*) mp->inOutStruct;
                    std::string tmpStr(tmpChar);
                    LOG("msParam : ", tmpStr);
                    rule_arguments_python[label] = tmpStr;
               } else if (strcmp(mp->type, DATETIME_MS_T) == 0) {
                    rodsLong_t* tmpRodsLong = (rodsLong_t*) mp->inOutStruct;
                    LOG("msParam : ", tmpRodsLong);
                    rule_arguments_python[label] = tmpRodsLong;
                }
            }

            LOG("Passed msParams list");
            rule_arguments_python[out_desc] = NULL;

            bp::object main_module = bp::import("__main__");
            bp::object main_namespace = main_module.attr("__dict__");

            // Define the variables defined in PYTHON_GLOBALS in the Python core namespace
            for (const auto& it : PYTHON_GLOBALS) {
                main_namespace[it.first] = it.second;
            }

            // Format the rule_text so that it is valid Python code
            // Delete first line ("@external")
            std::string trimmed_rule = rule_text.substr(rule_text.find_first_of('\n')+1);
            LOG("trimmed rule text : ", trimmed_rule);
            // Extracts the rule_name from the formatted rule text
            // Extract rule name ("def RULE_NAME(parameters):")
            std::string rule_name = trimmed_rule.substr(4, trimmed_rule.find_first_of('(')-4);
            LOG("rule name : ", rule_name);
            bp::exec(trimmed_rule.c_str(), main_namespace, main_namespace);
            bp::object rule_function = main_module.attr(rule_name.c_str());

            // Calls the Python function rule_function with 2 parameters: The input parameters as a
            //     Python dict, and the rule engine callback
            CallbackWrapper callback_wrapper{effect_handler};
            bp::object outVal = rule_function(rule_arguments_python, callback_wrapper);

        } catch (const bp::error_already_set&) {
            const std::string formatted_python_exception = extract_python_exception();
            LOG("caught python exception\n", formatted_python_exception);
            std::string err_msg = std::string("irods_rule_engine_plugin_python::") + __PRETTY_FUNCTION__ + " Caught Python exception.\n" + formatted_python_exception;
            return ERROR(-1, err_msg);
        } catch (const boost::bad_any_cast& e) {
            LOG("bad any cast : ", e.what());
            std::string err_msg = std::string("irods_rule_engine_plugin_python::") + __PRETTY_FUNCTION__ + " bad_any_cast : " + e.what();
            return ERROR(-1, err_msg);
        }

        return SUCCESS();
    }

In the Python rule engine plugin, it:

-   Extracts the rule input parameters and output parameter from
    rule\_arguments\_cpp
-   Converts the input parameters and output parameter to a Python dict
-   Defines the variables defined in PYTHON\_GLOBALS in the Python core
    namespace
-   Formats the rule\_text so that it is valid Python code
-   Extracts the rule\_name from the formatted rule text
-   Calls the Python function rule\_function with 2 parameters: The
    input parameters as a Python dict, and the rule engine callback

`exec_rule_expression`
----------------------

The exec\_rule\_expression function is called when a block of code is
run from the delay or remote execution queues.

    irods::error
    exec_rule_expression(irods::default_re_ctx&, std::string rule_text, std::list& rule_arguments_cpp, irods::callback effect_handler) {
        try {
            LOG(rule_text);

            // Extract the rule input parameters and output parameter from rule_arguments_cpp
            auto itr = begin(rule_arguments_cpp);
            ++itr;  // skip tuple
            ++itr;  // skip callback
            msParamArray_t* ms_params = boost::any_cast(*itr);
            ++itr;  // skip msparam
            std::string out_desc = *boost::any_cast(*itr);

            // Convert the input parameters and output parameter to a Python dict
            bp::dict rule_arguments_python;

            int i = 0;
            for (i = 0; i < ms_params->len; i++) {
                msParam_t* mp = ms_params->msParam[i];
                std::string label(mp->label);
                LOG("msParam : ", mp->inOutStruct);

                if (mp->type == NULL) {
                    rule_arguments_python[label] = NULL;
                    LOG("msParam : ", mp->inOutStruct);
                } else if (strcmp(mp->type, DOUBLE_MS_T) == 0) {
                    double* tmpDouble = (double*) mp->inOutStruct;
                    LOG("msParam : ", tmpDouble);
                    rule_arguments_python[label] = tmpDouble;
                } else if (strcmp(mp->type, INT_MS_T) == 0) {
                    int* tmpInt = (int*) mp->inOutStruct;
                    LOG("msParam : ", tmpInt);
                    rule_arguments_python[label] = tmpInt;
                } else if (strcmp(mp->type, STR_MS_T) == 0) {
                    char* tmpChar = (char*) mp->inOutStruct;
                    std::string tmpStr(tmpChar);
                    LOG("msParam : ", tmpStr);
                    rule_arguments_python[label] = tmpStr;
                } else if (strcmp(mp->type, DATETIME_MS_T) == 0) {
                    rodsLong_t* tmpRodsLong = (rodsLong_t*) mp->inOutStruct;
                    LOG("msParam : ", tmpRodsLong);
                    rule_arguments_python[label] = tmpRodsLong;
                }
            }

            LOG("Passed msParams list");
            rule_arguments_python[out_desc] = NULL;

            bp::object main_module = bp::import("__main__");
            bp::object main_namespace = main_module.attr("__dict__");

            // Define the variables defined in PYTHON_GLOBALS in the Python core namespace
            for (const auto& it : PYTHON_GLOBALS) {
                main_namespace[it.first] = it.second;
            }
        
            // Formats the rule_text so that it is a valid Python function
            // Add def expressionFcn(rule_args, callback):\n to start of rule text
            std::string rule_name = "expressionFcn";
            std::string fcn_text = "def expressionFcn(rule_args, callback):\n" + rule_text;
            // Replace every '\n' with '\n '
            boost::replace_all(fcn_text, "\n", "\n ");
            bp::exec(fcn_text.c_str(), main_namespace, main_namespace);
            bp::object rule_function = main_module.attr(rule_name.c_str());
            
            // Call the Python function rule_function with 2 parameters: The input parameters as a 
            // Python dict, and the rule engine callback
            CallbackWrapper callback_wrapper{effect_handler};
            bp::object outVal = rule_function(rule_arguments_python, callback_wrapper);

        } catch (const bp::error_already_set&) {
            const std::string formatted_python_exception = extract_python_exception();
            LOG("caught python exception\n", formatted_python_exception);
            std::string err_msg = std::string("irods_rule_engine_plugin_python::") + __PRETTY_FUNCTION__ + " Caught Python exception.\n" + formatted_python_exception;
            return ERROR(-1, err_msg);
        } catch (const boost::bad_any_cast& e) {
            LOG("bad any cast : ", e.what());
            std::string err_msg = std::string("irods_rule_engine_plugin_python::") + __PRETTY_FUNCTION__ + " bad_any_cast : " + e.what();
            return ERROR(-1, err_msg);
        }

        return SUCCESS();
    }

In the Python rule engine plugin, it:

-   Extracts the rule input parameters and output parameter from
    rule\_arguments\_cpp
-   Converts the input parameters and output parameter to a Python dict
-   Defines the variables defined in PYTHON\_GLOBALS in the Python core
    namespace
-   Formats the rule\_text so that it is a valid Python function
-   Calls the Python function rule\_function with 2 parameters: The
    input parameters as a Python dict, and the rule engine callback

The RuleCallWrapper struct
--------------------------

The RuleCallWrapper struct wraps a call to a rule in the Python Rule
Engine plugin, and does the heavy lifting in the exec\_rule,
exec\_rule\_text, and exec\_rule\_expression functions.

    struct RuleCallWrapper {
        RuleCallWrapper(irods::callback& effect_handler, std::string rule_name)
            : effect_handler{effect_handler}             
            , rule_name{rule_name}
            {}
        irods::callback& effect_handler;
        std::string rule_name;
        static bp::dict call(const bp::tuple& args, const bp::dict& kwargs) {
            RuleCallWrapper& self = bp::extract(args[0]);
            auto time = std::time(nullptr);
            LOG("rule_name: ", self.rule_name);

            // Extract the rule’s parameter list from Python and converts it to a list of std::maps
            //     using convert_python_iterable_to_list_of_maps(rule_args_python)
            bp::tuple rule_args_python = bp::extract(args[bp::slice(1, bp::len(args))]);

            std::list< std::map > rule_args_maps = convert_python_iterable_to_list_of_maps(rule_args_python);
            
            std::list rule_args_cpp;

            std::stringstream log_msg;

            log_msg << "REAL INPUT [";
            for (auto& itr : rule_args_maps) {
                if (itr[ELEMENT_TYPE] == STRING_TYPE) {
                    log_msg << itr[STRING_VALUE_KEY] << ", ";
                    rule_args_cpp.push_back(&itr[STRING_VALUE_KEY]);
                } else {
                    log_msg << itr[ELEMENT_TYPE] << "{";
                    for (std::map::iterator mapItr = itr.begin(); mapItr != itr.end(); ++mapItr) {
                        log_msg << mapItr->first << " : " << mapItr->second << ", ";
                    }
                    log_msg << "}, ";


                    // “Deserialize” input data types into iRODS msParam types - This code does this
                    //     for genQueryInp and genQueryOut. Here, a Python dictionary is parsed to fill
                    //     objects of genQueryInp and genQueryOut types.
                    msParam_t* tmpMsParam = (msParam_t*) malloc(sizeof(*tmpMsParam));
                    memset(tmpMsParam, 0, sizeof(*tmpMsParam));

                    // TODO Refactor into irods_re_deserialization?
                    if (itr[ELEMENT_TYPE] == PYTHON_GLOBALS.at("PYTHON_GENQUERYINP_MS_T")) {
                       try {
                           genQueryInp_t* genQueryInp = (genQueryInp_t*) malloc(sizeof(genQueryInp_t));
                           memset(genQueryInp, 0, sizeof(genQueryInp_t));
                                
                           std::map selectInpMap;
                           std::map sqlCondInpMap;
                           std::map condInputMap;
                                
                           for (std::map::iterator map_itr = itr.begin(); map_itr != itr.end(); ++map_itr) {
                               if (map_itr->first == "maxRows")
                                   genQueryInp->maxRows = boost::lexical_cast(map_itr->second);
                               else if (map_itr->first == "continueInx")
                                   genQueryInp->continueInx = boost::lexical_cast(map_itr->second);
                               else if (map_itr->first == "rowOffset") 
                                   genQueryInp->rowOffset = boost::lexical_cast(map_itr->second);
                               else if (map_itr->first == "options")
                                   genQueryInp->options = boost::lexical_cast(map_itr->second);
                               else if (map_itr->first.substr(0,7) == "select_") {
                                   int selectInx = boost::lexical_cast(map_itr->first.substr(7, map_itr->first.size()));
                                   int selectVal = boost::lexical_cast(map_itr->second);
                                   selectInpMap[selectInx] = selectVal;
                               } else if (map_itr->first.substr(0,6) == "where_") {
                                   int sqlCondInx = boost::lexical_cast(map_itr->first.substr(6, map_itr->first.size()));
                                   sqlCondInpMap[sqlCondInx] = map_itr->second;
                               } else if (map_itr->first == "ELEMENT_TYPE") {
                                   continue;
                               } else {
                                   // Any other key came from the condInput keyValPair
                                   condInputMap[map_itr->first] = map_itr->second;
                               }
                           }

                           for (auto& tmp : selectInpMap) {
                               addInxIval(&genQueryInp->selectInp, tmp.first, tmp.second);
                           }

                           for (auto& tmp: sqlCondInpMap) {
                               addInxVal(&genQueryInp->sqlCondInp, tmp.first, tmp.second.c_str());
                           }

                           for (auto& tmp: condInputMap) {
                               addKeyVal(&genQueryInp->condInput, tmp.first.c_str(), tmp.second.c_str());
                           }

                           fillMsParam(tmpMsParam, NULL, GenQueryInp_MS_T, genQueryInp, NULL);

                       } catch (std::exception&) {
                           std::string error_msg = "Bad any cast";
                           PyErr_SetString(PyExc_RuntimeError, error_msg.c_str());
                           bp::throw_error_already_set();
                      }
                  } else if (itr[ELEMENT_TYPE] == PYTHON_GLOBALS.at("PYTHON_GENQUERYOUT_MS_T")) {
                       try {
                           genQueryOut_t* genQueryOut = (genQueryOut_t*) malloc(sizeof(genQueryOut_t));
                           memset(genQueryOut, 0, sizeof(genQueryOut_t));

                           std::map attriInxMap;
                           std::map lenMap;
                           std::map valueMap;

                           for (std::mapgt;::iterator map_itr = itr.begin(); map_itr != itr.end(); ++map_itr) {
                               std::string firstVal = map_itr->first;
                               std::string secondVal = map_itr->second;
                               if (map_itr->first == "rowCnt")
                                    genQueryOut->rowCnt = boost::lexical_cast(map_itr->second);
                               else if (map_itr->first == "attriCnt")
                                    genQueryOut->attriCnt = boost::lexical_cast(map_itr->second);
                               else if (map_itr->first == "continueInx")
                                    genQueryOut->continueInx = boost::lexical_cast(map_itr->second);
                               else if (map_itr->first == "totalRowCount")
                                   genQueryOut->totalRowCount = boost::lexical_cast(map_itr->second);
                               else if (map_itr->first.substr(0,9) == "attriInx_") {
                                   int colInx = boost::lexical_cast(map_itr->first.substr(9, map_itr->first.size()));
                                   int attriInx = boost::lexical_cast(map_itr->second);
                                   attriInxMap[colInx] = attriInx;
                               } else if (map_itr->first.substr(0,4) == "len_") {
                                   int colInx = boost::lexical_cast(map_itr->first.substr(4, map_itr->first.size()));
                                   int len = boost::lexical_cast(map_itr->second);
                                   lenMap[colInx] = len;
                               } else if (map_itr->first.substr(0,6) == "value_") {
                                   std::string attribute_row = map_itr->first.substr(6, map_itr->first.size());
                                   valueMap[attribute_row] = map_itr->second;
                               } else
                                   continue;
                            }

                            for (int i = 0; i < genQueryOut->attriCnt; ++i) {
                                genQueryOut->sqlResult[i].attriInx = attriInxMap[i];
                                genQueryOut->sqlResult[i].len = lenMap[i];
                                int len = lenMap[i];
                                genQueryOut->sqlResult[i].value = (char *) malloc(genQueryOut->rowCnt * len);
                                for (auto& tmp: valueMap) {
                                    std::vector tokens;
                                    boost::split(tokens, tmp.first, boost::is_any_of("_"));
                                    int colInx = boost::lexical_cast(tokens[1]);
                                    if (colInx == i) {
                                        int rowInx = boost::lexical_cast(tokens[0]);
                                        char *valuePtr = genQueryOut->sqlResult[i].value + rowInx * len;
                                        snprintf(valuePtr, len, "%s", tmp.second.c_str());
                                    }
                                }
                            }

                            fillMsParam(tmpMsParam, NULL, GenQueryOut_MS_T, genQueryOut, NULL);

                       } catch (std::exception&) {
                           std::string error_msg = "Bad any cast";
                           PyErr_SetString(PyExc_RuntimeError, error_msg.c_str());
                           bp::throw_error_already_set();
                       }
                   }
     
                   rule_args_cpp.push_back(tmpMsParam);
                }
            }
            LOG(log_msg.str(), "]");

            // Call the effect_handler with the rule_name and the deserialized input parameters, 
            //     returning an irods::error object
            irods::error retVal = self.effect_handler(self.rule_name, irods::unpack(rule_args_cpp));

            // Check the returned irods::error object to see if an exception needs to be thrown
            if (!retVal.ok()) {
                if ((retVal.code() != CAT_NO_ROWS_FOUND) && (retVal.code() != CAT_SUCCESS_BUT_WITH_NO_INFO)) {
                   std::string returnString = IRODS_ERROR_PREFIX + boost::lexical_cast(retVal.code()) + "] " + retVal.result().c_str();
                    PyErr_SetString(PyExc_RuntimeError, returnString.c_str());
                    bp::throw_error_already_set();
                }
            }

            log_msg.str(std::string{}); log_msg.clear();
            log_msg << "output [";
            bp::dict ret;

            // Populates the returned object with the irods::error code, the irods::error status, 
            //     and the serialized parameter values
            ret[PYTHON_GLOBALS.at("PYTHON_RE_RET_CODE")] = retVal.code();
            ret[PYTHON_GLOBALS.at("PYTHON_RE_RET_STATUS")] = retVal.status();

            bp::list retList;
            std::list rule_returns_cpp;

            for (auto&& itr : rule_args_cpp) {
                if ((itr.type() == typeid(std::string)) || (itr.type() == typeid(std::string*))) {
                    rule_returns_cpp.push_back(itr);
                } else if (itr.type() == typeid(msParam_t*)) {
                    // convert to subtype
                    msParam_t* tmpMsParam = boost::any_cast(itr);
                    char* realType = tmpMsParam->type;
                    if (strcmp(realType, RodsObjStat_MS_T) == 0) {
                        rodsObjStat_t* tmpRodsObj = (rodsObjStat_t*) tmpMsParam->inOutStruct;
                        rule_returns_cpp.push_back(tmpRodsObj);
                    } else if (strcmp(realType, INT_MS_T) == 0) {
                        int* tmpInt = (int*) tmpMsParam->inOutStruct;
                        rule_returns_cpp.push_back(tmpInt);
                    } else if (strcmp(realType, DOUBLE_MS_T) == 0) {
                        double* tmpDouble = (double*) tmpMsParam->inOutStruct;
                        rule_returns_cpp.push_back(tmpDouble);
                    } else if (strcmp(realType, GenQueryInp_MS_T) == 0) {
                        genQueryInp_t* tmpGenQueryInp = (genQueryInp_t*) tmpMsParam->inOutStruct;
                        rule_returns_cpp.push_back(tmpGenQueryInp);
                    } else if (strcmp(realType, GenQueryOut_MS_T) == 0) {
                        genQueryOut_t* tmpGenQueryOut = (genQueryOut_t*) tmpMsParam->inOutStruct;
                        rule_returns_cpp.push_back(tmpGenQueryOut);
                    } // TODO Need else if for each supported msParam type
                    else {
                        std::string error_msg = "Unsupported msParam type :";
                        error_msg += realType;
                        PyErr_SetString(PyExc_RuntimeError, error_msg.c_str());
                        bp::throw_error_already_set();
                    }
                        
                } else {
                    std::string error_msg = "Unsupported return type :";
                    error_msg += itr.type().name();
                    PyErr_SetString(PyExc_RuntimeError, error_msg.c_str());
                    bp::throw_error_already_set();
                }
            }
                
            retList = serialize_parameter_list_of_boost_anys_to_python_list(rule_returns_cpp);

            ret[PYTHON_GLOBALS.at("PYTHON_RE_RET_OUTPUT")] = retList;
        
            // Return this object to Python
            return ret;
        }
    };

It:

-   Extracts the rule’s parameter list from Python and converts it to a
    list of std::maps using
    convert\_python\_iterable\_to\_list\_of\_maps(rule\_args\_python)
-   “Deserializes” input data types into iRODS msParam types - This code
    does this for genQueryInp and genQueryOut. This deserialization step
    is necessary for any input parameters that cannot be represented as
    strings. Here, a Python dictionary is parsed to fill objects of
    genQueryInp and genQueryOut types.
-   Calls the effect\_handler with the rule\_name and the deserialized
    input parameters, returning an irods::error object
-   Checks the returned irods::error object to see if an exception needs
    to be thrown
-   Populates the returned object with the irods::error code, the
    irods::error status, and the serialized parameter values
-   Returns this object to Python

