<template>
  <div id="document7_4">
    <div class="box">
      <p class="title">7.4 姿态控制参数</p>
      <p>角速度参数与角加速度参数的单位分别是：°/s，°/s^2。</p>
      <table class="table1">
        <tr>
          <th class="left solidTop bottom">参数名</th>
          <th class="right solidTop bottom">说明</th>
        </tr>
        <tr>
          <td class="left">AC_maxLean</td>
          <td class="right">飞行时候的最大倾角，默认35°</td>
        </tr>
        <tr>
          <td class="left">AC_maxRPAcc</td>
          <td class="right">横滚和俯仰的最大角加速度</td>
        </tr>
        <tr>
          <td class="left">AC_maxRPSp</td>
          <td class="right">横滚和俯仰的最大角速度</td>
        </tr>
        <tr>
          <td class="left">AC_maxYAcc</td>
          <td class="right">偏航的最大角加速度</td>
        </tr>
        <tr>
          <td class="left">AC_maxYSp</td>
          <td class="right">偏航的最大角速度</td>
        </tr>
        <tr>
          <td class="left">AC_Roll_b、AC_Pitch_b、AC_Yaw_b</td>
          <td class="right">控制器增益，请参考7.3节</td>
        </tr>
        <tr>
          <td class="left">AC_XXX_TD4Pn  (n=1、2、3、4)</td>
          <td class="right">前馈增益</td>
        </tr>
        <tr>
          <td class="left">AC_XXX_Pn  (n=1、2、3、4)</td>
          <td class="right">反馈增益</td>
        </tr>
        <tr>
          <td class="left">AC_STThr</td>
          <td class="right">起转油门</td>
        </tr>
        <tr>
          <td class="left">AC_T</td>
          <td class="right">飞行器电机的惯性时间常数</td>
        </tr>
        <tr>
          <td class="left solidBottom">AC_Beta2</td>
          <td class="right solidBottom">此参数越大抗扰越强，但是不抗震动噪声，输出波动会增大，最大200。不建议新手调节。</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document7_4",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
