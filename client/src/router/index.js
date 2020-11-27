import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue';
import Principal from '../views/Principal.vue';
import CadastroUser from '../views/CadastroUser.vue';
import Gado from '../views/Gado.vue';
import Piquete from '../views/Piquete.vue';
import AFD from '../views/AFD.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Principal',
    component: Principal
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }, 
  {
    path: '/principal',
    name: 'Principal',
    component: Principal
  }, 
  {
    path: '/CadastroUser',
    name: 'CadastroUser',
    component: CadastroUser
  }, 
  {
    path: '/Gado',
    name: 'Gado',
    component: Gado
  }, 
  {
    path: '/piquete',
    name: 'Piquete',
    component: Piquete
  }, 
  {
    path: '/afd',
    name: 'AFD',
    component: AFD
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
