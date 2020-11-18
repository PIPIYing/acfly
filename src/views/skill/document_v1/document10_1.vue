<template>
  <div id="document10_1">
    <div class="box">
      <p class="title">10.1 传感器接口</p>
      <ul>
        <li>位于Drivers目录下</li>
        <li>传感器接口分为：传感器读取接口 和 传感器注册及更新接口。</li>
        <li>函数声明分别位于：Sensors.h和Sensors_Backend.h里</li>
        <li>函数定义位于：Sensors.c里</li>
      </ul>
      <p>（1）IMU传感器定义（Sensors.h）</p>
      <p>IMU传感器包括加速度计、陀螺仪、磁力计，每种各支持3个。定义如下：</p>
      <div class="image">
        <img src="../../../assets/images/document/10.1_1.png" alt="" />
      </div>
      <p>（2）位置传感器定义（Sensors.h）</p>
      <p>位置传感器包括气压、光流、超声波等，本飞控最多支持同时存在8个定位传感器。定义如下：</p>
      <div class="image">
        <img src="../../../assets/images/document/10.1_2.png" alt="" />
      </div>
      <p>其中：</p>
      <ul>
        <li>sensor_type定义了传感器是经纬度定位、相对定位，还是测距定位传感器。</li>
        <li>sensor_DataType定义了传感器的数据类型：例如z轴位置数据，xy速度数据等。</li>
        <li>velocity_data_frame针对速度传感器，定义了速度传感器所测速度所在的坐标系。</li>
      </ul>
      <p>（3）IMU传感器读取接口（Sensors.h）</p>
      <p>IMU传感器读取接口会返回const的IMU传感器结构体：</p>
      <div class="image">
        <img src="../../../assets/images/document/10.1_3.png" alt="" />
      </div>
      <p>（4）IMU传感器注册、更新接口（Sensors_Backend.h）</p>
      <p>在IMU传感器更新前，首先调用注册函数进行注册，设置传感器的灵敏度。</p>
      <p>注册完成后把IMU传感器编号及原始数据送入update接口即可完成更新。</p>
      <div class="image">
        <img src="../../../assets/images/document/10.1_4.png" alt="" />
      </div>
      <p>（5）位置传感器读取接口（Sensors.h）</p>
      <p>位置传感器读取接口会返回const的位置传感器结构体：</p>
      <div class="image">
        <img src="../../../assets/images/document/10.1_5.png" alt="" />
      </div>
      <p>（6）位置传感器注册、更新接口（Sensors_Backend.h）</p>
      <p>在位置传感器更新前，首先调用注册函数进行注册，设置传感器的类型等参数：</p>
      <div class="image">
        <img src="../../../assets/images/document/10.1_6.png" alt="" />
      </div>
      <p>如果位置传感器很久没有更新，MS_Main解算任务中会自动把此传感器取消注册。</p>
      <p>注册完成后把位置传感器编号及与传感器sensor_data_type对应的数据送入update接口即可完成更新：</p>
      <div class="image">
        <img src="../../../assets/images/document/10.1_7.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document10_1",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
