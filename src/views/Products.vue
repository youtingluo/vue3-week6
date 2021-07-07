<template>
  <Loading :active="isLoading" :z-index="1060" loader="bars" color="#84543B"></Loading>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-lg-3 mb-3 mb-lg-0">
        <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action active"
            aria-current="true"
          >
            咖啡豆
          </a>
          <a href="#" class="list-group-item list-group-item-action"
            >A second link item</a
          >
          <a href="#" class="list-group-item list-group-item-action"
            >A third link item</a
          >
          <a href="#" class="list-group-item list-group-item-action"
            >A fourth link item</a
          >
        </div>
      </div>
      <div class="col-lg-9">
        <div class="row">
          <div
            class="col-md-6 col-xl-4 mb-3"
            v-for="item in products"
            :key="item.id"
          >
              <div class="product h-100" @click="goToProduct(item)">
                <div>
                  <div class="products-img-wrap">
                    <div
                      class="products-img h-100"
                      :style="`background-image: url(${item.imageUrl})`"
                    ></div>
                  </div>
                  <div class="d-flex flex-column justify-content-between p-4">
                    <div>
                      <h2 class="fs-2">{{ item.title }}</h2>
                      <p class="fs-4">$ {{ item.price }}</p>
                      <p
                        class="ellipsis text-primary"
                        v-html="item.content"
                      ></p>
                      <button
                  type="button"
                  class="btn btn-outline-primary"
                  :class="{ disabled: loadingStatus.isLoading === item.id }"
                  @click.stop="addToCart(item.id)"
                >
                  <span
                    v-if="loadingStatus.isLoading === item.id"
                    class="spinner-border spinner-border-sm me-3"
                  ></span
                  ><span class="align-middle material-icons-outlined">
                  add_shopping_cart
                  </span>加入購物車
                </button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <Pagination :pages="pagination" @get-page="getProducts"></Pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import emitter from '../assets/javascript/emitter';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      loadingStatus: {
        isLoading: '',
      },
      isLoading: false,
      products: [],
      pagination: {},
      qty: 1,
    };
  },
  methods: {
    addToCart(id) {
      const cart = { product_id: id, qty: this.qty };
      this.loadingStatus.isLoading = id;
      this.$http
        .post(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`, { data: cart })
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            console.log(res.data);
            this.loadingStatus.isLoading = '';
            emitter.emit('update-cart');
          } else {
            console.log(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getProducts(page = 1) {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products?page=${page}`)
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            this.isLoading = false;
            this.products = res.data.products;
            this.pagination = res.data.pagination;
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

<style lang="scss" scoped>
.product {
  cursor: pointer;
  background-color: #eee;
  transition: 0.3s;
  &:hover {
    box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.2);
  }
  &:hover .products-img {
    transform: scale(1.2);
  }
  .products-img-wrap {
    height: 300px;
    overflow: hidden;
    .products-img {
      background-size: cover;
      background-position: center;
      transition: 0.3s;
    }
  }
}

.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
