// if conditional statement
// <, >, ==, <=, >=, !=, ===, !==

// if(2 == "2"){
//     console.log("executed");
// }

// if( 3 !== "3"){
//     console.log("datatype mismatch");
    
// }

// const score = 300;
// if(score > 200){
//     let power = "fly";
//     console.log(`User Power: ${power}`);  //User Power: fly  
// }
// console.log(`User Power: ${power}`); // ReferenceError: power is not defined

// Implicit scope
    // const balance = 10000;
    // if(balance >= 5000) console.log("Eligible for loa");

// multiple lines
    // const balance = 4000;
    // if(balance < 5000) console.log("not eligible for loan"), console.log("try to save more");
    // ; /* 
    //     not eligible fo loan
    //     try to save more
    // */
    
// nested if else 
    // let temperature = 51;

    // if(temperature < 20){
    //     console.log("Cold");        
    // }
    // else if(temperature < 30){
    //     console.log("Moderate");        
    // }
    // else if(temperature < 40){
    //     console.log("Hot");
    // }
    // else{
    //     console.log("Severe Heat");
    //}

// Multiple condition

    const userLoggedIn = true;
    const upiWallet = true;
    const googleLogin = false;
    const emailLogin = true;

    if(googleLogin || emailLogin){ //true
        console.log("User logged in successfully");
            if(userLoggedIn && upiWallet){ // true
                console.log("Shopping access provided");            
            }
    }

