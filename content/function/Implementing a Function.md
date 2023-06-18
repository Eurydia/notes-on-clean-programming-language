---
title: "Implementing a Function"
last revision: 18 JUNE 2023
---

As function definitions consist function implementations, let's discuss what a function implementation looks like.

## Control Forms of a Function Implementation

A control form of a function implementation with one parameter is written as follows.

```
// Language: Clean
 
name param = expr
```



A control form of a function implementation with two parameters is written as follows.

```
// Language: Clean

name paramA paramB = expr
```

That is parameters are space-separated.

---

## Example

### `negate`

`negate` accepts one integer as argument, and returns the negated value.

This function can be defined with one implementation.

```
// Language: Clean

negate x = x * (-1)
```

### `pow`

`pow` accepts two integer as arguments, and returns the first argument raise to the power of the second.

This function can be defined with one implementation as well.

```
// Language: Clean

pow a b = a ^ b
```

### `fib`

`fib` accepts one integer as argument, and returns the Fibonacci number at the given position.

This function can be defined with three implementations.

```
// Language: Clean

fib 1 = 1
fib 2 = 1
fib n = (fib (n - 1)) + (fib (n - 2))
```

---

## Related Pages

- [Implementation Rules](function/Implementation%20Rules.md)
- [Guarded Expressions](function/Guarded%20Expressions.md)

