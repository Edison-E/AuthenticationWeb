<template>
  <div class="content">
    <h1>Bienvenido {{ Username }}</h1>
    <br />
    <p>Datos personales: {{ Email }}</p>
    <button @click="logout">Cerrar sesión</button>
  </div>
</template>

<script>
export default {
  name: "HomeUser",
  computed: {
    Username() {
      return this.$store.state.username;
    },
    Email() {
      return this.$store.state.email;
    },
  },
  methods: {
    logout() {
      this.$store.commit("setAuthentication", false);
      this.$router.push("/");
    },
  },
};
</script>

<style>
.content {
  display: grid;
  place-items: center;
  margin: auto;
  font-family: monospace;
}
</style>
