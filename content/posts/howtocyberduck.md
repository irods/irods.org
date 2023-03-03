Title: How To: Using Cyberduck for iRODS File Transfers
Date: 2015-09-08 08:48
Author: Dan Bedard
Slug: howtocyberduck
Status: published

[Cyberduck](https://cyberduck.io/) is a free open source file transfer
program for MacOS and Windows that supports several different transfer
protocols (e.g., FTP, WebDAV). As of version 4.7.1, released July 7,
2015, Cyberduck supports direct data transfer into and out of iRODS.
**Cyberduck users can now directly upload and download files and
directories from iRODS repositories using the high-throughput and
parallel data transfer capabilities built into iRODS.**
<!--more-->

iRODS support in Cyberduck is due to the extraordinary efforts of the
[DataNet Federation Consortium](http://datafed.org/) (DFC) and DFC
member [the iPlant Collaborative](http://www.iplantcollaborative.org/),
with assistance from the Cyberduck development team.

This post covers the installation and configuration of Cyberduck for use
with iRODS. This is a slightly modified version of the [instructions
written by
iPlant](https://pods.iplantcollaborative.org/wiki/display/DS/Using+Cyberduck+for+Uploading+and+Downloading+to+the+Data+Store)
for use with the iPlant Data Store.

## Installing and configuring Cyberduck


### Install or Update Cyberduck

If Cyberduck is already installed, check if you need to update (must be
version 4.7.1 or later):

1.  Click the Cyberduck menu.
2.  Click Preferences and then click Check for Updates.

To install Cyberduck for your operating system for the first time:

Go to the Cyberduck installation page at <https://cyberduck.io/>.

Follow the steps for your OS:

**For MacOS**:

1.  Click Download Cyberduck-4.7.1.zip (or later version than 4.7.1).

2.  Extract and move the contents of the downloaded file to your
    Applications folder. IMPORTANT: The file must be located in your
    Applications folder.
    <p>


   *Alternatively, you can install Cyberduck for Mac OS directly
    through the Mac Store for a fee that supports the Cyberduck
    development team.*

**For Windows**:

1.  Click Download Cyberduck-Installer-4.7.1.exe (or later version than
    4.7.1, if displayed).

2.  Locate the downloaded file and double click to begin installation.

3.  Go through the install process.

### Configure Cyberduck for use with iRODS

To connect Cyberduck to an iRODS repository, you must first bookmark the
connection using a .cyberduckprofile Connection Profile file.

1.  Click [this
    link](http://people.renci.org/~danb/FOR_DEMOS/cyberduck/irods.cyberduckprofile)
    to download a Connection Profile template, which contains
    preconfigured settings for using Cyberduck with iRODS repositories.

2.  Use a text editor to edit the contents of the Connection Profile.



   At a minimum, you will need to edit the "Region" key with the iRODS
    Zone name and default resource that you will connect to in the
    format <span
    class="lang:default decode:true crayon-inline">zone\_name:resource\_name</span>.
    You may also edit the default hostname, or you may opt to configure
    it at runtime.


   Save the updated Connection Profile.

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
        <dict>
            <key>Protocol</key>
            <string>irods</string>
            <key>Vendor</key>
            <string>iRODS</string>
            <key>Description</key>
            <string>iRODS Cyberduck Bookmark</string>
            <key>Hostname Configurable</key>
            <true/>
            <key>Port Configurable</key>
            <true/>
            <key>Default Hostname</key>
            <string>hostname.example.org</string>
            <key>Region</key>
            <string>tempZone:demoResc</string>
            <key>Default Port</key>
            <string>1247</string>
            <key>Username Placeholder</key>
            <string>iRODS username</string>
            <key>Password Placeholder</key>
            <string>iRODS password</string>
        </dict>
    </plist>

3.  Double click the updated irods.cyberduckprofile file to open it as a
    Cyberduck bookmark. The profile will open so you can edit the
    defaults.

4.  Update the Cyberduck bookmark.
    -   Update the Nickname field with an appropriate name to identify
        the bookmark.
    -   Update the Server field with the hostname of your iRODS server.
    -   Update the Port field with the port number of your iRODS server
        (typically 1247).
    -   Update the Username field with your iRODS user name.
    -   In the More Options section, update the "Transfer Files"
        setting, selecting "Open multiple connections".
    -   Close the bookmark window.

    <p>
    <div class="full_image"><img src="{static}/uploads/2015/09/cyberduckprofile.png" /></div>

## Using Cyberduck

These instructions provide basic instructions for downloading and
uploading files to an iRODS repository using Cyberduck.

For more information on how to use Cyberduck, please see the [Cyberduck
Help manual](https://trac.cyberduck.io/wiki/help/en), the [Cyberduck
FAQs](https://trac.cyberduck.io/wiki/help/en/faq), or contact [Cyberduck
Support](https://trac.cyberduck.io/newticket).

### Open Cyberduck

In the Cyberduck window, double-click a bookmark.


<div class="full_image"><img src="{static}/uploads/2015/09/cyberduckmenu.png" /></div>

Log in to the iRODS server using your iRODS username and password. By
default, your Home folder is selected.

Once connected, to download a file or folder from iRODS using
Cyberduck:

1.  Click the file or folder to download.

2.  Click the Cyberduck File menu and then click Download. The file is
    downloaded to your default download folder.

To navigate to a different folder:

Click the Cyberduck Go menu and then click Go to Folder:

-   Enter the path to the folder.
-   Click Go.


<div class="full_image"><img src="{static}/uploads/2015/09/cyberduckfolder.png" /></div>


### Upload

To upload a file or folder to an iRODS repository using Cyberduck:

1.  Click the Cyberduck File menu and then click Upload.

2.  Click the file or folder to upload and then click Upload.


## Need help?

See the Cyberduck Preferences Help page for more information on
installation, or connect with us on the [iRODS Chat Google
Group](https://groups.google.com/forum/#!forum/irod-chat). If you are at
an [iRODS Consortium member site](http://irods.org/consortium/members/),
you may [contact us directly](http://irods.org/contact/) for support.

For questions about using Cyberduck, please see the [Cyberduck Help
manual](https://trac.cyberduck.io/wiki/help/en), the [Cyberduck
FAQs](https://trac.cyberduck.io/wiki/help/en/faq), or contact [Cyberduck
Support](https://trac.cyberduck.io/newticket).
