import Vue from 'vue'
// import './plugins/axios.js'
import App from './App.vue'
import router from './router'

import './plugins/element.js'
import './assets/global.css'
import './assets/icon/iconfont.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  console.log(config)
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
