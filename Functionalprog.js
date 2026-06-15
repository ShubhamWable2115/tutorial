//////////////////////////FUNCTIONAL PROGRAMMING //////////////////////////////////////////////

/////////HIGHER ORDER FUNCTION ///////////
// the function thats takes the another function as the argument, or return the function from it is known as the higher order function

// function x(){
//     console.log("Namaste javascript")
// }

// function y(x){
//     x();
// }

// const radius=[ 3,2,1,4];

// const calculateArea = function (radius){
// }

///Higher Order Function in java script
// Function inside the function is known as the higher order function

//map, reduce ,filter are the higher order function in javascript

//1. MaP function
/// Map function basically used to transform a array
// what does it means to transform it
//means to transform each and every array of this to new array out of it

//for example

// const arr =[5, 1, 3, 2, 6];

//double -[ 10, 2 ,6, 4, 12 ]

//Triple -[15, 3, 9, 6, 18]

//Binary- ["101" , "1" , "11", "10", "110"]

// function double(x){
//     return x*2;
// }
// function triple(x){
//     return x*3;
// }

// const arr =[5, 1, 3, 2, 6];

// const output= arr.map(
//    function binary(x){
//   return x.toString(2);
//   });

// const output =arr.map((x)=> x.toString(2));   /// for getting the binary number \

// const output =arr.map ((x)=> x*2);

// we can also write the above function by the arrow function
// console.log(output);

///Filter Function
// filter function is use to filter
//filter function used to filter the values from the array

/// for eg>>>>

// const arr = [5,1,3,2,6];
//filter the even values
// const even =arr.filter((x)=> x%2===0);     /// with the help of  the arrow function => we dont need to write the return function

//to filter the odd values
// const odd =arr.filter((x)=> x%2!==0);

//to find the values greater than 4
// const greaterthan=arr.filter((x)=> x<3);

// console.log(greaterthan);

///lets see the example of teh reduce() function
//reduce is that to take the all the elements from the array and comeup with the single values outof them
//reduce means iterate over all the elements and find out the particular value
// it combines array result into one 1 result( A single value )
// common use sum, average, cunting, flattering

const arr = [5, 1, 3, 2, 6];

// function findMax(arr){
//     let Max =0;
//     for( let i=0;i<arr.length;i++){
//     // sum = sum +arr[i];
//     if (arr[i]> Max){
//         Max=arr[i]
//     }
//     }
//     return Max;
// }

// console.log(findMax(arr));

// const output = arr.reduce(function (acc,curr){    ///in this function curr represent the value from the
//       acc =acc + curr;
//       return acc;                                                           // And the acc use to accumulate the values one by one that to check for the result we are looking
// },0);
// console.log(output);

const output = arr.reduce(function (acc, curr) {
  if (curr > acc) {
    acc = curr;
  }
});
