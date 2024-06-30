///Merging of two arrays using different functions ----
const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]

//Using Push Function
//arr1.push(arr2)    //So while merging using push method we mainly get an array within another array.
//console.log(arr1);

//Using Concat Function
const arr3 = arr1.concat(arr2)    //But in reality it should be a merged array with no array within another array.
console.log(arr3);

//Using Spread Operator Function
const arr4 = [...arr1 ,...arr2]    //Here the resultant array is an array of both the arrays merged together.
console.log(arr4);


//Forming Arrays From String Or From Elements ----
const string = "Aritra"
console.log(Array.from(string));    //It mainly forms an array from the given String using the Array.from Function.

const first = 25
const second = 35
const third = 45
console.log(Array.of(first,second,third));    //It mainly forms an array from ghe given elements using the Array.of Function.


//When there is an array within another array then to resolve it into a single dimensional array we use Array.flat Function ----
const arr9 = [1,2,3,[4,5,6],[7,8,[9,10,11]]]
console.log(arr9.flat(Infinity));    //Here Infinity mainly represents the depth till which the array is to be resolved.

console.log(Array.from({hello:"Aritra"}));    //In ithis case we get a blank array as we have to clarify whose array has to be made .That is from the Key or from the Value of the Key-Value Pair.