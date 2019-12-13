import Vue from 'vue'
import AppLayout from './app-layout.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(AppLayout)
}).$mount('#app')
