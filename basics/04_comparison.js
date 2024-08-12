// console.log("2" > 1); // true
// console.log("2" < 2); // false
// console.log("3" == 3); //true

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

/* reason in above "null" cases:
        equality check "==" and comparisons ">", "<", ">=", "<=" work differently.
        Comparisons convert null into a "Number", treating its value as "0".
        That is why (3) null >= 0 is "true" and (1) null > 0 is "false".
*/

// Undefined returns false when compared with numbers unlike null
// console.log(undefined > 0); //false
// console.log(undefined == 0); //false
// console.log(undefined >= 0); //false

// "===" Strict check => checks datatypes before comparison
console.log(undefined === null); //false
console.log("33" === 33); //false





