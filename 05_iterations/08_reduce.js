// Array.reduce()

        // The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

        // The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).


        const myArr = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4

// const arrTotal = myArr.reduce(
//   (accumulator, currentValue) => {

//     console.log(`accumulator: ${accumulator} and  currentValue: ${currentValue}`);
//         /*
//             accumulator: 0 and  currentValue: 1
//             accumulator: 1 and  currentValue: 2
//             accumulator: 3 and  currentValue: 3
//             accumulator: 6 and  currentValue: 4
//         */
//     return    (accumulator + currentValue) // accumulator
// }, 0 // initial value to accumulator
// );

const arrTotal = myArr.reduce((accum, curVal) => (accum + curVal), 0)

console.log(arrTotal);
// Expected output: 10

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Use of reduce() in calculating cart total

let cartObject = [
    {
        item: "sunglass",
        price: 999
    },
    {
        item: "bluetooth speaker",
        price: 1999
    },
    {
        item: "JavaScript Book",
        price: 999
    },
    {
        item: "Oppo f19",
        price: 16999
    },
    {
        item: "phone cover",
        price: 245
    },
];

const cartTotal = cartObject.reduce((accumulator, item) => {
    return accumulator + item.price
}, 0);
console.log(`Cart total is: ${cartTotal}`);
    //Output => Cart total is: 21241