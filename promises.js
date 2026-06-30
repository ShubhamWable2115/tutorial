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


// const cart =["shoes, pants, kurta"];

// const promise =createOrder(cart);

// promise.then(function(){
//     proceedToPayement(orderId);
// })


//Defination of the promise::
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//Promise is a object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


//It reduce the callback hell and make code more readable and maintainable. 
// It is a cleaner alternative to callbacks for asynchronous code.
//creating a promises 

//Promises has a three states: pending, fulfilled, rejected

//syntax :
const promisename = new Promise(function (resolve , reject){
   ///logic goes here
})

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){                   //<<<<<<< settimeOut is used to do an async task
        console.log('Async task is compelete');
        resolve()//<<resolved is method used to connect the promise to the next then block
    }, 1000)
})

promiseOne.then (function(){         //.then is used to handle the resolved promise
   //promise is resolved           //when the promise is resolved it will call the 
                                     // function inside the then block                               
   console.log('Promise consumed');    //  //yes .then()  if not successful then .catch() will be called

})
 

//we can also create the promise without storing it in a variable and directly call the then method on it
new Promise (function (resolve , reject){
    
   setTimeout (function(){
      console.log('Async task 2 is complete');
      resolve();
   },2000)
})
.then(function(){
   console.log('Promise 2 is resolved');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log('Async task 3 is complete');
      resolve({username: 'shubham', email: 'shubhamwable@gmail.com'});
      
    },2000)
})
.then(function(user){
   console.log(user);
})


const promisefour = new Promise (function (resolve, reject){
   setTimeout(function(){
      let error= true;
      if (!error){     
         resolve({username : "Shubham Wable", Password:123456});
      }else {
         reject('Error: Something went wrong');
      }
   },2000)
})

 ///Promise chaining is a technique that allows you to chain multiple promises together, where the output of one promise is passed as input 
 // to the next promise in the chain. This allows for a more readable and maintainable code structure when dealing with asynchronous operations.
 //promise chaining passed the return value of the first promise to the next promise in the chain, 
 // allowing for a more streamlined and efficient handling of asynchronous operations.
 
 
 promisefour.then((user)=>{
   console.log(user);
   return user.username;
}).then((username)=>{
   console.log(username);
}).catch((error)=>{
   console.log(error);
}).finally(()=>{
   console.log('Promise is either resolved or rejected');
})



//we can handle the promise using async await also which is more readable and maintainable than the promise chaining.


async function consumePromise(){
   try{
      const response = await promisefour;
      console.log(response);

   }catch(error){
      console.log(error);
   }
}


// async function getAlluser(){          
//   try {
//     const response =await fetch('https://jsonplaceholder.typicode.com/users');
//     const userData = await response.json();
//     console.log(userData);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAlluser();

fetch ('https://jsonplaceholder.typicode.com/users')
.then((response)=>{{
   return response.json();
}}).catch((error)=>{
   console.log(error);
})
.then((userData)=>{
   console.log(userData);
})


