// Date

        let myDate = new Date();
        // console.log(typeof myDate); // Output: Object


        // console.log(myDate); // Output: 2024-08-14T07:42:52.796Z

        // console.log(myDate.toString()); // Output: Wed Aug 14 2024 07:45:17 GMT+0000 (Coordinated Universal Time)

        // console.log(myDate.toDateString()); // Output: Wed Aug 14 2024

        // console.log(myDate.toISOString()); // Output: 2024-08-14T07:46:58.220Z

        // console.log(myDate.toJSON()); // Output: 2024-08-14T07:48:26.484Z

        // console.log(myDate.getDate()); // Output: 14

        // console.log(myDate.getDay()); // Output: 3

        // console.log(myDate.getFullYear()); // Output: 2024

        // console.log(myDate.getTime());  // Output:  1723621970453

        // console.log(myDate.toLocaleDateString()); //  Output: 8/14/2024

        // console.log(myDate.toLocaleString()); // Output: 8/14/2024, 7:55:06 AM

        // console.log(myDate.toLocaleTimeString()); // Output: 7:55:53 AM

        // console.log(myDate.getTimezoneOffset()); // Output: 0


// Declaring a specific date and applying date methods on it
    
    /*
        When date is mentioned in the form of (year, month, day)
        In JavaScript, month starts from 0 i.e. 0 for January, 1 for February, 7 for August etc.
    */

    let newDate = new Date(2024,7,21); // 7 => August
    // console.log(newDate); // 2024-08-21T00:00:00.000Z

    // console.log(newDate.toDateString()); // Wed Aug 21 2024
      
    let newDateWithTime = new Date(2024,6,15,7,24); // 6 => July
    // console.log(newDateWithTime.toLocaleString()); // 7/15/2024, 7:24:00 AM
    
    
    /*
    When date is mentioned in the form of (yyyy-mm-dd) or (mm-dd-yyyy)
        In JavaScript, month starts from 01 i.e. 01 for January, 02 for February, 08 for August etc
    */
    let dayOne = new Date("2024-11-17");
    //  console.log(dayOne.toDateString()); // Sun Nov 17 2024
    let dayTwo = new Date("07-15-2025");
    //  console.log(dayTwo.toDateString()); // Tue Jul 15 2025

//  Time Stamp

    let myTimeStamp = Date.now();
    // returns value in milliseconds
    // console.log(myTimeStamp); // output: 1723623893856

    // converting millisecond into seconds
    console.log(Math.floor((myTimeStamp)/1000)); // Output: 1723624023

    
    
    
     