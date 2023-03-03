Title: An Automated Ingest and Sync Policy Example
Date: 2018-07-09 06:30
Author: Terrell Russell
Slug: an-automated-ingest-and-sync-policy-example
Status: published


iRODS deployments are nearly always unique.  Every organization has a different set of use cases, different existing infrastructure (instruments, storage, networking, compute), and different plans regarding maintenance and life cycle management for both their data and their processes.

Our goal as a Consortium is to survey the landscape, understand the requests for different features and disparate use cases... but hear the similarities.  We aim to see the common patterns and abstract the bits and pieces that can be reused and repurposed for the next deployment or the next industry.


### Capabilities

An iRODS Capability is defined as a packaged solution that requires only configuration to deploy.

The iRODS Consortium has identified eight capabilities that constitute the balance of use cases we see.  These include:

- Automated Ingest
- Storage Tiering
- Compliance
- Publishing
- Provenance
- Integrity
- Auditing
- Indexing

Organizations that come to the Consortium for help or advice need some subset of these eight capabilities to solve their data management issues.  If you have others, please let us know.

<a href="{static}/images/capabilities.png" target="_blank" ><img src="{static}/images/capabilities.png" class="tech_diagram"></a>

The first packaged capability we released earlier this year was the [Storage Tiering Framework]({filename}/posts/irods-storage-tiering-framework-is-updated.md).

Today, we are writing about the [Automated Ingest Framework](https://github.com/irods/irods_capability_automated_ingest), which represents the second packaged capability, alongside some example policy.


### Automated Ingest

Two such patterns we have identified, and have now abstracted, involve the onboarding of new or updated data - and then its immediate synchronization into the main dataflow of an organization's data management infrastructure.  We have seen one or both of these patterns from nearly every one of our new proofs-of-concept and potential members in the last year.

The first is the "Landing Zone", whereby instruments (or other data sources) are placing data that needs to be ingested into iRODS and then the original is moved aside.

The second is the "Filesystem Scanner" in which an organization's existing filesystem is to be maintained as the source of truth and updates are to be mirrored into iRODS.  This second scenario occurs when an organization with existing data decides to deploy iRODS.  This is the cold start problem.  They need to register what they have so they can find it later.  It also allows an organization with its own history and best practices to continue using those practices without changing their scientists' and other employees work habits or toolchains.

Regardless of how the [Automated Ingest Framework](https://github.com/irods/irods_capability_automated_ingest) is configured, once new data hits the iRODS policy engine, events are triggered and action can be taken.

That action is defined by policy, written and deployed as rules; in this case, in Python.

### Example Policy - Sync to Destination Resource

We have written iRODS policy (a set of rules) to encapsulate this behavior and make it reusable for others. The [code can be found here](https://github.com/irods/irods_policy_examples/blob/master/automated_ingest_sync_to_destination_resource.py).

The policy is written in Python and requires the use of the [iRODS Python Rule Engine Plugin](https://github.com/irods/irods_rule_engine_plugin_python).

There are four use cases captured by this policy:

```
# POLICY USE CASES
# 0 - New data arrives in the scanned file system and is registered into the SCANNED_RESOURCE
#     The newly registered data will be replicated to the DESTINATION_RESOURCE_ROOT
#
# 1 - New identical data arrives in the scanned file system that is already registered elsewhere
#     Register this new data into SCANNED_RESOURCE as a replica of the existing data
#
# 2 - New very similar data arrives in the scanned file system that is already registered elsewhere
#     Register this new data into SCANNED_RESOURCE as a replica of the existing data
#     Since the file sizes are not identical, update all the other replicas
#
# 3 - Local modifications are made to existing replicas on SCANNED_RESOURCE
#     Detect and update all the other replicas
```

There are only three variables to be configured for a particular deployment:
```
# POLICY CONFIGURATION VARIABLES
SCANNED_RESOURCE = 'example_scanned_resc'
DESTINATION_RESOURCE_ROOT = 'example_dest_resc_root'
LIST_OF_DESTINATION_RESOURCE_LEAVES = ['a','b','c']
```

These use cases are implemented with three helper functions and [two dynamic policy enforcment points (or dynpeps)](https://docs.irods.org/4.2.3/plugins/dynamic_policy_enforcement_points/):

```
# Given a condInput from a policy enforcement point
# Search for a given key and return the value
def get_value_for_key(kvpairs, key):
```

```
# Given a logical path and a replica number
# Perform a general query to determine the resource name
def get_resource_name_by_replica_number(callback, logical_path, replica_number):
```

```
# Given a logical path and a resource name
# Perform a general query to determine the replica size
def get_existing_replica_size_from_destination(callback, logical_path):
```

```
# Dynamic Policy Enforcement Point for rsPhyPathReg
# Required for Use Cases 0, 1, 2
def pep_api_phy_path_reg_post(rule_args, callback, rei):
```

```
# Dynamic Policy Enforcement Point for rsModDataObjMeta
# Required for Use Case 3
def pep_api_mod_data_obj_meta_post(rule_args, callback, rei):
```

### The Front Door

After all this, the data is registered and now resident in the catalog in iRODS.  From here, it's a matter of additional policy and configuration for things like:

 - Disaster Recovery
 - Data Distribution
 - Replication for Durability
 - Archive to Multi-Cloud
 - Replication for Locality of Reference

The above set of example policy will afford an organization the ability to treat an existing filesystem as the source of truth, keep its existing toolchains and professional work habits in tact, but also can make the data discoverable, actionable, backed up, indexed, and available for automated processing by powerful workflows and any other custom policy you may write.  Any work products derived from this data can be annotated with references back to the source data providing important provenance and audit trails required by regulatory agencies or publishing rules.

Getting data ingested in an automated way is the first step towards taking control of your data and providing confidence to everyone who needs to use it.

<a href="{static}/images/data_lifecycle_diagram.jpg" target="_blank" ><img src="{static}/images/data_lifecycle_diagram.jpg" class="tech_diagram"></a>
