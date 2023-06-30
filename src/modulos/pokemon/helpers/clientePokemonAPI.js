const obtenerPoke=async ()=>{
    return obtenerNombresPokemonsFor(obtenerVectorNum(1,600))
}

const obtenerVectorNum=(min, max)=>{
    return [getNumero(min,max),
        getNumero(min,max),
        getNumero(min,max),
        getNumero(min,max)];
}

function getNumero(min, max){
    max++;
    return Math.floor(Math.random()*(max-min)+min);
}

const obtenerFachadaPoke=async ()=>{
    return await obtenerPoke();
}

const obtenerNombresPokemons=async ([id1,id2,id3,id4]=[])=>{
    const data1=await consumirAPI(id1)
    const data2=await consumirAPI(id2)
    const data3=await consumirAPI(id3)
    const data4=await consumirAPI(id4)
    const obj1={
        nombre:data1.name,
        id:data1.id
    }
    const obj2={
        nombre:data2.name,
        id:data2.id
    }
    const obj3={
        nombre:data3.name,
        id:data3.id
    }
    const obj4={
        nombre:data4.name,
        id:data4.id
    }
    return [obj1,obj2,obj3,obj4]
}

const obtenerNombresPokemonsFor=async (arreglo)=>{
    let array=[]
    for (let index = 0; index < arreglo.length; index++) {
        let api = await consumirAPI(arreglo[index])
        let obj={
            nombre:api.name,
            id:api.id
        }
        array.push(obj)
    }
    return array
}

const consumirAPI=async(id)=>{
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(result=>result.json())
    return data;
}


//Buena practica
export default obtenerFachadaPoke