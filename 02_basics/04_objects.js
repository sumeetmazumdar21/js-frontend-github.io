// const user = new Object(); // singleton
// console.log(user); // output: {} 

const user = {} ; // non-singleton
console.log(user); // output: {}

user.id = "22e2lm34";
user.name = "Jack";
user.address = "Las Vegas";
user.isLoggedIn = false;

console.log(user);
    /* Output: 
        {
            id: '22e2lm34',
            name: 'Jack',
            address: 'Las Vegas',
            isLoggedIn: false
        }
     */

const user2 = {
    email: "john@ymail.com",
    userName: {
        fullName : {
            firstName: "Sumeet",
            midName: "Kumar",
            lastName: "Majumdar"
        }
    }
}

console.log(user2.userName); 
    /*
        {
            fullName: { firstName: 'Sumeet', midName: 'Kumar', lastName: 'Majumdar' }
        }
    */

console.log(user2.userName.fullName);
 // { firstName: 'Sumeet', midName: 'Kumar', lastName: 'Majumdar' }

 console.log(user2.userName.fullName.lastName); // Majumdar

const obj1 = { 1: "a", 2: "b"};
const obj2 = { 3: "c", 4: "d"};
const obj3 = {4: "e", 5: "f", 6: "g"};
// const obj4 = {obj1, obj2};
// console.log(obj4);
    /*
        {
            obj1: { '1': 'a', '2': 'b' },
            obj2: { '3': 'c', '4': 'd' }
        }
     */
const obj4 = Object.assign(obj1, obj2);
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
 
// const obj5 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj5);
 // { '1': 'a', '2': 'b', '3': 'c', '4': 'e', '5': 'f', '6': 'g' } => 4: "e"

 const obj5 = {...obj1, ...obj2, ...obj3};
 console.log(obj5);
  // { '1': 'a', '2': 'b', '3': 'c', '4': 'e', '5': 'f', '6': 'g' }

const fbUsr = {
    name: "khushwant",
    email: "kw@yahoo.com",
    hobby: "hockey"
}

console.log(Object.keys(fbUsr)); // [ 'name', 'email', 'hobby' ]
console.log(Object.values(fbUsr)); // [ 'khushwant', 'kw@yahoo.com', 'hockey' ]
console.log(Object.entries(fbUsr));
    // [
    //     [ 'name', 'khushwant' ],
    //     [ 'email', 'kw@yahoo.com' ],
    //     [ 'hobby', 'hockey' ]
    // ]

console.log(Object.hasOwn(fbUsr, 'isLoggedIn')); // false
console.log(fbUsr.hasOwnProperty('isLoggedIn')); // false

console.log(Object.hasOwn(fbUsr, 'hobby')); // true
console.log(fbUsr.hasOwnProperty('hobby')); // true

