<template>
  <div id="index">
    <div id="topBar" :style="sizeInfo">
      <div class="logoImg">
        <img src="../assets/images/logo.png" alt="博睿创新科技" class="logo" />
      </div>
      <div id="nav">
        <router-link to="/index/intro" class="navItem">首页</router-link>
        <el-dropdown placement="bottom">
          <router-link to="/index/products" class="navItem">产品中心</router-link>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>C9pro 飞行控制器</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <router-link to="/index/cases" class="navItem">应用案例</router-link>
        <router-link to="/index/skill" class="navItem">技术支持</router-link>
      </div>
      <div id="switchBtn">简体中文</div>
    </div>
    <router-view class="content" :style="sizeInfo" />
    <div id="footer" :style="sizeInfo">
      <div class="footerContent">
        <div class="logoImg">
          <img src="../assets/images/logo.png" alt="博睿创新科技" class="logo" />
        </div>
        <div class="footerList">
          <p class="title">热门产品</p>
          <router-link to="/index/products/C9pro">C9 PRO飞行控制器</router-link>
          <router-link to="/index/products/C9pro">C9 飞行控制器</router-link>
          <router-link to="/index/products/C9pro">A9 飞行控制器</router-link>
          <router-link to="/index/products/C9pro">测绘整机解决方案</router-link>
        </div>
        <div class="footerList">
          <p class="title">购买渠道</p>
          <a href="#">官方商城</a>
          <a href="#">经销合作</a>
        </div>
        <div class="footerList">
          <p class="title">安全飞行</p>
          <router-link to="/index/safe">安全飞行指引</router-link>
        </div>
        <div class="footerList">
          <p class="title">联系我们</p>
          <el-popover
              placement="top-start"
              effect="dark"
              width="150"
              trigger="hover">
            <img src="../assets/images/enterpriseWeChat_hover.jpg" alt="企业微信" />
            <a href="#" slot="reference" onclick="return false">企业微信</a>
          </el-popover>
          <a href="#" onclick="return false">官方微博</a>
          <el-popover
              placement="top-start"
              width="150"
              trigger="hover">
            <img src="../assets/images/publicWeChat_hover.jpg" alt="企业微信" />
            <a href="#" slot="reference" onclick="return false">微信公众号</a>
          </el-popover>
          <router-link to="/index/company">关于我们</router-link>
        </div>
      </div>
      <div class="copy">
        <div class="line"></div>
        <div class="copyContent">
          <div class="logoImg">
            <img src="../assets/images/logo.png" alt="博睿创新科技" class="logo" />
          </div>
          <p class="copyRight">IC备案：粤icp2802989024910466 广州博睿创新科技有限公司</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        sizeInfo: {
          width: ''
        }
      }
    },
    methods: {
      getInfo() {
        /*this.info.width=window.innerWidth+'px';*/
        /*this.info.width=window.outerWidth+'px';*/
        if(window.outerWidth > window.innerWidth) {
          this.sizeInfo.width = window.outerWidth - 5 + 'px';
        }else {
          this.sizeInfo.width = window.innerWidth - 5 + 'px';
        }
        console.log(window.outerWidth,window.innerWidth,this.sizeInfo.width);
      }
    },
    created(){
      window.addEventListener('resize', this.getInfo); //注册监听器
      this.getInfo() //页面创建时先调用一次
    },
    destroyed(){
      window.removeEventListener('resize', this.getInfo)
    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/style/index";
</style>
