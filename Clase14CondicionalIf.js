let nombre = 'Julio'

if (nombre === "Julio") {
    console.log("Hola Julio")
} else if (nombre === 'Marco') {
    console.log("Hola Marco")
} else {
    console.log("Hola quien quiera que seas")
}

const numsecreto = Math.floor(Math.random() * 10 + 1)
9
const numeroJugador = parseInt(prompt(
    "Adivida el numero secreto entre 1 al 10 "));

console.log(`Este es el numero con el que juegas ${numeroJugador}`)

if (numeroJugador === numsecreto) {
    console.log("Adivinaste")
} else if (numeroJugador < numsecreto) {
    console.log("El numero es demasiado bajo")
} else {
    console.log("El numero es demasiado alto")
}
console.log(`El numero era ${numsecreto}`)

//Condicional Ternario
const edad = 35
const mensaje = edad >= 18 ? "es mayor de edad" : "Es menor de edad"
console.log(mensaje)