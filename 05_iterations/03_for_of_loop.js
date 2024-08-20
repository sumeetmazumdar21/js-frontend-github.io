/*
    for...of

        The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.

        Syntax:
            for (variable of iterable)
                statement
*/

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  //console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

const greetings = "hello user!";

for (const greet of greetings) {
    if(greet == " "){ // skips the blank space
        continue;
    }
    // console.log(`next letter of greetings is: ${greet}`);
    
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
    Map:

    The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
*/

    const map = new Map();
    map.set("IN", "India");
    map.set("UK", "United Kingdom");
    map.set("SL", "Sri Lanka");
    map.set("IN", "India"); // duplicate entries are not recorded
    // console.log(map);
        /*
            Map(3) {
                'IN' => 'India',
                'UK' => 'United Kingdom',
                'SL' => 'Sri Lanka'
            }
        */

        // for (const key of map) {
        //     console.log(key);
        //     /*
        //         [ 'IN', 'India' ]
        //         [ 'UK', 'United Kingdom' ]
        //         [ 'SL', 'Sri Lanka' ]
        //     */
        // }

        for (const [key, value] of map) { // destructuring array
            // console.log(key, ": ", value);
            /*
                IN :  India
                UK :  United Kingdom
                SL :  Sri Lanka
            */
        }
    
        // const myObj = {
        //     "India": "New Delhi",
        //     "UK": "London",
        //     "Sri Lanka": "Colombo"
        // }

        const myObj = {
            India: "New Delhi",
            UK: "London",
            SriLanka: "Colombo"
        }

        for (const key of myObj) {
            console.log(key);
            //TypeError: myObj is not iterable
        }
        for (const [key, value] of myObj) { 
            // console.log(key, ": ", value);
           // TypeError: myObj is not iterable 
        }
