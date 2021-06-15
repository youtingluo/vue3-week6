<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="nav-link"
        aria-current="page" href="#">
        <img class="d-inline-block" src="../assets/logo.png" alt="logo" width="30" height="30">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarNav" aria-controls="navbarNav"
      aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link"
            aria-current="page" href="#">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link"
            aria-current="page" href="#">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/carts" class="nav-link"
            aria-current="page" href="#">購物車</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<style lang="scss">
.slide-enter-active, .slide-leave-active {
  transition: opacity 1s, transform .5s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
