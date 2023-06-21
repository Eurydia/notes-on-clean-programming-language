---
dg-publish: true
---

# Functions

## Defining a Function

A simple function consists of one function implementation.

See [[functions/Implementing a Function|Implementing a Function]].

Optionally, a function definition can be explicitly typed to increase readability.

See [[functions/Typing a Function|Typing a Function]].

---

## Calling a Function

A function call can be made by placing a function name in front of a sequence of space-separated arguments.
A function call does not require parentheses.

To better demonstrate, let's define an arity-one function called `exampleA` and an arity-two function called `exampleB`.
The body of each function does not matter.

```Clean
// Language: Clean

exampleA param = ...

exampleB paramA paramB = ...
```

To call `exampleA`, place its name in front of an argument.

```Clean
// Language: Clean

exampleA arg
```

To call `exampleB`, place its name in front of a sequence of space-separated arguments.

```Clean
// Language: Clean

exampleB argA argB
```


### Currying a Function

Functions with multiple parameters can be curried.

Currying transforms a function, which takes multiple arguments, into an a series of intermediate functions.
Each intermediate function takes a single argument and returns another intermediate function, which takes further arguments.
Eventually, the original function receives the rest of its arguments and evaluates.

To demonstrate, let's define an arity-three function called `exampleC`.
The body of the function does not matter.

```Clean
// Language: Clean

exampleC paramA paramB paramC = ...
```

Normally, it requires three arguments to call `exampleC`.

```Clean
// Language: Clean

exampleC argA argB argC
```

With currying `exampleC` can be called with fewer arguments than required.

```Clean
// Language: Clean

exampleC argA
```

Internally, the compiler generates intermediate functions as discussed earlier.

```Clean
// Language: Clean

__intermediateA argA = __intermediateB
where
    __intermediateB argB = __intermediateC
    where
        __intermediateC argC = exampleC argA argB argC
```

The function call is equivalent to the second step.

```Clean
// Language: Clean

exampleC argA  // __intermediateB
```

In other word, `exampleC` is composed of three indirect function calls, instead of one direct call.

```Clean
// Language: Clean

(((__intermediateA argA) argB) argC)
```

> [!note]
> The arguments are always given from left to right.

---

## Constants

---

## Operators

---