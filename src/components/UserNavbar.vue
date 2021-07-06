<template>
  <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light py-3">
    <div class="container">
      <div class="me-auto">
        <router-link class="navbar-brand font" to="/">
          <img class="logo" src="../assets/logo.svg" alt="logo" />
          <span class="fw-bold ms-2">Cafe Beat</span></router-link
        >
      </div>
      <a
        class="
          cart
          me-2
          text-decoration-none
          d-line-block d-lg-none
        "
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <span class="material-icons align-middle fs-2">
          shopping_cart </span
        ><span
          class="
            fs-7
            badge
            text-white
            bg-primary
            rounded-circle
            border border-primary
            shadow
          "
        >
          {{ carts.carts.length }}</span
        ></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="list d-lg-flex align-items-center my-3 my-lg-0">
          <li class="mb-3 mb-lg-0">
            <router-link
              to="/products"
              class="
                btn btn-outline-primary
                text-decoration-none
                rounded-pill
                d-block d-lg-inline-block
              "
            >
              <span class="material-icons align-middle me-2"> list </span
              >產品列表</router-link
            >
          </li>
          <li>
            <a
        class="
          cart
          me-2
          text-decoration-none
          d-none d-lg-block
        "
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <span class="material-icons align-middle me-2 fs-2">
          shopping_cart </span
        ><span
          class="
            fs-6
            badge
            text-white
            bg-primary
            rounded-circle
            border border-primary
            shadow
          "
        >
          {{ carts.carts.length }}</span
        ></a
      >
          </li>
          <!-- cart -->
          <!-- <li><div class="btn-group">
            <button class="btn btn-outline-primary dropdown-toggle"
            type="button" id="dropdownMenuClickableInside"
            data-bs-toggle="dropdown" data-bs-auto-close="outside"
            aria-expanded="false" data-bs-display="static">
              <span class="material-icons align-middle me-2">
            shopping_cart
            </span>購物車
            </button>
            <button class="btn btn-primary" type="button"
            data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"><span class="material-icons align-middle me-2">
            shopping_cart
            </span>購物車</button>
          </div></li> -->
        </ul>
      </div>
    </div>
  </nav>

  <!-- 購物車側攔 -->
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header bg-primary align-items-baseline">
      <h4 id="offcanvasRightLabel" class="text-white">您的購物車</h4>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body position-relative pb-5">
      <Cart></Cart>
    </div>

    <router-link
    to="/carts"
    data-bs-dismiss="offcanvas"
    v-if="carts.carts.length !== 0"
    class="btn btn-dark position-absolute text-white rounded-0
    bottom-0 w-100 py-3 text-center text-decoration-none">
      前往結帳
    </router-link>
  </div>
</template>

<script>
import Cart from '@/components/Cart.vue';
import emitter from '../assets/javascript/emitter';

export default {
  components: {
    Cart,
  },
  data() {
    return {
      carts: {
        carts: [],
      },
    };
  },
  methods: {
    getCarts() {
      this.$http
        .get(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          if (res.data.success) {
            console.log(res);
            this.carts = res.data.data;
          } else {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getCarts();
    emitter.on('update-cart', () => {
      this.getCarts();
    });
  },
};
</script>
