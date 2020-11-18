<template>
  <div id="document5_7">
    <div class="box">
      <p class="title">5.7 磁罗盘校准</p>
      <ul>
        <li>首先等待5.1中的飞控初始化完成，飞控状态灯切换至绿色慢闪。</li>
        <li>遥控器油门最小，偏航最左，俯仰最上，横滚最左。两秒左右将进入M13_MagCalib磁罗盘校准模式。</li>
        <li>旋转无人机尽量多的三维角度，旋转时飞控指示灯显示蓝色，会由暗变亮指示当前进度。完成后飞控指示灯闪烁并嘀一声表示校准完成。绿色慢闪。</li>
        <li>飞控指示灯红色表示飞控没有在旋转无法校准，继续旋转无人机即可。</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document5_7",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
