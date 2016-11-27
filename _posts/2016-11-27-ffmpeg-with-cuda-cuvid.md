---
layout: post
title: FFmpeg Now Inlcudes CUDA and CUVID
---

The Provided FFmpeg projects and builds have now been updated to take advantage of the newly merged NVIDIA CUDA and CUVID hardware acceleration capablilities. Combined with the existing NVENC functionality it is now possible to have a complate decode (using CUVID) and encode (using NVENC) chain accelerated complatetly using NVIDIA GPUs. As this is using the new dynamic loading capability it means that the builds will still work fine for anyone who does not have a NVIDIA GPU while allowing the additional functionaility for anyone who does own an appropriate card. As always the latest releases are available on the [Projects](/1-projects) page while still allowing access to any previously supported releases.