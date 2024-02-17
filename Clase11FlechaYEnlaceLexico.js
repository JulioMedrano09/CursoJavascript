const greeting = function(name) {
        return `Hi, ${name}`
    }
    //Arrow function - explicit return
const newGreeting = (name) => {
    return `Hi, ${name}`
}

//Arrow function - implicit return
const newGreetingImplicit = name => `Hi, ${name}`
const newGreetingImplicitWithTwoParameter = (name, lastName) => `Hi, I'm ${name} ${lastName}`

//Lexical Binding
const finctionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function(message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWithTraditionalFunction('Mensaje 1')
finctionalCharacter.messageWithArrowFunction('Mensaje 2')

//Crear objetos a traves de funciones implicaciones de duplicar codigo
//Duplicar codigo implica:
/*-Mantinimiento dificil
-Aumento de complejidad
-Mayor probabilidad de errores
-Dificultad de escalar
-Tiempo y recursos
-Violacion de principios de diseño (Don't repeat yourself)
-Dificultad en la identificacion de errores*/