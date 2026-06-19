//****************************************LOOPS************************************************** */


//1)for loop
//A for loop is way of repeating block of code for a specific numbers of times 
//for loop syntax 

// for (initialization ; condition; update){
//     /// code to repeat 
// }

//for (i=0;i<5;i++){
//}

//1.initialization
//let i=0;
// in this we declare the variable where i is usally for the index
//it starts your current counter from the current value


//2.Condition 
// i<5;
// this is the check before the each loop 
//as long as this is true the loop keep running 
// when it comes to false, the loop stops 

//3.update 
//i++;
//this update value of 'i' every time the loop runs
//i++ means the increase by 1

//for example 
// for (i=0;i<6;i++){
//     console.log("i is : " , i);
// }

// for (let bottle=1; bottle <=5; bottle++){
//     console.log("the bottle is filling : " , bottle);
// }

// practice make the 3 table using the for 

// for (i=1;i<=10;i++){
//     console.log(i*3);
// }



///print even numbers 

// for(let i=2; i<=20; i+=2){      /// for the even numbers use i=2 and for the odd number use the i =1
//     console.log(i);
// }


//print the multiplication of the table 

// for (let i=1; i<=10;i++){
//     console.log(`5 * ${i} = ${5 *i}`);
// }   


//sum of 10 natural numbers 

// let sum=0;
// for (let i=1; i<=10;i++){
//     sum += 1;
// }

// console.log( "sum of", sum);


//*************************While Loop*************** */

//while loop keep running the block of the code as long as condition is true

//syntax

// while(condition){
//     ///code to run 
// }


//print number 1 to 5
// let i=1;
// while(i<=5){
//     console.log(i);
//    i++; 
// }


///print the multiplication table of the 3

// let i=1;
// while(i<=10){
//     console.log(i *3);
//     i++;
// }


//to print the even and odd using the while loop 

// let e=2;
// while (e<=20){
//     console.log(e)
//     e+=2;
// }


////sum of the first 5 numbers 

// let i=1;
// let sum =0;
// while (i<=5){
//     sum += i;
//     i++;
// }
// console.log ("sum of the ::" ,sum);


//reverese a string using the while loop 


// let str ="shubham";
// let reveresed= "";
// let i= str.length-1;

// while(i>=0){
//     reveresed += str[i];
//     i--;
// }
// console.log("Reversed String: ", reveresed);


//print the number shubham one by one using the while loop 

// let str="shubham";
// let i=0;
// while(i< str.length){
//     console.log(str[i]);
//     i++;
// }




///using the for loop 

// let str="shubham";
// for(i=0;i<str.length;i++){
//     console.log(str[i])
// }




////***************************Do while loop ***************************** */

//the do while loop is same as the while loop but but it runs the code at least atleast once even if the condition is false 
//syntax

// do{
//   //code to run 
// }while(condition);

//Example 
// Print 5 numbers 
// let i = 1;
// do{
//    console.log(i);
//    i++;
// }while(i<=5);



//it runs even if the condition is false 

// let i=10;
// do{
//    console.log("print this even condition is wrong");
//    i++;
// }while(i<5);

// in this i is greater than the value in the condition still it consoole the output either the condition is false 



//Enter the password Simulation 

// let input;
// do{
//    input =prompt ("Enter your name : ");
// }while(input !=="shubham");
// console.log("welcome shubham!");


//it will keep asking the user until they type shubham 

//difference between  the do while and while 


////while :: check the condition before running , runs 0 time if the condition is false , repeating only if need 
///do while :: dont check the condition before running, runs atleast if or else the condition is false ,must  run once no matter what 


///write a program running 5 to 1

// let i=5;
// do{
//    console.log(i);
//    i--;
// }while(i>=1);


// let name = prompt("What's your name?");
// alert("Hello, " + name);




// do{
//   //code to run 
// }while(condition);



// for (initialization ; condition; update){
//     /// code to repeat 
// }


//print numbers from 1 to 10

// let i=1;
// for (i=1;i<=10;i++){
//     console.log(i);
// }


//total of the 1 to 10 natural number

// let sum=0;
//  for(i=1;i<=10;i++){
// sum+=i;
//  }
// console.log("sum of 10 natural: " ,sum);



/// even numbers betweenn the 1 to 20 

// for (i=2;i<=20;i+=2){
//     console.log(i)
// }

//check the number is prime or not 

let number=21;
let isPrime=true;