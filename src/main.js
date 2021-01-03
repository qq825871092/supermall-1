import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'

import lazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

Vue.use(toast)

Vue.config.productionTip = false

//添加时间总线
Vue.prototype.$bus  = new Vue()



// 解决移动端300ms延迟
FastClick.attach(document.body)

Vue.use(lazyLoad,{
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
