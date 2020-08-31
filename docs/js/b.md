# 闭包
::: tip
闭包是指有权访问另一个函数作用域中的变量函数
:::
:tada:
```js {3,4}
function createComparisonFunction(properName) {
    return function (object1, object2) {
        var value1 = object1[properName]
        var value2 = object2[properName]
        if (value1 < value2) {
            return -1
        } else if (value2 > value1){
            return 1
        } else {
            return 0
        }               
    }
}
```
在另一个函数内部定义的函数会将包含的函数（既外部函数）的活动对象添加的到它的作用域链中

```js {3}
var compare = createComparisonFunction('name')
var result = compare({name :'a'}, {name: 'b'})
compare = null  // 解除对匿名函数的引用，释放内存
```

## 闭包与变量
```js
function  createFunction () {
    var result = new Array()
    for (var i = 0; i < 10; i++){
        result[i] = function () {
            return i
        }
    }
    return result
}
```
## 关于this对象
```js
var name = 'The window'
var object = {
    name: 'my object',
    getName: function () {
        return this.name
    }
}

object.getName()
(object.getName)()
(object.getName = object.getName)() // 限执行了一条赋值语句， 这个赋值表达式的值式函数本身 所以this 的值不能维持 返回 my window
```


## 内存泄漏

```js {3,5,7}
function assignHandler () {
    var element = document.getElementById('someElement')
    var id = element.id
    element.onclick = function (ev) { 
        alert(id)
    }
    element = null
}
```
上面的代码中，通过把element.id 的副本保存在一个变量中，并且在闭包中引用该变量消除了循环应用。但仅仅坐到这一步，
还不能解决内存泄漏的问题。必须要记住：闭包会引用包含函数的整个活动对象。而其中包含着element。及时闭包不直接引用element
包含函数的活动对象中也仍会保存一个引用。因此，有必要把element变量设置为mull
这样就能够解除对DOM对象的引用，顺利的减少其引用数，确保正常回收其占用的内存。