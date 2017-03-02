# 街区地图项目
 远程代码库地址 :https://github.com/sunrise2075/ud-neighborhood-map.git
 
 git-pages网页访问地址：https://sunrise2075.github.io/ud-neighborhood-map/

## 搭建项目结构

### 目录结构

dist    目录下的内容是经过压缩处理、适合直接发布到服务器上的生产环境代码

src    开发目录

### 搭建gulp工作流

```
npm install --save-dev gulp gulp-uglify jshint gulp-jshint gulp-rename gulp-concat gulp-sourcemaps gulp-clean

npm install --save-dev gulp-plumber gulp-connect jshint-stylish gulp-csslint rimraf gulp-clean-css gulp-image
```
### 启动项目
```
gulp
```

### 安装依赖库

安装bower：

`
npm install -g bower
`

安装KnockoutJS：

`
bower install knockout
`

安装Bootstrap：

```
bower install bootstrap

bower install jquery-migrate
```

## 使用依赖

## GoogleMap API

在index.html文件body元素的底部插入如下内容：

```$xslt
<script async defer type='text/javascript'
        src="https://maps.googleapis.com/maps/api/js?key=MY_GOOGLE_API_KEY&v=3&callback=initMap">
 </script>

```

### KnockoutJS

在index.html文件body元素的底部插入如下内容：

```$xslt
<script  async defer type='text/javascript'
         src='/bower_components/knockout/dist/knockout.debug.js'></script>

```

### Bootstrap

    在index.html文件引入Bootstrap的样式、jquery和bootstrap.min.js

### 使用开源的JQuery搜索框

    参考链接：http://thefinishedbox.com/freebies/scripts/jquery-animated-search/