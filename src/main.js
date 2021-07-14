import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'
import '@/mock/index'
Vue.use(ElementUI)
Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
