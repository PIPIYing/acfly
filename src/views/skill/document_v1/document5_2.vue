<template>
  <div id="document5_2">
    <div class="box">
      <p class="title">5.2 遥控器校准</p>
      <p>此飞控要求遥控器至少具有6个通道，包含4个摇杆和2个按钮，最多支持校准8个通道。校准的第一个按钮用来切换飞行模式。校准的第二、第三、第四个按钮用来设置执行任务、返航和安全按钮。</p>
      <p>首先等待5.1中的飞控自检完成，飞控状态灯切换至绿灯慢闪。</p>
      <p>将飞控用USB或者数传连接到电脑，打开ACFly地面站，点击连接。</p>
      <p>（1）打开遥控器（已将接收机连接至飞控，参考3.3）</p>
      <p>部分遥控器需要提前设置好遥控器的PPM/SBUS模式，根据需要设置2-3个按钮（即辅助通道）</p>
      <p>（2）将四个摇杆通道回中，在ACFly地面站中选择美国手、中国手或者日本手后，点击“校准遥控器”按钮。飞控进入遥控器校准模式。</p>
      <div class="image">
        <img src="../../../assets/images/document/5.2_1.png" alt="" />
      </div>
      <p>（3）等待蜂鸣器响三声后，表示已记录所有摇杆初始位置</p>
      <p>（4）按照地面站动画和文字提示校准飞控，最后需将油门拉低，蜂鸣器快响三声表示表示校准成功。</p>
      <p>错误情况：</p>
      <ul>
        <li>哔—长叫并退出校准模式：遥控器或接收机断开</li>
        <li>完成校准时哔—长叫：摇杆通道的最高油门、最低油门到摇杆中间的行程不一致。</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document5_2",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
