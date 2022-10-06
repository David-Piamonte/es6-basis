//traer la dependecia del 
//componente suma
import {sumar, restar } from './sumar.js'
import materias from './materias.js'

//1. recorrido de arreglo: forEach 
materias.forEach((materia)=> {
    if(materia.profesor === 'Tatiana Cabrera'){
        console.log(`materia: ${materia.name}`)
        console.log(`notas: ${materia.notas}`)
    }
})


//2. convertir el arreglo de profesores 
//metodo map()
let profesores = materias.map(function(materia){
    return materia.profesor
})
console.log(profesores)

//3. agregar una materia al arreglo de materias 
// push()

materias.push(
{
    id: 5,
    name: 'Cultura Fisica',
    profesor: 'Luis Baquero',
    notas: [
        2,
        3.5
    ]

    }

)

console.log(materias)

//4. busqueda en arreglos:
//find
const PHP = materias.find(function(materia){
    return materia.profesor === 'Cristian Buitrago'
})

console.log(PHP)
