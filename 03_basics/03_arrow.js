/******************** "This" keyword **********************/
//  "this" inside an object

    // const user = {
    //     candidate: "Sumeet",
    //     rank: 23,
    //     result: function(){
    //         console.log(`Canidate ${this.candidate} has secured AIR ${this.rank}`); // "this" => current context

    //         console.log(this);
    //     }    
    // }

    // user.result(); // Output:
    //     /*
    //         Canidate Sumeet has secured AIR 23
    //         { candidate: 'Sumeet', rank: 23, result: [Function: result] }
    //     */
    // user.candidate = "Pratyush"; // changing current context
    // user.rank = 221; 
    // user.result(); // Output:
    //     /*
    //         Canidate Pratyush has secured AIR 221
    //         { candidate: 'Pratyush', rank: 221, result: [Function: result] }
    //     */

    // console.log(this); // Output: {} => node refers to an empty object "{}" because currently, there is no context available in the node environment

// "this" inside a function

    // function one(){
    //     let username = "Sia";
    //     console.log(this.username); // undefined => this cannot be accessed inside a function, as it can be inside an object
        
    // }

    // one();

    // function two(){
    //         let username = "Sameer";
    //         console.log(this.username); // undefined => this cannot be accessed inside a function, as it can be inside an object
            
    //     }
    
    //     two();

//  "this" inside an arrow function

    // const three = () => {
    //         let username = "Sia";
    //         console.log(this.username); // undefined => this cannot be accessed inside a function, as it can be inside an object
            
    //     }
    
        // three();

/*************Arrow Functions ***************/

const sum = (a, b) => {
    return a + b
}

console.log(sum(22, 9)); // Output => 31

// Implicit return

// const product = (a, b) => a * b ;
const product = (a, b) => ( a * b ) ;
console.log(product(4, 8)); // 32

