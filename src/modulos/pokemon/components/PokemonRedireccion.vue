<template>
    <div>
        <router-link to="/">Inicio</router-link>
        <router-link to="/juego">Juego</router-link>
        <router-link to="/reglas">Reglas</router-link>
    </div>
</template>
  
<script scoped>
export default {
}
</script>
  
<style>
div {
    padding: 0 30px;
}

div,
a {
    font-weight: bold;
    color: #232525;
    margin: 40px;
}
</style>