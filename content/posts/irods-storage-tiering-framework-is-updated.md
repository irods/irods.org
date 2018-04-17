Title: iRODS Storage Tiering Framework is updated
Date: 2018-04-17 14:30
Author: Terrell Russell
Slug: irods-storage-tiering-framework-is-updated
Status: published

As a follow up to our [initial release announcement in February]({filename}/posts/initial-irods-storage-tiering-framework-is-released.md), today we are pleased to share the feature complete version of the [iRODS Storage Tiering Framework](https://github.com/irods/irods_capability_storage_tiering) (version 1.1.0).

This packaged storage tiering framework provides iRODS the capability of automatically moving data between identified tiers of storage within a configured tiering group.

You can install it from our [APT and YUM repositories](https://packages.irods.org).

## Feature Complete

This version of the framework adds a number of new features to the initial release:

- **Consistent Naming (tiered_storage -> storage_tiering)**

    The first release used a different naming convention.  This release brings this package along with the other iRODS Consortium software.  The packaging should auto-handle the rename without incident.

- **Tiering Verification**

    By default, verification of the incoming data to a tier is set to the `catalog` level.  This will confirm only the return code from the create operation.  The next level of verification is the `filesystem`, where file size and return code are both checked.  The highest level of verification is `checksum`, where the contents of the incoming data are computationally confirmed.

- **Restaging Data**

    A tier can be defined as the location farthest back up the chain where data should be restaged.  One use case where this may be helpful is when instruments are configured to write to storage that should flow into longer-term storage, and they are not prepared to serve data to others (any restage should stop short of putting data back onto the instruments' local drives).

- **Preserving Replicas on a Tier**

    Users may wish to see replicas remain on a particular tier.  This can be set so data can be archived but also still be available on the fast, local storage.

- **Tiering Policy**

    This, by default, can be set as a number of seconds before data will tier to the next stage in a group.  In addition, the framework allows custom queries to define which data objects are in violation and ready to be tiered.  This release also introduces the ability to have more than one query in force for each tier.  For example, files could move because they have aged out, but also because individual users or managers have tagged a file or collection for archiving immediately.

- **Rate Limited Tiering**

    Data may be suddenly wildly in violation (consider an rsync that preserves timestamps, or addition of a new resource to an existing resource tree).  The rate of tiering can be throttled by the number of data objects that will be staged at a time.

- **Logging on a Tiering Event**

    The logging level can be increased independently of the rest of the logging on the server.  This can help with debugging or with auditing.
