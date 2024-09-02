    class User{
        constructor(username){
            this.username = username;
        }

        display(){
            console.log(`Username: ${this.username}`);        
        }

        // Non-static methods are accessible
        // createId(){
        //     const id = this.username + Math.floor(Math.random() *100);
        //     return id; // returns id
        // }

        static createId(){
            const id = this.username + Math.floor(Math.random() *100);
            return id;
            }
        }

        const userOne = new User("Gargi");
        console.log(userOne.display()); // Username: Gargi
        // console.log(userOne.createId()); // Gargi63

// Static method not accessible by instances 
    console.log(userOne.createId()); // TypeError: userOne.createId is not a function


/*
        In JavaScript, methods can be either static or non-static (instance) methods. Here’s a quick rundown of each:

        ### Non-static (Instance) Methods

        Non-static methods are associated with an instance of a class. They operate on the data contained in that specific instance. You define them inside a class, and you call them on instances of that class.

        #### Example

        ```javascript
        class Car {
            constructor(make, model) {
                this.make = make;
                this.model = model;
            }

            // Non-static method
            displayInfo() {
                console.log(`Car: ${this.make} ${this.model}`);
            }
        }

        const myCar = new Car('Toyota', 'Corolla');
        myCar.displayInfo();  // Output: Car: Toyota Corolla
        ```

        In this example, `displayInfo` is a non-static method. It accesses `this.make` and `this.model`, which are properties of the instance of `Car`.

        ### Static Methods

        Static methods belong to the class itself rather than any instance of the class. They are called on the class itself, not on an instance. Static methods are used for functionality that is not dependent on instance properties.

        #### Example

        ```javascript
        class Car {
            constructor(make, model) {
                this.make = make;
                this.model = model;
            }

            // Non-static method
            displayInfo() {
                console.log(`Car: ${this.make} ${this.model}`);
            }

            // Static method
            static honk() {
                console.log('Beep beep!');
            }
        }

        Car.honk();  // Output: Beep beep!

        const myCar = new Car('Toyota', 'Corolla');
        myCar.displayInfo();  // Output: Car: Toyota Corolla
        ```

        In this example, `honk` is a static method. It is called on the `Car` class itself, not on an instance of `Car`. Static methods do not have access to instance properties or methods; they are meant for operations that are class-wide and not dependent on individual instances.

        ### Key Points

        - **Non-static methods** operate on an instance of the class. They have access to instance properties and other non-static methods.
        - **Static methods** are called on the class itself, not on instances. They don’t have access to instance properties or methods but can be useful for utility functions or class-level operations.

        Understanding these concepts helps in structuring your code better and making the most out of the object-oriented features in JavaScript.
*/