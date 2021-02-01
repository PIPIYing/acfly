<template>
  <div id="pay">
    <div id="list">
      <p class="name">商品列表</p>
      <div class="line"></div>
      <el-table
          :data="tableList"
          :header-cell-style="headClass"
          :cell-style="rowClass"
          style="width: 100%;">
        <el-table-column
            prop="id"
            label="商品编号">
        </el-table-column>
        <el-table-column
            prop="name"
            label="商品名称">
        </el-table-column>
        <el-table-column
            prop="picture"
            label="商品图片">
          <template slot-scope="scope">
            <img :src=scope.row.picture alt="" style="width: 200px;height: 200px">
          </template>
        </el-table-column>
        <el-table-column
            prop="text"
            label="商品描述"
            width="200">
        </el-table-column>
        <el-table-column
            prop="price"
            label="商品价格">
        </el-table-column>
        <el-table-column
            prop="remark"
            label="备注">
        </el-table-column>
        <el-table-column
            prop="operation"
            label="操作">
          <template slot-scope="scope">
            <i
                class="el-icon-remove-outline"
                style="font-size: 22px;margin-right: 15px;"
                @click="handleSub(scope.$index, scope.row)"></i>
            <i
                class="el-icon-circle-plus-outline"
                style="font-size: 22px;margin-left: 15px;"
                @click="handleAdd(scope.$index, scope.row)"></i>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="bottom">
      <div class="step">下一步</div>
      <div class="cart"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "pay",
    data() {
      return {
        tableList: [
          {
            id: '01',
            name: 'C9PRO飞行控制器',
            picture: '../../assets/images/A9_2.jpg',
            text: '单参数调参，工业级创新型飞行控制器',
            price: '￥4500.0',
            remark: '无'
          },
          {
            id: '02',
            name: 'C9PRO飞行控制器',
            picture: '../../assets/images/A9_2.jpg',
            text: '单参数调参，工业级创新型飞行控制器',
            price: '￥4500.0',
            remark: '无'
          },
          {
            id: '03',
            name: 'C9PRO飞行控制器',
            picture: '../../assets/images/A9_2.jpg',
            text: '单参数调参，工业级创新型飞行控制器',
            price: '￥4500.0',
            remark: '无'
          },
          {
            id: '04',
            name: 'C9PRO飞行控制器',
            picture: '../../assets/images/A9_2.jpg',
            text: '单参数调参，工业级创新型飞行控制器',
            price: '￥4500.0',
            remark: '无'
          }
        ]
      }
    },
    methods: {
      handleSub(index, row) {
        console.log(index, row);
      },
      handleAdd(index, row) {
        console.log(index, row);
      },
      headClass() {
        return "color: rgba(0,0,0,0.8);text-align: center;text-align: -moz-center;text-align: -webkit-center;padding: 30px 0;"
      },
      rowClass() {
        return "text-align: center;text-align: -moz-center;text-align: -webkit-center;"
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/style/pay";
</style>
