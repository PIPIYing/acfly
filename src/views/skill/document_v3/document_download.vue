<template>
  <div id="document_download">
    <div id="download">
      <div class="box">
        <p class="title">文档下载</p>
        <p>
          C9&Pro使用手册V1.02  PDF下载：
          <span class="link_style" @click="download_C9()">点击此处</span>
        </p>
        <p>
          ACFLY A9飞控用户手册(V2.0)  PDF下载：
          <span class="link_style" @click="download_A9()">点击此处</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document_download",
    data() {
      return {}
    },
    methods: {
      download_C9() {
        let url = 'https://acfly.cn/background/file/download/C9&Pro使用手册V1.02 - 发布.pdf';
        window.open(url);
      },
      download_A9() {
        let url = 'https://acfly.cn/background/file/download/ACFLY A9飞控用户手册(V2.0）(1).pdf';
        window.open(url);
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../assets/style/document_v3";
</style>
