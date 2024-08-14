        const arr1 = [0, 1, 2, 3 , 4, 5];
        console.log(arr1.length); //6

        const arr2 = new Array(11, 22, 33, 44, 55);
        console.log(typeof arr2); // object
        arr2.push("Sumeet");
        console.log(arr2); // [ 11, 22, 33, 44, 55, 'Sumeet' ]
        console.log(arr2.pop()); //Sumeet
        console.log(arr2); //[ 11, 22, 33, 44, 55 ]
        arr2.unshift(0); // adds the specified elements to the beginning of an array and returns the new length of the array.
        console.log(arr2); //[ 0, 11, 22, 33, 44, 55 ] 
        arr2.shift(); // removes the first element from an array
        console.log(arr2); // [ 11, 22, 33, 44, 55 ]

        let arr3 = new Array(2,4,5,22,1,9);
        console.log(arr3.includes(7)); // false => determines whether an array includes a certain value among its entries, returning true or false as appropriate.

        console.log(arr3.indexOf(1)); // 4 => returns the first index at which a given element can be found in the array, or -1 if it is not present.

        console.log(arr3.indexOf(19)); // -1

        const newArr = arr3.join(); //creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

        console.log(arr3); // [ 2, 4, 5, 22, 1, 9 ]
        console.log(newArr); // 2,4,5,22,1,9
        console.log(typeof newArr); // string

        let myArr = [0, 1, 2, 3, 4, 5, 6];
        console.log("A", myArr); // A [0, 1, 2, 3, 4, 5, 6]
        let myArr1 = myArr.slice(1,3); 
        console.log(myArr1); // [ 1, 2 ]
        // The original array will not be modified on slice().
        console.log("B", myArr); // B [0, 1, 2, 3, 4, 5, 6] 

        let myArr2 = myArr.splice(1,3); 
        console.log(myArr2); // [ 1, 2, 3 ]
        // changes the contents of an array by removing or replacing existing elements and/or adding new elements 
        console.log("C", myArr); // C [ 0, 4, 5, 6 ] 

        /*
            To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().
        */






