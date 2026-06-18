//// ALL THE RETUR TYPES WITH THE SOME OF THE EXAMPLE 

//1)map()

// const numbers =[1,2,3];

// const tripled =numbers.map(num =>{
//     return num*3;
// })

// console.log(tripled);

///in the map it transform each element and return a new array 
///return type : New Array

//2)Filter()

// const numbers =[2,3,66];
// const even = numbers.filter(num=>{
//     num %2===0;
// })
// console.log(even);

//we can also write the above function in this below way that we can skip the return return while we are using the arrow function

// const numbers =[2,7,88,13];
// const even = numbers.filter(num=> num % 2===0);
// console.log(even);

//Return Type "Array"
//Use to match the elements to catch the conditions



//3)For Each 

//It loops through each element not return 
// const names=["shubham", "abhi", "Niraj", "sameer","pawan"];

// names.forEach(name =>{
//     console.log("hi,"+name);
// });


///4)Reduce()

// const num =[1,2,3,4,5]

// const sum =num.reduce((acc, current)=>{
//     return acc+ current;
// },0)

// console.log(sum);   /// OUTPUT :10

//It has the Return Type of the any thing String ,number,object etc
//It just use for the merging ,calculation or building something from the array 

///5)For loop


// const numbers=[1,5,10];
// let square =[];
// for (let i=0;i<numbers.length; i++){
//     square.push(numbers[i] * numbers[i]);
// }
// console.log(square);    ///OUTPUT 1,25,100


///Its return type is the undenfined

///6) sort()

// const num=[2,3,4,5];
// const sorted= num.sort((a,b)=>a-b);
// console.log(sorted);

//It returns the same array but sorted 
//use cases :sorting numbers or string




//// FUNCTIONS AND ITS RETURN TYPE 
// map()	       array
//filter()         array
//reduce()         any number
//for loop ()      undefined 
//forEach()        undefined
//find()           undefined 
//some ()          boolean 
//every()          boolean 

