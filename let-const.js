
// if (true) {
//     //compound statement
//     var a=92;
//     console.log(a);
// };


// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);   


//output for the above code is 
//when we debug the 1st line of the code we can see that the b and c is inside the block scope
//and the var a we got under the global memory space 
//thats why we called the let and const are blocked scope, because it is stored in a seperate memory space which is the reserved for the block 
//var is in the global scope and let and const is in the block scope 
//therfor the output comes as per this 
//---->output should be this 
// 10
// 20
// 30
// 10
// b is not defined

// this causes because var store the value in the global scope 
//and let and const values was not in the global scope 

///topic : Shadowing in the javascript


// var a=100;

// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

//whenever we take the variable with the same name it shadowing the variable 
///when we runn the above program it prints as per in this sequence 

// 10
// 20
// 30

// it shadows the var a=100;   in the shadowing this is known as the shadowing 
//so this is what happen
///when we try to console.log(a) outside of the block then lets see what its prints 


// var a=100;

// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);

//the output for the above code is 
//10
//20
//30
//10
//we get that it not only shadow the 'a' but it also modified the value of the a itself because both are pointing to the same memory location 
//we get that a is not in the block scope a is in the global scope and b and c are in the block scope
//it is different in the let and const it create the another memory sapce with script and print the 'a' even it is outside the block without shadowing 



///shadowing not olny performs with the block it also same the function with any function 


// const c=199;
// function x(){
//     const c =18;
//     console.log(c);

// }
// x();    //<---if we try to invoke the function then also we get the same anwe that prints the c as 199
// console.log(c)


//Topic : Illegal shadowing 


// let a=20;
// {
//     var a=30;
// }

//if you want to shadow the let variable inside the block with var you cannot do that 
//we can shadow let using the let but you cannot shadow the var using the let or let ussing the var 

//but we can shadow the var variable and let variable inside the block 
// for eg

// var a=10;
// {
//     let a=21;
// }
//in the above program it couldnt hit the eror it is not considered under the illegal shadowing 


// let a=29;
// function x(){
//     var a=20;

// }     <---- thos code  also the totally fine 



//block scoppe also follows the lexiacl scope 
// when we say the lexical it means the one indide the another 

// const a=10;
// {
//     const a=110;
//     {
//         const a=100;
       
//     }
// }
// console.log(a);


///when i run this code it print s the nearest "a" as the outpuyyt which means the 100
//lexical scope work same way inside the block also 
//they work same in the arrow function also 



//topic : CLOSURE
//closure is the function that binds together with lexical enviornment 
//function along with its lexiacal scope forms a closure
//closure is the combination of a function bundled together with reference to its surrounding state (the lexical enviornment)
//in other words closure gives the access of the anpther functions scope from an inner function.
//In Javascript ,closures are created every time a function createion time 
//closure created when the a fucntion is defined inside the another function 
//the inner function uses variable from the outer function 
//closure is the function along with its scope 

///in the javascript function is the block of the code that is used to perform a particular task , function help in organizing code into manageable and modular blocks 
//functional components 1)Function 2) Name 3) parameters 4)body 5)Return 
//paranthesis may include parameter names seprate by commas: (parameter1, parameter2)

//eg....
// function z(){
//     var b=900;
// function x(){
//     var a=29;
//     function y(){
//         console.log(a, b);
//     }
//   y();
// }
// x();
// }
// z();


//uses of  the closures 
//-Moduke Design Pattern 
// Currying 
// Fucntions Like Once 
// memoize
// maintaining state in async world
//setTimeoutes
//Iterators
//and many mores 




////Interview question till here 


// Question 1 below is the function which has the settimeout of the 1 sec and also log the "shubham wable" then how much time it takes to print shubham wable and 
//and how much it takes to print the 1?
// function x() {      ///declares the function x
//     var i=1;   //local variable
//     setTimeout(function () {   ///schedule a task
//         console.log(i);   //...that will log 1
//     } , 3000); 
//     console.log("Shubham wable ")// after ~1 second
// }
// x();    //<-----this invokes the function without tis code is only defined not executes 



//OUTPUT

//shubham wable
//1     <----after three seconds




//// now we are going to give the timer two 1,2,3,4,5 eaach after 1,2,3,4,5 seconds write the program on the  basis of it 

// function x(){
//     for (var i=1; i<=5 ;i++){
//         setTimeout( function(){
//             console.log(i);
//         },i *1000);
//     }
//     console.log("shubham Wable");
// }
// x ();


 
//for the above code it will gives us the output like this 
//6
//6
//6
//6
//6
//6     <---- it dos not print 1,2,3,4,5 as we expected because var is the function-scoped, not block scoped 
// stetimeout has the closure+ asyn behaviour in it 
// console.log("shubham wable");  runs immediatly after the loop starts (non Blocking).
// by the time the settimeout functions run the has already completed , and i has become 6



// if we want the output to print the number after every second we should use the let because it is the blocked scope, five separate i bindings—one for each iteration,The particular i that existed during its own iteration
// because the let are the locked scope each every time the loop is called 
// and the function forms a closure wuth the new variable itself that means the copy of the i in each ite


// function x(){
//     for (let i=1; i<=5 ;i++){
//         setTimeout( function(){
//             console.log(i);
//         },i *1000);
//     }
//     console.log("shubham Wable");
// }
// x ();

// the above example is write but some of the interviewer asked you to use the var not let then how to solve this problem 
// in this problem only closure will help in this 
// function x(){
//     for (var i=1; i<=5; i++ ){

