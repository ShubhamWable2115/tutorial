

///to reverse a string 

// function reverseString(str){
//   return  str.split("").reverse().join("");
// }
// console.log(reverseString("shubham"));




///With Using the loop 


// function reverseString(str){
//     let reversed="";
//     for (let i=str.length-1; i>=0;i--){
//         reversed += str[i];
//     }
//     return reversed;
// }
// console.log (reverseString("shubham"));



//// Palidrone :: what is the palidrone if the string is read from the both the side(forward and backward ) in same ways then it is called as the palidrone 
// for eg : madam == madam , hello != olleh ; racecar==racecar


// function isPalidrome(str){
//     let reveresed= str.split("").reverse("").join("");
//     return str===reveresed;
// }
// console.log(isPalidrome("shubham"));
// console.log(isPalidrome("madam"))

///Palidrome using the Loop



// function isPalidrome(str){
//     let start=0;
//     let end =str.length-1;

//     while(start<end){
//         if (str[start]!==str[end]){
//             return false;

//         }
//         start++;
//         end --;

//     }
//     return true ;
// }
// console.log(isPalidrome("A man a plan a canal Panama"));
// console.log(isPalidrome("madam"))



////factorial of the number using the loop 

// function factorial(n){
//     let result=1;

//     for (let i=1;i<=n;i++){
//         result*= i;
//     }
//     return result;
// }
// console.log(factorial(5))





//Find the largest number in an array
//for Example
//Using Math.max()


// let numbers=[1,2,5,6,88,33];
// let max=Math.max(...numbers);
// console.log(max);



////Largest number from the user input

// let input = prompt("enter the numbers seperated by the commas :");
// let arr=input.split(",").map(Number);

// let max=Math.max(...arr);
 ////this will show the answer in the console 
// console.log("this is the largest number from the :" , max)  

///if we want to show the answer in the alert then change the code to 
// alert("the largest number is the :"+ max)



///To remove the duplicates from the array 

//Set is a built-in JS object that only stores unique values.
//new Set(arr) removes duplicates.
//[...new Set(arr)] uses the spread operator to convert it back into an array.

// function removeDuplicates(arr){
//     return[ ...new Set(arr) ]
// }
// console.log(removeDuplicates([1,2,2,3,33,42,1122,33]))
 

