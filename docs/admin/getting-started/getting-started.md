---
slug: /getting-started
---

# Getting Started

## Requirements

:::tip

With the release of Minecraft 1.18, DivineMC requires **Java 17** to run. If you don't already have
Java 17, [it's easy to download and install](/misc/java-install).

:::

| DivineMC Version  | Recommended Java Version |
| ----------------- | ------------------------ |
| 1.17.1-1.18.1+    | Java 17                  |

## Migrating to DivineMC

### From Vanilla

Migrating from Vanilla is easy, but there are some differences, namely in world saves. DivineMC (Paper,
CraftBukkit and Spigot) separate out each dimension of a world (nether, the end, etc.) into separate
world folders.

DivineMC will handle this conversion for you automatically. No additional consideration is required.

### From Craftbukkit or Spigot

DivineMC is a drop in replacement for both CraftBukkit and Spigot, you don't need to make any changes.

## Downloading DivineMC

DivineMC provides runnable server jars directly from our
[website's downloads page](https://divine.bxteam.gq/#download).

Click on the build number to download a file.

## Running The Server

To run the server, simply start it up like any other Java application.

Open your terminal, navigate to the saved location, and then run
`java -Xms2G -Xmx2G -jar divinemc.jar --nogui`. Ensure you replace `divinemc.jar` with the name of the jar
you have downloaded.

The amount of RAM can be set by changing the numbers in the `-Xms` and `-Xmx` arguments. `--nogui`
disables Vanilla's GUI, so you don't get double interfaces when using the command line.

## Updating The Server

Updating DivineMC is simple! See our [Update Tutorial](../how-to/update.md) for more information.
