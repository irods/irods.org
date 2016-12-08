Title: New iRODS Website for 2017
Date: 2016-12-08 15:00
Author: Terrell Russell

We are excited to announce the redesign of our website!

<div class="full_image"><img src="{filename}/images/2016_site_compare.jpg" /></div>

The iRODS website has been powered by [WordPress](https://wordpress.org/) since the iRODS Consortium took the mantle from the DICE Group beginning in 2012.  Since then, we've posted over 120 articles and have grown from 1-2 people to a team of 10+.

But our Wordpress installation had become too tangled and was proving too complicated to change without fear that some unintended part of it would break.

Earlier this year (2016), we began investigating a number of other methods for producing and maintaining a website of moderate complexity and settled on [Pelican](http://blog.getpelican.com/).

A static site proved very interesting for a number of reasons.  Most of all, we liked the idea of having a single source of truth (just text files) and less moving parts (no database to maintain and worry about keeping secure).  The source for our site could live in a git repository and would match how we already do the bulk of our collaborative work (developing software).

The site is now auto-deployed when we push to our public github repository:

- [https://github.com/irods/irods.org](https://github.com/irods/irods.org)

If you find a typo or broken link, please send a pull request!
