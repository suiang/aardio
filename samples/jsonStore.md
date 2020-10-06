---
layout: post
title:  "JSON 存储服务"
---

#### 示例代码


```js

/*
JSON storage service
https://extendsclass.com/json-storage.html.
This JSON storage service allows you to store and share JSON bins, and manipulate this data over a simple HTTP API.
You can create and share bin without account. You must create a free account to use HTTP API (in order to have an API key)
*/
_IMPORTURL["jsonStore"] = "http://suiang.cn/aardio/lib/jsonStore.tar.lzma"

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
