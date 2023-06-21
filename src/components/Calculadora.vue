<template>
    <div class="container">
      <div id="calculadoraID" class="calculadora">
        <label class="digitos" id="resultadoid"></label>
        <button @click="ingresar('numeroid', 1)">1</button>
        <button @click="ingresar('numeroid', 2)">2</button>
        <button @click="ingresar('numeroid', 3)">3</button>
        <button class="calcu" @click="calculo('+')">+</button>
        <button @click="ingresar('numeroid', 4)">4</button>
        <button @click="ingresar('numeroid', 5)">5</button>
        <button @click="ingresar('numeroid', 6)">6</button>
        <button class="calcu" @click="calculo('-')">-</button>
        <button @click="ingresar('numeroid', 7)">7</button>
        <button @click="ingresar('numeroid', 8)">8</button>
        <button @click="ingresar('numeroid', 9)">9</button>
        <button class="calcu" @click="calculo('x')">x</button>
        <button class="botoncero" @click="ingresar('numeroid', 0)">0</button>
        <button @click="res()">=</button>
        <button class="calcu" @click="calculo('/')">/</button>
        <label class="digitos" id="numeroid"></label>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Calculadora",
    data() {
      return {
        numero: 0,
        total: "",
        primero: false,
        numeroR: 0,
        inputC: "",
      };
    },
    methods: {
      ingresar(idnumero, params) {
        document.getElementById(idnumero).innerHTML += params;
      },
      res() {
        this.calculo(this.total);
        document.getElementById("numeroid").innerHTML = "= " + this.numero;
        this.primero = false;
      },
      calculo(val) {
        if (!this.primero) {
          this.numero = Number(document.getElementById("numeroid").innerHTML);
          this.total = val;
          this.primero = true;
          this.borrar("resultadoid");
          this.ingresar("resultadoid", this.numero + this.total);
        } else {
          this.borrar("resultadoid");
          this.numeroR = Number(document.getElementById("numeroid").innerHTML);
          this.ingresar("resultadoid", this.numero + this.total + this.numeroR);
          this.numero = eval(this.numero + this.total + this.numeroR);
          this.total = val;
        }
        this.borrar("numeroid");
      },
      borrar(idnumero) {
        document.getElementById(idnumero).innerHTML = "";
      },
    },
  };
  </script>
  
  <style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .calculadora {
    background-color: darkgrey;
    padding: 20px;
    border-radius: 35px;
    display: grid;
    grid-template-columns: repeat(4, 75px);
    box-shadow: 5px 10px 50px 5px gray;
  }
  
  .botoncero {
    grid-column: span 2;
  }
  
  .digitos {
    text-align: center;
    grid-column: span 4;
    border-style: double;
    padding: 15px;
    margin: 5px;
  }
  
  button {
    border-radius: 15px;
    background-color: aquamarine;
    padding: 2px;
    margin: 2px;
  }
  
  button:hover {
    background-color: blue;
    font-size: 15px;
    color: white;
  }
  </style>
  