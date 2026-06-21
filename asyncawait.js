



////Async  Always return's promise in the function 
//async is the keyword that is used to create the async function 

// const p =new Promise ((resolve , reject)=>{
//     resolve ("promise resolved value");
//     reject ("not resolved value")
// })
// async function getData() {
//     return p;
// }

// const dataPromise =getData();

// dataPromise.then(res => console.log(res));



///Using the aync with the await 
///async and await combo used to handeled the promises
///We generally used the promise infront of the promises
///await is the keyword only be used inside an  async function  


/// in the below function at the line of the 37 its wait for the completion of 
///the promises to be the resolved after the it execution completed then its print the 



const p = new Promise((resolve, reject)=>{
    
    setTimeout(()=>{
         resolve("Promise resolved successfully");
    },5000)

});
const t = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise resolved second time ")
    },7000)
});



async function handeledPromise() {
    console.log("hello shubham ")
  const val=  await p;
  console.log(val);
  console.log("Namaste javascript")

    const val2=  await t;
  console.log(val2);
  console.log("Namaste shubham")

}
handeledPromise();




////function without an await in this the js engine waits for nothing it executes the 
//line number 67 directly and after 5 seconds it prints the promise resolved value

// const p = new Promise((resolve, reject)=>{
    
//     setTimeout(()=>{
//          resolve("Promise resolved successfully");
//     },5000)

// });

// function getData(){

//     //js engine not wait to promise to be resolved 
//     p.then((res)=> console.log(res));
//     console.log("shubham Wable ")
// }

// getData();

