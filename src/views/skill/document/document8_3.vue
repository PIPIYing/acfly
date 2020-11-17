<template>
  <div id="document8_3">
    <div class="box">
      <p class="title">8.3 一键返航</p>
      <ul>
        <li>一键返航需要飞控在定点模式下GPS定位成功，拨一下遥控器校准的一键返航按钮(如果是三档的按钮，拨一档即可)，当无人机超过起飞点Sf_GbRtHeigh厘米或Sf_LcRtHeight厘米距离时，无人机将先升高Sf_GbRtHRange厘米或Sf_LcRtHRange厘米，再根据Sf_RtSpeed返航速度进行返航。</li>
        <li>返航过程可以打任意摇杆中断，如果一键返航设置的是按下，中断后如果3秒内不打摇杆则会继续自动返航。如果一键返航设置的是变化，则打杆中断会取消返航，需要重新拨一下一键返航按钮继续返航。</li>
        <li>返航的精确度由GPS定位精度决定，一般的GPS可能会有1到2米的误差。</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document8_3",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
