//arrays destructuring

let fruits = ['Apple' , 'Banana'];
let [a, b] = fruits;
console.log(a,b);
//normalmente lo llamamos de la forma normal que es asi (no destructurada):
console.log(fruits[0], fruits[1])



//Objects destructuring

let user = {username: 'Oscar', age: 34};
let {username, age} = user;
console.log(username, age)
//la forma de llamar este objeto sin destructuracion es:
console.log(user.username, user.age)



// spread operator

let person = {name:'oscar', age:28};
let codeUser = 22;

let data = {...person , codeUser};
console.log(data)



//rest
function sum(num, ...values) {
    console.log(values)
    console.log(num + values[0])
    return num + values[0];
}

sum(1,1,2,3)