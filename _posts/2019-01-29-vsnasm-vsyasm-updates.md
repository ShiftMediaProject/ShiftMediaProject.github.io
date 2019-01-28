---
layout: post
title: VSNASM and VSYASM updates
---

The Visual Studio assembler integrations for both nasm and yasm have been updated to new versions (0.5 and 0.4 respectively). This updates add the following features:
* Install script can now use vswhere to detect Visual Studio installations (this helps support detection even with broken installs)
* Install script will now install to all detected Visual Studio installations at once (i.e. can install to 2015 and 2017 at once)
* Now supports Visual Studio 2019