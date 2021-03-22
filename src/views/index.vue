<template>
  <div id="index">
    <div id="topBar" :style="sizeInfo">
      <div class="logoImg" :style="{ 'background-image':'url('+imgUrl+')' }">
        <!--<img src="../assets/images/logo.png" alt="博睿创新科技" class="logo" />-->
      </div>
      <div id="nav">
        <div class="dropdown">
          <router-link to="/index/intro">首页</router-link>
        </div>
        <div class="dropdown">
          <router-link to="/index/products">产品中心</router-link>
          <div class="navList">
            <div class="item">
              <router-link to="/index/products/C9pro">C9pro飞行控制器</router-link>
            </div>
            <div class="item">
              <router-link to="/index/products/C9">C9飞行控制器</router-link>
            </div>
            <div class="item">
              <router-link to="/index/products/A9">A9飞行控制器</router-link>
            </div>
            <div class="item">
              <router-link to="/index/products/mapping">整机解决方案</router-link>
            </div>
          </div>
        </div>
        <div class="dropdown">
          <router-link to="/index/cases">应用案例</router-link>
        </div>
        <div class="dropdown">
          <router-link to="/index/skill" target="_blank">技术支持</router-link>
          <div class="navList">
            <div class="item">
              <p @click="downloadZip()" class="download">地面站下载</p>
            </div>
            <div class="item">
              <router-link to="/index/skill" target="_blank">技术文档</router-link>
            </div>
            <div class="item">
              <router-link to="/index/develop">定制开发</router-link>
            </div>
            <div class="item">
              <router-link to="/index/problem">常见问题</router-link>
            </div>
          </div>
        </div>
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
          <router-link to="/index/products/C9">C9 飞行控制器</router-link>
          <router-link to="/index/products/A9">A9 飞行控制器</router-link>
          <router-link to="/index/products/mapping">整机解决方案</router-link>
        </div>
        <div class="footerList">
          <p class="title">购买渠道</p>
<!--
          <a href="https://shop227604841.taobao.com/?spm=2013.1.1000126.2.315331437MJ3XW" target="_blank">官方商城</a>
-->
          <router-link to="/index/pay" target="_blank">官方商城</router-link>
          <router-link to="/index/develop">经销合作</router-link>
          <a href="#" onclick="return false" @click="downloadZip()">地面站下载</a>
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
          <p class="copyRight">IC备案：粤ICP备2020124827号 广州博睿创新科技有限公司</p>
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
        },
        imgUrl: require('../assets/images/logo_black.png')
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
      },
      downloadZip() {
        let url = 'https://acfly.cn/background/file/download/地面站.zip';
        window.open(url);
        /*let url = 'https://acfly.cn/background/file/download/地面站.rar'
        let xhr = new XMLHttpRequest();
        xhr.open("get", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
        xhr.responseType = "blob";
        xhr.onload = function () {
          if (this.status === 200) {
            var blob = this.response;
            let href = window.URL.createObjectURL(blob);
            let link = document.createElement("a");
            link.href = href;
            link.download = "/地面站"+'.rar';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(href);
          }
          else {
            alert("出现了未知的错误!");
          }
        }*/
      },
      //计数浏览人数
      getCount() {
        this.$axios.get('/count/count',).then((res) => {
          if(res.status === 200) {
            console.log(res);
          }
          else {
            this.$message.error(res.msg);
          }
        }).catch((err) => {
          console.log(err);
        })
      },
     /* routerChange(to, from) {
        console.log('原路由：' + from.path);
        console.log('现路由：' + to.path);
        if(to.path === '/index/products/A9') {
          this.imgUrl = require('../assets/images/logo.png');
        } else {
          this.imgUrl = require('../assets/images/logo_black.png');
        }
      }*/
    },
    created(){
      this.getCount();
      window.addEventListener('resize', this.getInfo); //注册监听器
      this.getInfo() //页面创建时先调用一次
    },
    /*mounted() {
      var logo = document.getElementById('changeLogo');
      this.imgUrl = require('../assets/images/logo.png')
      console.log(logo.style.backgroundImage);
    },*/
    destroyed(){
      window.removeEventListener('resize', this.getInfo)
    },
    /*watch: {
      //注意：$route不是$router
      '$route' : 'routerChange'
    }*/
  }
</script>

<style lang="less" scoped>
  @import "../assets/style/index";
</style>
