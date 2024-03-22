/*
this ---class

this ---objeto --class
*/

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const persona1 = new Persona("Julio", 35);
console.log(persona1);


persona1.nuevoMetodo = function() {
    console.log(`Mi nombre es: ${this.nombre}`);
};
persona1.nuevoMetodo();

/*Reto Final

1. El usuario debe poder ingresar su usuario y contraseña.
2. El sistema debe ser capaz de validad si el usuario y constraseña ingresados por el usuario existen en la base de datos.
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar timelines del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline*/


const userDatabase = [{
        username: "julio",
        password: "123",
    },
    {
        username: "julio",
        password: "123"
    },
    {
        username: "julio",
        password: "123"
    },
    {
        username: "julio",
        password: "123"
    },
];

const usersTimeline = [{
        username: "Pablo",
        timeline: "Este es el timeline de Pablo"
    },
    {
        username: "Juan",
        timeline: "Este es el timeline de Juan"
    },
    {
        username: "Pedro",
        timeline: "Este es el timeline de Pedro"
    },
    {
        username: "Diego",
        timeline: "Este es el timeline de Diego"
    }
];

const username = prompt("Cuál es tu usuario?");
const password = prompt("Cuál es tu contraseña?");

function usuaruiExistente(username, password) {
    for (let i = 0; i < userDatabase.length; i++) {
        if (userDatabase[i].username === username &&
            userDatabase[i].password === password) {
            return true;
            break;
        } else {
            return false;
        }
    }
}

function signIn(username, password) {
    if (usuaruiExistente(username, password)) {
        alert(`Bienvenido a tu cuenta ${username}`);
        console.log(usersTimeline);
    } else {
        alert("Error, usuario o contraseña incorrecta");
    }
}

signIn(username, password);