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
              label="商品编号"
              align="center">
            <template slot-scope="scope">
              {{ scope.$index+1 }}
            </template>
          </el-table-column>
          <el-table-column
              prop="productName"
              label="商品名称"
              align="center">
          </el-table-column>
          <el-table-column
              label="商品图片"
              align="center">
            <template slot-scope="scope">
              <img :src=scope.row.imageUrl alt="" style="width: 200px;height: 150px">
            </template>
          </el-table-column>
          <el-table-column
              prop="describe"
              label="商品描述"
              width="200"
              align="center">
          </el-table-column>
          <el-table-column
              prop="productPrice"
              label="商品价格"
              align="center">
            <template slot-scope="scope">
              ￥{{ scope.row.productPrice }}（不含税）
            </template>
          </el-table-column>
          <el-table-column
              prop="remark"
              label="备注"
              align="center">
          </el-table-column>
          <el-table-column
              prop="operation"
              label="操作"
              align="center">
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
                  {{ item.num?item.item + '  *' + item.num:"" }}
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
                {{ item.num?item.item + '  *' + item.num:"" }}
              </p>
            </div>
            <p class="dataSum">商品总额：{{ productSum }}元（不含税）</p>
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
                {{ item.num?item.item + '  *' + item.num:"" }}
              </p>
            </div>
            <p class="dataSum">商品总额：{{ productSum }}元  {{ invoice?'（含税）':'（不含税）' }}</p>
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
                <input type="radio" name="invoice" id="invoice1" value="1" class="invoiceBox" @click="toInvoice">
                <label for="invoice1"></label>
                <span class="invoiceWord">需要</span>
                <div style="display: inline-block;margin-left: 20px;"></div>
                <input type="radio" name="invoice" id="invoice2" value="0" checked class="invoiceBox" @click="notToInvoice">
                <label for="invoice2"></label>
                <span class="invoiceWord">不需要</span>
              </div>
            </div>
            <div class="invoiceForm" v-if="invoice">
              <span class="invoiceWord">发票类型：</span>
              <div class="radioBox">
                <span class="invoiceWord">增值税普通发票（电子）</span>
                <input type="radio" name="invoices" id="invoice3" value="1" checked class="invoiceBox">
                <label for="invoice3"></label>
                <div style="display: inline-block;margin-left: 20px;"></div>
                <span class="invoiceWord">增值税专用发票（纸质）</span>
                <input type="radio" name="invoices" id="invoice4" value="0" class="invoiceBox">
                <label for="invoice4"></label>
              </div>
              <div class="invoiceRemark">（将通过您的邮箱发送到您的账户）</div>
              <el-form
                  ref="form"
                  :model="invoiceForm"
                  :rules="invoiceRules"
                  class="invForm">
                <div class="row_two">
                  <el-form-item prop="rise">
                    <el-input v-model="invoiceForm.rise" placeholder="请输入发票抬头" class="dataInput"></el-input>
                    <span class="tag">*</span>
                  </el-form-item>
                  <el-form-item prop="bank">
                    <el-input v-model="invoiceForm.bank" placeholder="请输入开户银行" class="dataInput inputMargin"></el-input>
                    <span class="tag">*</span>
                  </el-form-item>
                </div>
                <div class="row_two">
                  <el-form-item prop="tax">
                    <el-input v-model="invoiceForm.tax" placeholder="请输入税号" class="dataInput"></el-input>
                    <span class="tag">*</span>
                  </el-form-item>
                  <el-form-item prop="account">
                    <el-input v-model="invoiceForm.account" placeholder="请输入开户银行账号" class="dataInput inputMargin"></el-input>
                    <span class="tag">*</span>
                  </el-form-item>
                </div>
              </el-form>
            </div>
          </div>
        </div>
        <div class="payChoose">
          <div class="choose" @click="payStyle(true)">
            <img src="../../assets/images/icon_wechat.png" alt="" class="icon icon_wechat">
            <p class="word">微信支付</p>
          </div>
          <div class="choose choose_left" @click="payStyle(false)">
            <img src="../../assets/images/icon_zhifubao.png" alt="" class="icon">
            <p class="word">支付宝支付</p>
          </div>
        </div>
      </div>
    </div>
    <div id="fullscreen" v-if="fullscreen">
      <div class="process" v-if="paySuccess">
        <p class="tips">订单提交成功  请尽快付款</p>
        <div class="info">
          <div>订单号：{{ orderId }}</div>
          <div class="order">
            <p>商品信息：</p>
            <div>
              <p
                  v-for="(item, index) in cartList"
                  :key="index"
                  class="dataItem">
                {{ item.num?item.item + '  *' + item.num:"" }}
              </p>
            </div>
          </div>
          <p>订单总额：{{ productSum }}元</p>
          <img :src=codeUrl alt="" style="margin-left: 40px;">
        </div>
        <div class="scan" @click="closeFullScreen">打开{{ payType?'微信':'支付宝' }}扫一扫，立即付款</div>
      </div>
      <div class="success" v-else>
        <p class="tips">恭喜您！付款成功</p>
        <div class="info">
          <div>订单号：{{ orderId }}</div>
          <div class="order">
            <p>商品信息：</p>
            <div>
              <p
                  v-for="(item, index) in cartList"
                  :key="index"
                  class="dataItem">
                {{ item.num?item.item + '  *' + item.num:"" }}
              </p>
            </div>
          </div>
          <p>订单总额：{{ productSum }}元 商品信息已发至您的手机 请查收核对</p>
          <p>物流信息将通过短信或电话的方式发送到您的手机上，请注意查收</p>
        </div>
        <div class="back">
          <img src="../../assets/images/icon_success.png" alt="" class="icon">
          <p class="big">付款成功！</p>
          <p class="small">3s后将返回主页面......</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker';

  export default {
    name: "pay",
    components: { VDistpicker },
    data() {
      return {
        showCode: false,
        tableList: [/*
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
          }*/
        ],
        productNum: 0,
        productSum: 0,
        cartList: [],
        cartNum: [],
        showList: true,
        showAddress: false,
        showPayment: false,
        form: {
          name: '测试1号',
          phone: '19924338329',
          email: '19924338329@163.com',
          address1: {
            province: '广东省',
            city: '广州市',
            area: '番禺区',
            add: '外环西路生活东区'
          },
          address2: '',
          remark: '无'
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
        pushValue: false,
        radioValue1: false,
        radioValue2: true,
        invoiceForm: {
          rise: '12345678',
          bank: '中国银行',
          tax: '1234567890',
          account: '0987654321'
        },
        invoiceRules: {},
        invoice: false,
        fullscreen: false,
        payType: true,
        paySuccess: false,
        codeUrl: '',
        orderId: ''
      }
    },
    methods: {
      handleSub(index, row) {
        for(let i=0; i<this.cartList.length; i++) {
          if(this.cartList[i].item === row.productName){
            if(this.cartList[i].num > 0 && this.productNum > 0) {
              this.cartList[i].num--;
              this.productNum--;
              this.productSum -= Number(row.productPrice);
            }else {
              this.errorMsg();
            }
          }
        }
      },
      handleAdd(index, row) {
        for(let i=0; i<this.cartList.length; i++) {
          if(this.cartList[i].item === row.productName){
            this.cartList[i].num++;
            this.productNum++;
            this.productSum += Number(row.productPrice);
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
      toInvoice() {
        this.invoice = true;
      },
      notToInvoice() {
        this.invoice = false;
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
        this.radioValue1 = document.getElementById("invoice1").checked;
        this.radioValue2 = document.getElementById("invoice3").checked;
      },
      openFullScreen(a) {
        this.payType = a;
        this.paySuccess = true;
        this.fullscreen = true;
      },
      closeFullScreen() {
        this.paySuccess = false;
        setTimeout(() => {
          this.fullscreen = false;
          this.showPayment = false;
          this.showList = true;
        }, 3000);

      },
      //构建数组对象
      createArr(a, b) {
        const f1 = (key, arr) => arr.map(item => ({
          [key]: item
        }))
        const getMaxArr = (a, b) => (a.length >= b.length) ? a : b;
        const mergeArr = (oldArr, arr) => oldArr.map((item, index) => ({
          item,
          ...arr[index]
        }))
        let list1 = f1('item', a)
        let list2 = f1('num', b)
        this.cartList = mergeArr(getMaxArr(a, b), list2)
        console.log(list1);
        console.log(list2);
        console.log(this.cartList);
      },
      getGoods() {
        this.$axios.get('/api/goods/goods').then((res) => {
          if(res.status === 200) {
            let a = [];
            let b = [];
            let c = [];
            this.tableList = res.data;
            for(let i=0; i<this.tableList.length; i++) {
              //判断商品是否上架
              if(this.tableList[i].status) {
                c.push(this.tableList[i]);
                //拼接图片地址
                c[i].imageUrl = "http://borui.cn.utools.club/static/images/" + c[i].imageUrl;
                a.push(this.tableList[i].productName);
                b[i] = 0;
              }
            }
            this.createArr(a, b);
          }
          else {
            this.$message.error(res.msg);
          }
        }).catch((err) => {
          console.log(err);
        })
      },
      //支付信息提交
      payStyle(a) {
        let product = [];
        let type = '支付宝';
        let j = 0;
        for(let i=0; i<this.cartList.length; i++) {
          if(this.cartList[i].num !== 0) {
            product[j] = this.cartList[i];
            j++;
          }
        }
        if(a) {
          type = '微信';
        }
        this.$axios.post('/api/wxPay/pay',{
          product: product,
          userName: this.form.name,
          phone: this.form.phone,
          email: this.form.email,
          address: this.form.address2,
          remark: this.form.remark,
          flag: this.pushValue,
          invoiceFlag: this.radioValue1,
          invoiceType: this.radioValue2,
          invoiceTitle: this.invoiceForm.rise,
          account: this.invoiceForm.account,
          taxId: this.invoiceForm.tax,
          bank: this.invoiceForm.bank,
          payType: type
        }).then((res) => {
            if(res.status === 200) {
              this.getCode(res.data);
              this.orderId = res.data.orderId;
              this.openFullScreen(a);
            }
        }).catch((err) => {
          console.log(err);
        })
      },
      //获取二维码
      getCode(data) {
        this.$axios.post('/api/wxPay/realPay',data,{
          responseType: "blob"
        }).then((res) => {
          const blob = new Blob([res])
          const url = window.URL.createObjectURL(blob);
          this.codeUrl = url;
          this.checkStatus();
        }).catch((err) => {
          console.log(err);
        })
      },
      //每隔3s查询一次订单状态
      checkStatus(status) {
        let time;
        if (status) {
          //请求成功，清除定时器
          clearTimeout(time);
          this.closeFullScreen();
        } else {
          //否则的话，每隔3秒钟请求一次
          time = setTimeout(() => {
            this.inquiryPay();
          }, 3000);
        }
      },
      //查询订单状态
      inquiryPay() {
        this.$axios.get('/api/wxPay/inquiryPay',{
          params: {
            orderId: this.orderId
          }
        }).then((res) => {
          console.log(res);
          if(res.status === 200) {
            this.checkStatus(res.data);
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
      this.getGoods();
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
