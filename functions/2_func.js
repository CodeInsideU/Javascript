
// hoisting

console.log(greet())
console.log(a)
var a = 'hi'
function greet(){
    var b = 'Hello World'
    return b;
}

var add = function (a,b){
    console.log(a+b)
}