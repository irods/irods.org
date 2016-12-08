Title: Performance in the iRODS pluggable rule engine framework
Date: 2016-11-28 08:43
Author: Rick Skarbez
Slug: performance-in-the-irods-pluggable-rule-engine-framework
Status: published

iRODS 4.2.0 introduces the pluggable rule engine framework. The
pluggable rule engine framework allows iRODS rules to be written in
languages other than the iRODS rule language. For example, iRODS 4.2.0
ships with a compiled default policy plugin (written in C++), and a
Python rule engine plugin will be released shortly thereafter. Adding
support for additional languages is also straightforward, as one only
has to write the plugin (<1000 LOC), add the shared object to her iRODS
installation, and update server\_config.json accordingly.

**The cost of flexibility**

The pluggable rule engine framework represents a huge upgrade in
flexibility from iRODS versions 4.1.9 and previous, in which rules were
required to be written in the iRODS rule language. However, this
impressive power came at a cost, as rule invocation was between 1.6 and
1.7 times more expensive in the June 2016 branch of iRODS 4.2 compared
to iRODS 4.1.9.

**Fast and flexible**

Despite the additional power and flexibility offered by the pluggable
rule engine framework, a two-thirds performance penalty on rule
invocation is unacceptable. Our goal then became keeping the flexibility
of the pluggable rule engine framework while simultaneously improving
performance to match or improve upon iRODS 4.1.9.

June 2016
---------

(NOTE: All speed comparisons are based on timing of running the `ils`
icommand 1000x on a fresh install of iRODS. This was repeated 5 times,
and the median time was chosen as the timing value for each
configuration.)

Table 1 shows the results of early performance testing between 4.1.9 and
4.2. FORK indicates that rather than fork-and-exec’ing the irodsAgent as
in versions 4.1.9 and previous, the agents were just forked irodsServer
processes that called the runIrodsAgent function. !DYNAMIC\_PEP
indicates that the dynamic pre- and post-operation policy enforcement
points that are being introduced in iRODS 4.2 were disabled for testing.
!ENABLE\_RE indicates that the pluggable rule engine was turned off by
removing the ENABLE\_RE compile flag.

  ---------------------------- -------
  4.1.9                        1.0x
  4.2 (FORK & !ENABLE\_RE)     1.04x
  4.2 (FORK & !DYNAMIC\_PEP)   1.10x
  4.2 (FORK)                   1.16x
  4.2                          1.67x
  ---------------------------- -------

  : Table 1 - Performance comparison between iRODS 4.1.9 and iRODS 4.2
  (June 2016)

Changing to fork rather than fork-and-exec to spawn agents consistently
represented the single biggest performance improvement. Loading shared
libraries was observed to cost approximately 1/3 of the total cost of
rule invocation. Disabling part (the dynamic PEPs) or all (via
ENABLE\_RE) of the rule engine plugin framework further improved
performance to the point that it was comparable to 4.1.9, but at the
cost of new features intended for 4.2.

October 2016
------------

There were three main design decisions that enabled us to introduce the
pluggable rule engine framework in iRODS 4.2 as intended, while
achieving our goal of rule invocation performance comparable to that of
iRODS 4.1.9.

**Starting agents with fork instead of fork-exec**

Performance analysis of the iRODS 4.2 (June 2016) code revealed that a
substantial amount of time (\~30%) was being spent in loading shared
libraries at the start of each agent process. We sought to avoid this
process by forking agents off of the running iRODS server process rather
than fork-and-exec’ing a separate executable. Doing so required a
refactoring of the code to add a second long-running process responsible
for creating the agent processes that handle each rule call, but enabled
us to pay the cost of shared library loading only once, at server start,
rather than at the creation of each agent process.

**Moving the dispatcher into the rule engine framework**

In the iRODS 4.2 (June 2016) code, there was a separate rule engine
plugin to handle dispatching of rule calls to the other rule engine
plugins. This plugin was required even in the case where there was only
one rule engine plugin installed. This imposed a performance penalty, as
rule arguments needed to be packed and unpacked an additional time for
every rule call. To avoid this overhead, we moved the functionality of
the dispatcher plugin back into the core iRODS codebase.

**Implementing default policy in C++**

For many users and applications, the default policy options in iRODS are
sufficient. In this case, there is no need to incur the performance
overhead of interpreting rules written in the iRODS rule language at
runtime. Instead, we can write these rules in C++ and compile them,
improving performance and reducing potential confusion associated with
the core.re rulebase.

**Conclusions**

By forking the irodsAgent processes rather than fork-and-exec'ing them,
moving the dispatcher rule engine plugin back into the iRODS codebase,
and implementing the policy defaults in C++ rather than in the iRODS
rule language, we were able to improve performance in the 4.2
engineering preview to be comparable to performance in iRODS 4.1.9 and
still introduce the pluggable rule engine framework. Table 2 shows the
results of performance testing of the 4.2 engineering preview versus
version 4.1.9.

  ----------------------------------- --------- -------
  4.1.9                               104.57s   1.0x
  4.2 (FORK, DISPATCHER, & DEFAULT)   106.88s   1.02x
  4.2 (FORK & DISPATCHER)             123.50s   1.18x
  4.2 (FORK)                          132.47s   1.27x
  4.2                                 168.49s   1.61x
  ----------------------------------- --------- -------

  : Table 2 - Performance comparison between iRODS 4.1.9 and iRODS 4.2
  engineering preview


