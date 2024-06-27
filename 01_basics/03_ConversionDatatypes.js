let score = ""
let other;
let ChangeToNumber = Number(score)

console.log(typeof ChangeToNumber);
console.log(ChangeToNumber);

//Type conversion to number of
//"33" is number(33)
//any value containing both number and letter("33abc") is number(NaN(Not a Number))
//string =>  is number(NaN(Not a Number))
//undefined => number(NaN)
//null => number(0)

//Type conversion to boolean of number
//1 =>true
//0 =>false
//"" =>false(as no value in double quotes is treated as null that is 0 .So,0 is converted into false while type conversion to boolean)
//"any value" =>true(as presence of any value is treated as the value is not zero .So,the value is converted to true while type converssion to boolean)
