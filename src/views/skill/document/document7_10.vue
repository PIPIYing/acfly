<template>
  <div id="document7_10">
    <div class="box">
      <p class="title">7.10 POfs参数</p>
      <p>飞控坐标系为东北天，东为X轴正方向(机头)，北为Y轴正方向，天为Z轴正方向。偏移坐标系和飞控坐标系相同。这里说的偏移是距离飞行器所有电机组成平面的中心点的偏移。单位; cm。</p>
      <ul>
        <li>POfs_Fc_x: 飞控安装x轴偏移。</li>
        <li>POfs_Fc_y: 飞控安装y轴偏移。</li>
        <li>POfs_Fc_z: 飞控安装z轴偏移。</li>
        <li>POfs_S0_x - POfs_S15_x: 位置传感器0-15安装x轴偏移。</li>
        <li>POfs_S0_y - POfs_S15_y: 位置传感器0-15安装y轴偏移。</li>
        <li>POfs_S0_z - POfs_S15_z: 位置传感器0-15安装z轴偏移。</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document7_10",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
