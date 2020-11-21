<template>
  <div id="document_A9">
    <div id="A9_0">
      <div class="box">
        <p class="title">A9官方说明文档</p>
      </div>
    </div>
    <div id="A9_1">
      <div class="box">
        <p class="title">1.1 编译环境（MDK）安装</p>
        <p>（1）MDK开发软件安装</p>
        <p>在keil官网 http://www.keil.com/ 的Download页面自行下载双击安装MDK5.26：</p>
        <div class="image">
          <img src="../../../assets/images/document/1.1_1.png" alt="" />
        </div>
        <p>（2）芯片支持包安装</p>
        <p>在keil官网http://www.keil.com/pack下载下图中的最新版本软件支持包并安装</p>
        <div class="image">
          <img src="../../../assets/images/document/1.1_2.png" alt="" />
        </div>
      </div>
      <div class="box">
        <p class="title">1.2 编译环境设置</p>
        <p>在MDK界面下点击下列按钮进入工程配置选项：</p>
        <div class="image">
          <img src="../../../assets/images/document/1.2_1.png" alt="" />
        </div>
        <p>在Target选项卡中选择V6开头的编译器（如果没有，可以安装MDK较新的版本或者前往https://developer.arm.com/products/software-development-tools/compilers/arm-compiler/downloads/version-6 网页单独下载编译器并安装进MDK），并取消Use MicroLib复选框；在C/C++(AC6)选项卡中进行下图中的配置：</p>
        <div class="image">
          <img src="../../../assets/images/document/1.2_2.png" alt="" />
        </div>
        <div class="image">
          <img src="../../../assets/images/document/1.2_3.png" alt="" />
        </div>
      </div>
      <div class="box">
        <p class="title">1.3 固件烧录</p>
        <p>代码烧录有两种方式，一是使用stlink下载，二是使用USB下载固件(具体看固件更新一章)。仿真代码需要连接飞控的SWD接口。将此接口与ST-Link（推荐）、JLink等下载器的对应接口连接，然后接通电源即可下载。</p>
      </div>
    </div>
    <div id="A9_2">
      <div class="box">
        <p class="title">2.1 接口定义</p>
        <div class="image">
          <img src="../../../assets/images/document/3.1_1.jpg" alt="" />
        </div>
      </div>
      <div class="box">
        <p class="title">2.2 外设接口</p>
        <p>源固件默认接口，可根据需求更改</p>
        <ul>
          <li>串口超声波或串口激光：SERIAL1接口</li>
          <li>光流串口：SERIAL5接口</li>
          <li>GPS、外置罗盘：GPS接口</li>
          <li>数传串口：SERIAL 7接口</li>
        </ul>
      </div>
      <div class="box">
        <p class="title">2.3 飞控尺寸重量</p>
        <ul>
          <li>长5.5cm，宽4.4cm，高1.9cm</li>
          <li>重39克</li>
        </ul>
      </div>
    </div>
    <div id="A9_3">
      <div class="box">
        <p class="title">3.1 电机顺序及转向</p>
        <p>下载ACFLY地面站(此处放下载连接)，使用USB或者数传连接飞控和电脑，点击连接-配置-参数调整-稳定飞行，可看到此时飞控设置的机型、机头方向及电机序号和转向。选择对应的机型并点击写入机型参数。</p>
        <div class="image">
          <img src="../../../assets/images/document/4.1_1.png" alt="" />
        </div>
        <p>请严格按照地面站指示的机头方向、电机序号和转向来装机。</p>
        <p>将飞控按上述方向紧固在飞行器上。然后按上述要求安装电机及电调。</p>
        <p>飞控安装需固定住飞控四个角，不能只固定住中间，否则会导致震动过大而影响飞行效果。</p>
        <p>飞控安装需固定住飞控四个角，不能只固定住中间，否则会导致震动过大而影响飞行效果。</p>
        <p>飞控安装需固定住飞控四个角，不能只固定住中间，否则会导致震动过大而影响飞行效果。</p>
        <div class="image">
          <img src="../../../assets/images/document/4.1_2.png" alt="" />
        </div>
      </div>
      <div class="box">
        <p class="title">3.2 连接电机电调</p>
        <p>C1到C8对应电机顺序1-8(电机序号请用ACFY地面站查看)， C1-8代表信号线（白色），	V2代表电源线，GD代表地线（黑色）。</p>
        <div class="image">
          <img src="../../../assets/images/document/4.2_1.png" alt="" />
        </div>
      </div>
      <div class="box">
        <p class="title">3.3 连接接收机</p>
        <p>将接收机的信号线、5V、GND线连接至飞控的RC口。支持PPM和SBUS接收机。</p>
      </div>
    </div>
    <div id="A9_4">
      <div class="box">
        <p class="title">4.1 飞控初始化</p>
        <p>飞控上电后会进行自检，状态灯三快一慢闪烁，待状态灯三色慢闪变化后代表自检通过。自检通过后方可控制飞行器。</p>
      </div>
      <div class="box">
        <p class="title">4.2 遥控器校准</p>
        <p>此飞控要求遥控器至少具有6个通道，包含4个摇杆和2个按钮，最多支持校准8个通道。校准的第一个按钮用来切换飞行模式。校准的第二、第三、第四个按钮用来设置执行任务、返航和安全按钮。</p>
        <p>首先等待5.1中的飞控自检完成，飞控状态灯切换至绿灯慢闪。</p>
        <p>将飞控用USB或者数传连接到电脑，打开ACFly地面站，点击连接。</p>
        <p>（1）打开遥控器（已将接收机连接至飞控，参考3.3）</p>
        <p>部分遥控器需要提前设置好遥控器的PPM/SBUS模式，根据需要设置2-3个按钮（即辅助通道）</p>
        <p>（2）将四个摇杆通道回中，在ACFly地面站中选择美国手、中国手或者日本手后，点击“校准遥控器”按钮。飞控进入遥控器校准模式。</p>
        <div class="image">
          <img src="../../../assets/images/document/5.2_1.png" alt="" />
        </div>
        <p>（3）等待蜂鸣器响三声后，表示已记录所有摇杆初始位置</p>
        <p>（4）按照地面站动画和文字提示校准飞控，最后需将油门拉低，蜂鸣器快响三声表示表示校准成功。</p>
        <p>错误情况：</p>
        <ul>
          <li>哔—长叫并退出校准模式：遥控器或接收机断开</li>
          <li>完成校准时哔—长叫：摇杆通道的最高油门、最低油门到摇杆中间的行程不一致。</li>
        </ul>
      </div>
      <div class="box">
        <p class="title">4.3 飞行模式设置</p>
        <p>遥控校准的第一个按钮用来切换飞行模式。校准的第二、第三、第四个按钮用来设置执行任务、返航和安全按钮。</p>
        <div class="image">
          <img src="../../../assets/images/document/5.3_1.png" alt="" />
        </div>
        <ul>
          <li>飞行模式有定点模式、定高模式、任务模式和返航模式。通过按钮一来设置。</li>
          <li>要想任务模式执行的是航线飞行，则将对应的解锁前模式设置为32(默认设置)。</li>
          <li>要想任务模式执行的是二次开发飞行任务(需要用户自己实现，具体请看二次开发教程，比如利用openmv自动巡线)，则将对应的解锁前模式设置为35，即将上图模式3栏的32改成35。</li>
          <li>执行任务按钮是第二种进入任务模式的方式，只要将按钮1(如果是三档按钮)打到中间档，油门回中，然后按下执行任务按钮即可进入任务模式。</li>
          <li>返航按钮则是执行一键返航功能。</li>
          <li>安全按钮为电机急停按钮。</li>
          <li>第二、三、四个按钮有按下和变化两种设置，选择按下则对应通道值最大时为按下，选择变化则无论按钮在哪档，只要有变化(三档按钮变化一档即可)则执行对应功能。</li>
        </ul>
      </div>
      <div class="box">
        <p class="title">4.4 电调电机校准</p>
        <p>为了安全起见，请先卸桨！！！</p>
        <p>为了安全起见，请先卸桨！！！</p>
        <p>为了安全起见，请先卸桨！！！</p>
        <p>打开ACFly地面站，将飞控通过USB与地面站连接，连接成功后，在配置-参数调整-电调参数栏目中，点击校准电调，断电，为了安全起见，请先卸桨！！！然后用电池给飞控和电机同时上电，此时电调会发出滴-滴滴-滴的声音，表示校准完成。</p>
        <div class="image">
          <img src="../../../assets/images/document/5.4_1.png" alt="" />
        </div>
        <ul>
          <li>天行者、铂金等非多旋翼电调必须进行起转油门设置，一般天行者起转油门设为15。其他多旋翼电调可不用设置起转油门。修改完需点击写入电调参数。</li>
          <li>非线性系数和电调刹车设置有关，普通电调(未开刹车)非线性系数一般为0.45，开刹车一般为0.1，DJI电调一般为0.75。修改完需点击写入电调参数。</li>
        </ul>
      </div>
      <div class="box">
        <p class="title">4.5 陀螺校准</p>
        <ul>
          <li>首先等待5.1中的飞控自检完成，飞控状态灯切换至绿色慢闪。</li>
          <li>遥控器油门最小，偏航最右，俯仰居中，横滚最右，两秒左右，滴一声进入陀螺校准模式，蓝绿 </li>
          <li>飞控需放置静止不动等待5秒左右，滴滴后校准完成，绿色慢闪。</li>
          <li>如果校准过程中飞控不静止，将会校准失败，出现红灯并滴一声退出校准，重新打杆校准即可。</li>
        </ul>
      </div>
      <div class="box">
        <p class="title">4.6 加速度计校准</p>
        <ul>
          <li>首先等待5.1中的飞控自检完成，飞控状态灯切换至绿色慢闪。</li>
          <li>遥控器油门最小，偏航最左，俯仰最下，横滚最左，两秒左右将进入M12_ACCCalib加速度校准模式。</li>
          <li>将无人机分别摆放六个面（不用按顺序，差不多水平即可）静止。每个面需静止放置5秒左右，静止放置时飞控指示灯显示蓝色，会由暗变亮指示当前进度，表示正在采集数据校准，完成一个面校准后指示灯会闪烁然后变红并且嘀一声，然后更换下一个面校准。全部六面校准完毕后自动退出M12_ACCCalib加速度校准模式，绿色慢闪。</li>
          <li>飞控灯红色表示当前面已经校准或者飞控不是静止状态无法校准。</li>
        </ul>
      </div>
      <div class="box">
        <p class="title">4.7 磁罗盘校准</p>
        <ul>
          <li>首先等待5.1中的飞控初始化完成，飞控状态灯切换至绿色慢闪。</li>
          <li>遥控器油门最小，偏航最左，俯仰最上，横滚最左。两秒左右将进入M13_MagCalib磁罗盘校准模式。</li>
          <li>旋转无人机尽量多的三维角度，旋转时飞控指示灯显示蓝色，会由暗变亮指示当前进度。完成后飞控指示灯闪烁并嘀一声表示校准完成。绿色慢闪。</li>
          <li>飞控指示灯红色表示飞控没有在旋转无法校准，继续旋转无人机即可。</li>
        </ul>
      </div>
    </div>
    <div id="A9_5">
      <div class="box">
        <p class="title">5 固件更新</p>
        <ul>
          <li>下载名为DFU驱动的压缩包(这里放置下载连接)，解压后安装驱动。</li>
          <li>打开ACFLY地面站(无需点击连接)，点击配置 – 固件更新 – 浏览 – 双击选择固件(.hex)</li>
          <li>插上飞控USB，等待烧录完成。</li>
          <li>
            <p style="text-indent: 2em;">注意：需要飞控先断电，地面站选择固件后10秒内将飞控通过USB连接至电脑。</p>
          </li>
          <li>部分使用32位 windows7 系统的用户，若经过上述步骤地面站仍然无法连接飞控，则安装一下MP或者QGC地面站，安装完成打开该软件再关闭。</li>
          <li>
            <div class="image">
              <img src="../../../assets/images/document/6_1.png" alt="" />
            </div>
          </li>
          <li>飞控出厂默认烧录BootLoader，如果由于个人二次开发不小心刷掉了飞控Flash里的BootLoader代码而导致不能用USB下载固件（一般情况下不会被刷掉），可到售后群下载ACFLy_BootLoader工程，用keil打开， stlink烧录进飞控即可。</li>
          <li>
            <div class="image">
              <img src="../../../assets/images/document/6_2.png" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div id="A9_6">
      <div class="box">
        <p class="title">6.1 调参软件</p>
        <ul>
          <li>本飞控使用Mavlink协议，支持使用Mavlink的参数协议进行调参。</li>
        </ul>
        <p>（1）ACFly地面站</p>
        <ul>
          <li>将飞控连接到电脑，打开ACFly地面站 (下载链接)，通过USB连接飞控</li>
          <li>点击配置-参数表-可对相应参数进行修改，修改后需点击保存全部或者保存选定。</li>
        </ul>
        <div class="image">
          <img src="../../../assets/images/document/7.1_1.png" alt="" />
        </div>
        <p>（2）支持Mavlink协议的开源地面站</p>
        <p>以Mission Planner为例，将飞控连接至电脑，右上角选择COM口号，点击连接，地面站将获取飞控的参数列表。（注意：请在代码的main文件里将init_debug注释掉或在Debug文件里不要往此端口写入非Mavlink的调试数据，不然将导致Mavlink误码过多地面站不识别）</p>
        <div class="image">
          <img src="../../../assets/images/document/7.1_2.png" alt="" />
        </div>
        <p>在配置调试—>参数表中修改参数，然后点击右侧的写入参数即可将参数写入飞控。</p>
        <p>(3)支持手机QGC地面站修改参数。</p>
      </div>
      <div class="box">
        <p class="title">6.2 参数分类</p>
        <p>不同类别参数以开头分组，如AC_开头为姿态控制参数组。</p>
        <ul>
          <li>AC---Attitude Control姿态控制参数：包括Roll、Pitch、Yaw三轴感度，增益等；</li>
          <li>AUX---PWM输出对应遥控通道映射参数;</li>
          <li>BAT---Battery电池参数：包括标准电池电压等；</li>
          <li>GPS0---GPS0参数，包括GPS延时和GPS配置等；</li>
          <li>GPS1---GPS1参数，包括GPS延时和GPS配置等；</li>
          <li>Init---初始化校准参数，包括电调校准等；</li>
          <li>LK---mavlink协议参数，本机ID；</li>
          <li>MFunc---遥控校准相关参数；</li>
          <li>UAV---飞行器参数：包括飞行器类型等；</li>
          <li>PC---位置控制参数。</li>
          <li>POfs---飞控和位置传感器安装偏移补偿；</li>
          <li>SDlog ---飞行日志参数。</li>
          <li>Sf---安全模式参数。</li>
        </ul>
      </div>
      <div class="box">
        <p class="title">6.3 调参教程</p>
        <ul>
          <li>无人机机型选择，对应参数名：AC_UAV_Type</li>
        </ul>
        <table class="table1">
          <tr>
            <th class="left solidTop bottom">AC_UAV_Type参数值</th>
            <th class="right solidTop bottom">飞行器类型</th>
          </tr>
          <tr>
            <td class="left">10</td>
            <td class="right">四旋翼X型</td>
          </tr>
          <tr>
            <td class="left">11</td>
            <td class="right">六旋翼X型</td>
          </tr>
          <tr>
            <td class="left">12</td>
            <td class="right">八旋翼X型</td>
          </tr>
          <tr>
            <td class="left">15</td>
            <td class="right">四旋翼十字型</td>
          </tr>
          <tr>
            <td class="left">20</td>
            <td class="right">四旋翼Double十字型</td>
          </tr>
          <tr>
            <td class="left solidBottom">32</td>
            <td class="right solidBottom">六旋翼异构</td>
          </tr>
        </table>
        <p>ACFLy地面站支持图形化调参，用USB或者数传连接飞控后，点击连接-配置-参数调整-稳定飞行。地面站会自动加载飞控默认参数并显示。</p>
        <div class="image">
          <img src="../../../assets/images/document/7.3_1.png" alt="" />
        </div>
        <ul>
          <li>无人机高频振荡发抖需将b参数调大，一般只需调 AC_Roll_b、AC_Pitch_b。</li>
          <li>无人机打杆软绵绵没力需将b参数调小，一般只需调 AC_Roll_b、AC_Pitch_b。</li>
          <li>T参数（参数名：AC_T）：飞行器电机的惯性时间常数。飞机桨加速至期望值的时间越长，此参数越大。此参数过小飞行器会高频振荡发抖。针对特定机型，此参数需微调。此参数越小（电机加速快），抗扰性能越好，此参数太小会导致b怎么调都会有震荡现象。此参数大不会震荡但是抗扰性能会打折扣（适中就行，没必要追求太强抗扰）。更改参数后需点击写入机型参数按钮等待参数写入成功。</li>
        </ul>
        <p style="text-indent: 2em;">以下参数标准电压：3s=11.6v、4s=15.2v、6s=22.8v</p>
        <table class="table2">
          <tr>
            <th class="firstCol">配置</th>
            <th>F450+U2216 800kv电机+1147桨+4s</th>
            <th>F450+dji2312 940kv电机+9450桨+4s</th>
            <th>精灵3机架+dji2312 940kv电机+9450自锁桨+3s</th>
            <th>dh600+疯狂4114 400kv电机+飞越1555折叠桨 +6s</th>
            <th>Tarot X6+朗宇4108 320kv电机+1855碳桨 +6s</th>
            <th>f550六轴+dji 2312 电机+9450自锁桨 +4s</th>
            <th>f330+朗宇x2212 1400kv电机+8038桨 +3s</th>
          </tr>
          <tr>
            <td class="firstCol">T</td>
            <td>0.1</td>
            <td>0.1</td>
            <td>0.1</td>
            <td>0.05</td>
            <td>0.15</td>
            <td>0.1</td>
            <td>0.1</td>
          </tr>
          <tr>
            <td class="firstCol">Roll Pitch</td>
            <td>b=5.5</td>
            <td>b=7.5</td>
            <td>b=8.5</td>
            <td>b=5.5</td>
            <td>b=1.2</td>
            <td>b=5.5</td>
            <td>b=7.5</td>
          </tr>
          <tr>
            <td class="solidBottom firstCol">Yaw</td>
            <td class="solidBottom">b=1.0</td>
            <td class="solidBottom">b=1.0</td>
            <td class="solidBottom">b=2.0</td>
            <td class="solidBottom">b=1.0</td>
            <td class="solidBottom">b=0.8</td>
            <td class="solidBottom">b=1.0 T=0.005</td>
            <td class="solidBottom">b=1.0</td>
          </tr>
        </table>
        <ul>
          <li>感度调节：感度越大，无人机打杆反应速度越快。感度按照需求调节。感度设置好后需点击写入感度按钮等待参数写入成功。</li>
          <li>电池参数调节请参考7.5节</li>
          <li>手动飞行和自动飞行模式(包括飞航线)参数调节请参考7.7节，比如飞行最大加速度和最大速度等的调节。</li>
        </ul>
      </div>
      <div class="box">
        <p class="title">6.4 姿态控制参数</p>
        <p>角速度参数与角加速度参数的单位分别是：°/s，°/s^2。</p>
        <table class="table1">
          <tr>
            <th class="left solidTop bottom">参数名</th>
            <th class="right solidTop bottom">说明</th>
          </tr>
          <tr>
            <td class="left">AC_maxLean</td>
            <td class="right">飞行时候的最大倾角，默认35°</td>
          </tr>
          <tr>
            <td class="left">AC_maxRPAcc</td>
            <td class="right">横滚和俯仰的最大角加速度</td>
          </tr>
          <tr>
            <td class="left">AC_maxRPSp</td>
            <td class="right">横滚和俯仰的最大角速度</td>
          </tr>
          <tr>
            <td class="left">AC_maxYAcc</td>
            <td class="right">偏航的最大角加速度</td>
          </tr>
          <tr>
            <td class="left">AC_maxYSp</td>
            <td class="right">偏航的最大角速度</td>
          </tr>
          <tr>
            <td class="left">AC_Roll_b、AC_Pitch_b、AC_Yaw_b</td>
            <td class="right">控制器增益，请参考7.3节</td>
          </tr>
          <tr>
            <td class="left">AC_XXX_TD4Pn  (n=1、2、3、4)</td>
            <td class="right">前馈增益</td>
          </tr>
          <tr>
            <td class="left">AC_XXX_Pn  (n=1、2、3、4)</td>
            <td class="right">反馈增益</td>
          </tr>
          <tr>
            <td class="left">AC_STThr</td>
            <td class="right">起转油门</td>
          </tr>
          <tr>
            <td class="left">AC_T</td>
            <td class="right">飞行器电机的惯性时间常数</td>
          </tr>
          <tr>
            <td class="left solidBottom">AC_Beta2</td>
            <td class="right solidBottom">此参数越大抗扰越强，但是不抗震动噪声，输出波动会增大，最大200。不建议新手调节。</td>
          </tr>
        </table>
      </div>
      <div class="box">
        <p class="title">6.5 电池参数调节</p>
        <p>使用USB或者数传连接电脑，选择电池类型和填写电池节数，用BB响或者万用表测出电池的准确电压，填写到准确电压栏里，点击校准，然后再点击写入电池参数。电压和电流测量系数默认为默认值为18.4和1/50；</p>
        <div class="image">
          <img src="../../../assets/images/document/7.5_1.png" alt="" />
        </div>
      </div>
      <div class="box">
        <p class="title">6.6 GPS参数设置</p>
        <table class="table3" style="margin-top: 50px;">
          <tr>
            <th>参数名</th>
            <th class="left">说明</th>
            <th class="right">参数名</th>
            <th>说明</th>
          </tr>
          <tr>
            <td>GPS0_GNSS</td>
            <td class="left">GPS搜星配置</td>
            <td class="right">GPS0_delay</td>
            <td>GPS0延时</td>
          </tr>
          <tr>
            <td class="solidBottom">GPS1_GNSS</td>
            <td class="solidBottom left">GPS1搜星配置</td>
            <td class="solidBottom right">GPS1_ delay</td>
            <td class="solidBottom">GPS1延时</td>
          </tr>
        </table>
        <p>(1) GPSx_GNSS参数值设置：</p>
        <ul>
          <li>63：GPS+北斗+伽利略</li>
          <li>119：GPS+格洛纳斯+伽利略</li>
          <li>126：北斗+格洛纳斯+伽利略</li>
        </ul>
        <p>(2) GPSx_delay参数值设置：M8N延时一般为0.2(默认)，RTK则为0.05。</p>
      </div>
      <div class="box">
        <p class="title">6.7 位置控制参数</p>
        <p>速度参数与加速度参数的单位分别是：cm/s，cm/s^2。</p>
        <table class="table4">
          <tr>
            <th class="solidTop left" colspan="2">手动模式</th>
            <th class="solidTop right" colspan="2">自动模式</th>
          </tr>
          <tr>
            <td class="solidTop">参数名</td>
            <td class="solidTop left">说明</td>
            <td class="solidTop right">参数名</td>
            <td class="solidTop">说明</td>
          </tr>
          <tr>
            <td class="top">PC_maxVelXY</td>
            <td class="top left">最大水平速度</td>
            <td class="top right">PC_maxAutoVelXY</td>
            <td class="top">最大水平速度</td>
          </tr>
          <tr>
            <td>PC_maxAccXY</td>
            <td class="left">最大水平加速度</td>
            <td class="right">PC_maxAutoAccXY</td>
            <td>最大水平加速度</td>
          </tr>
          <tr>
            <td>PC_maxJerkXY</td>
            <td class="left">最大水平加加速度</td>
            <td class="right">PC_maxAutoJerkXY</td>
            <td>最大水平加加速度</td>
          </tr>
          <tr>
            <td></td>
            <td class="left"></td>
            <td class="right"></td>
            <td></td>
          </tr>
          <tr>
            <td>PC_maxVelUp</td>
            <td class="left">最大向上速度</td>
            <td class="right">PC_maxAutoVelUp</td>
            <td>最大向上速度</td>
          </tr>
          <tr>
            <td>PC_maxAccUp</td>
            <td class="left">最大向上加速度</td>
            <td class="right">PC_maxAutoAccUp</td>
            <td>最大向上加速度</td>
          </tr>
          <tr>
            <td>PC_maxJerkUp</td>
            <td class="left">最大向上加加速度</td>
            <td class="right">PC_maxAutoJerkUp</td>
            <td>最大向上加加速度</td>
          </tr>
          <tr>
            <td></td>
            <td class="left"></td>
            <td class="right"></td>
            <td></td>
          </tr>
          <tr>
            <td>PC_maxVelDn</td>
            <td class="left">最大向下速度</td>
            <td class="right">PC_maxAutoVelDn</td>
            <td>最大向下速度</td>
          </tr>
          <tr>
            <td>PC_maxAccDn</td>
            <td class="left">最大向下速度</td>
            <td class="right">PC_maxAutoVelDn</td>
            <td>最大向下速度</td>
          </tr>
          <tr>
            <td>PC_maxAccDn</td>
            <td class="left">最大向下加速度</td>
            <td class="right">PC_maxAutoAccDn</td>
            <td>最大向下加速度</td>
          </tr>
          <tr>
            <td>PC_maxJerkDn</td>
            <td class="left">最大向下加加速度</td>
            <td class="right">PC_maxAutoJerkDn</td>
            <td>最大向下加加速度</td>
          </tr>
          <tr>
            <td></td>
            <td class="left"></td>
            <td class="right">PC_AutoVXY</td>
            <td>二维XY航线速度</td>
          </tr>
          <tr>
            <td></td>
            <td class="left"></td>
            <td class="right">PC_AutoVXYZ</td>
            <td>三维XYZ航线速度</td>
          </tr>
          <tr>
            <td class="solidBottom"></td>
            <td class="solidBottom left"></td>
            <td class="solidBottom right">PC_AutoVZ</td>
            <td class="solidBottom">高度方向航线速度</td>
          </tr>
        </table>
        <table class="table1" style="margin-top: 50px;">
          <tr>
            <th class="left solidTop bottom">高度前馈滤波器参数</th>
            <th class="right solidTop bottom">反馈增益参数</th>
          </tr>
          <tr>
            <td class="left">PC_Z_TD4P1</td>
            <td class="right">PC_P1</td>
          </tr>
          <tr>
            <td class="left">PC_Z_TD4P2</td>
            <td class="right">PC_P1</td>
          </tr>
          <tr>
            <td class="left">PC_Z_TD4P3</td>
            <td class="right">PC_P1</td>
          </tr>
          <tr>
            <td class="left solidBottom">PC_Z_TD4P4</td>
            <td class="right solidBottom"></td>
          </tr>
        </table>
      </div>
      <div class="box">
        <p class="title">6.8 安全模式参数</p>
        <p style="text-align: right;margin: 20px 0 -20px 0;">单位：cm</p>
        <table class="table1">
          <tr>
            <th class="left solidTop bottom">参数名</th>
            <th class="right solidTop bottom">说明</th>
          </tr>
          <tr>
            <td class="left">Sf_FcLandVolt</td>
            <td class="right">低电量自动降落电压</td>
          </tr>
          <tr>
            <td class="left">Sf_FcRTLVolt</td>
            <td class="right">低电量自动返航电压</td>
          </tr>
          <tr>
            <td class="left">Sf_SfRtMode</td>
            <td class="right">返航模式</td>
          </tr>
          <tr>
            <td class="left">Sf_RtSpeed</td>
            <td class="right">返航速度,单位：cm/s</td>
          </tr>
          <tr>
            <td class="left">Sf_GbRtHRange</td>
            <td class="right">经纬度定位升高高度（对地）</td>
          </tr>
          <tr>
            <td class="left">Sf_LcRtHRange</td>
            <td class="right">本地定位（无经纬度）升高高度（对地）</td>
          </tr>
          <tr>
            <td class="left">Sf_GbRtHeight</td>
            <td class="right">经纬度定位升高返航范围</td>
          </tr>
          <tr>
            <td class="left solidBottom">Sf_LcRtHeight</td>
            <td class="right solidBottom">本地定位（无经纬度）升高返航范围</td>
          </tr>
        </table>
        <p>按下一键返航按钮，当无人机超过起飞点Sf_GbRtHeigh厘米或Sf_LcRtHeight厘米距离时，无人机将先升高Sf_GbRtHRange厘米或Sf_LcRtHRange厘米，再根据Sf_RtSpeed返航速度进行返航。</p>
      </div>
      <div class="box">
        <p class="title">6.9 AUX参数</p>
        <ul>
          <li>Aux_1Func - Aux_2Func: 映射遥控器对应通道(原始数据)。</li>
          <li>Aux_3Func - Aux_4Func: 用遥控器对应通道进行相机快门触发(原始数据)。</li>
          <li>Aux_5Func - Aux_9Func: 用遥控器对应通道进行云台控制(原始数据)。</li>
          <li>Aux_CamOffPwm: 相机不触发时输出的PWM，默认值1000。</li>
          <li>Aux_CamOnPwm: 相机触发时输出的PWM，默认值2000。</li>
          <li>Aux_CamShTime: 相机触发时输出PWM持续时间,单位：毫秒。</li>
          <li>Aux_CamTrigEna: 相机热靴功能使能。</li>
        </ul>
      </div>
      <div class="box">
        <p class="title">6.10 POfs参数</p>
        <p>飞控坐标系为东北天，东为X轴正方向(机头)，北为Y轴正方向，天为Z轴正方向。偏移坐标系和飞控坐标系相同。这里说的偏移是距离飞行器所有电机组成平面的中心点的偏移。单位; cm。</p>
        <ul>
          <li>POfs_Fc_x: 飞控安装x轴偏移。</li>
          <li>POfs_Fc_y: 飞控安装y轴偏移。</li>
          <li>POfs_Fc_z: 飞控安装z轴偏移。</li>
          <li>POfs_S0_x - POfs_S15_x: 位置传感器0-15安装x轴偏移。</li>
          <li>POfs_S0_y - POfs_S15_y: 位置传感器0-15安装y轴偏移。</li>
          <li>POfs_S0_z - POfs_S15_z: 位置传感器0-15安装z轴偏移。</li>
        </ul>
      </div>
    </div>
    <div id="A9_7">
      <div class="box">
        <p class="title">7.1 航点设置</p>
        <p>本飞控使用的是mavlink协议，支持主流开源地面站设置航点，包括Mission Planner、QGC(电脑和手机版都支持)等。最多设置65536个航点。以mission planner为例：</p>
        <div class="image">
          <img src="../../../assets/images/document/8.1_1.png" alt="" />
        </div>
        <p>首先设置第一个点为TAKEOFF点，再点击地图设置想要的航点(waypoint)、设置每个航点的高度和飞向下一个航点的等待时间等，最后可设置一个返航点。设置完后点击右边的写入航点按钮等待写入成功，可以点击读取航点查看是否成功写入航点。</p>
      </div>
      <div class="box">
        <p class="title">7.2 航线飞行</p>
        <p>校准完遥控(看5.2节)，设置完航点后，即可飞航线，步骤如下：</p>
        <ul>
          <li>飞控上电等待GPS定位成功(定位不成功则无法自动起飞)，切换任务模式(请参考5.3节)，解锁飞控。</li>
          <li>油门回中等待自动起飞(航点需设置起飞点)。也可手动起飞后再执行上述操作，无人机将开始自动执行任务。</li>
          <li>无人机在飞行过程中会自动把机头对准下一个航点再飞过去，期间飞手可以打任意摇杆中断，夺回控制权，摇杆不动持续一段时间后会再次从断点处继续执行任务。支持断电续飞。</li>
        </ul>
      </div>
      <div class="box">
        <p class="title">7.3 一键返航</p>
        <ul>
          <li>一键返航需要飞控在定点模式下GPS定位成功，拨一下遥控器校准的一键返航按钮(如果是三档的按钮，拨一档即可)，当无人机超过起飞点Sf_GbRtHeigh厘米或Sf_LcRtHeight厘米距离时，无人机将先升高Sf_GbRtHRange厘米或Sf_LcRtHRange厘米，再根据Sf_RtSpeed返航速度进行返航。</li>
          <li>返航过程可以打任意摇杆中断，如果一键返航设置的是按下，中断后如果3秒内不打摇杆则会继续自动返航。如果一键返航设置的是变化，则打杆中断会取消返航，需要重新拨一下一键返航按钮继续返航。</li>
          <li>返航的精确度由GPS定位精度决定，一般的GPS可能会有1到2米的误差。</li>
        </ul>
      </div>
      <div class="box">
        <p class="title">7.4 失控返航</p>
        <ul>
          <li>如果无人机不是在任务模式，飞行过程中遥控器断联无人机会自动返航，使用PPM接收机则不支持此功能。</li>
          <li>如果无人机在任务模式，飞行过程中遥控器断联后无人机会继续执行任务，执行完任务后自动返航，使用PPM接收机则不支持此功能。</li>
          <li>如果GPS没定位，遥控断联，无人机则会自动降落。</li>
        </ul>
      </div>
      <div class="box">
        <p class="title">7.5 抗磁干扰</p>
        <p>因强磁场等环境因素干扰导致无人机航向异常，飞控可实时监测磁场异常，并通过GPS进行航向智能对准，避免因磁场异常炸机。</p>
      </div>
    </div>
    <div id="A9_8">
      <div class="box">
        <p class="title">8.1 代码总体布局</p>
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
    <div id="A9_9">
      <div class="box">
        <p class="title">9 代码接口手册</p>
        <ul>
          <li>本代码接口中所有位置、速度、加速度数据单位均为cm厘米</li>
          <li>本代码接口中所有角度、角速度、角加速度数据单位均为rad弧度</li>
          <li>本代码接口中所有磁场数据单位均为Gauss高斯</li>
          <li>本飞控模块化编程，不同模块通过接口进行访问操作，此文档必看！！</li>
          <li>此文档包括：传感器接口、接收机接口</li>
        </ul>
      </div>
      <div class="box">
        <p class="title">9.1 传感器接口</p>
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
      <div class="box">
        <p class="title">9.2 接收机接口</p>
        <ul>
          <li>位于Drivers目录下</li>
          <li>接收机接口分为：接收机读取接口 和 接收机更新接口。</li>
          <li>函数声明分别位于：Receiver.h和Receiver _Backend.h里</li>
          <li>函数定义位于：Receiver.c里</li>
        </ul>
        <p>（1）接收机定义（Receiver.h）</p>
        <p>接收机包含SBUS、PPM等协议的接收机（至少具有6个通道），定义如下：</p>
        <div class="image">
          <img src="../../../assets/images/document/10.2_1.png" alt="" />
        </div>
        <p>（2）接收机读取接口（Receiver.h）</p>
        <ul>
          <li>get_Receiver会返回指定接收机的const结构体</li>
          <li>get_current_Receiver会返回当前接收机的const结构体（自动选择序号最低的可用接收机，无可用接收机是返回随机接收机）</li>
          <li>get_current_Reciever_Type返回当前接收机的类型（SBUS接收机、PPM接收机等）</li>
        </ul>
        <div class="image">
          <img src="../../../assets/images/document/10.2_2.png" alt="" />
        </div>
        <p>（3）接收机更新接口（Receiver_Backend.h）</p>
        <p>把接收机类型、原始数据、是否已连接等信息发送给接口即可完成接收机数据更新。</p>
        <div class="image">
          <img src="../../../assets/images/document/10.2_3.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document_A9",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import "../../../assets/style/document_v2";
</style>
