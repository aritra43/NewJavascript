//Arrays
const myArray = [0,1,2,3,4,5]
const newArray = new Array(0,1,2,3,4,5)

//Arrays mainly forms Shallow Copy and Array does not forms Deep Copy.
//Shallow Copy is the type of copy where the real document and the copy document has the same reference point.
//Deep Copy is the type of copy where the real document and the copy document does not have the same reference point.But instead a copy of the real document is sent to the copy variable .

//There are various functions that can be used in order to perform various operations with arrays ----

console.log(myArray.push(6));    //This mainly adds the number at the end of the array
console.log(myArray.pop);    //This main ly removes the last element of the array
console.log(myArray.unshift(-1));    //This mainly adds an element to the beginning of the array(This is not preferred as due to the addition of an element at the beginning of the array the whole indexing of the elements gets changed or the whole indexing of the elements gets shifted)
console.log(myArray.shift());    //This mainly removes the element from the starting of the array

console.log(myArray.join());    //This mainly combines the elements of an array and converts the resultant elements into a string.

console.log(myArray.slice(1,3));    //In case of slice the end range is neglected and no change is brought about in the original array
console.log(myArray.splice(1,3));    //In case of splice the end range is taken into acccount and the elements which are in the range of the splice function are removed from the original array.


