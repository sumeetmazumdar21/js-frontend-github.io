/* 
Primitive 

     types:             typeOf:

        String            string
        Number            number
        Null              object
        Undefined         undefined
        Boolean           boolean
        Symbol            symbol
        BigInt            bigint

Non-Primitive (Reference)

    Arrays (typeOf: object),
    Objects (typeOf: object),
    Functions (typeOf: function)
*/

const num1 = 100; //number
const num2 = 98.99; // number
let name = "Harish"; // string
let userName = null; // null
let password; // undefined

// Symbol  
    /*
        Each possible Symbol value is unique and immutable.

        Each Symbol value immutably holds an associated value called [[Description]] that is either undefined or a String value.

    */
const id = Symbol('123');
const newId = Symbol('123');
// console.log(id === newId);
// console.log("id: ",id);
// console.log("newId: ", newId);

// Arrays
    let heroes = ["Spiderman", "Ironman", "Superman"];

// Objects
    let student = {
        name: "Atul",
        rollNo: 5,
        class: "IX",
        section: "B",
        division: "IInd"
    }

// Functions:
    const myFunc = function(){
        // console.log("A function declaration example");        
    }


/*
Dynamically-typed language 

    JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

    For example, in JavaScript, you can do the following:

    let x = 10; // x is now a number
    x = "Hello"; // x is now a string
    x = true; // x is now a boolean
    On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Statically-typed Language

    Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

    int x = 10; // x is a variable of type int
    String name = "John"; // name is a variable of type String
    JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.
*/

/**************Memory Allocation*************/

/* Stack Memory => Primitive Datatypes */
    let userAddress = "Patna";
    let newAddress = userAddress;
    newAddress = "Bangalore";
    // console.log(userAddress);  // Patna
    // console.log(newAddress); // Bangalore

/* Heap memory => Non-primitive Datatype */

    let userOne = {
        email: "abc@gmail.com",
        upi: "abc@ybl"
    }
    let userTwo = userOne;

    console.log("userOne email before updating userTwo", userOne.email); //abc@gmail.com
    console.log("userTwo email before updating userTwo", userTwo.email); // abc@gmail.com

    userTwo.email = "JohnDoe@gmail.com";

    console.log("userTwo email after updating userTwo",userTwo.email); //JohnDoe@gmail.com
    console.log("userOne email after updating userTwo",userOne.email); //JohnDoe@gmail.com
    