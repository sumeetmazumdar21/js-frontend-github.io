    // class User {
    // constructor(username, email, password){
    //     this.username = username;
    //     this.email = email;
    //     this.password = password;
    // }
    

    // encryptPassword() {
    //     // appends some random letters after the password and returns the encrypted password
    //     return `${this.password}abc` 
    // }
    //     capitalizeUsername(){
    //         return `${this.username.charAt(0).toUpperCase() + this.username.slice(1)}`
    //     }
    // }

    // const userOne = new User("ganeshan", "ganeshan@example.com", "secret");
    // console.log(userOne.encryptPassword()); // secretabc
    // console.log(userOne.capitalizeUsername()); // Ganeshan


// Behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}xyz`
}

const userTwo = new User("shridhar", "shridhar@example.com", "shripass");
console.log(userTwo.encryptPassword()); // shripassxyz

