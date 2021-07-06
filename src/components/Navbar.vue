<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false"
      aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" aria-current="page"
          to="/">回前台</router-link>
          <router-link class="nav-link" aria-current="page"
          to="/admin/products">產品</router-link>
          <router-link class="nav-link" aria-current="page"
          to="/admin/orders">訂單</router-link>
          <router-link class="nav-link" aria-current="page"
          to="/admin/coupon">優惠券</router-link>
        </div>
          <button type="button" class="btn btn-outline-light ms-auto" @click="logout">登出</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_URL}/logout`;
      this.$http.post(api).then((res) => {
        if (res.data.success) {
          this.$router.push('/');
        }
      });
    },
  },
};
</script>
