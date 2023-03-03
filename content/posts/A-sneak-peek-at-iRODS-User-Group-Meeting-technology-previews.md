Title: A sneak peek at iRODS User Group Meeting technology previews
Date: 2017-05-23 13:20
Author: Karen Green
Slug: A-sneak-peek-at-iRODS-User-Group-Meeting-technology-previews
Status: published

<div class="full_image"><img src="{static}/images/ugm_2017_crest.jpg" /></div>

New plugins to be highlighted; register now at [https://irods.org/ugm2017/]({filename}/pages/ugm2017.html)!

The worldwide iRODS community will gather June 13 – 15 for the first User Group Meeting to be held at Utrecht University in The Netherlands. 

Along with use cases and presentations by iRODS users from at least seven countries, the meeting will offer a glimpse at new technologies that will soon be available alongside iRODS 4.2.
 “One of the major improvements with iRODS in the last few years has been our ability to build iRODS as a modular platform to which we can easily introduce new plugins independent of major software updates,” said Jason Coposky, executive director of the iRODS Consortium. “We will be talking about some of those soon-to-be available functionalities and what they will mean to iRODS users.”

iRODS—the integrated Rule Oriented Data System—is free open source software for data management and discovery, workflow automation, secure collaboration, and data virtualization. iRODS software is developed and maintained through the support of the iRODS Consortium, a membership organization with industry and academic members worldwide. 

Thousands of businesses, research centers, and government agencies located in the U.S., Europe, Asia, Australia, South America, and Africa use iRODS for flexible, policy-based data management that provides long-term preservation and federation. 

Technical previews will introduce a number of new capabilities that will soon be available in the iRODS platform. They include:

<b>Integration with parallel file systems.</b> Parallel file systems such as Intel’s Lustre and Panasas’ PanFS can move massive amounts of data through high performance computing systems quickly, but putting an iRODS data management layer in the middle of those systems slows down the data transfer process, leaving users with a choice between fast I/O and good data management. A new filesystem integration layer will allow iRODS systems to “see” parallel file systems and translate the parallel changelogs into iRODS events so that the two systems stay in sync. This means that HPC users will be able to manage their data and enforce their data management policies without sacrificing the speed of a parallel file system. 

<b>Multi-part transfer.</b> The iRODS development team is working to improve the reliability and predictability of large file transfers in iRODS. This effort will allow reliable restarts of data transfers that stop midstream, rather than having to start the transfer process over when it stops or fails. The new multi-part transfer plugin breaks files into chunks that can be transferred simultaneously and then reassembled into a single file once the transfer is complete. 

“This is part of our plan to reduce the code complexity of transferring large files,” said iRODS Interim Chief Technologist Terrell Russell. “Parallel multi-part transfer allows for faster data movement, and if a file doesn’t arrive as expected, only the failed or missing parts will need to be retransmitted and verified, rather than the entire file.” 

<b>Metadata templates.</b> Good data management requires good metadata, and the iRODS development team has developed technology that allows users to create metadata templates that specify their organizations’ naming conventions and vocabulary for metadata and follow other metadata best practices. Providing users with a way to apply consistent metadata naming and enforce a controlled vocabulary will in turn make searches more productive and help users and automated tools find the data they need. Organizations with strict naming conventions will be able to guarantee that high quality, flexible metadata is being entered as well as monitor for compliance after the fact.

<b>Register now for the UGM and iRODS training</b>

Registration for the iRODS UGM is still open and seats are filling fast. In addition to the meeting on June 14 and 15, a full-day of iRODS training (beginner and advanced) will be offered on June 13. Participants can register for a training session, the UGM, or both by going to [https://irods.org/ugm2017/]({filename}/pages/ugm2017.html). The training agenda, pricing, and abstracts for all accepted talks are also available at this site.

For more information on iRODS and the iRODS Consortium, visit [irods.org/about]({filename}/pages/about.html).

For more information on Utrecht University, the host of the 2017 UGM, visit [https://www.uu.nl/en](https://www.uu.nl/en).

