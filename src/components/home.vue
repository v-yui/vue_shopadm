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
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#3b6978"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <!-- 单项的模板 -->
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="1-1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    loginOut() {
      // 退出部分，清空token再重定向到/login
      window.sessionStorage.clear()
      this.$router.push('/login')
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
}
.el-main {
  background-color: #edfbf4;
}
</style>
