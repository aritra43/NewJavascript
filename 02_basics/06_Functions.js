//Function Declaration ----
function myFunc(number1,number2) {
number1 + number2
console.log(number1+number2);    //Printing the output within the Function
}

//Function Calling ----
myFunc(3,5)    //Output is 8
let printVar = myFunc(3,5)
console.log(printVar);    //But now on printing the Function will return Undefined as there is no return statement used in the Function,so the Function has No Data Defined that has to be Returned.
//But if we want to print outside the Function

function newFunc(num1,num2){
    let sum = num1 + num2 
    return sum
}
let printVariable = newFunc(3,5)
console.log(printVariable);