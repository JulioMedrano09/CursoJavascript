//concat()

const morseCode1 = ['....', '___'] //H O
const morseCode2 = ['.-..', '.-'] //L A
    //Combine with concat() forma 1
const morseCodeMessage = morseCode1.concat(morseCode2)

console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)
    //Combine with concat() forma 2

const morseCodeMessage2 = [].concat(morseCode1, morseCode2)
console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)

//Combine with Spread Operator

function combineMorseMessages(morseCode1, morseCode2) {
    console.log([...morseCode1, ...morseCode2])
}

combineMorseMessages(morseCode1, morseCode2)

const numbers = [1, 2, 3]
const string = 'string'

combineMorseMessages(numbers, string)

//join() Concatena todos los elementos de un 
//array en una cadena de texto, separados por un delimitador especificado.
const morseCodeMessageString = morseCodeMessage.join(' j ')

console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessageString)