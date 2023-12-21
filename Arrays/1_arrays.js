// Arrays  provides you an ordered collection of data

var arr = [12, 'Ferrari', true, 12.4];

console.log(arr);

// accessing the elements
var a = arr[1]
console.log(a)

// Replacing elements of array
arr[1] = 'Bentley'
console.log(arr[1])

console.log(arr.length)

// inbuilt js array methods
// pop used to remove element from last of an array
// push used to add element from last of an array
var arr2 = [12, 14, 56, 34]
arr2.pop()
console.log('pop array', arr2)
arr2.push(29)
console.log('push array', arr2)

// shift method
// remove element from starting of array
// unshift method
// add element from starting of array
arr2.shift()
console.log('shift array', arr2)
arr2.unshift(34)
console.log('unshift array', arr2)