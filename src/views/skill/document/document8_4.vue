<template>
  <div id="document8_4">
    <div class="box">
      <p class="title">8.4 失控返航</p>
      <ul>
        <li>如果无人机不是在任务模式，飞行过程中遥控器断联无人机会自动返航，使用PPM接收机则不支持此功能。</li>
        <li>如果无人机在任务模式，飞行过程中遥控器断联后无人机会继续执行任务，执行完任务后自动返航，使用PPM接收机则不支持此功能。</li>
        <li>如果GPS没定位，遥控断联，无人机则会自动降落。</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document8_4",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
