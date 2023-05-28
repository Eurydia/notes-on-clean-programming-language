---
title: "Appendix A: StdInt"
---

## Arithmetic Operations 

### Negation

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

### Addition

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

### Subtraction

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

### Multiplication

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

### Floor Division

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

### Reminder Division

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

### Exponentiation

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

---

## Relational Operations

### Equal To

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

### Not Equal To

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

### Less Than

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

### Less Than Or Equal To

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

### Greater Than

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

### Greater Than Or Equal To

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

---

## Bitwise Operations

### Bitwise NEGATE

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

### Bitwise OR

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

### Bitwise AND

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

### Bitwise XOR

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

### Bitwise Left Shift

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

### Bitwise Right Shift

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

---

## Basic Functions

### `sign`

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

### `abs`

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

### `gcd`

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

### `lcm`

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

---

## Property Functions

### `isEven`

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

### `isOdd`

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

---

## Conversions To Integers

### Real Numbers To Integers

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

### Characters To Integers

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

### Strings To Integers

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{String}$, and
- $R$ is of type $\textbf{Int}$.

**Behavior**: converts a string $a$ to an integer. 
Returns $0$ if a decimal place is present.

**Usage**

```
// Language: Clean

toInt "1.0"   //  0	
toInt "1"     //  1
toInt "0"     //  0
toInt "-1"    // -1
toInt "-1.0"  //  0
```
