
//The reason for discarding var to declare variables ----
let a = 10
const b = 20
var c = 30
console.log(a);
console.log(b);
console.log(c);
//For these aforementioned statements the correct output will be returned 

if(true){
    let d = 10
    const e = 20
    var f = 40
}
console.log(d);    //Error will be displayed.As in case of the d variable it is declared b y using let so it follows the local scope of f therefore the variable d is not accessible outside the local scope of if statement.
console.log(e);    //Error will be displayed.As in this case the variable e is declared using const therefore as const follows the local variable of the if statement therefore the variable e is not accessible outside the local scope of the if statement.
console.log(f);    //Output will be returned.But this should not happen as the f variable is declared inside the local scope of if ,as here var does not follow the scope properly therefore the variables are even accessible outside of the local scope of if statement.