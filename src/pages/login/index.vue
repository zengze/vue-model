<template>
  <div class="signBox">
    <div class="top">电子邮箱 / 手机号</div>
    <el-input class="top" v-model="account"></el-input>
    <div class="top">密码</div>
    <el-input class="top" type="password" v-model="password"> </el-input>
    <el-button class="button" type="primary" @click="_login" :loading="loginLoading">{{ loginText }}</el-button>
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  export default {
    data() {
      return {
        account: '',
        password: '',
        loginText: '登录',
        loginLoading: false
      }
    },
    methods: {
      _login() {
        this.loginText = '登录中';
        this.loginLoading = true;
        let params = {
          key: '42131',
          clientSign: 'abb',
          account: this.account,
          password: this.password
        }
        let self = this;
        axios.post('/zz/Porsche/CamcardPersonal/loginAndSplitCard', qs.stringify(params))
        .then(function (response) {
          if(response.status == 200) {
            self.loginText = '登录';
            self.loginLoading = false;
            let items = response.data.items;
            if(items.success) {
              self.$store.commit('LOGIN_SUCCESS_DATA', {'tableData': items.resume})
              self.$router.push('card');
            } else {
              alert(items.error);
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
  }
</script>

<style>
  .signBox {
    width: 350px;
    margin: 0px auto;
  }
  .button {
    width: 100%;
    margin-top: 10px;
  }
  .top {
    margin-top: 10px;
  }
</style>
