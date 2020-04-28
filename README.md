# vue_shopadm

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



#### 2020.4.23 
 1. 安装Vue脚手架；

 2. vue ui 创建项目并安装Babel，Router，Linter；

 3. 安装Element-UI，axios；

#### 2020.4.24
1. 安装PHPStudy，导入数据库(lib/mydb.sql);
2. 运行后台接口(lib/vue_api_server.rar),执行` npm install` , `node .\app.js` ;
2. 使用postman测试接口(接口文档为lib/电商管理后台 API 接口文档.md)；

#### 2020.4.26
1. 发现之前新建的login分支中的代码丢失了一部分，没有发现问题所在(或许是忘了保存8)，Element-UI也不见了，但是由于没意识到所以捣鼓了半天也没修复好，于是重建了login2分支来写登录组件；
2. 编写了大致布局及头像框，使用Element-UI来完成登录组件的表单部分；
3. 在阿里图标库选用需要的icon，下载代码复制到assets文件夹(css,eot,svg,ttf,woff文件)在main.js中引入iconfont.css文件，在需要的地方作为属性值写入；

#### 2020.4，27
1. 为Element-UI表单添加model属性绑定数据；
2. 在写login组件的data时报错，原因是esllint规定括号函数括号前需要一个空格 ，在.eslintrc.js的rules中添加 `'space-before-function-paren':0`即可；
3. 通过rules属性为Element-UI表单添加验证规则实现表单验证；
4. ref获得表单的引用对象，使用Element-UI 的resetFields 完成重置按钮；
5. 使用axios完成登录请求部分；
6. 使用Element-UI的Message来完成登录状态的提示，将Message挂载到Vue原型对象上使得项目每个组件都可以通过this来访问$Message以使用Message提示；

#### 2020.4.28
1. 为路由对象添加导航守卫beforeEach控制访问权限；
2. 在home页增加退出按钮，用清空token来实现(因为上一步的导航守卫检测到没有token会重定向到login页)；

