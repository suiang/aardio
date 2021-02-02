---
title: "Sass 编译库"
---

#### 使用说明

- [基于开源组件libsass](https://github.com/sass/libsass)
- [Sass中文文档](https://www.sass.hk/docs/)
- 
#### 示例代码

```aardio
_URL = "https://suiang.cn/aardio/lib/libsass.tar.lzma"
_IMPORTURL["libsass"] = _URL

import libsass;
import console;

console.setTitle("SASS To CSS")

var scss = /**
.error {
  border: 1px solid red;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
//.seriousError从.error继承样式
.error a{  //应用到.seriousError a
  color: red;
  font-weight: 100;
}
h1.error { //应用到hl.seriousError
  font-size: 1.2rem;
}
**/

var sass = libsass(scss)
var css = sass.compile()

console.log( css )

console.pause(true);
```

#### 输出CSS：

```css
.error, .seriousError {
  border: 1px solid red;
  background-color: #fdd;
}

.seriousError {
  border-width: 3px;
}

.error a, .seriousError a {
  color: red;
  font-weight: 100;
}

h1.error, h1.seriousError {
  font-size: 1.2rem;
}
````