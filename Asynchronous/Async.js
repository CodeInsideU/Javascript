// what is synchronous and asynchronous behaviour
// sync prog means it will use a single-thread so only
// one operation or program will run at a time
// sync is blocking


// Async is non blocking, which means it will send multiple
// request to a server at a time

// why do we need async js

// -> what is async prog?
// async prog
// -> callbacks
// -> callback queue and the event loop
// no order for callbacks to be executed
// serial execution
// const fs = require('fs')
// console.log('First Line')
// fs.readFile('f1.txt', cb1)
// function cb1(err, data){
//     if(err){
//         console.log(err)
//     }
//     console.log('File 1 data ->', data)
//     fs.readFile('f2.txt', cb2) // to excute the code in serial order
// }


// function cb2(err, data){
//     if(err){
//         console.log(err)
//     }
//     console.log('File 2 data ->', data)
//     fs.readFile('f3.txt', cb3)
// }

// function cb3(err, data){
//     if(err){
//         console.log(err)
//     }
//     console.log('File 3 data ->', data)
// }
// console.log('Last line')


// setTimeout(cb, 2000//2sec)
// console.log('Before')
// function greet(){
//     console.log('Hello from the setTimeout')
// }
// setTimeout(greet, 3000)
// console.log('After')


// setInterval() 
// function Hello(){
//     console.log('Hello')
// }
// let timer = setInterval(Hello, 1000)
// setTimeout(function(){
//     clearInterval(timer)
// }, 3000)


// -> Promises
// how to produce a promise
// let myPromise = new Promise(function(resolve, reject){
//     const a = 3
//     const b = 4
//     setTimeout(()=> {
//         if(a == b){
//             resolve('The values are equal')
//         }
//         else{
//             reject('The values are not equal')
//         }
//     }, 3000)
// })

// 1. Pending State
// console.log(myPromise)

// 2. Fulfilled state -> .then method
// consuming promises
// myPromise.then(function(result){
//     console.log(result)
// })//fullfiled state
// myPromise.catch(function(err){
//     console.log(err)
// })//rejected state
//settled state

//next example for promises
// Placing order for coffee
// function placeOrder(drink){
//     return new Promise(function(resolve, reject){
//         if(drink == 'coffee'){//only coffee will be served
//             resolve('Order for coffee recieved')
//         }
//         else{
//             reject('Other orders rejected')
//         }
//     })
// }

// //Order for coffee is being processed 
// // its resolve is to serve the order
// function processOrder(order){
//     return new Promise(function(resolve){
//         console.log('Order is being Processed')
//         resolve(`${order} is Served`)
//     })
// }

// // Order for coffee recieved is served
// // placeOrder('coffee').then(function(orderPlaced){
// //     console.log(orderPlaced)
// //     let orderIsProcessed = processOrder(orderPlaced)
// //     return orderIsProcessed
// // }).then(function(processedOrder){
// //     console.log(processedOrder)
// // })// chaining of promises
// // .catch(function(err){
// //     console.log(err)
// // })
// //Solution with promises


// // -> async await -> keywords
// async function serveOrder(){
//     try{
//         let orderPlaced = await placeOrder('coffee')
//     console.log(orderPlaced)
//     let processedOrder = await processOrder(orderPlaced)
//     console.log(processedOrder)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// serveOrder()



// // -> microtask queue
// // sync output -> call stack
// // settimeout output -> task queue / callback queue
// // promise output -> micro task queue
// // order of execution
// // call stack > microtask queue > task queue
// // microtask -> callstack -> then it will executed
// // task queue -> callstack -> it will get executed
// // -> sequential and parallel execution of code

