---
layout: page
title: Projects
---

The following is a list of available projects with links to download the latest compiled release, links to a complete lists of all releases as well as links to access the source code.

### Current Projects:

| Name                  | Download                                                     | Releases                                               | Repository                                  |
| --------------------- |:------------------------------------------------------------:|:------------------------------------------------------:|:-------------------------------------------:|
{% for repository in site.github.public_repositories %}{% unless repository.description contains '***' or repository.name contains 'github.io' %}| {{ repository.name }} | [Get Latest]({{ repository.html_url }}/releases/latest) | [All Releases]({{ repository.html_url }}/releases) | [View Code]({{ repository.html_url }}) |
{% endunless %}{% endfor %}

* * *

### No Longer Supported Projects:
These are projects that are no longer actively maintained but are still provided here for those that may still be interested.

| Name                  | Releases                                               | Repository                                  |
| --------------------- |:------------------------------------------------------:|:-------------------------------------------:|
{% for repository in site.github.public_repositories %}{% if repository.description contains '***' and repository.name != 'ShiftMediaProject.github.io' %}| {{ repository.name }} | [All Releases]({{ repository.html_url }}/releases) | [View Code]({{ repository.html_url }}) |
{% endif %}{% endfor %}