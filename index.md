---
title:  "扩展库"
---


#### 如何使用

```js
//安装扩展库
_IMPORTURL["库名称"] = "库链接"
import 库名称; //导入刚安装的扩展库
```

#### 库列表

<dl>{% for object in site.data.lib %}
    <li><a href="samples/{{ object.last.keywords }}">{{ object | first }}</a>
        : {{ object.last.description }}
    </li>{% endfor %}
</dl>

<dl>
    <li><a href="samples/ip2region">ip2region</a>
        : 获取ip信息 https://gitee.com/lionsoul/ip2region
    </li>
    <li><a href="samples/jsonStore">jsonStore</a>
        : JSON 存储服务 https://extendsclass.com/json-storage.html
    </li>
    <li><a href="samples/lanzou">lanzou.client</a>
        : 获取蓝奏云分享直连
    </li>
    <li><a href="samples/ServerChan">ServerChan</a>
        : 微信推送 https://sc.ftqq.com
    </li>
    <li><a href="samples/Eventable">table.event</a>
        : 事件表 https://github.com/develephant/Eventable
    </li>
    <li><a href="samples/wkhtmltox">wkhtmltox</a>
        : 将网页转换为 PDF https://wkhtmltopdf.org/libwkhtmltox
    </li>
</dl>
