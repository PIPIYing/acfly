<template>
  <div id="A9">
    <!--<Detail :urlData="url"></Detail>-->
    <div class="intro_A9">
      <!--<img src="../../assets/images/mapping1.jpg" alt="">-->
      <p class="title11">A9飞行控制器</p>
      <p class="word11">采用STM32H743VIT6处理器，主频高达480Mhz，带16kbyte L1 Cache</p>
      <p class="word11">超高性能主控芯片、分离式高性能IMU、8个电阻整版恒温、板载丰富外设接口</p>
    </div>
    <div class="detail12">
      <p class="title12">GPS智能修复罗盘异常</p>
      <p class="word12">支持在罗盘不准、罗盘干扰和无罗盘状态下稳定飞行</p>
      <p class="word12">罗盘不准：飞行器转动时会实时进行罗盘校准，让罗盘在飞行过程中保持最佳状态</p>
      <p class="word12">罗盘干扰：自动检测罗盘干扰情况，自动选用优质罗盘稳定航向</p>
      <p class="word12">无罗盘：无罗盘情况下，智能分析GPS运动轨迹自动对准航向</p>
    </div>
    <div class="detail13">
      <p class="title13">多传感器异常检测智能融合，杜绝GPS气压不稳定造成位置波动</p>
      <p class="word13">波动检测：飞行过程中实时监测各个传感器的波动情况，智能分析出各个传感器的健康度</p>
      <p class="word13">IMU预测：传感器波动剧烈时使用IMU加速度预测位置，在气流干扰环境下仅使用企业计人能进行稳定飞行</p>
      <p class="word13">健康融合：自动选用健康度最高的传感器，自动使各个传感器取长补短达到优质飞行效果</p>
    </div>
    <div class="detail14">
      <!--<p class="title14">强风乱流轻松搞定</p>-->
      <p class="word14">重定义单参数调节：飞控默认参数实测250mm-1800mm轴距多旋翼飞行器，超20000+架次，均能起飞且姿态可控</p>
    </div>
    <TablePart :parameterData="parameter"></TablePart>
    <div class="btn">
      <a href="https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-23273774756.3.78dc4a92ubEpVX&id=591615647197">立即购买</a>
    </div>
  </div>
</template>

<script>
  /*import Detail from "../../components/products/detailPage";*/
  import TablePart from "../../components/products/tablePart";

  export default {
    name: "A9",
    /*components: { Detail, TablePart },*/
    components: {  TablePart },
    data() {
      return {
        /*url: [
          { bg: require('../../assets/images/A9_1.jpg') },
          { bg: require('../../assets/images/A9_2.jpg') },
          { bg: require('../../assets/images/C9_2.jpg') }
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
