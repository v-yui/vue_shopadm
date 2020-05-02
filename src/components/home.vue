<template>
  <el-container class="home_container">
    <el-header>
      <div>
        <div class="avatar_box">
          <img src="../assets/logo.png" />
        </div>
        <img src="../assets/home_Header.png" />
      </div>

      <el-button type="info" @click="loginOut">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle" @click="toggleCollapse">+</div>
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#3b6978"
          text-color="#fff"
          active-text-color="#99c440"
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true"
          :default-active="activePath"
        >
        <!-- 不变的index将使每一项无法单独控制展开；index只接收字符串，加空字符串使之成为字符串 -->
          <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
            <!-- 单项的模板 -->
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span>{{item.authName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index="'/' + subItem.path + ''" v-for="subItem in item.children"
             :key="subItem.id" @click="saveNavState('/' + subItem.path)">
              <template slot="title">
                <i class="el-icon-s-flag"></i>
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  created() {
    this.getMenu()
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  data() {
    return {
      menuList: [],
      isCollapse: false,
      activePath: ''
    }
  },
  methods: {
    loginOut() {
      // 退出部分，清空token再重定向到/login
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 获取左侧菜单栏数据
    async getMenu() {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menuList = res.data
    },
    // 折叠菜单切换
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    saveNavState(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>
<style scoped lang="less">
.home_container {
  height: 100%;
}
.el-header {
  background-color: #25596a;
  border-top: 7px double #3b6978;
  border-bottom: 7px double #204051;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  img {
    height: 50px;
  }
  .avatar_box {
    float: left;
    border: 2px solid #488f8d;
    border-radius: 5px;
    background-color: #edfbf4;
    box-shadow: 0 0 10px #3b6978;
    margin: 2px;
    width: 50px;
    height: 45px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
.el-aside {
  background-color: #3b6978;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #edfbf4;
}
.toggle {
  background-color: #507986;
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  color: #fff;
  cursor: pointer;
}
</style>
