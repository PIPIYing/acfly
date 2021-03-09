<template>
  <div id="mapping">
    <div class="intro_mapping" :style="size">
      <p class="title15">X640四旋翼无人机</p>
      <p class="word15">简单 | 实用 | 创新</p>
    </div>
    <div class="detail16" :style="imgSize">
<!--
      <img src="../../assets/images/products_v4/mapping_1.jpg" alt="">
-->
      <p class="title16">自主产权的飞行控制</p>
      <p class="word16">自主研发核心控制算法和航电硬件，具备恶劣环境下多传感器智能融合算法</p>
      <p class="word16">定位精度厘米级，支持传感器免校准飞行</p>
    </div>
    <div class="detail17" :style="imgSize">
<!--
      <img src="../../assets/images/products_v4/C9pro_5.jpg" alt="">
-->
      <p class="title17">一体化航电结构</p>
      <p class="word17">集成飞行控制、配电层、电流计、数传、RTK、 天线等为一体</p>
      <p class="word17">整机内部结构极致简约，最大程度减少了导线连接，保证飞控各模块之间数据传输稳定</p>
      <p class="word17">减少电磁干扰，大大提升设备性能，使故障率降至最低</p>
    </div>
    <div class="detail18" :style="imgSize">
<!--
      <img src="../../assets/images/products_v4/mapping_2.jpg" alt="">
-->
      <p class="title18">四星双频 精准定位</p>
      <p class="word18">高可靠的四系统双频卫星信号跟踪技术，大大提高恶劣环境下的跟踪精度</p>
      <p class="word18">未进入差分RTK固定也可达到亚米级或厘米级定位精度，进入RTK固定状态后精达到2cm</p>
    </div>
    <div class="detail19" :style="imgSize">
<!--
      <img src="../../assets/images/products_v4/mapping_3.jpg" alt="">
