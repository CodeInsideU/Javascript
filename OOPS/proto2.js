function Person(_name, _age){
    this.name = _name
    this.age = _age
}

Person.prototype.getNameandAge = function(){
    console.log(`I am ${this.name} and my age is ${this.age}`)
    }

let Person1 = new Person('Adam', 20)
let person2 = new Person('John', 30)
console.log(Person1.getNameandAge())
console.log(person2)