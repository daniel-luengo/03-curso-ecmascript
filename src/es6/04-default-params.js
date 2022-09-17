function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'Chile'
console.log(name, age, country);
}
newUser('David');


function newAdmin (name = 'Oscar' , age = 32 , country = 'CL') {
    console.log(name, age, country)
}
newAdmin();
newAdmin('Ana' , 28, 'PE');