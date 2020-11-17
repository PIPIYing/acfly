<template>
  <div id="document7_7">
    <div class="box">
      <p class="title">7.7 位置控制参数</p>
      <p>速度参数与加速度参数的单位分别是：cm/s，cm/s^2。</p>
      <table class="table4">
        <tr>
          <th class="solidTop left" colspan="2">手动模式</th>
          <th class="solidTop right" colspan="2">自动模式</th>
        </tr>
        <tr>
          <td class="solidTop">参数名</td>
          <td class="solidTop left">说明</td>
          <td class="solidTop right">参数名</td>
          <td class="solidTop">说明</td>
        </tr>
        <tr>
          <td class="top">PC_maxVelXY</td>
          <td class="top left">最大水平速度</td>
          <td class="top right">PC_maxAutoVelXY</td>
          <td class="top">最大水平速度</td>
        </tr>
        <tr>
          <td>PC_maxAccXY</td>
          <td class="left">最大水平加速度</td>
          <td class="right">PC_maxAutoAccXY</td>
          <td>最大水平加速度</td>
        </tr>
        <tr>
          <td>PC_maxJerkXY</td>
          <td class="left">最大水平加加速度</td>
          <td class="right">PC_maxAutoJerkXY</td>
          <td>最大水平加加速度</td>
        </tr>
        <tr>
          <td></td>
          <td class="left"></td>
          <td class="right"></td>
          <td></td>
        </tr>
        <tr>
          <td>PC_maxVelUp</td>
          <td class="left">最大向上速度</td>
          <td class="right">PC_maxAutoVelUp</td>
          <td>最大向上速度</td>
        </tr>
        <tr>
          <td>PC_maxAccUp</td>
          <td class="left">最大向上加速度</td>
          <td class="right">PC_maxAutoAccUp</td>
          <td>最大向上加速度</td>
        </tr>
        <tr>
          <td>PC_maxJerkUp</td>
          <td class="left">最大向上加加速度</td>
          <td class="right">PC_maxAutoJerkUp</td>
          <td>最大向上加加速度</td>
        </tr>
        <tr>
          <td></td>
          <td class="left"></td>
          <td class="right"></td>
          <td></td>
        </tr>
        <tr>
          <td>PC_maxVelDn</td>
          <td class="left">最大向下速度</td>
          <td class="right">PC_maxAutoVelDn</td>
          <td>最大向下速度</td>
        </tr>
        <tr>
          <td>PC_maxAccDn</td>
          <td class="left">最大向下速度</td>
          <td class="right">PC_maxAutoVelDn</td>
          <td>最大向下速度</td>
        </tr>
        <tr>
          <td>PC_maxAccDn</td>
          <td class="left">最大向下加速度</td>
          <td class="right">PC_maxAutoAccDn</td>
          <td>最大向下加速度</td>
        </tr>
        <tr>
          <td>PC_maxJerkDn</td>
          <td class="left">最大向下加加速度</td>
          <td class="right">PC_maxAutoJerkDn</td>
          <td>最大向下加加速度</td>
        </tr>
        <tr>
          <td></td>
          <td class="left"></td>
          <td class="right">PC_AutoVXY</td>
          <td>二维XY航线速度</td>
        </tr>
        <tr>
          <td></td>
          <td class="left"></td>
          <td class="right">PC_AutoVXYZ</td>
          <td>三维XYZ航线速度</td>
        </tr>
        <tr>
          <td class="solidBottom"></td>
          <td class="solidBottom left"></td>
          <td class="solidBottom right">PC_AutoVZ</td>
          <td class="solidBottom">高度方向航线速度</td>
        </tr>
      </table>
      <table class="table1" style="margin-top: 50px;">
        <tr>
          <th class="left solidTop bottom">高度前馈滤波器参数</th>
          <th class="right solidTop bottom">反馈增益参数</th>
        </tr>
        <tr>
          <td class="left">PC_Z_TD4P1</td>
          <td class="right">PC_P1</td>
        </tr>
        <tr>
          <td class="left">PC_Z_TD4P2</td>
          <td class="right">PC_P1</td>
        </tr>
        <tr>
          <td class="left">PC_Z_TD4P3</td>
          <td class="right">PC_P1</td>
        </tr>
        <tr>
          <td class="left solidBottom">PC_Z_TD4P4</td>
          <td class="right solidBottom"></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document7_7",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
