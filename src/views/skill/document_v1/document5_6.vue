<template>
  <div id="document5_6">
    <div class="box">
      <p class="title">5.6 加速度计校准</p>
      <ul>
        <li>首先等待5.1中的飞控自检完成，飞控状态灯切换至绿色慢闪。</li>
        <li>遥控器油门最小，偏航最左，俯仰最下，横滚最左，两秒左右将进入M12_ACCCalib加速度校准模式。</li>
        <li>将无人机分别摆放六个面（不用按顺序，差不多水平即可）静止。每个面需静止放置5秒左右，静止放置时飞控指示灯显示蓝色，会由暗变亮指示当前进度，表示正在采集数据校准，完成一个面校准后指示灯会闪烁然后变红并且嘀一声，然后更换下一个面校准。全部六面校准完毕后自动退出M12_ACCCalib加速度校准模式，绿色慢闪。</li>
        <li>飞控灯红色表示当前面已经校准或者飞控不是静止状态无法校准。</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document5_6",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
