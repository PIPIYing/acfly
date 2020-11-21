<template>
  <div id="cases">
    <div id="bg">
     <div class="hover_bg">
       <!--<img src="../../assets/images/cases_bg.jpg" alt="" />-->
     </div>
    </div>
    <div class="intro">
      <p class="title">测绘应用</p>
      <p class="word">随着计算机技术和通讯技术的发展，无人机侧航受到测绘单位的重视，2010年国家测绘局全国配发无人机航测系统，将无人机航测推向了新的高度。</p>
    </div>
    <div class="caseBox">
      <p class="title">测绘类型</p>
      <div class="row rowFirst">
        <div class="box case1">
          <div class="hover">
            <p class="word">土地确权</p>
          </div>
        </div>
        <div class="box case2">
          <div class="hover">
            <p class="word">城市规划</p>
          </div>
        </div>
        <div class="box case3">
          <div class="hover">
            <p class="word">道路测量</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="box case4">
          <div class="hover">
            <p class="word">水利建设</p>
          </div>
        </div>
        <div class="box case5">
          <div class="hover">
            <p class="word">监控测量</p>
          </div>
        </div>
        <div class="box case6">
          <div class="hover">
            <p class="word">电力巡检</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Cases",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import "../../assets/style/cases";
</style>
