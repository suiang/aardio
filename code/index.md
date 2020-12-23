---
title:  "代码段"
---

#### 随手记代码
<br />
<dl>
{% for object in site.data.list %}
  <li>
      <a href="{{ object.name }}">{{ object.title }}</a>：
      https://suiang.cn/aardio/code/{{ object.name }}
  </li>
{% endfor %}
</dl>