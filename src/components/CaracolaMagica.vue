<template>
    <h1 class="titulo">Caracola Magica</h1>
    <img src="https://play-lh.googleusercontent.com/sKagMyM8j71MQyDVRcRMcGf7yEWePT6PdmAo_S5rWIfJwzPLANPVYnu5mTFeA_0OpA" alt="No se puede presentar la imagen">
    <input type="text" placeholder="Pregunta a la caracola magica" v-model="pregunta">
    <p>Recuerda terminar con enter la pregunta</p>
    <div>
        <h2>Voy a pasar de año?</h2>
        <h1>SI, NO</h1>
    </div>
</template>

<script>
export default {
    name: "CaracolaMagica",
    data(){
        return {
            pregunta: 'Hola mundo'
        }
    }
}
</script>

<style>
.titulo{
    background-color: blueviolet;
    
}
</style>