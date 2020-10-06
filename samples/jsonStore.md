---
title:  "JSON 存储服务"
---
#### 使用说明

此 JSON 存储服务允许您存储和共享 JSON bin，并在简单的 HTTP API 上操作此数据。<br />
可以创建和共享没有帐户的 bin，只有[创建帐户](https://extendsclass.com/create-account-form)才能使用 API 密钥（免费）创建私有 bin。

#### 使用限制

- 每月 10000 个请求
- Bin 限制为 100 KB
- 帐户配额：10 MB

#### 示例代码


```js

_URL = "http://suiang.cn/aardio/lib/jsonStore.tar.lzma"
_IMPORTURL["jsonStore"] = _URL

import console;
import jsonStore;

var jsonStore = jsonStore();
//------------------------------------------------------
console.log("Write a json bin.")
var json = jsonStore.write(
    name = "jon.snow"; age = 31;
);

var id = json.id;
console.dumpJson(json)

//------------------------------------------------------
console.log("Update this json bin.")
var json = jsonStore.update(id, {
    name = "snow";
    age = {
        year = 2020;
        mouth = 10;
        date = 11
    }
});
console.dumpJson(json)

//------------------------------------------------------
console.log("Partially update this json bin with JSON Merge Patch.")

var json = jsonStore.merge(id, {
    name = "jon.snow"; //改
    age = {
        year = "null"; //删
    };
    phoneNumber = "+01-123-456-7890" //增
});
console.dumpJson(json)

//------------------------------------------------------
console.log("Read this json bin.")
var json = jsonStore.read(id);
console.dumpJson(json)

//------------------------------------------------------
console.log("Delete this json bin.")

var json = jsonStore.delete(id);
console.dumpJson(json)

//------------------------------------------------------
console.pause()

```
