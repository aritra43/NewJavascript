//For concatenation of two strings ----
console.log("Hello" + "World");  //But this is the outdated approach of string concatenation

//So nowadays we mainly use the Backtick(` `)Method .This mainly does String Interolation that is it allows to inject Variables within a given string at any position and also allows to perform any tasks (Like converting to upper case or converting to lower case).

//For Backtick Method --
let myName = "Aritra"
let age  = 19
console.log(`Hi my name is ${myName} and my age is ${age}`);


//There are two methods for declaring a string -----
const name = "Aritra"
const newName = new String('Aritra')

//There are various functions which are used to perform various String Operations
//https://www.w3schools.com/js/js_string_methods.asp(These are present in the given link)


//In the case of string we can use the functions by -----

console.log(name.length)  //output is 6
console.log(name.toUpperCase()); //output is ARITRA