---
layout: "@layouts/Blog.astro"
title: Cleanpedia
Last updated: May 13th, 2023

Revisions: 2
Data of last revision: 12 APR 2023
---

## Contents

## CHAPTER I: Functions

### 1.1 Defining A Function

An implementation of a function has the following syntax.

```
// Language: Clean

[fnName] [fnParams] =  [fnBody]
[fnName] [fnParams] => [fnBody]
```

A function definition consists of, at least, one implementation.

```
// Language: Clean

isNatural :: Int -> Bool
isNatural    n   =  n > 0
```

If a function has multiple implementations, each implementation must share the the same name.

```
// Language: Clean

fib :: Int -> Int
fib    1   =  1
fib    2   =  1  
fib    n   =  fib (n - 1) + fib (n - 2)
```

It is required that implementations of a function are textually grouped together.
As such, the following is not allowed.

```
// Language: Clean

fib :: Int -> Int
fib    1   =  1

// ...some code

fib    2   =  1
```

Implementations are tried in textual order.
An implementation will be chosen, if the arguments of a function call matched with the parameters.

For example:

When invoked with $2$, the first implementation is tried.

```
// Language: Clean

fib 2
```

The argument ($2$) fails to match with the parameter ($1$).
Therefore, the first implementation is not evaluated.

The second implementation is tried.
The argument matches with the parameter.
Thus, the second implementation is evaluated.

In this call, the third implementation is never reached.

Similarly, if it is invoked with $9$, the first and second implementation are tried, but the third is evaluated.

```
// Language: Clean

fib 9
```

Following this logic, if the implementation order is changed, then the function would behave unintentionally.

```
// Language: Clean

fib :: Int -> Int
fib    n   =  fib (n - 1) + fib (n - 2)  // 3rd
fib    1   =  1                          // 1st
fib    2   =  2                          // 2nd
```

In this case, $n$ will match with any integer, any implementation following it is never reached.

It is important to recognize that, this parameter-matching behavior is not the same as performing equality checks.

**Guarded bodies**

A guarded body can be introduce to an implementation of a function.
It allows an implementation to have multiple function bodies, instead of just one.

It has the following syntax.

```
// Language: Clean

[fnName] [fnParams]
| [guardA]         = [bodyA]
| [guardB]         = [bodyB]
| [guardC]         = [bodyC]
```

Additionally, guarded bodies can be nested. 

```
// Language: Clean

[fnName] [fnParams]
| [guardA]
    | [guardAA]    = [bodyAA]
    | [guardAB]    = [bodyAB]
| [guardB]         = [bodyB]
| [guardC]         = [bodyC]
```

A guard is a Boolean expression.

```
// Language: Clean

signum :: Int -> Int
signum    0   =  0
signum    n
| n > 0       =  1
| n < 0       = -1
```

Guards are tried in textual order, but only after their implementation is chosen.

For example:

When called with $0$, the first implementation is tried.

```
// Language: Clean

signum 0
```

The argument and parameter match.
Thus, the body of the first implementation is evaluated.

In this call, none of the guards were tried, since the implementation that they belong to was not chosen.

Instead, if it is called with a non-zero integer, the first implementation will fail to match.

```
// Language: Clean

signum -9
```

In this case, the first guard ($n\gt{0}$) is tried.
It evaluates to $\textbf{False}$.
Its body is not evaluated.

The second guard is tried ($n\lt{0}$).
It evaluates to $\textbf{True}$.
Therefore, the body of the second guard is evaluated.

Alternatively, $\textbf{otherwise}$ keyword can be used instead of an expression.
Its value is always $\textbf{True}$.

```
// Language: Clean

signum :: Int -> Int
signum    0   =  0
signum    n
| n > 0       =  1
| otherwise   = -1
```

As such, order of the guarded bodies also matters.

```
// Language: Clean


signum :: Int -> Int
signum    0   =  0
signum    n
| otherwise   = -1
| n > 0       =  1
```

**Partial functions**

It is important to recognize that, an implementation with guarded bodies can be partial.

Such implementations will result in a run-time error when invoked outside its domain.

```
// Language: Clean

fib :: Int -> Int
fib    n
| n == 1   =  1                          
| n == 2   =  1                         
| n >  2   =  fib (n - 1) + fib (n - 2)
```

The function above is partial.
It results in a run-time error when invoked any integer less than one.

This partial behavior extends to a function definition as well.

```
// Language: Clean

fib :: Int -> Int
fib    1   =  1
fib    2   =  1
fib    n   =  fib (n - 1) + fib (n - 2)
```

