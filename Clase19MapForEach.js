//Methods that iterate over an array
//Methods that Do not modify the original array (Inmutability)

//map() Permite aplicar una funcion a cada elemento de un array
//y construir un nuevo array con los resultados
const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squaredNumbers)

//forEach() Itera sobre cada elemento de un array y ejecuta una funcion
//proporcionada para cada elemento, sin crear un nuevo array.
const colors = ['red', 'green', 'blue', ]
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)

//Exercise: Fahrenheit to Celsius conversion
const termperaturesInFahrenheit = [32, 68, 95, 104, 212]
const temperaturesInCelsius = termperaturesInFahrenheit.map(fahrenheit => (5 / 9) * (fahrenheit - 32))

console.log('Temperatures in Fahrenheit: ', termperaturesInFahrenheit)
console.log('Temperatures in Celsius: ', temperaturesInCelsius)

//Exercise: Sum of Elements in a Array
const newNumbers = [1, 2, 3, 4, 5]
let sum = 0

newNumbers.forEach(number => {
    sum += number
})

console.log('Array of Numbers: ', newNumbers)
console.log('Sum of Numbers: ', sum)

//filter() Crea un  nuevo array con elementos que cumplen una condicion
//dada por una función.
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers1.filter(number => number % 2 === 0)

console.log(numbers1)
console.log(evenNumbers)

//reduce() Ejecuta una funcion reductora sobre cada elemento de un array, devolviendo como
//resultado un unico valor
let accumulator = 0

const numbersReduce = [1, 2, 3, 4, 5]
const sum1 = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numbersReduce)
console.log(sum)

//reduce() caso 2
const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']

const wordFrecuency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

console.log(wordFrecuency)

//Exercise: Passing Grade Average
const grades = [85, 92, 60, 78, 95, 66, 88, 50, 94]
const passingGrades = grades.filter(grade => grade >= 70)

const averagePassingGrade = passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length

console.log('Original Grades: ', grades)
console.log('Passing Grades: ', passingGrades)
console.log('Average Passing Grade: ', averagePassingGrade)

//find() Devuelve el valor del primer elemento de array que cumple la funcion de prueba proporcionada
const multiple0f5 = [5, 10, 15, 20]
const firstNumberGreaterThan10 = multiple0f5.find(number => number > 5)

console.log(multiple0f5)
console.log(firstNumberGreaterThan10)

//findIndex() Devuelve el indice del primer elemento en un array
//que satisface una condicion proporcionada en forma de funcion
//Si no se encuentra ningun elemento que cumpla la condicion, devuelve -1
const randomNumber = [6, 14, 27, 56, 40]
const indexNumber = randomNumber.findIndex(number => number > 50)

console.log(randomNumber)
console.log(indexNumber)

//Exercise: Raffle Winner Verification Program
const winningParticipants = [
    { id: 1, name: 'Julio', ticketNumber: 001 },
    { id: 8, name: 'Deyna', ticketNumber: 008 },
    { id: 15, name: 'Zoe', ticketNumber: 015 },
    { id: 45, name: 'Zack', ticketNumber: 047 }
]

function findWinnerByName(name) {
    const winner = winningParticipants.find(participants => participants.name === name)
    return winner || 'No winner found with that name'
}

function findIndexWinnerByTicket(ticketNumber) {
    const index = winningParticipants.findIndex(participants => participants.ticketNumber === ticketNumber)
    return index !== -1 ? index : 'No winner found with that ticket number'
}

function displayWinnerInformation(winner) {
    if (winner !== undefined && winner !== 'No winner found with that ticket number') {
        console.log('Winner information: ', winner)
    } else {
        console.log('No winner found ')
    }
}

const winnerByName = findWinnerByName('Julio')
const indexWinnerByTicket = findIndexWinnerByTicket(001)

displayWinnerInformation(winnerByName)
console.log('Index of Winner by Ticket Number: ', indexWinnerByTicket)

//Exercise: Transaction analysis
const transactions = [
    { id: 1, description: 'Grocery Shopping', amount: -50 },
    { id: 2, description: 'Salary deposit', amount: 2000 },
    { id: 3, description: 'Utility Bill Payment', amount: -100 },
    { id: 4, description: 'Online Purchase', amount: -30 }
]

//1. Calculate Total Balance

const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
console.log('Total Balance: ', totalBalance)

//2. Find the Largest Transaction (Income or Expense)
const largestTransaction = transactions.reduce((maxTransaction, transaction) => {
    return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transactions[0])

console.log('Largest Transaction: ', largestTransaction)

//3. Filter Purchase Transactions

const purchaseTransactions = transactions.filter(transaction => transaction.amount < 0)
console.log('Purchase Transactions: ', purchaseTransactions)

//4. Find a Transaction by Description

const specificTransaction = transactions.find(transaction => transaction.description === 'Online Purchase')
console.log('Specific Transaction', specificTransaction)

//5. Find the index of a transaction by Amount

const indexTransactionWithAmount = transactions.findIndex(transaction => transaction.amount === -30)
console.log('Index Transaction with Amount: ', indexTransactionWithAmount)

//6. Update Transaction Descriptions

transactions.forEach(transaction => {
    if (transaction.amount < 0) {
        transaction.description = `Expense: ${transaction.description}`
    } else {
        transaction.description = `Income: ${transaction.description}`
    }
})

console.log('Update Transactions: ', transactions)