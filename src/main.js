import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueUeditorWrap from 'vue-ueditor-wrap' // ES6 Module

Vue.config.productionTip = false
Vue.component('vue-ueditor-wrap', VueUeditorWrap)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
