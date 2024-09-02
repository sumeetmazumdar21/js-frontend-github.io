```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bind in JavaScript</title>
</head>
<body>
    <button>Click Here</button>
</body>

<script>
    class React{
        constructor(){
            this.library = "React";
            this.server = "https://localhost:3001"

            // Requirement on page-loading
            document
                .querySelector('button')
                .addEventListener('click', this.handleClick.bind(this) )
        }

        handleClick(){
            console.log("Button Clicked");
            console.log(this);
            console.log(this.server); 
            
        }
    }

    const app = new React()
</script>
</html>

```

```javascript
In JavaScript, the `bind()` method is a powerful tool for working with function contexts and arguments. It is used to create a new function that, when called, has its `this` keyword set to a specific value and can optionally be pre-filled with arguments.

### Syntax

```javascript
func.bind(thisArg[, arg1[, arg2[, ...]]])
```

- **`func`**: The function you want to bind.
- **`thisArg`**: The value to which `this` should be set when the new function is called.
- **`arg1, arg2, ...`**: Optional arguments that will be pre-filled when the new function is called.

### Key Points

1. **Creating a Bound Function**: `bind()` creates a new function with the specified `this` value and initial arguments.

2. **Preserving `this` Context**: It ensures that `this` inside the bound function refers to the provided `thisArg`, regardless of how the function is called.

3. **Partial Application**: You can also pre-set some arguments, which allows you to create functions with some parameters fixed.

### Examples

#### 1. Basic Usage

```javascript
const person = {
    name: 'Alice',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const greetFunction = person.greet;
greetFunction(); // Output: Hello, my name is undefined

const boundGreetFunction = person.greet.bind(person);
boundGreetFunction(); // Output: Hello, my name is Alice
```

In this example, `person.greet.bind(person)` creates a new function `boundGreetFunction` where `this` is always set to `person`.

#### 2. Partial Application

```javascript
function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5)); // Output: 10
```

Here, `multiply.bind(null, 2)` creates a new function `double` where the first argument (`a`) is pre-set to `2`. When you call `double(5)`, it effectively computes `2 * 5`.

#### 3. Using `bind()` with Event Handlers

```javascript
class Counter {
    constructor() {
        this.count = 0;
        this.increment = this.increment.bind(this); // Binding `this`
    }

    increment() {
        this.count++;
        console.log(this.count);
    }

    start() {
        setInterval(this.increment, 1000); // `this` inside `increment` is correctly bound
    }
}

const counter = new Counter();
counter.start();
```

In this example, `this.increment.bind(this)` ensures that the `increment` method retains the correct context (`this` referring to the `Counter` instance) when it’s used inside `setInterval`.

### Summary

- **Creating Bound Functions**: Use `bind()` to create a new function with a specific `this` value and optional preset arguments.
- **Context Control**: It helps manage and maintain the correct `this` context, particularly useful in callbacks or asynchronous operations.
- **Partial Function Application**: You can also create functions with some arguments fixed in advance.

The `bind()` method is useful in various scenarios, especially when dealing with asynchronous code, event handling, or function arguments that need to be pre-set.
```