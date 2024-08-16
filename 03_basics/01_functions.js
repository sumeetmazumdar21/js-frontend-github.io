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
 
//     //++++++++++++++++++++++++++++++++++++ 

/*Rest parameters "..." in function(...parameters)
    The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
*/

    function cartTotal(...num){
        return num;
    }
    console.log(cartTotal(100, 500, 400, 2000, 2300)); // [ 100, 500, 400, 2000, 2300 ]

    function cartTotal(val1, val2, ...num){
        return num;
    }
    console.log(cartTotal(100, 500, 400, 2000, 2300)); // [ 400, 2000, 2300 ]
    // val1 = 100, val2 = 500, ...num = [400, 2000, 2300]

// Handling objects using function

    function handleProduct(objectName){
        console.log(`Product name is ${objectName.productName} and Product Price is INR ${objectName.productPrice}`); 
    }

    let product = {
        productName: "iPad",
        productPrice: 84999
    }

    handleProduct(product); // Product name is iPad and Product Price is INR 84999

        
    handleProduct({
        productName: "Oppo 15 Pro",
        productPrice: 21000
    });  // Product name is Oppo 15 Pro and Product Price is INR 21000


// Handling Array in function

    let arr = [100, 200, 300, 400, 500];

    function returnSecondValue(getArr){
        return getArr[1];
    } // console.log(returnSecondValue(arr)); // Output => 200


    console.log(returnSecondValue([23, 45, 11, 89, 67])); // Output => 45
