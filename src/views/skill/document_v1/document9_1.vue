<template>
  <div id="document9_1">
    <div class="box">
      <p class="title">9.1 代码总体布局</p>
      <p>本飞控代码已经分组在14个大类里，如图所示。建议看的部分：（3）驱动中的Sensors接口及Receiver接口；（5）Basic中的时间实现；（7）解算系统中的解算系统接口；（11）模式中的飞行模式；（12）控制系统中的控制系统接口。</p>
      <div class="image">
        <img src="../../../assets/images/document/9.1_1.png" alt="" />
      </div>
      <p>（1）CMSIS（板级支持包）</p>
      <p>板级支持文件，最底层的库，不用看基本不用修改（可以修改startup.s里面的堆栈设置）。</p>
      <p>（2）Main（主函数文件）</p>
      <p>主函数包括：</p>
      <ul>
        <li>初始化所有需要用到的外设；</li>
        <li>开启任务调度器；</li>
        <li>错误中断拉低所有输出。</li>
      </ul>
      <p>（3）Driver（驱动）</p>
      <p>驱动包含：</p>
      <ul>
        <li>外设的初始化配置（drv_开头文件）</li>
        <li>
          <span>
            传感器接口，包括（建议细看，二次开发必备）：
          </span>
          <ul>
            <li>Sensors.c：传感器接口实现函数</li>
            <li>Sensors.h：传感器读取接口函数声明，建议细看</li>
            <li>Sensors_Backend.h：传感器注册、更新接口函数声明，建议细看</li>
          </ul>
        </li>
        <li>
          <span>
            接收机接口，包括：
          </span>
          <ul>
            <li>Receiver.c：接收机接口实现函数</li>
            <li>Receiver.h：接收机读取接口函数声明，建议细看</li>
          </ul>
        </li>
      </ul>
      <p>（4）HAL_Library</p>
      <p>32HAL库，二次开发需要用到的但现工程没有的请自己加进工程。</p>
      <p>（5）Basic（基本）</p>
      <p>Basic.c里面初始化TIM5定时器用于计时，实现了TIME结构体用于时间计算，其他部分程序所有时间相关操作都是基于TIME，建议细看。</p>
      <p>（6）Math（数学库）</p>
      <p>包含四元数、三维向量运算，以及一些简单的数学运算，重力等常量的定义。</p>
      <p>（7）MeasurementSystem（解算系统）</p>
      <p>姿态解算及位置解算。</p>
      <p>建议细看解算系统接口MeasurementSystem.h，包含解算结果的获取函数声明及使用说明。</p>
      <p>（8）Filters（滤波器）</p>
      <p>包含巴特沃斯低通滤波器、TD4非线性滤波器实现。</p>
      <p>（9）DataStructure（数据结构）</p>
      <p>包含环形缓冲区的实现。</p>
      <p>（10）Communic（通讯）</p>
      <p>包含Mavlink库、调试通讯文件Debug.c、通用端口交互文件Commulink.c（驱动程序可通过Commulink.h里的函数注册端口成为通用端口用于mavlink等标准通讯）</p>
      <p>（11）Modes（模式）</p>
      <p>建议细看飞行模式！二次开发必备</p>
      <ul>
        <li>0-9号为非飞行非校准的其他模式</li>
        <li>10-19号为校准模式</li>
        <li>30-39号为飞行模式</li>
        <li>M00为初始化模式，等待解算系统初始化完成。然后进入M01地面模式。</li>
        <li>M01下可通过遥控或上位机命令进入其他校准及飞行模式。</li>
      </ul>
      <p>（12）ControlSystem（控制系统）</p>
      <p>建议细看ControlSystem.h！二次开发必备</p>
      <p>ControlSystem.h包含控制系统的API接口。Ctrl_Attitude和Ctrl_Position分别为姿态和位置控制器。</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document9_1",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document';
</style>
