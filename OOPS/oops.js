// is a computer programming model that organizes
// software design around data, or objects rather than functions and logic

// JavaScript is not actually an object oriented language
// it's called "prototypal" because the way it creates new objects

// -> this keyword
// this keyword refers to an object that is executing the current 
// piece of code. It references the object that is executing the current function
// Node.js              
// Non strict this keyword
// a = 10 
// console.log(a)
// console.log(this)// empty object
// function displayThis(){ // global object
//     console.log(this);
// }
// displayThis();

// let myobj = { //object itself
//     name: 'Vratik',
//     age: 21,
//     myfn: function(){
//         console.log(this.name);
//     }
// }
// myobj.myfn()

// let myObj = { // global object
//     name: 'XYZ',
//     age: 19,
//     myFn : function(){
//         function myFn1(){
//             console.log(this)
//         }
//         myFn1()
//     }
// }
// myObj.myFn()


// Strict 
// 'use strict';
// let b = 20;
// console.log(b)
// console.log(this)// empty object

// function displaythis(){// undefined
//     console.log(this)
// }
// displaythis()

// let myobj = { //object itself
//     name: 'Vratik',
//     age: 21,
//     myfn: function(){
//         console.log(this);
//     }
// }
// myobj.myfn()

// let myObj = { // undefined
//     name: 'XYZ',
//     age: 19,
//     myFn : function(){
//         function myFn1(){
//             console.log(this)
//         }
//         myFn1()
//     }
// }
// myObj.myFn()


// Browser strict and Non strict


// -> constructor functions
// function createCar(name,_company,_color){
//     this.name = name
//     this.company = _company
//     this.color = _color
//     this.drive = function(){
//         console.log(`I am driving ${this.name} and it is of ${this.color} color`)
//     }
// }
// let car1 = new createCar('x4', 'BMW', 'Red')
// let car2 = new createCar('s-class', 'Mercedes', 'White')
// // console.log(car1,car2)
// car1.drive()


// // -> classes
// class Person{
//     constructor(_name, _age){
//         this.name = _name
//         this.age = _age
//     }
//     welcome(){
//         console.log(`Hello I am ${this.name} and I am ${this.age} years old`)
//     }
// }

// let Person1 = new Person('Adam', 20)
// let Person2 = new Person('John', 16)
// console.log(Person1, Person2)
// Person1.welcome()
// Person2.welcome()


// -> classical inheritance
// methods and properties from base class can be put down
// or can be passed into derived class
// class Person{
//     constructor(_name, _age){
//         this.name = _name
//         this.age = _age
//     }
//     welcome(){
//         console.log(`Welcome ${this.name}`)
//     }
// }
// class Teacher extends Person{
//     constructor(_name,_age, _classStrength){
//         super(_name, _age)
//         this.classStrength = _classStrength
//     }
// }
// class Student{

// }

// let Person1 = new Person('Adam', 20)
// console.log(Person1)
// let Teacher1 = new Teacher('Mark', 23, 70)
// console.log(Teacher1)
// Teacher1.welcome()


// -> encapsulation
// function Person(_name, _age){
//     this.name = _name
//     this.age = _age
//     this.getName = function(){
//         return name
//     }
// }


// let Person1 = new Person('Adam', 20)
// // Person1.name = 'Steve'
// console.log(Person1.getName)



// -> polymorphism
// class Animal{
//     sound(){
//         console.log(`Animals make different sounds`)
//     }
// }
// class dog{
//     sound(){
//         console.log(`Dog Bark`)
//     }
// }
// class cat{
//     sound(){
//         console.log(`Cat meow`)
//     }
// }
// let Animal1 = new Animal()
// let tommy = new dog()
// let percy = new cat()
// tommy.sound()
// percy.sound()
// Animal1.sound()


// -> prototype object
// -> prototypal inheritance
// -> call apply bind
