// To store informations in an optimized way, we need variables/constants
// constants (const) => values cannot be changed, once declared
// variable (let, var) => values may change

const id = 123; // without ""
let username = "xyz@gmail.com";
var password = "xyz123";
address = "Arizona";

// console.log(typeof(address));
console.table([id,username,password,address]);

// Changing values to see what works
// id = 77; // throws error => Assignment to constant variable.
username = "johndoe@gmail.com";
password = "JohnDoe123";
address = "Haridwar";

// We will use console.table for consoling the values at once in a table format, instead of 4 separate console.log statements

console.table([id,username,password,address]);

/* 
NOTE:  Var vs Let

-> In erlier versions of JS, var had scope issues, which created conflicts while creating/updating variables.

-> To eliminate the var "Scope Issue", newer versions of JS introduced "let". However, "var" is still used widely at places having older codes.

-> We use "let" nowadays, as it solves the "block scope" as well as "functional scope" issue.

*/