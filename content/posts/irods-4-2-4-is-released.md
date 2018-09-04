Title: iRODS 4.2.4 is released
Date: 2018-09-03 23:00
Author: Terrell Russell
Slug: irods-4-2-4-is-released
Status: published

The iRODS Consortium and RENCI are pleased to announce iRODS 4.2.4.

This is largely a bugfix release focused on irsync/iput/icp consistency and delayed/remote rule behavior.

This release consists of [44 commits from 10
contributors](https://github.com/irods/irods/compare/4.2.3...4.2.4) and
[closed 31 issues marked for 4.2.4](https://github.com/irods/irods/issues?q=milestone%3A4.2.4)
and an additional [6 closed issues to be included in the upcoming 4.1.12 release](https://github.com/irods/irods/issues?utf8=%E2%9C%93&q=milestone%3A4.1.12%20closed%3A2018-06-01..2018-09-03).

The latest binary packages for CentOS7, Ubuntu14, and Ubuntu16 are available at <https://packages.irods.org/>.

In addition, a deprecation has been declared for 'iexecmd'.

<!--more-->

[The release notes include](https://docs.irods.org/4.2.4/release_notes/):

> **Bug Fixes**
>
> - Fixes for collections named . [\#2010] [\#3543]
>
> - Clean up stale hierarchy information in catalog [\#3853] [\#3981]
>
> - Fix for rebalancing files created with ibun -x [\#3855]
>
> - Fix for delayed rule behavior [\#3906]
>
> - Fix for imkdir and long paths with spaces [\#3913]
>
> - Fix for parallel delayed rule execution [\#3941]
>
> - Marked as workaround and question answered [\#3961] [\#4020]
>
> - Fix for icp [\#3962]
>
> - Fix for internal path behavior [\#3964] [\#3970]
>
> - Update documentation about trash policy [\#3969]
>
> - Fix for ireg --repl [\#3980]
>
> - Fix for irepl -Ua [\#3982]
>
> - Marked as resolved/invalid or duplicate [\#3984] [\#4024]
>
> - Update sha256sum usage documentation [\#3985]
>
> - Document temporaryStorage with PEPs [\#3987]
>
> - Fixes for irsync -r and iput with symbolic links [\#3988] [\#4013] [\#4016]
>
> - Fixes for irsync/icp/iput with multiple source directories [\#3997] [\#4006]
>
> - Fix for irule and remote calls to support Python Rule Engine Plugin [\#4007]
>
> - Fix for irsync/icp/iput into root collection (/) [\#4030]
>
> - Provide templated univMSSInterface.sh by default [\#4045]
>
> - Fix for irsync into target collection [\#4048]
>
> - Fix for direct registration via keywords [\#4066]
>
> **Deprecated**
>
> - Marking iCommand iexecmd as deprecated - to be removed in 4.3.0.  Use irule and a rulefile calling msiExecCmd instead.


Alongside the core packages included in 4.2.4, the following plugins have been upgraded for compatibility:

- irods-auth-plugin-gsi
- irods-auth-plugin-krb
- irods-microservice-plugins-curl
- irods-resource-plugin-s3
- irods-rule-engine-plugin-audit-amqp
- irods-rule-engine-plugin-python
- irods-rule-engine-plugin-storage-tiering
