---
layout: "@layouts/Blog.astro"
title: Cleanpedia
Last updated: May 13th, 2023

Revisions: 2
Data of last revision: 12 APR 2023
---

## Contents

## CHAPTER I: Functions

### 1.1 Defining a Function

A function definition consists of, at least, one implementation.

```
// Language: Clean

isNatural :: Int -> Bool
isNatural    n   =  n > 0
```

If a function has multiple implementations, each implementation must share the the same identifier.

```
// Language: Clean

fib :: Int -> Int
fib    1   =  1                          // 1st implementation
fib    2   =  1                          // 2nd  
fib    n   =  fib (n - 1) + fib (n - 2)  // 3rd
```

It is required that the Implementations of a function are textually grouped together.
As such, the following is not allowed.


```
// Language: Clean

fib :: Int -> Int
fib    1   =  1

// ...some code

fib    2   =  1
```

Implementations are tried in textual order.
An implementation will be chosen for evaluation, if the arguments of a function call matched with the parameters.

For example:

```
// Language: Clean

fib 2
```

When invoked with $2$, the first implementation is tried, but the argument ($2$) fails to match with the parameter ($1$).
Therefore, the first implementation is not evaluated.

Next, the second implementation is tried.
The argument matches with the parameter.
Thus, the second implementation is evaluated.

In this call, the third implementation is never reached.

```
// Language: Clean

fib 9
```

Similarly, if it is invoked with $9$, the first and second implementation are tried, but the third is evaluated.

Following this logic, if the implementation order is changed, then the function would cease to work.

```
// Language: Clean

fib :: Int -> Int
fib    n   =  fib (n - 1) + fib (n - 2)  // 3rd
fib    1   =  1                          // 1st
fib    2   =  2                          // 2nd
```

Since $n$ will match with any integer, any implementation following it is never reached.

It is important to recognize that, this parameter-matching behavior is not the same as performing equality checks.

**Guarded bodies**

A guarded body belongs to an implementation of a function.
It allows an implementation to have multiple function bodies, instead of just one.

```
// Language: Clean

fib :: Int -> Int
fib    n
| n == 1   =  1                          // 1st guarded body
| n == 2   =  1                          // 2nd
| n >  2   =  fib (n - 1) + fib (n - 2)  // 3rd
```

The function above has one implementation, but three guarded bodies.
The guards are tried in textual order, but only after their implementation is chosen for evaluration.

For a guarded body to be evaluated, its guard must evaluates to $\textbf{True}$.

Alternatively, $\textbf{otherwise}$ keyword can be used instead of an expression.
Its value is always $\textbf{True}$.

```
// Language: Clean

fib :: Int  -> Int
fib    n
| n == 1    =  1                          // 1st guarded body
| n == 2    =  1                          // 2nd
| otherwise =  fib (n - 1) + fib (n - 2)  // 3rd
```

As such, the guard order also matters.

```
// Language: Clean

fib :: Int  -> Int
fib    n
| otherwise =  fib (n - 1) + fib (n - 2)  // 3rd
| n == 1    =  1                          // 1st
| n == 2    =  1                          // 2nd
```

It is important to recognize that, guarded bodies without $\textbf{otherwise}$ can turn an implementation into a partial function. 

When a partial function is invoked outside the domain it will result into a run-time error.
At compile time this cannot be detected.

```
// Language: Clean

fib :: Int -> Int
fib    n
| n == 1   =  1                          
| n == 2   =  1                         
| n >  2   =  fib (n - 1) + fib (n - 2)
```

The implementation above is a partial function.
It results in a run-time error if it is invoked with $n\le{0}$.

Additionally, guards can be nested. 

```
// Language: Clean

func :: T K       -> V
func    A B
| conditionX
	| conditionXA =  ...
	| conditionXB =  ...
	| otherwise   =  ...
| conditionY      =  ...
```

