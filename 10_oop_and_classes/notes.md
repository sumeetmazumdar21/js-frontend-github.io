## Classes in JavaScript

 --Yes, JavaScript does have classes! Classes were introduced in ECMAScript 2015 (ES6) and provide a syntactical sugar over JavaScript's existing prototype-based inheritance. They make it easier to create and manage objects and inheritance.

    Here's a basic example of a class in JavaScript:

    ```javascript
        
        class Person {
        constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    }

    // Creating an instance of the class
    const person1 = new Person('Alice', 30);
    person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

    ```

    In this example:

        The Person class has a constructor method that initializes the name and age properties.
        The greet method is defined to provide a greeting message.
        An instance of the Person class is created using the new keyword, and the greet method is called on that instance.
        Classes in JavaScript support inheritance, static methods, and more, making them a powerful feature for object-oriented programming.

    ## OOP

    ## Object
        - collection of properties and methods
        - toLowerCase() etc.
    
    ## Why Use OOP in JS?
     
     Using Object-Oriented Programming (OOP) in JavaScript can be beneficial for several reasons:

        1. Code Organization and Reusability
        Encapsulation: OOP helps in grouping related data and functions together into objects. This organization makes your code easier to manage and understand.
        Reuse: By creating classes and objects, you can reuse code across different parts of your application. For instance, you can create a Person class and then instantiate different Person objects without having to rewrite the same code.

        2. Inheritance and Extensibility
        Inheritance: JavaScript classes allow you to create new classes that extend existing ones. This means you can build on top of existing functionality, which helps in creating more complex systems with less duplication.
        Extensibility: You can extend base classes to add or modify features, making it easier to adapt or enhance your codebase over time.

        3. Abstraction
        Hiding Implementation Details: OOP enables you to hide complex implementation details behind a simple interface. This makes it easier to understand and work with the objects without needing to know how they are implemented internally.

        4. Modeling Real-World Entities
        Real-World Mapping: OOP is particularly useful for modeling real-world entities and relationships. For example, if you are developing a game, you might have classes like Player, Enemy, and Item, each representing different entities in the game world.

        5. Improved Maintainability
        Code Maintenance: When using OOP, changes to one part of your system are less likely to impact other parts. If a class needs to change, you typically only need to update that class, rather than every instance of that functionality throughout your code.

        6. Enhanced Collaboration
        Team Work: In larger projects with multiple developers, OOP can help in dividing tasks and responsibilities. Different team members can work on different classes or modules, making collaboration more straightforward.
        
        7. Design Patterns
        Design Patterns: OOP facilitates the use of established design patterns (like Singleton, Factory, and Observer), which can help in solving common design problems in a standardized way.

        Example: Basic Use of OOP in JavaScript:

        ```javascript
            // Base class
            class Animal {
            constructor(name) {
                this.name = name;
            }

            speak() {
                console.log(`${this.name} makes a sound.`);
            }
            }

            // Derived class
            class Dog extends Animal {
            speak() {
                console.log(`${this.name} barks.`);
            }
            }

            const myDog = new Dog('Rex');
            myDog.speak(); // Output: Rex barks.

        ```

        In this example:

        Animal is a base class with a generic speak method.
        Dog extends Animal and overrides the speak method to provide specific behavior.

        By using OOP, you can make your code more modular, extensible, and easier to understand and maintain.

## parts of OOP
 Object literal

 - Constructor function
 - Prototypes
 - Classes
 - Instances (new, this)

 # 4 pillars of OOP
    
    -Abstraction
    -Inheritance
    -Encapsulation
    -Polymorphism

## Abstraction in Javascript

Abstraction in JavaScript is a key concept in object-oriented programming (OOP) that helps simplify complex systems by hiding the implementation details and exposing only the necessary features. In essence, abstraction allows you to interact with an object or system through a simplified interface without needing to understand the underlying complexities.

### How Abstraction Works in JavaScript

1. **Encapsulation**
   - **Encapsulation** is one of the ways to achieve abstraction. By encapsulating data and functions into objects, you can hide the internal state and implementation details from outside code. This makes it easier to manage and interact with the object through a well-defined interface.

2. **Classes and Methods**
   - JavaScript classes can be used to create objects with specific methods and properties. By defining methods and properties within a class, you can provide a clear interface for interacting with objects of that class while hiding the internal logic.

3. **Abstraction with Closures**
   - Closures can be used to create private variables and functions, thus hiding internal implementation details from the outside world.

