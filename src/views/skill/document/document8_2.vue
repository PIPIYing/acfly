<template>
  <div id="document8_2">
    <div class="box">
      <p class="title">8.2 航线飞行</p>
      <p>校准完遥控(看5.2节)，设置完航点后，即可飞航线，步骤如下：</p>
      <ul>
        <li>飞控上电等待GPS定位成功(定位不成功则无法自动起飞)，切换任务模式(请参考5.3节)，解锁飞控。</li>
        <li>油门回中等待自动起飞(航点需设置起飞点)。也可手动起飞后再执行上述操作，无人机将开始自动执行任务。</li>
        <li>无人机在飞行过程中会自动把机头对准下一个航点再飞过去，期间飞手可以打任意摇杆中断，夺回控制权，摇杆不动持续一段时间后会再次从断点处继续执行任务。支持断电续飞。</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document8_2",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
