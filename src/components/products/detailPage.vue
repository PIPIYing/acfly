<template>
  <div id="detailPage">
    <div class="intro" :style="{backgroundImage:'url('+urlData[0].bg+')'}">
      <!--<img src="../../assets/images/mapping1.jpg" alt="">-->
      <!--<p class="title">示例文字</p>
      <p class="word">
        X7与X7 pro是由CUAV设计和生产的高级自动驾驶仪；它采用比PX4上一代飞行控制器（FMUv5)更高性能的STM32H7系列处理器，并集成高精度工业级传感器和超低温飘传感器，相较于上一代飞行控制器性能更好、更稳定可靠
      </p>-->
    </div>
    <div class="detail1" :style="{backgroundImage:'url('+urlData[1].bg+')'}">
      <!--<p class="title1">示例文字</p>
      <p class="word1">
        X7与X7 pro是由CUAV设计和生产的高级自动驾驶仪；它采用比PX4上一代飞行控制器（FMUv5)更高性能的STM32H7系列处理器，并集成高精度工业级传感器和超低温飘传感器，相较于上一代飞行控制器性能更好、更稳定可靠
      </p>-->
    </div>
    <div class="detail2" :style="{backgroundImage:'url('+urlData[2].bg+')'}">
      <!--<p class="title2">示例文字</p>
      <p class="word2">
        X7与X7 pro是由CUAV设计和生产的高级自动驾驶仪；它采用比PX4上一代飞行控制器（FMUv5)更高性能的STM32H7系列处理器，并集成高精度工业级传感器和超低温飘传感器，相较于上一代飞行控制器性能更好、更稳定可靠
      </p>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailPage",
    props: {
      urlData: []  //父子组件传值
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import "../../assets/style/detailPage";
</style>
