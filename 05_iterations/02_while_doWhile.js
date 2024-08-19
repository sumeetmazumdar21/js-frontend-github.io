// while
    /*
        The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

        Syntax: 
            while (condition)
                statement
    */

            // let n = 0;
            // let x = 0;
            
            // while (n < 3) {
            //   n++;
            //   x += n;
            //   console.log(x);
            //     // 1
            //     // 3
            //     // 6
            // }

// do-while

            /*
                The do...while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

                Syntax: 
                    do
                    statement
                        while (condition);
            */

                        // let result = "";
                        // let i = 0;
                        // do {
                        //   i += 1;
                        //   result += `${i} `;
                        // } while (i > 0 && i < 5);
                        // // Despite i === 0 this will still loop as it starts off without the test
                        
                        // console.log(result); // 1 2 3 4 5

                        let score = 10;
                        do {
                            console.log(`score is ${score}`);
                            score++;
                           // prints score = 10 as it operates once before checking the condition 
                        } while (score >= 1 && score < 8);
            