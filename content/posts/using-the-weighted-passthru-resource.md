Title: Using the weighted passthru resource
Date: 2015-08-10 16:26
Author: Terrell Russell
Slug: using-the-weighted-passthru-resource
Status: published

In a situation where one server in an iRODS Zone has a public IP and
another server in an iRODS Zone can only have a private IP, is it
possible to configure the Zone to allow puts and gets to the public IP,
but still keep replicas on both?

Yes.

With the following configuration, one can control the priority of reads
and writes to particular resources (and therefore, particular physical
and network locations).

~~~~ 
$ ilsresc
replResc:replication
├── pt-private:passthru
│   └── child-private
└── pt-public:passthru
    └── child-public
~~~~

<!--more-->

The weighted passthru resource can be used to manipulate the read/write
votes of the children of a replication resource. One can then
specifically direct an initial put to the public server and have the
replication occur from server-to-server and not require a direct
connection between the client and the private resource server.

Here are a series of commands confirming replica 0 (the first replica)
is on the public resource.

First I create a replication resource, two unixfilesystem resources to
simulate the storage vaults on the public and private servers, and two
passthru resources. Note the weights on the public passthru multiply the
votes from its child by 1.1x for both read and write and the private
passthru multiply the votes from its child by 0.9x.

~~~~ 
$ iadmin mkresc replResc replication
$ iadmin mkresc child-public unixfilesystem `hostname`:/tmp/child-public
$ iadmin mkresc child-private unixfilesystem `hostname`:/tmp/child-private
$ iadmin mkresc pt-public passthru '' 'read=1.1;write=1.1'
$ iadmin mkresc pt-private passthru '' 'read=0.9;write=0.9'
~~~~

Then I wire together the hierarchy with the public and private sides as
children of the replication resource:

~~~~ 
$ iadmin addchildtoresc replResc pt-public
$ iadmin addchildtoresc replResc pt-private
$ iadmin addchildtoresc pt-public child-public
$ iadmin addchildtoresc pt-private child-private
~~~~

This is the finished hierarchy:

~~~~ 
$ ilsresc
demoResc
replResc:replication
├── pt-private:passthru
│   └── child-private
└── pt-public:passthru
    └── child-public
~~~~

I upload a single file into the replication resource:

~~~~ 
$ iput -R replResc VERSION.json
~~~~

I show that there are two replicas, with the first replica (numbered 0)
on the public resource and the second replica (numbered 1) on the
private resource:

~~~~ 
$ ils -L VERSION.json
/tempZone/home/rods:
  rods              0 replResc;pt-public;child-public          105 2015-07-30.11:19 & VERSION.json
        generic    /tmp/child-public/home/rods/VERSION.json
  rods              1 replResc;pt-private;child-private          105 2015-07-30.11:19 & VERSION.json
        generic    /tmp/child-private/home/rods/VERSION.json
~~~~

Then, I change the context string of the public weighted passthru
resource to \*lose\* the vote (by changing the weights to be less than
the 0.9x still applied to the child of the private weighted passthru
resource).

~~~~ 
$ iadmin modresc pt-public context "read=0.8;write=0.8"
~~~~

I put a new file:

~~~~ 
$ iput -R replResc RELEASE_NOTES
~~~~

And then confirm replica 0 (the first replica) of the new file is on the
private resource and the second replica (numbered 1) is on the public
resource:

~~~~ 
$ ils -L RELEASE_NOTES
  rods              0 replResc;pt-private;child-private         1139 2015-07-30.11:28 & RELEASE_NOTES
        generic    /tmp/child-private/home/rods/RELEASE_NOTES
  rods              1 replResc;pt-public;child-public         1139 2015-07-30.11:28 & RELEASE_NOTES
        generic    /tmp/child1/home/rods/RELEASE_NOTES
~~~~

The weighted passthru resource gives you fine-grained control over which
children receive (and provide) dataObjects.

Also, note that nothing done here required stopping, or restarting any
of the iRODS servers in the Zone. These context strings are read on
every new instantiation of an Agent (on every connection). A change of
the value is effective immediately, for all new connections to iRODS.

If you have an interesting use case, or this brings up new questions for
you, please do not hesitate to get in touch. We'd love to hear what
you're doing.
