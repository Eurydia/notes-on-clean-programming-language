---
dg-publish: true
---

# Integer Type

## Integer Literals

There are three constructors for integer literals. 
Namely, an integer literal can be constructed from decimal notation, octal notation, and hexadecimal notation.

Integer literals constructed with decimal notation may be written as follows.

```Clean
// Language: Clean

-13
 0
 13
```

Integer literals constructed with octal notation may be written by prefixing octal digits with `0`.

```Clean
// Language: Clean

-015  // decimal -13
 0
 015  // decimal  13
```

Integers literals constructed with hexadecimal notation may be written by prefixing hexadecimal digits with `0x`.

```Clean
// Language: Clean

-0xD  // decimal -13
 0
 0xd  // decimal  13
```

## Typing Integer Expressions

An expression, which resolves to integer type, may be explicitly typed using `Int`.

```Clean
// Language: Clean

expr :: Int
expr =  1 + 1
```

## Pattern Matching Integers

Constructors mentioned above can be used as a pattern.

```Clean
// Language: Clean

quickMul :: Int Int -> Int
quickMul    1   rhs =  rhs
quickMul    lhs 1   =  lhs
qucikMul    lhs rhs =  lhs * rhs
```

Alternatively, octal notation and hexadecimal notation can be used instead of decimal notation.

```Clean
// Language: Clean

quickMul :: Int Int -> Int
quickMul    01  rhs =  rhs
quickMul    lhs 0x1 =  lhs
qucikMul    lhs rhs =  lhs * rhs
```

Constructors can mix since they represent the same numerical value.

## Built-In Functions on Integer Type

Integer operations and functions are discussed in more details on [Appendix A: StdInt](appendix-a/stdint).