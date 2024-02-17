const owner = 'lucy'
const address = '123 Avenue'

function dogGreeting(owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address} `)
}

const house = {
    dogName: 'Coconut'
}

//Vinculacion de nuestra funcion a nuestros objetos

dogGreeting.call(house, owner, address)

//Es mejor trabajar los objetos dentro de un array con Apply
const necessaryValues = [owner, address]
dogGreeting.apply(house, necessaryValues)

//Otro metodo que se trabaja con bind
const bindingdWithBind = dogGreeting.bind(house, owner, address)
bindingdWithBind()