-->
      <p class="title19">轻量便携 维护快捷</p>
      <p class="word19">使用高能量密度动力锂电池，单组电池重量仅为1750克，整机重量仅为3400克，作业背负重量大大降低。</p>
    </div>
    <p class="dataTitle">参数说明</p>
    <div class="data">
      <!--<TablePart :parameterData="parameter1"></TablePart>
      <TablePart :parameterData="parameter2"></TablePart>-->
      <div class="table">
        <table class="parameter">
          <tr>
            <th colspan="2" class="explain">物理参数</th>
          </tr>
          <tr>
            <th class="color">旋翼布局</th>
            <td class="color">X型四旋翼</td>
          </tr>
          <tr>
            <th>电机轴距</th>
            <td>640mm</td>
          </tr>
          <tr>
            <th class="color">展开尺寸</th>
            <td class="color">500×500×350mm</td>
          </tr>
          <tr>
            <th>折叠尺寸</th>
            <td>640×250×300mm</td>
          </tr>
          <tr>
            <th class="color">主机重量</th>
            <td class="color">1600克</td>
          </tr>
          <tr>
            <th>包装箱尺寸</th>
            <td>700×400×320mm（顺丰6号箱）</td>
          </tr>
          <tr>
            <th class="color">包装箱重量</th>
            <td class="color">10千克</td>
          </tr>
          <tr>
            <th class="none"></th>
            <td class="none"></td>
          </tr>
          <tr>
            <th colspan="2" class="explain">电池参数</th>
          </tr>
          <tr>
            <th class="color">品牌型号</th>
            <td class="color">6S-20AH-21</td>
          </tr>
          <tr>
            <th>电压和容量</th>
            <td>65-20Ah（460wh）</td>
          </tr>
          <tr>
            <th class="color">重量</th>
            <td class="color">1750克</td>
          </tr>
          <tr>
            <th>放电截止电压</th>
            <td>17V</td>
          </tr>
          <tr>
            <th class="color">放电电流</th>
            <td class="color">80A</td>
          </tr>
          <tr>
            <th>充电截止电压</th>
            <td>6 × 4.35V = 26.1V</td>
          </tr>
          <tr>
            <th class="color">充电电流</th>
            <td class="color">12A</td>
          </tr>
          <tr>
            <th class="none"></th>
            <td class="none"></td>
          </tr>
          <tr>
            <th colspan="2" class="explain">飞行性能</th>
          </tr>
          <tr>
            <th class="color">航时（无负载）</th>
            <td class="color">80分钟</td>
          </tr>
          <tr>
            <th>航时（600克负载）</th>
            <td>60分钟</td>
          </tr>
          <tr>
            <th class="color">航时（挂五拼相机）</th>
            <td class="color">50分钟</td>
          </tr>
          <tr>
            <th>最大载重</th>
            <td>2.5千克</td>
          </tr>
          <tr>
            <th class="color">海拔升限</th>
            <td class="color">4000米</td>
          </tr>
          <tr>
            <th>航线速度</th>
            <td>＜15m/s</td>
          </tr>
          <tr>
            <th class="color">升降速度</th>
            <td class="color">＜5m/s</td>
          </tr>
          <tr>
            <th>手动速度</th>
            <td>＜20m/s</td>
          </tr>
          <tr>
            <th class="color">工作温度</th>
            <td class="color">-20℃ ~ +40℃</td>
          </tr>
          <tr>
            <th>防护等级</th>
            <td>IP65</td>
          </tr>
        </table>
        <table class="parameter">
          <tr>
            <th colspan="2" class="explain">飞控参数</th>
          </tr>
          <tr>
            <th class="color">品牌型号</th>
            <td class="color">C9 PRO</td>
          </tr>
          <tr>
            <th rowspan="4">卫星系统</th>
            <td>GPS L1C/A、L2C</td>
          </tr>
          <tr>
            <td>GLONASS L1OF、L2OF</td>
          </tr>
          <tr>
            <td>Beidou B1l、B2l</td>
          </tr>
          <tr>
            <td>Galileo E1、E5b</td>
          </tr>
          <tr>
            <th class="color">单点定位精度</th>
            <td class="color">30cm</td>
          </tr>
          <tr>
            <th>RTK基站</th>
            <td>支持本地基站或网络基站（RTCM 3.2协议）</td>
          </tr>
          <tr>
            <th class="color">RTK精度</th>
            <td class="color">2cm</td>
          </tr>
          <tr>
            <th>RTK定位频率</th>
            <td>10Hz/20Hz</td>
          </tr>
          <tr>
            <th rowspan="2" class="color">PPK功能</th>
            <td class="color">输出RINEX 3.02格式</td>
          </tr>
          <tr>
            <td class="color">曝光点时间位置文件</td>
          </tr>
          <tr>
            <th>POS时间同步</th>
            <td>＜1ms</td>
          </tr>
          <tr>
            <th class="color">控制方式</th>
            <td class="color">一键起飞降落</td>
          </tr>
          <tr>
            <th rowspan="3">航线规划</th>
            <td>一键返航</td>
          </tr>
          <tr>
            <td>自动航线</td>
          </tr>
          <tr>
            <td>编队飞行</td>
          </tr>
          <tr>
            <th rowspan="5" class="color">低电量保护</th>
            <td class="color">低电量智能返航</td>
          </tr>
          <tr>
            <td class="color">低电压自动降落</td>
          </tr>
          <tr>
            <td class="color">断浆保护</td>
          </tr>
          <tr>
            <td class="color">失控保护</td>
          </tr>
          <tr>
            <td class="color">翻机保护</td>
          </tr>
          <tr>
            <th class="none bottom"></th>
            <td class="none bottom"></td>
          </tr>
          <tr>
            <th class="none top"></th>
            <td class="none top"></td>
          </tr>
          <tr>
            <th colspan="2" class="explain">遥测参数</th>
          </tr>
          <tr>
            <th class="color">品牌型号</th>
            <td class="color">云卓T10</td>
          </tr>
          <tr>
            <th>遥测距离</th>
            <td>3000米</td>
          </tr>
          <tr>
            <th class="color">连接方式</th>
            <td class="color">USB、蓝牙</td>
          </tr>
          <tr>
            <th>通道协议</th>
            <td>10通道+MAVLINK协议</td>
          </tr>
        </table>
      </div>
      <div class="link">
        （更多详情请查看<router-link to="/index/skill/document_mapping">产品手册</router-link>）
      </div>
    </div>
    <div class="btnBox">
      <div class="btn">
<!--
        <a href="https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-23273774756.7.78dc4a92jslsvd&id=619068803524" target="_blank">立即购买</a>
-->
        <router-link to="/index/pay" target="_blank" style="color: #fff;">立即购买</router-link>
      </div>
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
        var img = document.getElementsByTagName('img')[0];
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
        console.log(img);
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