This version also results in run-time error when invoked with $n\le{0}$, even though it does not have guarded bodies.

### 1.2 Operators

Operators are arity-two functions.
They can be applied in infix position or invoked like ordinary functions.

```
// Language: Clean

1 + 1  // applied as an operator
```

To invoke an operator as an ordinary function, the operator name must be placed inside parentheses, and in front of its argument.

```
// Language: Clean

(+) 1 1  // invoked as an ordinary function
```

When applied in infix position, both arguments must be given.
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
It can be implemented as if it was an ordinary function.

```
// Language: Clean

([fnName]) [fnParamL] [fnParamR] =  [fnBody]
([fnName]) [fnParamL] [fnParamR] => [fnBody]
```

Precedence and fixity of an operator can be defined in its type declaration, but they can be omitted.

```
// Language: Clean

(->) infixr 9 :: Bool Bool  -> Bool
(->)             True False =  False
(->)             _    _     =  True
```

Definition with omitted fixity and precedence can be done as follow:

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

The $\rightarrow$ operator is a right-associated.
It implies that the expression should be evaluated as follows.

```
// Langauge: Clean

True -> (False <=> False)
```

However, the $\iff$ operator is left associated.
It implies that the expression should be evaluated as follows.

```
// Langauge: Clean

(True -> False) <=> False
```

Since both operators have the same precedence and the order of evaluation cannot be decided by their fixity, this expression will result in a compile-time error.

### 1.3 Lambda Functions

A lambda function is defined "on the spot" as an expression.
However, it cannot have local definitions or guards.

A lambda function has following syntax.

```
// Language: Clean

\[fnParam] =  [fnBody]
\[fnParam] -> [fnBody]
```

Parameters of a lambda function are separated by spaces.

```
// Language: Clean

\paramA        = ...
\paramA paramB = ...
```

### 1.4 Case Expressions

In a $\textbf{case..in}$ expression, cases are tried in textual order.
Each case contains a pattern and a case body.

```
// Language: Clean

case [expr] of
[casePatternA] =  [caseBodyA]
[casePatternB] =  [caseBodyB]
[casePatternC] =  [caseBodyC]

case [expr] of
[casePatternX] -> [caseBodyX]
[casePatternY] -> [caseBodyY]
[casePatternZ] -> [caseBodyZ]
```

Guards can be introduce to a case which allows a case to have multiple guarded bodies.

```
// Language: Clean

case [expr] of
[patternA]
| [guardA] = [bodyAA]
| [guardB] = [bodyAB]
| [guardC] = [bodyAC]
[patternB] = [bodyB]
```

Internally, a $\textbf{case..in}$ expression is translated to a function definition.
The cases are transformed into an implementation.

```
// Langauge: Clean

_caseFn [casePatternA] = [caseBodyA]
_caseFn [casePatternB] = [caseBodyB]
_caseFn [casePatternC] = [caseBodyC]
```

Consequently, this can result in a run-time error when none of pattern matches since the expression is translated into a partial function.

### 1.5 Pattern-Match Expressions

A pattern-match expression checks an expression against a pattern or not.

```
// Language: Clean

[expr] := [pattern]
```

Internally, it compiles down to a $\textbf{case..of}$ expression.
It yields $\textbf{True}$ or $\textbf{False}$ similar to an equality check.

```
// Language: Clean

case [expr] of
[pattern] = True
_         = False

```

It is useful when dealing with algebraic types.

```
// Language: Clean

:: Tree a = Node a (Tree a) (Tree a)
          | Leaf

isLeaf :: (Tree a) -> Bool
isLeaf    t        =  t := (Leaf)

isNode :: (Tree a) -> Bool
isNode    t        =  t := (Tree x l r)
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

[let 
    a = i * i 
in (a, a) \\ i <- [0..n]]
```

#### 1.5.2 Where Blocks

A $\textbf{where}$ block can be added at the end of a function implementation which introduces a new scope.

```
// Language: Clean

[fnName] [fnParam]
| [guardA] = [bodyA]
| [guardB] = [bodyB]
| [guardC] = [bodyC]
where
	localX = [expr]
```

For example:

```
// Language: Clean

absolute :: Int -> Int
absolute    0   =  z  // 1st impl
where
	z :: Int
	z =  0
absolute    n         // 2nd impl
| n <  0        =  negN
| otherwise     =  n
where
	negN :: Int
	negN =  n * (-1)
```

