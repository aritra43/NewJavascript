//Nullish Coalescing Operator(??) - This is mainly the operator that is used as a safety check for the variables tat are storing null and undefined values in it.
let value1;
value1 = null??10
console.log(value1);    //So,in this case the variable is fed with the other value(10) in order to avoid the null value that is to be stored in the variable.
let value2;
value2 = undefined??15;
console.log(value2);    //So,in this case also in order to avoid the undefined value to be stored in the variable(value2) theNullish Coalecing Operator(??) is used to feed the variable(value2) with the given alternate value(15)

//In case of more than one alternate value the first alternate will always be selected to feed the variable instead of feeding the variable with null and undefined.
let value3;
value3 = undefined??10??15;
console.log(value3);    //So,in this case the variable(value3) is fed with the first alternative(10) instead of feeding the variable with undefined.




//Ternary Operator - It is used for checking condition in a single statement.
//condition ? true statement : false statement
const price = 90;
price > 100 ? console.log("Yes,price is greater than 100"):console.log("No,price is less than 100");