To ensure that at least one of a nested guard will be successful, it must always use $\textbf{otherwise}$.

### 1.2 Operators

Operators are arity-two functions.
They can be applied in infix position or invoked like ordinary functions.

```
// Language: Clean

1 + 1   // applied as an operator
```

To invoke an operator as an ordinary function, the operator name must be placed inside parentheses, and in front of its argument.

```
// Language: Clean

(+) 1 1 // invoked as an ordinary function
```

When applied in an infix position, both arguments must be given.
Operators can be curried, but only when they are invoked as ordinary functions.

**Operator precedence**

The precedence determines how tightly an operator binds to its argument.
Precedence can be between zero and nine with higher number having higher precedence.

The precedence of an operator is nine by default.

**Operator fixity**

The fixity is important when evaluating two operators of the same precedence.
There are two relevant fixities:
- $\textbf{infixl}$ for left-associated operators, and
- $\textbf{infixr}$ for right-associated operators.

The fixity is left-associated by default.

**Defining an operator**

An operator can be defined by placing its name between parentheses.
It can be treated as if it was an ordinary function.

```
// Language: Clean

(->) infixr 9 :: Bool Bool  -> Bool
(->)             True False =  False
(->)             _    _     =  True
```

Definition with omitted fixity and precedence  can be done as follow:

```
// Language: Clean

(<=>) :: Bool Bool -> Bool
(<=>)    x    y    =  x == y
```

**Conflict between operators**

It is not allowed to apply operators with equal precedence in an expression in such a way that their fixity conflict. 

```
// Language: Clean

True -> False <=> False
```

In this case, $\rightarrow$ operator is a right-associated.
It implies that the expression should be evaluated as

```
// Langauge: Clean

True -> (False <=> False)
```

But $\iff$ operator is left associated.
It implies that the expression should be evaluated as

```
// Langauge: Clean

(True -> False) <=> False
```

Since both operators have the same precedence and the order of evaluation cannot be decided by their fixity, this expression will result in a compile-time error.

### 1.3 Lambda Functions

A lambda function is defined which can have several formal arguments that can be patterns as common in ordinary function definitions.
However, it cannot have local definitions or guards.

A simple lambda function can be defined as follows.

```
// Language: Clean

\x = x + 2
```

A lambda function can have multiple parameters.
Parameters are separated by spaces.

```
// Language: Clean

\x y z = x * (y + z)
```

Alternatively, $\rightarrow$ can be used to separated parameters from function body.

```
// Language: Clean

\x     -> x + 2
\x y z -> x * (y + z)
```

### 1.4 Case Expressions

In a case expression, cases are tried in textual order.
Each case contains a pattern and a case body.

```
// Language: Clean

case expr of
patternA  =  bodyA
...
patternZ  =  bodyZ
```

Cases are similar to function implementations.
This is because a case expression is internally translated to a function definition. 

Consequently, this can result in a run-time error when none of pattern matches since the expression is translated into a partial function.

```
// Language: Clean

case 3 of
1    = ...
2    = ...
```

When a pattern matches the corresponding case, it will be chosen for evaluation 

Guards can be used in case expressions as well, which allows each case to have more than one case body.

```
// Language: Clean

case n of
1            = ...
2            = ...
n
| conditionX = ...
| conditionY = ...
| otherwise  = ...
```

Alternatively, $\rightarrow$ can be used to separate case pattern from case body.

```
// Language: Clean

case n of
1            -> ...
2            -> ...
n
| conditionX -> ...
| conditionY -> ...
| otherwise  -> ...
```

### 1.5 Pattern-Match Expressions

A pattern-match expression is useful when dealing with algebraic types and algebraic constructors.

```
// Language: Clean

expr := pattern
```

Internally, it is compiled down to a $\textbf{case}$ expression.

It checks an expression against a pattern, which either yield $\textbf{True}$ or $\textbf{False}$.

