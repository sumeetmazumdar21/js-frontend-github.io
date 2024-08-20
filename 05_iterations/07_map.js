// let arr = [22, 1, 4, 83, 13, 44, 55, 31, 2];

// let newArr = arr.map((num) => {
//     return num + 10 ;
// });
// console.log(newArr); // [32, 11, 14, 93, 23, 54, 65, 41, 12]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// method chaining

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newNums = myNums
                .map((num) => num + 1) // [2, 3, 4, 5, 6, 7, 8, 9,  10]
                .map((num) => num * 10)// [20, 30, 40,  50, 60, 70, 80, 90, 100]
                .filter((num) => num > 40); // [ 50, 60, 70, 80, 90, 100 ]
console.log(newNums) // [ 50, 60, 70, 80, 90, 100 ]

