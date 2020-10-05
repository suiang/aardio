## 扩展库

### 如何使用

```js
//安装扩展库
_IMPORTURL["lanzou.client"] = "http://suiang.cn/aardio/lib/lanzou.client.tar.lzma"

import console;
import lanzou.client; //导入刚安装的扩展库

console.setTitle("Lanzou Client");

var lanzou = lanzou.client()
var list = lanzou.getShare("https://www.lanzous.com/b594057/", "5sfr");
console.dumpJson( list )

console.log( lanzou.getShare( list.text[1].id) )
console.pause(true);

```

