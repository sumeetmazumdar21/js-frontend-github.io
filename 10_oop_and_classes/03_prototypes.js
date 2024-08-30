    let name = "Jairam"
    console.log(name.length); //6

    let lastName = "Ramesh          ";
    console.log(lastName.length); // 16

    let fruits = ["banana", "orange", "strawberry"];

    let fruitTaste = {
        banana: "sweet",
        orange: "citrusy",
        strawberry: "extra-sweet",

        getTasteResult: function(){
            // console.log(`Orange is ${this.orange} in taste`);      
        }
    }

    fruitTaste.getTasteResult(); // Orange is citrusy in taste

// Provides functionality common to all JavaScript objects. That is, the method color created now can be accessed by all strings, arrays and objects

    Object.prototype.color = function(){
        console.log("Pick any fruit to know its color");
    }

    fruits.color() // Color can't be same for all fruits
    fruitTaste.color(); // Color can't be same for all fruits
    lastName.color(); // Color can't be same for all fruits

    Array.prototype.greetings = function(){
        console.log("Welcome to the fruit store");
    }

    fruits.greetings(); // Welcome to the fruit store
    fruitTaste.greetings(); // TypeError: fruitTaste.greetings is not a function
    lastName.greetings(); // TypeError: lastName.greetings is not a function

// Inheritance

    const hod = {
        power: "department",
        lectures: true
    }

    const professor = {
        power: "class",
        lectures: "true"
    }

    const labAsst = {
        power: "laboratory",
        lectures: false
    }

    const student = {
        power: "powerless",
        __proto__: labAsst,
    }

    professor.__proto__ = hod;

// Modern Syntax:

    Object.setPrototypeOf(labAsst, professor) // labAsst can access the properties of professor

    let fullName = "Joseph D'costa     ";

    String.prototype.trueLength = function(){

        console.log(`${this}`);
        console.log(`Length including white spaces is ${this.length}`);    
        console.log(`True length is: ${this.trim().length}`);        

    }

    fullName.trueLength();
        /*
            Joseph D'costa     
            Length including white spaces is 19
            True length is: 14
        */

    "Sachin".trueLength();
        /*
            Sachin
            Length including white spaces is 6
            True length is: 6
        */

    "Jai       ".trueLength();
        /*
            Jai       
            Length including white spaces is 10
            True length is: 3
        */