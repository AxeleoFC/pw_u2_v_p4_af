<template>
    <h1>Juego Pokemon</h1>
    <PokemonImg pokemonID="249" :muestraPokemon="true"></PokemonImg>
    <PokemonImg pokemonID="129" :muestraPokemon="false"></PokemonImg>
    <PokemonOps></PokemonOps>
</template>

<script>
import PokemonImg from '../components/PokemonImg.vue';
import PokemonOps from '../components/PokemonOps.vue';

export default {
    components:{
        PokemonImg,
        PokemonOps
    }
}
</script>

<style>

</style>