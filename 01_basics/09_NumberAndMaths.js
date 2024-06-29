// *************************Numbers******************************

//There are two ways to declare number ----
const myNum = 100

const newNum = new Number(100)
console.log(myNum);
console.log(newNum);

//There are also some functions in case of numbers ----
console.log(myNum.toString);  //Converts numbers to string
console.log(newNum.toFixed);  //Decides the number of digits after decimal point (In this case it is 2)(100.00)
let otherNumber = 123.69
console.log(otherNumber.toPrecision(4));     //This is mainly the function that is used to specify the number of significant figures in a number .This function mainly returns in String Data Type and it mainly rounds of the number while maintaining the number of significant figures.(Output for this is 123.7)

console.log(otherNumber.toPrecision(3));  //Outpuut is 124

let hundreds = 1000000
console.log(hundreds.toLocaleString());    //This toLocaleString() converts Big Hundreds Numbers in readable manner by adding commas in between zeroes(0).But toLocaleString() function mainly follows the US number system(1,000,000).(Output is 1,000,000).

//console.log(hundreds.toLocaleString(en-IN));  //This toLocaleString function mainly follows the Indian Number System to make the big hundreds number readable by adding commas in between zeroes,but by following the Indian Number System.(Output is 10,00,000).


// ***********************************Maths*****************************

//There are various functions present in JavaScript which are used in order to perform mathematical operations -----
let new = 10.22
console.log(Math.abs(-4));  //Math.abs() function mainly converts into positive value.(Output is 4) 
console.log(Math.round(new));  //Math.round() function mainly rounds off the given number.(Output is 10)
console.log(Math.ceil(new));    //Math.ceil() function is used to give the higher number.(Output is 11)
console.log(Math.floor(new));    //Math.floor() function is used to give the lower number.(Output is 10)
console.log(Math.min(2,4,6,8,9));    //Math.min() function mainly gives the minimum value out of the given array of numbers.(Output is 2)
console.log(Math.max(2,4,6,8,9));    //Math.max() function mainly guves the maximum value out of the given array of numbers.(Output is 9)


console.log(Math.random());  //Math.random() function mainly gives any random value between 0 and 1.
console.log((Math.random() * 10) + 1);  //This is mainly used to give any random value that is greater than 1.
console.log(Math.floor((Math.random()*10) + 1));    //This is mainly used to give any random value that is greater than 1 and is a whole number.
let min = 10
let max = 20
console.log(Math.floor((Math.random() * (max - min +1)) + min));    //This is mainly used to give a random whole number between the gievn maximum and minimum range.
