// default declaration and specific declaration
    const score = 457;
    // console.log(score); // 457

    const newScore = new Number(132);
    // console.log(newScore); // [Number: 132]

// toString()
    // console.log(newScore.toString().length); //3

// toFixed()
    const salary = new Number(15000);
    // console.log(salary.toFixed(2)); // 15000.00

// toPrecision()
    const decVal = 123.8679;
    // console.log(decVal.toPrecision(4)); // 123.9
    // console.log(decVal.toPrecision(3)); // 124

    const decNum = 11234.666;
    // console.log(decNum.toPrecision(3)); // 1.12e+4

// toLocaleString()
    const hundreds = 1000000;
    // console.log(hundreds.toLocaleString()); // 1,000,000 => US(default) representation
    // console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 => Indian representation

// ++++++++++++++++ MATHS ++++++++++++++++++

    // console.log(Math); // Object [Math] {}
    // console.log(Math.abs(-33)); //33
    // console.log(Math.round(4.56)); //5
    // console.log(Math.ceil(4.12)); //5 -> next integer value
    // console.log(Math.floor(6.9)); //6 -> previous integer value
    // console.log(Math.max(-2, 9, 4, 11)); //11
    // console.log(Math.min(1, -2, 44, 5)); //-2
    
    // console.log(Math.random()); // value betwween 0 & 1. 0 <= num <= 1
    // console.log((Math.random() * 10) + 1); 

    const min = 10;
    const max = 20;

    console.log(Math.floor(Math.random() * (max - min + 1)) + min); // values between min and max => min <= value <= max
    
    
    
    
    
    
    
    
    
