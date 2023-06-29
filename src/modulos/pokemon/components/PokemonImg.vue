<template>
    <div class="contenedor-imagen">
        <img class="oculta-pokemon" 
        :src="imagenFuente" 
        alt="No se puede mostrar la imagen">
        <img v-if="muestraPokemon"
        :src="imagenFuente" 
        alt="No se puede mostrar la imagen">
    </div>
</template>

<script>
export default {
    props:{
        pokemonID:{
            type:Number,
            required:true
        }, muestraPokemon:{
            type:Boolean,
            required:true
        }
    },
    computed:{
        imagenFuente(){
            console.log("Ingresa metodo")
            //return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+this.pokemonID+".svg"
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonID}.svg`
        }
    }
}
</script>

<style scoped>
img{
    height: 200px;
    right: 40%;
    position: absolute;
}
.oculta-pokemon{
    filter: brightness(0);
}
.contenedor-imagen{
    height: 300px;
}
</style>