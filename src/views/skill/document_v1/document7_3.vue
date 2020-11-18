<template>
  <div id="document7_3">
    <div class="box">
      <p class="title">7.3 调参教程</p>
      <ul>
        <li>无人机机型选择，对应参数名：AC_UAV_Type</li>
      </ul>
      <table class="table1">
        <tr>
          <th class="left solidTop bottom">AC_UAV_Type参数值</th>
          <th class="right solidTop bottom">飞行器类型</th>
        </tr>
        <tr>
          <td class="left">10</td>
          <td class="right">四旋翼X型</td>
        </tr>
        <tr>
          <td class="left">11</td>
          <td class="right">六旋翼X型</td>
        </tr>
        <tr>
          <td class="left">12</td>
          <td class="right">八旋翼X型</td>
        </tr>
        <tr>
          <td class="left">15</td>
          <td class="right">四旋翼十字型</td>
        </tr>
        <tr>
          <td class="left">20</td>
          <td class="right">四旋翼Double十字型</td>
        </tr>
        <tr>
          <td class="left solidBottom">32</td>
          <td class="right solidBottom">六旋翼异构</td>
        </tr>
      </table>
      <p>ACFLy地面站支持图形化调参，用USB或者数传连接飞控后，点击连接-配置-参数调整-稳定飞行。地面站会自动加载飞控默认参数并显示。</p>
      <div class="image">
        <img src="../../../assets/images/document/7.3_1.png" alt="" />
      </div>
      <ul>
        <li>无人机高频振荡发抖需将b参数调大，一般只需调 AC_Roll_b、AC_Pitch_b。</li>
        <li>无人机打杆软绵绵没力需将b参数调小，一般只需调 AC_Roll_b、AC_Pitch_b。</li>
        <li>T参数（参数名：AC_T）：飞行器电机的惯性时间常数。飞机桨加速至期望值的时间越长，此参数越大。此参数过小飞行器会高频振荡发抖。针对特定机型，此参数需微调。此参数越小（电机加速快），抗扰性能越好，此参数太小会导致b怎么调都会有震荡现象。此参数大不会震荡但是抗扰性能会打折扣（适中就行，没必要追求太强抗扰）。更改参数后需点击写入机型参数按钮等待参数写入成功。</li>
      </ul>
      <p style="text-indent: 2em;">以下参数标准电压：3s=11.6v、4s=15.2v、6s=22.8v</p>
      <table class="table2">
        <tr>
          <th class="firstCol">配置</th>
          <th>F450+U2216 800kv电机+1147桨+4s</th>
          <th>F450+dji2312 940kv电机+9450桨+4s</th>
          <th>精灵3机架+dji2312 940kv电机+9450自锁桨+3s</th>
          <th>dh600+疯狂4114 400kv电机+飞越1555折叠桨 +6s</th>
          <th>Tarot X6+朗宇4108 320kv电机+1855碳桨 +6s</th>
          <th>f550六轴+dji 2312 电机+9450自锁桨 +4s</th>
          <th>f330+朗宇x2212 1400kv电机+8038桨 +3s</th>
        </tr>
        <tr>
          <td class="firstCol">T</td>
          <td>0.1</td>
          <td>0.1</td>
          <td>0.1</td>
          <td>0.05</td>
          <td>0.15</td>
          <td>0.1</td>
          <td>0.1</td>
        </tr>
        <tr>
          <td class="firstCol">Roll Pitch</td>
          <td>b=5.5</td>
          <td>b=7.5</td>
          <td>b=8.5</td>
          <td>b=5.5</td>
          <td>b=1.2</td>
          <td>b=5.5</td>
          <td>b=7.5</td>
        </tr>
        <tr>
          <td class="solidBottom firstCol">Yaw</td>
          <td class="solidBottom">b=1.0</td>
          <td class="solidBottom">b=1.0</td>
          <td class="solidBottom">b=2.0</td>
          <td class="solidBottom">b=1.0</td>
          <td class="solidBottom">b=0.8</td>
          <td class="solidBottom">b=1.0 T=0.005</td>
          <td class="solidBottom">b=1.0</td>
        </tr>
      </table>
      <ul>
        <li>感度调节：感度越大，无人机打杆反应速度越快。感度按照需求调节。感度设置好后需点击写入感度按钮等待参数写入成功。</li>
        <li>电池参数调节请参考7.5节</li>
        <li>手动飞行和自动飞行模式(包括飞航线)参数调节请参考7.7节，比如飞行最大加速度和最大速度等的调节。</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document7_3",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
