    const footballTeams = ["Chelsea", "Manchester UTD", "Real Madrid"];
    const cricketTeams = ["KKR", "DC", "RCB"]
// push() =>  adds the specified elements to the end of an array and returns the new length of the array.

    // footballTeams.push(cricketTeams)
    // console.log(footballTeams); // [ 'Chelsea', 'Manchester UTD', 'Real Madrid', [ 'KKR', 'DC', 'RCB' ] ]

// concat() => is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

    const mergedTeams = footballTeams.concat(cricketTeams);
    // console.log(mergedTeams); // [ 'Chelsea', 'Manchester UTD', 'Real Madrid', 'KKR', 'DC', 'RCB' ]

// Spread Operator
    const all_Teams = [...footballTeams, ...cricketTeams];
    console.log(all_Teams); // [ 'Chelsea', 'Manchester UTD', 'Real Madrid', 'KKR', 'DC', 'RCB' ]

// array.flat() => creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

    let arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 1, [2, 3]]]];
    let newArr = arr1.flat(5); // upto depth of 5
    console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3]

// Static Methods

    // Array.isArray() => determines whether the passed value is an Array

        console.log(Array.isArray("Sumeet")); //false

        console.log(Array.isArray([1, 3, 5]));
        // Expected output: true

        console.log(Array.isArray('[]'));
        // Expected output: false

        console.log(Array.isArray(new Array(5)));
        // Expected output: true

        console.log(Array.isArray(new Int16Array([15, 33])));
        // Expected output: false

    // Array.from() => creates a new, shallow-copied Array instance from an iterable or array-like object.

        console.log(Array.from("Sumeet")); // [ 'S', 'u', 'm', 'e', 'e', 't' ]

        console.log(Array.from({name: "Sameer"})); // [] => We need to mention whether array is to be created of the "keys" or "values"

        console.log(Array.from('foo'));
        // Expected output: Array ["f", "o", "o"]

        console.log(Array.from([1, 2, 3], (x) => x + x));
        // Expected output: Array [2, 4, 6]
    
    // Array.of() => creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
        let marks1 = 100;
        let marks2 = 78;
        let marks3 = 56;
        console.log(Array.of(marks1, marks2, marks3)); //[ 100, 78, 56 ]

        console.log(Array.of('foo', 2, 'bar', true));
        // Expected output: Array ["foo", 2, "bar", true]

        console.log(Array.of());
        // Expected output: Array []
    
    