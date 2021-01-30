<template>
  <div id="document_update">
    <div id="update_C9">
      <div class="box">
        <p class="title">C9固件说明</p>
        <p>A9-1.6.1-official-20201215.hex版本固件说明：</p>
        <p>1. 支持四旋翼X型、六旋翼X型、八旋翼X型、四旋翼十字型、四旋翼Double十字型。</p>
        <p>2. 支持航线任务设置和飞行、一键返航、低电量返航或降落、失控返航。</p>
        <p>3. 支持热靴拍照和最高65536个航点。</p>
        <p>4. 支持电池电压检测回传，电压检测范围：0-60V。</p>
        <p>5. 支持定点、定高、返航和任务模式。</p>
        <p>6. 支持USB虚拟串口和U盘，高速读取POS记录和飞行Log。</p>
        <p>7. 支持双GPS(UBX协议)，支持GPS搜星配置。</p>
        <p>8. 支持飞控和定位传感器安装偏移设置。</p>
        <p>9. 支持电调DEO配置。</p>
        <p>10. 抗磁干扰。</p>
        <div class="btnBox">
          <div class="btn">
            <a href="#">立即下载</a>
          </div>
        </div>
      </div>
    </div>
    <div id="update_A9">
      <div class="box">
        <p class="title">A9固件说明</p>
        <p class="title2">USB更新固件</p>
        <ul>
          <li>到售后群下载名为DFU驱动的压缩包，解压后安装对应的版本。Win10系统安装win8.1版本。</li>
          <li>到售后群下载ACFLY地面站，点击配置 – 固件更新 – 浏览 – 双击选择固件(.hex)</li>
          <li>插上飞控USB，等待烧录完成。</li>
          <li style="list-style: none;">注意：需要飞控先断电，地面站选择固件后10秒内将飞控通过USB连接至电脑。</li>
          <li>部分使用32位 windows7 系统的用户，若经过上述步骤地面站仍然无法连接飞控，则在售后群群文件中下载MissionPlanner_PX4地面站_驱动进行安装，安装完成打开该软件再关闭，即可完成ACFLY地面站驱动的安装。</li>
        </ul>
        <div class="image">
          <img src="../../../assets/images/document_A9/1.png" alt=""/>
        </div>
        <p class="title2">SD卡更新固件</p>
        <p class="indent_2">此功能需更新ACFLy-A9-BootLoaderV7.0.4-publish和A9最新固件A9-1.6.1-official-20201215。</p>
        <p class="indent_2">飞控用USB连接电脑，电脑会弹出一个U盘(SD卡)，将固件文件(.hex)放进U盘里的ACFLy文件夹中，然后重启飞控，等待固件升级完成，升级过程中飞控蓝灯快闪，此过程需半分钟左右。</p>
        <br/>
        <p>A9-1.6.1-official-20201215.hex版本固件说明：</p>
        <p>1.支持四旋翼X型、六旋翼X型、八旋翼X型、四旋翼十字型、四旋翼Double十字型。</p>
        <p>2.支持航线任务设置和飞行、一键返航、低电量返航或降落、失控返航和相机触发拍照。</p>
        <p>3.支持定点、定高、返航和任务模式。</p>
        <p>4.支持GPS搜星配置。</p>
        <p>5.支持飞控和定位传感器安装偏移设置。</p>
        <p>6.支持电调DEO配置。</p>
        <p>7.支持电池电压检测回传。</p>
        <div class="btnBox">
          <div class="btn">
            <a href="#">立即下载</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document_update",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import "../../../assets/style/document_v3";
</style>
