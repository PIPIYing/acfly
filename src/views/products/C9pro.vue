<template>
  <div id="C9pro">
    <Detail :urlData="url"></Detail>
    <TablePart :parameterData="parameter"></TablePart>
    <div class="btn">
      <a href="#">立即购买</a>
    </div>
  </div>
</template>

<script>
  import Detail from "../../components/products/detailPage";
  import TablePart from "../../components/products/tablePart";

  export default {
    name: "C9pro",
    components: { Detail, TablePart },
    data() {
      return {
        url: [
          { bg: require('../../assets/images/C9_1.jpg') },
          { bg: require('../../assets/images/C9_2.jpg') },
          { bg: require('../../assets/images/C9_3.jpg') }
        ],
        parameter: [
          ['C9PRO参数','111','111','111'],
          ['参数1','111','111','111'],
          ['参数2','111','111','111'],
          ['参数3','111','111','111']
        ]
      }
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import "../../assets/style/productsDetail";
</style>
