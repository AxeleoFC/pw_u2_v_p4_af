<template>
    <h1 v-if="!pokeCorrecto">Espere por favor.........</h1>
    <div v-else>
        <h1>Juego Pokemon</h1>
        <PokemonImg :pokemonID="pokeCorrecto.id" :muestraPokemon="mostarPokemon"></PokemonImg>
        <PokemonOps :opciones="list" @seleccionado="revisarRespuesta($event)"></PokemonOps>
    </div>
    <button @click="cargaPokemons()">Actualizar imagen</button>
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/PokemonOps.vue";
import obtenerFachadaPoke from "../helpers/clientePokemonAPI.js";

export default {
    data() {
        return {
            list: [],
            pokeCorrecto: null,
            mostarPokemon:false
        };
    },
    components: {
        PokemonImg,
        PokemonOps,
    },
    methods: {
        async cargaPokemons() {
            const arergloPoke = await obtenerFachadaPoke();
            this.list = arergloPoke;
            const indice = Math.floor(Math.random() * 4);
            this.pokeCorrecto = this.list[indice];
        },
        revisarRespuesta(idSeleccionado){
            if(idSeleccionado==this.pokeCorrecto.id){
                this.mostarPokemon=true;
            }else{
                this.mostarPokemon=false;
            }
        }
    },
    mounted() {
        this.cargaPokemons();
    },
};
</script>

<style></style>