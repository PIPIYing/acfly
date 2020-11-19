<template>
  <div id="C9pro">
    <!--<Detail :urlData="url"></Detail>-->
    <div class="intro_C9pro">
      <!--<img src="../../assets/images/mapping1.jpg" alt="">-->
      <p class="title0">C9pro飞行控制器</p>
      <p class="word0">工业级创新型驾驶控制器</p>
      <p class="word0">匠心打造 成就不凡</p>
      <p class="word0">内置双频RTK/自抗扰算法/免减震设计/超宽压电源/超小尺寸</p>
    </div>
    <div class="detail1">
      <p class="title1">内置双频ZED-F9P RTK</p>
      <p class="word1">本机可支持外接基站和千寻位置定位，定位精度可至2厘米</p>
    </div>
    <div class="detail2">
      <p class="title2">大小机型任意装</p>
      <p class="word2">姿态控制算法，摈弃PID调参，融合ADRC自抗扰姿态算法适应各类不同结构和动力规格的机型，变重心或变负载使用亦可自适应。</p>
    </div>
    <div class="detail3">
      <p class="title3">暴力飞行平地履</p>
      <p class="word3">高度控制算法，自适应无参数观测器和控制器、运动震动智能抑制、运动气压变化智能补偿、免调参亦可快速飞行。</p>
    </div>
    <div class="detail4">
      <p class="title4">强风乱流轻松搞定</p>
      <p class="word4">位置解算算法，实时智能检测传感器精度，自动选用传感器，数据智能融合提供最佳位置精度。恶劣气象变化亦可精准飞行。</p>
    </div>
    <div class="detail5">
      <p class="title5">磁场干扰自对准</p>
      <p class="word5">因强磁场等环境因素干扰，导致无人机航向异常，飞控可实时检测磁场异常，并通过GPS进行航向智能对准，表面因磁场异常而炸机。</p>
    </div>
    <TablePart :parameterData="parameter"></TablePart>
    <div class="btn">
      <a href="#">立即购买</a>
    </div>
  </div>
</template>

<script>
  /*import Detail from "../../components/products/detailPage";*/
  import TablePart from "../../components/products/tablePart";

  export default {
    name: "C9pro",
    /*components: { Detail, TablePart },*/
    components: {  TablePart },
    data() {
      return {
        /*url: [
          { bg: require('../../assets/images/C9_1.jpg') },
          { bg: require('../../assets/images/C9_2.jpg') },
          { bg: require('../../assets/images/C9_3.jpg') }
        ],*/
        parameter: [
          ['C9PRO参数','111','111','111'],
          ['参数1','111','111','111'],
          ['参数2','111','111','111'],
          ['参数3','111','111','111']
        ]
      }
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import "../../assets/style/productsDetail";
</style>
