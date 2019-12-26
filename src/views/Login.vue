<template>
  <el-form :model="loginForm" :rules="fieldRules" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">{{$t('loginInfos.systemlogin')}}</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"/>
    </el-form-item>
    <el-form-item prop="password" >
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码" required/>
    </el-form-item>
    <!--<el-checkbox v-model="rememberMe" checked class="rememberMe">记住密码</el-checkbox>
    <el-checkbox v-model="notLogin" checked class="notLogin">7天免登陆</el-checkbox>-->
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:48%;" @click.native.prevent="reset">{{$t('loginInfos.reset')}}</el-button>
      <el-button type="primary" style="width:48%;" @click.native.prevent="login" :loading="loading">{{$t('loginInfos.login')}}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import Cookie from '@/utils/cookie'
  import { Message } from 'element-ui';
  export default {
    name: "Login",
    data: function() {
      // 自定义验证器
      let validateUsername = (rule, value, callback) => {
        if(!value) {
          Message.error('用户名不能为空');
          return false;
        }
        this.count++;
        return true;
      };
      let validatePassword = (rule, value, callback) => {
        if(!value) {
          // callback(new Error('密码不能为空'));
          Message.error('密码不能为空');
          return false;
        } else {
          // callback();
          this.count++;
          return true;
        }
      };
      return {
        count: 0,
        loading: false,
        // rememberMe: '',
        // notLogin: '',
        loginForm: {
          username: '',
          password: ''
        },
        fieldRules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
            { validator: validateUsername, trigger: 'blur'}
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 8, max: 20, message: '密码输入范围为 8 到 20 个字符', trigger: 'blur' },
            { validator: validatePassword, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      login: function() {
        console.log(this.count);
        let userInfo = {
          username: this.loginForm.username,
          password: this.loginForm.password
          // expires: this.notLogin
        };
        if(this.count === 2) {
          this.$api.login(userInfo).then(res => {
            // Cookie.cookieSet('Token', res.data.token);
            // 如果输入的用户名找不到用户，则提示该用户名不存在
            console.log(res);
            if(res.data.code === 10) {
              Message.error("该用户名不存在, 请重新输入用户名");
              return;
            }
            if(res.data.code === 11) {
              Message.error("用户密码错误, 请重新输入密码");
              return;
            }
            sessionStorage.setItem('user', userInfo.username);
            this.$router.push('/index');
          }).catch(err => {
            console.log(err);
          });
        } else {
          Message.error('信息填写有误');
        }
      },
      reset: function() {
        this.$refs.loginForm.resetFields();
      }
    }
  }
</script>

<style scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }

    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
