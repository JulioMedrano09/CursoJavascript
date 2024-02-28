//every() 
//Determina si todos los elementos del array satisfacen una condicion 

const ages = [21, 25, 30, 19, 22]

//every()

const allAredults = ages.every(age => age > 20)

console.log(ages)
console.log(allAredults)

//some()
const atLeastOneIsOver30 = ages.some(age => age > 29)

console.log(ages)
console.log(atLeastOneIsOver30)