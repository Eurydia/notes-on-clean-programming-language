---
layout: "@layouts/Blog.astro"
title: "Appendix A: StdInt"

Last updated: MAY 13th, 2023
Revisions: 3
Data of last revision: MAY 13th, 2023
---

## Contents

- [Part I: Arithmetic Operations](#part-i-arithmetic-operations)
- [Part II: Relational Operations](#part-ii-relational-operations)
- [Part III: Bitwise Operations](#part-iii-bitwise-operations)
- [Part IV: Basic Functions](#part-iv-basic-functions)
- [Part V: Property Functions](#part-v-property-functions)
- [Part VI: Conversions To Integers](#part-vi-conversions-to-integers)
 
## Part I: Arithmetic Operations 

### 1.1 Negation

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Int}$.

**Behavior**: inverts the sign of $a$.

**Usage**

```
// Language: Clean
 
~  0   //  0
~  1   // -1
~(-1)  //  1
```

### 1.2 Addition

**Signature** 

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of type $\textbf{Int}$.

**Behavior**: adds $a$ and $b$ together.

**Usage**

```
// Language: Clean

  1  +   1   //  2
  1  + (-1)  //  0
(-1) +   1   //  0
(-1) + (-1)  // -2
```

### 1.3 Subtraction

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of type $\textbf{Int}$.

**Behavior**: subtracts $b$ from $a$.

**Usage**

```
// Language: Clean

  1  -   1  //  0
  1  - (-1) //  2
(-1) -   1  // -2
(-1) - (-1) //  0
```

### 1.4 Multiplication

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of type $\textbf{Int}$.

**Behavior**: multiplies $a$ with $b$.

**Usage**

```
// Language: Clean

  1  *   1  //  1
  1  * (-1) // -1
(-1) *   1  // -1
(-1) * (-1) //  1
```

### 1.5 Floor Division

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of type $\textbf{Int}$.

**Behavior**: floor divides $a$ with $b$.
Silently crashes if $b$ is $0$.

**Usage**

```
// Language: Clean

  1  /   1   //  1
  1  / (-1)  // -1
(-1) /   1   // -1
(-1) / (-1)  //  1
  7  /   0   //  NOT OK :(
```

### 1.6 Reminder Division

Both $\text{rem}$  and $\text{mod}$ perform the same operation.

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of type $\textbf{Int}$.

**Behavior**: returns reminder of $a$ divides by $b$.

**Usage**

```
// Language: Clean

 3 mod -2  //  1
-3 mod -2  // -1
-3 mod  2  // -1
 3 mod  2  //  1
```

### 1.7 Exponentiation

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of type $\textbf{Int}$.

**Behavior**: raises $a$ to the $b$-th power.
Results in a run-time error if $b$ is negative

The run-time error has the following message:

```
^ (Int) called with negative power argument
```


**Usage**

```
// Language: Clean

  1  ^   1   //  1
  1  ^ (-1)  //  NOT OK :(
(-1) ^   1   // -1
(-1) ^ (-1)  //  NOT OK :(  
```

[Back to top](#)

---

## Part II: Relational Operations

### 2.1 Equal To

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $b$ are of type $\textbf{Int}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is equal to $b$.

**Usage**

```
// Language: Clean

  5  ==   2   // False
(-5) ==   2   // False
  5  == (-2)  // False
(-5) == (-2)  // False
(-2) == (-2)  // True
```

### 2.2 Not Equal To

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $b$ are of type $\textbf{Int}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is not equal to $b$.

**Usage**

```
// Language: Clean

  5  <>   2   // True
(-5) <>   2   // True
  5  <> (-2)  // True
(-5) <> (-2)  // True
(-2) <> (-2)  // False
```

### 2.3 Less Than

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $b$ are of type $\textbf{Int}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is less than $b$.

**Usage**

```
// Language: Clean

  5  <   2   // False
(-5) <   2   // True
  5  < (-2)  // False
(-5) < (-2)  // True
(-2) < (-2)  // False
```

### 2.4 Less Than Or Equal To

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $b$ are of type $\textbf{Int}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is less than or equal to $b$.

**Usage**

```
// Language: Clean

  5  <=   2   // False
(-5) <=   2   // True
  5  <= (-2)  // False
(-5) <= (-2)  // True
(-2) <= (-2)  // True
```

### 2.5 Greater Than

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $b$ are of type $\textbf{Int}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is greater than $b$.

**Usage**

```
// Language: Clean

  5  >   2   // True
(-5) >   2   // False
  5  > (-2)  // True
(-5) > (-2)  // False
(-2) > (-2)  // False
```

### 2.6 Greater Than Or Equal To

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $b$ are of type $\textbf{Int}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is greater than or equal to $b$.

**Usage**

```
// Language: Clean

  5  >=   2   // True
(-5) >=   2   // False
  5  >= (-2)  // True
(-5) >= (-2)  // False
(-2) >= (-2)  // True
```

[Back to top](#)

---

## Part III: Bitwise Operations

### 3.1 Bitwise NEGATE

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Int}$.

**Behavior**: returns bit-wise two complement of $a$.

**Usage**

```
// Language: Clean

bitnot (-5)  // -4
bitnot (-2)  //  1
bitnot   2   //  -3
bitnot   5   //  -6
```

### 3.2 Bitwise OR

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of type $\textbf{Int}$.

**Behavior**: returns bit-wise OR of $a$ and $b$.

**Usage**

```
// Language: Clean

  5  bitor   2   //  7
(-5) bitor   2   // -5
  5  bitor (-2)  // -1
(-5) bitor (-2)  // -1
```

### 3.3 Bitwise AND

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of type $\textbf{Int}$.

**Behavior**: returns bit-wise AND of $a$ and $b$.

**Usage**

```
// Language: Clean

  5  bitand   2   //  0
(-5) bitand   2   //  2
  5  bitand (-2)  //  4
(-5) bitand (-2)  // -6
```

### 3.4 Bitwise XOR

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of type $\textbf{Int}$.

**Behavior**: returns bit-wise XOR of $a$ and $b$.

**Usage**

```
// Language: Clean

  5  bitand   2   //  7
(-5) bitand   2   // -7
  5  bitand (-2)  // -5
(-5) bitand (-2)  //  5
```

### 3.5 Bitwise Left Shift

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of type $\textbf{Int}$.

**Behavior**: shifts $a$ to the left by $b$ bits.

**Usage**

```
// Language: Clean

  5  <<   2   //  20
(-5) <<   2   // -20
  5  << (-2)  //  4611686018427387904
(-5) << (-2)  // -4611686018427387904
```

### 3.6 Bitwise Right Shift

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of type $\textbf{Int}$.

**Behavior**: shifts $a$ to the right by $b$ bits.

**Usage**

```
// Language: Clean

  5  >>   2   //  1
(-5) >>   2   // -2
  5  >> (-2)  //  0
(-5) >> (-2)  // -1
```

[Back to top](#)

---

## Part IV: Basic Functions

### 4.1 sign

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Int}$,.

**Behavior**: returns sign of $a$.

**Usage**

```
// Language: Clean

sign   1   //  1
sign   0   //  0
sign (-1)  // -1
```

### 4.2 abs

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Int}$.

**Behavior**: returns absolute value of $a$.

**Usage**

```
// Language: Clean

abs   1   // 1
abs   0   // 0
abs (-1)  // 1
```

### 4.3 gcd

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of type $\textbf{Int}$.

**Behavior**: returns greatest common divisor of $a$ and $b$.

**Usage**

```
// Language: Clean

gcd   3    2   // 1
gcd (-3)   2   // 1
gcd   3  (-2)  // 1
gcd (-3) (-2)  // 1
```

### 4.4 lcm

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of type $\textbf{Int}$.

**Behavior**: returns least common multiple of $a$ and $b$.

**Usage**

```
// Language: Clean

lcm   3    2   // 6
lcm (-3)   2   // 6
lcm   3  (-2)  // 6
lcm (-3) (-2)  // 6
```

[Back to top](#)

---

## Part V: Property Functions

### 5.1 isEven

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Int}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is an even integer or not.

**Usage**

```
// Language: Clean

isEven  2  // False
isEven  1  // True
isEven  0  // True
isEven -1  // True
isEven -2  // False
```

### 5.2 isOdd

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Int}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is an odd integer or not.

**Usage**

```
// Language: Clean

isOdd  2  // True
isOdd  1  // False
isOdd  0  // False
isOdd -1  // False
isOdd -2  // True
```

[Back to top](#)

---

## Part VI: Conversions To Integers

### 6.1 Real Numbers To Integers

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Real}$, and
- $R$ is of type $\textbf{Int}$.

**Behavior**: rounds $a$ to its nearest integer.

**Usage**

```
// Language: Clean

toInt   1.5   //  2
toInt   1.4   //  1
toInt   0.0   //  0
toInt (-1.4)  // -1
toInt (-1.5)  // -2
```

### 6.2 Characters To Integers

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Char}$, and
- $R$ is of type $\textbf{Int}$.

**Behavior**: converts $a$ to its ASCII value.

**Usage**

```
// Language: Clean

toInt '1'  //  49
toInt '9'  //  59
toInt 'A'  //  65
toInt 'Z'  //  90
toInt 'a'  //  97
toInt 'z'  // 122
```

### 6.3 Strings To Integers

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{String}$, and
- $R$ is of type $\textbf{Int}$.

**Behavior**: converts $a$ to an integer.

**Usage**

```
// Language: Clean

toInt "1.0"   //  0	
toInt "1"     //  1
toInt "0"     //  0
toInt "-1"    // -1
toInt "-1.0"  //  0
```

[Back to top](#)

---