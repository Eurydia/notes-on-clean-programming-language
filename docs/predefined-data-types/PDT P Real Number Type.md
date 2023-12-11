---
dg-publish: true
---

# Real Number Type

Real numbers are represented by 64 bits values.

For built-in functions and operations on real number type, see [[stdreal]] module.

## Real Number Type Declaration

Real number type is explicitly declared with `Real`.

```Clean
// Language: Clean

expr :: Real
expr =  1.0 + 1.0
```

## Real Number Literals

They can be constructed from decimal notation.

```Clean
// Language: Clean

x :: Real
x = -1.3
x =  0.0
x =  1.3
```

And they can be constructed from scientific notation.

```Clean
// Language: Clean

x :: Real
x = -1.3E-2  // -0.13
x =  0E1     //  0
x =  1.3E-2  //  0.13
```

Only upper case "E" can be used in scientific notations.
The expression results in a compile-time error if lower case "e" is used.

```Clean
// Language: Clean

y :: Real
y =  13e-2  // compile-time error
```

%%
## Using Real Number Literal as Pattern

Example A:

```Clean
// Language: Clean

exampleA :: Real -> Bool
exampleA    1.0  =  True
exampleA    _    =  False
```

The `exampleA` function returns `True` when it is called with 1.
Otherwise, it returns `False`.

It has many equivalent variants.

One variant is obtained by using scientific notation instead of decimal notation.

```Clean
// Language: Clean

isUnit :: Real -> Bool
isUnit    1E1  =  True
isUnit    _    =  False
```

Example B:

```Clean
// Language: Clean

exampleB :: Real Real -> Real
exampleB    x    0.0  =  x
exampleB    0.0  y    =  y
exampleB    x    y    =  x + y
```

The `exampleB` function performs real number addition.
If one of its argument is 0, it returns the other argument.

It has many equivalent variants.

One variant is obtained by using scientific notation instead of decimal notation.

```Clean
// Language: Clean

exampleB :: Real Real -> Real
exampleB    x    1E1  =  x
exampleB    1E1  y    =  y
exampleB    x    y    =  x + y
```

A variant can be obtained by mixing decimal notation and scientific notation.

```Clean
// Language: Clean

exampleB :: Real Real -> Real
exampleB    x    0.0  =  x
exampleB    1E1  y    =  y
exampleB    x    y    =  x + y
```
%%