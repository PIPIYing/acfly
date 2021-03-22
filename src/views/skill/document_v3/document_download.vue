<template>
  <div id="document_download">
    <div id="download">
      <div class="box">
        <p class="title">文档下载</p>
        <p v-for="(item, i) in describe1" :key="i" class="update_item">
          {{ item }}
          <span class="link_style" @click="downloadPdf(i)">
            立即下载
          </span>
        </p>
        <!--<p>
          C9&Pro使用手册V1.02  PDF下载：
          <span class="link_style" @click="download_C9()">点击此处</span>
        </p>
        <p>
          ACFLY A9飞控用户手册(V2.0)  PDF下载：
          <span class="link_style" @click="download_A9()">点击此处</span>
        </p>-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document_download",
    data() {
      return {
        name1: [],
        describe1: [],
        path1: []
      }
    },
    methods: {
      getPdf() {
        this.$axios.get('/file/pdf').then((res) => {
          if(res.status === 200) {
            let data = res.data;
            for(let i = 0; i<data.length; i++) {
              this.name1.push(data[i].videoName);
              this.path1.push(data[i].path);
              this.describe1.push(data[i].describe);
            }
          }
          else {
            this.$message.error(res.msg);
          }
        }).catch((err) => {
          console.log(err);
        })
      },
      download_C9() {
        let url = 'https://acfly.cn/background/file/download/C9&Pro使用手册V1.02 - 发布.pdf';
        window.open(url);
      },
      download_A9() {
        let url = 'https://acfly.cn/background/file/download/ACFLY A9飞控用户手册(V2.0）(1).pdf';
        window.open(url);
      },
      downloadPdf(i) {
        let name = '';
        name = this.path1[i].slice(11);
        let url = 'https://acfly.cn/background/file/download/' + name;
        window.open(url);
      }
    },
    beforeMount() {
      this.getPdf();
    }
  }
</script>

<style scoped lang="less">
  @import "../../../assets/style/document_v3";
</style>
