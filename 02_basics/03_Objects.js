//Objects are mainly declared in two ways ----
//Object Literal Method -In case of the object literal method no Singleton is formed.
const password = Symbol("Aritra12")    //Declaration of the Symbol outside the Object Scope.
const newObj = {
    name:"Aritra",
    age:19,
    email:"Aritra@google.com",
    [password]:"Aritra12"    //This is the way of forming a symbol in an object

}
console.log(newObj);

//There are two ways of accessing the elements of an array ----
//In reality the Keys are also of string data type and therefore while accessing it by Dot we do not Double Quotes,But while accessing it by Third Brackets we neeed to specify that the Key is of String Data Type by giving Double Quotes on it.
console.log( newObj.name);
console.log(newObj["name"]);

//Using this Third Bracket System to access values are necessary for accessing two types of Keys ----
//One is the Keys which are already mentioned as String by using the Double Quotes.So,they cannot be accessed by using the Dot Method.
//Symbols in an Object are already in Third Brackets .So,they are accessed by using the Third Bracket Method only and they cannot be accessed by the Dot Method .




//In order to stop anymore changes in the Object we use Object.freeze() Function ----
Object.freeze(newObj)