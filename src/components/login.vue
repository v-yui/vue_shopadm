<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像框 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" />
      </div>
      <!-- 表单区域  -->
      <el-form label-width="0px">
        <el-form-item >
          <el-input></el-input>
        </el-form-item>
        <el-form-item >
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
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
</style>
