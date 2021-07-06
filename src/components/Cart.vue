<template>
  <!-- 商品 -->
  <div v-if="carts.carts.length === 0" class="pt-5">
    <h2 class="text-danger fw-bold text-center">您目前還沒選購 :(</h2>
    <router-link to="/products"
      data-bs-dismiss="offcanvas"
      class="btn btn-dark d-block mt-3">
      前往購物
      <span class="align-middle material-icons-outlined"> trending_flat </span>
    </router-link>
  </div>
  <div v-else class="card-wrap py-2 p-md-3" v-for="item in carts.carts" :key="item.id">
    <div class="d-flex">
      <div>
          <img
            :src="item.product.imageUrl"
            title="item.product.title"
            alt="product Image"
          />
      </div>
      <div class="d-flex flex-column justify-content-between ms-auto">
        <div>
          <h5>{{ item.product.title }}</h5>
        </div>
        <div class="d-flex justify-content-end align-items-center">
          <p class="mb-0">{{ item.qty }} x NT$ {{ item.product.price }}</p>
          <button
            type="button"
            class="btn btn-sm btn-outline-danger ms-3"
            @click.prevent="removeCarts(item.id)"
          >
            <span class="material-icons-outlined"> remove </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '../assets/javascript/emitter';

export default {
  data() {
    return {
      carts: {
        carts: [],
      },
      icon: {
        isLoading: '',
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
    updateCart(item, qty) {
      this.icon.isLoading = item.id;
      const cart = { product_id: item.product_id, qty };
      this.$http
        .put(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`, { data: cart })
        .then((res) => {
          if (res.data.success) {
            console.log(res.data.message);
            this.getCarts();
            this.icon.isLoading = '';
          } else {
            console.log(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removeCarts(id) {
      this.icon.isLoading = id;
      this.$http
        .delete(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then((res) => {
          if (res.data.success) {
            this.icon.isLoading = '';
            this.getCarts();
          } else {
            console.log(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removeAllCarts() {
      this.$http
        .delete(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/carts`)
        .then((res) => {
          if (res.data.success) {
            console.log(res.data.message);
            this.$router.push('/products');
          } else {
            console.log(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goToProduct(item) {
      this.$router.push(`/product/${item.id}`);
    },
  },
  created() {
    this.getCarts();
    emitter.on('update-cart', () => {
      this.getCarts();
    });
  },
};
</script>

<style lang="scss" scoped>
.card-wrap {
  width: 100%;
    img {
    object-fit: cover;
    width: 100px;
    height: 100px;
  }
}

</style>
