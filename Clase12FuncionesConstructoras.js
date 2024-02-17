//Funciones constructoras
const personalizedMessage = () => 'Hola vite'

function Rocket(name, ownMessage) {
    this.name = name
    this.lauchMessage = ownMessage

}


const falcon9Rocket = new Rocket('Falcon 9', personalizedMessage)
const falconHeavyRocket = new Rocket('Falcon Heavy', personalizedMessage)
console.log(falcon9Rocket.name)
console.log(falcon9Rocket.lauchMessage())


//crear objetos con arrow functios
const RocketWithArrowFunction = (name, ownMessage) => ({
    name: name,
    lauchMessage: ownMessage
})

const personalizedMessageForArrowFunction = () => 'Chau vite!'
const falcon9Rocket1 = RocketWithArrowFunction('Falcon 9', personalizedMessageForArrowFunction)
console.group(falcon9Rocket1.name)
console.group(falcon9Rocket1.lauchMessage())