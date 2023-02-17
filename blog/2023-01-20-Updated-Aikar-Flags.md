---
title: Advanced Aikar's Flags guide
authors:
  - name: NONPLAYT
    title: Core Team
    url: https://github.com/NONPLAYT
    image_url: https://avatars.githubusercontent.com/u/76615486?v=4
hide_table_of_contents: false
---

## Disclaimer

First and foremost, I cannot be held responsible for any problems on your server as a result of these changes. This is still experimental and bugs can happen. No one has the same configuration, everything can vary from person to person.

## Flags

**Supported JDK assemblies:**

*I recommend using OpenJDK 17*

- [x] OpenJDK 8+
- [x] Red Hat 8+
- [x] Amazon 11+
- [x] Azul 11+
- [x] AdoptOpenJDK 11+
- [ ] Oracle
- [ ] SAP

**Supported servers:**

- [x] Vanilla
- [x] Bukkit, Spigot, Paper ...
- [x] Fabric
- [x] Forge

**Finished properties:**

```java
java -jar -server -Xms6G -Xmx6G -XX:+UseLargePages -XX:LargePageSizeInBytes=2M -XX:+UnlockExperimentalVMOptions -XX:+UseShenandoahGC -XX:ShenandoahGCMode=iu -XX:+UseNUMA -XX:+AlwaysPreTouch -XX:-UseBiasedLocking -XX:+DisableExplicitGC -Dfile.encoding=UTF-8 launcher-airplane.jar --nogui
```

## Old flags

If you want, you can still use old flags, but we don't recommend to use it on production server!

**_For servers using 12GB of RAM or less:_**

```java
java -Xms12G -Xmx12G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -XX:-UseBiasedLocking -XX:UseAVX=3 -XX:+UseStringDeduplication -XX:+UseFastUnorderedTimeStamps -XX:+UseAES -XX:+UseAESIntrinsics -XX:UseSSE=4 -XX:+UseFMA -XX:AllocatePrefetchStyle=1 -XX:+UseLoopPredicate -XX:+RangeCheckElimination -XX:+EliminateLocks -XX:+DoEscapeAnalysis -XX:+UseCodeCacheFlushing -XX:+SegmentedCodeCache -XX:+UseFastJNIAccessors -XX:+OptimizeStringConcat -XX:+UseCompressedOops -XX:+UseThreadPriorities -XX:+OmitStackTraceInFastThrow -XX:+TrustFinalNonStaticFields -XX:ThreadPriorityPolicy=1 -XX:+UseInlineCaches -XX:+RewriteBytecodes -XX:+RewriteFrequentPairs -XX:+UseNUMA -XX:-DontCompileHugeMethods -XX:+UseFPUForSpilling -XX:+UseFastStosb -XX:+UseNewLongLShift -XX:+UseVectorCmov -XX:+UseXMMForArrayCopy -XX:+UseXmmI2D -XX:+UseXmmI2F -XX:+UseXmmLoadAndClearUpper -XX:+UseXmmRegToRegMoveAll -Dfile.encoding=UTF-8 -Xlog:async -Djava.security.egd=file:/dev/urandom --add-modules jdk.incubator.vector -jar server.jar nogui
```

_of course, adjust -Xms and -Xmx values to whatever you want, same for your java path and server jar_

You shouldn't use more than 20GB of RAM, because G1GC is not designed for that. If you want to use more than 20GB of RAM, you should use ZGC.

## Sources

[Tuning the JVM – G1GC Garbage Collector Flags for Minecraft](https://aikar.co/mcflags.html)

[Post on DivineMC Blog](https://divinemc.bxteam.gq/blog/2022/12/30/Aikar-Flags)

And again, just note: I don't recommend using these flags on a production server. These flags are for testing purposes only. If you want to use these flags on a production server, you should know what you are doing.

###### Last updated at 17 February 2023
