// const email = "abc@abc.com" // if(email) => true
// const email = "" // if(email) => false
 const email = [] // if(email) => true

// if(email){
//     console.log("email verified");
// }
// else{
//     console.log("email not provided");
    
// }

// falsy Values :

    // false, 0, -0, BigInt 0n, "",  null,  undefined, NaN

// truthy values :
    // "false", "0", " ", [], {}, function(){}

// Checking empty array
        // if(email.length === 0){
        //     console.log(`type is Array`);
            
        // }

// Checking empty object:
    // let emptyObj = {};
    // if((Object.keys(emptyObj)).length === 0){
    //     console.log("empty object found");
    // }
    // Object.keys() => returns an array

    
// Nullish Coalescing Operator (??): null undefined

    /*
        The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
    */

    let val1;
    // val1 = 5 ?? 10; // 5
    // val1 = null ?? 20; // 20
    // val1 = undefined ?? 15; // 15
    // val1 = null ?? 7 ?? 13; //7
    // val1 = (null || undefined) ?? "foo"; // returns "foo"
    // console.log(val1);


// Ternary Operator (?)

    /*
        The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

        Syntax: 
            condition ? exprIfTrue : exprIfFalse
    */

            const age = 26;
            const beverage = age >= 21 ? "Beer" : "Juice";
            console.log(beverage); // "Beer"
    