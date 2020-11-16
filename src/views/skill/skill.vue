<template>
  <div id="skill">
    <div class="top">
      <router-link to="/index/intro">
        <img src="../../assets/images/logo.png" alt="" />
      </router-link>
    </div>
    <div class="center" :style="sizeInfo">
      <div class="catalog">
        <ul>
          <li class="title1">0 阅读提示</li>
          <li class="title2">0.1 阅读提示</li>
          <li class="title2">0.2 阅读提示</li>
          <li class="title2">0.3 阅读提示</li>
          <li class="title1">1 阅读提示</li>
          <li class="title2">1.1 阅读提示</li>
          <li class="title2">1.2 阅读提示</li>
          <li class="title2">1.3 阅读提示</li>
          <li class="title1">2 阅读提示</li>
          <li class="title2">2.1 阅读提示</li>
          <li class="title2">2.2 阅读提示</li>
          <li class="title1">3 阅读提示</li>
          <li class="title2">3.1 阅读提示</li>
          <li class="title2">3.2 阅读提示</li>
          <li class="title2">3.3 阅读提示</li>
          <li class="title1">4 阅读提示</li>
          <li class="title2">4.1 阅读提示</li>
          <li class="title2">4.2 阅读提示</li>
          <li class="title2">4.3 阅读提示</li>
          <li class="title1">5 阅读提示</li>
          <li class="title2">5.1 阅读提示</li>
          <li class="title2">5.2 阅读提示</li>
          <li class="title2">5.3 阅读提示</li>
          <li class="title2">5.4 阅读提示</li>
          <li class="title2">5.5 阅读提示</li>
          <li class="title2">5.6 阅读提示</li>
          <li class="title1">6 阅读提示</li>
          <li class="title1">7 阅读提示</li>
          <li class="title2">7.1 阅读提示</li>
          <li class="title2">7.2 阅读提示</li>
          <li class="title2">7.3 阅读提示</li>
          <li class="title2">7.4 阅读提示</li>
          <li class="title2">7.5 阅读提示</li>
          <li class="title2">7.6 阅读提示</li>
          <li class="title2">7.7 阅读提示</li>
          <li class="title1">8 阅读提示</li>
          <li class="title2">8.1阅读提示</li>
          <li class="title2">8.2 阅读提示</li>
          <li class="title2">8.3 阅读提示</li>
          <li class="title1">9 阅读提示</li>
          <li class="title2">9.1 阅读提示</li>
          <li class="title1">10 阅读提示</li>
          <li class="title2">10.1 阅读提示</li>
          <li class="title2">10.2 阅读提示</li>
          <li class="title1">11 阅读提示</li>
          <li class="title1">12 阅读提示</li>
          <li class="title1">13 阅读提示</li>
        </ul>
      </div>
      <div class="content">
    </div>
    </div>
    <div class="bottom">
      <div class="bottomWord">广州博睿创新科技有限公司</div>
      <div class="copy">
        <div class="logoImg">
          <img src="../../assets/images/logo.png" alt="博睿创新科技" class="logo" />
        </div>
        <p>IC备案：粤icp2802989024910466 广州博睿创新科技有限公司</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Skill",
    data() {
      return {
        sizeInfo: {
          height: ''
        }
      }
    },
    methods: {
      getInfo() {
        /*this.info.width=window.innerWidth+'px';*/
        /*this.info.width=window.outerWidth+'px';*/
        if(window.outerHeight > window.innerHeight) {
          this.sizeInfo.height = window.outerHeight + 'px';
          /*this.sizeInfo.height = window.outerHeight - 180 + 'px';*/
        }else {
          this.sizeInfo.height = window.innerHeight + 'px';
        }
        console.log(window.outerHeight,window.innerHeight,this.sizeInfo.height);
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
  @import "../../assets/style/skill";
</style>
