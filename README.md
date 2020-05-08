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
3. 合并login2分支到master；
4. 使用Element-UI的Container布局容器完成home页的基本布局并美化Header区；
5. 使用Element-UI的NavMenu导航菜单，梳理后完成侧边栏基本格式；
6. 需要授权的API需要在请求头中使用Authorization字段提供token令牌，通过axios请求拦截器添加token，保证拥有获取数据的权限；

#### 2020.4.30
1. 调用home组件的created，请求左侧菜单栏的数据；
2. 使用v-for渲染菜单栏数据；
3. 侧边栏的icon替换，折叠展开效果等；
4. main部分的路由跳转；

#### 2020.5.2
1. 为左侧栏添加刷新/回退操作后的高亮保持；
2. 使用Element-UI的Breadcrumb 面包屑完成Users的导航栏；
3. 使用Element-UI的Card 卡片完成Users的卡片视图区域，并覆盖默认样式写入global.css；
4. 使用Element-UI的Input 输入框添加至Users的卡片视图区域，并使用Row 组件来控制栅格布局；

#### 2020.5.6
1. 从接口获取用户列表数据；
2. 使用Element-UI的Table 表格渲染数据；
3. 使用v-slot插槽将用户列表状态栏渲染为Element-UI的Switch 开关样式；
4. 使用v-slot插槽和Element-UI的Button图标按钮及Tooltip 文字提示完成用户列表的操作栏；

#### 2020.5.7
1. 使用Element-UI的Pagination 分页为用户列表添加分页显示功能；
2. 完成通过状态栏的开关修改后台数据功能；
3. 完成搜索框过滤用户列表功能；
4. 并使用Element-UI的Dialog 对话框和Form 表单完成添加用户的表单；

#### 2020.5.8
1. 完成添加用户功能；
2. 完成修改用户信息功能，实现方式同添加用户，但要通过id获取该用户数据预写在表单中；
3. 完成删除用户功能，使用Element-UI的MessageBox 弹框进行删除确认；