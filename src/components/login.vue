<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像框 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" />
      </div>
      <!-- 表单区域  -->
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginRef"
        label-width="0px"
        class="login_form"
      >
        <!-- 添加验证规则 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-ren"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" :prefix-icon="passwordIcon"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLogin">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 写了一个小锁图标的动态修改
      passwordIcon: 'iconfont icon-suo',
      // 登录表单的数据绑定对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 验证规则对象
      loginRules: {
        username: [
          // 必填项， 提示信息， 失去焦点时触发
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs.loginRef.validate(async valid => {
        if (!valid) return 0
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) return this.$message.error('登录失败！')
        this.$message.success('登录成功！')
        this.passwordIcon = 'iconfont icon-suo1'
        // 把token保存到sessionStorage
        window.sessionStorage.setItem('token', res.data.token)
        this.$router.push('/home')
      })
    },
    resetLogin() {
      this.$refs.loginRef.resetFields()
      this.passwordIcon = 'iconfont icon-suo'
    }
  }
}
</script>
<style scoped lang="less">
.login_container {
  background-color: cadetblue;
  height: 100%;
}

.login_box {
  height: 300px;
  width: 450px;
  background-color: white;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #ccc;
    }
  }
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  //box-sizing  屬性 用於更改預設 CSS 盒子模型 中所計算的寬度和高度。
  //可以使用此屬性來模擬不正確支持CSS盒子模型規範的瀏覽器的行為。
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
