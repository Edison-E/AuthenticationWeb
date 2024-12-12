<template>
  <div class="content">
    <h1>Bienvenido</h1>
    <button @click="logout">Cerrar sesión</button>
  </div>
</template>

<script>
export default {
  name: "HomeUser",
  methods: {
    logout(){
      this.$store.commit('setAuthentication', false);
      this.$router.push('/');
    }
  }
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
