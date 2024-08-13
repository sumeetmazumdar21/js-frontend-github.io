let name = "sumeet";
let repoCount = 12;

// console.log(name + repoCount);
console.log(`Hello! My name is ${name.toUpperCase()} and my repo count is ${repoCount}.`);

const game = new String("Assassins-Creed-Valhalla");
    // console.log(game.__proto__);
    console.log(game.length);
    // console.log(game.charAt(4));
    // console.log(game.indexOf('r'));
    // console.log(game.charCodeAt(4));

    /* substing and slice */
    let newGame = game.substring(0,6);
    // console.log(newGame);
    let anotherGame = game.slice(-24, 5);
    // console.log(anotherGame);
    
/* trim(), replace() and includes() */
const username = "    xyz@xyz.com   ";
console.log(username); // "    xyz@xyz.com   "
console.log(username.trim()); //"xyz@xyz.com"

let url = "https://google.com/home/cart%20remove";
console.log(url); //"https://google.com/home/cart%20remove"
console.log(url.replace('%20', '-')); // "https://google.com/home/cart-remove"
console.log(url.includes('facebook')); //false

const gameTwo = new String("Assassins-Creed-Valhalla");
console.log(gameTwo.split('-'));
// [ 'Assassins', 'Creed', 'Valhalla' ]

