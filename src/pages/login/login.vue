<template>
  <div class="signBox">
    <el-input
      class="top"
      prefix-icon="el-icon-info"
      placeholder="账号 / 邮箱 / 手机号"
      clearable
      v-model="account">
    </el-input>
    <el-input
      class="top"
      type="password"
      prefix-icon="el-icon-goods"
      placeholder="密码"
      v-model="password">
    </el-input>
    <el-button
      class="button top"
      type="primary"
      @click="_login"
      :loading="loginLoading">
      {{ loginText }}
    </el-button>
    <div class="login-link top">
      <router-link :to="{name: 'findPassword'}" target="_blank">忘记密码</router-link>
      <router-link :to="{name: 'findAccount'}" target="_blank">忘记账号</router-link>
      <router-link :to="{name: 'register'}" target="_blank">免费注册</router-link>
    </div>
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
