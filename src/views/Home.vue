<template>
  <Navbar></Navbar>
  <router-view>
  </router-view>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/UserNavbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
.slide-enter-active, .slide-leave-active {
  transition: opacity 1s, transform .5s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
