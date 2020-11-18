<template>
  <div id="document3_2">
    <div class="box">
      <p class="title">3.2 外设接口</p>
      <p>源固件默认接口，可根据需求更改</p>
      <ul>
        <li>串口超声波或串口激光：SERIAL1接口</li>
        <li>光流串口：SERIAL5接口</li>
        <li>GPS、外置罗盘：GPS接口</li>
        <li>数传串口：SERIAL 7接口</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document3_2",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
