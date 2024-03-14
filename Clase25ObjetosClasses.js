/*
Estructura de datos

key / value

objeto{
    propiedad: valor,
    propiedad: valor,
    propiedad: valor
    Metodos
}
*/

const persona = {
    nombre: "Julio",
    edad: 35,
    direccion: {
        calle: 'Los Hornos 187',
        ciudad: 'Buenos Aires',
    },
    saludar() {
        console.log(`Hola, mi nombre es ${persona.nombre}`)
    }

}

console.log(persona)
console.log(persona.nombre)
persona.saludar()

//Agregar caracteristicas/propiedades al objeto

persona.telefono = ' 6554213'
console.log(persona.telefono)
console.log(persona)

persona.despedir = () => {
    console.log("Adios");
}

persona.despedir()
console.log(persona)

//Acceder a contenido del objeto
console.log(persona.direccion.calle)

//Borrar una propiedad del objeto
delete persona.telefono

console.log(persona)