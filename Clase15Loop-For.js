let list = ['eat', 'sleep', 'code', 'repeat']

for (let i = 0; i < list.length; i++) {
    console.log(list[i])
}

//Loop:forEach

list.forEach((item) => {
    console.log(item);
})

//Loop:forOf: Se usa para arrays, strings todo elemento de una lista iterable
for (palabra of list) {
    console.log(palabra)
}

//Loop:for in  se usa para objetos enumerables iterables conta de dos partes
//propiedades = valor
const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
}
for (frutas in listaDeCompras) {
    console.log(frutas)
}

for (frutas in listaDeCompras) {
    console.log(`${frutas}: ${listaDeCompras[frutas]}`)
}

//Loop:While
let contador = 0
while (contador < 10) {
    console.log(contador)
    contador++
}

//Loop:DoWhile
let contador2 = 0
do {
    console.log(contador2)
    contador2++
} while (contador2 <= 10)