### Examples of Abstraction in JavaScript

#### Example 1: Using Classes

In this example, a `Car` class abstracts the details of how the car operates:

```javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // Public method
  drive() {
    console.log(`The ${this.make} ${this.model} is driving.`);
  }

  // Private method (not truly private in JS, but a convention)
  #startEngine() {
    console.log('Engine started.');
  }

  // Public method that uses the private method
  start() {
    this.#startEngine();
    this.drive();
  }
}

const myCar = new Car('Toyota', 'Corolla');
myCar.start(); // Output: Engine started. The Toyota Corolla is driving.
```

- **Abstraction:** The `Car` class abstracts the details of how the engine is started and how the car drives. Users of the `Car` class interact with it through the `start` method, without needing to know about the `#startEngine` method.

#### Example 2: Using Closures

Closures can create private state and methods, which is another form of abstraction:

```javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable

  return {
    // Public method to get balance
    getBalance() {
      return balance;
    },
    // Public method to deposit money
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
      }
    },
    // Public method to withdraw money
    withdraw(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
      }
    }
  };
}

const myAccount = createBankAccount(1000);
console.log(myAccount.getBalance()); // Output: 1000
myAccount.deposit(500);
console.log(myAccount.getBalance()); // Output: 1500
myAccount.withdraw(200);
console.log(myAccount.getBalance()); // Output: 1300
```

- **Abstraction:** The `createBankAccount` function abstracts the details of how the balance is managed. Users interact with the account through methods like `getBalance`, `deposit`, and `withdraw`, without having direct access to the private `balance` variable.

### Key Points About Abstraction

- **Simplification:** Abstraction helps to simplify complex systems by providing a clear and simplified interface for interacting with objects or systems.
- **Modularity:** It promotes modular design by separating the interface from the implementation, making code easier to manage and extend.
- **Maintenance:** Abstraction makes it easier to change the internal implementation without affecting the code that relies on the abstraction.

By using abstraction effectively, you can make your JavaScript code more manageable, modular, and easier to understand.

## Inheritance in Javascript

    Inheritance in JavaScript allows you to create a new class that is based on an existing class. This means you can reuse code and extend functionality, making it easier to build complex systems by leveraging existing components.

    ### How Inheritance Works in JavaScript

    JavaScript uses prototype-based inheritance, but ES6 introduced a more familiar class-based syntax to make it easier to work with inheritance. Here’s how inheritance works in both styles:

    #### 1. **Prototype-Based Inheritance**

    In traditional JavaScript, inheritance is achieved using prototypes. Every object has a prototype, and you can set up inheritance by modifying the prototype chain.

    Here's a basic example:

    ```javascript
    // Parent constructor function
    function Animal(name) {
    this.name = name;
    }

    // Parent method
    Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
    };

    // Child constructor function
    function Dog(name) {
    Animal.call(this, name); // Call the parent constructor with 'this'
    }

    // Set up inheritance
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;

    // Child method
    Dog.prototype.speak = function() {
    console.log(`${this.name} barks.`);
    };

    const myDog = new Dog('Rex');
    myDog.speak(); // Output: Rex barks.
    ```

    In this example:
    - `Dog` inherits from `Animal` by setting `Dog.prototype` to an object created from `Animal.prototype`.
    - `Animal.call(this, name)` is used to call the parent constructor function with the current context.

    #### 2. **Class-Based Inheritance (ES6+ Syntax)**

    ES6 introduced a `class` syntax that simplifies the process of setting up inheritance. Here’s how you can achieve the same example with classes:

    ```javascript
    // Parent class
    class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
    }

    // Child class
    class Dog extends Animal {
    constructor(name) {
        super(name); // Call the parent class constructor
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
    }

    const myDog = new Dog('Rex');
    myDog.speak(); // Output: Rex barks.
    ```

    In this example:
    - `Dog` extends `Animal`, meaning `Dog` inherits from `Animal`.
    - The `super` keyword is used to call the parent class’s constructor and methods.

    ### Key Concepts of Inheritance

    1. **Super Class (Parent Class)**
    - This is the class that you are inheriting from. It provides the base functionality and can be extended by other classes.

    2. **Sub Class (Child Class)**
    - This is the class that inherits from the superclass. It can override methods and add new functionality.

    3. **Method Overriding**
    - A subclass can provide a specific implementation of a method that is already defined in its superclass. This is known as method overriding.

    4. **Super Keyword**
    - In class-based inheritance, `super` is used to call methods from the superclass. This is useful for extending or modifying the behavior of the parent class methods.

    ### Example with Multiple Levels of Inheritance

    ```javascript
    // Grandparent class
    class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
    }

    // Parent class
    class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
    }

    // Child class
    class Labrador extends Dog {
    fetch() {
        console.log(`${this.name} is fetching.`);
    }
    }

    const myLabrador = new Labrador('Max');
    myLabrador.speak(); // Output: Max barks.
    myLabrador.fetch(); // Output: Max is fetching.
    ```

    In this example:
    - `Labrador` inherits from `Dog`, which in turn inherits from `Animal`.
    - `Labrador` has access to methods from both `Dog` and `Animal`, as well as its own method `fetch`.

    ### Benefits of Inheritance

    - **Code Reusability:** Inheritance allows you to reuse existing code and avoid duplication by sharing functionality among classes.
    - **Extensibility:** You can extend existing classes to add new features or modify existing behavior.
    - **Modularity:** Inheritance helps in organizing code into distinct classes that can be more easily managed and understood.

    By using inheritance, you can create more maintainable and scalable code, leveraging existing functionality while extending or modifying it as needed.

