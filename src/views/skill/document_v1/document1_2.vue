<template>
  <div id="document1_2">
    <div class="box">
      <p class="title">1.2 编译环境设置</p>
      <p>在MDK界面下点击下列按钮进入工程配置选项：</p>
      <div class="image">
        <img src="../../../assets/images/document/1.2_1.png" alt="" />
      </div>
      <p>在Target选项卡中选择V6开头的编译器（如果没有，可以安装MDK较新的版本或者前往https://developer.arm.com/products/software-development-tools/compilers/arm-compiler/downloads/version-6 网页单独下载编译器并安装进MDK），并取消Use MicroLib复选框；在C/C++(AC6)选项卡中进行下图中的配置：</p>
      <div class="image">
        <img src="../../../assets/images/document/1.2_2.png" alt="" />
      </div>
      <div class="image">
        <img src="../../../assets/images/document/1.2_3.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document1_2",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
