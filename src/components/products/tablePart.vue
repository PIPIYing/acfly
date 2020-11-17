<template>
  <div id="tablePart">
    <table class="parameter">
      <tr v-for="(item1,index1) in parameterData" :key="index1">
        <td v-for="(item2,index2) in item1" :key="index2">
          {{ item2 }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "TablePart",
    props: {
      parameterData: []
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import "../../assets/style/tablePart";
</style>
