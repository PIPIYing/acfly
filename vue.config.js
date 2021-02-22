module.exports = {
  devServer: {
      proxy : {
          "/api" : {
              target: "http://borui.cn.utools.club",
              /*changeOrigin: true,*/
              /*ws : true,*/
              pathRewrite: {
                '^/api': ''
              }
          }
      }
  }
}
