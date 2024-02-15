//Funciones puras

//Side effects
//1.Modificar variables globales
//2.Modificar parametros
//3.Solicitudes HTTP
//4.Imprimir mensajes en pantalla o consola
//5.Manipulacion del DOM
//6.Obtener la hora actual

//funcion pura
function sum(a, b) {
    return a + b;
}

//funcion impura
function sum(a, b) {
    console.log('A: ', a)
    return a + b;
}

//Modificar una variable global
let total = 0

function sumWithSideEffects(a) {
    total += a
    return total
}

//funcion pura
function square(a) {
    return a * a
}

function addTen(a) {
    return a + 10
}
const number = 5
const finalResult = addTen(square(number))
console.log('Final result: ', finalResult)