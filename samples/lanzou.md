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

var lanzou = lanzou.client()

console.printf('无密码分享链接：\n%s\n', lanzou.getShare(nopl))
console.printf('有密码分享链接：\n%s', lanzou.getShare(purl, pwd))

var list = lanzou.getShare("https://www.lanzous.com/b594057/", "5sfr");
console.dumpJson( list )

console.log( lanzou.getShare( list.text[1].id) )

console.pause(true);

```
