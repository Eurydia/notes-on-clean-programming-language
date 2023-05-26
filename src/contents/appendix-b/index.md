---
layout: "@layouts/Blog.astro"
title: "Appendix B: Code recipes"
---

## Table of contents

- [Introduction](#introduction)
- [Breaking an integer into its digits](#breaking-an-integer-into-its-digits)
- [Computing divisors of an integer](#computing-divisors-of-an-integer)
- [Checking if an integer is prime or not](#checking-if-an-integer-is-prime-or-not)

## Introduction

This section contains a collection of common and useful functions.
Each method includes the implementation as well as the explanation.

## Breaking an integer into digits

**Signature** 

$$
\begin{align*}
\text{Int}\rightarrow[\text{Int}]
\end{align*}
$$

**Expected result**

```
// Language: Clean

toDigits 123  // [1, 2, 3]
toDigits 456  // [4, 5, 6]
toDigits 1234 // [1, 2, 3, 4]
toDigits 4567 // [4, 5, 6, 7]
```

### Recursion

**Implementation**:

```
// Language: Clean

toDigits :: Int -> [Int]
toDigits    n 
| (abs n) < 10  =  [n]
| otherwise     =  (toDigits (n / 10)) ++ [n rem 10]
```

**Conversion pathway**

$$
\begin{align*}
\text{Int}\rightarrow\text{[Int]}
\end{align*}
$$

**Explanation**:

Given an integer $n$, the last digit is placed on the end of a list.
To get the last digit of $n$, we take advantage of the $\text{mod}$ operation. 

Before the next iteration, $n$ is divided by $10$, this step removes the last digit of $n$ since it has already been placed in the list.

$\text{abs}$ expands domain from $[0,\ \infty)$ to $(-\infty,\ \infty)$.

### List comprehension

```
// Language: Clean

toDigits :: Int -> [Int]
toDigits    n   =  [(toInt d) - 48 \\ d <-: (toString n)]
```

**Conversion  pathway**

$$
\begin{align*}
\text{Int}\rightarrow\text{String}\rightarrow\text{Char}\rightarrow\text{Int}\rightarrow[\text{Int}]
\end{align*}
$$

**Explanation**:

Since arrays can be freely converted to lists and vice versa, we can convert $n$ to an array.

In this case, $n$ is converted into an array of $\text{Char}$.
$\text{toInt}$ then converts each digit of $n$ to $\text{Int}$.

However, the $\text{Char}\rightarrow\text{Int}$ conversions are ASCII based.
That is 
- character $1$ converts to integer value $49$, 
- character $2$ converts to integer value $50$, and so on.

In the final step, an offset value of $48$ is subtracted from the result.


[Back to top](#)

---

## Computing divisors of an integer

**Signature**: $\text{Int}\rightarrow\text{[Int]}$

**Expected result**:

```
// Language: Clean

divisorsOf 9  // [1, 3, 9]
divisorsOf 16 // [1, 2, 4, 8, 16]
divisorsOf 2  // [1, 2]
divisorsOf 0  // [0]
```

### List comprehension

```
// Language: Clean

isDivisible :: Int Int -> Bool
isDivisible    x   y   =  (x rem y) == 0

divisorsOf :: Int -> [Int]
divisorsOf    0   =  [0]
divisorsOf    n   =  [d \\ d <- [1..(abs n)] | isDivisible n d]
```

**Conversions**

$$
\text{Int}\rightarrow[\text{Int}]
$$

**Explanation**:

A list of integers is generated.
It contains integers in $[1,\ \lvert{n}\rvert]$ interval.

The helper function $\text{isDivisible}$ determines which integer will be placed in the list, and which integer will be discarded.

If an integer $d$ is a divisor of $n$, it is included in the list.
If it does not full divide $n$, it is discarded.

[Back to top](#)

---

## Checking if an integer is prime

**Signature**: $\text{Int} \rightarrow\text{Bool}$

**Expected result**:

```
// Language: Clean

isPrime 9 // False
isPrime 3 // True
isPrime 1 // False
isPrime 0 // False
```

### Counting divisors list (comprehension)

```
// Language: Clean

isPrime :: Int -> Bool
isPrime 0 = False
isPrime 1 = False
isPrime n = length (filter isDivisorOfN [d \\ d <- ds]) == 0
where
	ds :: [Int]
	ds =  [2..(n - 1)]

	isDivisorOfN :: Int -> Bool
	isDivisorOfN k = (n rem k) == 0
```

**Conversions**: $\text{Int}\rightarrow\text{[Int]}\rightarrow\text{Int}\rightarrow\text{Bool}$

**Explanation**:

For $n \gt 1$, a list of integers from $2$ to $n - 1$ is constructed.
The list filtered to only contain divisors of $n$.

If the divisor list is empty, $n$ is a prime number.

### Using list of booleans

```
isPrime :: Int -> Bool
isPrime 0 = False
isPrime 1 = False
isPrime n = not (or [n rem d == 0 \\ d <- [2..(n - 1)]]) 
```

**Conversions**: $\text{Int}\rightarrow\text{[Int]}\rightarrow\text{[Bool]}\rightarrow\text{Bool}$

[Back to top](#)

---
