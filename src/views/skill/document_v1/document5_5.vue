<template>
  <div id="document5_5">
    <div class="box">
      <p class="title">5.5 陀螺校准</p>
      <ul>
        <li>首先等待5.1中的飞控自检完成，飞控状态灯切换至绿色慢闪。</li>
        <li>遥控器油门最小，偏航最右，俯仰居中，横滚最右，两秒左右，滴一声进入陀螺校准模式，蓝绿 </li>
        <li>飞控需放置静止不动等待5秒左右，滴滴后校准完成，绿色慢闪。</li>
        <li>如果校准过程中飞控不静止，将会校准失败，出现红灯并滴一声退出校准，重新打杆校准即可。</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document5_5",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
