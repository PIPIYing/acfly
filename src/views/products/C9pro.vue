<template>
  <div id="C9pro">
    <!--<Detail :urlData="url"></Detail>-->
    <div class="intro_C9pro" :style="size">
      <p class="title0">C9pro飞行控制器</p>
      <p class="word0">工业级创新型驾驶控制器</p>
      <p class="word0">匠心打造 成就不凡</p>
      <p class="word0">内置双频RTK/自抗扰算法/免减震设计/超宽压电源/超小尺寸</p>
    </div>
    <div class="detail1">
      <img src="../../assets/images/products_v2/C9_1.jpg" alt="">
      <!--<p class="title1">内置双频ZED-F9P RTK</p>
      <p class="word1">本机可支持外接基站和千寻位置定位，定位精度可至2厘米</p>-->
    </div>
    <div class="detail2">
      <img src="../../assets/images/products_v2/C9_2.jpg" alt="">
      <!--<p class="title2">大小机型任意装</p>
      <p class="word2">姿态控制算法，摈弃PID调参，融合ADRC自抗扰姿态算法适应各类不同结构和动力规格的机型，变重心或变负载使用亦可自适应。</p>-->
    </div>
    <div class="detail3">
      <img src="../../assets/images/products_v2/C9_3.jpg" alt="">
      <!--<p class="title3">暴力飞行平地履</p>
      <p class="word3">高度控制算法，自适应无参数观测器和控制器、运动震动智能抑制、运动气压变化智能补偿、免调参亦可快速飞行。</p>-->
    </div>
    <div class="detail4">
      <img src="../../assets/images/products_v2/C9_4.jpg" alt="">
      <!--<p class="title4">强风乱流轻松搞定</p>
      <p class="word4">位置解算算法，实时智能检测传感器精度，自动选用传感器，数据智能融合提供最佳位置精度。恶劣气象变化亦可精准飞行。</p>-->
    </div>
    <div class="detail5">
      <img src="../../assets/images/products_v2/C9_1.jpg" alt="">
      <!--<p class="title5">磁场干扰自对准</p>
      <p class="word5">因强磁场等环境因素干扰，导致无人机航向异常，飞控可实时检测磁场异常，并通过GPS进行航向智能对准，表面因磁场异常而炸机。</p>-->
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
            <td class="color">OV-60V × 3路</td>
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
        <a href="#">立即购买</a>
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
        }
      }
    },
    methods: {
      getImgSize() {
        //获取背景图元素
        var img = document.getElementsByTagName('img')[0];
        if(window.innerWidth > 800) {
          this.size.height = ( 1080 * window.innerWidth ) / 1920 - 100 + "px";
        }
        else {
          this.size.height = ( 1080 * window.innerWidth ) / 1920 + "px";
        }
        /*this.size.height = ( 1080 * window.innerWidth ) / 1920 + "px";*/
        /*this.size.height = img.offsetHeight + 'px';*/
        console.log(img);
      }
    },
    created() {
      window.addEventListener('resize', this.getImgSize); //注册监听器
      this.getImgSize();
    },
    destroyed() {
      window.removeEventListener('resize', this.getImgSize)
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/style/productsDetail";
</style>
