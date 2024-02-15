//Creacion de estrings
const primeraOpcion = 'Comillas simples'
const segundaOcpion = "Comillas dobles"
const terceraOpcion = `Comillas diagonales`

//Concatenacion Opcion +
const direccion = 'Calle falsa 123'
const ciudad = 'Cochabamba'
const direccionCompleta = 'Mi direccion completa es:' + direccion + " " + ciudad
console.log(direccionCompleta)

//Segunda forma de concatenacion con Template Literals

const nombre = 'Julio'
const pais = 'Bolivia'
const presentacion = `Hola soy ${nombre} de ${pais}`
console.log(presentacion)

//Tercera forma de concatenacion con join()
const primeraParte = 'Me encanta la gente'
const segundaParte = 'de'
const terceraParte = 'Argentina'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' '))

//Cuarta forma de concatenacion con concat()
const hobbies1 = 'Mirar Peliculas'
const hobbies2 = 'Leer'
const hobbies3 = 'Jugar video juegos'
const hobbies = 'Mis hobbies son:'.concat(hobbies1, ', ', hobbies2, ', ', hobbies3)
console.log(hobbies)

//Caracteres de escape
const forma1 = "I'm System Engineer"
const forma2 = 'I\'m System Engineer'
const forma3 = `I'm System Engineer`

//Escritura de strings largos
const textoLargo = 'Hola mi nombre es:\n' +
    'Julio Medrano y soy\n' +
    'estudiante de la carrera de\n' +
    'Ingenieria de sistemas.'
console.log(textoLargo)

const textoLargo2 = 'Hola mi nombre es:\n\
Julio Medrano y soy\n\
estudiante de la carrera de\n\
Ingenieria de sistemas.'
console.log(textoLargo2)

const textoLargo3 = `Hola mi nombre es:
Julio Medrano y soy
estudiante de la carrera de
Ingenieria de sistemas.`
console.log(textoLargo3)

//String primitivos y string objeto
//Manipulacion de Strings

//String PRIMITIVO
const stringPrimitivo = 'Hola mundo'
console.log(typeof stringPrimitivo)

const stringPrimitivo2 = String('Hola mundo')
console.log(typeof stringPrimitivo)

//String OBJETO
const stringObjeto = new String('Objecto')
console.log(typeof stringObjeto)

//Acceder a caracteres
const saludo = 'Hola, Julio'
console.log(saludo[2])
console.log(saludo.charAt(2))
console.log(saludo.indexOf('J'))
console.log(saludo.lastIndexOf('o'))
console.log(saludo.slice(3, 9))
console.log(saludo.length)
console.log(saludo.toLowerCase())
console.log(saludo.toLocaleUpperCase())

const saludoDiv = saludo.split(' ')
console.log(saludoDiv)
console.log(saludoDiv[1])

const saludoEspaciado = ' Hola mundo '
const saludoSinEspaciar = saludoEspaciado.trim()
console.log(saludoSinEspaciar)

const saludoOrigin = 'Hola mundo'
const nuevoSaludo = saludoOrigin.replace('mundo', 'Julio')
console.log(nuevoSaludo)


//Presentacion

const username = 'ripper009'
const fullname = 'Julio Medrano'
const age = 35
const isStudent = true

const address = { street: 'Calle martin cardenas ', city: 'Cochabamba', state: 'Cochabamba' }

const hobies = ['coding', 'reading', 'gaming']

//Generando perfil
const perfil = `Hi, i'm  ${fullname}.
I'm ${age} years old.
I live in ${address.city}.
My hobbies are ${hobies.join(', ')}.`

console.log(perfil)