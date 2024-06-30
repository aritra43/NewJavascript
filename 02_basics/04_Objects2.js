//This is mainly the Constructor method of declaring an Object where it is mainly Singleton in nature.
let newObj = new Object()


//But the Literal method of declarartion of Object is different and is not Singleton.
 let hello = {}
 hello.name = "Aritra"
 hello.age = 19
 hello.email = "Aritra@google.com"


 //Now an Object can ahve another Object in it ----
 let hello2 = {
     colour :{
         username : {
            col1 : "Black",
            col2 : "White",
        }
    }
 }

 //Now to access an element from the Object we need to access the elements by the Dot Method by repetatively nesting them 
 console.log(hello2.colour.username.col1);    //Soo,the output is Black


 //Merging of two Objects ----
 let obj1 = {
    1:"a" ,2:"b"
 }
 let obj2 = {
    3:"a" ,4:"b"
 }
 let obj3 = {
    5:"a" ,6:"b"
 }

 //So here we can normally put these three Objects in a third Object but then they will not be merged and it will create a situation of Object inside another Object.

 let obj4 = {obj1 ,obj2 ,obj3}
 console.log(obj4);    
 //The output is 
 //{
   // obj1: { '1': 'a', '2': 'b' },
    //obj2: { '3': 'a', '4': 'b' },
    //obj3: { '5': 'a', '6': 'b' }
  //}

  //But in order to really merge Objects we use the Object.assign Function or we use the Spread Operator like in array.

  let obj5 = Object.assign({},obj1 ,obj2 ,obj3)    //Here the first vacant curly braces is considered to be the Target where the Merged Object is stored.
  console.log(obj5); //Output is { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

  let obj6 = {...obj1 ,...obj2 ,...obj3}
  console.log(obj6);    //Output is { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }



  //We can extract the Keys,Values and Key-Value Pairs in the form of Arrays using various Functions like ----
  console.log(Object.keys(newObj));    //It mainly returns the Keys in an array as Strings in it.
  console.log(Object.values(newObj));    //It mainly returns the valuies in an array.
  console.log(Object.entries(newObj));    //It mainly returns the Key-Value Pairs seperated by a comma in an array.


  //To check wether any Key is present in an Object or not we use Object.hasOwnProperty() Function ----
//  let arr1 = [1,2,3,4,5,6,7,8,9]
//   console.log(arr1.includes(1)); 
console.log(Object.hasOwnProperty("email"));