<template>
  <div id="document5_3">
    <div class="box">
      <p class="title">5.3 飞行模式设置</p>
      <p>遥控校准的第一个按钮用来切换飞行模式。校准的第二、第三、第四个按钮用来设置执行任务、返航和安全按钮。</p>
      <div class="image">
        <img src="../../../assets/images/document/5.3_1.png" alt="" />
      </div>
      <ul>
        <li>飞行模式有定点模式、定高模式、任务模式和返航模式。通过按钮一来设置。</li>
        <li>要想任务模式执行的是航线飞行，则将对应的解锁前模式设置为32(默认设置)。</li>
        <li>要想任务模式执行的是二次开发飞行任务(需要用户自己实现，具体请看二次开发教程，比如利用openmv自动巡线)，则将对应的解锁前模式设置为35，即将上图模式3栏的32改成35。</li>
        <li>执行任务按钮是第二种进入任务模式的方式，只要将按钮1(如果是三档按钮)打到中间档，油门回中，然后按下执行任务按钮即可进入任务模式。</li>
        <li>返航按钮则是执行一键返航功能。</li>
        <li>安全按钮为电机急停按钮。</li>
        <li>第二、三、四个按钮有按下和变化两种设置，选择按下则对应通道值最大时为按下，选择变化则无论按钮在哪档，只要有变化(三档按钮变化一档即可)则执行对应功能。</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document5_3",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
