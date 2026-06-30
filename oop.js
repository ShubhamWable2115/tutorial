
// Object Literal 
const user= {

    username: "shubham",
    loginCount: 7,
    signedIn: true,
    getuserDetails: function(){
       
        // console.log(`Username: ${this.username}`)
        console.log(this)

    }
}


const user2 ={
    
    username: "Wable",
    loginCount: 17,
    signedIn: false,
    getuserDetails: function(){
       
        console.log(`Username: ${this.username}`)
        // console.log(this)

    }
}

// console.log(user.username)
// console.log(user.getuserDetails()) 
console.log(user.username)


 

// lets talk about the Constructor function
// new keyword is used to create a new object instance from a constructor function
// without using the new value will overide with each other in the below example 
function User(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount= loginCount;
    this.isLoggedIn= isLoggedIn;
    return this
}
const userOne= new User("Shubham", 12,true);
const userTwo= new User("Wable" , 8, false)
console.log(userOne);

