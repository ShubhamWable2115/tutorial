//////////////////////////////EVENT LOOP/////////////////////////////////

////////////////////WEB APIS///////////////////
/// the webapis is the feature provided by the browser not by the javascript itself
/// they allow javascript to interact with the web browser and do the things like  settimeout(), dom apis, fetch(), local storage, console, location
// it is not the part of the core javascript language but they are provided by the browser enviornment like chrome, firefox

// WEBAPIS such as the
// settimeOut
// DOM APIS
// FETCH ()
// Local storage
// console
// location

// we can get access to this webapis through the window

// this all apis are wrap together in the global object and this give access to the callstack (javascript engine)

// when you try to run any javascipt program it creates global execution context and post in the callstack
// let see all the webapis with  help of the example

// console.log ("shubham");    // <<--it internally calls the console API moves towards the javascript engine means in the callstack in the global execution context

// setTimeout( function ab(){
//     console.log ("shubham wable ");    /// the settimeout goes and gives access to the settimeout and it allows the feauture of the timer
// },4000)                  //we have added the delay tthats why it atomatically starts the timer of the 4000 miliseconds

// console.log("end");

/// after executing the code line by line after runnig each and every line of the code , the global execcution context get move from the callstack

// let us see the callback que and the event loop

// the job of the event loop is that when the to check the callback queue and put this function from the callback Queue to the callstack

// let us see another  example for it

// inn the below example whenever we use the document. is calling the DOM APIS from the browser
// DOM is document object model it is like the HTML source code
// when it calls the DOM it tries to find the button with some id and it returns it

//  console.log ("start");

//  document.getElementById("clickme")                ///it calls the Dom apis
//   .addEventListener("click" ,  function cb(){      /// when we see the addeventlistener   it basically register the callback method and attaches the event at it that is the click event
//         console.log("CALLBACK")
//  })

//  console.log("END");

// let us  see how the fetch() is worked
//fetch basically goes and request the api call
/// fetch uses the MICRO TASK WUEUE NOT THE CALLBACK QUEUE

// ALL the callback functions wich comes through the promises will go inside the microtask queue

//Example for the fetch

// console.log("start");

// setTimeout( function abT (){
//  console.log("CB Google")
// })

// fetch("google.com")
// .then (function cbF(){
//     console.log("CB Google")
// });

// console.log("end")

///////////////////////////////////////////////////////////////////////////

// console.log("START");

// setTimeout(function cb(){
//     console.log("SHUBHAM WABLE AFTER 5 SECONDS")
// },5000);

// console.log("END")

///let us break the thread by 10 seconds

// let startDate = new Date().getTime();
// let endDate = startDate ;
// while (endDate < startDate + 10000){
//     endDate = new Date().getTime();
// }
// console.log("while expires")

/// above we see the example of the blocking code

//practincing the Template Literals

// const b = "shubham";
// const age =  23 ;
// console.log(` my name is ${b}  and the age is the ${age}`);
