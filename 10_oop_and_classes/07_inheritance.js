class User {
    constructor(username){
        this.username = username;
    }

    display(){
        console.log(`Username is: ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const userOne = new Teacher("Anupam", "anupam@example.com");
userOne.addCourse(); // A new course was added by Anupam
userOne.display(); // Username is: Anupam

const userTwo = new User("Shirin");
// userTwo.addCourse();  // userTwo.addCourse is not a function
userTwo.display(); // Username is: Shirin

const userThree = new Teacher("Hrishi"); // passing single argument
userThree.addCourse(); // A new course was added by Hrishi

console.log(userThree === Teacher); // false

console.log(userThree instanceof Teacher); // true

console.log(userThree instanceof User); // true => Teacher inherits User


