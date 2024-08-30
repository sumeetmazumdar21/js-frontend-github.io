const user = {
    username: "johndoe01",
    loginCount: 21,
    isLoggedIn: true,

    getUserDetail: function(){
        console.log(`${user.username}`); // johndoe01
        console.log(`${this.username}`); // johndoe01
        console.log(this);
         /*
            {
                username: 'johndoe01',
                loginCount: 21,
                isLoggedIn: true,
                getUserDetail: [Function: getUserDetail]
            }
         */
    }
}
// user.getUserDetail();

console.log(this); // {}  => empty object in node environment, but returns window object in web browser


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this; // => implicitly defined
}

// const userOne = User("annie", 2, true);
console.log(userOne); 
        // username: 'annie',
        // loginCount: 2,
        // isLoggedIn: true

// const userTwo = User("harry", 33, false);
console.log(userOne);  // => overrides the values of userOne
        // username: 'harry',
        // loginCount: 33,
        // isLoggedIn: false

// Above ambiguity can be resolved using "new" keyword as it creates new objects i.e, new instances. "new" is a constructor.

const userOne = new User("annie", 2, true);
const userTwo = new User("harry", 33, false);
console.log(userOne); // User { username: 'annie', loginCount: 2, isLoggedIn: true }
console.log(userTwo); // User { username: 'harry', loginCount: 33, isLoggedIn: false }

// new keyword

    // 1) A new object is created
    // 2) A constructor function is envoked using "new" keyword
    // 3) the passed arguments are injected inside "this"
    // 4) the values are accessible now inside the function

console.log(userOne.constructor); // [Function: User] => constructor => reference to the object "User"
