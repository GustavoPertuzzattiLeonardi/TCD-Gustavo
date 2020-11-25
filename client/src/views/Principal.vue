<template>
  <div id="app">
    <Header/>
        <img src="../assets/images/Angus.png" alt="">
   <sidebar-menu :menu="menu" />
  </div >
 
</template>

<script>
import Header from "../components/Header";
import { SidebarMenu } from 'vue-sidebar-menu'

export default {
  name: "Principal",
  components: {
    Header,
    SidebarMenu    
  },
  
  data() {
    return {
      menu: [
        {
            header: true,
            title: 'Menu',
            hiddenOnCollapse: true
        },
        {
            href: '/Principal',
            title: 'Início',
            icon: 'fa fa-chart-area'
        },        
        {
            href: '/Gado',
            title: 'Gado',
            icon: 'fa'
        },
        {
            href: '/Piquete',
            title: 'Piquete',
            icon: 'fa'
        },
        {
            href: '/AFD',
            title: 'Afazeres Diários',
            icon: 'fa'
        },
        {
            href: '/Login',
            title: 'Sair',
            icon: 'fa'
        }
      ]
      }
    }  
};
</script>

<style>

</style>
