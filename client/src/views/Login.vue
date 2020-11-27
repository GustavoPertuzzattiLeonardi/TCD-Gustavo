<template>
  <div class="container">
    <a class="links" id="paracadastro"></a>
    <a class="links" id="paralogin"></a>

    <div class="content">
      <!--FORMULÁRIO DE LOGIN-->
      <div id="login">
        <form method="post" @submit.prevent="login">
          <h1>Login</h1>
          <p>
            <label for="email_login">E-mail</label>
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              v-model="credentials.email"
              required
              class="login__input"
            />
          </p>

          <p>
            <label for="senha_login">Senha</label>
            <input
              type="senha"
              name="senha"
              v-model="credentials.senha"
              placeholder="Senha"
              required
              class="login__input"
            />
          </p>

          <p>
            <input
              type="checkbox"
              name="manterlogado"
              id="manterlogado"
              value=""
            />
            <label for="manterlogado">Permanecer logado</label>
          </p>

          <p></p>

          <input type="submit" value="Logar" />

          <p class="link">
            Ainda não tem conta?
            <a href="/CadastroUser">Crie uma!</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {
    // Footer
  },
  data() {
    return {
      credentials: {
        email: "",
        senha: ""
      }
    };
  },
  methods: {
    async login() {
      const credentials = this.credentials;
      try {
        await this.$store.dispatch("authenticate", credentials);
        this.$router.push("/");
      } catch (e) {
        console.log("Login Error on Login Page", e);
        alert("Não foi possível realizar o login");
      }
    }
  }
};
</script>

<style>
.container {
  margin-top: 50px;
}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  font-family: 'Times New Roman', Times, serif;
}

body {
  margin: 10px;
}

a {
  text-decoration: none;
}

/* esconde as ancoras da tela */
a.links {
  display: none;
}

/* content que contem os formulários */
.content {
  width: 500px;
  margin: 0px auto;
  position: relative;
}

/* formatando o cabeçalho dos formulários */
h1 {
  color: #34a529;
  padding: 10px 0;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  text-align: center;
  padding-bottom: 30px;
}

p {
  margin-bottom: 15px;
}
p:first-child {
  margin: 0px;
}
label {
  color: #40604d;
  position: relative;
}

/**** advanced input styling ****/
/* placeholder */
::-webkit-input-placeholder {
  color: #bebcbc;
  font-style: italic;
}
input:-moz-placeholder,
textarea:-moz-placeholder {
  color: #bebcbc;
  font-style: italic;
}
input {
  outline: none;
}

input:not([type="checkbox"]) {
  width: 95%;
  margin-top: 4px;
  padding: 10px;
  border: 1px solid #b2b2b2;

  -webkit-border-radius: 3px;
  border-radius: 1px;

  -webkit-box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;

  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

input[type="submit"] {
  width: 100% !important;
  cursor: pointer;
  background: #34a529;
  padding: 8px 5px;
  color: #fff;
  font-size: 20px;
  border: 1px solid #fff;
  margin-bottom: 10px;
  text-shadow: 0 1px 1px #333;

  -webkit-border-radius: 5px;
  border-radius: 5px;

  transition: all 0.2s linear;
}
input[type="submit"]:hover {
  background: #34a529;
}

.link {
  position: absolute;
  background: #e2ebe1;
  color: #7f7c7c;
  left: 0px;
  height: 20px;
  width: 440px;
  padding: 17px 30px 20px 30px;
  font-size: 16px;
  text-align: right;
  border-top: 1px solid #dbe8e3;

  -webkit-border-radius: 0 0 5px 5px;
  border-radius: 0 0 5px 5px;
}
.link a {
  font-weight: bold;
  background: #00f10c;
  padding: 6px;
  color: #33a529;
  margin-left: 10px;
  border: 1px solid #00831c;

  -webkit-border-radius: 4px;
  border-radius: 4px;

  -webkit-transition: all 0.4s linear;
  transition: all 0.4s linear;
}
.link a:hover {
  color: #0c9200;
  background: #f7f7f7;
  border: 1px solid #34a529;
}

#cadastro,
#login {
  position: absolute;
  top: 0px;
  width: 88%;
  padding: 18px 6% 60px 6%;
  margin: 0 0 35px 0;
  color: #34a529;
  background: rgb(247, 247, 247);
  border: 1px solid rgba(14, 145, 25, 0.8);
 


 

  -webkit-animation-duration: 0.5s;
  -webkit-animation-timing-function: ease;
  -webkit-animation-fill-mode: both;

  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: both;
}

#paracadastro:target ~ .content #cadastro,
#paralogin:target ~ .content #login {
  z-index: 2;
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;

  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
#registro:target ~ .content #login,
#paralogin:target ~ .content #cadastro {
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}


/*fadeInLeft*/
@-webkit-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/*fadeOutLeft*/
@-webkit-keyframes fadeOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
  }
}

@keyframes fadeOutLeft {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-20px);
  }
}
</style>