<template>
  <div id="intro">
    <div id="bg">
      <img src="../../assets/images/intro1.png" alt="" />
    </div>
    <div class="btn1">
      <div class="btn1_1">
        <router-link to="/" style="color: #000;">了解更多</router-link>
      </div>
      <div class="btn1_2">
        <a href="#" style="color: #000;">立即购买</a>
      </div>
    </div>
    <div class="box" :style="sizeInfo">
      <div class="boxIntro">
        <p class="title">C9飞行控制器</p>
        <p class="explain">C9飞行控制器是一款工业级创新型的驾驶控制器</p>
        <p class="explain">具有高效稳定的特点</p>
        <div class="btn2">
          <div class="btn2_1">
            <a href="#" style="color: #4299F9;">立即购买</a>
          </div>
          <div class="btn2_2">
            <router-link to="/" style="color: #4299F9;">了解更多>></router-link>
          </div>
        </div>
      </div>
      <div class="boxImg">
        <img src="../../assets/images/intro2.png" alt="" class="introImg1" />
      </div>
    </div>
    <div class="box" :style="sizeInfo">
      <div class="boxIntro">
        <p class="title">A9飞行控制器</p>
        <p class="explain">A9飞行控制器是一款主打应用在教育领域的飞控</p>
        <p class="explain">目前该款飞行控制器已上线，其具有稳定、高效等特点</p>
        <div class="btn2">
          <div class="btn2_1">
            <a href="#" style="color: #4299F9;">立即购买</a>
          </div>
          <div class="btn2_2">
            <router-link to="/" style="color: #4299F9;">了解更多>></router-link>
          </div>
        </div>
      </div>
      <div class="boxImg">
        <img src="../../assets/images/intro3.png" alt="" class="introImg2" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Intro",
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
          this.sizeInfo.width = (window.outerWidth - 5) * 0.8 + 'px';
        }else {
          this.sizeInfo.width = (window.innerWidth - 5) * 0.8 + 'px';
        }
        console.log(this.sizeInfo.width);
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
  @import "../../assets/style/intro";
</style>
