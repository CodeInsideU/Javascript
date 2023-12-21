// objects is an unordered collection of key-value pairs
var person = {
    firstName: "Vratik",
    secondName: "Zade",
    age: 21,
    ownsCar: true
}
console.log(person)

// dot notation
console.log(person.age)

// bracket notation
console.log(person['firstName'])

var cap = {
    firstName: 'Steve',
    secondName: 'Rogers',
    age: 102,
    isAvenger: true,
    friends: ['Buckey Barnes', 'Bruce Banner', 'Tony Stark'],
    city: {
        name: 'Brooklyn',
        pincode: 12345
    }
}

console.log(cap.friends[1])
console.log(cap.city['name'])
cap.isAvenger = false;
console.log(cap.isAvenger)

cap.movies = ['age of ultron', 'civil war', 'first avenger']
console.log(cap)

delete cap.age
console.log(cap)