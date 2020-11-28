<template>
  <div id="A9">
    <!--<Detail :urlData="url"></Detail>-->
    <div class="intro_A9">
      <!--<p class="title11">A9飞行控制器</p>
      <p class="word11">采用STM32H743VIT6处理器，主频高达480Mhz，带16kbyte L1 Cache</p>
      <p class="word11">超高性能主控芯片、分离式高性能IMU、8个电阻整版恒温、板载丰富外设接口</p>-->
    </div>
    <div class="detail12">
      <img src="../../assets/images/products_v3/A91.png" alt="">
      <!--<p class="title12">GPS智能修复罗盘异常</p>
      <p class="word12">支持在罗盘不准、罗盘干扰和无罗盘状态下稳定飞行</p>
      <p class="word12">罗盘不准：飞行器转动时会实时进行罗盘校准，让罗盘在飞行过程中保持最佳状态</p>
      <p class="word12">罗盘干扰：自动检测罗盘干扰情况，自动选用优质罗盘稳定航向</p>
      <p class="word12">无罗盘：无罗盘情况下，智能分析GPS运动轨迹自动对准航向</p>-->
    </div>
    <div class="detail13">
      <img src="../../assets/images/products_v3/A92.png" alt="">
      <!--<p class="title13">多传感器异常检测智能融合，杜绝GPS气压不稳定造成位置波动</p>
      <p class="word13">波动检测：飞行过程中实时监测各个传感器的波动情况，智能分析出各个传感器的健康度</p>
      <p class="word13">IMU预测：传感器波动剧烈时使用IMU加速度预测位置，在气流干扰环境下仅使用企业计人能进行稳定飞行</p>
      <p class="word13">健康融合：自动选用健康度最高的传感器，自动使各个传感器取长补短达到优质飞行效果</p>-->
    </div>
    <div class="detail14">
      <img src="../../assets/images/products_v3/A93.png" alt="">
      <!--<p class="title14">强风乱流轻松搞定</p>-->
      <!--<p class="word14">重定义单参数调节：飞控默认参数实测250mm-1800mm轴距多旋翼飞行器，超20000+架次，均能起飞且姿态可控</p>-->
    </div>
    <p class="dataTitle">参数说明</p>
    <div class="data">
      <div class="table">
        <table class="parameter">
          <tr>
            <th class="color">产品名称</th>
            <td class="color">A9</td>
          </tr>
          <tr>
            <th>MCU处理器</th>
            <td>STM32H743</td>
          </tr>
          <tr>
            <th rowspan="3" class="color">IMU传感器</th>
            <td class="color">陀螺仪加速度BMI088</td>
          </tr>
          <tr>
            <td class="color">磁罗盘AK8975</td>
          </tr>
          <tr>
            <td class="color">气压计SPL06</td>
          </tr>
          <tr>
            <th>FLASH存储</th>
            <td>8MB</td>
          </tr>
          <tr>
            <th class="color">TF存储容量</th>
            <td class="color">自定义</td>
          </tr>
          <tr>
            <th>供电范围</th>
            <td>4.8-5.5V</td>
          </tr>
        </table>
        <table class="parameter">
          <tr>
            <th class="color">PWM通道</th>
            <td class="color">8路</td>
          </tr>
          <tr>
            <th class="color">抗震性能</th>
            <td class="color">免减震</td>
          </tr>
          <tr>
            <th>磁场干扰</th>
            <td>自动校准</td>
          </tr>
          <tr>
            <th class="color">调参难度</th>
            <td class="color">单参数调节</td>
          </tr>
          <tr>
            <th>航点数量</th>
            <td>65536</td>
          </tr>
          <tr>
            <th class="color">POS记录</th>
            <td class="color">实时位置、姿态</td>
          </tr>
          <tr>
            <th>工作温度</th>
            <td>-40℃ ~ + 85℃</td>
          </tr>
          <tr>
            <th class="color">材料</th>
            <td class="color">光敏树脂</td>
          </tr>
        </table>
      </div>
      <div class="link">
        （更多详情请查看<router-link to="/index/skill/document_A9">产品手册</router-link>）
      </div>
    </div>
    <div class="btn">
      <a href="https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-23273774756.3.78dc4a92ubEpVX&id=591615647197">立即购买</a>
    </div>
  </div>
</template>

<script>
  /*import Detail from "../../components/products/detailPage";*/

  export default {
    name: "A9",
    /*components: { Detail, TablePart },*/
    data() {
      return {
        /*url: [
          { bg: require('../../assets/images/A9_1.jpg') },
          { bg: require('../../assets/images/A9_2.jpg') },
          { bg: require('../../assets/images/C9_2.jpg') }
        ],*/
      }
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import "../../assets/style/productsDetail";
</style>
