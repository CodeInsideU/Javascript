// ECMA - European Computer Manufacturers Association

// -> let and const keyword
// scoping issues while using var keyword and they are functional scope not block scope.
var a = 21;
var a = 35; // redeclaration of a variable
if(a===35){
    var b =40
    console.log(b);
}
console.log(b)
console.log(a);
function  test(){
    var c = 100;
    console.log(c)
}
test()
// console.log(c)

// overcome issues using let and const
var a1 = 20
// solution for redeclartion problem
let b1 = 30
b1 = 45
// let b1 = 45 
console.log(a1)
console.log(b1)

// variable declare with let keyword
// are block scoped
// if(true){
//     var c = 30
//     console.log(c)
// }
// console.log(c)

// const
// will not allow redeclartion, reassigning and will always be 
// block scoped
const d = 70;
// not possible following code
// const d = 67; 
// d = 45;
console.log(d)


// -> arrow functions
// Arrow functions
let test1 = function(){
    console.log(1)
}
let test2 = function(a){
    console.log(a+2)
}

let test3 = function(a,b){
    console.log(a+b)
}

test1()
test2(4)
test3(2,6)

let test4 = () => {
    console.log(1)
}
test4()


// -> default parameters
// -> template literals and multi line strings
console.log('Scaler is awesome')
console.log(`Scaler
is 
Awesome`)

let y = 24
console.log('My age is', y)
console.log(`My age is ${y}`)


// -> destructuring
// it is a javascript expresstion that makes it possible 
// to unpack values from array, or properties from objects
// into distinct variables

let arr = ['Hi', 'I', 'am', 'Vratik']
let [p,q,r,s,t] = arr
console.log(p)
console.log(s)
// console.log(t)

// desturcturing an object
let myObj = {
    Name: 'Joe',
    age: 25,
    gender: 'Male',
    address: {
        country: 'England',
        city: 'London'
    }
}
let {Name : f,age : g,gender : h
, address:{country : i}} = myObj;
console.log(f)
console.log(g)
console.log(h)
console.log(i)
// -> higer order fuctinos
// -> promises
// -> classes
// -> modules


