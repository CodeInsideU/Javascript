// if else condition
var myScores = 92
myScores = 70
if(myScores > 90){
    console.log('got the bicycle')
}
else{
    console.log('not bicycle')
}

// grade sheet
// 90 to 100  - A
// 70 to 89 - B
// 50 to 69 - C
// lower than 50 - F

var studentScores = 95;
if(studentScores > 90){
    console.log("Grade: A");
}
else if(studentScores >= 70 && studentScores <= 89){
    console.log("Grade: B");
}
else if(studentScores >= 50 && studentScores <= 79){
    console.log("Grade: C")
}
else {
    console.log("Grade: F")
}

// for loop
// loops are the statements that we can 
// use to control a flow of the program and to do some repetitive

var c = 'Hello world'
for(let i = 0; i<=10; i++){
    console.log(c , i);
}

// you have an array and you have to square each element of an array
var num = [2,3,4,5,6,7,8]
var SquaredArr =[];
for(let i = 0; i<num.length;i++){
    SquaredArr.push(num[i]*num[i])
}
console.log(SquaredArr)


// while loop
var i =1;
var n =10;
while(i<=n){
    //codes goes here
    console.log(i);
    i++;
}

// do while loop
var j = 11;
var nums = 10;
do{
    console.log(j)
    j++
}
while(j<=nums)

// for in loop
var colors = {
    primary: 'Blue',
    secondary: 'Red',
    tertiary: 'white'
}

// syntax
for(var color in colors){
    // console.log(colors[color])
    console.log(color+'->'+colors[color])
}

var colorsArray = ['Yellow','Green','Orange','Pink']
for(var color in colorsArray){
    console.log(color+'->'+colorsArray[color])
}

// for of loop
var scores = [60, 90, 80, 75]
for(var score of scores){
    console.log(score)
}
// method - entries[]
let colors1 = ['Red','white']
for(var [index,color] of colors1.entries()){
    console.log(index+'->'+color)
}

var x = 'Scaler'
for(var c of x){
    console.log(c)
}