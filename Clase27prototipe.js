class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido() {
        console.log("El animal emite un sonido");
    }
}

class Perro extends Animal {
    constructor(nombre, tipo, raza) {
        super(nombre, tipo);
        this.raza = raza;

    }
    emitirSonido() {
        console.log("Ladrando!!!");
    }
    correr() {
        console.log(`${this.nombre} corre como cabra descarreada`)
    }
}

const perro1 = new Perro("Bobby", "Perro", "Pug");

console.log(perro1);
perro1.correr();
perro1.emitirSonido();

Perro.nuevoMetodo = function() {
    console.log("Este es un metodo");
};

Perro.prototype.segundoMetodo = function() {
    console.log("Es otro nuevo metodo");
};