//         function close(x){
//             setTimeout (function (){
//                 console.log (x);
//            }, i * 1000)
//         }
//         close (i);
//     }
//     console.log ("Shubham wable")
// }
// x();



// function x(){
//     for (var i=1; i<=5; i++){
//         function close (i){
//             setTimeout ( function (){
//                 console.log(i);

//             }, i* 1000)
//         }
//         close(i);
//     }
//     console.log("Shubham Wable ")
// }
// x();

///every time the close function is called has it new id in it 





///what the closure in the javascript is ??
//>>>> closure is the combination of the function and its lexical scope  bundle together forms a closure .

///can you explain a litle bit more about the closure ??
///>>>> each and every function in javascript has access to its outer lexical enviornment that means like access to the variable and function which is present in the enviornment of its parent
//so each and every parent has acces to them so even then this function excuted in some other scope  its still remember its outer lexical enviornment where it was orignally presented in the code that is what closure is.


// for eg >>>>>


//>>>>>>>>>

// function outer(){
//     // var a=10;
//     function inner (){            ///in the javascript inner function has the access of the outer 
//       console.log(a);                   ///if i create the variable in its outer enviornment 

//     }
//     var a=10;     
//                   //<<<< if we move the line number two to this position above of the return then does it forms the closure 
//                   ///
//  return inner;              
// }

// // outer ()();       // <<< we took the two parenthisis to call the inner function we write only one then it cannot be log"a"
     
//  var close =outer();
//   close();            // In the other way we can do as this that and if i run this it gives the same result and forms the closure


///what if we change var a to let a then also it will forms the closure 





///in the below code we create the outest function which is the outest for the all the function 

// function outest(){
//     var c=20;
// function outer(b){
    
//     function inner(){
//          console.log(a,b,c);

//     }
//     let a=10;
//     return inner;
// }
// return outer;
// }
//  var close = outest()("Hello world ");          //<<<it returns the outer function  
//  close();


 ////advantages of the closures 
//  Closures are used to hide variables from the outside world and provide controlled access to them this helps creating the privae variables .
// creating modules
// closures ar e helpful in the asynchronus code where you need to preserve values at the time of the function creation , like inside setTimeout, event listners, etc

//////////////////////////////////////////////////////////////////

// data hiding and encapsulation  

 //data hiding means protecting some variables or functions from bieng accesed directly from outside the function or object
 //you show only neccessary information to the outside world and hide the internal details it is known as the data hiding 

 //encapsulation 

 //encapsulation means wrapping variables and functions together ito a single unit and restricting to some parts of it.
 //its data + methods combined together safely.


 ///let us see the example of the data hiding 


//  var counter =0;
//   function incrementCounter(){
//     counter++;
//   }                      << function without the data hiding or the privacy 

  ///in the above function anybody in our code can access counter variabe and can change it so here comes the data hiding and data privacy comes in picture 
 ///so to ensure that nobody else in the program can modified  this counter and only we can do with the incrementCounter function so to achieve that we can use the closure 


///Example for the data hiding 

   //for eg::::

//    function counter(){
//     var count=0;
//    return  function incrementCounter(){
//         count++;
//         console.log(count);
//     }
//    }
// var counter2 =counter();             ///this wont affect the counter that we invokes already this is the new counter itself and it will again create the closure , whenever the code is run it creates the new copy itself
//                                      // it will print the same output that will be start from the "1"
// var counter1 =counter();
// counter1();
// counter1();
// counter1();


// the above example is the perfect example for the data hiding because 
// the count variable is private under the counter funcion 
// you cannot access or modify count directly from the outside 
// the only way to change the count is by calling the counter1(), which internally inrements and logs it .
/// it is not the good way for the data hiding or the increment counter so we used constructor function 




/// if we have to add the decrement counter 
//////constructor function 


// function counter(){
//    var count =0;
//    this.incrementcounter =  function (){
//       count ++;
//       console.log(count);
//    }
//    this.decrementcounter =function(){
//       count --;
//       console.log(count);
//    }
// }

// var counter1 = new counter();

// counter1.incrementcounter();
// counter1.incrementcounter();
// counter1.decrementcounter();


///in the above example we need use the constructor and increment and decrement counter count


///let us see the disadvantages of the closure itself

// that it consume lots of the memory that it forms the closure
// there could be over consumption of memory when we use closure because every time the closure is form it consume a lot of memory 
// and sometimes those closed over variables are not garbage collected that means it accumalate lots of memory when it creats the closure till the program expires that is the major disadvantages of the closure 
// And if it is not handelled properly then it can leads to the memory leaks because that memory is like accumaleted over a timeit can also freeze the browser if it is not handelled properly 


////////////////////////////////////////////////
///garbage collector??
///why it is use ???


//Garbage collection means automatically freeing up memory that is no longer being used by the program.
//javascript engine automatically removes or (collects)  objects , variables , and data that are not needed anymore.

///means if something is not reachable ,javacript removes it to save the memory 


//how are the closures and garbage collection are related to each other how are they are relted to each other ??
//explaning with the example 


// function a (){
//    var x=10; z=11;
//  return   function b (){
//       console.log(x);
//    }
// }
//   var y =a();
//   y();

  //in the above function "a" function is finished but still is not grabage collected because 
  // "b" still remembers it (b still needs the "a")
  // "a" still stays alive in the memory as long as y exists




 


