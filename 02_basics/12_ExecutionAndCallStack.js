//Whenever a JavaScript program runs it-
//At first creates a Global Execution Context (Global EC)
//There are three types of Execution Context -
//One is the Global Execution Context(GEC)
//Second is the Function Execution Context(FEC)
//Third is  the Eval Execution Conntext(EEC).(This is mainly a part of the Global Execution Context)
//For this Execution Context it is followed by the Memory Creation Phase
//And then it forms the Execution Phase
//In the memory creation phase all the variables are taken into account ,and they are fed with undefined value
//In the Execution Phase all the operations occurs and the variables are fed with the real given values by the user.
//Then comes the next part that is dealing with Function -
//Whenever a Function is executed then it mainly leads to the creation of a new Function Execution Context
//Therefore as there is the creation of an Executional Context it is followed by the Memory Space Creation and then the Execution Phase.
//In the Memory Space Creation all the parameters are fed with undefined value and then the storing variable is also fed with undefined value 
//Then in the Execution Phase at first the parameters are fed by real given values and then all the operations occur.So,the variable storing the Function Calling Statement is fed with the operated value here in the Execution Phase.

//So,for each Function a new Executional Context is created.

//Call Stack -
//It is mainly like a container that contains all the executing data in it.
//So while execution Global  Execution Context is the first thing that is fed in the Call Stack.
//Then when a Function is encountered it enters the Call Stack and after Memory Creation Phase and Execution Phase it leaves the Call Stack.
//But when Nested Function is used then in that casse more than one Function enters the Call Stack.
//So,here the LIFO Principle os followed that is LAST IN FIRST OUT .
//So,the Function entering the Call Stack at last is going to leave the Call Stack at the first.