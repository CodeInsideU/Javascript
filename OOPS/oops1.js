// console.log(this)//window object

// function displaythis(){// window object
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

// let myObj = { // window object
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

'use strict';

console.log(this)//window object

function displaythis(){// undefined
    console.log(this)
}
displaythis()

let myobj = { //object itself
    name: 'Vratik',
    age: 21,
    myfn: function(){
        console.log(this);
    }
}
myobj.myfn()

let myObj = { // undefined
    name: 'XYZ',
    age: 19,
    myFn : function(){
        function myFn1(){
            console.log(this)
        }
        myFn1()
    }
}
myObj.myFn()