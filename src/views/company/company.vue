<template>
  <div id="company">
    <div id="bg">
      <img src="../../assets/images/img_cut/company.jpg" alt="" />
    </div>
    <div class="introBox">
      <p class="en">INTRODUCTION</p>
      <p class="zh">公司介绍</p>
      <p class="intro">
        广州博睿创新科技有限公司ACFLY团队成立于2014年，专业从事无人机飞行控制器和相关模块的研发、生产及销售，从硬件设计到软件代码完全自主创新研制。革命性的单参数自抗扰控制器技术和定制开发服务满足客户的多元化需求，为行业提供更加安全稳定可信赖的产品和解决方案。ACFLY团队成员均拥有知名院校硕士以上学历。
      </p>
      <p class="intro">
        博睿先后推出ACFLY A9和ACFLY C9系列商业级飞控，解决了目前多数飞控程序冗余 且调参耗时的问题，可完全取代多数开源飞控，代码量仅为PIXHAWK的25%。凭借自抗扰单参数调节、传感器健康度实时检测、磁场异常智能对准、SDK接口函数快速开发等重磅功 能获业界广泛好评。
      </p>
      <p class="intro">
        在科研教育方面，博睿与国内多个高校团队进行深度合作，包括不限于南航、北航和哈工大等。
      </p>
      <p class="intro">
        博睿致力于成为中国飞控领跑者，提升企业开发效率，推动中国飞控发展，培养更多无人机领军人才。
      </p>
      <img src="../../assets/images/company_logo.png" alt="ACFLY" />
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
      <p class="contactAdd">公司地址：广东省广州市黄埔区开源大道11号科技企业加速器B2座首层</p>
      <p class="contactPhone">联系人：陈经理 13427615729</p>
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
