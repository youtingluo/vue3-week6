<template>
  <div class="home position-relative">
    <div class="container landing-page position-absolte">
      <img class="logo" src="../assets/logo.png" alt="logo">
      <h1>Yammy and Tasty</h1>
    </div>
    <section class="bg-primary text-dark py-5">
      <div class="container">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Repellat aperiam nisi natus eaque modi neque similique
          ullam saepe sint. Repellat inventore temporibus itaque
          voluptates quas possimus, excepturi laborum cumque placeat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Repellat aperiam nisi natus eaque modi neque similique
          ullam saepe sint. Repellat inventore temporibus itaque
          voluptates quas possimus, excepturi laborum cumque placeat.</p>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
  .home {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
    background-size: cover;
    background-position: center;
    .landing-page{
      opacity: 1;
      padding-top: 100px;
      text-align: center;
      color: #ff6e0d;
      height: 100vh;
      text-shadow:
      5px 5px 0 #fff,
    -1px -1px 0 #fff,
      1px -1px 0 #fff,
      -1px 1px 0 #fff,
      1px 1px 0 #fff;
      .logo {
        width: 300px;
      }
    }
  }
</style>
