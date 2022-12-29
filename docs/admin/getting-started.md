---
slug: /getting-started
---

# Getting Started

## Requirements

:::tip

With the release of Minecraft 1.18+, DivineMC requires **Java 17** to run.

:::

## Migrating to DivineMC

### From Vanilla

Migrating from Vanilla is easy, but there are some differences, namely in world saves. DivineMC (and
CraftBukkit and Spigot) separate out each dimension of a world (nether, the end, etc.) into separate
world folders.

DivineMC will handle this conversion for you automatically. No additional consideration is required.

### From Craftbukkit or Spigot

DivineMC is a drop in replacement for both CraftBukkit and Spigot, you don't need to make any changes.

## Downloading DivineMC

DivineMC provides runnable server jars directly from [releases tab](https://github.com/DivineMC/DivineMC/releases/latest) on GitHub or on home page website [here](https://divinemc.bxteam.gq/#download).

Click on the _DivineMC-paperclip-VERSION-reobf.jar_ to download a runnable paperclip jar.

## Running The Server

To run the server, simply start it up like any other Java application.

Open your terminal, navigate to the saved location, and then run
`java -Xms2G -Xmx2G -jar divinemc.jar --nogui`. Ensure you replace `divinemc.jar` with the name of the jar
you have downloaded. (or just rename downloaded jar to server.jar)

The amount of RAM can be set by changing the numbers in the `-Xms` and `-Xmx` arguments. `--nogui`
disables Vanilla's GUI, so you don't get double interfaces when using the command line.

For more advanced Java tuning, see [Aikar's Flags](https://docs.papermc.io/paper/aikars-flags) on PaperMC docs.

## Downloading older versions of DivineMC

When you download the server jar, you will get the latest version of DivineMC. If you want to download an older version, you can do so from the releases tab.

Here is a list of all the versions of DivineMC:

Latest [1.19.3](https://github.com/DivineMC/DivineMC/releases/tag/latest-1.19.3)

Latest [1.19.2](https://github.com/DivineMC/DivineMC/releases/tag/latest-1.19.2)
