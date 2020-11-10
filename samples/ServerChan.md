---
title: "微信推送"
---

#### 使用说明

1. 登入：用GitHub账号[登入网站](http://sc.ftqq.com/?c=github&a=login)，就能获得一个[SCKEY](http://sc.ftqq.com/?c=code)（在「发送消息」页面）
2. 绑定：点击[「微信推送」](http://sc.ftqq.com/?c=wechat&a=bind)，扫码关注同时即可完成绑定

#### 示例代码

```js
_URL = "https://suiang.cn/aardio/lib/ServerChan.tar.lzma"
_IMPORTURL["ServerChan"] = _URL

import console; 
import ServerChan;

var sc = ServerChan( "您的SCKEY" )
var re = sc.send("消息标题，最长为256，必填。"
	,"消息内容，最长64Kb，可空，支持MarkDown。")
console.dumpJson( re )	
console.pause(true);
```
