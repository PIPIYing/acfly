<template>
  <div id="document_video">
    <div class="box">
      <p class="title">视频教程</p>
      <div class="videoBox">
        <div class="video" v-for="(item1, i1) in name1" :key="i1">
          <p>{{ item1 }} : </p>
          <a :href='describe1[i1]' target="_blank" style="color: #4299F9;text-decoration: underline;cursor: pointer;" v-if="describe1[i1]">{{ describe1[i1] }}</a>
          <p v-else>暂无</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "document_video",
    data() {
      return {
        name1: [],
        describe1: [],
        path1: [],
        path: 'https://www.baidu.com/'
      }
    },
    methods: {
      getVideo() {
        this.$axios.get('/file/video2').then((res) => {
          if(res.status === 200) {
            let data = res.data;
            console.log(data);
            let describe1 = [];  //存放视频的描述文字
            let name1 = [];  //存放视频的名字
            let path1 = [];  //存放视频的路径
            for (let i = 0; i < data.length; i++) {
              name1.push(data[i].videoName);
              describe1.push(data[i].descirbe);
              path1.push(data[i].path);
            }
            this.name1 = name1;
            this.describe1 = describe1;
            this.path1 = path1;
            console.log(this.name1, this.describe1);
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
