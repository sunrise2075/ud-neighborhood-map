# 街区地图项目
 远程代码库地址 :https://github.com/sunrise2075/ud-neighborhood-map.git

## 搭建项目结构

### 目录结构

dist    目录下的内容是经过压缩处理、适合直接发布到服务器上的生产环境代码

src    开发目录

### 安装依赖库

安装bower：

`
npm install -g bower
`

安装KnockoutJS：

`
bower install knockout
`

## 使用依赖

## GoogleMap API

在index.html文件body元素的底部插入如下内容：

```$xslt
<script async defer type='text/javascript'
         src="https://maps.googleapis.com/maps/api/js?key=MY_GOOGLE_API_KEY&v=3&callback=initMap">
 </script>`

```

### KnockoutJS

在index.html文件body元素的底部插入如下内容：

```$xslt
<script  async defer type='text/javascript'
          src='/bower_components/knockout/dist/knockout.debug.js'></script>

```
``