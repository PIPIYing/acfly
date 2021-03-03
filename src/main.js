import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VDistpicker from 'v-distpicker'
import axios from "axios";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.component('v-distpicker', VDistpicker)

Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://borui.test.utools.club';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//请求拦截器
axios.interceptors.request.use((config) => {
  return config;
}, function (error) {
  return Promise.reject(error);
});

//响应拦截器
axios.interceptors.response.use((config) => {
  const data = config.data;
  return data;
}, function (error) {
  /*const code = error.response.data.code;
  if(code === 401) {
    alert("登录已过期，请重新登录后再访问主页");
    location.href = '/login';
  }*/
  return Promise.reject(error);
});

