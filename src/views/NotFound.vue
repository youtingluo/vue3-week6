<template>
  <div class="bg vh-100 d-flex justify-content-center align-items-center">
    <div class="container-fluid">
    <div class="text p-5 d-flex justify-content-center flex-column align-items-center">
    <img src="../assets/sad_cup.svg" alt="">
    <h1 class="text-white fw-bold my-5 text-center">404 NOT FOUND</h1>
    <div class="d-flex">
      <router-link to="/" class="btn btn-primary me-3 btn-lg-lg">回首頁</router-link>
      <router-link to="/products" class="btn btn-primary">我要購物</router-link>
    </div>
    </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  h1 {
    font-size: 10vmin;
  }
  .bg {
    background-image: url(https://images.unsplash.com/photo-1625520074724-dfe035d40e30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .text {
    background: rgba(0,0,0,.5);
  }
</style>
