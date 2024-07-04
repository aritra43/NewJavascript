//IIFE - IIFE mainly stands for Immediately Invoked Functions Expressions.
//IIFE - This is mainly a function expression which allows immediate invoking of  Function which is declared already.
//There are two reasons for using IIFE - 
//One is that there are some Functions that has to be excuted just as the server loads up,therefore IIFE is used for the immediate invoking of the required Function.
//Second is that by using the IIFE we can create a much more specific scope of a Function by using Paranthesis and therefor pollution by Global Variables is much more reduced which is better fpr the proper function of the LOcal Variables because of no interference of the Global Variables in the functioning of the Local Variables.

//There are two types of IIFE - 
//One is the Named IIFE(These are mainly the normal Functions) - 
(function one(){
    console.log("Aritra");
})
();    //In case of IIFE we do not use the Function name for calling the Function.
//In the above calling statement we need to use a semicolon in order to terminate the flow of control  of the first IIFE as the IIFE cannot terminate their flow of control by itself.

//And the other is the Unnamed IIFE(These are mainly the Arrow Functions) -  
((name) => {
    console.log(`The name is , ${name}`);
})
("Aditi")