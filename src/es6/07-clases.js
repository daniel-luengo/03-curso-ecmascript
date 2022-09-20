//declarando
class User {};
//instancia de una clase
//const newUser = new User();


class user {
    //metodos (es muy parecido a una funcion pero sin la palabra reservada function)
    greeting() {
        return 'Hello';
    }
};


const gndx = new user;//generamos uns instancia de user.
console.log(gndx.greeting()) // aca tenemos acceso a nuestro metodo mediante el punto.

const bebeloper = new user();//aca creamos una instancia distinta pero hara lo mismo que la anterior
console.log(bebeloper.greeting());
//el resultado de lo de arriba es que tenemos dos instancia distintas pero de la misma clase.


//creacion de uns constructor dentro de la clase
class user {
    //constructor
    constructor() {
        console.log('Nuevo usuario')
    }
    greeting() {
        return 'Hello';
    }
}

const david = new user();


//this 

class user {
    constructor(name) {
        this.name = name;
    }
    //metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting())


//setters  getters

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //metodos
    speak () {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}



const bebeloper1 = new user('David'  ,15)
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20)

