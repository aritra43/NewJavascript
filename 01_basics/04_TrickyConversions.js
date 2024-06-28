// ***********************String And Number**********************************

console.log(1+2+"3")
//This will give an output of 33 (So when number is at first operations occurs then concatenation happens)

console.log("1"+2+2)
//But in this case when string is at first then concatenation occurs and no numeric operation is followed .
//So mainly it states that 
//Number=>Operation
//String=>Concatenation
//The one preceding will decide the operation

//*******************Boolean And Number*************************
console.log(true)
//it will give true 
console.log(+true)
//it will give 1 as output 
console.log(+"")
//it will give 0 as output 

//This mainly happens because + is mainly used to convert the type to number.
//So true is converted to 1
//So "" means null so it symbolizes 0 so it is converted to the number 0.

let x=3;
let y;
y=x++;
let a=5;
let b;
b=++a;
console.log(x);
console.log(y);
console.log(a);
console.log(b);