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

// Creating arrays from variables

    console.log(Array.isArray("Sumeet")); //false
    console.log(Array.from("Sumeet")); // [ 'S', 'u', 'm', 'e', 'e', 't' ]
    console.log(Array.from({name: "Sameer"})); // [] => We need to mention whether array is to be created of the "keys" or "values"
    
    let marks1 = 100;
    let marks2 = 78;
    let marks3 = 56;
    console.log(Array.of(marks1, marks2, marks3)); //[ 100, 78, 56 ]
    
    