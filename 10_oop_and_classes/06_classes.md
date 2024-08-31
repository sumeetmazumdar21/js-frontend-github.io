In JavaScript, classes provide a way to create objects and manage their behavior in a structured manner. Classes in JavaScript are essentially syntactic sugar over the existing prototype-based inheritance and are introduced in ECMAScript 6 (ES6). They make it easier to work with prototypes and inheritance.

Here's a basic overview of how to use classes in JavaScript:

### Defining a Class

To define a class, you use the `class` keyword followed by the class name and a block containing the methods and constructor. Here’s an example:

```javascript
class Person {
  // The constructor method is called when a new instance of the class is created
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // A method to greet the person
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Creating an instance of the class
const person1 = new Person('Alice', 30);

// Calling a method on the instance
console.log(person1.greet()); // Output: Hello, my name is Alice and I am 30 years old.
```

### Inheritance

Classes can inherit from other classes using the `extends` keyword. This allows a class to inherit properties and methods from another class.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}

const dog = new Dog('Rex');
console.log(dog.speak()); // Output: Rex barks.
```

### Static Methods

Static methods are defined on the class itself, not on instances of the class. They are useful for utility functions that don’t depend on instance properties.

```javascript
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(5, 3)); // Output: 8
```

### Getters and Setters

Getters and setters allow you to define how properties are accessed and modified.

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    // To change area, you could adjust width and height accordingly
    this.width = Math.sqrt(value);
    this.height = Math.sqrt(value);
  }
}

const rect = new Rectangle(10, 20);
console.log(rect.area); // Output: 200

rect.area = 400;
console.log(rect.width); // Output: 20
console.log(rect.height); // Output: 20
```

### Methods and Properties in Classes

- **Constructor**: A special method used to initialize objects.
- **Methods**: Functions that belong to the class.
- **Static Methods**: Functions that belong to the class itself and are not tied to instances.
- **Getters/Setters**: Special methods to define custom behavior for property access and assignment.

Classes in JavaScript offer a more familiar and straightforward way to handle object-oriented programming compared to prototypes. They simplify the creation and management of objects and inheritance hierarchies, making your code cleaner and more maintainable.