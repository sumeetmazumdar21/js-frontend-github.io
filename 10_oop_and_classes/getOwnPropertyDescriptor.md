The `Object.getOwnPropertyDescriptor()` method in JavaScript is used to retrieve the descriptor of a specific property from an object. This method returns an object that describes the property attributes such as its value, writability, enumerability, and configurability.

### Syntax

```javascript
Object.getOwnPropertyDescriptor(obj, prop)
```

- **`obj`**: The object from which to retrieve the property descriptor.
- **`prop`**: The name (or symbol) of the property whose descriptor you want to retrieve.

### Property Descriptor Object

The object returned by `Object.getOwnPropertyDescriptor()` contains the following attributes:

- **`value`**: The value associated with the property. It is used for data properties.
- **`writable`**: A boolean indicating whether the property value can be changed (`true`) or not (`false`).
- **`enumerable`**: A boolean indicating whether the property can be enumerated in a `for...in` loop or `Object.keys()` (`true`) or not (`false`).
- **`configurable`**: A boolean indicating whether the property descriptor can be changed and if the property can be deleted (`true`) or not (`false`).
- **`get`**: A function that returns the value of the property when accessed. This is used for accessor properties.
- **`set`**: A function that sets the value of the property when assigned. This is used for accessor properties.

### Examples

#### 1. Data Property Descriptor

```javascript
const obj = {
    name: 'Alice',
    age: 30
};

const descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(descriptor);
/* Output:
{
    value: 'Alice',
    writable: true,
    enumerable: true,
    configurable: true
}
*/
```

In this example, the `descriptor` object shows that the `name` property has a value of `'Alice'` and is writable, enumerable, and configurable.

#### 2. Accessor Property Descriptor

```javascript
const person = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(' ');
    }
};

const descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);
/* Output:
{
    get: [Function: get fullName],
    set: [Function: set fullName],
    enumerable: true,
    configurable: true
}
*/
```

In this example, `fullName` is an accessor property, so the descriptor contains `get` and `set` functions.

#### 3. Non-Enumerable Property

```javascript
const obj = {};

Object.defineProperty(obj, 'hidden', {
    value: 'secret',
    enumerable: false
});

const descriptor = Object.getOwnPropertyDescriptor(obj, 'hidden');
console.log(descriptor);
/* Output:
{
    value: 'secret',
    writable: false,
    enumerable: false,
    configurable: false
}
*/
```

Here, `hidden` is a non-enumerable property, and the descriptor reflects that.

### Usage

- **Inspect Property Attributes**: Use `Object.getOwnPropertyDescriptor()` to check the attributes of a property, which can help in debugging or managing object properties.
- **Dynamic Property Management**: It can be useful when creating or modifying properties dynamically and you need to verify their attributes.

### Summary

`Object.getOwnPropertyDescriptor()` provides detailed information about a property’s attributes on an object, including its value, writability, enumerability, and configurability. It’s a valuable tool for working with properties and understanding or modifying their behavior in JavaScript.