---
slug: /updating
---


# Updating DivineMC

Updating DivineMC is an important part of running every server. With new features and fixes coming
every day, we recommend updating at least once per week to keep your server patched for the latest
bugs. Installing updates is very simple, but it's important to know how to do it correctly.

:::caution Don't replace any JAR in a running server

Unless you know exactly what and why you're doing what you're doing, it's never a good idea to
replace any JAR in a running server, be that plugins, or DivineMC itself.

:::

## Step 1. Backup

This is the most important step, and yet the most frequently skipped. While it is unlikely that
updating DivineMC itself will cause any issues requiring you to restore from a backup, plugin
malfunctions or other accidents might! Updating is a great time to work in a backup. Having
functioning backups is essential to every server, big or small.

## Step 2. Update Plugins

Just like it's important to update DivineMC, it's equally important to keep plugins up to date. You
never know what plugin authors may be working on, be it bugfixes or new features.

1. Create a folder called `update` within the `plugins` folder.
2. One by one, download plugins you would like to update and put them in the `update` folder.
3. Restart your server, do not remove or modify any plugins outside the `update` folder.

By doing this, you are able to update all of your plugins at the same time without having the server
off, or replacing plugin JARs while the server is running. You do not need to restart your server
before updating DivineMC itself. This feature allows you to update both DivineMC and plugins all at the
same time, without needing any additional downtime.

## Step 3. Update DivineMC

:::tip

If you are using a shared host, your host may provide a built-in way to update! Consult their
documentation before continuing.

:::

Updating DivineMC itself is very simple.

1. Download a new JAR from [our downloads page](https://divine.bxteam.gq/#download)
2. Stop your server. It is not recommended and may cause issues to replace your DivineMC JAR while the
   server is running.
3. Replace your old DivineMC JAR file with the new one.
4. Start your server. Watch the startup log to ensure everything goes to plan. If there are any
   plugin conflicts or issues, you will see them here.

To minimize downtime caused by updates, some server owners will, rather than replacing their server
JAR, upload a new one and set their start script to use the new one on the next restart. Both of
these are valid update strategies.
