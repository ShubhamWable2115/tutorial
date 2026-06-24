////////////////////////....CALLBACK FUNCTION....///////////////////////////

// what is the callback function in the javscript >>> this fiunction are the first class citizens in the javascript
// that means you can take the function and pass it to the another function 
// and this function we pass in the another function is the callback function 
// due to the callback we can do  async  things in the javascriot 


// setTimeout(function (){
//     console.log("shubham wable 7")
// },4000)

// function x(){
//     console.log("x")
// }
//  x (function y(){
//     console.log("y")
//     y();
// })


//javascript is the synchronous and  single-threaded language that means the code will run one line at a time 
// callback function gives us the power of the asyncronity
// callback function gives the access to the whole asynchronous code to the syncronous single threaded language 
// it means the javascript is the single threaded language that can do only one thing at a time in a specific order 
// due to callbacks we can do async things in a javascript
// asyncronous operation not possible without this callback 

//asynchronous task 

// setTimeout(function (){
//     console.log("with the help of the settimeout we can set the time to the function that it will be called after the particular time ")
// },3000)


//set timeout is the non-blocking ---it runs the callback after a delay 
//callback the function (){.........} is executed after 2 seconds 

/// Event listners 

//// we have seen three example of the event listners 

//the button is clicked event
// document.getElementById("clickme" ,)
// .addEventListener ( "click", function xyz(){
//     console.log("Button is cicked")
// })

// the changed the text when button is clicked 
// document.getElementById("changedtextbtn")
// .addEventListener("click", function a(){
// document.getElementById("changedtextbtn").innerText= "the button is clicked";
// })


////live input value display

// document.getElementById("nameinput")
// .addEventListener("input" , function(){
//     let value = document.getElementById("nameinput").value;
//     document.getElementById("output").innerText = "Typed:   " + value;
//     });




/// count by the closure 


// function attachEventlistners(){
//   let count = 0;
//   document.getElementById ("counterBtn") 
//   .addEventListener ("click" , function xyz() {
//     console.log("button clicked", ++count)
//     });
//   }
//    attachEventlistners();


// function createCounter(){
//     let count=0;
//     return function (){
//         count ++;
//         document.getElementById("counterBtn").innerText = "count:" +count;
//     };
// }

// countclick =createCounter();

// document.getElementById("counterBtn")
// .addEventListener("click" , countclick)

// this is the closures exanple that inner function remembers the variable count even after createCounter() has finished running 
// data hiding 

// Let's Break It Down:
// 🔹 function createCounter() { ... }
// This is a function that creates a counter.
// Inside it, we define a private variable count = 0.
// We then return a function that:
// Increments count
// Updates the button text
// 🔹 let count = 0
// This variable is scoped only to createCounter().
// But the inner function can access it even after createCounter() is done, thanks to closures.
// 🔹 return function () { ... }
// This returned function becomes our click handler.
// It has access to count because of closure (it remembers its lexical scope).
// 🔹 const countClick = createCounter();
// This line calls createCounter() once.
// The returned inner function (with access to its own count) is stored in countClick.
// 🔹 .addEventListener("click", countClick)
// Now we assign countClick as the callback to the button’s click.
// So each time the button is clicked, the same closure is run and count is incremented.


///garbage collection and removeeventlistners 
///we need to remove the eventlistener because it is the heavy , it means it stores the lots of memory 

// function attachEventlistners(){
//     let count =0;
//         document.getElementById("clickme")
//         .addEventListener("click" , function xyz() {
//             console.log ("buttton clicked" , count++);
//         })
//     }

// attachEventlistners();

 



//Callback HELL
//CallBack hell is the situation when we have the multiple callback function inside the another callback function
 

//for eg:

//  we have the items in the cart and we want to create the order and then we want to proceed to the payment
// lets see the flow for it 
// Add items to cart -> Create Order -> Proceed to Payment -> Update Wallet  -> Show Order Summary 


const cart =["shoes", "pants", "kurta"];

api.addToCart(cart,function (){
    api.createOrder(function (){
        console.log("order created successfully")
         api.proceedToPayment(function(){
            console.log("payment done successfully")
             api.UpdateWallet(function () {
                console.log("wallet updated successfully")
                 api.showOrderSummary();
            })
        })
    })
})


// In the above example we have the multiple callback function inside the another callback function

