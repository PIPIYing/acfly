<template>
  <div id="safe">
    <div class="safeFly">
      <span>安全飞行</span>
    </div>
    <div class="low">
      <p class="title">政策法规</p>
      <p class="content">
        尊敬的用户你们好！在使用无人飞行器之前，请务必查询当地关于无人机飞行管控条例的政策与相关法规，在合法合理安全的情况下执行飞行任务。为了方便您的查阅，ACFly将附上中国民用航空局的官方网站链接。请通过如下链接前往各国空域管理政策网站进一步了解。
      </p>
      <a href="#">政策链接>></a>
    </div>
    <div class="ruleBox">
      <p class="rule">安全飞行准则</p>
      <div class="ruleLine">
        <div class="ruleItem">
          <img src="../../assets/images/icon_attention.png" alt="" />
          <p class="roleWord">执行飞行任务前，请提前查询相关政策法律法规</p>
        </div>
        <div class="ruleItem">
          <img src="../../assets/images/icon_gps.png" alt="" />
          <p class="roleWord">在GPS信号良好的地方进行飞行任务</p>
        </div>
        <div class="ruleItem">
          <img src="../../assets/images/icon_building.png" alt="" />
          <p class="roleWord">请远离高层建筑物，在安全高度内飞行</p>
        </div>
        <div class="ruleItem">
          <img src="../../assets/images/icon_tip.png" alt="" />
          <p class="roleWord">执行飞行任务前，请勿饮酒，保持清醒</p>
        </div>
      </div>
      <hr class="line" />
      <div class="ruleLine">
        <div class="ruleItem">
          <img src="../../assets/images/icon_hand.png" alt="" />
          <p class="roleWord">执行任务中，要遵守操作守则，全程双手控制</p>
        </div>
        <div class="ruleItem">
          <img src="../../assets/images/icon_road.png" alt="" />
          <p class="roleWord">请在空旷和实现范围内飞行，请勿在人群上方飞行</p>
        </div>
        <div class="ruleItem">
          <img src="../../assets/images/icon_electric.png" alt="" />
          <p class="roleWord">执行飞行任务前，应先检查设备电量、配件等完整</p>
        </div>
        <div class="ruleItem">
          <img src="../../assets/images/icon_book.png" alt="" />
          <p class="roleWord">认真阅读操作手册，并参考飞行培训课程，加强练习</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Safe",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import "../../assets/style/safe";
</style>
