class User {};



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