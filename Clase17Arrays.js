//How to create an Array
//1. new Array() or Array
const fruits = Array('apple', 'banana', 'orange', 'strawnberrie')
console.log(fruits)

//2. Array literal syntax
const oneNumber = [12]
console.log(oneNumber)

const vacio = []
console.log(vacio)

const recipeIngredients = [
    'Flour',
    true,
    2,
    {
        ingredients: 'Milk',
        quantity: '1 cup'
    },
    false
]

console.log(recipeIngredients)

//Accessing array elements
const firstFruit = fruits[0]
console.log(firstFruit)

//length property
const numberOfFruits = fruits.length
console.log(numberOfFruits)

//Mutability
fruits.push('watermelon')
console.log(fruits)

//Inmutability
const newFruits = fruits.concat(['grape', 'kiwi'])
console.log(newFruits)

//Checkin array with Array.isArray()
const isArray = Array.isArray(fruits)
console.log(isArray)


//Practical exercise
const numbersArray = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i]
}

console.log(sum)