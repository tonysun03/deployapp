# DOM扩展
## 选择符 API
### querySelector()
### querySelectorAll()
### matchesSelector()
检测是否会被`querySelector`和`querySelectorAll`方法返回
##元素遍历 （5个方法）
+ childElementCount
+ firstElementChild
+ lastElementChild
+ previousElementSibling
+ nextElementSibling

## HTML5
###与类相关的扩充
+ getElementsByClassName() 方法
+ classList
    + add
    + contains
    + remove
    + toggle
### 焦点管理
document.activeElement
### HTMLDocument 的变化
+ document.readyState
    + loading 正在加载文档
    + complete 已加载完文档
+ 兼容模式
    +IE为document 添加了一个compatMode 属性
+ head 属性
### 字符集属性 charset
document.charset = 'UTF-8'
### 自定义数据属性
定义 `data-XX`；使用 `div.dataset.XX`
### 插入标记
1. innerHtml属性
2. outerHtml 
3. insertAdjacentHtml('⬇️', dom)
    + beforebegin 同辈前一个
    + afterbegin 子元素第一个
    + beforeend 子元素随后一个
    + afterend 同辈后一个
4. 内存与性能问题
###scrollIntoView() 方法
使调用元素出现在视口中

##专有扩展
### 文档模式
 document.documentMode
### children 属性
children.length children[0]
### contains 方法
### 插入文本
1. innerText 属性
2. outerText 属性
### 滚动
+ scrollIntoViewIfNeeded
+ scrollByLines
+ scrollByPages
```js
// 将页面主题滚动5行
document.body.scrollBy(5)

// 当前元素不可见的时候进入浏览器视口
document.images[0].scrollIntoViewIfNeeded()

// 将页面主体往回滚动 1 页
document.body.scrollByPages(-1)
```
    