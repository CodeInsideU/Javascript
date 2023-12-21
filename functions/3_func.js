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