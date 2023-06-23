<template>
    <img v-if="imagen" :src="imagen" alt="No se puede presentar la imagen">
    <div class="noEntendi_bg">

    </div>
    <div class="contenedor">
        <h1 class="titulo">Caracola Magica</h1>
        <input type="text" placeholder="Pregunta a la caracola magica" v-model="pregunta">
        <p>Recuerda terminar con ? la pregunta</p>
        <div>
            <h2>{{ pregunta }}</h2>
            <h1>{{ respuesta }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "CaracolaMagica",
    data(){
        return {
            pregunta: '',
            imagen:null,
            respuesta:''
        }
    },
    watch:{
        pregunta(value, oldValue){
            console.log(oldValue);
            console.log(value);
            if(value.includes('?')){
                this.consumirAPI();
                
            }
        }
    },
    methods:{
        async consumirAPI(){
            const {answer, image} =await fetch('https://yesno.wtf/api').then(r=>r.json());
            this.imagen=image;
            this.respuesta=answer;
        }
    }

}
</script>

<style>
.titulo{
    background-color: blueviolet;
}
img, .noEntendi_bg{
    left: 0px;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0px;
    height: 100vh;
    width: 100vw;
}
.noEntendi_bg{
    background-color: rgba(0, 0, 0, 0.3);
}
.contenedor{
    position: relative;
}
input{
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
}
p,h1,h2{
    color: white;
}
p{
    font-size: 20px;
    margin-top: 10px;
}
</style>