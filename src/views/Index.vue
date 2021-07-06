<template>
  <header class="position-relative">
    <img
      class="header-bottom position-absolute"
      src="../assets/header_bottom.png"
    />
    <div class="position-absolute text-white hero-text">
      YOU NEED BEAT NOT BEAN
    </div>
    <div class="container">
      <img class="logo" src="../assets/logo.svg" alt="logo" />
      <h1 class="h1 text-white my-5 font">Cafe Beat</h1>
      <p class="h3">每天都需要一杯咖啡，為什麼？</p>
      <p class="h3 mb-0">它，是你一天動力的來源</p>
      <div class="explore text-secondary fw-bold">Explore</div>
    </div>
  </header>
  <!-- section 關於區 -->
  <section class="about bg-secondary py-5 fw-bold">
    <img
      class="person position-absolute d-none d-md-block"
      src="../assets/person.svg"
      alt="person"
    />
    <div class="container">
      <div class="row mt-5 mt-lg-0">
        <div class="col-xl-9 offset-xl-3">
          <h2 class="fw-bold display-1 mb-5">一整天活力的來源</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <img
            class="img-fluid rounded rounded-5 border border-5"
            src="https://images.unsplash.com/photo-1504538292323-20e79775474d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
        </div>
        <div class="col-lg-8">
          <p class="fs-2 my-5 my-lg-0">
            在繁忙生活中一個可以讓你精神旺盛的替代方案就顯得非常重要，除了提神飲料外，你有更好的選擇。
          </p>
          <p class="fs-2">就是一杯咖啡！</p>
          <p class="fs-2">咖啡，不只是飲料，是「人生」</p>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-sm-9">
          <h2 class="h1 my-4">探索我們更多產品</h2>
          <Button></Button>
        </div>
        <div class="col-sm-3">
          <img class="img-fluid" src="../assets/cup.svg" alt="cup" />
        </div>
      </div>
    </div>
  </section>
  <!-- section 為何區 -->
  <section class="why pb-5 position-relative">
    <div class="poly poly-secondary"></div>
    <div class="container">
      <h2 class="text-center mb-5">為什麼你需要咖啡？</h2>
      <div class="row">
        <div class="col-md-4 mb-5 mb-md-0">
          <div class="h-100 d-flex flex-column justify-content-between">
            <img class="img-fluid" src="../assets/breakfast.svg" alt="work" />
            <h3 class="h3 text-center mt-5">早餐時，你需要它</h3>
          </div>
        </div>
        <div class="col-md-4 mb-5 mb-md-0">
          <div class="h-100 d-flex flex-column justify-content-between">
            <img class="img-fluid" src="../assets/work.svg" alt="work" />
            <h3 class="h3 text-center mt-5">工作時，你需要它</h3>
          </div>
        </div>
        <div class="col-md-4">
          <div class="h-100 d-flex flex-column justify-content-between">
            <div>
              <img class="img-fluid" src="../assets/social.svg" alt="work" />
            </div>
            <div><h3 class="h3 text-center mt-5">社交時，你需要它</h3></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="poly poly-white"></div>
  <!-- section 烘焙區 -->
  <section class="way py-5 bg-primary">
    <div class="container">
      <h2 class="text-center mb-5">咖啡有什麼不一樣的烘焙法？</h2>
      <div class="row align-items-center">
        <div class="col-sm-6">
          <div class="text px-5">
            <h3 class="text-secondary fw-bold">
              淺焙咖啡：保留咖啡豆最原始的風味
            </h3>
            <p class="my-5">
              咖啡豆的加工程序越少，保留的水果酸質越高，也越能代表咖啡豆原始的風味及品質，因此咖啡杯測時
              ，經常使用淺焙咖啡豆來測試。淺焙咖啡豆的顏色較淡，外觀的油脂比較少，沖煮出來的咖啡呈現淡褐色，通常帶有淡淡的花果香氣，風味明亮順口。
            </p>
          </div>
        </div>
        <div class="col-sm-6">
          <img
            class="img-fluid rounded-pill mb-5 mb-md-0"
            src="https://images.unsplash.com/photo-1540965555-ef9a836372ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            alt=""
          />
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-sm-6 order-last order-sm-first">
          <img
            class="img-fluid rounded-pill mb-5 mb-md-0"
            src="https://images.unsplash.com/photo-1587049016823-69ef9d68bd44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            alt=""
          />
        </div>
        <div class="col-sm-6 order-first order-sm-last">
          <div class="text px-5">
            <h3 class="text-secondary fw-bold">
              中焙咖啡：在醇厚口感與酸度中取得平衡
            </h3>
            <p class="my-5">
              中度烘焙的咖啡豆表面會開始分泌油脂，顏色較接近栗子色，
              沖煮後的風味及香氣比淺焙咖啡更濃郁，可以同時品嘗到淡淡的酸味及咖啡的苦味，
              但相對地，花果香氣就會隨著烘焙時間拉長而減少。
            </p>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-sm-6">
          <div class="text px-5">
            <h3 class="text-secondary fw-bold">深焙咖啡：醇厚且濃烈的口感</h3>
            <p class="my-5">
              經過長時間的烘焙，深焙咖啡豆的外觀呈現深褐色，沖煮後的咖啡風味醇厚、濃郁，
              但幾乎無法品嚐到原始咖啡的風味特性，花果香氣已經完全被咖啡濃厚的風味取代。大部分Espresso咖啡就是使用深焙咖啡豆，加入牛奶或水製作成拿鐵及美式咖啡。
            </p>
          </div>
        </div>
        <div class="col-sm-6">
          <img
            class="img-fluid rounded-pill mb-5 mb-md-0"
            src="https://images.unsplash.com/photo-1611691934391-5a8805e0bd1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

  <!-- 我們的商品 -->
  <section class="product py-5">
    <h2 class="text-center mb-5">全新商品！</h2>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="product mb-3">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div
                  class="bg-lg"
                  style="
                    background-image: url(https://images.unsplash.com/photo-1583953623787-ada99d338235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80);
                  "
                ></div>
              </div>
              <div class="col-md-6 p-5">
                <p class="d-none d-md-block">2021 NEW</p>
                <h2>產品</h2>
                <p>price: NT8600</p>
                <p class="my-5 d-none d-md-block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, eligendi.Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Atque, eligendi.
                </p>
                <router-link class="text-decoration-none" to="/products"
                  ><button
                    type="button"
                    class="btn button rounded-0 d-none d-md-block w-50"
                  >
                    查看更多
                  </button></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  components: {
    Button,
  },
};
</script>
