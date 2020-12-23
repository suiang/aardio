---
title:  "代码段"
---

<dl>
{% for object in site.data.list %}
  <dd>name: {{ object.name }}</dd>
  <dd>title: {{ object.title }}</dd>
{% endfor %}
</dl>