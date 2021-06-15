<template>
  <div class="container">
      <!-- 產品 -->
      <div class="container my-5">
        <div class="row">
          <div class="col-5">
            <div v-if="JSON.stringify(this.product) === '{}'"
            class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <img :src="product.imageUrl" :title="product.title" class="img-fluid" />
          </div>
          <div class="col-7">
            <h1>{{ product.title }}</h1>
            <span class="badge bg-info">{{ product.category }}</span>
            <p
              class="text-decoration-line-through"
            >
              原價 NT$ {{product.origin_price}}
            </p>
            <p>
              特價只要 NT$ {{product.price}}
            </p>
            <p>{{ product.description }}</p>
            <a
              href="#"
              class="btn btn-danger"
              >
              加入購物車</a
            >
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    getProduct(id) {
      this.$http
        .get(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product;
          } else {
            console.log(res.data.message);
          }
        }).catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    const { id } = this.$route.params;
    this.getProduct(id);
  },
};
</script>
