<template>
  <div class="container mt-5">
    <div class="row">
        <div class="col-3">
          <h3>側邊欄位</h3>
        </div>
        <div class="col-9">
          <div class="row">
            <div class="col-4" v-for="item in products" :key="item.id">
              <div class="card rounded mb-3 border-top-0">
                <div
                  class="card-img-top"
                  alt="product"
                  style="
                    height: 200px;
                    background-position: center;
                    background-size: cover;
                  "
                  :style="`background-image: url(${item.imageUrl})`"
                ></div>
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <span class="badge bg-info">{{ item.category }}</span>
                  <p class="card-text mt-3 text-info">$ {{ item.price }}</p>
                  <div class="d-flex justify-content-between">
                    <a
                      href="#"
                      class="btn btn-primary"
                      :class="{'disabled' : loadingStatus.isLoading === item.id}"
                      @click.prevent="getProduct(item.id)"
                      ><div
                        class="spinner-border spinner-border-sm"
                        role="status"
                        v-if="loadingStatus.isLoading === item.id"
                      >
                        <span class="visually-hidden"></span>
                      </div>
                      查看更多</a
                    >
                    <a
                      href="#"
                      class="btn btn-danger"
                      :class="{'disabled' : loadingStatus.isLoading === item.id}"
                      @click.prevent="addCart(item.id)"
                      ><div
                        class="spinner-border spinner-border-sm"
                        role="status"
                        v-if="loadingStatus.isLoading === item.id"
                      >
                        <span class="visually-hidden"></span>
                      </div>
                      加入購物車</a
                    >
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
      text: 'this is text',
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
  },
  mounted() {
    this.getProducts();
  },
};
</script>
