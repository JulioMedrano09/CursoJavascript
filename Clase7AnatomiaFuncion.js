function calculateDiscountPrice(price, discountPercentage) {
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount

    return priceWithDiscount
}

const originalPrice = 100
const discountPercentage = 20
const finalPrice = calculateDiscountPrice(originalPrice, discountPercentage)

console.log('Original Price:' + originalPrice)
console.log('Discount: ' + discountPercentage + '%')
console.log('Price with discount: ' + finalPrice)

/////////funciones vs metodos///////////////

//1. Pasar funciones como argumentos -> callback

function a() {}

function b(a) {}
b(a)

//retornar funciones
function a() {
    function b() {}
    return b
}
/*
//Asignar funciones a variables o expresion de funcion
const a = function() {}

//Tener propiedades y metodos
function a() {}
const obj = {}
a.call(obj)

//Anidar funciones -> Nested functions
function a() {
    function b() {
        function c() {

        }
        c()
    }
    b()
}
a()
*/
//Almacenar funciones en objetos(Metodo)

const rocket = {
    name: 'Falcon 9',
    lauchMessage: function lauchMessage() {
        console.log('Hola')
    }
}

rocket.lauchMessage()