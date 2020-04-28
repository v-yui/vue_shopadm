<template>
  <div>
    <el-button type="info" @click="loginOut">退出</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    loginOut() {
      // 退出部分，清空token再重定向到/login
      // (写了路由导航守卫所以不重定向也可以
      window.sessionStorage.clear()
      // this.$router.push('/login')
    }
  }
}
</script>
<style scoped lang="less">
</style>
