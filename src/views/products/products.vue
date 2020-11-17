<template>
  <div id="products">
    <div id="bg">
      <img src="../../assets/images/C9_2.jpg" alt="" />
    </div>
    <div class="title">
      <p>全部产品</p>
    </div>
    <div class="productList">
      <div class="productItem">
        <p class="word1">C9pro 飞行控制器</p>
        <p class="word2">c9pro飞行控制器搭载晓龙855四核处理器</p>
        <router-link to="/index/products/C9pro">产品详情>></router-link>
        <div class="btn">
          <a href="#">立即购买</a>
        </div>
      </div>
      <div class="productItem">
        <p class="word1">C9飞行控制器</p>
        <p class="word2">c9profi飞行控是新一代飞行控制产品，行业级应用</p>
        <router-link to="/" class="wordBuy">产品详情>></router-link>
        <div class="btn">
          <a href="#">立即购买</a>
        </div>
      </div>
      <div class="productItem">
        <p class="word1">A9飞行控制器</p>
        <p class="word2">A9飞行控制器主要应用于教育行业，对于无人机发烧迷来说十分友好</p>
        <router-link to="/index/products/C9pro">产品详情>></router-link>
        <div class="btn">
          <a href="#">立即购买</a>
        </div>
      </div>
      <div class="productItem" style="margin-bottom: 100px;">
        <p class="word1">测绘整机解决方案</p>
        <p class="word2">测绘整机主要应用于测绘行业，拥有高效、稳定、性价比高等特点</p>
        <router-link to="/index/products/C9pro">产品详情>></router-link>
        <div class="btn">
          <a href="#">立即购买</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Products",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import "../../assets/style/products";
</style>
