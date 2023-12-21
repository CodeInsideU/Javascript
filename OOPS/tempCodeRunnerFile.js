a = 10 
console.log(a)
console.log(this)// empty object
function displayThis(){ // global object
    console.log(this);
}
displayThis();

let myobj = { //object itself
    name: 'Vratik',
    age: 21,
    myfn: function(){
        console.log(this.name);
    }
}
myobj.myfn()

let myObj = { // global object
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