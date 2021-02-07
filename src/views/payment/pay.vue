<template>
  <div id="pay">
    <div id="list" v-show="showList">
      <div class="productList">
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
            <template slot-scope="scope">
              ￥{{ scope.row.price }}（不含税）
            </template>
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
        <div class="step" @click="nextToAdd">下一步</div>
        <div class="cart">
          <el-badge :value="productNum" class="item" slot="reference">
            <el-tooltip class="item_word" effect="light" placement="top">
              <img src="../../assets/images/icon_cart.png" alt="">
              <div slot="content">
                <p
                    v-for="(item, index) in cartList"
                    :key="index"
                    style="line-height: 22px;">
                  {{ item.num?item.name + '  *' + item.num:"" }}
                </p>
              </div>
            </el-tooltip>
          </el-badge>
          <div class="data">
            <div class="icon">￥</div>
            <div class="num">{{ productSum }}</div>
          </div>
        </div>
      </div>
    </div>
    <div id="address" v-show="showAddress">
      <div class="addressList">
        <el-page-header @back="goBack1" content="填写地址"></el-page-header>
        <div class="line"></div>
        <div class="dataList">
          <p class="dataTitle">您购买的产品：</p>
          <div class="flex_two">
            <div class="flex_one">
              <p
                  v-for="(item, index) in cartList"
                  :key="index"
                  class="dataItem">
                {{ item.num?item.name + '  *' + item.num:"" }}
              </p>
            </div>
            <p class="dataSum">商品总额：{{ productSum }}（不含税）</p>
          </div>
          <el-form
              ref="form"
              :model="form"
              :rules="rules"
              label-width="80px;"
              label-position="top"
              class="dataForm">
            <el-form-item prop="name">
              <el-input v-model="form.name" placeholder="请输入您的姓名：" class="dataInput"></el-input>
            </el-form-item>
            <el-form-item prop="phone">
              <el-input v-model="form.phone" placeholder="请输入您的电话：" class="dataInput"></el-input>
            </el-form-item>
            <el-form-item prop="email">
              <el-input v-model="form.email" placeholder="请输入您的邮箱：" class="dataInput"></el-input>
            </el-form-item>
            <el-form-item label="请选择您的地址">
              <div class="form_two">
                <VDistpicker
                    :province="form.address1.province"
                    :city="form.address1.city"
                    :area="form.address1.area"
                    @province="onChangeProvince"
                    @city="onChangeCity"
                    @area="onChangeArea">
                </VDistpicker>
                <el-input v-model="form.address1.add" placeholder="请输入详细地址，具体到门牌号" class="dataInline"></el-input>
              </div>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.remark" placeholder="备注信息：" class="dataInput"></el-input>
              <span class="remarkWord">如果您有其他要求请备注</span>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="bottom">
        <div class="step" @click="nextToPayment">下一步</div>
        <div class="cart">
          <el-badge :value="productNum" class="item" slot="reference">
            <el-tooltip class="item_word" effect="light" placement="top">
              <img src="../../assets/images/icon_cart.png" alt="">
              <div slot="content">
                <p
                    v-for="(item, index) in cartList"
                    :key="index"
                    style="line-height: 22px;">
                  {{ item.num?item.name + '  *' + item.num:"" }}
                </p>
              </div>
            </el-tooltip>
          </el-badge>
          <div class="data">
            <div class="icon">￥</div>
            <div class="num">{{ productSum }}</div>
          </div>
        </div>
      </div>
    </div>
    <div id="payment" v-show="showPayment">
      <div class="paymentList">
        <el-page-header @back="goBack2" content="支付方式"></el-page-header>
        <div class="line"></div>
        <div class="dataList">
          <p class="dataTitle">您购买的产品：</p>
          <div class="flex_two">
            <div class="flex_one">
              <p
                  v-for="(item, index) in cartList"
                  :key="index"
                  class="dataItem">
                {{ item.num?item.name + '  *' + item.num:"" }}
              </p>
            </div>
            <p class="dataSum">商品总额：{{ productSum }}  {{ need1 }}</p>
          </div>
        </div>
        <div class="payStyle">
          <p class="dataTitle">请选择支付方式</p>
          <div class="payBox">
            <div class="pushContent">
              <span class="pushWord">加入用户体验计划，我们将第一时间向您推送产品的更新信息及优惠等</span>
              <input type="checkbox" id="push" class="pushBox" @click="getCheck()">
              <label for="push"></label>
            </div>
            <div class="invoiceContent">
              <span class="invoiceWord">是否需要开具发票</span>
              <div class="radioBox">
                <input type="radio" name="invoice" id="invoice1" value="1" class="invoiceBox">
                <label for="invoice1"></label>
                <span class="invoiceWord">需要</span>
                <div style="display: inline-block;margin-left: 20px;"></div>
                <input type="radio" name="invoice" id="invoice2" value="0" checked class="invoiceBox">
                <label for="invoice2"></label>
                <span class="invoiceWord">不需要</span>
              </div>
            </div>
          </div>
        </div>
        <div class="invoiceForm"></div>
        <div class="payChoose">
          <div class="choose" @click="getRadio">
            <img src="../../assets/images/icon_wechat.png" alt="" class="icon icon_wechat">
            <p class="word">微信支付</p>
          </div>
          <div class="choose choose_left">
            <img src="../../assets/images/icon_zhifubao.png" alt="" class="icon">
            <p class="word">支付宝支付</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
  export default {
    name: "pay",
    components: { VDistpicker },
    data() {
      return {
        tableList: [
          {
            id: '01',
            name: 'C9PRO飞行控制器1',
            picture: '../../assets/images/A9_2.jpg',
            text: '单参数调参，工业级创新型飞行控制器',
            price: 4500.0,
            remark: '无'
          },
          {
            id: '02',
            name: 'C9PRO飞行控制器2',
            picture: '../../assets/images/A9_2.jpg',
            text: '单参数调参，工业级创新型飞行控制器',
            price: 3500.0,
            remark: '无'
          },
          {
            id: '03',
            name: 'C9PRO飞行控制器3',
            picture: '../../assets/images/A9_2.jpg',
            text: '单参数调参，工业级创新型飞行控制器',
            price: 2500.0,
            remark: '无'
          },
          {
            id: '04',
            name: 'C9PRO飞行控制器4',
            picture: '../../assets/images/A9_2.jpg',
            text: '单参数调参，工业级创新型飞行控制器',
            price: 1500.0,
            remark: '无'
          }
        ],
        productNum: 0,
        productSum: 0,
        cartList: [
          {
            name: 'C9PRO飞行控制器1',
            num: 1
          },
          {
            name: 'C9PRO飞行控制器2',
            num: 2
          },
          {
            name: 'C9PRO飞行控制器3',
            num: 3
          },
          {
            name: 'C9PRO飞行控制器4',
            num: 4
          },
        ],
        showList: false,
        showAddress: false,
        showPayment: true,
        form: {
          name: '',
          phone: '',
          email: '',
          address1: {
            province: '广东省',
            city: '广州市',
            area: '番禺区',
            add: ''
          },
          address2: '',
          remark: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入您的姓名', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入您的电话', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入您的邮箱', trigger: 'blur' }
          ]/*,
          add: [
            { required: true, message: '请输入详细地址', trigger: 'blur' }
          ]*/
        },
        need1: '（不含税）',
        need2: '（含税）',
        pushValue: false,
        radioValue: false
      }
    },
    methods: {
      handleSub(index, row) {
        /*console.log(index, row);*/
        for(let i=0; i<this.cartList.length; i++) {
          if(this.cartList[i].name === row.name){
            if(this.cartList[i].num > 0 && this.productNum > 0) {
              this.cartList[i].num--;
              this.productNum--;
              this.productSum -= row.price;
            }else {
              this.errorMsg();
            }
          }
        }
      },
      handleAdd(index, row) {
        /*console.log(index, row);*/
        for(let i=0; i<this.cartList.length; i++) {
          if(this.cartList[i].name === row.name){
            this.cartList[i].num++;
            this.productNum++;
            this.productSum += row.price;
          }
        }
      },
      errorMsg() {
        this.$message.error('操作失败');
      },
      headClass() {
        return "color: rgba(0,0,0,0.8);text-align: center;text-align: -moz-center;text-align: -webkit-center;padding: 30px 0;"
      },
      rowClass() {
        return "text-align: center;text-align: -moz-center;text-align: -webkit-center;"
      },
      nextToAdd() {
        if(this.productNum > 0) {
          this.showList = false;
          this.showAddress = true;
        }else {
          this.errorMsg();
        }
      },
      nextToPayment() {
        var addValue = this.form.address1;
        if(addValue.province==='' || addValue.city==='' || addValue.area==='' || addValue.add==='') {
          this.$message.error('请完整填写您的地址');
        } else {
          this.form.address2 = addValue.province + addValue.city + addValue.area + addValue.add;
          console.log(this.form);
          this.showAddress = false;
          this.showPayment = true;
        }
      },
      goBack1() {
        this.showAddress = false;
        this.showList = true;
      },
      goBack2() {
        this.showAddress = true;
        this.showPayment = false;
      },
      onChangeProvince(data) {
        this.form.address1.province = data.value;
      },
      onChangeCity(data) {
        this.form.address1.city = data.value;
      },
      onChangeArea(data) {
        this.form.address1.area = data.value;
      },
      getCheck() {
        this.pushValue = document.getElementById("push").checked;
      },
      getRadio() {
        this.radioValue = document.getElementById("invoice1").checked;
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/style/pay";
</style>

<style>
  .el-page-header__title, .el-page-header__content {
    color: rgba(0,0,0,0.8);
    font-size: 22px;
    line-height: 44px;
  }
  .el-page-header__title {
    font-size: 18px;
  }
  .form_two + div {
    margin-left: 50%;
  }
</style>
