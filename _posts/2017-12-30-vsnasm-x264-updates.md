---
layout: post
title: VSNASM, x264 and FFVS updates
---

The following projects have been updated:
* VSNASM was updated to 0.3 which now automatically installs nasm 2.13.02.
* x264 was updated to the latest stable r2854 which adds AVX512 instruction support. This requires a change from using YASM to using NASM with the above updated VSNASM in order to work. An additional update was then applied by changing to upstream x264 master which bumps to r2893. This adds multiple bit depth support allowing a single instance of x264 to encode both 8bit and 10bit as requested.
* x264 now also produces a compiled executable as well as the development libraries. The executable can be download in a separate archive from the release page.
* The supplied FFmpeg projects now make use of AVX-512 instructions which require using NASM instead of YASM. All FFmpeg projects have been updated to now use VSNASM which is available from the downloads page.
* FFVS project generator has been updated to 1.7.0. This release now supports user selection of either NASM or YASM (NASM is default).

FFmpeg upstream has now officially dropped support for Windows XP. This means all official FFmpeg builds will only work on Vista or higher. However I added some local changes to my FFmpeg repo so that it still supports Windows XP. As such all supplied 32bit projects and release binaries provided here still support Windows XP.

Any projects that have a dependency that was updated has also been updated to build with the latest versions of the new libraries as well.