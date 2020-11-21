<template>
  <div id="document_diary">
    <div class="box">
      <p class="title">版本更新日志</p>
      <table class="table5">
        <tr>
          <th>日期</th>
          <th>新版本</th>
          <th>旧版本</th>
          <th>更新内容</th>
        </tr>
        <tr>
          <td class="center">20200427</td>
          <td class="center">V1.1</td>
          <td class="center">——</td>
          <td style="padding-left:20px;">——</td>
        </tr>
        <tr>
          <td class="center">20200623</td>
          <td class="center">V1.3</td>
          <td class="center">V1.1</td>
          <td>
            <ul>
              <li>更新第7.2节，参数分类增加了PC---位置控制参数。</li>
              <li>更新了7.3节，增加了调参教程内容。</li>
              <li>更新了7.4节，增加了姿态参数及其说明。</li>
              <li>更新了7.5节，增加了一些电池参数及其说明。</li>
              <li>更新了7.6节，增加了位置控制参数及其说明。</li>
              <li>更新了7.7节，增加了安全模式参数及其说明。(自动返航参数)</li>
              <li>增加了第8大节：航点飞行和一键返航功能使用说明。</li>
              <li>更新了11大节，飞控供电接口说明。</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td class="center">20200721</td>
          <td class="center">V1.4</td>
          <td class="center">V1.3</td>
          <td>
            <ul>
              <li>更新第11节，优化供电接口说明</li>
              <li>优化手册格式内容，条理更加清晰</li>
              <li>优化手册图片内容，图片更加高清</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td class="center">20200910</td>
          <td class="center">V1.5</td>
          <td class="center">V1.4</td>
          <td>
            <ul>
              <li>更新第五章校准流程</li>
              <li>优化手册相关细节</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td class="center">20200925</td>
          <td class="center">V1.6</td>
          <td class="center">V1.5</td>
          <td>
            <ul>
              <li>更新第五章5.4陀螺校准</li>
              <li>优化配图说明</li>
              <li>修改部分细节表述</li>
            </ul>
          </td>
        </tr>
      </table>
      <p>ACFLY飞行控制提供技术支持</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "document_diary",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../assets/style/document_v2';
</style>
