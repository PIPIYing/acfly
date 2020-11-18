<template>
  <div id="document6">
    <div class="box">
      <p class="title">6 固件更新</p>
      <ul>
        <li>下载名为DFU驱动的压缩包(这里放置下载连接)，解压后安装驱动。</li>
        <li>打开ACFLY地面站(无需点击连接)，点击配置 – 固件更新 – 浏览 – 双击选择固件(.hex)</li>
        <li>插上飞控USB，等待烧录完成。</li>
        <p style="text-indent: 2em;">注意：需要飞控先断电，地面站选择固件后10秒内将飞控通过USB连接至电脑。</p>
        <li>部分使用32位 windows7 系统的用户，若经过上述步骤地面站仍然无法连接飞控，则安装一下MP或者QGC地面站，安装完成打开该软件再关闭。</li>
        <div class="image">
          <img src="../../../assets/images/document/6_1.png" alt="" />
        </div>
        <li>飞控出厂默认烧录BootLoader，如果由于个人二次开发不小心刷掉了飞控Flash里的BootLoader代码而导致不能用USB下载固件（一般情况下不会被刷掉），可到售后群下载ACFLy_BootLoader工程，用keil打开， stlink烧录进飞控即可。</li>
        <div class="image">
          <img src="../../../assets/images/document/6_2.png" alt="" />
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document6",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
