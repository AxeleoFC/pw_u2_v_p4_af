<template>
    <h1 v-if="!pokeCorrecto">Espere por favor.........</h1>
    <div v-else class="fondo">
        <div class="contenedor-labels">
            <label>Puntaje: {{ puntaje }}</label>
            <label>intento: {{ intentos }}</label>
        </div>
        <h1>Juego Pokemon</h1>
        <PokemonImg :pokemonID="pokeCorrecto.id" :muestraPokemon="mostarPokemon"></PokemonImg>
        <PokemonOps :opciones="list" @seleccionado="revisarRespuesta($event)"></PokemonOps>
    </div>
    <div :class="ganar" v-if="finJuego">
        <label v-text="resultado"></label>
        <label v-text="premio"></label>
        <button @click="reiniciar()">Nuevo juego</button>

    </div>
    <PokemonRedireccion></PokemonRedireccion>
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/PokemonOps.vue";
import obtenerFachadaPoke from "../helpers/clientePokemonAPI.js";
import PokemonRedireccion from '../components/PokemonRedireccion.vue';

export default {
    components: {
        PokemonRedireccion
    },
    data() {
        return {
            list: [],
            pokeCorrecto: null,
            mostarPokemon: false,
            intentos: 0,
            puntaje: 0,
            resultado: "",
            finJuego: false,
            premio: "",
            gana: false,
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
        comprobar(idSeleccionado) {
            if (idSeleccionado == this.pokeCorrecto.id) {
                this.mostarPokemon = true;
                this.finJuego = true;
                if (this.intentos == 3) {
                    this.puntaje = 1;
                } else if (this.intentos == 2) {
                    this.puntaje = 3;
                } else if (this.intentos == 1) {
                    this.puntaje = 5;
                }
                this.obtenerResultado();
            } else {
                this.mostarPokemon = false;
            }

        }, async revisarRespuesta(idSeleccionado) {
            if (this.intentos < 3 && this.finJuego != true) {
                this.intentos++;
                this.comprobar(idSeleccionado);
            } else {
                this.obtenerResultado();
            }
        }, async reiniciar() {
            await this.cargaPokemons();
            this.mostarPokemon = false;
            this.finJuego = false;
            this.intentos = 0;
            this.puntaje = 0;
        }, obtenerResultado() {
            this.finJuego = true;
            if (this.puntaje > 0) {
                this.gana = true;
                this.resultado = "Puntaje: " + this.puntaje;
                this.premio = "Felicitaciones has ganado.";
            } else {
                this.gana = false;
                this.resultado = "Haz utilizado tus 3 intentos";
                this.premio = "El juego ha termindo, intentalo nuevamente";
            }
        }
    },
    mounted() {
        this.cargaPokemons();
    }, computed: {
        ganar() {
            if (this.gana) {
                return "ganar";
            } else {
                return "perder";
            }
        },
    },
};
</script>

<style scoped>
.contenedor-horizontal {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.ganar {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: blue;
}

.perder {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: red;
}

label {
    font-weight: bold;
    margin: 10px;
}

button {
    border: 2px solid black;
}

button:hover {
    background-color: aqua;
}
.fondo{
    background-image: url('../img/fondo.jpg');
    background-size: 100% 100%;
}
</style>