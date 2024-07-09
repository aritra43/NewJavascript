// Truthy and Falsy mainly stands for conditions that are either partially true or partially false
const string = "Aritra"
if(string){
    console.log("Truthy");
}

//So,any value inside a string(Blankspace also) is considered to be a Truthy value.
const newString = ""
if(newString){
    console.log("Falsy");    //So,iit will return no output as there is a falsy value given in the condition therefore the flow of control will not enter the block of code.
}

//Falsy Values Are - false,0,-0,""(Empty String),BigInt 0n,null,undefined,NaN
//Truthy Values Are - true,"0"(Anything in a string.Even blanspaces also),[](Empty array),{}(Empty Object),function(){}(Empty Function),and any other value except the Falsy Values are considered to be Truthy Values.
//Using array as condition in if statement -
const arr = []
if(arr.length == 0)
    {
        console.log("Array is empty");
    }
    
//Using Object as condition in if statement -
const emptyObj = {}
if((Object.keys(emptyObj)).length === 0){    //As in this case the Object.keys() mainly returns an array of the keys present in the Object.Therefore this being an empty Array gives it's length to be zero(0) which matches the original condition and in this way the Object is used as a condition in an if statement. 
    console.log("Object is empty");
}    

    
    