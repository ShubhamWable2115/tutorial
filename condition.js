////If statement 
//It executes the code if the condition is true 

// const age=21;
// if(age>=20){
//     console.log("happy to go");
// }

///in this if the condition get true then its return the happy to go 


// const num=11;

// if(num %2===0){
//     console.log("number is even")
// }
// else{
//     console.log(("number is odd"))
// }

///In the above condition it searches the number even if even prints number is even else print the number is odd


// let isLoggedIn =true;

// if(isLoggedIn){
//     console.log("you are logged in successfully")
// }
// else{
//     console.log("Your request is rejected")
// }


//voting eligibilty

// let age =27;

// if (age>=18){
//     console.log("you are eligible")
// }
// else{
//     console.log("You are not eligible")
// }


//Check if the value is null or empty

// let username="shubham";

// if (username){
//     console.log("username:  " +username)
// }
// else{
//     console.log("enter the valid username")
// }


///IF ELSE 

// let username="sumit";
// let password= "1234";

// if (username==="shubham" && password ==="1234"){
//     console.log("Login Succes")
// }else{
//     console.log("rejected")
// }



// let balance=5000;
// let withdrawAmount=5550;

// if (balance===withdrawAmount){
//     console.log("Transaction Successfull")
// }else{
//     console.log("insufficiant fund")
// }


//Age based ticket pricing 

// let age =25;

// if (age <12){
//     console.log("Child ticket: 50")
// }else if(age< 30){
//     console.log("ticket price is 60 ")
// }else if (age>=65){
//     console.log("no ticket free entry ")
// }else{
//     console.log("adult ticket: 100")
// }


///form input validation 


// let email="";
// let password= "shubham";

// if (!email){
//     console.log("email is required")
// }else if(!password){
//  console.log("password is required ")
// }else{
//     console.log("login succesfull")
// }


//***************************************Ternary operator( ? : )******************************************** */

//1.Ternary operator is the short hand syntax for the if...else
//2.It lets you to assign the value based on the condition in oneline 
//3.Syntax for the ternary operator condition ? expressionIfTrue : expressionIfFalse
//4.It called Ternary because it called three operands 
//5.Condition to evalute when the result is true or false


// Example

// let age=10;

// let result = age >=18 ? "adult" : "minor";

// console.log(result);

//It is not used in the complex condition 
//It is great for the simple condition assignment


///Lets see the example in the REACT

//  {isLoggedIn ? <p> welcome back! </p> : <p>Please Log In<p>}

//this syntax is used in the react to conditionally render component in a short and readable way 


//example >> Assigned the value based on the condition 

// let mark =95;

// let grade = mark >=90
// ? "A"
// : mark >=70
// ? "B"
// : mark >=60
// ? "C"
// : "fail";

// console.log(grade);