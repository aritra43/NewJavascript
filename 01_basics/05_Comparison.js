//== => it mainly checks the two values by converting any data type to number
//>,<,<=,>= =>these mainly are used in order to compare two values by changning their data types to number
//=== => this is used for strict checking purposes where here two values are checked with their original data types.

console.log("1"==1); //true
console.log("1"===1);  //false as the data types are also taken into account

//Any check with undefined will givve false (Undefined and Null are two different things..Undefined is itself a data type and Null is a standalone value that represents an empty memory location).
//During any check with Null it is considered to be 0(When Null is converted into number,it is considered to be 0)