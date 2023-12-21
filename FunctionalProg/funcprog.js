// designed to handle functions in a better way in js(mainly pure functions)

// -> imperative and declarative way of writing code
// Imperative -> how to go about a problem
// we will be given a number we have to check that if the square of that number is even or not
// const a = 5;
// let isEven;
// if(a*a % 2 == 0){
//     isEven = true;
// }
// else{
//     isEven = false;
// }
// console.log(isEven)
// // Declarative  -> what you want the system to do
// const checkForSquare = (x) => (x*x % 2 == 0 ? true : false)
// console.log(checkForSquare(5))


// -> pure functions and what are side effects
// what is impure function
var c = 2;
function add(x){
    console.log(x+c);
    c++;
}
add(2)
add(2)
add(2)
// what is pure function
// -> is a function in which the same input always returns the same output
// -> produces no side effects
function addPure(x,c){
    // console.log(x+c);//console is external resource and that's why its not pure
    return x+c;
}
console.log(addPure(4,5))//console is used outside of pure function 


// ->callback functions
// is a function that is passed into anoter function as an argument
// this function can then be invoked at a later stage of time.
// functions are objects, functions can be passed as arguments
// function printFirstName(firstName, cb){
//     console.log(firstName)
//     cb('Zade')
// }
// function printLastName(lastName){
//     console.log(lastName)
// }
// printFirstName("Vratik", printLastName)

const isEven = (n) =>{
    return n % 2 == 0
}

let printResult = (evenFn, num) =>{
    const isNumEven = evenFn(num)
    console.log(`The number ${num} is an Even Number ${isNumEven}`)
}
printResult(isEven, 16)


// -> Higher order functions (map, filter, reduce etc)
// functions that operate on other functions, either by taking them as arguments
// or by returning them.
// function that recieves a function as an argument or returns the function as output
// let arr = [1,2,3,4,5]
// let squareArr = []
// for(let i = 0; i<arr.length; i++){
//     squareArr.push(arr[i]*arr[i])
// }
// console.log(squareArr)

// using map
// map method will always return you a new array with your results
// const arr = [1,2,3,4,5]
// const squareNum = arr.map(function(y){
//     return y*y;
// })
// console.log(squareNum)

// const transaction = [1000,3000,4000, 2000, -838,, 5000, -1500]
// const inrtoDollar = 80;
// let transtoDollar = transaction.map((d)=>{
//     return (d/inrtoDollar).toFixed(0);
// })
// console.log(transtoDollar)

// using for each
// let transtoDollar = transaction.forEach((d)=>{
//         console.log((d/inrtoDollar).toFixed(0));
//     })

// find
// returns the first element of an array that satisfy the condition
const transactions = [3400, 3450,5678, -838, -456, 1000]
let firstWithdrawl = transactions.find(function(n)
{
    return n<0;
})
console.log(firstWithdrawl)

let firstWithdrawlIndex = transactions.findIndex(function(n)
{
    return n<0;
})
console.log(firstWithdrawlIndex)

// some
// it will return true if even 1 element satisfies the condition
let result = transactions.some(function(n){
    return n<0
})
console.log(result)

// every
// it will return true if all element satisfies the condition
let result1 = transactions.every(function(n){
    return n<0
})
console.log(result1)

// filter
// you have to check even numbers in an array and put them in separate array
// let nums = [1,2,20,35,12,17,46]
// let evenArr = []
// for (let i = 0; i<nums.length; i++){
//     if(nums[i]%2==0){
//         evenArr.push(nums[i])
//     }
// }
// console.log(evenArr)

// using filter
let num1 = [1,2,20,35,12,17,46]
let evenNum = num1.filter(function(n){
    return n%2===0;
})
console.log(evenNum)

const transaction = [1000,3000,4000, 2000, -838,, 5000, -1500]
const depositedAmount = transaction.filter(function(amount){
    return amount>0;
})
console.log(depositedAmount)


// Reduce
// you need the sum of every element in an array
// let num2 = [1,2,3,4,10];
// let sum = 0;
// for(let i = 0; i< num2.length; i++){
//     sum += num2[i];
// }
// console.log(sum)

let num2 = [1,2,3,4,10];
let sum = num2.reduce(function(acc,currVal){
    let updatedSum = acc + currVal
    return updatedSum
},0)
console.log(sum)
// -> composition
// -> closuamount
// -> curryamount

// chaining method
// chain method with each other
let arr = [
    {name: 'John', age: 20, gender: 'M'},
    {name: 'Jane', age: 19, gender: 'F'},
    {name: 'Oliver', age: 17, gender: 'M'},
    {name: 'Emma', age: 21, gender: 'F'}
]


let age = arr.filter(function(obj){
    return obj.gender == 'M'
}).map(function(male){
    return male.age;
})

console.log(age)