```
:: T = X Int | Y Int Int | Z

isXorY T -> Bool
isXorY a =  a =: (X _) || a =: (Y _ _)
```

### 1.5 Local Definitions

#### 1.5.1 Let Expressions

A $\textbf{let}..\textbf{in}$ expression introduces a new scope inside an expression.

```
// Language: Clean

let
	localX  = ...
	localY = ...
in expr
```

Anything defined inside a $\textbf{let}..\textbf{in}$ expression only has meaning in $\text{expr}$.

```
// Language: Clean

[let a = i * i in (a, a) \\ i <- [0..n]]
```

#### 1.5.2 Where Blocks

A $\textbf{where}$ block can be placed at the end of a function implementation which introduces a new scope.

```
// Language: Clean

absolute :: Int -> Int
absolute    n
| n == 0        =  0
| n <  0        =  negN
| otherwise     =  n
where
	negN :: Int
	negN =  n * (-1)
```

This scope only has meaning in its corresponding implementation.

```
// Language: Clean

absolute :: Int -> Int
absolute    0   =  z
where
	z :: Int
	z =  0
absolute    n
| n <  0        =  negN
| otherwise     =  n
where
	negN :: Int
	negN =  n * (-1)
```

The second implementation does not have access to $\text{z}$ which is defined in the first implementation.

In addition, $\textbf{where}$ blocks can be nested.

```
// Language: Clean

primes :: [Int]  
primes =  sieve [2..]  
where 
    sieve :: [Int]  -> [Int]
    sieve    [pr:r] =  [pr:sieve (f pr r)]  
    where
        f :: Int [Int]  -> [Int]
        f    pr  [n:r]  
        | n mod pr == 0 =  f pr r  
        | otherwise     =  [n:f pr r]
```

In the function shown above, $\text{f}$ function is local to $\text{sieve}$ and $\text{sieve}$ function is local to $\text{primes}$.


#### 1.5.3 With Blocks

A $\textbf{with}$ block can be placed at the end of a guard which introduces a new scope.

```
// Language: Clean

absolute :: Int -> Int
absolute    n
| n == 0        =  0
| n <  0        =  negN
with
	negN :: Int
	negN =  n * (-1)
| otherwise     =  n
```
The scope only has meaning in its corresponding guard.

The $\textbf{otherwise}$ guard does not have access to $\text{negN}$.

[Back to top](#)

---

## Chapter II: Built-In Types

Certain types like integers, Booleans, characters, real numbers, lists, tuples and arrays are  frequently used that they have been predefined for reasons of efficiency and convenience.

### 2.1 Primitive Types

#### 2.1.1 Integer Type

**Type annotation**: $\textbf{Int}$

**Constructors**

From decimal notation:

```
// Language: Clean

n ::  Int
n =: -13
n =:  0
n =:  13
```

From octal notation by prefixing octal digits with $\textbf{0}$:

```
// Language: Clean

n ::  Int
n =: -015  // dec -13
n =:  0
n =:  015  // dec  13
```

From hexadecimal notation by prefixing hexadecimal digits with $\textbf{0x}$:

```
// Language: Clean

n ::  Int
n =: -0xD  // dec -13
n =:  0
n =:  0xd  // dec  13
```

More information about built-in operations and functions on integers can be found on [Appendix A: StdInt](./appendix-a/stdint).

#### 2.1.2 Real Number Type

**Type annotation**: $\textbf{Real}$

**Constructors**

From decimal notation:

```
// Language: Clean

n ::  Real
n =: -1.3
n =:  0.0
n =:  1.3
```

From scientific notation by prefixing hexadecimal digits with $\textbf{0x}$:

```
// Language: Clean

n ::  Int
n =: -13E-2  // -0.13
n =:  0E0    //  0
n =:  13E-2  //  0.13
```

More information about built-in operations and functions on integers can be found on [Appendix A: StdReal](./appendix-a/stdreal).