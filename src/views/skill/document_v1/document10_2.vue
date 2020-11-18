<template>
  <div id="document10_2">
    <div class="box">
      <p class="title">10.2 接收机接口</p>
      <ul>
        <li>位于Drivers目录下</li>
        <li>接收机接口分为：接收机读取接口 和 接收机更新接口。</li>
        <li>函数声明分别位于：Receiver.h和Receiver _Backend.h里</li>
        <li>函数定义位于：Receiver.c里</li>
      </ul>
      <p>（1）接收机定义（Receiver.h）</p>
      <p>接收机包含SBUS、PPM等协议的接收机（至少具有6个通道），定义如下：</p>
      <div class="image">
        <img src="../../../assets/images/document/10.2_1.png" alt="" />
      </div>
      <p>（2）接收机读取接口（Receiver.h）</p>
      <ul>
        <li>get_Receiver会返回指定接收机的const结构体</li>
        <li>get_current_Receiver会返回当前接收机的const结构体（自动选择序号最低的可用接收机，无可用接收机是返回随机接收机）</li>
        <li>get_current_Reciever_Type返回当前接收机的类型（SBUS接收机、PPM接收机等）</li>
      </ul>
      <div class="image">
        <img src="../../../assets/images/document/10.2_2.png" alt="" />
      </div>
      <p>（3）接收机更新接口（Receiver_Backend.h）</p>
      <p>把接收机类型、原始数据、是否已连接等信息发送给接口即可完成接收机数据更新。</p>
      <div class="image">
        <img src="../../../assets/images/document/10.2_3.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document10_2",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
