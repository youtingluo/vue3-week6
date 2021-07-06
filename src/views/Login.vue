<template>
  <div class="login">
    <h1>登入</h1>
    <Form v-slot="{ errors }" @submit="signIn">
    <div class="mb-3">
      <label for="email" class="form-label">帳號</label>
      <Field id="email" name="帳號" type="email" class="form-control"
      :class="{ 'is-invalid': errors['帳號'] }" placeholder="請輸入 Email"
      rules="email|required" v-model="user.username"></Field>
      <error-message name="帳號" class="invalid-feedback"></error-message>
    </div>

    <div class="mb-3">
      <label for="password" class="form-label">密碼</label>
      <Field id="password" name="密碼" type="password" class="form-control"
      :class="{ 'is-invalid': errors['密碼'] }" placeholder="請輸入密碼"
      rules="required" v-model="user.password"></Field>
      <error-message name="密碼" class="invalid-feedback"></error-message>
    </div>
    <button class="btn btn-primary" type="submit" @click="signIn">登入</button>
  </Form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {},
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_URL}/admin/signin`;
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          const { token, expired } = res.data;
          document.cookie = `ytToken=${token}; expires=${new Date(expired)}`;
          this.$router.push('/admin/products');
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
  .login {
    background-color: #eee;
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
