//includes()
//Determina si un array incluye un determinado elemento,
//decuelve true false segun corresponda

//includes() with numbers

const numbers = [1, 2, 3, 4, 5]

const result1 = numbers.includes(3)
console.log(result1)

//indexOf()
//Retorna el primer indice en el que se puede encontrar un elemnto
//dado el array, o retorna -1 si el elemento no esta presente

const fruits = ['apple', 'cherry', 'grape', 'mango']
const index1 = fruits.indexOf('grape')

console.log(index1)

//lastIndexOf()

const numbersAgain = [2, 4, 6, 8, 10, 6]

const lastIndex1 = numbersAgain.lastIndexOf(10)
console.log(lastIndex1)

//Exercise Encontrar los indices de una subcadena

const stringArray = ['apple', 'banana', 'orange', 'grape', 'banana', 'kiwi']
const target = 'banana'

function findStringIndicesInArray(array, target) {
    const result = {
        includesTargetString: false,
        firstOccurrenceIndex: -1,
        lastOccurrenceIndex: -1
    }

    array.forEach((element, index) => {
        if (element.includes(target)) {
            result.includesTargetString = true
            result.firstOccurrenceIndex = array.indexOf(target)
            result.lastOccurrenceIndex = array.lastIndexOf(target)

        }
    })
    return result
}

const result = findStringIndicesInArray(stringArray, target)
console.log(result)