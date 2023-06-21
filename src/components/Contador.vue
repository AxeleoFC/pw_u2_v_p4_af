<template>
    <h3>{{tituloComputada}}</h3>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <button @click="aumetar()">+</button>
    <button @click="disminuir()">-</button>
    
</template>

<script>
export default {
    name: "Contador",
    data(){
        return{
            numero:this.inicio,
            tituloComp:this.titulo
        }
    },
    methods:{
        obtenerCuadrado(){
            console.log("Entro al metodo cuadrado")
            return this.numero*this.numero;
        },
        aumetar(){
            this.numero++;
        },
        disminuir(){
            this.numero--;
        }
    },
    computed:{
        obtenerCuadradoComputado(){
            console.log("Entro al metodo cuadrado computado")
            return this.numero*this.numero;
        },
        tituloComputada(){
            return this.tituloComp  || 'Valor por defecto'
        }
    },
    props:{
        titulo: String,
        inicio: {
            type:Number,
            required: false,
            default: 100,
            validator(value){
                return value>100
            }
        }
    }
};
</script>

<style>
button{
    background-color: #64B687;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0px 5px;
    padding: 5px 15px;
}
button:hover{
    background-color: #1e2341;
}
</style>