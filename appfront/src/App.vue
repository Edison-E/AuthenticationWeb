<template>
 <form class="formulario">
    <legend>LOGIN</legend>
    <input type="text" id="" placeholder="username"><br>
    <input type="password" id="" placeholder="password"><br>
    <input type="submit" value="Login">
 </form>
</template>

<script>


export default {
  name: 'App'
}
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
