let person1 = {
    firstName: 'Steve',
    lastName: 'Rogers',
    age: 102,
}

let printDetails = function(state, power){
    console.log(`Hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old and I am from ${state} aka ${power}.`)
}

let person2 = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 41,
}

//Call
printDetails.call(person2,'Manhattan', 'Iron man')

// apply
printDetails.apply(person2, ['Manhattan', 'Iron man'])//always have to use array

//bind
let myFn = printDetails.bind(person2,'New york', 'Iron man')
console.log(myFn)
myFn()

// person1.printDetails();
// person2.printDetails();