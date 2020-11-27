<template>
  <div class="">
    <sidebar-menu :menu="menu" />

      <div class="area-centro">
        <h3>Piquete</h3>
      </div>
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Cod. Brinco</th>
              <th scope="col">Peso</th>
              <th scope="col">OBS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="piquet in piquete" v-bind:key="piquet.id">
              <td>
                {{ piquet.piquete }}
              </td>
              <td>
                <p>{{ piquet.capacidade }}</p>
              </td>
              <td>
                <p>{{ piquet.text }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <div class="area-centro">
        <h3>Gado</h3>
      </div>
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Cod. Brinco</th>
              <th scope="col">Peso</th>
              <th scope="col">Data de Saída</th>
              <th scope="col">OBS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="gad in gado" v-bind:key="gad.id">
              <td>
                {{ gad.codBrinc }}
              </td>
              <td>
                <p>{{ gad.peso }}</p>
              </td>
              <td>
                <p>{{ gad.dtSaid }}</p>
              </td>
              <td>
                <p>{{ gad.text }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>
import { SidebarMenu } from "vue-sidebar-menu";
import axios from "axios";

export default {
  name: "Principal",
  components: {
    SidebarMenu,
  },

  data() {
    return {
      menu: [
        {
          header: true,
          title: "Menu",
          hiddenOnCollapse: true,
        },
        {
          href: "/Principal",
          title: "Início",
          icon: "fa",
        },
        {
          href: "/Gado",
          title: "Gado",
          icon: "fa",
        },
        {
          href: "/Piquete",
          title: "Piquete",
          icon: "fa",
        },
        {
          href: "/AFD",
          title: "Afazeres Diários",
          icon: "fa fa-chart-area",
        },
        {
          href: "/Login",
          title: "Sair",
          icon: "fa",
        },
      ],
      gado: [],
      piquete: [],
    };
  },
  created() {
    axios.get("/Gados").then((response) => {
      console.log("response", response);
      this.gado = response.data;
    });
    axios.get("/Piquetes").then((response) => {
      console.log("response", response);
      this.piquete = response.data;
    });
  },
};
</script>

<style>
.table {
  margin-top: 50px;
}

.area-centro h3 {
  color: rgb(13, 70, 13);
  margin: 0;
  float:center;
  font-size: 28px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
}
</style>