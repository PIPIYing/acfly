<template>
  <div id="C9pro">
    <!--<Detail :urlData="url"></Detail>-->
    <div class="intro_C9pro" :style="size">
      <p class="title0">C9pro飞行控制器</p>
      <p class="word0">独具匠心 工匠精神</p>
      <p class="word0">工业级创新型驾驶控制器</p>
    </div>
    <div class="detail1" :style="imgSize">
     <!-- <img src="../../assets/images/products_v4/C9pro_1.jpg" alt="" class="picture">-->
      <p class="title1">单参数调参</p>
      <p class="word1">默认参数实测250mm-1800mm轴距多旋翼飞行器超20000+架次，稳定可靠</p>
    </div>
    <div class="detail2" :style="imgSize">
<!--
      <img src="../../assets/images/products_v4/C9pro_2.jpg" alt="">
-->
      <p class="title2">磁场干扰自对准</p>
      <p class="word2">因强磁场等环境因素干扰，导致无人机航向异常</p>
      <p class="word2">飞控可实时检测磁场异常，并通过GPS进行航向智能对准，保证无人机稳定执行任务和返航</p>
    </div>
    <div class="detail3" :style="imgSize">
<!--
      <img src="../../assets/images/products_v4/C9pro_3.jpg" alt="">
-->
      <p class="title3">内置双频ZED-F9P RTK</p>
      <p class="word3">支持本地串口、网络NTRIP和PPK，定位精度2厘米</p>
    </div>
    <div class="detail4" :style="imgSize">
<!--
      <img src="../../assets/images/products_v4/C9pro_4.jpg" alt="">
-->
      <p class="title4">支持拍照、热靴功能 航点多达65536个</p>
      <p class="word4">有效解决相片丢片引起的POS数量和照片数量不一致问题</p>
      <p class="word4">飞控支持双GPS、外置USB和LED，支持USB虚拟U盘高速读取POS记录等，无需插拔SD卡，支持免减震安装</p>
    </div>
    <div class="detail5" :style="imgSize">
<!--
      <img src="../../assets/images/products_v4/C9pro_5.jpg" alt="">
