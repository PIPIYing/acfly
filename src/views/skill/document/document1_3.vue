<template>
  <div id="document1_3">
    <div class="box">
      <p class="title">1.3 固件烧录</p>
      <p>代码烧录有两种方式，一是使用stlink下载，二是使用USB下载固件(具体看固件更新一章)。仿真代码需要连接飞控的SWD接口。将此接口与ST-Link（推荐）、JLink等下载器的对应接口连接，然后接通电源即可下载。</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document1_3",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
