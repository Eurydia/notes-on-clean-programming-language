# Real Number Type

## Real Number Literals

A real number literal can be constructed with decimal notation or scientific notation.

Real number literals constructed with decimal notation can be written as follows.

```
// Language: Clean

-1.3
 0.0
 1.3
```

Real number literals constructed with scientific notation can be written as follows.

```
// Language: Clean

-13E-2  // -0.13
 0E0    //  0
 13E-2  //  0.13
```

Only uppercase "E" maybe used in scientific notations.
The expression results in a compile-time error if a lowercase "e" is used.

```Clean
// Language: Clean

13e-2  // Uh-oh
```

Real number literals can be used as a **pattern**.

See [[_content/Functions/Pattern Matching/Pattern Matching Integers|Pattern Matching Integers]] for additional examples.

## Typing Real Number Expressions

An expression, which resolves to real number type, can be explicitly typed using `Real`.

```Clean
// Language: Clean

expr :: Real
expr =  1.0 + 1.0
```

## Built-In Functions on Real Number Type

Functions, which operate on real number type, are defined in `StdReal` module, which is a part of the Standard Environment.

See [[_content/Appendix A/StdReal|StdReal]] for additional details.