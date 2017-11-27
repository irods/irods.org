Title: Initial iRODS Audit (AMQP) Rule Engine Plugin is released
Date: 2017-11-28 9:04
Author: Terrell Russell
Slug: initial-irods-audit-amqp-rule-engine-plugin-is-released
Status: published


We are happy to announce the release of the [iRODS Audit (AMQP) Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_audit_amqp).  This release is the product of more than a year's worth of work to prepare the rule engine plugin framework and extensive testing with multiple message brokers across varying operating systems.

This release requires the recently released iRODS 4.2.2 and is already available in both the APT and YUM repositories hosted by RENCI.  A [prototype of this code used in December 2016]({filename}/posts/auditing-irods-with-the-audit-plugin-and-elastic-stack.md) and [demonstrated at TRiRODS a week later]({filename}/posts/trirods-gorods-and-audit-amqp-plugin-demos.md).

<iframe width="560" height="315" src="https://www.youtube.com/embed/vjNt74bgKXY?start=2125" frameborder="0" allowfullscreen></iframe>

The Audit plugin has been tested with Apache ActiveMQ 5.13.2 and 5.14.1 and RabbitMQ 3.6.12 on Ubuntu 12, 14, 16, and CentOS 6 and 7.  It uses the AMQP 1.0 standard to encode the messages, potentially for every policy enforcement point (PEP) that fires within the rule engine plugin framework.  A PEP can be fired for every operation across every plugin type (e.g. database calls, network activity, resource/storage activity, etc.) and the generated AMQP message will contain the full context from the point of call.  For example, with the default `audit_.*` regex configured, a basic `ils` will cause the Audit plugin to emit over 1200 AMQP messages, each containing actionable information about what part of the iRODS logic triggered that event.  An `iget` will generate messages containing additional information about logical paths, physical paths, filesize and more.

The ability to gather, correlate, and interrogate messages from every operation means that a full audit (and very powerful reporting capabilities) become possible.  The original demonstration used the following setup to build a dashboard of live activity within the iRODS Zone.

<div class="full_image"><img src="{filename}/images/amqp_kibana.jpg" /></div>

We demonstrated a few of these possibilities at the [SC17 workshop in Denver]({filename}/pages/sc17.html) a couple weeks ago.

We are very interested in hearing about the work you may do with this type of capability.  We hope to see dashboards, standardized reporting, and security audits built from this real-time data coming from live iRODS servers.

