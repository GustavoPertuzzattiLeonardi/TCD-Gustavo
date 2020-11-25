import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:3000'

new Vue({
  router,
  store,
  VueSidebarMenu,
  render: h => h(App)
}).$mount('#app')
