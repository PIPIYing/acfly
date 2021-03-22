<template>
  <div id="skill">
    <div class="top">
      <router-link to="/index/intro">
        <img src="../../assets/images/logo.png" alt="" />
      </router-link>
    </div>
    <div class="center" :style="sizeInfo">
      <div class="catalog">
        <!--v1-->
        <!--<ul>
          <li class="title">ACFLY飞控用户手册</li>
          <li class="title1">
            <router-link to="/index/skill/document0_1">0 阅读提示</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document0_1">0.1 使用建议</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document0_2">0.2 安全提示</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document0_3">0.3 关注微信公众号</router-link>
          </li>
          <li class="title1">
            <router-link to="/index/skill/document1_1">1 开发环境搭建</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document1_1">1.1 编译环境（MDK）安装</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document1_2">1.2 编译环境设置</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document1_3">1.3 固件烧录</router-link>
          </li>
          <li class="title1">
            <router-link to="/index/skill/document2">2 正版注册</router-link>
          </li>
          <li class="title1">
            <router-link to="/index/skill/document3_1">3 硬件接口定义</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document3_1">3.1 接口定义</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document3_2">3.2 外设接口</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document3_3">3.3 飞控尺寸重量</router-link>
          </li>
          <li class="title1">
            <router-link to="/index/skill/document4_1">4 飞控安装</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document4_1">4.1 电机顺序及转向</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document4_2">4.2 连接电机电调</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document4_3">4.3 连接接收机</router-link>
          </li>
          <li class="title1">
            <router-link to="/index/skill/document5_1">5 飞控初始设置及校准</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document5_1">5.1 飞控初始化</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document5_2">5.2 遥控器校准</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document5_3">5.3 飞行模式设置</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document5_4">5.4 电调电机校准</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document5_5">5.5 陀螺校准</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document5_6">5.6 加速度计校准</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document5_7">5.7 磁罗盘校准</router-link>
          </li>
          <li class="title1">
            <router-link to="/index/skill/document6">6 固件更新</router-link>
          </li>
          <li class="title1">
            <router-link to="/index/skill/document7_1">7 飞控调参</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document7_1">7.1 调参软件</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document7_2">7.2 参数分类</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document7_3">7.3 调参教程</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document7_4">7.4 姿态控制参数</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document7_5">7.5 电池参数调节</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document7_6">7.6 GPS参数设置</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document7_7">7.7 位置控制参数</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document7_8">7.8 安全模式参数</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document7_9">7.9 AUX参数</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document7_10">7.10 POfs参数</router-link>
          </li>
          <li class="title1">
            <router-link to="/index/skill/document8_1">8 功能介绍</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document8_1">8.1 航点设置</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document8_2">8.2 航线飞行</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document8_3">8.3 一键返航</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document8_4">8.4 失控返航</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document8_5">8.5 抗磁干扰</router-link>
          </li>
          <li class="title1">
            <router-link to="/index/skill/document9_1">9 代码框架</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document9_1">9.1 代码总体布局</router-link>
          </li>
          <li class="title1">
            <router-link to="/index/skill/document10">10 代码接口手册</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document10_1">10.1 传感器接口</router-link>
          </li>
          <li class="title2">
            <router-link to="/index/skill/document10_2">10.2 接收机接口</router-link>
          </li>
          <li class="title1">
            <router-link to="/index/skill/document11">11 稳压连接</router-link>
          </li>
          <li class="title1">
            <router-link to="/index/skill/document12">12 代码二次开发教程</router-link>
          </li>
          <li class="title1">
            <router-link to="/index/skill/document13">13 版本更新日志</router-link>
          </li>
        </ul>-->
        <!--v2-->
        <!--          <el-submenu index="1">
            <a href="#C9_0" slot="title">C9/C9pro飞行控制器</a>
            &lt;!&ndash;<span slot="title">C9/C9pro飞行控制器</span>&ndash;&gt;
            <el-menu-item-group>
              <el-menu-item>
                <a href="#C9_1">开发环境搭建</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#C9_2">硬件接口定义</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#C9_3">飞控安装</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#C9_4">飞控初始设置及校准</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#C9_5">固件更新</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#C9_6">飞控调参</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#C9_7">功能介绍</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#C9_8">代码框架</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#C9_9">代码接口手册</a><br/>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <a href="#A9_0" slot="title">A9飞行控制器</a>
            &lt;!&ndash;<span slot="title">C9/C9pro飞行控制器</span>&ndash;&gt;
            <el-menu-item-group>
              <el-menu-item>
                <a href="#A9_1">开发环境搭建</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#A9_2">硬件接口定义</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#A9_3">飞控安装</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#A9_4">飞控初始设置及校准</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#A9_5">固件更新</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#A9_6">飞控调参</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#A9_7">功能介绍</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#A9_8">代码框架</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#A9_9">代码接口手册</a><br/>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <a href="#mapping_0" slot="title">整机测绘</a>
            &lt;!&ndash;<span slot="title">C9/C9pro飞行控制器</span>&ndash;&gt;
            <el-menu-item-group>
              <el-menu-item>
                <a href="#mapping_1">开发环境搭建</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#mapping_2">硬件接口定义</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#mapping_3">飞控安装</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#mapping_4">飞控初始设置及校准</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#mapping_5">固件更新</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#mapping_6">飞控调参</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#mapping_7">功能介绍</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#mapping_8">代码框架</a><br/>
              </el-menu-item>
              <el-menu-item>
                <a href="#mapping_9">代码接口手册</a><br/>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>-->
        <!--<p class="title">ACFLY飞控用户手册</p>-->
        <el-menu
            background-color="#F5F5F5"
            text-color="#000"
            active-text-color="#000"
            unique-opened
            router
            @open="handleOpen"
            @close="handleClose">
          <!--<el-submenu index="/index/skill/document_C9#">
            <a href="#C9_0" slot="title">C9/C9pro飞行控制器</a>
            &lt;!&ndash;<span slot="title">C9/C9pro飞行控制器</span>&ndash;&gt;
            <el-menu-item-group>
              <el-submenu index="/index/skill/document_C9#1">
                <a href="#C9_1" slot="title">1 飞控接线</a>
                <el-menu-item-group>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_1_1">1.1 第1路供电</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_1_2">1.2 第2路供电</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_1_3">1.3 电流传感器</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_1_4">1.4 遥控接收机</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_1_2">1.2 第2路供电</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_1_2">1.2 第2路供电</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_1_5">1.5 通道1-11</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_1_6">1.6 通道12-13</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_1_7">1.7 GPS&磁罗盘</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_1_8">1.8 RTK&PPK(C9 PRO已内置)</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_1_9">1.9 数传串口</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_1_10">1.10 USB接口</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_1_11">1.11 光流串口</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_1_12">1.12 测距串口</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_1_13">1.13 灯&蜂鸣器&编程接口</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_1_14">1.14 CAN总线接口</a>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="/index/skill/document_C9#2">
                <a href="#C9_2" slot="title">2 飞控安装</a>
                <el-menu-item-group>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_2_1">2.1 飞控固定</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_2_2">2.2 连接电池(2s-7s适用)</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_2_3">2.3 连接电源模块（3S-14S电池适用）</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_2_4">2.4 连接电流传感器</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_2_5">2.5 连接USB</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_2_6">2.6 上电初始化</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_2_7">2.7 选择机型</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_2_8">2.8 电机转向及顺序</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_2_9">2.9 连接遥控接收机</a>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="/index/skill/document_C9#3">
                <a href="#C9_3" slot="title">3 遥控器校准</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_C9#4">
                <a href="#C9_4" slot="title">4 飞行模式设置</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_C9#5">
                <a href="#C9_5" slot="title">5 电机电调校准</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_C9#6">
                <a href="#C9_6" slot="title">6 加速度计校准</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_C9#7">
                <a href="#C9_7" slot="title">7 磁罗盘校准</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_C9#8">
                <a href="#C9_8" slot="title">8 陀螺校准</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_C9#9">
                <a href="#C9_9" slot="title">9 标准电压和电量电压设置(必须设置)</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_C9#10">
                <a href="#C9_10" slot="title">10 解锁上锁</a>
              </el-menu-item>
              <el-submenu index="/index/skill/document_C9#11">
                <a href="#C9_11" slot="title">11 固件更新</a>
                <el-menu-item-group>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_11_1">11.1 SD卡更新固件(推荐)</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_11_2">11.2  USB更新飞控固件</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_11_3">11.3  BootLoader固件更新</a>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="/index/skill/document_C9#12">
                <a href="#C9_12" slot="title">12 高级调参</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_C9#13">
                <a href="#C9_13" slot="title">13 常用参数表</a>
              </el-menu-item>
              <el-submenu index="/index/skill/document_C9#14">
                <a href="#C9_14" slot="title">14 自动返航策略</a>
                <el-menu-item-group>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_14_1">14.1 一键自动返航</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_14_2">14.2 低电量自动返航或降落</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_C9">
                    <a href="#C9_14_3">14.3 失控自动返航</a>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="/index/skill/document_C9#15">
                <a href="#C9_15" slot="title">15 航线任务设置</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_C9#16">
                <a href="#C9_16" slot="title">16 断电/断点续飞</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_C9#17">
                <a href="#C9_17" slot="title">17 相机触发拍照配置</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_C9#18">
                <a href="#C9_18" slot="title">18 POS记录及PPK功能</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_C9#19">
                <a href="#C9_19" slot="title">19 飞控及定位传感器安装偏移</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_C9#20">
                <a href="#C9_20" slot="title">20 串口功能配置</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_C9#21">
                <a href="#C9_21" slot="title">21 AUX参数功能</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_C9#22">
                <a href="#C9_22" slot="title">22 低电量报警功能</a>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="/index/skill/document_A9#">
            <a href="#A9_0" slot="title">A9飞行控制器</a>
            <el-menu-item-group>
              <el-menu-item index="/index/skill/document_A9#1">
                <a href="#A9_1">1 飞控接口定义</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_A9#2">
                <a href="#A9_2">2 外设接口</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_A9#3">
                <a href="#A9_3">3 飞控尺寸重量</a>
              </el-menu-item>
              <el-submenu index="/index/skill/document_A9#4">
                <a href="#A9_4" slot="title">4 飞控安装</a>
                <el-menu-item-group>
                  <el-menu-item index="/index/skill/document_A9">
                    <a href="#A9_4_1">4.1 飞控固定</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_A9">
                    <a href="#A9_4_2">4.2 连接电池</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_A9">
                    <a href="#A9_4_3">4.3 上电初始化</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_A9">
                    <a href="#A9_4_4">4.4 选择机型</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_A9">
                    <a href="#A9_4_5">4.5 电机转向及顺序</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_A9">
                    <a href="#A9_4_6">4.6 连接电机电调</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_A9">
                    <a href="#A9_4_7">4.7 连接遥控接收机</a>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="/index/skill/document_A9#5">
                <a href="#A9_5">5 遥控器校准</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_A9#6">
                <a href="#A9_6">6 飞行模式设置</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_A9#7">
                <a href="#A9_7">7 电机电调校准</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_A9#8">
                <a href="#A9_8">8 加速度计校准</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_A9#9">
                <a href="#A9_9">9 磁罗盘校准</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_A9#10">
                <a href="#A9_10">10 陀螺校准</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_A9#11">
                <a href="#A9_11">11 电压检测参数校准</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_A9#12">
                <a href="#A9_12">12 解锁上锁</a>
              </el-menu-item>
              <el-submenu index="/index/skill/document_A9#13">
                <a href="#A9_13" slot="title">13 开发环境搭建</a>
                <el-menu-item-group>
                  <el-menu-item index="/index/skill/document_A9">
                    <a href="#A9_13_1">13.1 编译环境（MDK）安装</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_A9">
                    <a href="#A9_13_2">13.2 编译环境设置</a>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="/index/skill/document_A9#14">
                <a href="#A9_14" slot="title">14 固件更新</a>
                <el-menu-item-group>
                  <el-menu-item index="/index/skill/document_A9">
                    <a href="#A9_14_1">14.1 SD卡更新固件</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_A9">
                    <a href="#A9_14_2">14.2  USB更新固件</a>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="/index/skill/document_A9#15">
                <a href="#A9_15">15 高级调参</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_A9#16">
                <a href="#A9_16">16 常用参数表</a>
              </el-menu-item>
              <el-submenu index="/index/skill/document_A9#17">
                <a href="#A9_17" slot="title">17 自动返航策略</a>
                <el-menu-item-group>
                  <el-menu-item index="/index/skill/document_A9">
                    <a href="#A9_17_1">17.1 一键自动返航</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_A9">
                    <a href="#A9_17_2">17.2 低电量自动返航或降落</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_A9">
                    <a href="#A9_17_3">17.3 失控自动返航</a>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="/index/skill/document_A9#18">
                <a href="#A9_18">18 航线任务设置</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_A9#19">
                <a href="#A9_19">19 相机触发拍照配置</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_A9#20">
                <a href="#A9_20">20 飞控及定位传感器安装偏移</a>
              </el-menu-item>
              <el-submenu index="/index/skill/document_A9#21">
                <a href="#A9_21" slot="title">21 代码框架</a>
                <el-menu-item-group>
                  <el-menu-item index="/index/skill/document_A9">
                    <a href="#A9_21_1">21.1 代码总体布局</a>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="/index/skill/document_A9#22">
                <a href="#A9_22" slot="title">22 代码接口</a>
                <el-menu-item-group>
                  <el-menu-item index="/index/skill/document_A9">
                    <a href="#A9_22_1">22.1 传感器接口</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_A9">
                    <a href="#A9_22_2">22.2 接收机接口</a>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="/index/skill/document_A9#23">
                <a href="#A9_23">23 二次开发视频教程链接</a>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>-->
          <!--<el-submenu index="/index/skill/document_mapping#">
            <a href="#mapping_0" slot="title">整机测绘</a>
            &lt;!&ndash;<span slot="title">C9/C9pro飞行控制器</span>&ndash;&gt;
            <el-menu-item-group>
              <el-submenu index="/index/skill/document_mapping#1">
                <a href="#mapping_1" slot="title">开发环境搭建</a>
                <el-menu-item-group>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_1_1">&lt;!&ndash;1.1 &ndash;&gt;编译环境（MDK）安装</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_1_2">&lt;!&ndash;1.2 &ndash;&gt;编译环境设置</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_1_3">&lt;!&ndash;1.3 &ndash;&gt;固件烧录</a>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="/index/skill/document_mapping#2">
                <a href="#mapping_2" slot="title">硬件接口定义</a>
                <el-menu-item-group>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_2_1">&lt;!&ndash;2.1 &ndash;&gt;接口定义</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_2_2">&lt;!&ndash;2.2 &ndash;&gt;外设接口</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_2_3">&lt;!&ndash;2.3 &ndash;&gt;飞控尺寸重量</a>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="/index/skill/document_mapping#3">
                <a href="#mapping_3" slot="title">飞控安装</a>
                <el-menu-item-group>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_3_1">&lt;!&ndash;3.1 &ndash;&gt;电机顺序及转向</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_3_2">&lt;!&ndash;3.2 &ndash;&gt;连接电机电调</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_3_3">&lt;!&ndash;3.3 &ndash;&gt;连接接收机</a>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="/index/skill/document_mapping#4">
                <a href="#mapping_4" slot="title">飞控初始设置及校准</a>
                <el-menu-item-group>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_4_1">&lt;!&ndash;4.1 &ndash;&gt;飞控初始化</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_4_2">&lt;!&ndash;4.2 &ndash;&gt;遥控器校准</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_4_3">&lt;!&ndash;4.3 &ndash;&gt;飞行模式设置</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_4_4">&lt;!&ndash;4.4 &ndash;&gt;电调电机校准</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_4_5">&lt;!&ndash;4.5 &ndash;&gt;陀螺校准</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_4_6">&lt;!&ndash;4.6 &ndash;&gt;加速度计校准</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_4_7">&lt;!&ndash;4.7 &ndash;&gt;磁罗盘校准</a>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="/index/skill/document_mapping">
                <a href="#mapping_5">固件更新</a>
              </el-menu-item>
              <el-submenu index="/index/skill/document_mapping#6">
                <a href="#mapping_6" slot="title">飞控调参</a>
                <el-menu-item-group>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_6_1">&lt;!&ndash;6.1 &ndash;&gt;调参软件</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_6_2">&lt;!&ndash;6.2 &ndash;&gt;参数分类</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_6_3">&lt;!&ndash;6.3 &ndash;&gt;调参教程</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_6_4">&lt;!&ndash;6.4 &ndash;&gt;姿态控制参数</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_6_5">&lt;!&ndash;6.5 &ndash;&gt;电池参数调节</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_6_6">&lt;!&ndash;6.6 &ndash;&gt;GPS参数设置</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_6_7">&lt;!&ndash;6.7 &ndash;&gt;位置控制参数</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_6_8">&lt;!&ndash;6.8 &ndash;&gt;安全模式参数</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_6_9">&lt;!&ndash;6.9 &ndash;&gt;AUX参数</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_6_10">&lt;!&ndash;6.10 &ndash;&gt;POfs参数</a>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="/index/skill/document_mapping#7">
                <a href="#mapping_7" slot="title">功能介绍</a>
                <el-menu-item-group>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_7_1">&lt;!&ndash;7.1 &ndash;&gt;航点设置</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_7_2">&lt;!&ndash;7.2 &ndash;&gt;航线飞行</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_7_3">&lt;!&ndash;7.3 &ndash;&gt;一键返航</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_7_4">&lt;!&ndash;7.4 &ndash;&gt;失控返航</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_7_5">&lt;!&ndash;7.5 &ndash;&gt;抗磁干扰</a>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="/index/skill/document_mapping">
                <a href="#mapping_8">代码框架</a>
              </el-menu-item>
              <el-submenu index="/index/skill/document_mapping#9">
                <a href="#mapping_9" slot="title">代码接口手册</a>
                <el-menu-item-group>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_9_1">&lt;!&ndash;9.1 &ndash;&gt;传感器接口</a>
                  </el-menu-item>
                  <el-menu-item index="/index/skill/document_mapping">
                    <a href="#mapping_9_2">&lt;!&ndash;9.2 &ndash;&gt;接收机接口</a>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu-item-group>
          </el-submenu>-->
          <el-submenu index="/index/skill/document_update#">
            <a href="#update_C9" slot="title">固件下载</a>
            <el-menu-item-group>
              <el-menu-item index="/index/skill/document_update#C9">
                <a href="#update_C9">C9</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_update#A9">
                <a href="#update_A9">A9</a>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/index/skill/document_video#">
            <a href="#video_C9" slot="title">视频教程</a>
            <!--<el-menu-item-group>
              <el-menu-item index="/index/skill/document_video">
                <a href="#video_C9">C9</a>
              </el-menu-item>
              <el-menu-item index="/index/skill/document_video">
                <a href="#video_A9">A9</a>
              </el-menu-item>
            </el-menu-item-group>-->
          </el-menu-item>
          <el-menu-item index="/index/skill/document_download#">
            <a href="#download" slot="title">文档下载</a>
          </el-menu-item>
        </el-menu>
      </div>
      <router-view class="content"></router-view>
    </div>
    <div class="bottom">
      <div class="bottomWord">广州博睿创新科技有限公司</div>
      <div class="copy">
        <div class="logoImg">
          <img src="../../assets/images/logo.png" alt="博睿创新科技" class="logo" />
        </div>
        <p>IC备案：粤ICP备2020124827号 广州博睿创新科技有限公司</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Skill",
    data() {
      return {
        sizeInfo: {
          height: ''
        },
        url: ['title1','title2']
      }
    },
    methods: {
      //center盒子的高
      getSizeInfo() {
        /*this.sizeInfo.width = window.outerWidth+'px';*/
        if(window.outerHeight > window.innerHeight) {
          this.sizeInfo.height = window.outerHeight - 110 + 'px';  //top和bottom的高
        }else {
          this.sizeInfo.height = window.innerHeight - 110 + 'px';
        }
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
        this.$router.push(key);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
        /*this.$router.push(key);*/
      }
    },
    created(){
      window.addEventListener('resize', this.getSizeInfo);
      this.getSizeInfo();
    },
    destroyed(){
      window.removeEventListener('resize', this.getSizeInfo);
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/style/skill";
</style>
