<template>
  <div id="document7_9">
    <div class="box">
      <p class="title">7.9 AUX参数</p>
      <ul>
        <li>Aux_1Func - Aux_2Func: 映射遥控器对应通道(原始数据)。</li>
        <li>Aux_3Func - Aux_4Func: 用遥控器对应通道进行相机快门触发(原始数据)。</li>
        <li>Aux_5Func - Aux_9Func: 用遥控器对应通道进行云台控制(原始数据)。</li>
        <li>Aux_CamOffPwm: 相机不触发时输出的PWM，默认值1000。</li>
        <li>Aux_CamOnPwm: 相机触发时输出的PWM，默认值2000。</li>
        <li>Aux_CamShTime: 相机触发时输出PWM持续时间,单位：毫秒。</li>
        <li>Aux_CamTrigEna: 相机热靴功能使能。</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document7_9",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
