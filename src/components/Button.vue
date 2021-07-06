<template>
  <router-link to="/products">
      <button class="btn"><span class="btn-text">馬上去買</span></button>
      <div class="arrowAnim d-inline-block">
        <div class="arrowSliding">
          <div class="arrow"></div>
        </div>
        <div class="arrowSliding delay1">
          <div class="arrow"></div>
        </div>
        <div class="arrowSliding delay2">
          <div class="arrow"></div>
        </div>
        <div class="arrowSliding delay3">
          <div class="arrow"></div>
        </div>
      </div>
  </router-link>
</template>

<style lang="scss" scoped>
$primary: #84543B;
$secondary: #e6af21;
.btn {
  margin: 20px auto;
  border: none;
  padding: 10px 44px;
  font-size: 36px;
  position: relative;
  &:focus {
    outline: 0;
  }
  &::before {
    transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    content: "";
    width: 50%;
    height: 100%;
    background: black;
    position: absolute;
    top: 0;
    left: 0;
  }
  &::after {
    content: '←';
    position: absolute;
    right: -40px;
    animation: btnArrow 1.5s infinite;
  }
  @keyframes btnArrow {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(10px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  & .btn-text {
    color: $secondary;
    // check out mdn docs for different types of blend modes.
    mix-blend-mode: difference;
  }
  &:hover {
    &::before {
      background: black;
      width: 100%;
    }
  }
}

</style>
