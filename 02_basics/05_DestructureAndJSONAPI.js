//Deconstruction of an Object mainly refers to the process of breakdown of the Object ,so that the data of the Objects can be accessed.
let newObj = {
    name:"Aritra",
    email:"Aritra@google.com",
    age:19
}
//Now for the Deconstruction of the Object we use {Item Required Of The Object}
const {name} = newObj
console.log(name);    //Output is Aritra

//We can also change the usage name of the element of the Object by using {Item : New Name}
const {email:newEmail} = newObj
console.log(newEmail);    //Output is Aritra@google.com



//API-It mainly serves two purposes ----
//One is that it mainly helps in communication of two or more different languages in a given application
//And the second is that it can Collect or Give Data by itself without leting the user know the complexities of the process.(That is iyt promotes the process of Data Abstraction).
//So,when the backend mainly transmits a data then through this API the details will be send in the form of the JSON(JavaScript Object Notation) Objects.
//JSON is also an Object that has no Object name
{
    name:"Aritra",
    email:"Aritra@google.com",
    age:19
}