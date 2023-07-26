# Calling-operators
```
// Language: Clean

1 + 1  // applied as an operator
```

To invoke an operator as an ordinary function, the operator name must be placed inside parentheses, and in front of its arguments.

```
// Language: Clean

(+) 1 1  // invoked as an ordinary function
```

When applied in infix position, both arguments must be given.
Operators can be curried, but only when they are invoked as ordinary functions.