//1. Tipo entereo y decimal
const entero = 45
const decimal = 3.14
console.log(typeof entero, typeof decimal)

//2. Notacion cientifica
const cientifico = 5e3

//3. Tipo Infinitos y NaN
const infinito = Infinity
const noEsUnNumero = NaN

//Operaciones aritmeticas
const suma = 3 + 4
const resta = 10 - 8
const multiplicacion = 10 * 5
const division = 10 / 2

//2. Modulo y Exponenciacion
const modulo = 15 % 8
const expo = 2 ** 3

//Precision
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(2))

//Operaciones avanzadas
const raizcua = Math.sqrt(16)
const absoluto = Math.abs(-7)
const aleatorio = Math.random()
console.log(raizcua)
console.log(absoluto)
console.log(aleatorio)

///////////Boleanos///////////////
const isActive = true
const hasPermisson = false

//conversion implicita
const result = 5 > 3
console.log(result)

const name = 'Julio'
console.log(!!name)

//conversion explicita
const value = 0
const explicitBoolean = Boolean(value)
console.log(explicitBoolean)