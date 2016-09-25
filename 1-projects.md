---
layout: page
title: Projects
---

The following is a list of available projects with links to download the latest compiled release, links to a complete list of all releases as well as links to access the source code.

{% assign special = 'FFmpeg|FFVS-Project-Generator' | split: "|" %}
{% assign noredist = 'libaacs|libbdplus|libdvdcss|libdvdnav|libdvdread|fdk-aac' | split: "|" %}

## FFmpeg

Development libraries are available for each lib (libavcodec, libavformat etc.) from the FFmpeg project. These libraries are available for each supported Visual Studio version (2013 or 2015) with a different download for either 32bit or 64bit versions. Each download contains both static and dynamic libraries to choose from.

| Name                  | Download                                                     | Releases                                               | Repository                                  |
| --------------------- |:------------------------------------------------------------:|:------------------------------------------------------:|:-------------------------------------------:|
{% for repository in site.github.public_repositories %}{% if repository.name contains special[0] %}| {{ repository.name }} | <span id="{{ repository.name }}ID">[Get Latest]({{ repository.html_url }}/releases/latest)</span> | [All Releases]({{ repository.html_url }}/releases) | [View Code]({{ repository.html_url }}) |
{% endif %}{% endfor %}

* * *

## FFmpeg VS Project Generator

The FFmpeg VS Project Generator is a standalone program that can be used to create a custom Visual Studio project within a FFmpeg source code distribution. This program allows for the created Visual Studio project to be customised using virtually any of the options supported by FFmpegs default configure script. This allows for selecting which dependency libraries and codec/format support should be built into the created project file. With the output project FFmpeg libraries and programs can be built and debugged directly within Visual Studio. This program is what is used to build the default project file found in the above FFmpeg source directory. Ensure to read the included 'readme'.

| Name                  | Download                                                     | Releases                                               | Repository                                  |
| --------------------- |:------------------------------------------------------------:|:------------------------------------------------------:|:-------------------------------------------:|
{% for repository in site.github.public_repositories %}{% if repository.name contains special[1] %}| {{ repository.name }} | <span id="{{ repository.name }}ID">[Get Latest]({{ repository.html_url }}/releases/latest)</span> | [All Releases]({{ repository.html_url }}/releases) | [View Code]({{ repository.html_url }}) |
{% endif %}{% endfor %}

* * *

## Additional Projects:

Development libraries are available for many various projects. These libraries are available for each supported Visual Studio version (2013 or 2015) with a different download for each version. Each download contains both static and dynamic libraries to choose from in both 32bit and 64bit versions.

| Name                  | Download                                                     | Releases                                               | Repository                                  |
| --------------------- |:------------------------------------------------------------:|:------------------------------------------------------:|:-------------------------------------------:|
{% for repository in site.github.public_repositories %}{% unless repository.description contains '***' or repository.name contains 'github.io' or special contains repository.name or noredist contains repository.name %}| {{ repository.name }} | <span markdown id="{{ repository.name }}ID">[Get Latest]({{ repository.html_url }}/releases/latest)</span> | [All Releases]({{ repository.html_url }}/releases) | [View Code]({{ repository.html_url }}) |
{% endunless %}{% endfor %}

* * *

## Non-ReDistributable Projects:

Some projects are still actively maintained but due to potential licensing issues a compiled release build is not provided. These projects can still be downloaded via source code and compiled locally by anyone wishing to do so.

| Name                  | Releases                                               | Repository                                  |
| --------------------- |:------------------------------------------------------:|:-------------------------------------------:|
{% for repository in site.github.public_repositories %}{% if noredist contains repository.name %}| {{ repository.name }} | [All Releases]({{ repository.html_url }}/releases) | [View Code]({{ repository.html_url }}) |
{% endif %}{% endfor %}

* * *

## Discontinued Projects:
These are projects that are no longer actively maintained but are still provided here for those that may still be interested.

| Name                  | Releases                                               | Repository                                  |
| --------------------- |:------------------------------------------------------:|:-------------------------------------------:|
{% for repository in site.github.public_repositories %}{% if repository.description contains '***' %}{% unless special contains repository.name or noredist contains repository.name or repository.name contains 'github.io' %}| {{ repository.name }} | [All Releases]({{ repository.html_url }}/releases) | [View Code]({{ repository.html_url }}) |
{% endunless %}{% endif %}{% endfor %}

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" type="text/javascript"></script>
<script src="/scripts/getLatestRelease.js" type="text/javascript"></script>
<script type="text/javascript">
    $(function() {
        {% for repository in site.github.public_repositories %}$(this).getLatestRelease('{{ repository.name }}');
        {% endfor %}
    });
</script>
