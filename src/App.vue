<template>
  <PaginaPoke></PaginaPoke>
</template>

<script>
import PaginaPoke from './modulos/pokemon/page/PaginaPoke.vue';

export default {
  name: 'App',
  components: {
    PaginaPoke
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
