<template>
  <div id="document_A9">
    <div id="A9_0">
      <div class="box">
        <p class="title">A9官方说明文档</p>
      </div>
    </div>
    <div id="A9_1">
      <div class="box">
        <p class="title">1 飞控接口定义</p>
        <div class="image">
          <img src="../../../assets/images/document_A9/image001.png" alt=""/>
        </div>
      </div>
    </div>
    <div id="A9_2">
      <div class="box">
        <p class="title">2 外设接口</p>
        <ul>
          <li>超声波：Ultrasonic接口</li>
          <li>光流串口：Uart5接口</li>
          <li>GPS串口：Uart8接口</li>
          <li>外置罗盘：IIC1接口</li>
          <li>OpenMV串口：Uart3接口</li>
          <li>数传串口：Uart1接口</li>
          <li>测距串口：Uart7接口</li>
        </ul>
      </div>
    </div>
    <div id="A9_3">
      <div class="box">
        <p class="title">3 飞控尺寸重量</p>
        <ul>
          <li>长5.5cm，宽4.4cm，高1.9cm</li>
          <li>重39克</li>
        </ul>
      </div>
    </div>
    <div id="A9_4">
      <div class="box">
        <p class="title">4 飞控安装</p>
      </div>
      <div class="box" id="A9_4_1">
        <p class="title1">4.1 飞控固定</p>
        <ul>
          <li>飞控支持免减震安装，需紧固在飞行器上，可使用3M胶固定飞控四个角即可，切勿只粘住飞控中间，飞控松动会影响飞行稳定性。</li>
        </ul>
      </div>
      <div class="box" id="A9_4_2">
        <p class="title1">4.2 连接电池</p>
        <div class="image">
          <img src="../../../assets/images/document_A9/image004.png" alt=""/>
        </div>
        <ul>
          <li>A9飞控支持双冗余供电，分别是powerADC端口和Power端口。</li>
          <li>以下面的电流计为例，电流计共有6个引脚，可以将其一路5V和一路GND接到飞控的Power端口，而剩余的5V、GND、CURRENT、VOLTAGE引脚则对应接到飞控的powerADC接口。</li>
        </ul>
        <div class="image_two image_A9">
          <img src="../../../assets/images/document_A9/image006.jpg" alt=""/>
          <img src="../../../assets/images/document_A9/image008.png" alt=""/>
        </div>
      </div>
      <div class="box" id="A9_4_3">
        <p class="title1">4.3 上电初始化</p>
        <ul>
          <li>飞控上电后会进行初始化，尽量保持静止状态，初始化过程会进行陀螺校准，此过程需要十几秒，等待初始化时状态灯蓝灯快闪烁，待状态灯绿色慢闪变化后代表自检完成。</li>
        </ul>
      </div>
      <div class="box" id="A9_4_4">
        <p class="title1">4.4 选择机型</p>
        <ul>
          <li>将飞控用USB或数传连接到电脑，打开ACFly调参地面站，在COM选择对应飞控端口号，点击连接。点击配置-参数调整-稳定飞行，下拉选择支持的机型。图片标明了电机序号(对应飞控 M1 - M8 引脚)和电机转向和机头方向。</li>
        </ul>
        <div class="image">
          <img src="../../../assets/images/document_A9/image010.jpg" alt=""/>
        </div>
      </div>
      <div class="box" id="A9_4_5">
        <p class="title1">4.5 电机转向及顺序</p>
        <ul>
          <li>以四旋翼为例，红色箭头为机头方向，飞控需按照下右图中的方向放置。飞控左上角电机为1号电机，六旋翼八旋翼类似，按逆时针顺序分别为1、2、3、4。1和3号电机逆时针旋转，2和4号电机顺时针旋转。将飞控按上述方向紧固在飞行器上（需固定飞控四个角）。然后按上述要求安装电机及电调。</li>
        </ul>
        <div class="image_two_A9">
          <img src="../../../assets/images/document_A9/image012.png" alt=""/>
          <img src="../../../assets/images/document_A9/image014.png" class="col" alt=""/>
          <img src="../../../assets/images/document_A9/jitou.png" class="small" alt=""/>
        </div>
      </div>
      <div class="box" id="A9_4_6">
        <p class="title1">4.6 连接电机电调</p>
        <p class="indent_2">按4.5中的电机顺序，分别将1、2、3、4…号电机所连接的电调的信号线分别插在飞控板的M1-M8口。S代表信号线（白色），5v代表电源线（红色），G代表地线（黑色）。</p>
        <div class="image">
          <img src="../../../assets/images/document_A9/image016.png" alt=""/>
        </div>
        <div class="image">
          <img src="../../../assets/images/document_A9/image018.png" alt=""/>
        </div>
      </div>
      <div class="box" id="A9_4_7">
        <p class="title1">4.7 连接遥控接收机</p>
        <ul>
          <li>如使用SBUS接收机，将接收机的SBUS信号线（3线）连接至飞控的SBUS口；</li>
          <li>如使用PPM接收机，将接收机的PPM信号线（3线）连接至飞控的PPM口。</li>
        </ul>
      </div>
    </div>
    <div id="A9_5">
      <div class="box">
        <p class="title">5 遥控器校准</p>
        <div class="image">
          <img src="../../../assets/images/document_A9/image020.jpg" alt=""/>
        </div>
        <ul>
          <li>	此飞控要求遥控器至少具有6个通道，包含4个摇杆和2个按钮，最多支持校准8个通道。校准的第一个按钮用来切换飞行模式。校准的第二、第三、第四个按钮用来设置执行任务、返航和安全按钮。</li>
          <li>	首先等待5.1中的飞控自检完成，飞控状态灯切换至绿灯慢闪。</li>
          <li>	将飞控用USB或者数传连接到电脑，打开ACFly地面站，点击连接。</li>
          <li>	打开遥控器，连接接收机，部分遥控器需要提前设置好遥控器的PPM/SBUS模式，根据需要设置2-3个按钮，如果飞控识别到接收机，则地面站会显示遥控各通道的原始数值，识别不到则会显示100%。</li>
          <li>	将四个摇杆通道回中，所要设置的2-3个按钮拨到通道值最大的位置。在ACFly地面站中选择美国手、中国手或者日本手后，点击“校准遥控器”按钮。飞控进入遥控器校准模式。地面站有动画和文字提示，按照提示做即可。</li>
          <li>	等待蓝灯闪烁两次（蜂鸣器响两声），表示已记录所有摇杆初始位置</li>
          <li>	按如下顺序操作遥控器：(每次摇杆操作后摇杆需回中)</li>
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
    <div id="A9_6">
      <div class="box">
        <p class="title">6 飞行模式设置</p>
        <div class="image">
          <img src="../../../assets/images/document_A9/image022.jpg" alt=""/>
        </div>
        <ul>
          <li>遥控校准的第一个按钮用来切换飞行模式，定高、定点、任务和返航模式。校准的第二、第三、第四个按钮用来设置执行任务、返航和安全按钮(电机急停按钮)。</li>
          <li>执行任务按钮是第二种进入任务模式的方式，在定位成功后按下执行任务按钮即可执行任务模式(需设置起飞点)。返航按钮则是执行一键返航功能。安全按钮为电机急停按钮。</li>
          <li>第二、三、四个按钮有按下和变化两种设置(默认按下即可)，选择按下则对应通道值最大时为按下，选择变化则无论按钮在哪档，只要有变化(三档按钮变化一档即可)则执行对应功能。</li>
          <li>若无需二次开发，解锁前模式都设置为32即可。</li>
          <li>要想任务模式执行的是二次开发飞行任务(需要用户自己实现，具体请看二次开发教程，比如利用openmv自动巡线)，则将对应的解锁前模式设置为35，即将上图模式3栏的32改成35。</li>
        </ul>
      </div>
    </div>
    <div id="A9_7">
      <div class="box">
        <p class="title">7 电机电调校准</p>
        <div class="image">
          <img src="../../../assets/images/document_A9/image024.jpg" alt=""/>
        </div>
        <p class="indent_2">为了安全起见，请先卸桨！！！</p>
        <ul>
          <li>打开ACFly调参地面站，将飞控通过USB或者数传与地面站连接，连接成功后，更改参数Init_CalibESC_T值为3，在配置-参数调整-电调参数栏目中，点击校准电调，飞控断电，然后用电池给飞控和电机同时上电，此时电调会发出滴-滴滴滴的声音，表示校准完成。</li>
          <li>校准完成后将参数Init_CalibESC_T值改回5(开DEO)或者9(关DEO)，自锁桨请设置为9。然后再重新上电一次完成DEO设置。</li>
          <li>天行者、铂金等非多旋翼电调必须进行起转油门设置，一般天行者起转油门设为15。其他多旋翼电调不用设置起转油门。修改完需点击写入电调参数。</li>
          <li>非线性系数和电调刹车设置有关，普通电调(未开刹车)非线性系数一般为0.45，开刹车一般为0.1，DJI电调一般为0.75。修改完需点击写入电调参数。</li>
        </ul>
      </div>
    </div>
    <div id="A9_8">
      <div class="box">
        <p class="title">8 加速度计校准</p>
        <ul>
          <li>出厂已进行过加速度计校准，一般情况无需用户校准。</li>
          <li>遥控器油门最小，偏航最左，俯仰最下，横滚最左，两秒左右将进入加速度校准模式。</li>
          <li>将无人机分别摆放六个面（不用按顺序，差不多水平即可）静止。每个面需静止放置 5 秒左右，静止放置时飞控指示灯显示蓝色，会由暗变亮指示当前进度，表示正在采集数据校准，完成一个面校准后指示灯会闪烁然后变红并且嘀一声，然后更换下一个面校准。全部六面校准完毕后会退出校准模式，绿色慢闪。灯红色表示当前面已经校准或者飞控在移动无法校准。</li>
          <li>需重启飞控校准才会生效。</li>
        </ul>
      </div>
    </div>
    <div id="A9_9">
      <div class="box">
        <p class="title">9 磁罗盘校准</p>
        <ul>
          <li>首先等待飞控初始化完成，飞控状态灯切换至绿色慢闪。遥控器油门最小，偏航最左，俯仰最上，横滚最左。两秒左右将进入磁罗盘校准模式。</li>
          <li>旋转无人机尽量多的三维角度，旋转时飞控指示灯显示蓝色，会由暗变亮指示当前进度。指示灯红色表示飞控没有在旋转无法校准，继续旋转无人机即可。</li>
          <li>完成后飞控指示灯闪烁并嘀一声表示校准完成，绿色慢闪。</li>
          <li>需重启飞控校准才会生效。</li>
        </ul>
      </div>
    </div>
    <div id="A9_10">
      <div class="box">
        <p class="title">10 陀螺校准</p>
        <ul>
          <li>首先等待5.1中的飞控初始化完成，飞控状态灯切换至绿色慢闪。</li>
          <li>遥控器油门最小，偏航最右，俯仰居中，横滚最右，两秒左右，滴一声进入陀螺校准模式，蓝绿快闪。</li>
          <li>飞控需放置静止不动等待5秒左右，滴滴后校准完成将退出校准模式，绿色慢闪。</li>
          <li>如果校准过程中飞控不静止，将会校准失败，出现红灯并滴一声退出校准，重新打杆校准即可。</li>
          <li>需重启飞控校准才会生效。</li>
        </ul>
      </div>
    </div>
    <div id="A9_11">
      <div class="box">
        <p class="title">11 电压检测参数校准</p>
        <div class="image">
          <img src="../../../assets/images/document_A9/image026.jpg" alt=""/>
        </div>
        <ul>
          <li>使用电池给飞控供电，需连接电压检测PowerADC接口。(参考4.2)。</li>
          <li>使用USB或者数传连接电脑，选择电池类型和填写电池节数。</li>
          <li>用BB响或者万用表测出电池的准确电压，填写到准确电压栏里，点击校准，然后再点击写入电池参数，等待参数写入成功。</li>
          <li>电流测量系数默认50。</li>
        </ul>
      </div>
    </div>
    <div id="A9_12">
      <div class="box">
        <p class="title">12 解锁上锁</p>
        <ul>
          <li>此为美国手和日本手的解锁手势，中国手的上锁手势。</li>
        </ul>
        <div class="image" style="width: 85%;">
          <img src="../../../assets/images/document_A9/image027.png" alt=""/>
        </div>
        <ul>
          <li>此为美国手和日本手的上锁手势，中国手的解锁手势。</li>
        </ul>
        <div class="image" style="width: 85%;">
          <img src="../../../assets/images/document_A9/image029.png" alt=""/>
        </div>
        <ul>
          <li>解锁后油门保持在中立位，电机依次从1、2、3...开始旋转到怠速（电调需已校准），如怠速不稳定，加大起转油门百分比AC_STThr。</li>
          <li>降落后拉低油门自动上锁（不要外八，以防打杆过快引起侧翻）。</li>
          <li>如遇到翻机或倒扣等炸鸡情况，可使用外八强制上锁，因此飞行过程中严禁外八操作！</li>
        </ul>
      </div>
    </div>
    <div id="A9_13">
      <div class="box">
        <p class="title">13 开发环境搭建</p>
      </div>
      <div class="box" id="A9_13_1">
        <p class="title1">13.1 编译环境（MDK）安装</p>
        <p>（1）MDK开发软件安装</p>
        <p class="indent_2">到keil官网<a href="http://www.keil.com/" class="link_style" target="_blank">http://www.keil.com/</a>的Download页面自行下载双击安装最新版MDK；</p>
        <p>（2）芯片支持包安装</p>
        <p class="indent_2">keil官网<a href="http://www.keil.com/pack" class="link_style" target="_blank">http://www.keil.com/pack</a>下载下图中的最新版本软件支持包并安装</p>
        <div class="image">
          <img src="../../../assets/images/document_A9/image032.jpg" alt=""/>
        </div>
      </div>
      <div class="box" id="A9_13_2">
        <p class="title1">13.2 编译环境设置</p>
        <p class="indent_2">在MDK界面下点击下列按钮进入工程配置选项：</p>
        <div class="image">
          <img src="../../../assets/images/document_A9/image034.jpg" alt=""/>
        </div>
        <p class="indent_2">在Target选项卡中选择V6开头的编译器（如果没有，可以安装MDK较新的版本或者前往<a href="https://developer.arm.com/products/software-development-tools/compilers/arm-compiler/downloads/version-6" class="link_style" target="_blank">https://developer.arm.com/products/software-development-tools/compilers/arm-compiler/downloads/version-6</a>网页单独下载编译器并安装进MDK），并取消Use MicroLib复选框；在C/C++(AC6)选项卡中进行下图中的配置：</p>
        <div class="image">
          <img src="../../../assets/images/document_A9/image036.jpg" alt=""/>
        </div>
        <div class="image">
          <img src="../../../assets/images/document_A9/image038.jpg" alt=""/>
        </div>
      </div>
    </div>
    <div id="A9_14">
      <div class="box">
        <p class="title">14 固件更新</p>
      </div>
      <div class="box" id="A9_14_1">
        <p class="title1">14.1 SD卡更新固件(需BootLoaderV7.0.5以及以上版本)</p>
        <p class="indent_2">飞控用USB连接电脑，电脑会弹出一个U盘(飞控SD卡)，将固件文件(.hex)放进U盘里的ACFLy文件夹中，然后重启飞控，等待固件升级完成，升级过程中飞控蓝灯快闪，此过程需12秒左右。固件更新完会自动删除ACFLy文件夹里的固件，以免下次上电重复更新。</p>
        <div class="image">
          <img src="../../../assets/images/document_A9/image040.jpg" alt=""/>
        </div>
      </div>
      <div class="box" id="A9_14_2">
        <p class="title1">14.2  USB更新固件</p>
        <ul>
          <li>网站下载ACFLY地面站压缩包，其中包括名为DFU驱动的压缩包，解压后安装对应的版本。Win10系统安装win8.1版本。</li>
          <li>打开ACFLY地面站，点击配置–固件更新–浏览 双击选择固件(.hex)</li>
          <li>插上飞控USB，等待烧录完成。</li>
          <li>注意：需要飞控先断电，地面站选择固件后10秒内将飞控通过USB连接至电脑。</li>
          <li>部分用户电脑无法烧录固件，需按照如下微软常用运行库合集。</li>
        </ul>
        <div class="image">
          <img src="../../../assets/images/document_A9/image042.jpg" alt=""/>
        </div>
      </div>
    </div>
    <div id="A9_15">
      <div class="box">
        <p class="title">15 高级调参</p>
        <div class="image">
          <img src="../../../assets/images/document_A9/image044.jpg" alt=""/>
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
        <div class="image_word">
          <img src="../../../assets/images/document_A9/image045.png" alt=""/>
          <p class="explain">此参数表仅做参考，根据实际效果细调</p>
        </div>
      </div>
    </div>
    <div id="A9_16">
      <div class="box">
        <p class="title">16 常用参数表</p>
        <table class="table1">
          <tr>
            <th>参数名</th>
            <th>定义</th>
            <th>单位</th>
            <th>说明</th>
          </tr>
          <tr>
            <td>AC_UAVType</td>
            <td>飞行器类型</td>
            <td></td>
            <td class="word_left">10：四旋翼 X 型；11：六旋翼 X 型；<br/>12：八旋翼 X 型；15：四旋翼十字型；<br/>20：四旋翼 Double 十字型；32：六旋翼异构</td>
          </tr>
          <tr>
            <td>AC_STThr</td>
            <td>怠速油门</td>
            <td>%</td>
            <td class="word_left">默认10%</td>
          </tr>
          <tr>
            <td>Init_CalibESC_T</td>
            <td>电调校准延时</td>
            <td>秒</td>
            <td class="word_left">3：电调校准<br/>5：电调开 DEO<br/>9：电调关 DEO</td>
          </tr>
          <tr>
            <td>Bat_VoltMKp</td>
            <td>电压比例系数</td>
            <td>V/V</td>
            <td class="word_left">标准18.4</td>
          </tr>
          <tr>
            <td>Bat_STVoltage</td>
            <td>电池标准电压</td>
            <td>V</td>
            <td class="word_left">飞行器使用电池的标准电压，如6s电池为22.8v，4S电池为15.2V，3S电池为11.6V。此值用于动态调整姿态控制器b参数。</td>
          </tr>
          <tr>
            <td>Bat_CurrentMKp</td>
            <td>电流比例系数</td>
            <td>A/V</td>
            <td class="word_left">标准50</td>
          </tr>
          <tr>
            <td>Bat_Capacity</td>
            <td>电池容量</td>
            <td>mAh</td>
            <td class="word_left">暂未使用</td>
          </tr>
          <tr>
            <td>Bat_VoltP0 ~ Bat_VoltP10</td>
            <td>十级电量百分比对应的电压</td>
            <td>V</td>
            <td class="word_left">相对Bat_STVoltage的电压偏移值。Bat_VoltP0为电量为0%时的电压偏移值，Bat_VoltP1为电量为10%时的电压偏移值。以此类推至Bat_VoltP10为电量为100%时的电压偏移值。</td>
          </tr>
          <tr>
            <td>Sf_FcRTLVolt</td>
            <td>返航电压</td>
            <td>V</td>
            <td class="word_left">低于此电压时自动返航</td>
          </tr>
          <tr>
            <td>Sf_FcLandVolt</td>
            <td>降落电压</td>
            <td>V</td>
            <td class="word_left">低于此电压时自动降落</td>
          </tr>
          <tr>
            <td>Aux_12Func</td>
            <td>通道12功能</td>
            <td></td>
            <td class="word_left">33：相机拍照</td>
          </tr>
          <tr>
            <td>Aux_CamOffPwm</td>
            <td>拍照关</td>
            <td>PWM</td>
            <td class="word_left">默认1100；使用电平拍照时为60000</td>
          </tr>
          <tr>
            <td>Aux_CamOnPwm</td>
            <td>拍照开</td>
            <td>PWM</td>
            <td class="word_left">默认2000；使用电平拍照时为0</td>
          </tr>
          <tr>
            <td>Aux_CamShTime</td>
            <td>拍照时间</td>
            <td>秒</td>
            <td class="word_left">建议0.1</td>
          </tr>
          <tr>
            <td>Aux_CamTrigEna</td>
            <td>热靴触发</td>
            <td></td>
            <td class="word_left">0：禁用；1：启用</td>
          </tr>
          <tr>
            <td>PC_AutoVXY</td>
            <td>航线水平速度</td>
            <td>cm/s</td>
            <td class="word_left">默认1000,10m/s</td>
          </tr>
          <tr>
            <td>PC_AutoVXYZ</td>
            <td>航线三维限制速度</td>
            <td>cm/s</td>
            <td class="word_left">默认1000,10m/s，建议与PC_AutoVXY一致</td>
          </tr>
          <tr>
            <td>PC_AutoVZUp</td>
            <td>航线上升速度</td>
            <td>cm/s</td>
            <td class="word_left">默认450,4.5m/s</td>
          </tr>
          <tr>
            <td>PC_AutoVZDn</td>
            <td>航线下降速度</td>
            <td>cm/s</td>
            <td class="word_left">默认350,3.5m/s</td>
          </tr>
          <tr>
            <td>PC_LandVel</td>
            <td>末端降落速度</td>
            <td>cm/s</td>
            <td class="word_left">距离地面10米内的末端降落速度，建议30-50cm/s</td>
          </tr>
          <tr>
            <td>Sf_RtSpeed</td>
            <td>返航速度</td>
            <td>cm/s</td>
            <td class="word_left">默认1000,10m/s</td>
          </tr>
          <tr>
            <td>Sf_GbRtHRange</td>
            <td>返航高度的作用范围（距离家）</td>
            <td>cm</td>
            <td class="word_left">范围内按当前飞行高度直接返航，忽略返航高度参数。<br/>范围外自动判断，如果当前高度低于返航高度，则先升高再返航，如果当前高度高于返航高度，则按当前高度返航。<br/>默认3000,即30m</td>
          </tr>
          <tr>
            <td>Sf_GbRtHeight</td>
            <td>返航高度</td>
            <td>cm</td>
            <td class="word_left">默认5000,50m</td>
          </tr>
          <tr>
            <td>PC_maxVelXY</td>
            <td>手动控制时的最大水平速度</td>
            <td>cm/s</td>
            <td class="word_left">默认1500,15m/s</td>
          </tr>
          <tr>
            <td>PC_maxVelUp</td>
            <td>手动控制时的最大上升速度</td>
            <td>cm/s</td>
            <td class="word_left">默认500,5m/s</td>
          </tr>
          <tr>
            <td>PC_maxVelDn</td>
            <td>手动控制时的最大下降速度</td>
            <td>cm/s</td>
            <td class="word_left">默认400,4m/s</td>
          </tr>
          <tr>
            <td>AC_maxLean</td>
            <td>最大倾斜角度</td>
            <td>°</td>
            <td class="word_left">默认35°</td>
          </tr>
          <tr>
            <td>AC_Pitch_b</td>
            <td>俯仰控制b参数</td>
            <td></td>
            <td class="word_left">默认5.5，高频振荡发抖需将b参数调大，打杆软绵绵没力需将b参数调小</td>
          </tr>
          <tr>
            <td>AC_Roll_b</td>
            <td>横滚控制b参数</td>
            <td></td>
            <td class="word_left">默认5.5，高频振荡发抖需将b参数调大，打杆软绵绵没力需将b参数调小</td>
          </tr>
          <tr>
            <td>GPS0_delay<br/>GPS1_delay(RTK)</td>
            <td>GPS延时</td>
            <td>s</td>
            <td class="word_left">默认0.1<br/>M8N更新频率为5Hz，延时为0.1<br/>F9P更新频率为10Hz，延时为0.05</td>
          </tr>
          <tr>
            <td>GPS0_GNSS<br/>GPS1_ GNSS (RTK)</td>
            <td>GPS卫星配置</td>
            <td></td>
            <td class="word_left">默认0，不改变<br/>GPS+GLONASS:  65<br/>GPS+GLONASS+GALILEO:  69<br/>GPS+BEIDOU:  9<br/>GPS+BEIDOU+GALILEO: 13(M8N推荐)<br/>GPS+GLONASS+BEIDOU+GALILEO: 77(仅F9P适用)</td>
          </tr>
          <tr>
            <td>LK_Port7Baud</td>
            <td>数传波特率(UART7)</td>
            <td></td>
            <td class="word_left">默认115200</td>
          </tr>
          <tr>
            <td>Aux_1Func-<br/>Aux_11Func</td>
            <td>对应飞控C1-C11通道 </td>
            <td></td>
            <td class="word_left">1-16: 映射遥控器对应通。1-16:对应遥控通道1-16<br/>25-40: 用遥控器对应通道进行相机快门触发，25-40对应遥控通道1-16。<br/>49-64: 用遥控器对应通道进行云台控制。49-64对应遥控通道1-16。</td>
          </tr>
        </table>
      </div>
    </div>
    <div id="A9_17">
      <div class="box">
        <p class="title">17 自动返航策略</p>
        <p>一键返航、低电量自动返航和失控自动返航都遵循以下返航策略：</p>
        <ul>
          <li>无人机在距Home点Sf_GbRtHRange(默认30米)的水平距离范围内无视返航高度参数，直接返航。</li>
          <li>范围外按照Sf_GbRtHeight高度参数进行判断。当前高度低于Sf_GbRtHeight时，无人机先升高至Sf_GbRtHeight，再按照Sf_RtSpeed速度进行返航。当前高度高于Sf_GbRtHeight时，无人机直接以当前高度，按照Sf_RtSpeed速度进行返航。</li>
        </ul>
      </div>
      <div class="box" id="A9_17_1">
        <p class="title1">17.1 一键自动返航</p>
        <ul>
          <li>当设置了一键返航按钮并按下后，无人机开始自动返航，返航过程可以打任意摇杆中断，如果一键返航设置的是按下，中断后如果3秒内不打摇杆则会继续自动返航。如果一键返航设置的是变化，则打杆中断会取消返航，需要重新拨一下一键返航按钮继续返航。</li>
        </ul>
      </div>
      <div class="box" id="A9_17_2">
        <p class="title1">17.2 低电量自动返航或降落</p>
        <ul>
          <li>设置安全模式参数Sf_FcLandVolt 和Sf_FcRTLVolt，单位：伏。</li>
          <li>当无人机检测电池电压低于Sf_FcRTLVolt时，无人机将自动返航。</li>
          <li>当无人机检测电池电压低于Sf_FcLandVolt时，无人机将自动降落。</li>
          <li>如果上面两个参数设置的值一样，则会优先降落。</li>
        </ul>
      </div>
      <div class="box" id="A9_17_3">
        <p class="title1">17.3 失控自动返航</p>
        <ul>
          <li>如果无人机不是在任务模式，飞行过程中遥控器断联无人机会自动返航，使用PPM接收机则不支持此功能(因为PPM接收机断联后仍有输出)，返航过程中遥控器恢复连接会继续返航，可手动打杆夺取控制权。 </li>
          <li>执行任务过程中遥控器断联后无人机会继续执行任务(需有定位)，执行完任务后或者电量低于Sf_FcRTLVolt时无人机会自动返航。</li>
          <li>如果无定位且遥控断联，无人机则会自动降落。</li>
        </ul>
      </div>
    </div>
    <div id="A9_18">
      <div class="box">
        <p class="title">18 航线任务设置</p>
        <ul>
          <li>飞控使用的是mavlink协议，支持主流开源地面站设置航点，包括Mission Planner、QGC(电脑和手机版都支持)等。最多设置65536个航点。</li>
          <li>航点设置完成，无人机定位成功(蓝绿交替闪烁)后，模式按钮打到任务模式挡位，若设置的第一个任务是起飞任务(起飞航点)，则解锁无人机即可自动起飞执行任务。 若第一个任务不是起飞任务，则需手动起飞后无人机再自动执行任务。</li>
        </ul>
      </div>
    </div>
    <div id="A9_19">
      <div class="box">
        <p class="title">19 相机触发拍照配置</p>
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
            <td class="word_left">33：相机拍照</td>
          </tr>
          <tr>
            <td>Aux_CamOffPwm</td>
            <td>拍照关</td>
            <td>PWM</td>
            <td class="word_left">默认1100；使用电平拍照时为60000</td>
          </tr>
          <tr>
            <td>Aux_CamOnPwm</td>
            <td>拍照开</td>
            <td>PWM</td>
            <td class="word_left">默认2000；使用电平拍照时为0</td>
          </tr>
          <tr>
            <td>Aux_CamShTime</td>
            <td>拍照时间</td>
            <td>秒</td>
            <td class="word_left">建议0.1</td>
          </tr>
          <tr>
            <td>Aux_CamTrigEna</td>
            <td>热靴触发</td>
            <td></td>
            <td class="word_left">0：禁用；1：启用</td>
          </tr>
        </table>
        <ul>
          <li>地面测试拍照功能可使用MP地面站，在地图上鼠标点击右键选择现在按下相机快门即可，拍照成功POS会记录到飞控内部SD卡中，可插USB导出POS记录查看。</li>
        </ul>
      </div>
    </div>
    <div id="A9_20">
      <div class="box">
        <p class="title">20 飞控及定位传感器安装偏移</p>
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
            <td class="word_left">飞控安装x轴距离飞机中心的偏移</td>
          </tr>
          <tr>
            <td>POfs_Fc_y</td>
            <td>安装偏移</td>
            <td>cm</td>
            <td class="word_left">飞控安装y轴距离飞机中心的偏移</td>
          </tr>
          <tr>
            <td>POfs_Fc_z</td>
            <td>安装偏移</td>
            <td>cm</td>
            <td class="word_left">飞控安装z轴距离飞机中心的偏移</td>
          </tr>
          <tr>
            <td>POfs_S0_x -<br/>POfs_S15_x</td>
            <td>安装偏移</td>
            <td>cm</td>
            <td class="word_left">0-15号位置传感器安装x轴距离飞控的偏移</td>
          </tr>
          <tr>
            <td>POfs_S0_y - <br/>POfs_S15_y</td>
            <td>安装偏移</td>
            <td>cm</td>
            <td class="word_left">0-15号位置传感器安装y轴距离飞控的偏移</td>
          </tr>
          <tr>
            <td>POfs_S0_z - <br/>POfs_S15_z</td>
            <td>安装偏移</td>
            <td></td>
            <td class="word_left"></td>
          </tr>
        </table>
        <table class="table1" style="margin-top: 40px;">
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
    <div id="A9_21">
      <div class="box">
        <p class="title">21 代码框架</p>
      </div>
      <div class="box" id="A9_21_1">
        <p class="title1">21.1 代码总体布局</p>
        <p class="indent_2">本飞控代码已经分组在14个大类里，如图所示。建议看的部分：（3）驱动中的Sensors接口及Receiver接口；（5）Basic中的时间实现；（7）解算系统中的解算系统接口；（11）模式中的飞行模式；（12）控制系统中的控制系统接口。</p>
        <div class="image_col">
          <img src="../../../assets/images/document_A9/image047.png" alt=""/>
        </div>
        <p>（1）CMSIS（板级支持包）</p>
        <p class="indent_2">板级支持文件，最底层的库，不用看基本不用修改（可以修改startup.s里面的堆栈设置）。</p>
        <p>（2）Main（主函数文件）</p>
        <p class="indent_2">主函数包括：</p>
        <ul>
          <li>初始化所有需要用到的外设；</li>
          <li>开启任务调度器；</li>
          <li>错误中断拉低所有输出。</li>
        </ul>
        <p>（3）Driver（驱动）</p>
        <p class="indent_2">驱动包含：</p>
        <ul>
          <li>外设的初始化配置（drv_开头文件）</li>
          <li>传感器接口，包括（建议细看，二次开发必备）：</li>
          <li style="list-style: none">
            <ul>
              <li>Sensors.c：传感器接口实现函数</li>
              <li>Sensors.h：传感器读取接口函数声明，建议细看</li>
              <li>Sensors_Backend.h：传感器注册、更新接口函数声明，建议细看</li>
            </ul>
          </li>
          <li>接收机接口，包括：</li>
          <li style="list-style: none">
            <ul>
              <li>Receiver.c：接收机接口实现函数</li>
              <li>Receiver.h：接收机读取接口函数声明，建议细看</li>
            </ul>
          </li>
        </ul>
        <p>（4）HAL_Library</p>
        <p class="indent_2">32HAL库，二次开发需要用到的但现工程没有的请自己加进工程。</p>
        <p>（5）Basic（基本）</p>
        <p class="indent_2">Basic.c里面初始化TIM5定时器用于计时，实现了TIME结构体用于时间计算，其他部分程序所有时间相关操作都是基于TIME，建议细看。</p>
        <p>（6）Math（数学库）</p>
        <p class="indent_2">包含四元数、三维向量运算，以及一些简单的数学运算，重力等常量的定义。</p>
        <p>（7）MeasurementSystem（解算系统）</p>
        <p class="indent_2">姿态解算及位置解算。</p>
        <p class="indent_2">建议细看解算系统接口MeasurementSystem.h，包含解算结果的获取函数声明及使用说明。</p>
        <p>（8）Filters（滤波器）</p>
        <p class="indent_2">包含巴特沃斯低通滤波器、TD4非线性滤波器实现。</p>
        <p>（9）DataStructure（数据结构）</p>
        <p class="indent_2">包含环形缓冲区的实现。</p>
        <p>（10）Communic（通讯）</p>
        <p class="indent_2">包含Mavlink库、调试通讯文件Debug.c、通用端口交互文件Commulink.c（驱动程序可通过Commulink.h里的函数注册端口成为通用端口用于mavlink等标准通讯）</p>
        <p>（11）Modes（模式）</p>
        <p class="indent_2">建议细看飞行模式！二次开发必备</p>
        <ul>
          <li>0-9号为非飞行非校准的其他模式</li>
          <li>10-19号为校准模式</li>
          <li>30-39号为飞行模式</li>
          <li>M00为初始化模式，等待解算系统初始化完成</li>
        </ul>
        <p>（12）ControlSystem（控制系统）</p>
        <p class="indent_2">建议细看ControlSystem.h！二次开发必备</p>
        <p class="indent_2">ControlSystem.h包含控制系统的API接口。Ctrl_Attitude和Ctrl_Position分别为姿态和位置控制器。</p>
      </div>
    </div>
    <div id="A9_22">
      <div class="box">
        <p class="title">22 代码接口</p>
        <ul>
          <li>本代码接口中所有位置、速度、加速度数据单位均为cm厘米</li>
          <li>本代码接口中所有角度、角速度、角加速度数据单位均为rad弧度</li>
          <li>本代码接口中所有磁场数据单位均为Gauss高斯</li>
          <li>本飞控模块化编程，不同模块通过接口进行访问操作，此文档必看！！</li>
          <li>此文档包括：传感器接口、接收机接口</li>
        </ul>
      </div>
      <div class="box" id="A9_22_1">
        <p class="title1">22.1 传感器接口</p>
        <ul>
          <li>位于Drivers目录下</li>
          <li>传感器接口分为：传感器读取接口 和 传感器注册及更新接口。</li>
          <li>函数声明分别位于：Sensors.h和Sensors_Backend.h里</li>
          <li>函数定义位于：Sensors.c里</li>
        </ul>
        <p>（1）IMU传感器定义（Sensors.h）</p>
        <p class="indent_2">IMU传感器包括加速度计、陀螺仪、磁力计，每种各支持3个。定义如下：</p>
        <div class="image">
          <img src="../../../assets/images/document_A9/image049.png" alt=""/>
        </div>
        <p>（2）位置传感器定义（Sensors.h）</p>
        <p class="indent_2">位置传感器包括气压、光流、超声波等，本飞控最多支持同时存在8个定位传感器。定义如下：</p>
        <div class="image">
          <img src="../../../assets/images/document_A9/image051.png" alt=""/>
        </div>
        <p class="indent_2">其中：</p>
        <ul>
          <li>sensor_type定义了传感器是经纬度定位、相对定位，还是测距定位传感器。</li>
          <li>sensor_DataType定义了传感器的数据类型：例如z轴位置数据，xy速度数据等。</li>
          <li>velocity_data_frame针对速度传感器，定义了速度传感器所测速度所在的坐标系。</li>
        </ul>
        <p>（3）IMU传感器读取接口（Sensors.h）</p>
        <p class="indent_2">IMU传感器读取接口会返回const的IMU传感器结构体：</p>
        <div class="image">
          <img src="../../../assets/images/document_A9/image053.png" alt=""/>
        </div>
        <p>（4）IMU传感器注册、更新接口（Sensors_Backend.h）</p>
        <p class="indent_2">在IMU传感器更新前，首先调用注册函数进行注册，设置传感器的灵敏度。</p>
        <p class="indent_2">注册完成后把IMU传感器编号及原始数据送入update接口即可完成更新。</p>
        <div class="image">
          <img src="../../../assets/images/document_A9/image055.png" alt=""/>
        </div>
        <p>（5）位置传感器读取接口（Sensors.h）</p>
        <p class="indent_2">位置传感器读取接口会返回const的位置传感器结构体：</p>
        <div class="image">
          <img src="../../../assets/images/document_A9/image057.png" alt=""/>
        </div>
        <p>（6）位置传感器注册、更新接口（Sensors_Backend.h）</p>
        <p class="indent_2">在位置传感器更新前，首先调用注册函数进行注册，设置传感器的类型等参数：</p>
        <div class="image">
          <img src="../../../assets/images/document_A9/image059.png" alt=""/>
        </div>
        <p class="indent_2">如果位置传感器很久没有更新，MS_Main解算任务中会自动把此传感器取消注册。</p>
        <p class="indent_2">注册完成后把位置传感器编号及与传感器sensor_data_type对应的数据送入update接口即可完成更新：</p>
        <div class="image">
          <img src="../../../assets/images/document_A9/image061.png" alt=""/>
        </div>
      </div>
      <div class="box" id="A9_22_2">
        <p class="title1">22.2 接收机接口</p>
        <ul>
          <li>位于Drivers目录下</li>
          <li>接收机接口分为：接收机读取接口 和 接收机更新接口。</li>
          <li>函数声明分别位于：Receiver.h和Receiver _Backend.h里</li>
          <li>函数定义位于：Receiver.c里</li>
        </ul>
        <p>（1）接收机定义（Receiver.h）</p>
        <p class="indent_2">接收机包含SBUS、PPM等协议的接收机（至少具有6个通道），定义如下：</p>
        <div class="image">
          <img src="../../../assets/images/document_A9/image063.png" alt=""/>
        </div>
        <p>（2）接收机读取接口（Receiver.h）</p>
        <ul>
          <li>get_Receiver会返回指定接收机的const结构体</li>
          <li>get_current_Receiver会返回当前接收机的const结构体（自动选择序号最低的可用接收机，无可用接收机是返回随机接收机）</li>
          <li>get_current_Reciever_Type返回当前接收机的类型（SBUS接收机、PPM接收机等）</li>
        </ul>
        <div class="image">
          <img src="../../../assets/images/document_A9/image065.png" alt=""/>
        </div>
        <p>（3）接收机更新接口（Receiver_Backend.h）</p>
        <p class="indent_2">把接收机类型、原始数据、是否已连接等信息发送给接口即可完成接收机数据更新。</p>
        <div class="image">
          <img src="../../../assets/images/document_A9/image067.png" alt=""/>
        </div>
      </div>
    </div>
    <div id="A9_23">
      <div class="box">
        <p class="title">23 二次开发视频教程链接</p>
        <p>
          <a href="https://www.bilibili.com/video/BV1Jk4y167JP?from=search&seid=7663897755200972687" class="link_style" target="_blank">https://www.bilibili.com/video/BV1Jk4y167JP?from=search&seid=7663897755200972687</a>
        </p>
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
  @import "../../../assets/style/document_v3";
</style>
