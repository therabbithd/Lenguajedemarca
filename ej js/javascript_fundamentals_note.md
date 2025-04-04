# JavaScript Fundamentals - Core Concepts

This project demonstrates fundamental JavaScript concepts, covering variables, control flow, functions, array manipulation, DOM interaction, and debugging techniques.

## Table of Contents

1. [ ]  [Correct Use of Variables (let, const, var)](#1-correct-use-of-variables-let-const-var)
2. [ ]  [How to Use Comments](#2-how-to-use-comments)
3. [ ]  [If Statement Uses](#3-if-statement-uses)
4. [ ]  [Use of Loops (for)](#4-use-of-loops-for)
5. [ ]  [Switch Case Use](#5-switch-case-use)
6. [ ]  [Definition and Correct Use of Functions](#6-definition-and-correct-use-of-functions)
7. [ ]  [Array Iteration Using Different Methods](#7-array-iteration-using-different-methods)
8. [ ]  [Use of document.getElementById(), querySelector(), getElementsByClassName()](#8-use-of-documentgetelementbyid-queryselector-getelementsbyclassname)
9. [ ]  [DOM Edition (element.innerHTML, element.style)](#9-dom-edition-elementinnerhtml-elementstyle)
10. [ ] [Use of Console Methods (console.log(), console.error(), console.warn())](#10-use-of-console-methods-consolelog-consoleerror-consolewarn)
11. [ ] [Use of the Browser DevTools Inspect](#11-use-of-the-browser-devtools-inspect)

## Concepts Explained

### 1. Correct Use of Variables (let, const, var)

- **`var`**:
  - Older way of declaring variables.
  - Function-scoped.
  - Can be re-declared and updated.
- **`let`**:
  - Block-scoped.
  - Can be updated but not re-declared.
- **`const`**:
  - Block-scoped.
  - Cannot be updated or re-declared.
  - Used for constants (values that should not change).

**Example:**

```javascript
var varVariable = "I'm a var";
let letVariable = "I'm a let";
const constVariable = "I'm a const";

letVariable = "I've been updated!"; // Allowed
// constVariable = "Trying to change a const"; // Error!
```

### 2. How to Use Comments

- **Single-line comments**: Use `//` to comment out a single line.
- **Multi-line comments**: Use `/*` to start and `*/` to end a multi-line comment block.

**Example:**

```javascript
// This is a single-line comment.

/*
  This is a
  multi-line
  comment.
*/
```

### 3. If Statement Uses

- `if` statement checks a condition.
- `else if` provides additional conditions.
- `else` provides a default action if no other conditions are met.

**Example:**

```javascript
let age = 20;

if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior.");
}
```

### 4. Use of Loops (for)

- `for` loop is used to iterate over a block of code a specified number of times.
- Consists of an initialization, a condition, and an increment/decrement.

**Example:**

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Iteration number: " + i);
}
```

### 5. Switch Case Use

- `switch` statement is used to perform different actions based on different conditions.
- `case` defines a specific condition.
- `break` exits the switch statement.
- `default` is executed if no other case matches.

**Example:**

```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("It's almost the weekend!");
    break;
  default:
    console.log("It's a regular day.");
}
```

### 6. Definition and Correct Use of Functions

- Functions are blocks of reusable code.
- Defined using the `function` keyword or arrow function syntax.
- Can accept parameters and return values.

**Example:**

```javascript
// Function declaration
function add(a, b) {
  return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;

console.log(add(5, 3)); // Output: 8
console.log(multiply(4, 2)); // Output: 8
```

### 7. Array Iteration Using Different Methods

- `for` loop: Traditional way to iterate over arrays.
- `forEach()`: Executes a provided function once for each array element.
- `map()`: Creates a new array with the results of calling a provided function on every element.
- `filter()`: Creates a new array with all elements that pass a test.

**Example:**

```javascript
let numbers = [1, 2, 3, 4, 5];

// for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// forEach
numbers.forEach((number) => console.log(number));

// map
let doubled = numbers.map((number) => number * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// filter
let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

### 8. Use of document.getElementById(), querySelector(), getElementsByClassName()

- `document.getElementById()`: Selects an element by its unique ID.
- `document.querySelector()`: Selects the first element that matches a CSS selector.
- `document.getElementsByClassName()`: Selects all elements with a specific class name (returns an HTMLCollection).

**Example:**

```javascript
let myDiv = document.getElementById("myDiv");
let firstMyClass = document.querySelector(".myClass");
let allMyClasses = document.getElementsByClassName("myClass");
```

### 9. DOM Edition (element.innerHTML, element.style, element.textContent)

- `element.innerHTML`: Gets or sets the HTML content within an element.
- `element.style`: Allows you to modify the inline CSS styles of an element.
- `element.textContent`: Gets or sets the Text content

**Example:**

```javascript
let myDiv = document.getElementById("myDiv");

myDiv.innerHTML = "<p>New Text Content</p>";
myDiv.textContent = "New Text Content";
myDiv.style.color = "blue";
myDiv.style.backgroundColor = "lightgray";
```

### 10. Use of Console Methods (console.log(), console.error(), console.warn())

**Example:**

```javascript
console.log("This is a log message.");
console.error("This is an error message.");
console.warn("This is a warning message.");
```

### 11. Use of the Browser DevTools Inspect

- Inspect Element
- Console
- Debugger
- Network
- Performance

**How to use:**

- Right-click on a webpage and select "Inspect" or "Inspect Element."
- Use `Ctrl+Shift+I` (Windows) or `Cmd+Option+I` (Mac).
- Press `F12`.