The second implementation does not have access to $\text{z}$ which is defined in the first implementation.

#### 1.5.3 With Blocks

A $\textbf{with}$ block can be added at the end of a guarded body which introduces a new scope.


```
// Langauge: Clean

[fnName] [fnParam]
| [guardA] = [bodyA]
with
    localX = [expr]
| [guardB] = [bodyB]
with
	localY = [expr]
| [guardC] = [bodyC]
```

For example:

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

The third guarded body does not have access to $\text{negN}$, which is local to the second guarded body.

[Back to top](#)

---

## Chapter II: Built-In Types

Certain types like integers, Booleans, characters, real numbers, lists, tuples and arrays are  frequently used that they have been predefined for reasons of efficiency and convenience.

### 2.1 Primitive Types

#### 2.1.1 Integers

**Type annotation**: $\textbf{Int}$

**Constructors**

From decimal notation:

```
// Language: Clean

n :: Int
n = -13
n =  0
n =  13
```

From octal notation by prefixing octal digits with $\textbf{0}$:

```
// Language: Clean

n :: Int
n = -015  // dec -13
n =  0
n =  015  // dec  13
```

From hexadecimal notation by prefixing hexadecimal digits with $\textbf{0x}$:

```
// Language: Clean

n :: Int
n = -0xD  // dec -13
n =  0
n =  0xd  // dec  13
```

More information about built-in operations and functions on integers can be found on [Appendix A: StdInt](appendix-a/stdint).

#### 2.1.2 Real Numbers

**Type annotation**: $\textbf{Real}$

**Constructors**

From decimal notation:

```
// Language: Clean

n :: Real
n = -1.3
n =  0.0
n =  1.3
```

From scientific notation:

```
// Language: Clean

n :: Real
n = -13E-2  // -0.13
n =  0E0    //  0
n =  13E-2  //  0.13
```

More information about built-in operations and functions on real numbers can be found on [Appendix A: StdReal](appendix-a/stdreal).

#### 2.1.3 Booleans

**Type annotation**: $\textbf{Bool}$

**Constructors**

```
// Language: Clean

b :: Bool
b =  True
b =  False
```

More information about built-in operations and functions on Booleans can be found on [Appendix A: StdBool](appendix-a/stdbool).


#### 2.1.4 Characters

**Type annotation**: $\textbf{Char}$

**Constructors**

```
// Language: Clean

c :: Char
b =  'a'
b =  '9'
b =  'Z'
b =  '+'
```

More information about built-in operations and functions on characters can be found on [Appendix A: StdChar](appendix-a/stdchar).

#### 2.1.5 Parameter-Matching Primitive Types

Constants of primitive types can be specified as pattern.

Using integer constants as pattern:

```
// Language: Clean

fib :: Int -> Int  
fib    1   =  1  
fib    2   =  1  
fib    n   =  fib (n - 1) + fib (n - 2)
```

Using character constants as pattern:

```
// Language: Clean

isLetterA :: Char -> Bool
isLetterA    'a'  =  True
isLetterA    'A'  =  True
isLetterA     _   =  False
```

### 2.2 Lists

#### 2.2.1 Defining A List

**Type annotation**: 
$[\textbf{Int}]$, 
$[\textbf{Char}]$, 
$[\textbf{T}]$, 
et cetera.

A list can contain an infinite number of elements. 
All elements must be of the same type. 

**Constructors**

From explicit enumeration of the elements:

```
// Language: Clean

[1, 3, 5, 7, 9]
[1 : [3, 5, 7, 9]]  
[1, 3, 5 : [7, 9]]
[1 : [3 : [5 : [7 : [9 : []]]]]]  
[1 : 3 : 5 : 7 : 9 : []]  
```

From implicit enumeration with $\textbf{dot-dot}$ expression:

```
// Language: Clean

[1..]       // infitite list [1, 2, 3, ...]
[1, 3..]    // infinite list [1, 3, 5, ...]
[1..5]      // [1, 2, 3, 4, 5]
[1, 3..10]  // [1, 3, 5, 7, 9]
```

It  should be noted that $\textbf{dot-dot}$ expressions requires $\text{StdEnum}$ module.

From list comprehension:

```
// Language: Clean

// extract from a list
[el \\ el <- list]

// extract from an array
[el \\ el <-: array]

// cartesian product
[(x, y) \\ x <- xs , y <- ys]

// pair-wise zip
[(x, y) \\ x <- xs & y <- ys]

// same as filter
[x \\ x <- xs | P x]

// nested
[(x, y) \\ x <- xs, y <- [1..x]]
```

A special notation for constructing a list of characters is also provided:

```
// Language: Clean

['a', 'b', 'c']  
['abc']
['ab','c']
```

More information about built-in operations and functions on lists can be found on:
- [Appendix A: StdCharList](appendix-a/stdcharlist),
- [Appendix A: StdList](appendix-a/stdlist), and
- [Appendix A: StdOrdList](appendix-a/stdordlist).

#### 2.2.2 List Patterns

Lists can be specified as patterns as follow:

```
// Language: Clean

getFst :: [T]       -> T
getFst    [x, y, z] =  x

getSnd :: [T]       -> T
getSnd    [x, y, z] =  y

getThd :: [T]       -> T
getThd    [x, y, z] =  z
```

The results of these function calls are as expected:

```
// Language: Clean

getFst [1, 2, 3]  // 1
getSnd [1, 2, 3]  // 2
getThd [1, 2, 3]  // 3
```

However, they will result in a run-time error if it is invoked with a list which does not have exactly three elements.

```
// Language: Clean

getFst [1]          // NOT OK :(
getSnd [1, 2]       // NOT OK :(
getThd [4, 3, 2, 1] // NOT OK :(
```

To remedy this issue, an addition element should be introduce.

```
// Language: Clean

getFstAny :: [T]     -> T
getFstAny    [x : r] =  x

getSndAny :: [T]        -> T
getSndAny    [x, y : r] =  y

getThdAny :: [T]           -> T
getThdAny    [x, y, z : r] =  z
```

The right-hand side of colon ($:$) matches with any number of elements, including zero.
It is worth noting that $r$ is always a list.

```
// Language: Clean

getFstAny [1]           // x = 1
                        // r = []

getFstAny [1, 2]        // x = 1
                        // r = [2]

getFstAny [4, 3, 2, 1]  // x = 4
                        // r = [3, 2, 1]
```

However, the second function still requires the list to have at least two elements.

```
// Language: Clean

getSndAny [1]           // NOT OK :(

getSndAny [1, 2]        // x = 1
                        // y = 2
                        // r = []

getSndAny [4, 3 ,2 ,1]  // x = 4
                        // y = 3
                        // r = [2, 1]
```

Similarly, the third function requires a list with at least three elements.

```
// Language: Clean

getThdAny [1]           // NOT OK :(

getThdAny [1, 2]        // NOT OK :(

getThdAny [4, 3, 2, 1]  // x = 4
                        // y = 3
                        // z = 2
                        // r = [1]
```

### 2.3 Tuples

#### 2.3.1 Defining A Tuple

**Type annotation**: 
$(\textbf{T},\ \textbf{K})$, 
$(\textbf{T},\ \textbf{K},\ \textbf{V})$, 
$(\textbf{T},\ \textbf{K},\ \textbf{V},\ \textbf{E})$ 
et cetera.

A tuple contains finite number of elements. 
Elements do not have to be the same type.
Every type appears in a tuple must be specified, and singleton tuples are not allowed.

**Constructors**

```
// Language: Clean

A :: (Int, Char)
A =  (49, '1')

B :: (Real, Bool, String)
B =  (0.2, False, "Hi")

C :: (Int)
C =  (2, 6)  // NOT OK should be (Int, Int)

D :: (Int)
D =  (2)     // NOT OK
```

#### 2.3.2 Tuple Patterns

Tuples can be used as patterns in a similar way to lists.
However, colon ($:$) is not allowed in tuple patterns.

```
// Language: Clean

getFst :: (T, K, V) -> T
getFst    (x, y, z) =  x

getSnd :: (T, K, V) -> K
getSnd    (x, y, z) =  y

getThd :: (T, K, V) -> V
getThd    (x, y, z) =  z
```

The results of these function calls are as expected:

```
// Language: Clean

getFst (1, 'a', 1.0)  // 1
getSnd (1, 'a', 1.0)  // 'a'
getThd (1, 'a', 1.0)  // 1.0
```

### 2.4 Arrays

#### 2.4.1 Defining An Array

**Type annotation**: 
$\{\textbf{Int}\}$, 
$\{\textbf{Char}\}$, 
$\{\textbf{T}\}$, 
et cetera.

An array contains a finite number of elements.
Elements of an array have to be of the same type.

**Constructors**

```
// Language: Clean

{1, 2, 3, 4}
{1.0, 2.0, 3.0, 4.0}

"abc" 
// equivalent to
// {'a', 'b', 'c'}
```
