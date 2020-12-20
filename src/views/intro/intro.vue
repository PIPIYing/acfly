<template>
  <div id="intro">
    <div class="introBox">
      <p class="introTitle">C9PRO飞行控制器</p>
      <p class="introWord">单参数调参 抗磁干扰</p>
      <p class="introWord">工业级创新型驾驶控制器</p>
    </div>
    <img src="../../assets/images/img_cut/index.jpg" alt="" />
    <div class="btn1">
      <div class="btn1_1">
        <router-link to="/index/products/C9pro" style="color: #000;">了解更多</router-link>
      </div>
      <div class="btn1_2">
        <a href="https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-23273774766.8.78dc4a92QMF7JI&id=631387331308" target="_blank" style="color: #000;">立即购买</a>
      </div>
    </div>
    <div class="box" :style="sizeInfo">
      <!--只有图，没有文字的part-->
      <!--<img src="../../assets/images/C9_intro.jpg" alt="">
      <div class="btn2">
        <div class="btn2_1">
          <a href="#" style="color: #4299F9;">立即购买</a>
        </div>
        <div class="btn2_2">
          <router-link to="/index/products/C9pro" style="color: #4299F9;">了解更多>></router-link>
        </div>
      </div>-->
      <!--图+文字的part-->
      <div class="boxIntro">
        <p class="title">C9飞行控制器</p>
        <p class="explain">匠心打造 成就不凡</p>
        <p class="explain">工业级创新型驾驶控制器</p>
        <div class="btn2">
          <div class="btn2_1">
            <a href="https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-23273774756.5.78dc4a92ubEpVX&id=631387331308" target="_blank" style="color: #4299F9;">立即购买</a>
          </div>
          <div class="btn2_2">
            <router-link to="/index/products/C9" style="color: #4299F9;">了解更多>></router-link>
          </div>
        </div>
      </div>
      <div class="boxImg">
        <img src="../../assets/images/intro2.jpg" alt="" class="introImg1" />
      </div>
    </div>
    <div class="box" :style="sizeInfo">
      <!--只有图，没有文字的part-->
      <!--<img src="../../assets/images/A9_intro.jpg" alt="">
      <div class="btn2">
        <div class="btn2_1">
          <a href="#" style="color: #4299F9;">立即购买</a>
        </div>
        <div class="btn2_2">
          <router-link to="/index/products/C9pro" style="color: #4299F9;">了解更多>></router-link>
        </div>
      </div>-->
      <!--图+文字的part-->
      <div class="boxIntro">
        <p class="title">A9飞行控制器</p>
        <p class="explain">罗盘异常修正 多传感器融合</p>
        <p class="explain">单参数调节 65536航点</p>
        <div class="btn2">
          <div class="btn2_1">
            <a href="https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-23273774756.3.78dc4a92ubEpVX&id=591615647197" target="_blank" style="color: #4299F9;">立即购买</a>
          </div>
          <div class="btn2_2">
            <router-link to="/index/products/A9" style="color: #4299F9;">了解更多>></router-link>
          </div>
        </div>
      </div>
      <div class="boxImg">
        <img src="../../assets/images/intro3.png" alt="" class="introImg2" />
      </div>
    </div>
    <div class="box" :style="sizeInfo">
      <!--图+文字的part-->
      <div class="boxIntro">
        <p class="title">X640飞行器</p>
        <p class="explain">简单 使用 创新</p>
        <p class="explain">一体化航电结构</p>
        <p class="explain">双星四频 精准定位</p>
        <div class="btn2">
          <div class="btn2_1">
            <a href="https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-23273774756.7.78dc4a92jslsvd&id=619068803524" target="_blank" style="color: #4299F9;">立即购买</a>
          </div>
          <div class="btn2_2">
            <router-link to="/index/products/mapping" style="color: #4299F9;">了解更多>></router-link>
          </div>
        </div>
      </div>
      <div class="boxImg">
        <img src="../../assets/images/intro4.jpg" alt="" class="introImg3" />
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
