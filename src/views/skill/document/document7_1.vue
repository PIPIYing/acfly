<template>
  <div id="document7_1">
    <div class="box">
      <p class="title">7.1 调参软件</p>
      <ul>
        <li>本飞控使用Mavlink协议，支持使用Mavlink的参数协议进行调参。</li>
      </ul>
      <p>（1）ACFly地面站</p>
      <ul>
        <li>将飞控连接到电脑，打开ACFly地面站 (下载链接)，通过USB连接飞控</li>
        <li>点击配置-参数表-可对相应参数进行修改，修改后需点击保存全部或者保存选定。</li>
      </ul>
      <div class="image">
        <img src="../../../assets/images/document/7.1_1.png" alt="" />
      </div>
      <p>（2）支持Mavlink协议的开源地面站</p>
      <p>以Mission Planner为例，将飞控连接至电脑，右上角选择COM口号，点击连接，地面站将获取飞控的参数列表。（注意：请在代码的main文件里将init_debug注释掉或在Debug文件里不要往此端口写入非Mavlink的调试数据，不然将导致Mavlink误码过多地面站不识别）</p>
      <div class="image">
        <img src="../../../assets/images/document/7.1_2.png" alt="" />
      </div>
      <p>在配置调试—>参数表中修改参数，然后点击右侧的写入参数即可将参数写入飞控。</p>
      <p>(3)支持手机QGC地面站修改参数。</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document7_1",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
