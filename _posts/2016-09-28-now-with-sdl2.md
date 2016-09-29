---
layout: post
title: Now with SDL2
---

With FFmpeg having been updated a couple of days ago to finally support SDL2, the provided repositories and projects have been updated accordingly. The latest FFmpeg build and all future builds are now built with SDL2. This also means that the supplied SDL repository and project has also been updated to the latest SDL2 (2.0.4 at time of writing). The supplied SDL project supports all the latest features except that by default it uses a custom configuration on Windows that uses the compilers C runtime instead of the SDL supplied internal libm alternative. This provides additional performance and improved compatibility with Visual Studio 2015 while also reducing the size of the library. As always you can download the updated library from the Projects page, if you are using the repo source then ensure you update to the new version.