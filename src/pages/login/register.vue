<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="账号" prop="account">
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPassword">
        <el-input type="password" v-model="form.checkPassword"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <!-- <el-form-item label="手机" prop="mobile">
        <el-input v-model="form.mobile"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="_onSubmit" :loading="submitLoading">{{ submitText }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs';

  export default {
    data() {
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form.checkPassword !== '') {
            this.$refs.form.validateField('checkPassword');
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        submitText: '确定',
        submitLoading: false,
        form: {
          account: '',
          password: '',
          name: '',
          mobile: '',
          email: ''
        },
        rules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, validator: validatePass, trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
          checkPassword: [
            { required: true, validator: validatePass2, trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
          email: [
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ]
        }
      }
    },
    methods: {
      _onSubmit() {
        this.$refs.form.validate((valid) => {
          if(valid) {
            this.submitText = '提交中';
            this.submitLoading = true;
            let self = this;
            axios.post('/zz/user/regUser', qs.stringify(this.form))
            .then((response) => {
              if(response.status == 200) {
                self.submitText = '确定';
                self.submitLoading = false;
                let result = response.data;
                if(result.success) {
                  self.$alert(result.message, {
                    confirmButtonText: '确定',
                    callback: () => self.$router.push('login')
                  });
                } else {
                  alert(result.message);
                }
              }
            })
            .catch((error) => {
              console.log(error);
            });
          }
        });
      }
    }
  }
</script>

<style>
  .el-form {
    width: 450px;
    margin: 0px auto;
  }
</style>
