---
title: "将网页转换为 PDF"
---

#### 使用说明

更多设置：[libwkhtmltox Setting](https://wkhtmltopdf.org/libwkhtmltox/pagesettings.html)

#### 示例代码

```js
_URL = "https://suiang.cn/aardio/lib/wkhtmltox.tar.lzma"
_IMPORTURL["wkhtmltox"] = _URL

import console; 
import wkhtmltox;

var pdf = wkhtmltox("http://ide.update.aardio.com/log/", "~\log.pdf")

//全局设置
pdf.global.size.pageSize = "A4"

pdf.global.margin = {
    top = "1cm",
    bottom = "1cm",
    left = "1cm",
    right = "1cm"
}

//对象设置：页眉
pdf.object.header = {
    fontSize = 6,
    fontName = "微软雅黑",
    spacing = 2.0,
    right = "更 新 日 志",
}

//对象设置：页脚
pdf.object.footer = {
    fontSize = 5,
    fontName = "Cascadia Code",
    spacing = 2.0,
    left = "[page]/[topage]",
    right = "http://ide.update.aardio.com/log",
}

//回调函数
pdf.onChanged = function(ctr,val){
    var msg = {
        "Loading pages",
        "Counting pages",
        "Resolving links",
        "Loading headers and footers",
        "Printing pages"
    }
    if(val==100) table.remove(msg)
    console.showLoading( string.format(" %s %s%%", msg[1], val) );  
}

pdf.onFinished = function(ctr, val){
    console.log('Convert pdf done.')
}

//获取版本号
console.log("wkhtmltox version:", pdf.getVersion() )

//转换
var ret = pdf.convert()
if(ret!=1) console.log("Convert pdf failed!")

console.pause(true);

```
