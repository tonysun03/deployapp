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

    