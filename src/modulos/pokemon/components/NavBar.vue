<template>
  <div>
    <router-link to="/">Bienvenida</router-link>
    <router-link to="/juego">Juego</router-link>
    <router-link to="/premios">Premios</router-link>
    <router-link to="/juegoPokemon">Juego Pokemon</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
div{
    padding: 0 30px;
}
div,a{
    font-weight: bold;
    color: #25b5f8;
    margin: 40px;
}
</style>