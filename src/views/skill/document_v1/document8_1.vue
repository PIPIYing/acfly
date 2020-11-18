<template>
  <div id="document8_1">
    <div class="box">
      <p class="title">8.1 航点设置</p>
      <p>本飞控使用的是mavlink协议，支持主流开源地面站设置航点，包括Mission Planner、QGC(电脑和手机版都支持)等。最多设置65536个航点。以mission planner为例：</p>
      <div class="image">
        <img src="../../../assets/images/document/8.1_1.png" alt="" />
      </div>
      <p>首先设置第一个点为TAKEOFF点，再点击地图设置想要的航点(waypoint)、设置每个航点的高度和飞向下一个航点的等待时间等，最后可设置一个返航点。设置完后点击右边的写入航点按钮等待写入成功，可以点击读取航点查看是否成功写入航点。</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document8_1",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