-->
      <p class="title5">摒弃传统PID调参</p>
      <p class="word5">自适应无参数观测器和控制器、运动震动智能抑制、运动气压变化</p>
      <p class="word5">智能补偿算法适应各类不同结构和动力规格的机型变重心或变负载使用亦可自适应</p>
    </div>
    <p class="dataTitle">参数说明</p>
    <div class="data">
      <div class="table">
        <table class="parameter">
          <tr>
            <th class="color">产品名称</th>
            <td class="color">C9 PRO</td>
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
            <td class="color">磁罗盘IST8310</td>
          </tr>
          <tr>
            <td class="color">气压计SPL06</td>
          </tr>
          <tr>
            <th>FLASH存储</th>
            <td>8MB</td>
          </tr>
          <tr>
            <th class="color">TF卡存储</th>
            <td class="color">32GB</td>
          </tr>
          <tr>
            <th>RTK内置</th>
            <td>UBLOX ZED-F9P</td>
          </tr>
          <tr>
            <th rowspan="4" class="color">RTK卫星</th>
            <td class="color">GPS L1C/A、L2C</td>
          </tr>
          <tr>
            <td class="color">GLONASS L1OF、L2OF</td>
          </tr>
          <tr>
            <td class="color">Beidou B1l、B2l</td>
          </tr>
          <tr>
            <td class="color">Galileo E1、E5b</td>
          </tr>
          <tr>
            <th>RTK频率</th>
            <td>10Hz/20hz</td>
          </tr>
          <tr>
            <th class="color">RTK定位精度</th>
            <td class="color">2cm</td>
          </tr>
          <tr>
            <th>GPS罗盘模块</th>
            <td>UBLOX NEO-M8N + IST8310</td>
          </tr>
          <tr>
            <th rowspan="6" class="color">GPS卫星</th>
            <td class="color">GPS L1C/A</td>
          </tr>
          <tr>
            <td class="color">GLONASS L1OF</td>
          </tr>
          <tr>
            <td class="color">Beidou B11</td>
          </tr>
          <tr>
            <td class="color">Galileo E1</td>
          </tr>
          <tr>
            <td class="color">SBAS L1C/A</td>
          </tr>
          <tr>
            <td class="color">QZSS L1C/A</td>
          </tr>
          <tr>
            <th>GPS频率</th>
            <td>5Hz</td>
          </tr>
          <tr>
            <th class="color">GPS定位精度</th>
            <td class="color">1m</td>
          </tr>
          <tr>
            <th rowspan="2">供电范围</th>
            <td>4.5V - 30V</td>
          </tr>
          <tr>
            <td>PMU：7V - 60V</td>
          </tr>
          <tr>
            <th class="color">电压监测</th>
            <td class="color">OV-60V × 2路</td>
          </tr>
        </table>
        <table class="parameter">
          <tr>
            <th class="color">电流检测</th>
            <td class="color">OA-150A × 1路</td>
          </tr>
          <tr>
            <th>PWM通道</th>
            <td>12路</td>
          </tr>
          <tr>
            <th class="color">继电器通道</th>
            <td class="color">1路</td>
          </tr>
          <tr>
            <th>拍照热靴</th>
            <td>支持</td>
          </tr>
          <tr>
            <th class="color">自定义载板</th>
            <td class="color">支持</td>
          </tr>
          <tr>
            <th>调参难度</th>
            <td>自适应调参，控制性强</td>
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
            <th rowspan="2" class="color">悬停精度</th>
            <td class="color">RTK：0.1米</td>
          </tr>
          <tr>
            <td class="color">单点：0.3米</td>
          </tr>
          <tr>
            <th>RTK基站</th>
            <td>本地串口、网络NTRIP</td>
          </tr>
          <tr>
            <th class="color">航点数量</th>
            <td class="color">65535个</td>
          </tr>
          <tr>
            <th>POS记录</th>
            <td>实时位置、姿态、后处理PPK</td>
          </tr>
          <tr>
            <th class="color">工作温度</th>
            <td class="color">-40℃ ~ +85℃</td>
          </tr>
          <tr>
            <th>防护</th>
            <td>IP67</td>
          </tr>
          <tr>
            <th class="color">材料</th>
            <td class="color">7075铝合金</td>
          </tr>
          <tr>
            <th rowspan="5">尺寸</th>
            <td>主控：55×50×14mm</td>
          </tr>
          <tr>
            <td>PMU：63×32×18mm</td>
          </tr>
          <tr>
            <td>GPS：54×15mm</td>
          </tr>
          <tr>
            <td>LED：24×8mm</td>
          </tr>
          <tr>
            <td>RTK：28×60mm</td>
          </tr>
          <tr>
            <th rowspan="5" class="color">重量</th>
            <td class="color">主控：50g</td>
          </tr>
          <tr>
            <td class="color">PMU：30g</td>
          </tr>
          <tr>
            <td class="color">GPS：30g</td>
          </tr>
          <tr>
            <td class="color">LED：5g</td>
          </tr>
          <tr>
            <td class="color">RTK：16g</td>
          </tr>
        </table>
      </div>
      <div class="link">
        （更多详情请查看<router-link to="/index/skill/document_C9">产品手册</router-link>）
      </div>
    </div>
    <div class="btnBox">
      <div class="btn">
        <a href="https://shop227604841.taobao.com/?spm=2013.1.1000126.2.315331437MJ3XW" target="_blank">立即购买</a>
      </div>
    </div>
  </div>
</template>

<script>
  /*import Detail from "../../components/products/detailPage";*/
  /*import TablePart from "../../components/products/tablePart";*/

  export default {
    name: "C9pro",
    /*components: { Detail, TablePart },*/
    data() {
      return {
        /*url: [
          { bg: require('../../assets/images/C9_1.jpg') },
          { bg: require('../../assets/images/C9_2.jpg') },
          { bg: require('../../assets/images/C9_3.jpg') }
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
      },
      getImgH() {
        /*var img = document.getElementsByClassName('picture')[0];
        if(this.imgSize.height) {
          this.imgSize.height = img.height + 'px';
        }else {
          this.imgSize.height = 840 + 'px';
        }
        console.log(img.height);*/
        this.imgSize.height = ( 840 * window.innerWidth ) / 1920 - 4 + "px";
      }
    },
    created() {
      window.addEventListener('resize', this.getImgSize); //注册监听器
      window.addEventListener('resize', this.getImgH); //注册监听器
      this.getImgSize();
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
