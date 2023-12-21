let myObj = {}
console.log(myObj)
// object -> object prototype prebuilt
let Person1 = {
    name: 'Adam',
    age: 20
}
console.log(Person1.hasOwnProperty('gender'))

// constructor fn
// person -> person prototype object prototype prebuilt
// person prototype -> object prototype
//   |                     |
// greet()               null container(pass error)
// this process is called prototype chaining
function Person(_name, _age){
    this.name = _name
    this.age = _age
}

let person2 = new Person('Steve', 30)
console.log(person2)