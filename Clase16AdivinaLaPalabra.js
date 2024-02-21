/*
Adivinar palabra
El usuario tiene 3 intentos para adivinar la palabra oculta

Requerimientos:
-El juego debe tener una palabra oculta.
-El juego puede dar 1 pista de la palabra.
-El usuario debe de ingresar una suposicion
-El juego debe verificar si la suposicion del usuario es correcta.
-El juego debe tener un numero limitado de intentos.
-El juego debe terminar cuando el usuario adivina la palabra
o se quede sin intentos
 */

let palabraOculta = 'javascript'
let intentos = 3

function verificarSuposicion(suposicion, palabraOculta) {
    if (suposicion.toLowerCase() === palabraOculta) {
        return true
    }
    return false
}

function jugarAdivina() {
    alert('Bienvenido a jugar a adivina la palabra oculta')
    console.log('Tienes 3 intentos para adivinar la palabra')
    alert('La palabra oculta es un lenguaje de programacion')

    while (intentos > 0) {
        let suposicion = prompt('Adivina la palabra: ')
        if (verificarSuposicion(suposicion, palabraOculta)) {
            alert("!Adivinaste!!")
            break
        } else {
            intentos--
            if (intentos > 0) {
                alert(`Incorrecto te quedan  ${intentos}`)
            } else {
                console.log(`perdiste la palabra oculta era: ${palabraOculta}`)
            }
        }

    }
}
jugarAdivina()