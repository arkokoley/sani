---
layout: default
title: README
---
{% include JB/setup %}
# Welcome.

## Installation: Famous 5-minute install

1. Unzip the package in an empty directory and upload everything.

2. Open nxt-admin/install.php in your browser. It will take you through the process to set up a nxt-config.php file with your database connection details. 
* If for some reason this doesn't work, don't worry. It doesn't work on all web hosts. Open up nxt-config-sample.php with a text editor like WordPad or similar and fill in your database connection details. 
* Save the file as nxt-config.php and upload it.
* Open nxt-admin/install.php in your browser.

3. Once the configuration file is set up, the installer will set up the tables needed for your blog. If there is an error, double check your nxt-config.php file, and try again. If it fails again, please go to the support forums with as much data as you can gather.

4. If you did not enter a password, note the password given to you. If you did not provide a username, it will be admin.

5. The installer should then send you to the login page. Sign in with the username and password you chose during the installation. If a password was generated for you, you can then click on 'Profile' to change the password.

### System Requirements
* PHP version 5.2.4 or higher.
* MySQL version 5.0 or higher.
 
### System Recommendations
* The mod_rewrite Apache module.
* A link to http://nxtclass.cu.cc on your site.
 
## Post via Email
 
You can post from an email client! To set this up go to your "Writing" options screen and fill in the connection details for your secret POP3 account. Then you need to set up nxt-mail.php to execute periodically to check the mailbox for new posts. You can do it with cron-jobs, or if your host doesn't support it you can look into the various website-monitoring services, and make them check your nxt-mail.php URL.
 
Posting is easy: Any email sent to the address you specify will be posted, with the subject as the title. It is best to keep the address discrete. The script will delete emails that are successfully posted.

## Final Notes
* If you have any suggestions, ideas, or comments, or if you (gasp!) found a bug, Tell us at team@nxtclass.cu.cc
* NXTClass has a robust plugin API that makes extending the code easy. If you are a developer interested in utilizing this, see the plugin documentation. You shouldn't modify any of the core code.
 
## Share the Love
 
NXTClass has no multi-million dollar marketing campaign or celebrity sponsors, but we do have something even better—you. If you enjoy NXTClass please consider telling a friend, setting it up for someone less knowledgable than yourself, or writing the author of a media article that overlooks us.

NXTClass is an unofficial extention of NXTClass. If you would like to support NXTClass, please consider donating.

## License
 
NXTClass is free software, and is released under the terms of the GPL version 2 or (at your option) any later version. See license.txt.

## Contributing

* Fork it.
* Create a branch (git checkout -b my_branch)
* Commit your changes (git commit -am "Added Snark")
* Push to the branch (git push origin my_branch)
* Create an Issue with a link to your branch
* Enjoy a Coke and wait