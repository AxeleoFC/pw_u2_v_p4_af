<template>
    <h1>Juego Pokemon</h1>
    <PokemonImg pokemonID="249" :muestraPokemon="false"></PokemonImg>
    <PokemonOps opciones="list"></PokemonOps>
    
</template>

<script>
import PokemonImg from '../components/PokemonImg.vue';
import PokemonOps from '../components/PokemonOps.vue';
import obtenerFachadaPoke from '../helpers/clientePokemonAPI.js'

export default {
    data(){
        list:null
    },
    components:{
        PokemonImg,
        PokemonOps
    },
    methods:{
        async cargaPokemons(){
            console.log("entor")
            this.list=await obtenerFachadaPoke()
            console.log(this.list)
        }
    },
    mounted(){
        console.log("se monto el componente")
        console.log(this.cargaPokemons())
    }
}
</script>

<style>

</style>