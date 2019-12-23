import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/icon.css' // 引入图标文件
import './assets/font/cabin.css' // 引入字体文件
import './assets/style/global.scss' // 引入全局css样式文件

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
