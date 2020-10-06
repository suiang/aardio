---
title: "事件表"
---

#### 示例代码：

```js
_URL = "http://suiang.cn/aardio/lib/table.event.tar.lzma"
_IMPORTURL["table.event"] = _URL

import console;
import table.event;

console.setTitle("Eventable");
var event = table.event;

// --Create some new evented tables
var cook = event()
var waiter = event()

// --Cook waits for order
cook.on('order', function(evt, food) {
    console.printf('Now cooking %s.', food)
    //-- Do something ...
    //console.varDump( evt )
    evt.caller.emit('order-up', food)
})

// --Waiter listens for order
waiter.on('order-up', function(evt, food) {
    console.printf('Your %s are served.', food)
})

// --Waiter places order
waiter.emit('order', 'Pancakes')


var etbl = event()
etbl.on('party', function(evt, when){
    console.printf('The party is %s.', when)
})

//etbl.emit('party', 'tonight')
etbl.goParty = function(when){
    owner.emit('party', when)
}
etbl.goParty('tonight')

//event.print( etbl, "-> " )

console.pause();
```
