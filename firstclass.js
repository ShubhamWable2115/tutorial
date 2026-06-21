///function are the heart of the javascript

// function statement

// a();
// function a(){
// console.log("a called");          /// this way of creating the fucntion is known as  the function statement thats it
// }

///////////////////////function expression

//  b();
//  var b =function (){
//     console.log ("b called ");
//  }

///  the major difference between the function statement and function expression is hoisting

// what if i called the "a" as well as the "b " before creating it then in the function satement it doest not show any error but in the function expression it does that b is not defined
// that is the difference between the function statment sand function expression
// that is during the hoisting phase during the memory creation phase a is created the memory and a is asigned to a in a function statement
// ANd in a case of the function expression this  b is tereated like any other variable it is asigned undefined initially  untils the code hits the line itself

////////////////////// function declaration
// function declaration is also known as the function statement

// anonymous function
//  function without name is known as the anonymous function
/// anonymous function dont have its identity

// eg.....

// function () {
// }  // when we run this empty function means function with no name and also it clearly says that function statement  requires a function name
//named function expression

// anonymous function are used in a place where functions are used as a value

///normal function
//1.
// function a(){
//    console.log("hi shubham")

// }
//  a();

/// anonymous function
//2.
//   const b = function (){
//    console.log("shubham wable")
//  }
//  b();

// in the anonymous function it has  no name and is assigned to the variable means the function  is assigned to the variable "b"

// it is used to assigning the a function to the variable
//Passing a function as an argument to another function (callback).

//Example 2 Passing as a callback

// setTimeout (function(){
//  console.log("this is the anonymous function this runs after the 2 sec")
// },2000)

//Named Function Expression

// where the function has its own name internally.

// for eg

// const shubham =function wable(){
//    console.log ("Hello Shubham Wable");
// }
// shubham();
// wable();

// wable is the internal name of the function
// but outside the function only shubham is available to use

///////////////////////////different between the arguments and parameters ///////////////////////////////////////

// parameters
// Names used when defining a function
// during the function defination

//Arguments
//real values passed to the function
// during the function call

// for eg'

//  function add(a, b){              //// here a and b are the parameters
//    console.log (a+ b);
//  }
//  add (2,3)     // here 2,3 are the Arguments

// the values we pass inside the function is known as the arguments and this labeles and identifiers get those values are the parameters
//in the above example
// a and b are parameters -- placeholders for inputs
// 2,3 are arguments --- actual values you give

// in a simple word parameters are used when defining the function and arguments are used while calling the function

//////////////////////first class function //////////////////////////

// what is the first class function
// ability to use the function as value is known as the first class function and it can be passed in the argument
// of the another function and can be return from the function this ability is knnown as the first class function

// in this javasvcript functions are treated like values
// this behaviour is called first class functions.

// functions are used as the first class citizens
// the ability to the
/// 1. assigning to a variables

// const shubham = function(){
//   console.log("hi , shubham!")
// }
// shubham();     ////output : Hi , shubham!

/////////////////////////Arow function ////////////////////
// this function can be introduce in the es6 module and all the function we create above can be created using the arrow function
