<template>
  <div id="index">
    <div id="topBar">
      <div class="logoImg">
        <img src="../assets/images/logo.png" alt="博睿创新科技" class="logo" />
      </div>
      <div id="nav">
        <div class="navItem">首页</div>
        <div class="navItem">产品中心</div>
        <div class="navItem">应用案例</div>
        <div class="navItem">技术支持</div>
      </div>
      <div id="switchBtn">简体中文</div>
    </div>
    <router-view class="content" />
    <div id="footer">
      <div class="footerContent">
        <div class="logoImg">
          <img src="../assets/images/logo.png" alt="博睿创新科技" class="logo" />
        </div>
        <div class="footerList">
          <p class="title">热门产品</p>
          <a href="#">C9 PRO飞行控制器</a>
          <a href="#">C9 飞行控制器</a>
          <a href="#">A9 飞行控制器</a>
          <a href="#">测绘整机解决方案</a>
        </div>
        <div class="footerList">
          <p class="title">购买渠道</p>
          <a href="#">官方商城</a>
          <a href="#">经销合作</a>
        </div>
        <div class="footerList">
          <p class="title">安全飞行</p>
          <a href="#">安全飞行指引</a>
        </div>
        <div class="footerList">
          <p class="title">联系我们</p>
          <a href="#">企业微信</a>
          <a href="#">官方微博</a>
          <a href="#">微信公众号</a>
          <a href="#">关于我们</a>
        </div>
      </div>
      <div class="copy">
        <div class="logoImg">
          <img src="../assets/images/logo.png" alt="博睿创新科技" class="logo" />
        </div>
        <p class="copyRight">IC备案：粤icp2802989024910466 广州博睿创新科技有限公司</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import "../assets/style/index";
</style>
