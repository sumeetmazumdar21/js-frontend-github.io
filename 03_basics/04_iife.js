// IIFE (Immediately Invoked Function Expression

/*

 An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

    Syntax: (function())() 

        1. The first is the anonymous function with lexical scope enclosed within the grouping operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

        2. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

    # Use cases:

        1. Avoid polluting the global namespace
            Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.
        
        2. Execute an async function
            An async IIFE allows you to use await and for-await even in older browsers and JavaScript runtimes that have no top-level await
        
 */
            // Un-named IIFE
            (() => {
                console.log("DB Connected");                
            })(); // DB Connected

            // Passing parameters in IIFE
            (function(user){
                console.log(`Welcome to the website, ${user}`);
            })("Sumeet"); // Welcome to the website, Sumeet

            // Named IIFE
            (function sum(num1, num2){
                console.log(num1 + num2); // 13
            })(5, 8); 
           
            