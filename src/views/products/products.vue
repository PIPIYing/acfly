<template>
  <div id="products">
    <div id="bg">
      <img src="../../assets/images/img_cut/products_0.jpg" alt="" />
    </div>
    <div class="title">
      <p>全部产品</p>
    </div>
    <div class="productList">
      <div class="productItem">
        <p class="word1">C9pro 飞行控制器</p>
        <p class="word2">工业级创新型飞行控制器，内置双频RTK</p>
        <router-link to="/index/products/C9pro">产品详情>></router-link>
        <div class="btn">
<!--
          <a href="https://shop227604841.taobao.com/?spm=2013.1.1000126.2.315331437MJ3XW" target="_blank">立即购买</a>
-->
          <router-link to="/index/pay" target="_blank" style="color: #fff;">立即购买</router-link>
        </div>
      </div>
      <div class="productItem">
        <p class="word1">C9飞行控制器</p>
        <p class="word2">工业级创新型飞行控制器，支持单参数调参</p>
        <router-link to="/index/products/C9">产品详情>></router-link>
        <div class="btn">
<!--
          <a href="https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-23273774756.5.78dc4a92ubEpVX&id=631387331308" target="_blank">立即购买</a>
-->
          <router-link to="/index/pay" target="_blank" style="color: #fff;">立即购买</router-link>
        </div>
      </div>
      <div class="productItem">
        <p class="word1">A9飞行控制器</p>
        <p class="word2">教育级飞行控制器</p>
        <router-link to="/index/products/A9">产品详情>></router-link>
        <div class="btn">
<!--
          <a href="https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-23273774756.3.78dc4a92ubEpVX&id=591615647197" target="_blank">立即购买</a>
-->
          <router-link to="/index/pay" target="_blank" style="color: #fff;">立即购买</router-link>
        </div>
      </div>
      <div class="productItem" style="margin-bottom: 100px;">
        <p class="word1">整机解决方案</p>
        <p class="word2">整机主要应用于测绘行业，拥有高效、稳定、性价比高等特点</p>
        <router-link to="/index/products/mapping">产品详情>></router-link>
        <div class="btn">
<!--
          <a href="https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-23273774756.7.78dc4a92jslsvd&id=619068803524" target="_blank">立即购买</a>
-->
          <router-link to="/index/pay" target="_blank" style="color: #fff;">立即购买</router-link>
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
