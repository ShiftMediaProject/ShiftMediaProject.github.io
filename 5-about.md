---
layout: page
title: About
---

## FAQ

What is this Project?

: This project aims to provide native compiled libraries and source code for many common open source media libraries using Visual Studio. Most open source projects are well supported on Linux based platforms and toolsets but very few provide up to date projects for Visual Studio. This means that compiling these projects generally requires using mingw compilers either as a cross compiler from within Linux or as part of a MSYS set-up on Windows. For many Windows developers these tools will seem unfamiliar and often difficult to set-up as they prefer using the native code editing and compilation tool on Windows - Visual Studio. 

: Also since most of these libraries will be used in a program that will be created directly in Visual Studio then having them built using the exact same compiler and toolchain makes things much easier. This removes any issues associated with mixing code compiled in both mingw and msvc (the Microsoft C Compiler) and from missing or out of date windows functions provided by mingw. It also means that for the first time many of these projects can now be directly debugged using the Visual Studio debugger.

: This project however generally is not responsible for the creation and maintenance of the actual libraries themselves. Instead it just provides alternate versions that have been patched to compile using msvc and to provide native Visual Studio projects. As such any compliments(/blame) should be directed towards the official library maintainers as they deserve most of the credit.

: But if your a developer who is interested in developing software on Windows using any of the provided libraries then this is the project for you. The [Projects](/projects) page has a complete list of available projects including links to their git pages as well as provided downloads.

: For each supported library the project provides pre-built static and dynamic lib's built using the latest supported Visual Studio versions.

Where can I find a build for version 1.x, 2.x, etc.?

: Release builds are compiled for currently supported libraries generally soon after a new version is released (time permitting). Whenever a new build is made all supported dependency libraries are updated to the latest compatible versions, so the process can take some time. 

: Some libraries are not built from a specific release version as they instead build from their git master branch. These should be considered stable and can be used in a production environment. To quote from ffmpeg.org "Development branch snapshots work really well 99% of the time so people are not afraid to use them." Git master branches are used when the last release version has become out of date or when the master branch is considered part of the stable development.

Why are there dash releases of a library with identical version (v1.0-1, v1.0-2, etc.)?

: Sometimes a library will not have had an update but one of its dependencies has. To ensure that the latest and most stable versions are being used a new build of a library we will be performed using the new updated dependencies. These updates are identified by a '-x' suffix.

Where should I report a bug I found in one of the libraries?

: Most bugs should be reported to the upstream project that primarily maintains them. Links can be found on the GitHub page for each project which can be located from this sites [Projects](/projects) page.
Should you determine that a bug was introduced when porting/compiling with Visual Studio then you can open a new Issue on the corresponding projects GitHub page.

Why don't the builds include FAAC, FDK-AAC, libaacplus?

: These libraries are not compatible with the GPL license and cannot be included without licensing the build as nonfree. A nonfree build cannot be publicly distributed.

How are the builds compiled?

: The builds are compiled with Visual Studio using the supplied project files found in each libraries repository. These projects are found under each repositories 'SMP/' subdirectory. The release builds found on this site are compiled using AppVeyor CI and published to GitHub.

How can I compile my own build?

: This process assumes that you are familiar with Visual Studio development tools and have the appropriate versions installed.
You can compile your own build by cloning the required libraries Git repository to your local machine and opening the supplied Visual Studio solution found under the repositories 'SMP/' subdirectory.
For projects that require more set-up than just opening the supplied solution then a readme is also provided in the 'SMP' directory and should be followed accordingly.

About the Builds
: *   Releases built using Microsoft Visual Studio 2013/2015
: *   Builds performed by [AppVeyor CI](https://www.appveyor.com/)

About the Site
: *   Hosted using [GitHub Pages](https://pages.github.com/)
: *   Theme based on [BlackDoc](https://github.com/karloespiritu/BlackDoc)