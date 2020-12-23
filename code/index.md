---
title:  "代码段"
---

#### 随手记代码
<dl>
{% for object in site.data.list %}
  <li>
      <a href="{{ object.name }}.html">{{ object.title }}</a>
  </li>
{% endfor %}
</dl>