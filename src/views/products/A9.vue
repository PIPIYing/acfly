<template>
  <div id="A9">
    <!--<Detail :urlData="url"></Detail>-->
    <div class="intro_A9" :style="size">
      <p class="title11">A9飞行控制器</p>
      <p class="word11">STM32H743VIT6处理器 | 480Mhz高主频</p>
      <p class="word11">超高性能主控芯片 | 分离式高性能IMU | 电阻整版恒温</p>
    </div>
    <div class="detail12" :style="imgSize">
<!--
      <img src="../../assets/images/products_v4/A9_1.jpg" alt="">
-->
      <p class="title12">SDK开源 超快速二次开发 上手简单</p>
      <p class="word12">支持GPS、光流、超声波、激光定高、毫米波雷达和openmv等多传感器融合</p>
      <p class="word12">采用STM32H743VIT6处理器，分离式高性能IMU、板载丰富外设接口</p>
    </div>
    <div class="detail13" :style="imgSize">
<!--
      <img src="../../assets/images/products_v4/A9_2.jpg" alt="">
-->
      <p class="title13">GPS智能修复罗盘异常</p>
      <p class="word13">支持罗盘不准、罗盘干扰和无罗盘状态下稳定飞行</p>
    </div>
    <div class="detail14" :style="imgSize">
<!--
      <img src="../../assets/images/products_v4/C9pro_5.jpg" alt="">
-->
      <p class="title14">多传感器智能融合</p>
      <p class="word14">杜绝GPS气压不稳定造成位置波动飞行过程中实时监测各个传感器的波动情况，智能分析出各个传感器的健康度</p>
    </div>
    <div class="detail20" :style="imgSize">
<!--
      <img src="../../assets/images/products_v4/C9pro_1.jpg" alt="">
-->
      <p class="title20">单参数调参</p>
      <p class="word20">默认参数实测250mm-1800mm轴距多旋翼飞行器超20000+架次，稳定可靠</p>
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
        （更多详情请查看<router-link target="_blank" to="/index/skill/document_download">产品手册</router-link>）
      </div>
    </div>
    <div class="btnBox">
      <div class="btn">
<!--
        <a href="https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-23273774756.3.78dc4a92ubEpVX&id=591615647197" target="_blank">立即购买</a>
-->
        <router-link to="/index/pay" target="_blank" style="color: #fff;">立即购买</router-link>
      </div>
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
        size: {
          height: ''
        },
        imgSize: {
          height: ''
        }
      }
    },
    methods: {
      getImgSize() {
        //获取背景图元素
        /*var img = document.getElementsByTagName('img')[0];*/
        if(window.innerWidth > 2000) {
          this.size.height = ( 1080 * window.innerWidth ) / 1920 - 100 + "px";
        }
        else if(window.innerWidth > 1600) {
          this.size.height = ( 1080 * window.innerWidth ) / 1920 - 50 + "px";
        }
        else if(window.innerWidth > 1400) {
          this.size.height = ( 1080 * window.innerWidth ) / 1920 - 40 + "px";
        }
        else if(window.innerWidth > 1000) {
          this.size.height = ( 1080 * window.innerWidth ) / 1920 - 20 + "px";
        }
        else {
          this.size.height = ( 1080 * window.innerWidth ) / 1920 + "px";
        }
        /*this.size.height = img.offsetHeight + 'px';*/
        /*console.log(img);*/
      },
      getImgH() {
        this.imgSize.height = ( 840 * window.innerWidth ) / 1920 - 4 + "px";
      }
    },
    created() {
      window.addEventListener('resize', this.getImgSize); //注册监听器
      this.getImgSize();
      window.addEventListener('resize', this.getImgH); //注册监听器
      this.getImgH();
    },
    destroyed() {
      window.removeEventListener('resize', this.getImgSize);
      window.removeEventListener('resize', this.getImgH);
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/style/productsDetail";
</style>
