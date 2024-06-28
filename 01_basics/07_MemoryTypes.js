//In JavaScript there are mainly two types of memory
//Stack-This is the memory utilised by the primitive data types
//Heap-This is the memory that is used mainly by the Reference Data Type(Non-Primitive Data Type)
//Example Of Stack Memory--
let real=123;  //So,real has 123 in it
let copy = real;  //So,copy has 123 in it now
let copy=123456;  //So,copy has 123456 now
//But still now real  has 123 in it .


//This mainly happens becayse in case of stack memory a copy of the varibale is passed and not the real variable.So,any changes in the copy variable will not reflect in the real variable.


//Example Of Heap Memory--
let real= {
    numOne:50
    numTwo:100
}
let copy = real;
console.log(copy.numOne);
