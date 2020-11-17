<template>
  <div id="mapping">
    <Detail :urlData="url"></Detail>
    <div class="detail3">
      <!--<p class="title3">示例文字</p>
      <p class="word3">
        X7与X7 pro是由CUAV设计和生产的高级自动驾驶仪；它采用比PX4上一代飞行控制器（FMUv5)更高性能的STM32H7系列处理器，并集成高精度工业级传感器和超低温飘传感器，相较于上一代飞行控制器性能更好、更稳定可靠
      </p>-->
    </div>
    <div class="btn">
      <a href="#">立即购买</a>
    </div>
  </div>
</template>

<script>
  import Detail from "../../components/products/detailPage";

  export default {
    name: "Mapping",
    components: { Detail },
    data() {
      return {
        url: [
          { bg: require('../../assets/images/mapping1.jpg') },
          { bg: require('../../assets/images/mapping2.jpg') },
          { bg: require('../../assets/images/mapping3.jpg') }
        ]
      }
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import "../../assets/style/productsDetail";
</style>
