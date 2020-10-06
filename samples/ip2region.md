---
title: "获取 IP 信息"
---

#### 示例代码：

```js
_URL = "http://suiang.cn/aardio/lib/ip2region.tar.lzma"
_IMPORTURL["ip2region"] = _URL

import console; 
import ip2region;
var region = ip2region("\res\ip2region.db");

var ip = ip2region.getIp();
var info = region.getIpInfo( ip );
 
console.varDump( info )
 
console.log( tostring( info ) )
console.pause(true);
```
