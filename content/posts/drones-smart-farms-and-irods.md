Title: Drones, Smart Farms, and iRODS
Date: 2019-09-23 16:00
Author: Daniel Moore
Slug: drones-smart-farms-and-irods
Status: published

The iRODS Consortium has recently joined forces with [Australia Agriculture
Victoria](http://agriculture.vic.gov.au/agriculture)'s pilot effort to integrate the benefits of storage
virtualization and metadata-driven, open-source data management
with their already considerable efforts with agricultural technology.

The ultimate goal is to create an IoT-and-web infrastructure 
for synthesizing, visualizing, and sharing data gathered
from a varied collection of sensors deployed on "Smart Farms".  These data
could be about soil and crops, air and water quality, or livestock.

As the first part of the effort, the Consortium stood up a
single-server iRODS Zone capable of registering a drone-gathered
data set stored in an Amazon S3 bucket.  Upon ingest, the server then extracted
key features from the embedded TIFF files and attached
them as metadata to the newly registered data objects within iRODS.

Powered by the [iRODS automated ingest tool](https://github.com/irods/irods_capability_automated_ingest) and [cacheless S3 storage
plugin]({filename}/posts/irods-releases-cacheless-s3-resource-plugin.md), the initial testing
showed roughly 20 objects registered per second, per core, but reading more than 70% of each data file while
processing the EXIF tags from TIFF.

Upon further investigation and iteration, the iRODS Consortium was able to extract the
same EXIF data after accessing only 1% of each data file from S3.  This proves an economical
way to operationalize valuable provenance information about the source data.

[Metalnx](https://github.com/irods-contrib/metalnx-web) and [Davrods](https://github.com/UtrechtUniversity/davrods)
services are deployed on the server too,
which will immediately allow collaborators and other interested
parties to view the ingested data and metadata using a standard set of
graphical Desktop tools, mainly file managers and browsers.

This new collaboration with AgVic has only begun to scratch the surface,
as eventually the intent
is not only to harness well-known iRODS capabilities in automating 
computational workflows, but also to make the geo-connected result data
easily searchable via iRODS' newly developed [indexing framework](https://github.com/irods/irods_capability_indexing).
