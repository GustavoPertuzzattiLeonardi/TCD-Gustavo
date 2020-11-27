<template>
  <div class="">
      <p>Piquete </p>
          <Header/>
   <sidebar-menu :menu="menu" />


  <div class="contentCadastros">

    <div class="">
      <!--FORMULÁRIO DE PIQUETE-->
      <div id="cadastroNormal">
        <form method="post" @submit.prevent="creatGado">
          
          <p>
            <label for="brinco">Cod. Piquete</label>
            <input type="integer" v-model="piquete.piquete"/>
          </p>

          <p>
            <label for="peso">Capacidade</label>
            <input type="text" v-model="piquete.capacidade"/>
          </p>

         <p>
            <label for="Obs:">Observações</label>
            <input type="text" v-model="piquete.text"/>
          </p>          

          <p></p>
        
          <input type="submit" value="Criar" />

        </form>
      </div>
    </div>
  </div>
   
  </div>
</template>

<script>
import Header from "../components/Header";
import { SidebarMenu } from 'vue-sidebar-menu'
import axios from "axios";

export default {
  name: "Piquete",
  components: {
    Header,
    SidebarMenu    
  },
  
  data() { return {
      piquete: {
          piquete: null,
          capacidade: null,
          text: null
      },
      menu: [
        {
            header: true,
            title: 'Menu',
            hiddenOnCollapse: true
        },
        {
            href: '/Principal',
            title: 'Início',
            icon: 'fa'
        },        
        {
            href: '/Gado',
            title: 'Gado',
            icon: 'fa'            
        },
        {
            href: '/Piquete',
            title: 'Piquete',
            icon: 'fa fa-chart-area'
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
    },

  methods: {
    creatGado() {
       const data = {
           piquete: this.piquete
       }   
      axios.post("/Piquetes", data).then(response => {
        console.log("response", response);
        this.cadastros = response.data;
      });
    }
  }  
};

</script>

<style>

.contentCadastros {
  width: 900px;
  margin-top: 90px;
  margin-left: 500px; 
  position: absolute;
}

#cadastroNormal {
  margin-top: 200px;;
  top: 0px;
  width: 88%;
  padding: 18px 6% 60px 6%;
  margin: 0 0 35px 0;
  background: rgb(247, 247, 247);
  border: 1px solid rgba(147, 184, 189, 0.8);


  border-radius: 5px;

  -webkit-animation-duration: 0.5s;
  -webkit-animation-timing-function: ease;
  -webkit-animation-fill-mode: both;

  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: both;
}


</style>