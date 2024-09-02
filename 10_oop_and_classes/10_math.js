// console.log(Math.PI); // 3.141592653589793
Math.PI = 5; // doesn't change the value of PI
// console.log(Math.PI); // 3.141592653589793

const desc = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(desc);
    /*
        {
            value: 3.141592653589793,
            writable: false,
            enumerable: false,
            configurable: false
        }
    */


// defining properties of user created object

const myObject = {
    username: "Palash",
    email: "palash@example.com",
    id: "palash123",
    password: "palash12!",

    greetings: function(){
        console.log(`Welcome ${this.username}! Your id is: ${this.id}`);
        
    }
}
Object.defineProperty(myObject, "id", {
    writable: false,
})
myObject.id = "palashNewEmail@examle.com";

console.log(myObject); // id = "palash123"

// Object.defineProperties
    /*
        const obj = {};
        Object.defineProperties(obj, {
        property1: {
            value: true,
            writable: true,
        },
        property2: {
            value: "Hello",
            writable: false,
        },
        // etc. etc.
        });

    */

        Object.defineProperties(myObject, {
            id: {
                writable: false,
                enumerable: false
            },
            password: {
                writable: false,
                enumerable: false
            }
        });

for (const [key, value] of Object.entries(myObject)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
   }
    
}


/*
*/