//This Keyword is mainly used in order to refer to any variable present in the current context.
let newObj = {
    username : "Aritra",
    age : 19 ,
    newFunction : function(){
        console.log(`${this.username},wecome to the website`);    //Here This Keyword is used in order to refer to the current context,here the scope of the object is the current context for the Function.
    }
}
newObj.newFunction()    //This is the way of calling a function from within an object.
newObj.username = "Aditi"    //Here the value of the variable present in the Object is changed by calling it using the Dot Method.
newObj.newFunction()    //This will print the log statement in the Function,but this time with the modified variable value .

//But if This Keyword is printed in Global Scope in Node Environment then
console.log(this);    //This will return a blank object {} , as in case of the Node Environment there is no Global Object.

//But if we run this in the browser
console.log(this);     //It will retrun the object of Windows,as for the browser the Global Object is the Windows.

//If we run This Keyword in a function then
function one(){
    console.log(this);    //It will return a lot of Objects present in the Function.
}
one()

//But if we use This Keyword to refer to a variable in a Function then
function two(){
    usernameTwo = "Aritra"
    console.log(this.username);    //It will return Undefined as This Keyword does not work for Functions.It is only applicable for Objects.
}
two()

//Arrow Function
//Declaration of Arrow Function
() => {}    //For Explicit Return
() => ()    //For Implicit Return

//Arrow Functions can also be stored in a variable
const arrowVaribale = () => {}

//Explicit Return Arrow Function - This is mainly the Arrow Function in which the return Keyword has to be written explicitly for obtaining the output.
const newOne = (num1 , num2) => {
    return num1 + num2
} 
console.log(newOne(2,4));
//Implicit Return Arrow Function - This is mainly the Arrow Function in which the return Keyword is not needed to be mentioned in oreder to obtain the output.This Implicit Return Arrow Function is extensively used in the React.js Programming Language.
const newTwo = (num1 , num2) => (num1 + num2)
console.log(newTwo(3 , 4));


//For returning Objects using Implicit Return Arrow Function we need to use the Paranthesis
const newThree = () => ({username : "Aritra"})
console.log(newThree());