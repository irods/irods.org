Title: First Things First
Date: 2014-06-10 14:52
Author: Dan Bedard
Slug: first-things-first
Status: published

A few weeks ago, I was asked to blog about my experiences using and
“socializing” iRODS. So, that’s what this blog, “Control Your Data," is
about.

<!--more-->

I suppose I should introduce myself. My name is Dan Bedard. I am a
“market development manager” for iRODS at RENCI. It’s kind of a
combination of sales engineering and marketing. I am trying to teach
people who don’t know about iRODS what it is, and I am trying to help
people who do know about iRODS implement and maintain it.

So, I’ve been (back) at RENCI for a little over a month now, and I was
looking over my notes for my first week. That was when I developed my
first explanation for what iRODS is. If you read our Powerpoint slides,
you’ll see that that explanation continues to evolve a bit as we find
better ways to explain this to different audiences. But here’s what I
came up with during week 1.

The basics:

iRODS makes it easy to set up a data grid—making a whole bunch of hard
drives, cloud storage, tape drives, whatever, spread all over the world,
look like a single hard drive. (Actually, I found out it’s a lot more
flexible than that, but take this as a starting point.)

iRODS has a metadata catalog. The metadata catalog is a database that
makes it easier to organize and locate data. It also provides hooks for
the rules engine. Keep reading.

iRODS has a rules engine. The grid acts like a traffic cop, and you use
the rules engine to explain the laws to the grid. Another way to explain
this is that you can use the rules engine to make any agent (servers and
clients) capable of initiating any action, based on any trigger. This is
how iRODS handle access control. There are rules that specify what users
are allowed to do to data. This is also how you could use iRODS to
automate things like backups and data migration.

If you hang around iRODS people, one thing you’ll hear a lot about is
"policies." Policies are the real-world descriptions of what you want to
happen, like "We don’t want Alice to have access to this file," or "We
do backups to /tempZone/tapeLibrary every Friday night at 8pm."

The rule engine has its own interpreted programming language that you
use to implement policies.

You’ll also hear about microservices. Microservices are programs that
the rule engine runs in the course of implementing policies. There are
over 350 existing microservices that handle things like access control,
adding metadata to the iCAT database, and a whole suite of other
functions. There’s even a book on microservices, though a new version of
the book for iRODS 4.0 is due out in the coming weeks.

That’s my short introduction to iRODS. Here are some additional ways to
learn about iRODS:

Join iRODS chat (<https://groups.google.com/forum/#!forum/iROD-Chat>):
This is an active public forum that provides support for iRODS.

Browse through the wiki
(<http://wiki.irods.org/index.php/IRODS:Data_Grids,_Digital_Libraries,_Persistent_Archives,_and_Real-time_Data_Systems>).
Note: this material is specific to iRODS 3.3 and earlier. There have
been some significant changes incorporated into 4.0 and going forward.
Nevertheless, until we can release updated documentation, the wiki is
often a good place to start.

And if you’re really interested, you can track the status of the source
code (and report bugs) on github.
<https://github.com/irods/irods/issues>

TIFN. Later this week we’ll dig into my first few iRODS installs.
