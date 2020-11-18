<template>
  <div id="document5_4">
    <div class="box">
      <p class="title">5.4 电调电机校准</p>
      <p>为了安全起见，请先卸桨！！！</p>
      <p>为了安全起见，请先卸桨！！！</p>
      <p>为了安全起见，请先卸桨！！！</p>
      <p>打开ACFly地面站，将飞控通过USB与地面站连接，连接成功后，在配置-参数调整-电调参数栏目中，点击校准电调，断电，为了安全起见，请先卸桨！！！然后用电池给飞控和电机同时上电，此时电调会发出滴-滴滴-滴的声音，表示校准完成。</p>
      <div class="image">
        <img src="../../../assets/images/document/5.4_1.png" alt="" />
      </div>
      <ul>
        <li>天行者、铂金等非多旋翼电调必须进行起转油门设置，一般天行者起转油门设为15。其他多旋翼电调可不用设置起转油门。修改完需点击写入电调参数。</li>
        <li>非线性系数和电调刹车设置有关，普通电调(未开刹车)非线性系数一般为0.45，开刹车一般为0.1，DJI电调一般为0.75。修改完需点击写入电调参数。</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document5_4",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
