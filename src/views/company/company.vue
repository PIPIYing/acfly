<template>
  <div id="company">
    <div id="bg">
      <img src="../../assets/images/company.jpg" alt="" />
    </div>
    <div class="introBox">
      <p class="en">INTRODUCTION</p>
      <p class="zh">公司介绍</p>
      <p class="intro">
        广州博睿创新科技有限公司，ACFLY团队成立于2014年，专业从事无人机飞行控制器和相关模块的研发、生产及销售，
        从硬件设计到软件代码完全自主创新研制。革命性的单参数自抗扰控制器技术和定制开发服务能够满足客户的多元化
        需求，为您和行业提供更加安全稳定可信赖的产品和解决方案。
      </p>
      <img src="../../assets/images/company_logo.jpg" alt="ACFLY" />
    </div>
    <div class="contactBox">
      <div class="weChat">
        <img src="../../assets/images/enterpriseWeChat.jpg" alt="企业微信" class="weChat1" />
        <p class="word1">企业微信</p>
      </div>
      <div class="weChat">
        <img src="../../assets/images/publicWeChat.jpg" alt="微信公众号" class="weChat2" />
        <p class="word2">微信公众号</p>
      </div>
    </div>
    <div class="contact">
      <p class="contactAdd">公司地址：广东省广州市黄埔区开源大道11号科技企业加速器B2座首层 巨轮机器人</p>
      <p class="contactPhone">联系人：陈经理 18819441572</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Company",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import "../../assets/style/company";
</style>
