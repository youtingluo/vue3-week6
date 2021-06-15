<template>
  <div class="container mt-5">
    <div class="row">
        <div class="col-3">
          <h3>側邊欄位</h3>
        </div>
        <div class="col-9">
          <div class="spinner-border text-primary" role="status" v-if="!this.products[0]">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="row">
            <div class="col-md-4" v-for="item in products" :key="item.id">
              <div class="card rounded mb-3 border-top-0" @click="goToProduct(item)">
                <div
                  class="card-img-top"
                  alt="product"
                > <div class="child" :style="`background-image: url(${item.imageUrl})`"></div>
                <div class="card-body bg-primary
                text-white d-flex flex-column align-items-center justify-content-center">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <span class="badge bg-dark">{{ item.category }}</span>
                  <p class="card-text my-3">$ {{ item.price }}</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadingStatus: {
        isLoading: '',
      },
      products: [],
    };
  },
  methods: {
    getProducts() {
      this.$http
        .get(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products`)
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            this.products = res.data.products;
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
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss">
  .card {
    height: 300px;
    overflow: hidden;
    cursor: pointer;
    .card-img-top {
      height: 100%;
      overflow: hidden;
      transition: all .3s;
      z-index: 0;
      position: relative;
      .child {
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
      }
    }
    .card-body {
      z-index: 5;
      transition: all .3s ease-out;
      opacity: 0;
      left: 0;
      right: 0;
      top: 100%;
      position: absolute;
    }
    &:hover .card-img-top{
      transform: scale(1.2);
    }
    &:hover .card-body{
      top: 0;
      bottom: 0;
      opacity: 0.9;
    }
  }
</style>
