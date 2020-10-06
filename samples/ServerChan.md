---
title: "微信推送"
---

#### 示例代码：

```js
_URL = "http://suiang.cn/aardio/lib/ServerChan.tar.lzma"
_IMPORTURL[""] = _URL

import console; 
import ServerChan;

var sc = ServerChan( "您的SCKEY" )
var re = sc.send("消息标题，最长为256，必填。"
	,"消息内容，最长64Kb，可空，支持MarkDown。")
console.dumpJson( re )	
console.pause(true);
```
