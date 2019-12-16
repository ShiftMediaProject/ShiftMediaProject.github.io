---
layout: post
title: FFVSGenerator, gnutls and x265 updates
---

The following projects have been updated:
* FFVS was updated to 1.8.3 which adds support for building the latest FFmpeg releases.
* gnutls was updated to 3.6.11.
* x265 was updated to 3.2.

Due to limitations with compile times on appveyor the ffmpeg build binaries are now seperated into x86 and x64 archives. If you are using the binaries please update any scripts as required.

Any projects that have a dependency that was updated has also been updated to build with the latest versions of the new libraries as well.