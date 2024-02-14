//let se usa mayormente para uso de variables que cambiaran con el avance del proyecto
let cajaDeAndy = "Woody"
console.log(cajaDeAndy)

//const se usa para constantes o variables finas que no tendran cambios
const pi = 3.1416

//Tipos de datos

/*Hay 10 tipos de datos los cuales son:
Primitivos:
string
number
boolean
null
undefined
symbol
bigint
Complejos
object
array
function
En los promitivos se encuentran los inmutables los cuales se pasan por valor
y en los complejos se encuentran los mutables los cuales se pasann por referencia*/

//Tipo de dato primitivo - Inmutable
let numero = 23
numero = numero + 10
console.log(numero)

//Tipo de dato complejo -Mutable
let usaurio = { nombre: "Julio", edad: 15 }
usaurio.edad = 20
console.log(usaurio)

function cambiarNombre(objeto) {
    objeto.nombre = "Nuevo nombre"
}
let persona = { nombre: "Julio" }
cambiarNombre(persona)
console.log(persona)