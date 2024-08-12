const score1 = 33;
const score2 = "33";
const score3 = "33abc";
const score4 = undefined;
const score5 = null;
const score6 = true;

// console.table([typeof(score1),typeof(score2),typeof(score3),typeof(score4),typeof(score5), typeof(score6)]);

// Converting each of the above values to "Number" and checking the typeof(resulting-value)
const num1 = Number(score1);
const num2 = Number(score2);
const num3 = Number(score3);
const num4 = Number(score4);
const num5 = Number(score5);
const num6 = Number(score6);

// Checking the typeof converted values
// console.table([typeof(num1),typeof(num2),typeof(num3),typeof(num4),typeof(num5),typeof(num6)]);

// Checking values of variables after converting to Number
// console.table([num1, num2, num3, num4, num5, num6]);


/* 
    "33" => 33
    "33abc" => NaN
    "JohnDoe" => NaN
    undefined => NaN
    null => 0
    true => 1; false => 0
*/

// Boolean Conversion

let isLoggedIn = 1;
let booleanResult = Boolean(isLoggedIn);
// console.log (booleanResult);

/* 
    1 => true; 0 => false;
    33 => true;
    "John" => true; 
    "" => false;
    undefined => false;
    null => false;
*/

// String Conversion
let someNum = 21;
let stringNum = String(someNum);
// console.table([typeof(stringNum), stringNum]);


/*************OPERATIONS ********************/

let str1 = "hello";
let str2 = " world!";
let str3 = str1 + str2;
// console.log(str3);

// console.log( 1 + 2);
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

/*
Link to conversion operations:
    https://tc39.es/ecma262/#sec-abstract-operations
*/




