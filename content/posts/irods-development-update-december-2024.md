Title: iRODS Development Update: December 2024
Date: 2024-12-19 12:00
Author: Kory Draughn
Slug: irods-development-update-december-2024
Status: published


Hello reader,

I can't believe we're at the end of December, which means the end of 2024! Wow, time really does fly. Anyway, you know what time it is, so let's jump right into it.

Starting with the server, work to redesign the startup/shutdown logic for iRODS 5 is complete and has been merged. This is exciting because it brings the server closer to what administrators expect from a modern server application. With the startup/shutdown code merged, work to overhaul support for systemd has begun. A new GenQuery1 parser has been merged into the iRODS 5 implementation as well. The parser resolves all long-standing string parsing issues involving whitespace, single quotes, etc. We originally planned to introduce the parser into iRODS 4, but that plan was discarded to avoid potentially breaking existing deployments. There have been some issues reported about multi-byte characters recently, so we've started investigating improvements around unicode. `iadmin` now returns non-zero error codes appropriately. A number of things have recently been marked as deprecated in the iRODS 4 series, e.g. `imeta qu`, the interactive mode of `imeta`, and the original locking/unlocking APIs for data objects. `ilocate` and `igetwild` are also on the road to deprecation and removal as well.

There have been a number of updates to packaging. A new CMake cache variable has been introduced to help with configuring the installation directory. A new JSON library, jsoncons, will now be shipped as an externals package. The Boost externals package has been normalized across distributions. We've started investigating the possibility of updating the C++ compiler to Clang 15. Lastly, support for Enterprise Linux 7 has been removed from our externals packages.

Support for Enterprise Linux 7 has also been removed from the Docker-based Development and Testing environments.

The PAM Interactive Authentication Plugin has received a small tweak to its packaging. The client packages will no longer include a post-installation script.

The iRODS HTTP API has received a few updates. We've added support for the Undefined Behavior Sanitizer to help with detecting more bugs before a release. GitHub Actions have been added to the pull request process. Opening a new pull request will now trigger GitHub Workflows for compilation, code formatting, and static analysis. A new option for enabling stricter **aud** checking for the Introspection Endpoint has been added. We've also introduced documentation for testing all features of the HTTP API server.

It's been a long time coming, but administrators of the Metalnx web application will be happy to know that the dependency on a secondary database has been removed. We've also removed several other things as a result. For example, templates and bookmarks. The major benefit of this is that deployment of Metalnx only requires a working iRODS server moving forward.

I hope you found the final update of 2024 exciting. 2025 is looking very promising for iRODS.

Stay safe and see you in the new year!
