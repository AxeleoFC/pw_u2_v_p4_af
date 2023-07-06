<template>
  <div class="contenedor">
    <ul>
      <li v-for="obj in opciones" :key="obj.id" @click="$emit('seleccionado', obj.id)">
        {{ obj.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    opciones:{
      type:Array,
      required:true
    },
  }, methods:{
    pruebadeEvento(){
      console.log("Entro en prueba")
    }
  }

}
</script>

<style scoped>
ul{
  list-style-type: none;
}
li{
  border: 3px solid black;
  color: azure;
  border-radius: 5px;
  background-color: brown;
  margin-bottom: 10px;
  width: 200px;
  cursor: pointer;
}
li:hover{
  background-color: blueviolet;
}
.contenedor{
  display: flex;
  justify-content: center;
}

</style>