// default declaration and specific declaration
    const score = 457;
    console.log(score); // 457

    const newScore = new Number(132);
    console.log(newScore); // [Number: 132]

// toString()
    console.log(newScore.toString().length); //3

// toFixed()
    const salary = new Number(15000);
    console.log(salary.toFixed(2)); // 15000.00

// toPrecision()
    const decVal = 123.8679;
    console.log(decVal.toPrecision(4)); // 123.9
    console.log(decVal.toPrecision(3)); // 124

    const decNum = 11234.666;
    console.log(decNum.toPrecision(3)); // 1.12e+4

// toLocaleString()
    const hundreds = 1000000;
    console.log(hundreds.toLocaleString()); // 1,000,000 => US(default) representation
    console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 => Indian representation







