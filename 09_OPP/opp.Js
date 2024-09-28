const user = {
    username: "keshav",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from databasse");
        // console.log(`username: ${this.username }`);
        // console.log(this);
        
        
}
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        // console.log(`Welcome: ${username}`);
        
    }
    return this;
}

const userOne = new User("kittu", 18, true)
const userTwo = new User("yash", 20, true)
console.log(userOne.constructor);
// console.log(userTwo);
