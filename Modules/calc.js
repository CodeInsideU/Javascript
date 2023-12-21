function add(a,b){
    console.log(a+b);
}
function sub(a,b){
    console.log(a-b);
}

function mult(a,b){
    console.log(a*b);
}

function div(a,b){
    console.log(a/b);
}

module.exports ={
    addition: add,
    substraction: sub,
    multiplication: mult, 
    division: div
}