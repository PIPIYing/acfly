<template>
  <div id="index">
    <div id="topBar" :style="sizeInfo">
      <div class="logoImg">
        <img src="../assets/images/logo.png" alt="博睿创新科技" class="logo" />
      </div>
      <div id="nav">
        <router-link to="/index/intro" class="navItem">首页</router-link>
        <router-link to="/index/products" class="navItem">产品中心</router-link>
        <router-link to="/index/cases" class="navItem">应用案例</router-link>
        <router-link to="/skill" class="navItem">技术支持</router-link>
      </div>
      <div id="switchBtn">简体中文</div>
    </div>
    <router-view class="content" :style="sizeInfo" />
    <div id="footer" :style="sizeInfo">
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
        <div class="line"></div>
        <div class="copyContent">
          <div class="logoImg">
            <img src="../assets/images/logo.png" alt="博睿创新科技" class="logo" />
          </div>
          <p class="copyRight">IC备案：粤icp2802989024910466 广州博睿创新科技有限公司</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        sizeInfo: {
          width: ''
        }
      }
    },
    methods: {
      getInfo() {
        /*this.info.width=window.innerWidth+'px';*/
        /*this.info.width=window.outerWidth+'px';*/
        if(window.outerWidth > window.innerWidth) {
          this.sizeInfo.width = window.outerWidth - 5 + 'px';
        }else {
          this.sizeInfo.width = window.innerWidth - 5 + 'px';
        }
        console.log(window.outerWidth,window.innerWidth,this.sizeInfo.width);
      }
    },
    created(){
      window.addEventListener('resize', this.getInfo); //注册监听器
      this.getInfo() //页面创建时先调用一次
    },
    destroyed(){
      window.removeEventListener('resize', this.getInfo)
    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/style/index";
</style>
