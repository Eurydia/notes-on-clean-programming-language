---
layout: "@layouts/Blog.astro"
title: "Appendix A: Integers"

Last updated: April 26th, 2023
Revisions: 2
Data of last revision: 12 APR 2023
---

## Table of contents

- [Arithmetic operations](#arithmetic-operations)
- [Relational operations](#relational-operations)
- [Bitwise operations](#bitwise-operations)
- [Standard functions](#standard-functions)
- [Property functions](#property-functions)
 
## Arithmetic operations 

### Negation

**Signature**: $A_{\text{Int}}\rightarrow\text{Int}$.

**Behavior**: inverts the sign of $A$.

**Usage**

```
// Language: Clean
 
~  0  //  0
~  1  // -1
~(-1) //  1
```

### Addition

**Signature**: $A_{\text{Int}}{~}B_{\text{Int}}\rightarrow\text{Int}$.

**Behavior**: adds $A$ and $B$ together.

**Usage**

```
// Language: Clean

  1  +   1  //  2
  1  + (-1) //  0
(-1) +   1  //  0
(-1) + (-1) // -2
```

### Subtraction

**Signature**: $A_{\text{Int}}{~}B_{\text{Int}}\rightarrow\text{Int}$.

**Behavior**: subtracts $B$ from $A$.

**Usage**

```
// Language: Clean

  1  -   1  //  0
  1  - (-1) //  2
(-1) -   1  // -2
(-1) - (-1) //  0
```

### Multiplication

**Signature**: $A_{\text{Int}}\;B_{\text{Int}}\rightarrow\text{Int}$.

**Behavior**: multiplies $A$ with $B$.

**Usage**

```
// Language: Clean

  1  *   1  //  1
  1  * (-1) // -1
(-1) *   1  // -1
(-1) * (-1) //  1
```

### Floor division

**Signature**: $A_{\text{Int}}{~}B_{\text{Int}}\rightarrow\text{Int}$.

**Behavior**: floor divides $A$ with $B$.
Crashes if $B$ is $0$.

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

**Signature**: $A_{\text{Int}}{~}B_{\text{Int}}\rightarrow\text{Int}$.

**Behavior**: returns modulo of $A$ divides by $B$.

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

**Signature**: $A_{\text{Int}}{~}B_{\text{Int}}\rightarrow\text{Int}$.

**Behavior**: returns $A$ raised to the $B$-th power.
A run-time error will be thrown if $B$ is negative.

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

**Signature**: $A_{\text{Int}}{~}B_{\text{Int}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is equal to $B$.

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

**Signature**: $A_{\text{Int}}{~}B_{\text{Int}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is not equal to $B$.

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

**Signature**: $A_{\text{Int}}{~}B_{\text{Int}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is less than $B$.

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

**Signature**: $A_{\text{Int}}{~}B_{\text{Int}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is less than or equal to $B$.

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

**Signature**: $A_{\text{Int}}{~}B_{\text{Int}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is greater than $B$.

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

**Signature**: $A_{\text{Int}}{~}B_{\text{Int}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is greater than or equal to $B$.

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

### Bitwise NOT

**Signature**: $A_{\text{Int}}\rightarrow\text{Int}$.

**Behavior**: returns bit-wise one complement of $A$.

**Usage**

```
// Language: Clean

bitnot (-5) // -4
bitnot (-2) //  1
bitnot   2 //  -3
bitnot   5 //  -6
```

### Bitwise OR

**Signature**: $A_{\text{Int}}{~}B_{\text{Int}}\rightarrow\text{Int}$.

**Behavior**: returns bit-wise OR of $A$ and $B$.

**Usage**

```
// Language: Clean

  5  bitor   2  //  7
(-5) bitor   2  // -5
  5  bitor (-2) // -1
(-5) bitor (-2) // -1
```

### Bitwise AND

**Signature**: $A_{\text{Int}}{~}B_{\text{Int}}\rightarrow\text{Int}$.

**Behavior**: returns bit-wise AND of $A$ and $B$.

**Usage**

```
// Language: Clean

  5  bitand   2  //  0
(-5) bitand   2  //  2
  5  bitand (-2) //  4
(-5) bitand (-2) // -6
```

### Bitwise XOR

**Signature**: $A_{\text{Int}}{~}B_{\text{Int}}\rightarrow\text{Int}$.

**Behavior**: returns bit-wise XOR of $A$ and $B$.

**Usage**

```
// Language: Clean

  5  bitand   2  //  7
(-5) bitand   2  // -7
  5  bitand (-2) // -5
(-5) bitand (-2) //  5
```

### Bitwise left shift

**Signature**: $A_{\text{Int}}{~}B_{\text{Int}}\rightarrow\text{Int}$.

**Behavior**: returns $A$ shifted to the left by $B$ bits.

**Usage**

```
// Language: Clean

  5  <<   2  //  20
(-5) <<   2  // -20
  5  << (-2) //  4611686018427387904
(-5) << (-2) // -4611686018427387904
```

### Bitwise right shift

**Signature**: $A_{\text{Int}}{~}B_{\text{Int}}\rightarrow\text{Int}$.

**Behavior**: returns $A$ shifted to the right by $B$ bits.

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

## Standard functions

### Sign function

**Signature**: $A_{\text{Int}}\rightarrow\text{Int}$.

**Behavior**: returns the sign of $A$.

**Usage**

```
// Language: Clean

sign   1  //  1
sign   0  //  0
sign (-1) // -1
```

### Absolute function

**Signature**: $A_{\text{Int}}\rightarrow\text{Int}$.

**Behavior**: returns $\lvert{A}\rvert$.

**Usage**

```
// Language: Clean

abs   1  // 1
abs   0  // 0
abs (-1) // 1
```

### Greatest common divisor

**Signature**: $A_{\text{Int}}{~}B_{\text{Int}}\rightarrow\text{Int}$.

**Behavior**: returns the greatest common divisor of $A$ and $B$.

**Usage**

```
// Language: Clean

gcd   3    2  // 1
gcd (-3)   2  // 1
gcd   3  (-2) // 1
gcd (-3) (-2) // 1
```

### Least common multiple

**Signature**: $A_{\text{Int}}{~}B_{\text{Int}}\rightarrow\text{Int}$.

**Behavior**: returns the least common multiple of $A$ and $B$.

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

### Even property

**Signature**: $A_{\text{Int}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is an even integer or not.

**Usage**

```
// Language: Clean

isEven  2 // False
isEven  1 // True
isEven  0 // True
isEven -1 // True
isEven -2 // False
```

### Odd property

**Signature**: $A_{\text{Int}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is an odd integer or not.

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