Title: EC2 Image: iRODS 4.1 w/ Cloud Browser, WebDAV, S3
Date: 2016-03-21 09:20
Author: Terrell Russell
Slug: ec2-image-irods-4-1-w-cloud-browser-webdav-s3
Status: published

The iRODS Consortium is happy to announce the general availability of
the new iRODS image in the Amazon AWS Marketplace. This image is a free
image - running it only incurs EC2 usage costs. However, for t2.micro
intances, this image is free tier eligible.

Find it here: <https://aws.amazon.com/marketplace/pp/B00VF4TXSK>

The image comes with iRODS 4.1.8 as well as the latest [Cloud
Browser](https://github.com/DICE-UNC/irods-cloud-browser),
[WebDAV](https://github.com/DICE-UNC/irods-webdav), and [iRODS S3
resource plugin](https://github.com/irods/irods_resource_plugin_s3)
already installed.

<div class="full_image"><img src="{filename}/uploads/2016/03/EC2-iRODS_4.1_CloudBrowser.png" /></div>

The Cloud Browser supports all basic file interactions: upload,
download, move, rename, copy, delete. The WebDAV interface allows for
seamless interaction with WebDAV clients, including Windows Explorer and
MacOSX Finder. The S3 resource plugin gives this image simple storage
scaling capability out of the box.

Please try it out, and let us know if you have any suggestions to make a
demo of iRODS even easier to get up and running. We expect to update
this image with the latest releases as iRODS and the Cloud Browser
development continues.

### Usage Instructions

The web interface is available within a few minutes of launch. To test
it out, point your web browser to the instance's public DNS address
(port 80 for WebDAV, and port 8080 for the cloud browser) and log in
(username "rods"; the EC2 instance ID as password).

You can configure the instance via SSH. Use your keypair with UNIX
username "ubuntu" to log in.

The initial configuration has a single iRODS admin account with username
"rods"and password set to the EC2 instance ID.
