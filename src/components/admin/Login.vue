<template>
  <div class="login_container">
      <div class="login_box">
        <el-form ref="loginFormRef" :model="loginForm" :rules="rules" class="login_form">
            <el-form-item prop="name">
                <el-input v-model="loginForm.name" prefix-icon="iconfont icon-user"></el-input>
            </el-form-item>
            <el-form-item prop="pwd">
                <el-input v-model="loginForm.pwd" prefix-icon="iconfont icon-mima" type="password"></el-input>
            </el-form-item>
            <el-form-item class="btns">
                <el-button type="primary" @click="login">登录</el-button>
                <el-button type="info" @click="resetForm">重置</el-button>
            </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        // 登录表单内容
        loginForm: {
          name: '',
          pwd: ''
        },
        // 表单输入规则
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          pwd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
        resetForm() {
            this.$refs["loginFormRef"].resetFields();
        },
        login(){
            this.$refs["loginFormRef"].validate(async valid => {
                if(!valid) return;
                // 发起登录请求
                const {data:res} = await this.$http.post('admin/adminlogin.php',this.loginForm);
                // console.log(res);
                if(res[0] == 0){
                  this.$message.success("登录成功！");
                  window.sessionStorage.setItem("admin_id",res[1]);
                  // 将管理员id存储到客户端的sessionStorage中
                  // console.log(window.sessionStorage["admin_id"]);
                  // 编程式导航,若登录成功，页面跳转到管理员主页
                  // 官网解释：https://router.vuejs.org/zh/guide/essentials/navigation.html
                  this.$router.push('/adminhome');
                }else if(res[0] == 1){
                  return this.$message.error("用户名不存在！");
                }else if(res[0] == 2){
                  return this.$message.error("密码错误！");
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.login_container{
    background-color: #2b4b6b;
    height:100%;
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.login_form {
  position: absolute;
  width: 90%;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

.btns {
  display:flex;
  justify-content: flex-end;
}
</style>
