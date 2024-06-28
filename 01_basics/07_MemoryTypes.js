//In JavaScript there are mainly two types of memory
//Stack-This is the memory utilised by the primitive data types
//Heap-This is the memory that is used mainly by the Reference Data Type(Non-Primitive Data Type)
//Example Of Stack Memory--
//let real=123;  //So,real has 123 in it
//let copy = real;  //So,copy has 123 in it now
//let copy=123456;  //So,copy has 123456 now
//But still now real  has 123 in it .


//This mainly happens becayse in case of stack memory a copy of the varibale is passed and not the real variable.So,any changes in the copy variable will not reflect in the real variable.


//Example Of Heap Memory--
let real= {
    numOne : 50
}
let copy = real;
copy.numOne = 150
console.log(copy.numOne);
console.log(real.numOne);
console.log(real.numTwo);

//In this case as object is used therefore it is a Reference Data Type(Non-Primitive Data Type) .Therefore,it mainly utilises the heap ememory .So,when the real object is stored in another variable then instead of passsing a copy of the real object it mainly passes the original reference to the copy variable.So,any changes brought about in the copy variable brings about a change in the original content and hence as the reference point of the both variables in case of the heap memory is same therefore it also brings about a change in the real value on changing the value of the copy variable.

//This in case of the stack memeory will not happen as when the real avriable is stored in the copy variable then it mainly passes a copy of the real variable so any change in the copy variable will not be reflected on the value of the real variable .