## Encapsulation in Javascript

    Encapsulation in JavaScript is a fundamental concept in object-oriented programming that refers to the bundling of data (attributes) and methods (functions) that operate on the data into a single unit, usually an object or class. It also involves restricting direct access to some of the object's components, which is often achieved through private properties and methods.

    ### Key Aspects of Encapsulation

    1. **Data Hiding**
    - **Private Variables/Methods:** These are not accessible from outside the object or class, ensuring that the internal state and implementation details are hidden.
    - **Public Interface:** Provides controlled access to the private data through public methods.

    2. **Control Over Data**
    - Encapsulation allows you to define and control how data is accessed or modified. This helps ensure that an object's state remains consistent and valid.

    3. **Modularity**
    - Encapsulation improves code organization by keeping data and methods that operate on that data together. This makes the code more modular and easier to maintain.

    ### Encapsulation Techniques in JavaScript

    #### 1. **Using Closures**

    Closures allow you to create private variables and methods by defining them inside a function and exposing public methods to interact with these private components.

    ```javascript
    function Counter() {
    let count = 0; // Private variable

    return {
        increment() {
        count++;
        console.log(count);
        },
        decrement() {
        count--;
        console.log(count);
        },
        getCount() {
        return count;
        }
    };
    }

    const myCounter = Counter();
    myCounter.increment(); // Output: 1
    myCounter.increment(); // Output: 2
    console.log(myCounter.getCount()); // Output: 2
    // Direct access to `count` is not possible
    ```

    In this example:
    - `count` is a private variable not accessible directly from outside the `Counter` function.
    - Public methods `increment`, `decrement`, and `getCount` provide controlled access to the private variable.

    #### 2. **Using ES6 Classes with Private Fields**

    ES6 introduced a more formal way to handle private properties and methods using the `#` syntax.

    ```javascript
    class Counter {
    #count = 0; // Private field

    increment() {
        this.#count++;
        console.log(this.#count);
    }

    decrement() {
        this.#count--;
        console.log(this.#count);
    }

    getCount() {
        return this.#count;
    }
    }

    const myCounter = new Counter();
    myCounter.increment(); // Output: 1
    myCounter.increment(); // Output: 2
    console.log(myCounter.getCount()); // Output: 2
    // Direct access to `#count` is not possible
    ```

    In this example:
    - `#count` is a private field that cannot be accessed from outside the class.
    - Public methods `increment`, `decrement`, and `getCount` provide controlled access to the private field.

    #### 3. **Using Symbol Properties**

    Symbols can be used to create properties that are not easily accessible or enumerable.

    ```javascript
    const countSymbol = Symbol('count');

    class Counter {
    constructor() {
        this[countSymbol] = 0; // Private symbol property
    }

    increment() {
        this[countSymbol]++;
        console.log(this[countSymbol]);
    }

    decrement() {
        this[countSymbol]--;
        console.log(this[countSymbol]);
    }

    getCount() {
        return this[countSymbol];
    }
    }

    const myCounter = new Counter();
    myCounter.increment(); // Output: 1
    myCounter.increment(); // Output: 2
    console.log(myCounter.getCount()); // Output: 2
    // Direct access to `countSymbol` is not straightforward
    ```

    In this example:
    - `countSymbol` is used to create a unique property key that is not easily accessed or collided with other properties.

    ### Benefits of Encapsulation

    1. **Data Integrity:** Encapsulation helps ensure that an object’s data is always in a valid state by controlling how data is accessed and modified.
    2. **Ease of Maintenance:** By hiding implementation details, encapsulation makes it easier to modify and maintain the code without affecting other parts of the application.
    3. **Reusability:** Encapsulation promotes modular design, making it easier to reuse and manage code components.
    4. **Flexibility:** It allows changes to the internal implementation without altering the public interface, thus providing flexibility in code evolution.

    By using encapsulation, you can build more robust, maintainable, and understandable JavaScript code, ensuring that the data and behavior associated with objects are properly managed and protected.

