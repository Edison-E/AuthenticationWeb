<template>
  <form v-if="!isAuthenticated" class="formulario">
    <legend>LOGIN</legend>
    <input type="text" v-model="email" placeholder="email" /><br />
    <input type="password" v-model="password" placeholder="password" /><br />
    <input type="submit" value="Login" @click="AuthenticateUser($event)" />
  </form>

  <Router-view v-else />
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticate;
    },
  },
  methods: {
    AuthenticateUser(event) {
      event.preventDefault();
      var json = JSON.stringify({ email: this.email, password: this.password });

      axios
        .post("https://localhost:7187/api/Account/Login", json, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          alert("Credenciales validas !!!");
          this.UserAuthenticate(response.data.token);
        })
        .catch((error) => {
          alert("Credenciales invalidas");
          console.log(error);
        });
    },
    UserAuthenticate(token) {
      this.$store.commit("setAuthentication", true);

      axios
        .get("https://localhost:7187/api/User/GetProfile", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          console.log(response);
          this.$store.commit("setUsername", response.data.name);
          this.$store.commit("setEmail", response.data.email);
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.formulario {
  display: grid;
  place-items: center;
  font-family: monospace;
  background-color: rgb(158, 232, 232);
  width: 200px;
  margin: auto;
  margin-top: 100px;
  padding: 10px;
}
</style>
