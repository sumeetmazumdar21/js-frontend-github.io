// Singleton
// Object.create()

// Object literals => doesnot create singleton
    const sym1 = Symbol("key1");
    const sym2 = Symbol("key2");

    const jsUser1 = {
        name: "Sumeet",
        "full name": "Sumeet Majumdar",
        age: 22,
        location: "remote",
        isLoggedIn: true,
        sym1: "myKey1" // Refering Symbol as string
    }

// "full name" cannot be accessed using the dot(.) operator, instead has to be accessed as below
    // console.log(jsUser1.full name); // ERROR

    console.log(jsUser1["full name"]); // Sumeet Majumdar

    const jsUser2 = {
        name: "Jasprit",
        age: 21,
        location: "London",
        isLoggedIn: true,
        [sym2]: "myKey2" // Refering Symbol as Symbol
    }

    console.log(jsUser1);
        /*
            {
                name: 'Sumeet',
                age: 22,
                location: 'remote',
                isLoggedIn: true,
                sym1: 'myKey1'
            }
        */
    console.log(jsUser2);
    /*
        {
            name: 'Jasprit',
            age: 21,
            location: 'London',
            isLoggedIn: true,
            [Symbol(key2)]: 'myKey2'
        }
    */

// Object.freeze()
    /*
        freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.
    */

    const jsUser3 = {
        name: "Jansen",
        email: "Jansen@gmail.com"
    }
// Changing the value of email
    jsUser3.email = "Jansen@microsoft.com";
    console.log(jsUser3.email); // Jansen@microsoft.com

// Freezing the object so that values can't be modified
    Object.freeze(jsUser3);
    jsUser3.email = "jansen@ymail.com";
    console.log(jsUser3.email); // Jansen@microsoft.com


    jsUser1.greeting = function(){
        console.log(`hello JS user from, ${this.location}`);
    }

    console.log(jsUser1.greeting); // [Function (anonymous)]
    console.log(jsUser1.greeting()); // hello JS user from, remote