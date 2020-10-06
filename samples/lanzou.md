---
title: "获取蓝奏云分享直连"
---

#### 示例代码：


```js
_URL = "http://suiang.cn/aardio/lib/lanzou.client.tar.lzma"
_IMPORTURL["lanzou.client"] = _URL

import console;
import lanzou.client;

console.setTitle("Lanzou Client");

var nopl = "https://www.lanzoux.com/iRwihgmkl0j";
var purl = "https://www.lanzoux.com/i2XAqgmkl1a"
var pwd = "AArdio";

var lan = lanzou.client()

console.printf('无密码分享链接：\n%s\n', lan.getShare(nopl))
console.printf('有密码分享链接：\n%s', lan.getShare(purl, pwd))

var list = lan.getShare("https://www.lanzous.com/b594057/", "5sfr")
console.dumpJson( list )

console.log( lan.getShare( list.text[1].id) )

console.pause(true);

```
