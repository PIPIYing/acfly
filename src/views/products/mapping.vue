<template>
  <div id="mapping">
    <!--<Detail :urlData="url"></Detail>-->
    <div class="intro_mapping">
      <!--<img src="../../assets/images/mapping1.jpg" alt="">-->
      <p class="title15">简单 使用 创新</p>
      <!--<p class="word15"></p>-->
    </div>
    <div class="detail16">
     <!-- <p class="title16">GPS智能修复罗盘异常</p>-->
      <p class="word16">自主产权的飞行控制：自主研发核心控制算法和航电硬件，具备恶劣环境下多传感器智能融合算法，定位精度厘米级，支持传感器免校准飞行。融合ADRC自抗扰姿态算法，无论负载和重心位置如何变化均能保持良好的飞行姿态和控制感度。</p>
    </div>
    <div class="detail17">
      <!--<p class="title17">多传感器异常检测智能融合，杜绝GPS气压不稳定造成位置波动</p>-->
      <p class="word17">一体化航电结构：一体化航电结构，集成飞行控制、配电层、电流计、数传、RTK、天线等为一体，另整机内部结构极致简约，最大程度减少了导线连接，保证飞控各模块之间数据传输稳定，减少电磁干扰，大大提升设备性能，使故障率降至最低。</p>
    </div>
    <div class="detail18">
      <!--<p class="title14">强风乱流轻松搞定</p>-->
      <p class="word18">四星双频 精准定位：高可靠的四系统双频卫星信号跟踪技术，大大提高恶劣环境下的跟踪精度，即使未进入差分RTK固定也可达到亚 米级或厘米级定位精度，进入RTK固定状态后精达到2cm.四星双频RTK的初始化固定时间更短，基站覆盖半径相比单频RTK更远，定位精度也更为可靠，为用户提供高质量的测量数据。支持PPK后差分测量方式，满足免像控的正摄与倾斜摄影测量。</p>
    </div>
    <div class="detail19">
      <!--<p class="title14">强风乱流轻松搞定</p>-->
      <p class="word19">轻量便携 维护快捷：使用高能量密度动力锂电池，单组电池重量仅为1750克，整机重量仅为3400克，作业背负重量大大降低。整 机、云台相机、笔记本电脑、充电器和至多7块电池可同时收纳于随机运输箱，携带物品体积和数量也大为减少。整机设计采用模块化组装，大部分零件符合标准化，如遇个别损坏情况，用户均可自行快速更换，大幅度减少了返修时间和维护成本。</p>
    </div>
    <div class="btn">
      <a href="#">立即购买</a>
    </div>
  </div>
</template>

<script>
/*  import Detail from "../../components/products/detailPage";*/

  export default {
    name: "Mapping",
/*    components: { Detail },*/
    data() {
      return {
/*        url: [
          { bg: require('../../assets/images/mapping1.jpg') },
          { bg: require('../../assets/images/mapping2.jpg') },
          { bg: require('../../assets/images/mapping3.jpg') }
        ]*/
      }
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import "../../assets/style/productsDetail";
</style>
