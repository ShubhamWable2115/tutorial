
//when we use the this keyword in the javascript it will point to the object that is calling the function
//Fixing this keyword in javascript

const person ={
    firstName: "shubham",
    greet: function(){
        console.log("Hello " + this.firstName);
    }
}

const greet =person.greet;
greet(); 
 //undefined because this keyword is not pointing to the person object
 //Output PS C:\Users\Dell\Desktop\TUTORIAL> node callapplybind.js
//  hello undefined


 // It is solved by using the person.greet() method because this keyword is pointing to the person object

const person1 ={
    firstName: "shubham",
    greet: function(){
        console.log("Hello " + person1.firstName);
    }
}

const greet1 =person1.greet;
greet1(); 


//Hello shubham because this keyword is pointing to the person object
//Output PS C:\Users\Dell\Desktop\TUTORIAL> node callapplybind.js
// Hello shubham



// we use the call(), apply() and bind() method to fix the this keyword in javascript
// is what the this keyword is pointing to the object that is calling the function

// Each and evry function in the javascript has the access to the this keyword 
// this keyword point to the name object

// let name ={

//     firstName: "shubham",
//     lastName : "Wable",
   
// }
// let printFullName =function(homeTown, state){
//         console.log(this.firstName+ " " + this.lastName + "from " + homeTown +"," + state)
//     } 


// printFullName.call(name,"pune", "maharastra");   //in this way we can invoke this method

// supose we had one more object 

// let name1 ={
//     firstName: "Nagnath",
//     lastName : "Kanade",
// }

// without accessesing the value by the this keyword we can use call()
// functionName.call(thisArg, arg1, arg2, arg3)
//first argument is the reference to the this variable
//second argument what to pass in the function 


//below is the function borrowing 
// printFullName.call(name1,"delhi", "Utarakhand");

//apply method the only difference between the call and apply method is the way of passing the argument   
// is in the array  
// In the apply method we will pas s the second argument as a array list 

// printFullName.apply(name1,["delhi", "Utarakhand"]);



///Bind() method
//It gives the copy that can be invoke latter rather than call it directly 
// let findMyName = printFullName.bind(name1,"Mumbai", "Pune")
// console.log(findMyName);

// findMyName()


