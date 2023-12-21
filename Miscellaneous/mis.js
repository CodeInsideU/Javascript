// -> Comparison operator
// let a = 2
// let b = 2
// let b = '2'
// console.log(a==b) // loose checking
// console.log(a===b)  //  strict checking


// -> truthy and falsy values
// let a = 1
// false
// 0
// -0
// 0n
// '', "",``(empty string)
// null
// undefined
// NaN
// if(a){
//     console.log('I am truly')
// }
// else{
//     console.log('I am falsy')
// }


// -> primitive and reference data types
// let firstPerson = 'Adam'
// let secondPerson = firstPerson
// firstPerson = 'Steve'
// console.log(firstPerson)
// console.log(secondPerson)
// let firstPerson = {
//     name: 'Adam',
//     age: 23
// }

// let secondPerson = firstPerson
// firstPerson.name = 'Steve'
// console.log(firstPerson)
// console.log(secondPerson)

// Primitive -> stack memory
// Numbers
// Strings
// NULL
// Boolean
// Undefined

// References -> heap memory
// Objects
// Functions
// Arrays

// -> deep copy shallow copy
// spread operator{...}
// let firstPerson = {
//     name: 'Adam',
//     age: 23,
//     address: {
//         city : 'Lucknow',
//         state : 'UP'
//     }
// }

// Deep copy
// let secondPerson = JSON.parse(JSON.stringify(firstPerson))
// secondPerson.address.city = 'Delhi'
// console.log(firstPerson)
// console.log(secondPerson)

//shallow copy
// let secondPerson = {...firstPerson}
// secondPerson.name = 'Steve'
// secondPerson.address.city = 'Delhi'


// console.log(firstPerson)
// console.log(secondPerson)


// -> closures
//lexical scope
// function test(){
//     let a = 2
//     function test1(){
//         console.log(a)
//     }
//     return test1
// }

// let fun = test()
// console.log(fun)
// fun()

//nested closure
// function greet(){
//     let name = 'Steve'
//     function displayName(){
//         console.log('Hi '+name)
//         let age = 25
//         function displayAge(){
//             console.log('My age is', age, name)
//         }
//         return displayAge
//     }
//     return displayName
// }

// let g1 = greet()
// let g2 = g1()
// g2()


// -> currying
// larger function into smaller function
// let sum = function(x, y){
//     console.log(x+y)
// }
// sum(2,3)
// let sumCurried = function(x){
//     return function(y){
//         console.log(x+y)
//     }
// }
// let sumTwoNumbers = sumCurried(2)
// console.log(sumTwoNumbers)

// -> null vs undefined vs not defined
// let a;
// console.log(a)
// let arr = [1,2, ,4]
// console.log(arr[2])
// function add(a,b){
//     let c = a+b
    // return c
// }
// let sum = add(2,3)
// console.log(sum)

//null
// let mylife = null 
// console.log(mylife)

// console.log(c)


// -> typeof operator and Array.isArray method
// typeof
// let a = 2
// console.log(typeof a)

// Array.isArray
// let arr = [1,2,3]
// console.log(typeof arr)
// let arr1 = Array.isArray(arr)
// console.log(typeof arr1)