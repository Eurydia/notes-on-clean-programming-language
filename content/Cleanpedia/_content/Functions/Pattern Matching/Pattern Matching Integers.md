# Pattern Matching Integers

There are three constructors for integer literals.


```Clean
// Language: Clean

qMul :: Int Int -> Int
qMul    1   rhs =  rhs
qMul    lhs 1   =  lhs
qMul    lhs rhs =  lhs * rhs
```

Alternatively, octal notation and hexadecimal notation can be used instead of decimal notation.

```Clean
// Language: Clean

qMul :: Int Int -> Int
qMul    01  rhs =  rhs
qMul    lhs 01  =  lhs
qMul    lhs rhs =  lhs * rhs
```

Integer literal constructors can freely mix since they represent the same numerical value.
