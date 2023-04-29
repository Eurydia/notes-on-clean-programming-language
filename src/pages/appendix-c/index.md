---
layout: "@layouts/Blog.astro"
title: "Appendix C: CRU"
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

### Using recursive function

**Implementation**:

```
// Language: Clean

toDigits :: Int -> [Int]
toDigits n 
| n < 10 = [n]
| otherwise = (toDigits (n / 10)) ++ [ld]
where
	ld :: Int
	ld = n rem 10
```

**Conversions**: $\text{Int}\rightarrow\text{[Int]}$

**Explanation**:

Given an integer $n$, while $n$ has more than one digit, extract the last digits by using $n\mod 10$.
The total digits of $n$ is reduced by one.

If $n$ has one digits, return $n$ then stop the recursion.

### Using list comprehension

```
// Language: Clean

toDigits :: Int -> [Int]
toDigits n = [(toInt d) - 48 \\ d <-: (toString n)]
```

**Conversions**: $\text{Int}\rightarrow\text{\{Char\}}\rightarrow\text{[Int]}$

**Explanation**:

Since $n$ is an integer, it has to be converted to a string.
The reason being that an integer cannot be used as a generator, but a string can.

Each digits of $n$ is stored in the variable $d$ which is converted from **a character** to **an integer** based on its ASCII value.

To offset the ASCII value, $48$ is subtracted from it.

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

### Using comprehension

```
// Language: Clean

divisorsOf :: Int -> [Int]
divisorsOf 0 = [0]
divisorsOf n = filter isDivisor [d \\ d <- ds]
where
	ds :: [Int]
	ds = [2..(n - 1)]

	isDivisors :: Int -> Bool
	isDivisors k = (n rem k) == 0
```

**Conversions**: $\text{Int}\rightarrow\text{[Int]}$

**Explanation**:

For $n \gt 0$, a list of integers from $2$ to $n - 1$ is constructed.
Integers which are not a divisor of $n$ is discarded. 

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
