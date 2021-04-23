# Description
```
This is a Vue component for selecting tree data nodes
```
# Install

``` 
npm install wl-tree
```
# Use

```
# In main.js
import WlTree from 'wl-tree'
Vue.use(WlTree)

# In *.vue
<wl-tree></wl-tree>  
```
# Attributes

参数 | 说明 | 类型 | 可选值 |  默认值  
---- | ---- | ---- | ---- | ---- 
data | 展示数据 | Object | |
className | 自定义 class | String | |
computeType | 计算节点的方式 |  String | default<br>just-check-one<br>only-check-one<br>just-check-child<br>just-check-all-child<br>just-disable-child|default  |


# Events

事件| 说明 | 参数 
----| ---- | ----  
check| 点击 checkBox  |  `item` - 返回当前节点   
arrow-toggle|  切换箭头 | `item` - 返回当前节点    
title-click | 点击标题    |  `item` - 返回当前节点 
change | 监听被选中节点    |  `item/items` - 返回被选中的节点   
 

 
 
