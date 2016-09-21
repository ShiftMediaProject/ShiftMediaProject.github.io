---
layout: post
title: Introducing Shift Media Project
---

Shift Media Project has been floating around on the interwebs as a GitHub project for a few years now but I finally decided to give it a face. So to make it easier for people to find the project and also make it easier it access the supplied content, today I'm introducing this new page.

As this project started out as a simple means of supporting FFmpeg on Windows it has now grown to the point where it handles nearly 50 separate repositories with Visual Studio compatibility patches, projects and pre-compiled release builds for most of them.

So creating a page to help people access all this content became the next logical step and with the introduction of this site hopefully people will find it useful.

### So What is This?

Borrowing from the [About](/about) page:

This project aims to provide native compiled libraries and source code for many common open source media libraries using Visual Studio. Most open source projects are well supported on Linux based platforms and toolsets but very few provide up to date projects for Visual Studio. This means that compiling these projects generally requires using mingw compilers either as a cross compiler from within Linux or as part of a MSYS set-up on Windows. For many Windows developers these tools will seem unfamiliar and often difficult to set-up as they prefer using the native code editing and compilation tool on Windows - Visual Studio. Also since most of these libraries will be used in a program that will be created directly in Visual Studio then having them built using the exact same compiler and toolchain makes things much easier. This removes any issues associated with mixing code compiled in both mingw and msvc (the Microsoft C Compiler) and from missing or out of date windows functions provided by mingw. It also means that for the first time many of these projects can now be directly debugged using the Visual Studio debugger.

If your a developer who is interested in developing software on Windows using any of the provided libraries then this is the project for you. The [Projects](/projects) page has a complete list of available projects including links to their git pages as well as provided downloads.

For each supported library the project provides pre-built static and dynamic lib's built using the latest supported Visual Studio versions.

### What Next?

New visitors can check out the [Projects](/projects) page to see what libraries are currently supported. You can also keep a track on this page as new additions and changes will be announced here as they happen.