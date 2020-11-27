import Vue from 'vue'
import Vuex from 'vuex'
import VueKinesis from 'vue-kinesis'
import auth from './modules/auth';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

Vue.use(Vuex)
Vue.use(VueKinesis)



export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth    
  }
})
