<template>
  <div class="banner d-flex align-items-center justify-content-center">
    <h2 class="text-white fw-bold bg-primary
    border-bottom border-3 d-inline-block py-3 px-5">產品內容</h2>
  </div>
  <!-- 原本 -->
  <!-- 原本END -->
<section class="product">
  <div class="row g-0">
    <div class="col-lg-6 background">
      <div class="product-img p-5 d-flex flex-column justify-content-center align-items-center">
        <div class="img-wrap my-5 my-lg-0">
          <img :src="product.imageUrl" alt="">
            <h3 class="badge bg-primary fs-6 mt-3">{{ product.category }}</h3>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="product-info d-flex flex-column justify-content-md-center align-items-start">
        <h1 class="mt-5 mt-lg-0">{{ product.title }}
  </h1>
        <p class="my-3 my-lg-5 lh-md text-secondary" v-html="product.content"></p>
        <del class="text-muted text-line-through">原價：{{ product.origin_price }}</del>
        <p class="mb-5 fw-bold text-secondary h3">售價：{{ product.price }}</p>
        <div class="d-flex w-100 mb-5 mb-lg-0">
          <select class="form-select me-3 w-50" aria-label="select qty" v-model.number="qty">
            <option selected disabled>選擇數量</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="btn btn-outline-secondary">加入購物車</div>
        </div>
      </div>
    </div>
  </div>
</section>
      <section class="bg-primary py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-white">
              <div class="p-3">
                <h3 class="border-bottom border-3 border-secondary
                p-3 d-inline-block mb-3">商品規格</h3>
                <ul>
                  <li v-for="(str, key) in desStr" :key="key"><p>{{ str }}</p></li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 text-white">
              <div class="p-3">
                <h3 class="border-bottom border-3 border-secondary
                p-3 d-inline-block mb-3">退換貨須知</h3>
                <ol>
                  <li><p>請注意：除商品本身瑕疵外，為顧及個人衛生問題，拆封後恕無法退換貨，敬請見諒。
          務必保持商品及相關配件完整性，並請於收到商品日起 7 天內（含假日）與我們聯繫，辦理換貨事宜（外包塑膠膜已撕開或商品塑膠袋已打開，即算開封狀態）
                  </p></li>
                  <li>
                    <p>依《消保法》規定，消費者有 7 日商品鑑賞期之權益。猶豫期非試用期，
                      商品需全新未開封，若商品已開封，恕無法辦理退貨退款手續。收到商品超過 7 天，恕不接受退貨。
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      qty: 1,
      desStr: [],
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
    addToCart(id) {
      const cart = { product_id: id, qty: this.qty };
      this.$http
        .post(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`, { data: cart })
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            console.log(res.data);
          } else {
            console.log(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  watch: {
    product: {
      handler(val) {
        const desArr = val.description.split(',');
        this.desStr = desArr;
      },
      deep: true,
    },
  },
  mounted() {
    const { id } = this.$route.params;
    this.getProduct(id);
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
  // .product-img img{
  //   width: 100%;
  //   height: 400px;
  //   object-fit: cover;
  //   border-radius: 5px;
  //   box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  // }
  .button {
  text-decoration: none;
  padding: 1rem;
  background-color: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  &:hover {
    color: #fff;
  }
  &::before {
    transition: 0.3s ease-in-out;
    content: "";
    position: absolute;
    left: -1px;
    top: 0;
    width: 0px;
    height: 100%;
    background-color: #000;
    z-index: -1;
  }
  &:hover::before {
    content: "";
    left: 0;
    top: 0;
    width: 100%;
  }
}
@mixin pc {
  @media (max-width: 1025px) {
    @content;
  }
}
.product-info {
  background-color: #000;
  opacity: 0.9;
  height: 100vh;
  color: #fff;
  padding-left: 10%;
  @include pc {
    height: 100%;
  }
  h1 {
    font-size: 10vmin;
    text-align: left;
    @include pc {
      font-size: 8vmin;
    }
  }
}
.background {
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 1;
  background-image: url(https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80);
}
.product-img {
  height: 100%;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    background-color: #84543b;
    inset: 0;
    mix-blend-mode: multiply;
    z-index: -1;
  }
  .img-wrap {
    position: relative;
    padding: 10px;
    height: 600px;
    background: #e6af21;
    border-radius: 5px 5px 60px 5px;
    box-shadow: 12px 12px 7px rgba(0, 0, 0, 0.7);
    &:before {
      content: "";
      width: 25px;
      height: 20px;
      position: absolute;
      bottom: 0;
      right: 0;
      border-bottom-right-radius: 30px;
      box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.3);
      transform: rotate(-20deg) skew(-40deg, -3deg) translate(-13px, -13px);
    }
    &:after {
      content: "";
      z-index: -1;
      width: 100px;
      height: 100px;
      position: absolute;
      bottom: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.2);
      display: inline-block;
      box-shadow: 20px 20px 8px rgba(0, 0, 0, 0.2);
      transform: rotate(0deg) translate(-45px, -20px) skew(20deg);
    }
    img {
      width: 100%;
      height: 520px;
      object-fit: cover;
    }
  }
}

</style>
