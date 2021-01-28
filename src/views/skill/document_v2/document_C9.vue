<template>
  <div id="document_C9">
    <div id="C9_0">
      <div class="box">
        <p class="title">C9/C9pro官方说明文档</p>
      </div>
    </div>
    <div id="C9_1">
      <div class="box">
        <p class="title">1 飞控接线</p>
        <div class="image">
          <img src="../../../assets/images/document_C9/001.jpg" alt=""/>
        </div>
      </div>
      <div class="box" id="C9_1_1">
        <p class="title">1.1 第1路供电</p>
        <table class="table1">
          <tr>
            <th>标识</th>
            <th>定义</th>
            <th>说明</th>
          </tr>
          <tr>
            <td>B1</td>
            <td>电压检测1</td>
            <td>范围：0V-60V</td>
          </tr>
          <tr>
            <td>V1</td>
            <td>电源输入1</td>
            <td>范围：4.5V-30V</td>
          </tr>
          <tr>
            <td>GD</td>
            <td>地</td>
            <td></td>
          </tr>
        </table>
      </div>
      <div class="box" id="C9_1_2">
        <p class="title">1.2 第2路供电</p>
        <table class="table1">
          <tr>
            <th>标识</th>
            <th>定义</th>
            <th>说明</th>
          </tr>
          <tr>
            <td>B2</td>
            <td>电压检测2</td>
            <td>范围：0V-60V</td>
          </tr>
          <tr>
            <td>V2</td>
            <td>电源输入2</td>
            <td>范围：4.5V-30V</td>
          </tr>
          <tr>
            <td>GD</td>
            <td>地</td>
            <td></td>
          </tr>
        </table>
      </div>
      <div class="box" id="C9_1_3">
        <p class="title">1.3 电流传感器</p>
        <table class="table1">
          <tr>
            <th>标识</th>
            <th>定义</th>
            <th>说明</th>
          </tr>
          <tr>
            <td>CR</td>
            <td>电流监测</td>
            <td>模拟输入：0V-5V</td>
          </tr>
          <tr>
            <td>5V</td>
            <td>5V电源</td>
            <td>输出</td>
          </tr>
          <tr>
            <td>GD</td>
            <td>地</td>
            <td></td>
          </tr>
        </table>
      </div>
      <div class="box" id="C9_1_4">
        <p class="title">1.4 遥控接收机</p>
        <table class="table1">
          <tr>
            <th>标识</th>
            <th>定义</th>
            <th>说明</th>
          </tr>
          <tr>
            <td>RC</td>
            <td>接收机信号</td>
            <td>SBUS/PPM</td>
          </tr>
          <tr>
            <td>5V</td>
            <td>5V电源</td>
            <td>输出</td>
          </tr>
          <tr>
            <td>GD</td>
            <td>地</td>
            <td></td>
          </tr>
        </table>
      </div>
      <div class="box" id="C9_1_5">
        <p class="title">1.5 通道1-11</p>
        <table class="table1">
          <tr>
            <th>标识</th>
            <th>定义</th>
            <th>说明</th>
          </tr>
          <tr>
            <td>C(x)</td>
            <td>通道x</td>
            <td>PWM输出</td>
          </tr>
          <tr>
            <td>V2</td>
            <td>舵机电源</td>
            <td>输出</td>
          </tr>
          <tr>
            <td>GD</td>
            <td>地</td>
            <td></td>
          </tr>
        </table>
      </div>
      <div class="box" id="C9_1_6">
        <p class="title">1.6 通道12-13</p>
        <table class="table1">
          <tr>
            <th>标识</th>
            <th>定义</th>
            <th>说明</th>
          </tr>
          <tr>
            <td>12</td>
            <td>PWM或电平输出信号</td>
            <td>接测绘相机快门信号，可直接驱动五拼相机</td>
          </tr>
          <tr>
            <td>13</td>
            <td>电平输入信号</td>
            <td>接测绘相机热靴</td>
          </tr>
          <tr>
            <td>GD</td>
            <td>地</td>
            <td></td>
          </tr>
        </table>
      </div>
      <div class="box" id="C9_1_7">
        <p class="title">1.7 GPS&磁罗盘</p>
        <table class="table1">
          <tr>
            <th>标识</th>
            <th>定义</th>
            <th>说明</th>
          </tr>
          <tr>
            <td>5V</td>
            <td>5V电源</td>
            <td>输出</td>
          </tr>
          <tr>
            <td>8T</td>
            <td>GPS串口</td>
            <td>发送</td>
          </tr>
          <tr>
            <td>8R</td>
            <td>GPS串口</td>
            <td>接收</td>
          </tr>
          <tr>
            <td>GD</td>
            <td>地</td>
            <td></td>
          </tr>
          <tr>
            <td>SCL</td>
            <td>IC2-SCL</td>
            <td>磁罗盘等</td>
          </tr>
          <tr>
            <td>SDA</td>
            <td>IC2-SDA</td>
            <td>磁罗盘等</td>
          </tr>
        </table>
      </div>
      <div class="box" id="C9_1_8">
        <p class="title">1.8 RTK&PPK(C9 PRO已内置)</p>
        <table class="table1">
          <tr>
            <th>标识</th>
            <th>定义</th>
            <th>说明</th>
          </tr>
          <tr>
            <td>5V</td>
            <td>5V电源</td>
            <td>输出</td>
          </tr>
          <tr>
            <td>3T</td>
            <td>GPS串口</td>
            <td>发送</td>
          </tr>
          <tr>
            <td>3R</td>
            <td>GPS串口</td>
            <td>接收</td>
          </tr>
          <tr>
            <td>GND</td>
            <td>地</td>
            <td></td>
          </tr>
          <tr>
            <td>TRG</td>
            <td>触发</td>
            <td>事件</td>
          </tr>
          <tr>
            <td>PPS</td>
            <td>秒脉冲</td>
            <td>授时</td>
          </tr>
        </table>
      </div>
      <div class="box" id="C9_1_9">
        <p class="title">1.9 数传串口</p>
        <table class="table1">
          <tr>
            <th>标识</th>
            <th>定义</th>
            <th>说明</th>
          </tr>
          <tr>
            <td>5V</td>
            <td>5V电源</td>
            <td>输出</td>
          </tr>
          <tr>
            <td>7T</td>
            <td>数传串口</td>
            <td>发送</td>
          </tr>
          <tr>
            <td>7R</td>
            <td>数传串口</td>
            <td>接收</td>
          </tr>
          <tr>
            <td>GND</td>
            <td>地</td>
            <td></td>
          </tr>
        </table>
      </div>
      <div class="box" id="C9_1_10">
        <p class="title">1.10 USB接口</p>
        <table class="table1">
          <tr>
            <th>标识</th>
            <th>定义</th>
            <th>说明</th>
          </tr>
          <tr>
            <td>V</td>
            <td>USB电源</td>
            <td>红线</td>
          </tr>
          <tr>
            <td>N</td>
            <td>USB D-</td>
            <td>白线</td>
          </tr>
          <tr>
            <td>P</td>
            <td>USB D+</td>
            <td>绿线</td>
          </tr>
          <tr>
            <td>G</td>
            <td>地</td>
            <td>黑线</td>
          </tr>
        </table>
      </div>
      <div class="box" id="C9_1_11">
        <p class="title">1.11 光流串口</p>
        <table class="table1">
          <tr>
            <th>标识</th>
            <th>定义</th>
            <th>说明</th>
          </tr>
          <tr>
            <td>5V</td>
            <td>5V电源</td>
            <td>红线</td>
          </tr>
          <tr>
            <td>5T</td>
            <td>光流串口</td>
            <td>发送</td>
          </tr>
          <tr>
            <td>5R</td>
            <td>光流串口</td>
            <td>接收</td>
          </tr>
          <tr>
            <td>GND</td>
            <td>地</td>
            <td></td>
          </tr>
        </table>
      </div>
      <div class="box" id="C9_1_12">
        <p class="title">1.6 通道12-13</p>
        <table class="table1">
          <tr>
            <th>标识</th>
            <th>定义</th>
            <th>说明</th>
          </tr>
          <tr>
            <td>5V</td>
            <td>5V电源</td>
            <td>红线</td>
          </tr>
          <tr>
            <td>1T</td>
            <td>测距串口</td>
            <td>发送</td>
          </tr>
          <tr>
            <td>1R</td>
            <td>测距串口</td>
            <td>接收</td>
          </tr>
          <tr>
            <td>GND</td>
            <td>地</td>
            <td></td>
          </tr>
        </table>
      </div>
      <div class="box" id="C9_1_13">
        <p class="title">1.13 灯&蜂鸣器&编程接口</p>
        <table class="table1">
          <tr>
            <th>标识</th>
            <th>定义</th>
            <th>说明</th>
          </tr>
          <tr>
            <td>V</td>
            <td>5V电源</td>
            <td>输出</td>
          </tr>
          <tr>
            <td>I</td>
            <td>SWDIO</td>
            <td>编程</td>
          </tr>
          <tr>
            <td>C</td>
            <td>SWCLK</td>
            <td>编程</td>
          </tr>
          <tr>
            <td>G</td>
            <td>地</td>
            <td></td>
          </tr>
          <tr>
            <td>Z</td>
            <td>蜂鸣器</td>
            <td></td>
          </tr>
          <tr>
            <td>B</td>
            <td>蓝灯</td>
            <td></td>
          </tr>
          <tr>
            <td>G</td>
            <td>绿灯</td>
            <td></td>
          </tr>
          <tr>
            <td>R</td>
            <td>红灯</td>
            <td></td>
          </tr>
        </table>
      </div>
      <div class="box" id="C9_1_14">
        <p class="title">1.14 CAN总线接口</p>
        <table class="table1">
          <tr>
            <th>标识</th>
            <th>定义</th>
            <th>说明</th>
          </tr>
          <tr>
            <td>V</td>
            <td>5V电源</td>
            <td>输出</td>
          </tr>
          <tr>
            <td>H</td>
            <td>CAN_H</td>
            <td></td>
          </tr>
          <tr>
            <td>L</td>
            <td>CAN_L</td>
            <td></td>
          </tr>
          <tr>
            <td>G</td>
            <td>地</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
    <div id="C9_2">
      <div class="box">
        <p class="title">2 飞控安装</p>
      </div>
      <div class="box" id="C9_2_1">
        <p class="title">2.1 飞控固定</p>
        <ul>
          <li>飞控支持免减震安装，需紧固在飞行器上，可使用3M胶固定飞控四个角即可，切勿只粘住飞控中间，飞控松动会影响飞行稳定性。</li>
        </ul>
      </div>
      <div class="box" id="C9_2_2">
        <p class="title">2.2 连接电池(2s-7s适用)</p>
        <ul>
          <li>使用1组电池时，将电池的正负极连接至飞控的V1、GD，另将B1和V1并联实现电压监测。</li>
          <li>使用2组电池时，将电池1的正负极连接至飞控的V1、GD，将电池2的正负极连接至飞控的V2和GD，另将B1和V1、B2和V2并联实现电压监测。</li>
        </ul>
      </div>
      <div class="box" id="C9_2_3">
        <p class="title">2.3 连接电源模块（3S-14S电池适用）</p>
        <ul>
          <li>使用1组电池时，将电池的正负极连接配套的电源模块正负极，将电源模块的输出线连接至飞控的B1、V1和GD(3线)。</li>
          <li>使用2组电池时，将2块电池的正负极分别连接配套的2个电源模块正负极，将电源模块1的输出线连接至飞控的B1、V1、GD(3线)，将电源模块2的输出线连接至飞控的B2、V2、GD(3线)。</li>
        </ul>
      </div>
      <div class="box" id="C9_2_4">
        <p class="title">2.4 连接电流传感器</p>
        <ul>
          <li>将电流传感器的两端串联在需要测量电流的正极供电线中，其中电池端焊接电池正极，负载端焊接后级设备的正极。</li>
          <li>将电流传感器的CUR、5V、GND（3线）,连接至飞控的CR、5V、GD一路即可。</li>
        </ul>
      </div>
      <div class="box" id="C9_2_5">
        <p class="title">2.5 连接USB</p>
        <ul>
          <li>用USB-TYPEC线连接配套的USB转接板，转接板另一端是MX1.25-4P插头连接至飞控USB标识口。</li>
          <li>飞控通过USB和电脑连接后，电脑会出现一个虚拟串口和一个U盘，串口用于连接地面站，U盘是飞控内部的SD卡，可用于导出POS记录和飞行日志(log)和更新固件(参考11.1节)。</li>
        </ul>
      </div>
      <div class="box" id="C9_2_6">
        <p class="title">2.6 上电初始化</p>
        <ul>
          <li>飞控上电后会进行初始化，尽量保持静止状态，初始化过程会进行陀螺校准，此过程需要十几秒，等待初始化时状态灯蓝灯快闪烁，待状态灯绿色慢闪变化后代表自检完成。</li>
        </ul>
      </div>
      <div class="box" id="C9_2_7">
        <p class="title">2.7 选择机型</p>
        <ul>
          <li>将飞控用USB或数传连接到电脑，打开ACFly调参地面站，在COM选择对应飞控端口号，点击连接。点击配置-参数调整-稳定飞行，下拉选择支持的机型。图片标明了电机序号(对应飞控 M1-M8 引脚)和电机转向和机头方向。</li>
        </ul>
        <div class="image">
          <img src="../../../assets/images/document_C9/002.png" alt=""/>
        </div>
      </div>
      <div class="box" id="C9_2_8">
        <p class="title">2.8 电机转向及顺序</p>
        <ul>
          <li>以四旋翼为例，红色箭头为机头方向，飞控需按照下右图中的方向放置。飞控左上角电机为1号电机，六旋翼八旋翼类似，按逆时针顺序分别为1、2、3、4。1和3号电机逆时针旋转，2和4号电机顺时针旋转。将飞控按上述方向紧固在飞行器上（需固定飞控四个角）。然后按上述要求安装电机及电调。</li>
        </ul>
        <div class="image_two">
          <img src="../../../assets/images/document_C9/003.png" alt="" class="small_one"/>
          <img src="../../../assets/images/document_C9/004.png" alt=""/>
        </div>
      </div>
      <div class="box" id="C9_2_9">
        <p class="title">2.9连接遥控接收机</p>
        <ul>
          <li>飞控兼容SBUS和PPM信号的接收机，将接收机的SBUS/PPM信号线（3 线）连接至飞控的RC标识口。</li>
        </ul>
      </div>
    </div>
    <div id="C9_3">
      <div class="box">
        <p class="title">3 遥控器校准</p>
        <div class="image">
          <img src="../../../assets/images/document_C9/005.png" alt=""/>
        </div>
        <ul>
          <li>此飞控要求遥控器至少具有6个通道，包含4个摇杆和2个按钮，最多支持校准8个通道。校准的第一个按钮用来切换飞行模式。校准的第二、第三、第四个按钮用来设置执行任务、返航和安全按钮。</li>
          <li>首先等待5.1中的飞控自检完成，飞控状态灯切换至绿灯慢闪。</li>
          <li>将飞控用USB或者数传连接到电脑，打开ACFly地面站，点击连接。</li>
          <li>打开遥控器，连接接收机，部分遥控器需要提前设置好遥控器的PPM/SBUS模式，根据需要设置2-3个按钮，如果飞控识别到接收机，则地面站会显示遥控各通道的原始数值，识别不到则会显示100%。</li>
          <li>将四个摇杆通道回中，所要设置的2-3个按钮拨到通道值最大的位置。在ACFly地面站中选择美国手、中国手或者日本手后，点击“校准遥控器”按钮。飞控进入遥控器校准模式。地面站有动画和文字提示，按照提示做即可。</li>
          <li>等待蓝灯闪烁两次（蜂鸣器响两声），表示已记录所有摇杆初始位置</li>
          <li>按如下顺序操作遥控器：(每次摇杆操作后摇杆需回中)</li>
          <li style="list-style: none;">
            <div>
              <p>油门最下（哔）—>偏航最左（哔）—>俯仰最下（哔）—>横滚最左（哔）—></p>
              <p>油门最上（哔）—>偏航最右（哔）—>俯仰最上（哔）—>横滚最右（哔）—></p>
              <p>按钮1拨向1挡位置（哔）—>按钮1拨回原位—>按钮2拨向1挡位置（哔）</p>
              <p>—>按钮2拨回原位—>按钮3拨向1档位置（哔）（或把油门拉低完成较准）</p>
              <p>—>按钮3拨回原位—>按钮4拨向1档位置（哔）（或把油门拉低完成较准）</p>
              <p>—>按钮4拨回原位—>完成（绿灯闪哔哔）</p>
            </div>
          </li>
          <li>错误情况：</li>
          <li style="list-style: none;">
            <div>
              <p>红灯闪哔—长叫并退出模式：遥控器或接收机断开。</p>
              <p>完成校准时红灯闪</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div id="C9_4">
      <div class="box">
        <p class="title">4 飞行模式设置</p>
        <div class="image">
          <img src="../../../assets/images/document_C9/006.png" alt=""/>
        </div>
        <ul>
          <li>遥控校准的第一个按钮用来切换飞行模式，定高、定点、任务和返航模式。校准的第二、第三、第四个按钮用来设置执行任务、返航和安全按钮(电机急停按钮)。</li>
          <li>执行任务按钮是第二种进入任务模式的方式，在定位成功后按下执行任务按钮即可执行任务模式(需设置起飞点)。返航按钮则是执行一键返航功能。安全按钮为电机急停按钮。</li>
          <li>第二、三、四个按钮有按下和变化两种设置(默认按下即可)，选择按下则对应通道值最大时为按下，选择变化则无论按钮在哪档，只要有变化(三档按钮变化一档即可)则执行对应功能。</li>
          <li>若无需二次开发，解锁前模式都设置为32即可。</li>
        </ul>
      </div>
    </div>
    <div id="C9_5">
      <div class="box">
        <p class="title">5 电机电调校准</p>
        <div class="image">
          <img src="../../../assets/images/document_C9/007.png" alt=""/>
        </div>
        <p>为了安全起见，请先卸桨！！！</p>
        <ul>
          <li>打开ACFly调参地面站，将飞控通过USB或者数传与地面站连接，连接成功后，更改参数Init_CalibESC_T值为3，在配置-参数调整-电调参数栏目中，点击校准电调，飞控断电，然后用电池给飞控和电机同时上电，此时电调会发出滴-滴滴滴的声音，表示校准完成。</li>
          <li>校准完成后将参数Init_CalibESC_T值改回5(开DEO)或者9(关DEO)，自锁桨请设置为9。然后再重新上电一次完成DEO设置。</li>
          <li>天行者、铂金等非多旋翼电调必须进行起转油门设置，一般天行者起转油门设为15。其他多旋翼电调不用设置起转油门。修改完需点击写入电调参数。</li>
          <li>非线性系数和电调刹车设置有关，普通电调(未开刹车)非线性系数一般为0.45，开刹车一般为0.1，DJI电调一般为0.75。修改完需点击写入电调参数。</li>
        </ul>
      </div>

      <div class="box" id="C9_5_1">
        <p class="title">6.1 USB更新固件</p>
        <ul>
          <li>到售后群下载名为DFU驱动的压缩包，解压后安装对应的版本。Win10系统安装win8.1版本。</li>
          <li>到售后群下载ACFLY地面站，点击配置 – 固件更新 – 浏览 – 双击选择固件(.hex)</li>
          <li>插上飞控USB，等待烧录完成。</li>
          <li style="list-style-type: none;color: red;">注意：需要飞控先断电，地面站选择固件后10秒内将飞控通过USB连接至电脑。</li>
          <li>部分使用32位 windows7 系统的用户，若经过上述步骤地面站仍然无法连接飞控，则在售后群群文件中下载MissionPlanner_PX4地面站_驱动进行安装，安装完成打开该软件再关闭，即可完成ACFLY地面站驱动的安装。</li>
          <div class="image">
            <img src="../../../assets/images/document/6_1.png" alt="" />
          </div>
        </ul>
      </div>
      <div class="box" id="C9_5_2">
        <p class="title">6.2 SD卡更新固件</p>
        <p class="indent_2">飞控用USB连接电脑，电脑会弹出一个U盘(SD卡)，将固件文件(.hex)放进U盘里的ACFLy文件夹中，然后重启飞控，等待固件升级完成，升级过程中飞控蓝灯快闪，此过程需半分钟左右。</p>
        <div class="image">
          <img src="../../../assets/images/document/6_2.png" alt="" />
        </div>
      </div>
    </div>
    <div id="C9_6">
      <div class="box">
        <p class="title">6 加速度计校准</p>
        <ul>
          <li>出厂已进行过加速度计校准，一般情况无需用户校准。</li>
          <li>遥控器油门最小，偏航最左，俯仰最下，横滚最左，两秒左右将进入加速度校准模式。</li>
          <li>将无人机分别摆放六个面（不用按顺序，差不多水平即可）静止。每个面需静止放置 5 秒左右，静止放置时飞控指示灯显示蓝色，会由暗变亮指示当前进度，表示正在采集数据校准，完成一个面校准后指示灯会闪烁然后变红并且嘀一声，然后更换下一个面校准。全部六面校准完毕后会退出校准模式，绿色慢闪。灯红色表示当前面已经校准或者飞控在移动无法校准。</li>
          <li>需重启飞控校准才会生效。</li>
        </ul>
      </div>
    </div>
    <div id="C9_7">
      <div class="box">
        <p class="title">7 磁罗盘校准</p>
        <ul>
          <li>首先等待飞控初始化完成，飞控状态灯切换至绿色慢闪。遥控器油门最小，偏航最左，俯仰最上，横滚最左。两秒左右将进入磁罗盘校准模式。</li>
          <li>旋转无人机尽量多的三维角度，旋转时飞控指示灯显示蓝色，会由暗变亮指示当前进度。指示灯红色表示飞控没有在旋转无法校准，继续旋转无人机即可。</li>
          <li>完成后飞控指示灯闪烁并嘀一声表示校准完成，绿色慢闪。</li>
          <li>需重启飞控校准才会生效。</li>
        </ul>
      </div>
    </div>
    <div id="C9_8">
      <div class="box">
        <p class="title">8 陀螺校准</p>
        <ul>
          <li>首先等待5.1中的飞控初始化完成，飞控状态灯切换至绿色慢闪。</li>
          <li>遥控器油门最小，偏航最右，俯仰居中，横滚最右，两秒左右，滴一声进入陀螺校准模式，蓝绿快闪。</li>
          <li>飞控需放置静止不动等待5秒左右，滴滴后校准完成将退出校准模式，绿色慢闪。</li>
          <li>如果校准过程中飞控不静止，将会校准失败，出现红灯并滴一声退出校准，重新打杆校准即可。</li>
          <li>需重启飞控校准才会生效。</li>
        </ul>
      </div>
    </div>
    <div id="C9_9">
      <div class="box">
        <p class="title">9 电压检测参数校准</p>
        <div class="image">
          <img src="../../../assets/images/document_C9/008.png" alt=""/>
        </div>
        <ul>
          <li>使用电池给飞控供电，需连接电压检测B1或B2。(参考4.2和4.3)。</li>
          <li>使用USB或者数传连接电脑，选择电池类型和填写电池节数。</li>
          <li>用BB响或者万用表测出电池的准确电压，填写到准确电压栏里，点击校准，然后再点击写入电池参数，等待参数写入成功。</li>
          <li>电流测量系数默认50。</li>
        </ul>
      </div>
    </div>
    <div id="C9_10">
      <div class="box">
        <p class="title">10 解锁上锁</p>
        <ul>
          <li>此为美国手和日本手的解锁手势，中国手的上锁手势。</li>
        </ul>
        <div class="image">
          <img src="../../../assets/images/document_C9/009.png" alt=""/>
        </div>
        <ul>
          <li>	此为美国手和日本手的上锁手势，中国手的解锁手势。</li>
        </ul>
        <div class="image">
          <img src="../../../assets/images/document_C9/010.png" alt=""/>
        </div>
        <ul>
          <li>解锁后油门保持在中立位，电机依次从1、2、3...开始旋转到怠速（电调需已校准），如怠速不稳定，加大起转油门百分比AC_STThr。</li>
          <li>降落后拉低油门自动上锁（不要外八，以防打杆过快引起侧翻）。</li>
          <li>如遇到翻机或倒扣等炸鸡情况，可使用外八强制上锁，因此飞行过程中严禁外八操作！</li>
        </ul>
      </div>
    </div>
    <div id="C9_11">
      <div class="box">
        <p class="title">11 固件更新</p>
      </div>
      <div class="box" id="C9_11_1">
        <p class="title">11.1 SD卡更新固件(推荐)</p>
        <p>飞控用USB连接电脑，电脑会弹出一个U盘(飞控SD卡)，将固件文件(.hex)放进U盘里的ACFLy文件夹中，然后重启飞控，等待固件升级完成，升级过程中飞控蓝灯快闪，此过程需12秒左右。固件更新完会自动删除ACFLy文件夹里的固件，以免下次上电重复更新。</p>
        <div class="image">
          <img src="../../../assets/images/document_C9/011.png" alt=""/>
        </div>
      </div>
      <div class="box" id="C9_11_2">
        <p class="title">11.2  USB更新固件</p>
        <ul>
          <li>网站下载ACFLY地面站压缩包，其中包括名为DFU驱动的压缩包，解压后安装对应的版本。Win10系统安装win8.1版本。</li>
          <li>打开ACFLY地面站，点击配置–固件更新–浏览 双击选择固件(.hex)</li>
          <li>插上飞控USB，等待烧录完成。</li>
          <li>注意：需要飞控先断电，地面站选择固件后10秒内将飞控通过USB连接至电脑。</li>
          <li>部分用户电脑无法烧录固件，需按照如下微软常用运行库合集。</li>
        </ul>
        <div class="image">
          <img src="../../../assets/images/document_C9/012.png" alt=""/>
        </div>
      </div>
    </div>
    <div id="C9_12">
      <div class="box">
        <p class="title">12 高级调参</p>
        <div class="image">
          <img src="../../../assets/images/document_C9/013.png" alt=""/>
        </div>
        <ul>
          <li>ACFLy地面站支持图形化调参，用USB或者数传连接飞控后，点击连接-配置-参数调整-稳定飞行。地面站会自动加载飞控参数并显示。</li>
          <li>一般情况下，所有机架都可使用默认参数起飞，后根据飞行情况调试以下参数。</li>
          <li>无人机高频振荡发抖需将b参数调大，一般只需调 AC_Roll_b、AC_Pitch_b。</li>
          <li>无人机打杆软绵绵没力需将b参数调小，一般只需调 AC_Roll_b、AC_Pitch_b。</li>
          <li>T参数（参数名：AC_T）：飞行器电机的惯性时间常数。飞机桨加速至期望值的时间越长，此参数越大。此参数过小飞行器会高频振荡发抖。针对特定机型，此参数需微调。此参数越小（电机加速快），抗扰性能越好，此参数太小会导致b怎么调都会有震荡现象。此参数大不会震荡但是抗扰性能会打折扣（适中就行，没必要追求太强抗扰）。</li>
          <li>感度调节：感度越大，无人机打杆反应速度越快。感度按照需求调节。感度设置好后需点击写入感度按钮等待参数写入成功。</li>
          <li>最大倾角建议35度。</li>
        </ul>
        <div class="imageSmall">
          <img src="../../../assets/images/document_C9/014.png" alt=""/>
          <p class="explain">此参数表仅做参考，根据实际效果细调</p>
        </div>
      </div>
    </div>
    <div id="C9_13">
      <div class="box">
        <p class="title">13 常用参数表</p>
        <table class="table2">
          <tr>
            <th>参数名</th>
            <th>定义</th>
            <th>单位</th>
            <th>说明</th>
          </tr>
          <tr>
            <td rowspan="3">AC_UAVType</td>
            <td rowspan="3">飞行器类型</td>
            <td rowspan="3"></td>
            <td>10：四旋翼 X 型；11：六旋翼 X 型；</td>
          </tr>
          <tr>
            <td>12：八旋翼 X 型；15：四旋翼十字型；</td>
          </tr>
          <tr>
            <td>20：四旋翼 Double 十字型；32：六旋翼异构</td>
          </tr>
          <tr>
            <td>AC_STThr</td>
            <td>怠速油门</td>
            <td>%</td>
            <td>默认10%</td>
          </tr>
          <tr>
            <td rowspan="3">Init_CalibESC_T</td>
            <td rowspan="3">电调校准延时</td>
            <td rowspan="3">秒</td>
            <td>3：电调校准</td>
          </tr>
          <tr>
            <td>5：电调开 DEO</td>
          </tr>
          <tr>
            <td>9：电调关 DEO</td>
          </tr>
          <tr>
            <td>Bat_VoltMKp</td>
            <td>电压比例系数</td>
            <td>V/V</td>
            <td>标准18.4</td>
          </tr>
          <tr>
            <td>Bat_STVoltage</td>
            <td>电池标准电压</td>
            <td>V</td>
            <td>飞行器使用电池的标准电压，如6s电池为22.8v，4S电池为15.2V，3S电池为11.6V。此值用于动态调整姿态控制器b参数。</td>
          </tr>
          <tr>
            <td>Bat_CurrentMKp</td>
            <td>电流比例系数</td>
            <td>A/V</td>
            <td>标准50</td>
          </tr>
          <tr>
            <td>Bat_Capacity</td>
            <td>电池容量</td>
            <td>mAh</td>
            <td>暂未使用</td>
          </tr>
          <tr>
            <td>Bat_VoltP0 ~ Bat_VoltP10</td>
            <td>十级电量百分比对应的电压</td>
            <td>V</td>
            <td>相对Bat_STVoltage的电压偏移值。Bat_VoltP0为电量为0%时的电压偏移值，Bat_VoltP1为电量为10%时的电压偏移值。以此类推至Bat_VoltP10为电量为100%时的电压偏移值。</td>
          </tr>
          <tr>
            <td>Sf_FcRTLVolt</td>
            <td>返航电压</td>
            <td>V</td>
            <td>低于此电压时自动返航</td>
          </tr>
          <tr>
            <td>Sf_FcLandVolt</td>
            <td>降落电压</td>
            <td>V</td>
            <td>低于此电压时自动降落</td>
          </tr>
          <tr>
            <td>Aux_12Func</td>
            <td>通道12功能</td>
            <td></td>
            <td>33：相机拍照</td>
          </tr>
          <tr>
            <td>Aux_CamOffPwm</td>
            <td>拍照关</td>
            <td>PWM</td>
            <td>默认1100；使用电平拍照时为60000</td>
          </tr>
          <tr>
            <td>Aux_CamOnPwm</td>
            <td>拍照开</td>
            <td>PWM</td>
            <td>默认2000；使用电平拍照时为0</td>
          </tr>
          <tr>
            <td>Aux_CamShTime</td>
            <td>拍照时间</td>
            <td>秒</td>
            <td>建议0.1</td>
          </tr>
          <tr>
            <td>Aux_CamTrigEna</td>
            <td>热靴触发</td>
            <td></td>
            <td>0：禁用；1：启用</td>
          </tr>
          <tr>
            <td>PC_AutoVXY</td>
            <td>航线水平速度</td>
            <td>cm/s</td>
            <td>默认1000,10m/s</td>
          </tr>
          <tr>
            <td>PC_AutoVXYZ</td>
            <td>航线三维限制速度</td>
            <td>cm/s</td>
            <td>默认1000,10m/s，建议与PC_AutoVXY一致</td>
          </tr>
          <tr>
            <td>PC_AutoVZUp</td>
            <td>航线上升速度</td>
            <td>cm/s</td>
            <td>默认450,4.5m/s</td>
          </tr>
          <tr>
            <td>PC_AutoVZDn</td>
            <td>航线下降速度</td>
            <td>cm/s</td>
            <td>默认350,3.5m/s</td>
          </tr>
          <tr>
            <td>PC_LandVel</td>
            <td>末端降落速度</td>
            <td>cm/s</td>
            <td>距离地面10米内的末端降落速度，建议30-50cm/s</td>
          </tr>
          <tr>
            <td>Sf_RtSpeed</td>
            <td>返航速度</td>
            <td>cm/s</td>
            <td>默认1000,10m/s</td>
          </tr>
          <tr>
            <td rowspan="3">Sf_GbRtHRange</td>
            <td rowspan="3">返航高度的作用范围（距离家）</td>
            <td rowspan="3">cm</td>
            <td>范围内按当前飞行高度直接返航，忽略返航高度参数。</td>
          </tr>
          <tr>
            <td>范围外自动判断，如果当前高度低于返航高度，则先升高再返航，如果当前高度高于返航高度，则按当前高度返航。</td>
          </tr>
          <tr>
            <td>默认3000,即30m</td>
          </tr>
          <tr>
            <td>Sf_GbRtHeight</td>
            <td>返航高度</td>
            <td>cm</td>
            <td>默认5000,50m</td>
          </tr>
          <tr>
            <td>PC_maxVelXY</td>
            <td>手动控制时的最大水平速度</td>
            <td>cm/s</td>
            <td>默认1500,15m/s</td>
          </tr>
          <tr>
            <td>PC_maxVelUp</td>
            <td>手动控制时的最大上升速度</td>
            <td>cm/s</td>
            <td>默认500,5m/s</td>
          </tr>
          <tr>
            <td>PC_maxVelDn</td>
            <td>手动控制时的最大下降速度</td>
            <td>cm/s</td>
            <td>默认400,4m/s</td>
          </tr>
          <tr>
            <td>AC_maxLean</td>
            <td>最大倾斜角度</td>
            <td>°</td>
            <td>默认35°</td>
          </tr>
          <tr>
            <td>AC_Pitch_b</td>
            <td>俯仰控制b参数</td>
            <td></td>
            <td>默认5.5，高频振荡发抖需将b参数调大，打杆软绵绵没力需将b参数调小</td>
          </tr>
          <tr>
            <td>AC_Roll_b</td>
            <td>横滚控制b参数</td>
            <td></td>
            <td>默认5.5，高频振荡发抖需将b参数调大，打杆软绵绵没力需将b参数调小</td>
          </tr>
          <tr>
            <td>GPS0_delay</td>
            <td rowspan="3">GPS延时</td>
            <td rowspan="3">s</td>
            <td>默认0.1</td>
          </tr>
          <tr>
            <td rowspan="2">GPS1_delay(RTK)</td>
            <td>M8N更新频率为5Hz，延时为0.1</td>
          </tr>
          <tr>
            <td>F9P更新频率为10Hz，延时为0.05</td>
          </tr>
          <tr>
            <td>GPS0_GNSS</td>
            <td rowspan="6">GPS卫星配置</td>
            <td rowspan="6"></td>
            <td>默认0，不改变</td>
          </tr>
          <tr>
            <td rowspan="5">GPS1_ GNSS (RTK)</td>
            <td>GPS+GLONASS:  65</td>
          </tr>
          <tr>
            <td>GPS+GLONASS+GALILEO:  69</td>
          </tr>
          <tr>
            <td>GPS+BEIDOU:  9</td>
          </tr>
          <tr>
            <td>GPS+BEIDOU+GALILEO: 13(M8N推荐)</td>
          </tr>
          <tr>
            <td>GPS+GLONASS+BEIDOU+GALILEO: 77(仅F9P适用)</td>
          </tr>
          <tr>
            <td>LK_Port7Baud</td>
            <td>数传波特率(UART7)</td>
            <td></td>
            <td>默认115200</td>
          </tr>
          <tr>
            <td>Aux_1Func-</td>
            <td rowspan="3">对应飞控C1-C11通道 </td>
            <td rowspan="3"></td>
            <td>1-16: 映射遥控器对应通。1-16:对应遥控通道1-16</td>
          </tr>
          <tr>
            <td rowspan="2">Aux_11Func</td>
            <td>25-40: 用遥控器对应通道进行相机快门触发，25-40对应遥控通道1-16。</td>
          </tr>
          <tr>
            <td>49-64: 用遥控器对应通道进行云台控制。49-64对应遥控通道1-16。</td>
          </tr>
        </table>
      </div>
    </div>
    <div id="C9_14">
      <div class="box">
        <p class="title">14 自动返航策略</p>
        <p>一键返航、低电量自动返航和失控自动返航都遵循以下返航策略：</p>
        <ul>
          <li>无人机在距Home点Sf_GbRtHRange(默认30米)的水平距离范围内无视返航高度参数，直接返航。</li>
          <li>范围外按照Sf_GbRtHeight高度参数进行判断。当前高度低于Sf_GbRtHeight时，无人机先升高至Sf_GbRtHeight，再按照Sf_RtSpeed速度进行返航。当前高度高于Sf_GbRtHeight时，无人机直接以当前高度，按照Sf_RtSpeed速度进行返航。</li>
        </ul>
      </div>
      <div class="box" id="C9_14_1">
        <p class="title">14.1 一键自动返航</p>
        <ul>
          <li>当设置了一键返航按钮并按下后，无人机开始自动返航，返航过程可以打任意摇杆中断，如果一键返航设置的是按下，中断后如果3秒内不打摇杆则会继续自动返航。如果一键返航设置的是变化，则打杆中断会取消返航，需要重新拨一下一键返航按钮继续返航。</li>
        </ul>
      </div>
      <div class="box" id="C9_14_2">
        <p class="title">14.2 低电量自动返航或降落</p>
        <ul>
          <li>设置安全模式参数Sf_FcLandVolt 和Sf_FcRTLVolt，单位：伏。</li>
          <li>当无人机检测电池电压低于Sf_FcRTLVolt时，无人机将自动返航。</li>
          <li>当无人机检测电池电压低于Sf_FcLandVolt时，无人机将自动降落。</li>
          <li>如果上面两个参数设置的值一样，则会优先降落。</li>
        </ul>
      </div>
      <div class="box" id="C9_14_3">
        <p class="title">14.3 失控自动返航</p>
        <ul>
          <li>如果无人机不是在任务模式，飞行过程中遥控器断联无人机会自动返航，使用PPM接收机则不支持此功能(因为PPM接收机断联后仍有输出)，返航过程中遥控器恢复连接会继续返航，可手动打杆夺取控制权。 </li>
          <li>执行任务过程中遥控器断联后无人机会继续执行任务(需有定位)，执行完任务后或者电量低于Sf_FcRTLVolt时无人机会自动返航。</li>
          <li>如果无定位且遥控断联，无人机则会自动降落。</li>
        </ul>
      </div>
    </div>
    <div id="C9_15">
      <div class="box">
        <p class="title">15 航线任务设置</p>
        <ul>
          <li>飞控使用的是mavlink协议，支持主流开源地面站设置航点，包括Mission Planner、QGC(电脑和手机版都支持)等。最多设置65536个航点。</li>
          <li>航点设置完成，无人机定位成功(蓝绿交替闪烁)后，模式按钮打到任务模式挡位，若设置的第一个任务是起飞任务(起飞航点)，则解锁无人机即可自动起飞执行任务。 若第一个任务不是起飞任务，则需手动起飞后无人机再自动执行任务。</li>
        </ul>
      </div>
    </div>
    <div id="C9_16">
      <div class="box">
        <p class="title">16 相机触发拍照配置</p>
        <table class="table1">
          <tr>
            <th>参数名</th>
            <th>定义</th>
            <th>单位</th>
            <th>说明</th>
          </tr>
          <tr>
            <td>Aux_12Func</td>
            <td>通道12功能，拍照</td>
            <td></td>
            <td>33：相机拍照</td>
          </tr>
          <tr>
            <td>Aux_CamOffPwm</td>
            <td>拍照关</td>
            <td>PWM</td>
            <td>默认1100；使用电平拍照时为60000</td>
          </tr>
          <tr>
            <td>Aux_CamOnPwm</td>
            <td>拍照开</td>
            <td>PWM</td>
            <td>默认2000；使用电平拍照时为0</td>
          </tr>
          <tr>
            <td>Aux_CamShTime</td>
            <td>拍照时间</td>
            <td>秒</td>
            <td>建议0.1</td>
          </tr>
          <tr>
            <td>Aux_CamTrigEna</td>
            <td>热靴触发</td>
            <td></td>
            <td>0：禁用；1：启用</td>
          </tr>
        </table>
        <ul>
          <li>地面测试拍照功能可使用MP地面站，在地图上鼠标点击右键选择现在按下相机快门即可，拍照成功POS会记录到飞控内部SD卡中，可插USB导出POS记录查看。</li>
        </ul>
      </div>
    </div>
    <div id="C9_17">
      <div class="box">
        <p class="title">17 飞控及定位传感器安装偏移</p>
        <ul>
          <li>飞控机体坐标系为前左上，前为X轴正方向(机头)，左为Y轴正方向，上为Z轴正方向。偏移坐标系和飞控坐标系相同。单位：cm。偏移有正负，按照坐标系区分。</li>
        </ul>
        <table class="table1">
          <tr>
            <th>参数名</th>
            <th>定义</th>
            <th>单位</th>
            <th>说明</th>
          </tr>
          <tr>
            <td>POfs_Fc_x</td>
            <td>安装偏移</td>
            <td>cm</td>
            <td>飞控安装x轴距离飞机中心的偏移</td>
          </tr>
          <tr>
            <td>POfs_Fc_y</td>
            <td>安装偏移</td>
            <td>cm</td>
            <td>飞控安装y轴距离飞机中心的偏移</td>
          </tr>
          <tr>
            <td>POfs_Fc_z</td>
            <td>安装偏移</td>
            <td>cm</td>
            <td>飞控安装z轴距离飞机中心的偏移</td>
          </tr>
          <tr>
            <td>POfs_S0_x -</td>
            <td rowspan="2">安装偏移</td>
            <td rowspan="2">cm</td>
            <td rowspan="2">0-15号位置传感器安装x轴距离飞控的偏移</td>
          </tr>
          <tr>
            <td>POfs_S15_x</td>
          </tr>
          <tr>
            <td>POfs_S0_y - </td>
            <td rowspan="2">安装偏移</td>
            <td rowspan="2">cm</td>
            <td rowspan="2">0-15号位置传感器安装y轴距离飞控的偏移</td>
          </tr>
          <tr>
            <td>POfs_S15_y</td>
          </tr>
          <tr>
            <td>POfs_S0_z - </td>
            <td rowspan="2">安装偏移</td>
            <td rowspan="2"></td>
            <td rowspan="2"></td>
          </tr>
          <tr>
            <td>POfs_S15_z</td>
          </tr>
        </table>
        <table class="table1">
          <tr>
            <th>定位传感器名称</th>
            <th>ID</th>
          </tr>
          <tr>
            <td>超声波</td>
            <td>1号</td>
          </tr>
          <tr>
            <td>光流</td>
            <td>8号</td>
          </tr>
          <tr>
            <td>外置气压</td>
            <td>3号</td>
          </tr>
          <tr>
            <td>GPS</td>
            <td>6号</td>
          </tr>
          <tr>
            <td>RTK</td>
            <td>7号</td>
          </tr>
          <tr>
            <td>测距(激光/毫米波)</td>
            <td>2号</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document_C9",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import "../../../assets/style/document_v3";
</style>