## Polymorphism in Javascript

        Polymorphism in JavaScript refers to the ability of different objects or functions to be used interchangeably, allowing them to perform similar operations in different ways. It's a key concept in object-oriented programming (OOP) and contributes to flexible and reusable code.

### Key Aspects of Polymorphism

1. **Method Overriding**
   - **Inheritance:** Subclasses can override methods of their parent classes to provide specific implementations while maintaining the same method signature. This allows you to call the same method on different objects and get different behaviors.

2. **Method Overloading**
   - **Function Overloading:** While JavaScript does not support method overloading in the traditional sense (like some statically typed languages), you can achieve similar results by using default parameters or handling different types of inputs within a function.

3. **Duck Typing**
   - **Interface Flexibility:** JavaScript uses duck typing, meaning that if an object implements the necessary methods and properties, it can be used interchangeably with other objects, regardless of its specific type.

    ### Examples of Polymorphism in JavaScript

    #### 1. **Method Overriding**

    Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its superclass.

    ```javascript
    // Base class
    class Animal {
    speak() {
        console.log('Animal makes a sound');
    }
    }

    // Subclass
    class Dog extends Animal {
    speak() {
        console.log('Dog barks');
    }
    }

    // Subclass
    class Cat extends Animal {
    speak() {
        console.log('Cat meows');
    }
    }

    const animals = [new Dog(), new Cat()];

    animals.forEach(animal => {
    animal.speak(); // Output: Dog barks
                    //         Cat meows
    });
    ```

    In this example:
    - The `Dog` and `Cat` classes override the `speak` method from the `Animal` class.
    - The `speak` method is called on different objects (`Dog` and `Cat`), demonstrating polymorphism by producing different outputs based on the object type.

    #### 2. **Method Overloading (Alternative Approaches)**

    While JavaScript does not natively support method overloading, you can handle multiple types of inputs by checking the arguments within a function.

    ```javascript
    function greet(person) {
    if (typeof person === 'string') {
        console.log(`Hello, ${person}`);
    } else if (person instanceof Person) {
        console.log(`Hello, ${person.name}`);
    } else {
        console.log('Hello, stranger');
    }
    }

    class Person {
    constructor(name) {
        this.name = name;
    }
    }

    greet('Alice');           // Output: Hello, Alice
    greet(new Person('Bob')); // Output: Hello, Bob
    greet(42);                // Output: Hello, stranger
    ```

    In this example:
    - The `greet` function handles different types of inputs (`string` and `Person` objects) and responds accordingly.

    #### 3. **Duck Typing**

    Duck typing allows objects to be used interchangeably based on their methods and properties, rather than their specific types.

    ```javascript
    class Bird {
    fly() {
        console.log('Bird flies');
    }
    }

    class Airplane {
    fly() {
        console.log('Airplane flies');
    }
    }

    function makeItFly(flyable) {
    flyable.fly(); // Calls the fly method on any object with a fly method
    }

    const bird = new Bird();
    const airplane = new Airplane();

    makeItFly(bird);      // Output: Bird flies
    makeItFly(airplane);  // Output: Airplane flies
    ```

    In this example:
    - The `makeItFly` function works with any object that has a `fly` method, regardless of the object's specific class.

    ### Benefits of Polymorphism

    1. **Code Reusability:** Polymorphism allows for writing more generic and reusable code that can handle different types of objects.
    2. **Flexibility:** It provides flexibility in code design by allowing different classes to be used interchangeably based on their behavior.
    3. **Maintainability:** It simplifies code maintenance by enabling changes to be made in a single place (e.g., in the base class or function) that can propagate across different subclasses or objects.

    By leveraging polymorphism, you can create more flexible and adaptable code, allowing different types of objects to be treated in a uniform way while still providing specific behavior tailored to each type.