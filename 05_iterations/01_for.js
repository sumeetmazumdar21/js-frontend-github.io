// for
    /*
        The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop

        Syntax: 
            for (initialization; condition; afterthought)
                statement

    */

        //     let str = '';

        //     for (let i = 0; i < 9; i++) {
        //       str = str + i;
        //     }
            
        //     console.log(str); // Expected output: "012345678"

        // let myArray = ["orange", "blue", "green"];
        // for (let index = 0; index < myArray.length; index++) {
        //     const element = myArray[index];
        //     console.log(element);
        //         /*
        //             orange
        //             blue
        //             green
        //         */
        // }

// break and continue

    for (let i = 1; i < 20; i++) {
        if(i == 5){
            console.log("threshold reached, exiting loop");
            break;
        }
        console.log(`value of i is ${i}`);
        /*
            value of i is 1
            value of i is 2
            value of i is 3
            value of i is 4
            threshold reached, exiting loop
        */
    }
    for (let i = 1; i <= 20; i++) {
        if((i == 5)||(i == 10)||(i == 15)){
            console.log("threshold reached, skipping value");
            continue;
        }
        console.log(`value of i is ${i}`);
        /*
            value of i is 1
            value of i is 2
            value of i is 3
            value of i is 4
            threshold reached, exiting loop
            value of i is 1
            value of i is 2
            value of i is 3
            value of i is 4
            threshold reached, skipping value
            value of i is 6
            value of i is 7
            value of i is 8
            value of i is 9
            threshold reached, skipping value
            value of i is 11
            value of i is 12
            value of i is 13
            value of i is 14
            threshold reached, skipping value
            value of i is 16
            value of i is 17
            value of i is 18
            value of i is 19
            value of i is 20
        */
    }
