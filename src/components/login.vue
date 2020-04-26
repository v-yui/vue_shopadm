<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像框 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" />
      </div>
      <!-- 表单区域  -->
      <el-form label-width="0px" class="login_form">
        <el-form-item >
          <el-input prefix-icon="iconfont icon-ren"></el-input>
        </el-form-item>
        <el-form-item >
          <el-input prefix-icon="iconfont icon-suo"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
            <el-button type="primary">主要按钮</el-button>
             <el-button type="info">信息按钮</el-button>
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
