//This mainly deals with the Nested Scope of the Functions or the Closure Scope
 function one(){
    const FirstName = "Aritra"
        function two(){
            const LastName = "Mukhopadhyay"
            console.log(FirstName);    //Here the required output will be obtained as according to the Closure Scope the Child Function will be able to access the data of the Parent Function .
        }
       // console.log(Lastname);    //Here an error will be displayed as according to the Closure Scope the Parent Function will not be able to access the data of  the Child Function .
        two()
 }
one()    //Here the flow of control for the Nested Function will be as follows -
//At first the whole function one() will be executed as the first statement of the code to be executed is the Calling Statement of the Function one() and then inside the function one() after the execution of the function one() the function two() is called in it and therefore the function two() will be executed next .



//Hoisting 
//We have two different ways of Function declaration 
function newOne() {
    console.log("Function Is newOne");
}
newOne()    //Evene if we call the Function before it's declaration in this case ,the Function will be executed
const newTwo = function() {
    console.log("Function Is newTwo");
}
newTwo()    //But in this case if we call the Function after the Function Declaration then the Function will be executed but if we call the Function before the Function Declaration then the Function will not be executed according to the method of Hoisting.(As the Function is stored in a variable,so,before the initialization of the variable the variable which in this case has the function cannot be called or else it will show an error .) 