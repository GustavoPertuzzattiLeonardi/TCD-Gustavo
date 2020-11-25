<template>
  <div>
    <header>
      <div class="area-centro">
        <h3>Techow</h3>
      </div>
    </header>    
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

header {
  background-color: #ffffff;
  width: 100%;
  height: 30px;
  margin: -10px;
  padding: 20px;
  position: fixed;
      border-width: 1px;
    border-style: solid;
    border-color: rgb(12, 49, 9);
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


nav {
  background-color: #e5fddf;
  width: 250px;
  height: 100%;
  left: 0;
  position: fixed;
  margin-top: 61px;
  padding-top: 30px;
  transition: 0.3s;
    border-width: 1px;
    border-style: solid;
    border-color: #000;
}

nav h4 {
  color: black;
  margin-top: 0;
  margin-bottom: 20px;
}

nav a {
  color: black;
  text-decoration: none;
  display: block;
  width: 100%;
  padding-left: 40px;
  line-height: 60px;
  box-sizing: border-box;
  transition: 0.5s background-color;
}

nav i {
  padding-right: 10px;
  line-height: 60px !important;
}

nav a:hover {
  background-color: #34a529;
}

</style>