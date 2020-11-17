<template>
  <div id="document7_2">
    <div class="box">
      <p class="title">7.2 参数分类</p>
      <p>不同类别参数以开头分组，如AC_开头为姿态控制参数组。</p>
      <ul>
        <li>AC---Attitude Control姿态控制参数：包括Roll、Pitch、Yaw三轴感度，增益等；</li>
        <li>AUX---PWM输出对应遥控通道映射参数;</li>
        <li>BAT---Battery电池参数：包括标准电池电压等；</li>
        <li>GPS0---GPS0参数，包括GPS延时和GPS配置等；</li>
        <li>GPS1---GPS1参数，包括GPS延时和GPS配置等；</li>
        <li>Init---初始化校准参数，包括电调校准等；</li>
        <li>LK---mavlink协议参数，本机ID；</li>
        <li>MFunc---遥控校准相关参数；</li>
        <li>UAV---飞行器参数：包括飞行器类型等；</li>
        <li>PC---位置控制参数。</li>
        <li>POfs---飞控和位置传感器安装偏移补偿；</li>
        <li>SDlog ---飞行日志参数。</li>
        <li>Sf---安全模式参数。</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document7_2",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
