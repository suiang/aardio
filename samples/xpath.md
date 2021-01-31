---
title: "简单类 xpath 支持库"
---

#### 使用说明

- 支持 .class、#id 和 html标签。
- [n] 取第 n 个节点，路径中省略默认 [1]，结尾省略 [] 返回全部节点。
- 尾部支持 @ 取属性值，text() 取文本。

#### 示例代码

```aardio
_URL = "https://suiang.cn/aardio/lib/xpath.tar.lzma"
_IMPORTURL["xpath"] = _URL

import xpath;
import console; 
import web.rest.htmlClient

_url = "http://www.ulzdk.com"

var http = web.rest.htmlClient();
var api = http.api(_url);
var bindNode = xpath.bind

//搜索视频
search = function(s){
    var doc = api.search[s].get();
    var li = bindNode(doc)(".mb20/li")
    return table.map(li,function(v,k,result){
        var xpath = bindNode(v);
        result[k] = {
            title = xpath("div/a/@title"),
            href  = xpath("div/a/@href"),
            img   = xpath("div/a/img/@src"),
        }
    });  
}

console.dumpJson( search("工作细胞") )

console.pause(true);
```
