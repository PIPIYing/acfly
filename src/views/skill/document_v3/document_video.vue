<template>
  <div id="document_video">
    <div class="box">
      <p class="title">视频教程</p>

    </div>
  </div>
</template>

<script>
  export default {
    name: "document_video",
    data() {
      return {
        uploadData: ''
      }
    },
    methods: {
      getVideo() {
        this.$axios.get('/file/video2').then((res) => {
          if(res.status === 200) {
            console.log(res.data);
            this.uploadData = res.data;
          }
          else {
            this.$message.error(res.msg);
          }
        }).catch((err) => {
          console.log(err);
        })
      }
    },
    beforeMount() {
      this.getVideo();
    }
  }
</script>

<style scoped lang="less">
  @import "../../../assets/style/document_v3";
</style>
