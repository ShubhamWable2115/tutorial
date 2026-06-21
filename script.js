

// 1.print statement

// console.log("shubham");
// console.warn("shubham is here");
// console.error("shubham is busy")


//2.Arithemetic Operation

// var a=54;
// var b=5;
// console.log(a%b)


// var a=54;
// var b=5;
// console.log(a+b)


//alert: gives the alert 
// alert("this is a alert");


//confirm OK and Cancel
// var ans =confirm("are you an adult")
// console.log (ans);


//prompt and store into the variable
//prompt used to ask you the shubhamanswer
// ans=prompt('enter your name')
// console.log(ans)

// var shubham =prompt("enter your name")
// console.log("Username is" ,shubham);

//JS Datatype primitive and reference 
// 1) Primitive : variable that store the 
// single type of the data
// -Number (1,2,3,34,94.4444)
// -String ("shubham" , "wable")
// -Boolean(true,false)
// -undefinded
// -  Null
// - NaN

// Reference

// -Array 
// - Object
// - Function

//concatination
 
// var a = "shubham";
// var b = "Sumit";
// console.log (a+b)

// + : Addition , concatination
// - : Sub
// * : Mult
// / : Div


//Conditional Statements in JavaScript
// 1) If statement


///Callback function 


// console.log("Shubham Kundlik Wable")

// setTimeout(function(){
//     console.log("shubham")
// },5000)

// console.log("Shubham wable")



// const cart =["shoes", "pants", "kurta"];

// api.createOrder(function( ){
//     api.proceedToPayementt()

// })



///hoisting in the javascript 


// getName();
// console.log(x);
// console.log(getName);

 


//how function works in a javascript


// var x=1;
// a();
// b();
// console.log(x);

// function a(){
// var x=10;
// console.log(x);
// }


// function  b(){
//     var x=100;
//     console.log(x);
// }


// output
// 10
// 100
// 1


// getName();
// console.log(x);
 
// var x=7;


// function getName(){
//     console.log ("hello javascript")
// }




// hoisting in javascrript 

//below is the normal example without hoisting issue 

// let name ="shubham";

// function greet(){
//     console.log("hello" + name );
// }

// greet();



////below is the example with hoisting 

// console.log(a);
// console.log(abhi);   //after we add this line it prints
// //   the function abhi as it is in console
// var a =10;    ///till here the output is undefined

// abhi();   ///till here the abhi is not defined 


// function abhi(){
//     console.log("hello from abhi ")      //<---till here the (hello from abhi)
// }


//hoisting is the javascript phenomenon that in which 
// we access the variables and functions even before we initializes it
//we can access it without any error 

//hoisting means we can use variables or functions even before we declare 
//them , because javascript initially moves declaration to the top





///functions invocation and variable enviornment
//in javascript before all



// var x=1;  ///undefined error 
// a();  //it will print the fucntion a as it is
// b(); //it will print the fucntion b as it is
//  console.log(x)

// function a(){
//     var x =10;
//     console.log(x);

// }

// function b(){
//     var x=100;
//     console.log(x);
// }



//          **********shortest javascript progrma in javascript that is  the empty file ***************

//because when we run the empty file it stills create the global execution context and also sets up the memory space  
// and javaascript engine also create something known as the window 

//what is the window 
//--> window is the actually a global object which is created along with the global execution context

//-- In every Javascript program is executed  then the global object is created 
// global execution context  is created along with that execution context the this variable is created 

//what is the global space
// --> anything that is not inside the function is the global
//below is the example for it  



// var a=10;
// function b(){
//     var x=10;
// }
// console.log(window.a);
// console.log(a);
// // cosole.log(x);
// console.log(this.a);


///now in console we cannot see the value of the x because it is inside the function and any thing outside  the function is the global space
// we can see the output a= 10 under the gloabl space means under the window or under this 



///************************************************************************************************************************************************************** */
//Undefined vs Not Defined (undefuned keyword)


// var a;

// console.log(a);
// a=10;
// console.log(a);
// a="Hello Shubham"
// console.log(a);

//the above code will generate the output

// undefined
// 10
//Hello Shubham


// if (a === undefined){
//     console.log("a is undefined ")

// }
// else{
//     console.log("a is not undefined")
// }



// var a;
// console.log(a);
// a=10;
// console.log(a);
// a="Hello Shubham"
// console.log(a);


///by keeping in the mind dont do this dont keep the undefined in any of the variable 

// a= undefined;
// console.log(a);




// topic: SCOPE AND LEXICAL ENVIORNMENT


// function a(){

//     console.log(b);
//     function c(){
//         console.log(b);

//     }
// }
//  var b=19;
// a();





//let and const in jAVASCRIPT

// as we see we can access variable without even its declaration and even setting up the value in program it  allocate the memORY TO THE PRogram 




// let  a=10;  
// console.log(a);
// var b=39;



//lets see how to check the whether this variable is hosted or not 
//after we check and debug the code from first line then we see the output in the gloval memory space that memory is alloocated to the both the variable a and b 
//for eg. a: undefined 
          // b: undefined 

//and gives the error of the ReferrenceError
//when we initialized the variable befor it declaration then that variable get hoisted 
// and it can aslo assigned the undefined it is called the temporal deadzone and we execute the program till the last line then its end the temporal deadzone 
//whenever you tried to access the variable inside the temporial deadzone then it gives you the refereence error 


//what is the reffference error 


// console.log(x);
// var c=1;
// let d=82;
//let we see it from the above example 
//---> In the javascript when we not defined any variable as we try to initialized the variable without its declaration then it throws the error referrence error 
// for eg,
//     RefferenceError: x is not defined 




///as compare to the above example we take the another example 
//for eg.
// console.log(y);
// var z=19;
// var y=28;


//Output for the above code is that it shows the error in console that the 
// undefined 



//let see the example of the syntax error with the let 

// var a=20;
// let a=293;

//it is strict as compare to the var 
//the above program will throw the error 
//no code will be the run in the case of the let but it is different in the var lets see in the next example
//-->SyntaxError: Identifier 'a' has already been declared
//In the Syntax error the code doesnt even get run ,it is just rejected 



/// var is not strict as compare to the const and let in the var we can declare two variable with the same name 

// console.log("shubham wable ")
// var a=90;
// var a=998;
// var a=0;


// console.log(a)


//let us see in the const as well 

// let a = 1000;

// const b=3329;

// b=2999;
// a=10;
// console.log(a);


//we have the three ways to declare the variable var,let, const
//mainly use the const 
//1.whenever you want to putting some value which not be change later use const 
//2. when you dont have to assigned  anything else to the same variable use const
//const is used to declare constants — variables that cannot be reassigned after their initial value is set.
//const is more strict 


//and if not the const, use the let we dont get the unxpected error like undefined etc 


//we need to use the var very consiously

     





