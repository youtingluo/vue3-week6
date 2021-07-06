<template>
  <Navbar></Navbar>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: { Navbar },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)ytToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common.Authorization = token;
      this.$http.post(`${process.env.VUE_APP_URL}/api/user/check`)
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/admin/products');
          } else {
            this.$router.push('/login');
          }
        });
    },
  },
  created() {
    this.checkLogin();
  },
};
</script>
