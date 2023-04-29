---
layout: "@layouts/Blog.astro"
title: Cleanpedia
Last updated: April 15th, 2023
---

## Table of contents

1. [Introduction](#introduction)
2. [Types](#types)
3. [Primitive types](#primitive-types)
	1. [Integers](#integers)
	2. [Real numbers](#real-numbers)
	3. [Characters](#characters)
	4. [Booleans](#booleans)
4. [Structured types](#structured-types)
	1. [Lists](#lists)
	2. Arrays
	3. Tuples
5. Comprehensions
6. Functions
	1. Definitions
	2. Invocation
	3. Symbolic functions
	4. Lambda functions
7. Scoping
	1. Function-local definition
	2. Guard-local definition
8. Pattern matching

## Introduction

My motivation is to create an accessible, concise, and clear documentation which can be used by those who wishes to learn Clean.

The same information can be found on:
- [Cloogle](https://cloogle.org/) which is the language's search engine, and
- [language report](https://cloogle.org/doc/) which describes the syntax and BNF of Clean.

If you notice any mistake or have suggestions for improvements, please feel free to contact me through the following channels:
- Email: b9xp3x@inf.elte.hu
- Instragram: [@_kornthana](https://www.instagram.com/_kornthana/)
- Telegram channel:  https://t.me/+El6CtwOD8KxhYmU9

## Types

Types define the kind of data used in a program and the operations that can be performed on it.
Correct usage is important for program functionality and efficiency.

Types can only interact with themselves due to lack of implicit type conversion.

### Variable specification

**Syntax**

The syntax for specifying a variable type is shown below.

```
// Language: Clean

exVar :: T
```

Practically, variable specifications may look similar to the following:

```
// Language: Clean

width :: Int
width =  12

area :: Int
area =  width * width
```

**Possible error**

It is important to keep in mind that a variable declaration must immediately follow its type specification.

```
// Language: Clean

exInt :: Int

...code...

exInt =  12 // NOT OK :(
```

In this case, $\text{exInt}$ will cause a compilation error with a message which states:

```
Error [...]: function body expected.
```

To resolve the error, simply move the variable declaration up

```
// Language: Clean

exInt :: Int
exInt =  12  // OK

...code...
```

or move the type specification down.

```
// Language: Clean

...code...

exInt :: Int
exInt =  12  // OK
```

#### Function specification

**Syntax**

The syntax for specifying a function type is shown below.

```
// Language: Clean

exFuncX :: T            -> K

exFuncY :: T K          -> V

exFuncZ :: T1 T2 ... Tn -> K
```

$\text{exFuncX}$ has one parameter of type $T$.
Its return type is $K$.

$\text{exFuncY}$ has two parameters.
The first parameters has type $T$, and the second of $K$.
Its return type is $V$.

$\text{exFuncZ}$ has $n$ parameters.
The $n$-th parameter has type $T_{n}$.

**Class context**

Class context ensures that operations are available on a generic type.

It has the following syntax:

```
// Language: Clean

exFuncX :: T   -> K | + T

exFuncY :: T K -> V | +, / T

exFuncZ :: T K -> V | + T & ^ K
```

In $\text{exFuncX}$, $+$ must be available on $T$.

In $\text{exFuncY}$, $+$ and $/$ must be available on $T$.

In $\text{exFuncZ}$, $+$ must be available on $T$ and $^\wedge$  must be available on $K$.

More context can be added by following the same pattern.

### Type definition

### Algebraic type

**tba**

### Higher-order types

**tba**

[Back to top](#)

---

## Primitive types

### Integers

**Type annotation**: $\text{Int}$

**Constructions**

There are four methods to construct an $\text{Int}$ literal.

$\text{Int}$ literal construction from decimal notation:

```
// Language: Clean

decimal :: Int
decimal =  999
decimal =  99
decimal =  9
```

$\text{Int}$ literal construction using octal notation with $0$ prefix:

```
// Language: Clean

octal :: Int
octal =  01747 // decimal 999
octal =  0143  // decimal 99
octal =  011   // decimal 9
```

$\text{Int}$ literal construction using hexadecimal notation with $0\text{x}$ prefix:

```
// Language: Clean

hexadecimal :: Int
hexadecimal =  0x3E7 // decinal 999
hexadecimal =  0x63  // decimal 99
hexadecimal =  0x9   // decimal 9
```

 $\text{Int}$ literal construction using scientific notation:

```
// Language: Clean

scientific :: Int
scientific =  0.999E3 // 999
scientific =  0.99E2  // 99
scientific =  0.9E1   // 9
```

When constructing an integer using scientific notation, it is possible to construct a real number instead.

```
// Language: Clean

maybeInt :: Int
maybeInt =  0.9E0 // 0.9 :(
```

In such a case, a compile-time error will be thrown with the following message.

```
Type error [...]: cannot unify demanded type with offered type:
Int
Real
```

To resolve this issue, ensure that an integer is constructed.

**Operations**:
- [arithmetic operations](appendix-a/integers#arithmetic-operations),
- [relational operations](appendix-a/integers#relational-operations), and
- [bitwise operations](appendix-a/integers#bitwise-operations).

**Functions**:
- [basic functions](appendix-a/integers#basic-functions), and
- [property functions](appendix-a/integers#property-functions).

**Type conversions**

The built-in function $\text{toInt}$ explicitly converts other types to $\text{Int}$.
It supports the conversion of the following types:
- $\text{Real}\rightarrow\text{Int}$,
- $\text{Char}\rightarrow\text{Int}$, and
- $\text{String}\rightarrow\text{Int}$.

See also [conversions to integers](appendix-a/integers#conversions-to-integers).

### Real numbers

**Type annotation**: $\text{Real}$

**Constructions**

There are two methods to construct a $\text{Real}$ literal.

$\text{Real}$ literal construction using decimal notation:

```
// Language: Clean

decimal :: Real
decimal =  999.9
decimal =  99.9
decimal =  9.9
```

$\text{Real}$ literal construction using scientific notation:

```
// Language: Clean

scientific :: Real
scientific = 0.9999E3 // decimal 999.9
scientific = 0.999E2  // decimal 99.9
scientific = 0.99E1   // decimal 9.9
```

$\text{Real}$ literals cannot be constructed using octal or hexadecimal notation.

**Operations**:
- [arithmetic operations](appendix-a/real-numbers#arithmetic-operations), and
- [relational operations](appendix-a/real-numbers#relational-operations).

**Functions**:
- [basic functions](appendix-a/real-numbers#basic-functions),
- [trigonometric functions](appendix-a/real-numbers#trigonometric-functions), and
- [property functions](appendix-a/real-numbers#property-functions).

**Type conversions**

The built-in function $\text{toReal}$ explicitly converts other types to $\text{Real}$.
It supports the following types:
- $\text{Int}\rightarrow\text{Real}$, and
- $\text{String}\rightarrow\text{Real}$.

See also [conversions to real numbers](appendix-a/real-numbers#conversions-to-real-numbers).

### Characters

**Type annotation**: $\text{Char}$

**Construction**

There is only one method to construct a $\text{Char}$ literal.

```
// Language: Clean

character :: Char
character =  '1'
character =  'a'
character =  'A'
```

**Operations**:
- [arithmetic operations](appendix-a/characters#arithmetic-operations), and
- [relational operations](appendix-a/characters#relational-operations).

**Functions**:
- [basic functions](appendix-a/characters#basic-functions), and
- [property functions](appendix-a/characters#property-functions).

**Type conversions** 

The built-in function $\text{toChar}$ explicitly converts $\text{Int}$ to $\text{Char}$.

See also [conversions to characters](appendix-a/characters#conversions-to-characters).

### Booleans

**Type annotation**: $\text{Bool}$

**Construction**

There is one method to construct a $\text{Bool}$ literal.

```
// Language: Clean

boolean :: Bool
boolean =  True
boolean =  False
```

**Operation**:
- [logical operations](appendix-a/booleans#logical-operations).

[Back to top](#)

---

## Structured types

### Lists

**Type Annotation**: $[T]$

**Characteristics**:
- hold one type, and
- have dynamic size.

**Constructions**

There multiple methods to construct a $\text{[T]}$ literal.

$\text{[T]}$ literal construction using explicit enumeration of elements:

```
// Language: Clean

list :: [Int]
list =  [1, 3, 5, 7, 9]
```

$\text{[T]}$  literal construction using head and tails:

```
// Language: Clean

list :: [Int]
list =  [1 : [3, 5, 7, 9]]
list =  [1, 3, 5 : [7, 9]]
list =  [1 : [3 : [5 : [7 : [9 : []]]]]]  
list =  [1 : 3 : 5 : 7 : 9 : []]  
```

Shorthands are provided for $\text{[T]}$ construction.

$\text{[T]}$ construction using DotDot expressions:

```
// Language: Clean

list :: [Int]
list =  [1, 3..9] // [1, 3, 5, 7, 9]  
list =  [1..9]    // [1, 2, 3, 4, 5, 6, 7, 8, 9]  
list =  [1..]     // [1, 2, 3, 4, 5, ...]  
```

$\text{[T]}$ construction using [list comprehensions](#comprehensions).

Special shorthands are provided for $[\text{Char}]$ constructions.

```
// Language: Clean

charList :: [Char]
charList =  ['a', 'b', 'c']  
charList =  ['abc']
charList =  ['ab','c']
charList =  ['a'..'c']
```

**Operations**:
- [basic operations](#appendix-a/lists#basic-operations)
- [relational operations](#appendix-a/lists#relational-operations)

**Functions**:
- [basic functions](appendix-a/lists#basic-functions)
- [ordering functions](appendix-a/lists#ordering-functions)
- [higher-order functions](appendix-a/lists#higher-order-functions)

**Functions on $[\text{Bool}]$**:
- [boolean list functions](appendix-a/lists#boolean-list-functions)

**Functions on $[\text{Char}]$**:
- [character list functions](appendix-a/lists#character-list-functions)

### Arrays

**Characteristcs**:
- holds one type, and
- has fixed size.

**Annotation**: $\text{\{T\}}$

**Constructions**:

```
// Language: Clean

A :: {Char}
A =  {'a', 'b', 'c'}

B :: String
B =  "abc"             // also an array of characters
```

**Operations**:
- [[#Arrays: Standard operators]]
- [[#Arrays: Methods]]

### Tuples

**Characteristcs**:
- can hold multiple type,
- must hold at least two items, and
- has finite length.

**Annotation**: $(\text{T}_{1}, ..., \text{T}_{n})$

**Constructions**:

```
// Language: Clean

A :: (Int, Char)
A =  (49, '1')

B :: (Real, Bool, String)
B =  (0.2, False, "Hi")

C :: (Int)
C =  (2, 6)                // NOT OK should be (Int, Int)
```

**Operations**:
- [[#Tuples: Relational operators]]
- [[#Tuples: Methods]]

[Back to top](#)

---

## Comprehensions

Both arrays and lists can be constructed with comprehension.
Use **$[...]$** to construct a list and **$\{...\}$** to construct an array.

```
// Language: Clean
A :: [T]
A =  [el \\ el <- list]                  // extract from a list

B :: [T]
B =  [el \\ el <-: array]                // extract from an array

C :: [(T, K)]
C =  [(x, y) \\ x <- xs , y <- ys]       // cartesian product

D :: [(T, K)]
D =  [(x, y) \\ x <- xs & y <- ys]       // pair-wise zip

F :: [T]
F =  [x \\ x <- xs | P x]                // same as filter

G :: [(T, K)]
G =  [(x, y) \\ x <- xs, y <- [1..x]]    // nested
```

## Functions

### Definition

A Syntax for function can be as minimal as shown below.

```
// Language: Clean

func_x :: T   -> K
func_x    ... =  ...
```

Conditional branches in functions can be defined as shown below.

```
// Language: Clean

// using guards

func_y :: Int Int -> Int
func_y    x   y
| y == 0          = abort "Division by zero"
| otherwise       = x / y

// using patterns

func_z :: Int Int -> Int
func_z    _   0   =  abort "Division by zero"
func_z    x   y   =  x / y 
```

### Invocation

Invoking a function in Clean differs slightly from traditional languages.

In traditional languages, such as Python, a pair of parentheses is used to **invoke** a function.
They can be omitted entirely.

```
// Language: Clean

f argA ... argZ
```

### Symbolic functions

By using prentheses, special symbols can be used as function names . 

```
// Language: Clean

(^^) :: T K -> V
```

Any function can be converted into an operator.
However, it must have an arity of exactly two.

```
// Language: Clean

(^^) infix  0 :: T K -> V

(^^) infixl 0 :: T K -> V  // left-associated

(^^) infixr 0 :: T K -> V  // right-associated
```

The $\text {infix}$ macros allows the function to be place between its arguments.

The number succeeding the macro represents the precedence from $0$ to $9$.
Higher precedence means the operator binds more tightly to its arguments.

``` 
// Language: Clean

A ^^ B   // invoked as operator

(^^) A B // invoked as regular function
```

### Lambda functions

The basic syntax for lambda function is shown below.

```
// Language: Clean

\(paramA, ..., paramZ) = ...
```

Conditional branches is also supported by lambda functions using `case ... of` expression.

```
// Language: Clean

\(x, y, z) = case x of 
3 -> y
_ -> z
```

## Scoping

There are two levels of local definitions:

### Function-local definitions 

Using **$\text{where}$** keyword, functions and variables can be scoped to a function.

```
// Language: Clean

func_x :: T   -> K
func_x    ... =  ...
where
	...
```

### Guard-local definitions 

Using **$\text{with}$** keyword, functions and variables can be scoped to guards of a function.

```
// Language: Clean

func_y :: T   -> K
func_y    ... =  ...
| ... = ...
with
	...
| otherwise = ...
```

## Pattern matching

Destructing an iterator can be done using **$\text{x , y}$** and **$\text{x : rest}$** pattern.

```
// Language: Clean

func_x :: [T]       -> K
func_x    [x, y, z] =  ...

func_x [3, 5 ,6]       // x=3; y=5; z=6
func_x [1, 2]          // run-time error
func_x [3, 5, 6, 7]    // run-time error
```

Without the greedy operator, the pattern must be an exact match, otherwise a run-time error is thrown.

```
// Language: Clean

func_y :: [T]      -> K
func_y    [x : rest] =  ...

func_y [3, 5, 6]   // x=3; rest=[5, 6]
func_y [1]         // x=1; rest=[]
func_y []          // run-time error
```

Attempting to destucture an empty iterator will thrown a run-time error.
To avoid this pitfall, a function pattern should defined.

```
// Language: Clean

func_y :: [T]      -> K
func_y    []       =  ...
func_y    [x : rest] =  ...

func_y [3, 5, 6]   // x=3; rest=[5, 6]
func_y [1]         // x=1; rest=[]
func_y []          // destructuring did not occur
                   // and no error is thrown
```

A complex destructuring pattern can be done as follow:

```
// Language: Clean

func_z :: [T]      -> K
func_z    [x, y : rest] =  ...

func_y [1, 2, 3, 4] // x=1; y=2; rest=[3, 4]
func_y [3, 5, 6]    // x=3; y=5; rest=[6]
func_y [1]          // run-time error
```

---

### Arrays operations, methods and functions

#### Standard operators

| Operator             | Meaning                   |
| -------------------- | ------------------------- |
| <nobr>`X.[i]`</nobr> | $i$-th element of $X$[^3] |

Definitions:
- $X$ is an array, and
- $i$ is an integer.

#### Standard methods

| Name                        | Meaning                                | Signature                       |
| --------------------------- | -------------------------------------- | ------------------------------- |
| <nobr>`size X`</nobr>       | Size of X                              | <nobr>`{T} -> Int`</nobr>       |
| <nobr>`select X i`</nobr>   | $i$-th element of X                    | <nobr>`{T} Int -> T`</nobr>     |
| <nobr>`update X i a`</nobr> | Replace $i$-th element of $X$ with $a$ | <nobr>`{T} Int T -> {T}`</nobr> |

Definitions:
- $X$ is an array,
- $a$ has $T$ type,
- $i$ is an integer.

---

## Tuples: Relational operators

Relational operations on tuples are the same as on integers.
The semantic meaning is an element-wise comparison.

See [[#Integers: Relational operations]].

## Tuples: Methods

| Name                  | Meaning               | Signature                     |
| --------------------- | --------------------- | ----------------------------- |
| <nobr>`fst X`</nobr>  | First element of $X$  | <nobr>`(T, K) -> T`</nobr>    |
| <nobr>`snd X`</nobr>  | Second element of $X$ | <nobr>`(T, K) -> K`</nobr>    |
| <nobr>`fst3 Y`</nobr> | First element of $Y$  | <nobr>`(T, K, V) -> T`</nobr> |
| <nobr>`snd3 Y`</nobr> | Second element of $Y$ | <nobr>`(T, K, V) -> K`</nobr> |
| <nobr>`thd3 Y`</nobr> | Third element of $Y$  | <nobr>`(T, K, V) -> V`</nobr> |

Definitions:
- $X$ is a two-element tuple, and
- $Y$ is a three-element tuple.

---