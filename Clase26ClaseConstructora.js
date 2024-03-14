function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const persona1 = new Persona('Julio', 'Medrano', '35');

console.log(persona1);

persona1.nacionalidad = 'Boliviano';
console.log(persona1);

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre},${this.apellido} `)
};

persona1.saludar();

//Clases

class Personas {
    constructor(nombres, edad) {
        this.nombres = nombres;
        this.edad = edad;
    }
    saludo() {
        console.log(`Hola todos vite ${this.nombres} y tengo ${this.edad}`);
    }
}

const personas1 = new Personas('Deyna', 24);
personas1.saludo();