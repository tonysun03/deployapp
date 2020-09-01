# DOM
## node 类型
## document 类型
## element 类型
## text 类型
### 特征
+ nodeType === 3
+ nodeName 是 #text
+ nodeValue 的值为节点包含的文本
+ parentNode 是一个Element
+ 不支持子节点
### 方法
+ appendData(text) 添加
+ deleteData(offset, count) 删除
+ insertData(offset, text) 插入
+ replaceData(offset, count, text) 替换
+ splitText(offset) 分成两个
+ substringData(offset, count) 截取

### 创建文本节点
```js
var element = document.createElement('div')
element.className = 'message'

var textNode = document.createTextNode('Hello Word')
element.appendChild(textNode)

document.body.appendChild(element)
```
## Comment 类型
```html
<!-- 返回注释内容 -->
```
## 
