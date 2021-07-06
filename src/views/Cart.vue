<template>
<div class="banner d-flex align-items-center justify-content-center">
    <h2 class="text-white fw-bold bg-primary
    border-bottom border-3 d-inline-block py-3 px-5">您的購物車</h2>
  </div>
  <section class="py-5">
    <div class="container">
      <!-- 購物流程 -->
      <div class="d-flex justify-content-center mb-3">
        <div class="progresses">
          <div class="steps bg-primary rounded-circle">
            <span class="font-weight-bold">1</span>
          </div>
          <span class="line bg-primary"></span>
          <div class="steps bg-primary">
            <span class="font-weight-bold">2</span>
          </div>
          <span class="line bg-primary"></span>
          <div class="steps bg-primary"><span class="font-weight-bold">3</span></div>
        </div>
      </div>
      <!-- 購物流程 END -->
      <div class="row">
        <div class="col-lg-8">
          <table class="table text-primary">
            <thead class="text-dark bg-secondary border-0">
              <tr>
                <th width="">品項</th>
                <th class="d-none d-lg-table-cell">圖片</th>
                <th>單價</th>
                <th class="d-none d-lg-table-cell">數量</th>
                <th class="d-none d-lg-table-cell">金額</th>
                <th>移除</th>
              </tr>
            </thead>
            <tbody class="js-cartItem">
              <tr
                v-for="item in carts.carts"
                :key="item.id"
              >
                <td>
                  <p class="fw-bold">{{ item.product.title }}</p>
                  <div class="wrap">
                    <img class="d-lg-none" :src="item.product.imageUrl" alt="product" />
                  </div>
                </td>
                <td class="d-none d-lg-table-cell">
                  <div class="wrap">
                    <img :src="item.product.imageUrl" alt="product" />
                  </div>
                </td>
                <td>
                  <p>NT$ {{ item.product.price }}</p>
                  <div class="input-group d-flex d-lg-none">
                    <div class="btn btn-outline-primary">-</div>
                    <input type="number" class="form-control text-center"
                    aria-label="number" :value="item.qty">
                    <div class="btn btn-outline-primary">+</div>
                  </div>
                </td>
                <td class="d-none d-lg-table-cell">
                  <div class="input-group">
                    <div class="btn btn-outline-primary">-</div>
                    <input type="number" class="form-control text-center"
                    aria-label="number" :value="item.qty">
                    <div class="btn btn-outline-primary">+</div>
                  </div>
                </td>
                <td class="d-none d-lg-table-cell">NT$ {{ item.total }}</td>
                <td>
                  <a @click.prevent="removeCarts(item.id)"
                  class="btn btn-outline-danger material-icons-outlined text-decoration-none
                  " :class="{ disabled: icon.isLoading === item.id }">
                    <span v-if="icon.isLoading === item.id"
                    class="spinner-border spinner-border-sm"></span>
                    <span v-else class="align-base">delete_outline</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-end fw-bold text-secondary fs-5">總價：{{ carts.final_total }}</div>
          <div class="d-flex justify-content-between my-3">
            <div class="btn btn-outline-primary">↼ 繼續購物</div>
            <div class="btn btn-primary">下一步 ⇀</div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="order p-3 border border-3 bg-secondary">
            <h4>訂單列表</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
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
            emitter.emit('update-cart');
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
  },
  created() {
    this.getCarts();
  },
};
</script>

<style lang="scss">
.banner {
  width: 100%;
  min-height: 300px;
  background-image: url("https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  h2 {
    background-color: brown;
    mix-blend-mode: screen;
  }
}
.js-cartItem tr {
  vertical-align: middle;
}
@media (max-width: 769px) {
  .js-cartItem tr {
    vertical-align: bottom;
  }
}
.wrap {
  width: 120px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100px;
  }
}
// 進度條
.progresses {
    display: flex;
    align-items: center
}

.line {
    width: 120px;
    height: 6px;
}

.steps {
    display: flex;
    flex-direction: column;
    color: #fff;
    font-size: 14px;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border-radius: 50%
}
</style>
