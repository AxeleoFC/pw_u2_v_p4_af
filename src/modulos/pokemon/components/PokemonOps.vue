<template>
  <div class="contenedor">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul{
  list-style-type: none;
}
li{
  border: 3px solid black;
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