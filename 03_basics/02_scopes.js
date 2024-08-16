    let a = "apple";
    const b = 500;
    var c = "carrot";

    if(true) {
        let a = 10;
        console.log("a inside function: ", a);
        // a inside function:  10
        const b = 20;
        console.log("b inside function: ", b);
        // b inside function:  20
        var c = 30;
        console.log("c inside function: ", c);
        // c inside function:  30

        let arr1 = [10, 20, 30];
        console.log("arr1 inside function: ", arr1);
        // arr1 inside function:  [ 10, 20, 30 ]

        const arr2 = ["apple", "carrot", "orange"];
        console.log("arr2 inside function: ", arr2);
        // arr2 inside function:  [ 'apple', 'carrot', 'orange' ]
    }

    console.log("a outside function: ", a); 
    console.log("b outside function: ", b); 
    console.log("c outside function: ", c); // Output => 30 and not carrot, as "var" is not confined to its scope unlike "let" and "const"
    // console.log("arr1 outside function: ", arr1); 
        // ReferenceError: arr1 is not defined
    // console.log("arr2 outside function: ", arr2);
        // ReferenceError: arr2 is not defined

/******************* NESTED SCOPE  *********************/

    function one(){
        let username = "leo2108";
        
        function two(){
            let website = "facebook";
            console.log(username); // leo2108        
        }
        // console.log(website); //ReferenceError: website is not defined
        two();
    }

    one();

    if(true){
        let userId = "user007";
        if(userId){
            let accountNum = 20000022200022;
            console.log(`user id: ${userId} has account number: ${accountNum}`); // user id: user007 has account number: 20000022200022
        } 
        // console.log(accountNum);    // ReferenceError: accountNum is not defined => Out of scope
    }
        // console.log(userId); // ReferenceError: userId is not defined

// +++++++++++++++++++ Interesting Concept on Hoisting +++++++++++++++++++

    console.log(addOne(9)); // Output => 10

    function addOne(num){
        return num + 1;
    }

    console.log(addTwo(10)); // ReferenceError: Cannot access 'addTwo' before initialization

    const addTwo = function(num){
        return num + 2;
    }
