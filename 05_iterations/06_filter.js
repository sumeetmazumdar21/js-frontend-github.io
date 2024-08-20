// forEach Return
/*
    Return value
        None (undefined).

        Description
        The forEach() method is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order. Unlike map(), forEach() always returns undefined and is not chainable. The typical use case is to execute side effects at the end of a chain. Read the iterative methods section for more information about how these methods work in general.
*/

// let places = ["Italy", "Spain", "Greece"];
// const values = places.forEach((item) => {
//     console.log(item);
//         /*
//             Italy
//             Spain
//             Greece
//         */
//     return item;
// })

// console.log(values); // undefined 
//     // Unlike map(), forEach() always returns undefined and is not chainable.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 Array.prototype.filter()

    The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

 */

    let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // const newArr = numArr.filter((num) => {
    //     return num > 4;
    // });
    // console.log(newArr); // [ 5, 6, 7, 8, 9 ]

// using forEach()

    // let arr1 = [];
    // numArr.forEach((num) => {
    //     if(num > 4){
    //         arr1.push(num);
    //     }
    // })
    // console.log(arr1); // [ 5, 6, 7, 8, 9 ]
    
    

    // let words = ["cat", "attributes", "hippopotamus", "rat"];
    // let newArr = words.filter((word) => {
    //     return word.length > 4;
    // });
    // console.log(newArr); // [ 'attributes', 'hippopotamus' ]

    const books = [
        { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
        { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
        { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
        { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
        { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
        { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
        { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
        { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
        { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
      ];
    
      const historyBooks = books.filter((book) => book.genre === "History");

      console.log(historyBooks);
      
            /*
                [
                    {
                        title: 'Book Three',
                        genre: 'History',
                        publish: 1999,
                        edition: 2007
                    },
                    {
                        title: 'Book Seven',
                        genre: 'History',
                        publish: 1986,
                        edition: 1996
                    }
                ]
            */

        const newBooks = books.filter((book) => {
            return book.edition > 2008 && book.genre === "Fiction"
        });
        console.log(newBooks);
        