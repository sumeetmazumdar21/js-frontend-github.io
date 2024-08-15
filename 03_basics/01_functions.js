    function sum(num1, num2){
        // let sum = num1 + num2;
        // return sum;
        return num1 + num2;
    }

    let result = sum(25, 58);
    console.log("Result: ",result); //Result:  83

// ++++++++++++++++++++++++++++++++++++++++++

    function loggedInMessage(userName){
        return `${userName} just logged in.`
    }

    // loggedInMessage("Sammy"); // doesn't print anything as returned valued is not stored or consoled

    console.log(loggedInMessage("Sammy"));
        // output => Sammy just logged in

    console.log(loggedInMessage()); // no argument passed
        // output => undefined just logged in.

// +++++++++++++++++++++++++++++++++++++++++++

 function loginMessage(userName){
    if(!userName){
        console.log("Enter a valid username");
        return;        
    }

    return `Welcome, ${userName}`;

 }

    console.log(loginMessage()); 
        // Enter a valid username
        //  undefined
    console.log(loginMessage("Sam Pitroda"));
        //  Welcome, Sam Pitroda
 
    