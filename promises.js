// const cart =["shoes, pants, kurta"];

// createOrder(cart,function(orderId){
//     proceedToPayment(orderId);
// });




// const shubham_API ="https://jsonplaceholder.typicode.com/todos/1";

// const user= fetch (shubham_API);

// console.log(user);

// user.then (function (data){
//     console.log(data);
// })



//Resolve when the code runs properly step up to the next step 
//Reject when the code gets caught into the error use for the error handling using try catch 


const cart =["shoes, pants, kurta"];

const promise =createOrder(cart);

promise.then(function(){
    proceedToPayement(orderId);
})


