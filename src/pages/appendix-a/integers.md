---
layout: "@layouts/Blog.astro"
title: "Appendix A: Integers"

Last updated: April 26th, 2023
Revisions: 2
Data of last revision: 12 APR 2023
---

## Table of contents

- [Arithmetic operations](#arithmetic-operations)
	- [Negation](#negation)
	- [Addition](#addition)
	- [Subtraction](#subtraction)
	- [Multiplication](#multiplication)
	- [Floor division](#floor-division)
	- [Reminder division](#reminder-division)
	- [Exponentiation](#exponentiation)
- [Relational operations](#relational-operations)
	- [Equal to](#equal-to)
	- [Not equal to](#not-equal-to)
	- [Less than](#less-than)
	- [Less than or equal to](#less-than-or-equal-to)
	- [Greater than](#greater-than)
	- [Greater than or equal to](#greater-than-or-equal-to)
- [Bitwise operations](#bitwise-operarions)
	- [Bitwise NEGATE](#bitwise-negate)
	- [Bitwise OR](#bitwise-or)
	- [Bitwise AND](#bitwise-and)
	- [Bitwise XOR](#bitwise-xor)
	- [Bitwise left shift](#bitwise-left-shift)
	- [Bitwise right shift](#bitwise-right-shift)
- [Basic functions](#basic-functions)
	- [sign](#sign)
	- [abs](#abs)
	- [gcd](#gcd)
	- [lcm](#lcm)
- [Property functions](#property-functions)
	- [isEven](#iseven)
	- [isOdd](#isodd)
- [Conversions to integers](#conversions-to-integers)
	- [Real numbers to integers](#real-numbers-to-integers)
	- [Characters to integers](#characters-to-integers)
	- [Strings to integers](#strings-to-integers)
 
## Arithmetic operations 

### Negation

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$, and
- $R$ is of type $\text{Int}$.

**Behavior**: inverts the sign of $a$.

**Usage**

```
// Language: Clean
 
~  0  //  0
~  1  // -1
~(-1) //  1
```

### Addition

**Signature** 

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$,
- $b$ is of type $\text{Int}$, and
- $R$ is of type $\text{Int}$.

**Behavior**: adds $a$ and $b$ together.

**Usage**

```
// Language: Clean

  1  +   1  //  2
  1  + (-1) //  0
(-1) +   1  //  0
(-1) + (-1) // -2
```

### Subtraction

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$,
- $b$ is of type $\text{Int}$, and
- $R$ is of type $\text{Int}$.

**Behavior**: subtracts $b$ from $a$.

**Usage**

```
// Language: Clean

  1  -   1  //  0
  1  - (-1) //  2
(-1) -   1  // -2
(-1) - (-1) //  0
```

### Multiplication

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$,
- $b$ is of type $\text{Int}$, and
- $R$ is of type $\text{Int}$.

**Behavior**: multiplies $a$ with $b$.

**Usage**

```
// Language: Clean

  1  *   1  //  1
  1  * (-1) // -1
(-1) *   1  // -1
(-1) * (-1) //  1
```

### Floor division

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$,
- $b$ is of type $\text{Int}$, and
- $R$ is of type $\text{Int}$.
- 
**Behavior**: floor divides $a$ with $b$.
Crashes if $b$ is $0$.

**Usage**

```
// Language: Clean

  1  /   1  //  1
  1  / (-1) // -1
(-1) /   1  // -1
(-1) / (-1) //  1
  7  /   0  //  NOT OK :(
```

### Reminder division

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$,
- $b$ is of type $\text{Int}$, and
- $R$ is of type $\text{Int}$.
- 
**Behavior**: returns reminder of $a$ divides by $b$.

**Usage**

```
// Language: Clean

 3 mod -2 //  1
-3 mod -2 // -1
-3 mod  2 // -1
 3 mod  2 //  1
```

**Note**:

$\text{rem}$  and $\text{mod}$ are alias of one another.

### Exponentiation

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$,
- $b$ is of type $\text{Int}$, and
- $R$ is of type $\text{Int}$.

**Behavior**: raises $a$ to the $b$-th power.
A run-time error will be thrown if $b$ is negative.

**Usage**

```
// Language: Clean

  1  ^   1  //  1
  1  ^ (-1) //  NOT OK :(
(-1) ^   1  // -1
(-1) ^ (-1) //  NOT OK :(  
```

**Note**

The run-time error has the following message:

```
^ (Int) called with negative power argument
```

[Back to top](#)

---

## Relational operations

### Equal to

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$,
- $b$ is of type $\text{Int}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is equal to $b$.

**Usage**

```
// Language: Clean

  5  ==   2  // False
(-5) ==   2  // False
  5  == (-2) // False
(-5) == (-2) // False
(-2) == (-2) // True
```

### Not equal to

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$,
- $b$ is of type $\text{Int}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is not equal to $b$.

**Usage**

```
// Language: Clean

  5  <>   2  // True
(-5) <>   2  // True
  5  <> (-2) // True
(-5) <> (-2) // True
(-2) <> (-2) // False
```

### Less than

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$,
- $b$ is of type $\text{Int}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is less than $b$.

**Usage**

```
// Language: Clean

  5  <   2  // False
(-5) <   2  // True
  5  < (-2) // False
(-5) < (-2) // True
(-2) < (-2) // False
```

### Less than or equal to

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$,
- $b$ is of type $\text{Int}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is less than or equal to $b$.

**Usage**

```
// Language: Clean

  5  <=   2  // False
(-5) <=   2  // True
  5  <= (-2) // False
(-5) <= (-2) // True
(-2) <= (-2) // True
```

### Greater than

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$,
- $b$ is of type $\text{Int}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is greater than $b$.

**Usage**

```
// Language: Clean

  5  >   2  // True
(-5) >   2  // False
  5  > (-2) // True
(-5) > (-2) // False
(-2) > (-2) // False
```

### Greater than or equal to

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$,
- $b$ is of type $\text{Int}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is greater than or equal to $b$.

**Usage**

```
// Language: Clean

  5  >=   2  // True
(-5) >=   2  // False
  5  >= (-2) // True
(-5) >= (-2) // False
(-2) >= (-2) // True
```

[Back to top](#)

---

## Bitwise operations

### Bitwise NEGATE

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$, and
- $R$ is of type $\text{Int}$.

**Behavior**: returns bit-wise one complement of $a$.

**Usage**

```
// Language: Clean

bitnot (-5) // -4
bitnot (-2) //  1
bitnot   2 //  -3
bitnot   5 //  -6
```

### Bitwise OR

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$,
- $b$ is of type $\text{Int}$, and
- $R$ is of type $\text{Int}$.

**Behavior**: returns bit-wise OR of $a$ and $b$.

**Usage**

```
// Language: Clean

  5  bitor   2  //  7
(-5) bitor   2  // -5
  5  bitor (-2) // -1
(-5) bitor (-2) // -1
```

### Bitwise AND

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$,
- $b$ is of type $\text{Int}$, and
- $R$ is of type $\text{Int}$.

**Behavior**: returns bit-wise AND of $a$ and $b$.

**Usage**

```
// Language: Clean

  5  bitand   2  //  0
(-5) bitand   2  //  2
  5  bitand (-2) //  4
(-5) bitand (-2) // -6
```

### Bitwise XOR

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$,
- $b$ is of type $\text{Int}$, and
- $R$ is of type $\text{Int}$.

**Behavior**: returns bit-wise XOR of $a$ and $b$.

**Usage**

```
// Language: Clean

  5  bitand   2  //  7
(-5) bitand   2  // -7
  5  bitand (-2) // -5
(-5) bitand (-2) //  5
```

### Bitwise left shift

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$,
- $b$ is of type $\text{Int}$, and
- $R$ is of type $\text{Int}$.

**Behavior**: shifts $a$ to the left by $b$ bits.

**Usage**

```
// Language: Clean

  5  <<   2  //  20
(-5) <<   2  // -20
  5  << (-2) //  4611686018427387904
(-5) << (-2) // -4611686018427387904
```

### Bitwise right shift

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$,
- $b$ is of type $\text{Int}$, and
- $R$ is of type $\text{Int}$.

**Behavior**: shifts $a$ to the right by $b$ bits.

**Usage**

```
// Language: Clean

  5  >>   2  //  1
(-5) >>   2  // -2
  5  >> (-2) //  0
(-5) >> (-2) // -1
```

[Back to top](#)

---

## Basic functions

### sign

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$, and
- $R$ is of type $\text{Int}$.

**Behavior**: returns sign of $a$.

**Usage**

```
// Language: Clean

sign   1  //  1
sign   0  //  0
sign (-1) // -1
```

### abs

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$, and
- $R$ is of type $\text{Int}$.

**Behavior**: returns absolute value of $a$.

**Usage**

```
// Language: Clean

abs   1  // 1
abs   0  // 0
abs (-1) // 1
```

### gcd

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$,
- $b$ is of type $\text{Int}$, and
- $R$ is of type $\text{Int}$.

**Behavior**: returns greatest common divisor of $a$ and $b$.

**Usage**

```
// Language: Clean

gcd   3    2  // 1
gcd (-3)   2  // 1
gcd   3  (-2) // 1
gcd (-3) (-2) // 1
```

### lcm

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$,
- $b$ is of type $\text{Int}$, and
- $R$ is of type $\text{Int}$.

**Behavior**: returns least common multiple of $a$ and $b$.

**Usage**

```
// Language: Clean

lcm   3    2  // 6
lcm (-3)   2  // 6
lcm   3  (-2) // 6
lcm (-3) (-2) // 6
```

[Back to top](#)

---

## Property functions

### isEven

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is an even integer or not.

**Usage**

```
// Language: Clean

isEven  2 // False
isEven  1 // True
isEven  0 // True
isEven -1 // True
isEven -2 // False
```

### isOdd

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is an odd integer or not.

**Usage**

```
// Language: Clean

isOdd  2 // True
isOdd  1 // False
isOdd  0 // False
isOdd -1 // False
isOdd -2 // True
```

[Back to top](#)

---

## Conversions to integers

### Real numbers to integers

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Int}$.

**Behavior**: rounds $a$ to its nearest integer.

**Usage**

```
// Language: Clean

toInt   1.5  //  2
toInt   1.4  //  1
toInt   0.0  //  0
toInt (-1.4) // -1
toInt (-1.5) // -2
```

### Characters to integers

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Char}$, and
- $R$ is of type $\text{Int}$.

**Behavior**: converts $a$ to its ASCII value.

**Usage**

```
// Language: Clean

toInt '1' //  49
toInt '9' //  59
toInt 'A' //  65
toInt 'Z' //  90
toInt 'a' //  97
toInt 'z' // 122
```

### Strings to integers

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{String}$, and
- $R$ is of type $\text{Int}$.

**Behavior**: converts $a$ to an integer.

**Usage**

```
// Language: Clean

toInt "1.0"  //  0	
toInt "1"    //  1
toInt "0"    //  0
toInt "-1"   // -1
toInt "-1.0" //  0
```

[Back to top](#)

---