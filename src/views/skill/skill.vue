<template>
  <div id="skill">
    <div class="top">
      <router-link to="/index/intro">
        <img src="../../assets/images/logo.png" alt="" />
      </router-link>
    </div>
    <div class="center" :style="sizeInfo">
      <div class="catalog">
        <ul>
          <li class="title">ACFLY飞控用户手册</li>
          <li class="title1">0 阅读提示</li>
          <li class="title2">
            <router-link to="/index/skill/document0_1">0.1 使用建议</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document0_2">0.2 安全提示</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document0_3">0.3 关注微信公众号</router-link>
          </li>
          <li class="title1">1 开发环境搭建</li>
          <li class="title2">
            <router-link to="/index/skill/document1_1">1.1 编译环境（MDK）安装</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document1_2">1.2 编译环境设置</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document1_3">1.3 固件烧录</router-link>
          </li>
          <li class="title1">2 正版注册</li>
          <li class="title2">
            <router-link to="/index/skill/document2_1">2.1 正版注册情况</router-link>
          </li>
          <li class="title1">3 硬件接口定义</li>
          <li class="title2">
            <router-link to="/index/skill/document3_1">3.1 接口定义</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document3_2">3.2 外设接口</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document3_3">3.3 飞控尺寸重量</router-link>
          </li>
          <li class="title1">4 飞控安装</li>
          <li class="title2">
            <router-link to="/index/skill/document4_1">4.1 电机顺序及转向</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document4_2">4.2 连接电机电调</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document4_3">4.3 连接接收机</router-link>
          </li>
          <li class="title1">5 飞控初始设置及校准</li>
          <li class="title2">
            <router-link to="/index/skill/document5_1">5.1 飞控初始化</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document5_2">5.2 遥控器校准</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document5_3">5.3 飞行模式设置</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document5_4">5.4 电调电机校准</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document5_5">5.5 陀螺校准</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document5_6">5.6 加速度计校准</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document5_7">5.7 磁罗盘校准</router-link>
          </li>
          <li class="title1">
            <router-link to="/index/skill/document6">6 固件更新</router-link>
          </li>
          <li class="title1">7 飞控调参</li>
          <li class="title2">
            <router-link to="/index/skill/document7_1">7.1 调参软件</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document7_2">7.2 参数分类</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document7_3">7.3 调参教程</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document7_4">7.4 姿态控制参数</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document7_5">7.5 电池参数调节</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document7_6">7.6 GPS参数设置</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document7_7">7.7 位置控制参数</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document7_8">7.8 安全模式参数</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document7_9">7.9 AUX参数</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document7_10">7.10 POfs参数</router-link>
          </li>
          <li class="title1">8 功能介绍</li>
          <li class="title2">
            <router-link to="/index/skill/document8_1">8.1 航点设置</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document8_2">8.2 航线飞行</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document8_3">8.3 一键返航</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document8_4">8.4 失控返航</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document8_5">8.5 抗磁干扰</router-link>
          </li>
          <li class="title1">9 代码框架</li>
          <li class="title2">
            <router-link to="/index/skill/document9_1">9.1 代码总体布局</router-link>
          </li>
          <li class="title1">
            <router-link to="/index/skill/document10">10 代码接口手册</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document10_1">10.1 传感器接口</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document10_2">10.2 接收机接口</router-link>
          </li>
          <li class="title1">11 稳压连接</li>
          <li class="title1">12 代码二次开发教程</li>
          <li class="title1">13 版本更新日志</li>
        </ul>
      </div>
      <router-view class="content"></router-view>
    </div>
    <div class="bottom">
      <div class="bottomWord">广州博睿创新科技有限公司</div>
      <div class="copy">
        <div class="logoImg">
          <img src="../../assets/images/logo.png" alt="博睿创新科技" class="logo" />
        </div>
        <p>IC备案：粤icp2802989024910466 广州博睿创新科技有限公司</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Skill",
    data() {
      return {
        sizeInfo: {
          height: ''
        }
      }
    },
    methods: {
      //center盒子的高
      getSizeInfo() {
        /*this.sizeInfo.width = window.outerWidth+'px';*/
        if(window.outerHeight > window.innerHeight) {
          this.sizeInfo.height = window.outerHeight - 110 + 'px';  //top和bottom的高
        }else {
          this.sizeInfo.height = window.innerHeight - 110 + 'px';
        }
      }
    },
    created(){
      window.addEventListener('resize', this.getSizeInfo);
      this.getSizeInfo();
    },
    destroyed(){
      window.removeEventListener('resize', this.getSizeInfo);
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/style/skill";
</style>
