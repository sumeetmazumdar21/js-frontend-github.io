```javascript
    function setUsername(username){
        this.username = username;
        console.log("called");
        
    }

    function createUser(username, email, password){
        // setUsername(username);
        setUsername.call(this,username);
        this.email = email;
        this.password = password;
    }

    const userOne = new createUser("Johndoe123", "johndoe@example.com", "password123");
    console.log(userOne);

```

    // when setUsername(username) is called, output:
        // called
        // createUser { email: 'johndoe@example.com', password: 'password123' }

    // when setUsername.call(this, username), output:
        // called
        // createUser {
        // username: 'Johndoe123',
        // email: 'johndoe@example.com',
        // password: 'password123'
        // }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

In JavaScript, the `Function.prototype.call()` method is a built-in function that allows you to call a function with a specific `this` value and individual arguments. This method is part of the Function prototype, so it can be used by any function.

Here's a detailed explanation of how `call()` works and how to use it:

### Syntax

```javascript
func.call(thisArg, arg1, arg2, ...)
```

- **`func`**: The function you want to call.
- **`thisArg`**: The value to be used as `this` when calling the function.
- **`arg1, arg2, ...`**: The arguments you want to pass to the function.

### Key Points

1. **Setting `this` Context**: The `thisArg` parameter allows you to set the `this` context for the function call. This is particularly useful when you want to control the context in which a function operates.

2. **Passing Arguments**: After the `thisArg`, you can pass any number of arguments to the function being called.

### Examples

**1. Basic Example**

```javascript
function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}

const person = {
    name: 'Alice'
};

console.log(greet.call(person, 'Hello', '!')); // Output: Hello, Alice!
```

In this example:
- The `greet` function is called with `this` set to `person`.
- `person` has a `name` property that is used in the function.
- `call` passes `'Hello'` and `'!'` as arguments to `greet`.

**2. Using `call()` with Built-in Methods**

You can use `call()` to borrow methods from other objects.

```javascript
function sayName() {
    console.log(this.name);
}

const person = {
    name: 'Bob'
};

const anotherPerson = {
    name: 'Alice'
};

// Borrow sayName method from person and use it on anotherPerson
sayName.call(anotherPerson); // Output: Alice
```

**3. Using `call()` with Constructors**

You can also use `call()` with constructor functions to create objects with specific properties.

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Employee(name, age, position) {
    Person.call(this, name, age); // Call Person constructor with the current context
    this.position = position;
}

const emp = new Employee('John', 30, 'Developer');
console.log(emp); // Output: Employee { name: 'John', age: 30, position: 'Developer' }
```

In this example:
- The `Employee` constructor calls the `Person` constructor using `call()` to set `name` and `age` properties.
- `this` in `Person.call(this, name, age)` refers to the new `Employee` instance.

### Summary

- **Purpose**: `Function.prototype.call()` is used to invoke a function with a specific `this` value and arguments.
- **Syntax**: `func.call(thisArg, arg1, arg2, ...)`
- **Usage**: It allows you to control the context in which a function runs and to pass arguments to the function.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The `Function.prototype.call()` method and defining functions in JavaScript serve different purposes and operate at different levels in JavaScript. Here’s a detailed breakdown of the differences between a function and `Function.prototype.call()`:

### 1. Function Definition

A function in JavaScript is a block of code designed to perform a specific task. Functions are first-class objects, which means they can be assigned to variables, passed as arguments, and returned from other functions.

**Syntax:**

```javascript
function functionName(parameters) {
    // function body
}
```

**Example:**

```javascript
function add(a, b) {
    return a + b;
}

const result = add(5, 3); // Calls the function with arguments 5 and 3
console.log(result); // Output: 8
```

- **Purpose**: Defines a reusable piece of code that can be executed when called.
- **Context**: You use a function to encapsulate logic and execute it with different arguments.
- **Syntax**: Defined using `function` keyword, function expression, or arrow function.

### 2. `Function.prototype.call()`

`Function.prototype.call()` is a method available to all JavaScript functions that allows you to call a function with a specified `this` value and individual arguments.

**Syntax:**

```javascript
func.call(thisArg, arg1, arg2, ...)
```

- **`func`**: The function you want to call.
- **`thisArg`**: The value to be used as `this` when calling the function.
- **`arg1, arg2, ...`**: The arguments to pass to the function.

**Example:**

```javascript
function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}

const person = {
    name: 'Alice'
};

const message = greet.call(person, 'Hello', '!'); // Calls greet with `this` set to `person`
console.log(message); // Output: Hello, Alice!
```

- **Purpose**: Allows you to explicitly set the `this` context for a function and pass arguments dynamically.
- **Context**: Used when you want to control the execution context of a function, especially useful for method borrowing and function borrowing.
- **Syntax**: `function.call(thisContext, arg1, arg2, ...)`

### Key Differences

1. **Function Definition vs. Function Invocation**:
   - **Function**: Defines how a function operates. It's about creating the function.
   - **`call()`**: Used to invoke a function with a specific context and arguments. It’s about executing the function with a customized `this` value.

2. **Creation vs. Execution**:
   - **Function**: Represents the creation of a block of code that performs a task.
   - **`call()`**: Represents the execution of a function with a specified `this` context and arguments.

3. **Setting `this` Context**:
   - **Function**: The `this` context is determined by how the function is called (e.g., as a method on an object, or as a standalone function).
   - **`call()`**: Allows you to explicitly set the `this` context of the function when calling it.

4. **Arguments Passing**:
   - **Function**: Arguments are passed directly when the function is called.
   - **`call()`**: Arguments are passed as additional parameters after the `this` context.

### Example to Illustrate Both

```javascript
function showDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person1 = { name: 'Alice', age: 30 };
const person2 = { name: 'Bob', age: 25 };

// Direct function call with context
function displayDetails(obj) {
    // `this` is set to `obj` here, as `displayDetails` is called as a method
    showDetails.call(obj); // Calls `showDetails` with `this` set to `obj`
}

// Call `displayDetails` with different contexts
displayDetails(person1); // Output: Name: Alice, Age: 30
displayDetails(person2); // Output: Name: Bob, Age: 25
```

In this example, `showDetails` is defined to log details about `this`. We use `call()` within `displayDetails` to invoke `showDetails` with a specific `this` context.

### Summary

- **Function**: Defines a reusable block of code.
- **`call()`**: Invokes a function with a specific `this` context and arguments, allowing you to control the execution context.



