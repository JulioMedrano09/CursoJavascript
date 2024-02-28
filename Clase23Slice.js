//slice()
//Crea una sola copia superficial (shallow copy)
//de una porcion del array, especificada por indices de inicio y fin (fin no incluido)

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2))
console.log(animals.slice(2, 4))
console.log(animals.slice(1, 6))
console.log(animals.slice(-2))
console.log(animals.slice(2, -1))

//spread-Operator
//1. Copying  an Array
const originalArray = [1, 2, 3, 4, 5]
const copyOfAnArray = [...originalArray]

console.log(originalArray)
console.log(copyOfAnArray)

//.2 Combining Arrays 
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combineArray = [...array1, ...array2]

console.log(array1)
console.log(array2)
console.log(combineArray)

//3. Creating Arrays with Additional Elements

const baseArray = [1, 2, 3]
const arrayWithAdditionalElements = [...baseArray, 4, 5, 6]

console.log(baseArray)
console.log(arrayWithAdditionalElements)

//4. Pass elements to functions
function sum(a, b, c) {
    return a + b + c
}
const numbers = [1, 2, 3]
const result = sum(...numbers)

console.log(result)