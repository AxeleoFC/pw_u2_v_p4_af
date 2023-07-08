<template>
  <PokemonRedireccion></PokemonRedireccion>
  <router-view></router-view>
</template>

<script>
import PaginaInicial from './modulos/pokemon/page/PaginaInicial.vue';
import PokemonRedireccion from './modulos/pokemon/components/PokemonRedireccion.vue';
export default {
  name: 'App',
  components:{
    PaginaInicial,
    PokemonRedireccion
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #865d1f;
  margin-top: 60px;
}
</style>
