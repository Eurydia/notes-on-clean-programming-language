---
layout: "@layouts/Blog.astro"
title: "Appendix A: StdOverloaded"

Last updated: MAY 13th, 2023
Revisions: 3
Data of last revision: MAY 13th, 2023
---

## Contents

- [Part I: Operations](#part-i-operations)
- [Part II: Units](#part-ii-units)
- [Part III: Basic Functions](#part-iii-basic-functions)
- [Part IV: Conversion Functions](#part-iv-conversion-functions)

##  Part I: Operations

### 1.1 Addition

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of a generic type.

**Behavior**: adds $a$ and $b$.

**Declaration**

```
// Language: Clean

class + T
where:
    (+) infixl 6 :: T T -> T
```

### 1.2 Subtraction

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of a generic type.

**Behavior**: subtracts $b$ from $a$.

**Declaration**

```
// Language: Clean

class + T
where:
    (-) infixl 6 :: T T -> T
```

### 1.3 Multiplication

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of a generic type.

**Behavior**: multiplies $a$ and $b$.

**Declaration**

```
// Language: Clean

class * T
where:
    (*) infixl 7 :: T T -> T
```

### 1.4 Division

**Signature**

$$
\begin{align*}
a\rightarrow{a}\rightarrow{a}
\end{align*}
$$

where:
- $a$ is a generic type.

**Behavior**: divides $a$ with $b$.

**Declaration**

```
// Language: Clean

class / T
where:
    (/) infixl 7 :: T T -> T
```

### 1.5 Exponentiation

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of a generic type.

**Behavior**: raises $a$ to the power of $b$.

**Declaration**

```
// Language: Clean

class ^ T
where:
    (^) infixl 7 :: T T -> T
```

### 1.6  Equal To

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of a generic type.

**Behavior**: checks if $a$ and $b$ are equal.

**Declaration**

```
// Language: Clean

class == T
where:
    (==) infixl 4 :: T T -> T
```

### 1.7 Less Than

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of a generic type.

**Behavior**: checks if $a$ is less than $b$.

**Declaration**

```
// Language: Clean

class < T
where:
    (<) infixl 4 :: T T -> T
```

### 1.8 Slicing

**Signature**

$$
\begin{align*}
a\rightarrow(i,\ j)\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type, and
- $i$ and $j$ are of type $\textbf{Int}$.

**Behavior**: slices $[i,\ j]$ interval from $a$.

**Declaration**

```
// Language: Clean

class % T
where:
    (%) infixl 9 :: T (Int, Int) -> T
```

### 1.9 Concatenation

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of a generic type.

**Behavior**: joins $a$ and $b$.

**Declaration**

```
// Language: Clean

class +++ T
where:
    (+++) infixl 5 :: T T -> T
```

### 1.9 Modulo

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of a generic type.

**Behavior**: $a\mod{b}$

**Declaration**

```
// Language: Clean

class mod T
where:
    (mod) infixl 7 :: T T -> T
```

### 1.10 Reminder Of Division

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of a generic type.

**Behavior**: reminder after dividing $a$ with $b$.

**Declaration**

```
// Language: Clean

class rem T
where:
    (rem) infixl 7 :: T T -> T
```

### 1.11 Negate

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type.

**Behavior**: negates $a$.

**Declaration**

```
// Language: Clean

class ~ T
where:
    ~ :: T -> T
```

[Back to top](#)

---

## Part II: Units

### 2.1 Zero Unit

**Behavior**: unit element for addition.

**Declaration**

```
// Language: Clean

class zero T
where:
    zero :: T
```

### 2.2 One Unit

**Behavior**: unit element for multiplication.

**Declaration**

```
// Language: Clean

class one T
where:
    one :: T
```

[Back to top](#)

---

## Part III: Functions

### 3.1 inc

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type.

**Behavior**: adds $a$ by its one unit.

**Declaration**

```
// Language: Clean

class inc T
where:
    inc :: T -> T
```

### 3.2 dec

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type.

**Behavior**: subtracts $a$ by its one unit.

**Declaration**

```
// Language: Clean

class dec T
where:
    dec :: T -> T
```

### 3.3 abs

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type.

**Behavior**: returns absolute value of $a$.

**Declaration**

```
// Language: Clean

class abs T
where:
    abs :: T -> T
```

### 3.4 sign

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of a generic type, and
- $R$ is of type $\textbf{Int}$.

**Behavior**: returns sign of $a$.

**Declaration**

```
// Language: Clean

class sign T
where:
    sign :: T -> Int
```

### 3.5 isEven

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of a generic type, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: returns true if and only if $a$ is even.

**Declaration**

```
// Language: Clean

class isEven T
where:
    isEven :: T -> Bool
```

### 3.6 isOdd

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of a generic type, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: returns true if and only if $a$ is odd.

**Declaration**

```
// Language: Clean

class isOdd T
where:
    isOdd :: T -> Bool
```

### 3.7 length

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of a generic type, and
- $R$ is of type $\textbf{Int}$.

**Behavior**: returns length of $a$.

**Declaration**

```
// Language: Clean

class length T
where:
    length :: (T a) -> Bool
```

### 3.8 gcd

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of a generic type. 

**Behavior**: returns greatest common divisor of $a$ and $b$.

**Declaration**

```
// Language: Clean

class gcd T
where:
    gcd :: T T -> T
```

### 3.9 lcm

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of a generic type. 

**Behavior**: returns least common multiple of $a$ and $b$.

**Declaration**

```
// Language: Clean

class lcm T
where:
    lcm :: T T -> T
```

### 3.10 ln

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns natural log of $a$.

**Declaration**

```
// Language: Clean

class ln T
where:
    ln :: T -> T
```

### 3.11 log10

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns logarithm base $10$ of $a$.

**Declaration**

```
// Language: Clean

class log10 T
where:
    log10 :: T -> T
```

### 3.12 exp

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns $e$ raise to the power of $a$.

**Declaration**

```
// Language: Clean

class exp T
where:
    exp :: T -> T
```

### 3.13 sqrt

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns square root of $a$.

**Declaration**

```
// Language: Clean

class sqrt T
where:
    sqrt :: T -> T
```

### 3.14 sin

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns sine of $a$.

**Declaration**

```
// Language: Clean

class sin T
where:
    sin :: T -> T
```

### 3.15 cos

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns cosine of $a$.

**Declaration**

```
// Language: Clean

class cos T
where:
    cos :: T -> T
```

### 3.16 tan

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns tangent of $a$.

**Declaration**

```
// Language: Clean

class tan T
where:
    tan :: T -> T
```

### 3.17 asin

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns inverse of sine of $a$.

**Declaration**

```
// Language: Clean

class asin T
where:
    asin :: T -> T
```

### 3.18 acos

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns inverse of cosine of $a$.

**Declaration**

```
// Language: Clean

class acos T
where:
    acos :: T -> T
```

### 3.19 atan

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns inverse of tangent of $a$.

**Declaration**

```
// Language: Clean

class sin T
where:
    sin :: T -> T
```

### 3.20 sinh

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns hyperbolic sine of $a$.

**Declaration**

```
// Language: Clean

class sinh T
where:
    sinh :: T -> T
```

### 3.21 cosh

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns hyperbolic cosine of $a$.

**Declaration**

```
// Language: Clean

class cosh T
where:
    cosh :: T -> T
```

### 3.22 tanh

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns hyperbolic tangent of $a$.

**Declaration**

```
// Language: Clean

class tanh T
where:
    tanh :: T -> T
```

### 3.23 asinh

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns inverse of hyperbolic sine of $a$.

**Declaration**

```
// Language: Clean

class asinh T
where:
    asinh :: T -> T
```

### 3.24 acosh

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns inverse of hyperbolic cosine of $a$.

**Declaration**

```
// Language: Clean

class acosh T
where:
    acosh :: T -> T
```

### 3.25 atanh

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns inverse of hyperbolic tangent of $a$.

**Declaration**

```
// Language: Clean

class atanh T
where:
    atanh :: T -> T
```

[Back to top](#)

---

##  Part IV: Conversion Functions

### 4.1 toInt

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
-  $a$ is of a generic type, and 
- $R$ is of type $\textbf{Int}$.

**Behavior**: converts $a$ to $\textbf{Int}$.

**Declaration**

```
// Language: Clean

class toInt T
where:
    toInt :: T -> Int
```

### 4.2 toReal

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
-  $a$ is of a generic type, and 
- $R$ is of type $\textbf{Real}$.

**Behavior**: converts $a$ to $\textbf{Real}$.

**Declaration**

```
// Language: Clean

class toReal T
where:
    toReal :: T -> Real
```

### 4.3 toChar

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
-  $a$ is of a generic type, and 
- $R$ is of type $\textbf{Char}$.

**Behavior**: converts $a$ to $\textbf{Char}$.

**Declaration**

```
// Language: Clean

class toChar T
where:
    toChar :: T -> Char
```

### 4.4 toBool

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
-  $a$ is of a generic type, and 
- $R$ is of type $\textbf{Bool}$.

**Behavior**: converts $a$ to $\textbf{Bool}$.

**Declaration**

```
// Language: Clean

class toBool T
where:
    toBool :: T -> Bool
```

### 4.5 toString

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of a generic type, and 
- $R$ is of type $\textbf{String}$.

**Behavior**: converts $a$ to $\textbf{String}$.

**Declaration**

```
// Language: Clean

class toString T
where:
    toString :: T -> String
```

### 4.6 fromInt

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Int}$, and
- $R$ is of a generic type.

**Behavior**: converts an integer $a$ to a generic type.

**Declaration**

```
// Language: Clean

class fromInt T
where:
    fromInt :: Int -> T
```

### 4.7 fromReal

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Real}$, and
- $R$ is of a generic type.

**Behavior**: converts a real number $a$ to a generic type.

**Declaration**

```
// Language: Clean

class fromReal T
where:
    fromReal :: Real -> T
```

### 4.8 fromChar

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Char}$, and
- $a$ is of a generic type.

**Behavior**: converts a character $a$ to a generic type.

**Declaration**

```
// Language: Clean

class fromChar T
where:
    fromChar :: Char -> T
```

### 4.9 fromBool

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Bool}$, and
-  $R$ is of a generic type.

**Behavior**: converts a Boolean $a$ to a generic type.

**Declaration**

```
// Language: Clean

class fromBool T
where:
    fromBool :: Bool -> T
```

### 4.10 fromString

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{String}$, and
- $R$ is of a generic type. 

**Behavior**: converts a string $a$ to a generic type.

**Declaration**

```
// Language: Clean

class fromString T
where:
    fromString :: String -> T
```

[Back to top](#)

---
