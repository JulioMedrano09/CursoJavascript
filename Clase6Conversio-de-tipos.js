//Explicit Type Casting
const string = '42'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

const binary = '101001'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

//Implicit Type Casting
const sum = '5' + 3
console.log(sum)

const sumWithBoolean = '3' + true
console.log(sumWithBoolean)