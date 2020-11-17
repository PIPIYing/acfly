<template>
  <div id="document7_6">
    <div class="box">
      <p class="title">7.6 GPS参数设置</p>
      <table class="table3" style="margin-top: 50px;">
        <tr>
          <th>参数名</th>
          <th class="left">说明</th>
          <th class="right">参数名</th>
          <th>说明</th>
        </tr>
        <tr>
          <td>GPS0_GNSS</td>
          <td class="left">GPS搜星配置</td>
          <td class="right">GPS0_delay</td>
          <td>GPS0延时</td>
        </tr>
        <tr>
          <td class="solidBottom">GPS1_GNSS</td>
          <td class="solidBottom left">GPS1搜星配置</td>
          <td class="solidBottom right">GPS1_ delay</td>
          <td class="solidBottom">GPS1延时</td>
        </tr>
      </table>
      <p>(1) GPSx_GNSS参数值设置：</p>
      <ul>
        <li>63：GPS+北斗+伽利略</li>
        <li>119：GPS+格洛纳斯+伽利略</li>
        <li>126：北斗+格洛纳斯+伽利略</li>
      </ul>
      <p>(2) GPSx_delay参数值设置：M8N延时一般为0.2(默认)，RTK则为0.05。</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document7_6",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
