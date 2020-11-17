<template>
  <div id="document7_8">
    <div class="box">
      <p class="title">7.8 安全模式参数</p>
      <p style="text-align: right;margin: 20px 0 -20px 0;">单位：cm</p>
      <table class="table1">
        <tr>
          <th class="left solidTop bottom">参数名</th>
          <th class="right solidTop bottom">说明</th>
        </tr>
        <tr>
          <td class="left">Sf_FcLandVolt</td>
          <td class="right">低电量自动降落电压</td>
        </tr>
        <tr>
          <td class="left">Sf_FcRTLVolt</td>
          <td class="right">低电量自动返航电压</td>
        </tr>
        <tr>
          <td class="left">Sf_SfRtMode</td>
          <td class="right">返航模式</td>
        </tr>
        <tr>
          <td class="left">Sf_RtSpeed</td>
          <td class="right">返航速度,单位：cm/s</td>
        </tr>
        <tr>
          <td class="left">Sf_GbRtHRange</td>
          <td class="right">经纬度定位升高高度（对地）</td>
        </tr>
        <tr>
          <td class="left">Sf_LcRtHRange</td>
          <td class="right">本地定位（无经纬度）升高高度（对地）</td>
        </tr>
        <tr>
          <td class="left">Sf_GbRtHeight</td>
          <td class="right">经纬度定位升高返航范围</td>
        </tr>
        <tr>
          <td class="left solidBottom">Sf_LcRtHeight</td>
          <td class="right solidBottom">本地定位（无经纬度）升高返航范围</td>
        </tr>
      </table>
      <p>按下一键返航按钮，当无人机超过起飞点Sf_GbRtHeigh厘米或Sf_LcRtHeight厘米距离时，无人机将先升高Sf_GbRtHRange厘米或Sf_LcRtHRange厘米，再根据Sf_RtSpeed返航速度进行返航。</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document7_8",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
