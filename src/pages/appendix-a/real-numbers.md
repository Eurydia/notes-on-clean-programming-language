---
layout: "@layouts/Blog.astro"
title: "Appendix A: Real numbers"

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
	- [Division](#division)
	- [Exponentiation](#exponentiation)
- [Relational operations](#relational-operations)
	- [Equal to](#equal-to)
	- [Not equal to](#not-equal-to)
	- [Less than](#less-than)
	- [Less than or equal to](#less-than-or-equal-to)
	- [Greater than](#greater-than)
	- [Greater than or equal to](#greater-than-or-equal-to)
- [Basic functions](#basic-functions)
	- [sign](#sign)
	- [abs](#abs)
	- [entier](#entier)
	- [ln](#ln)
	- [log10](#log10)
	- [exp](#exp)
	- [sqrt](#sqrt)
- [Trigonometric functions](#trigonometric-functions)
	- [sin](#sin)
	- [cos](#cos)
	- [tan](#tan)
	- [asin](#asin)
	- [acos](#acos)
	- [atan](#atan)
	- [sinh](#sinh)
	- [cosh](#cosh)
	- [tanh](#tanh)
	- [asinh](#asinh)
	- [acosh](#acosh)
	- [atanh](#atanh)
- [Property functions](#property-functions)
	- [isNaN](#isNaN)
	- [isInfinity](#isInfinity)
	- [isFinite](#isIFnite)
- [Conversions to real numbers](#conversions-to-real-numbers)
	- [Integers to real numbers](#integers-to-real-numbers)
	- [Strings to real numbers](#strings-to-real-numbers)
 
## Arithmetic operations

### Negation

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: inverts the sign of $a$.

**Usage**

```
// Language: Clean

~  1.0  // -1.0
~  0.0  //  0.0
~(-1.0) //  1.0
```

### Addition

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$,
- $b$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: adds $a$ and $b$ together.

**Usage**

```
// Language: Clean

  2.5  +   1.5  //  4.0
  2.5  + (-1.5) //  1.5
(-2.5) +   1.5  // -1.0
(-2.5) + (-1.5) // -4.0
```

### Subtraction

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$,
- $b$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: subtracts $b$ from $a$.

**Usage**

```
// Language: Clean

  2.5  -   1.5  //  1.0
  2.5  - (-1.5) //  4.0
(-2.5) -   1.5  // -1.5
(-2.5) - (-1.5) // -1.0
```

### Multiplication

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$,
- $b$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: multiplies $a$ with $b$.

**Usage**

```
// Language: Clean

  2.5  *   1.5  //  3.75
  2.5  * (-1.5) // -3.75
(-2.5) *   1.5  // -3.75
(-2.5) * (-1.5) //  3.75
```

### Division

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$,
- $b$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: divides $a$ with $b$. 

**Usage**

```
// Language: Clean

  2.5  /   1.5  //  1.66666666666667
  2.5  / (-1.5) // -1.66666666666667
(-2.5) /   1.5  // -1.66666666666667
(-2.5) / (-1.5) //  1.66666666666667
  1.0  /   0.0  //  #INF
(-1.0) /   0.0  // -#INF
```

### Exponentiation

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$,
- $b$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: raises $a$ to the $b$-th power.

**Usage**

```
// Language: Clean

  2.5  ^   1.5  //  3.95284707521047
  2.5  ^ (-1.5) //  0.25298221281347
(-2.5) ^   1.5  //  #NAN
(-2.5) ^ (-1.5) //  #NAN
  0.0  ^   0.0  //  1.0
  0.0  ^   1.0  //  0.0
  0.0  ^ (-1.0) //  #INF
```

[Back to top](#)

---

## Relational operations

###  Equal to

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$,
- $b$ is of type $\text{Real}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is equal to $b$.

**Usage**

```
// Language: Clean

  5.0  ==   2.0  // False
(-5.0) ==   2.0  // False
  5.0  == (-2.0) // False
(-5.0) == (-2.0) // False
(-2.0) == (-2.0) // True
```

### Not equal to

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$,
- $b$ is of type $\text{Real}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is not equal to $b$.

**Usage**

```
// Language: Clean

  5.0  <>   2.0  // True
(-5.0) <>   2.0  // True
  5.0  <> (-2.0) // True
(-5.0) <> (-2.0) // True
(-2.0) <> (-2.0) // False
```

### Less than

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$,
- $b$ is of type $\text{Real}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is less than $b$.

**Usage**

```
// Language: Clean

  5.0  <   2.0  // False
(-5.0) <   2.0  // True
  5.0  < (-2.0) // False
(-5.0) < (-2.0) // True
(-2.0) < (-2.0) // False
```

### Less than or equal to

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$,
- $b$ is of type $\text{Real}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is less than or equal to $b$.

**Usage**

```
// Language: Clean

  5.0  <=   2.0  // False
(-5.0) <=   2.0  // True
  5.0  <= (-2.0) // False
(-5.0) <= (-2.0) // True
(-2.0) <= (-2.0) // True
```

### Greater than

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$,
- $b$ is of type $\text{Real}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is greater than $b$.

**Usage**

```
// Language: Clean

  5.0  >   2.0  // True
(-5.0) >   2.0  // False
  5.0  > (-2.0) // True
(-5.0) > (-2.0) // False
(-2.0) > (-2.0) // False
```

### Greater than or equal to

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$,
- $b$ is of type $\text{Real}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is greater than or equal to $b$.

**Usage**

```
// Language: Clean

  5.0  >=   2.0  // True
(-5.0) >=   2.0  // False
  5.0  >= (-2.0) // True
(-5.0) >= (-2.0) // False
(-2.0) >= (-2.0) // True
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
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: returns sign of $a$.

**Usage**

```
// Language: Clean

sign   1.0  //  1
sign   0.0  //  0
sign (-1.0) // -1
```

### abs

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: returns absolute value of $a$.

**Usage**

```
// Language: Clean

abs   1.0 //  1.0
abs   0.0 //  0.0
abs (-1.0) // 1.0
```

### entier

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Int}$.

**Behavior**: returns floor of $a$.

**Usage**

```
// Language: Clean

entier   1.5  //  1
entier   0.0  //  0
entier (-1.5) // -2
```

### ln

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: returns natural logarithm of $a$.

**Usage**

```
// Language: Clean

ln   2.5  //  0.916290731874155
ln   1.5  // -1.405465108108164
ln   0.0  // -#INF
ln (-1.5) //  #NAN
ln (-2.5) //  #NAN
```
### log10

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: returns logarithm base $10$ of $a$.

**Usage**

```
// Language: Clean

log10   2.5  //  0.397940008672038
log10   1.5  // -0.176091259055681
log10   0.0  // -#INF
log10 (-1.5) //  #NAN
log10 (-2.5) //  #NAN
```

### exp

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: raises $e$ to $a$-th power.

**Usage**

```
// Language: Clean

exp   2.5  // 12.1824939607035
exp   1.5  //  4.48168907033806
exp   0.0  //  1.0
exp (-1.5) //  0.22313016014843
exp (-2.5) //  0.0820849986238988
```

### sqrt

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: returns square root of $a$.

**Usage**

```
// Language: Clean

sqrt   2.5  // 1.58113883008419
sqrt   1.5  // 1.22474487139159
sqrt   0.0  // 0.0
sqrt (-1.5) // #NAN
sqrt (-2.5) // #NAN
```

[Back to top](#)

---

## Trigonometric functions

### sin

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: returns $\sin(a)$ .

**Usage**

```
// Language: Clean

sin   2.5  //  0.598472144103956
sin   1.5  //  0.997494986604054
sin   0.0  //  0.0
sin (-1.5) // -0.997494986604054
sin (-2.5) // -0.598472144103956
```

### cos

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: returns $\cos(a)$.

**Usage**

```
// Language: Clean

cos   2.5  // -0.801143615546934
cos   1.5  //  0.0707372016677029
cos   0.0  //  1.0
cos (-1.5) //  0.0707372016677029
cos (-2.5) // -0.801143615546934
```

### tan

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: returns $\tan(a)$.

**Usage**

```
// Language: Clean

tan   2.5  // - 0.74702229723866
tan   1.5  //  14.1014199471717
tan   0.0  //   0.0
tan (-1.5) // -14.1014199471717
tan (-2.5) //   0.74702229723866
```

### asin

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: returns ${\sin}^{-1}(a)$.
The domain is in interval $[-1,1]$.

**Usage**

```
// Language: Clean

asin   2.5  //  #NAN
asin   1.5  //  #NAN
asin   0.5  //  0.523598775598299
asin   0.0  //  0.0
asin (-0.5) // -0.523598775598299
asin (-1.5) //  #NAN
asin (-2.5) //  #NAN
```

### acos

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: returns ${\cos}^{-1}(a)$.
The domain is in interval $[-1,1]$.

**Usage**

```
// Language: Clean

acos   2.5  // #NAN
acos   1.5  // #NAN
acos   0.5  // 1.0471975511966
acos   0.0  // 1.5707963267949
acos (-0.5) // 2.0943951023932
acos (-1.5) // #NAN
acos (-2.5) // #NAN
```

### atan

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: returns ${\tan}^{-1}(a)$.

**Usage**

```
// Language: Clean

acos   2.5  //  1.19028994968253
acos   1.5  //  0.982793723247329
acos   0.5  //  0.463647609000806
acos   0.0  //  0.0
acos (-0.5) // -0.463647609000806
acos (-1.5) // -0.982793723247329
acos (-2.5) // -1.19028994968253
```

### sinh

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: returns $\sinh(a)$.

**Usage**

```
// Language: Clean

sinh   2.5  //  6.05020448103979
sinh   1.5  //  2.12927945509482
sinh   0.5  //  0.521095305493747
sinh   0.0  //  0.0
sinh (-0.5) // -0.521095305493747
sinh (-1.5) // -2.12927945509482
sinh (-2.5) // -6.05020448103979
```

### cosh

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: returns $\cosh(a)$.

**Usage**

```
// Language: Clean

cosh   2.5  //  6.13228947966369
cosh   1.5  //  2.35240961524325
cosh   0.5  //  1.12762596520638
cosh   0.0  //  1.0
cosh (-0.5) // -1.12762596520638
cosh (-1.5) // -2.35240961524325
cosh (-2.5) // -6.13228947966369
```

### tanh

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: returns $\tanh(a)$.

**Usage**

```
// Language: Clean

tanh   2.5  //  0.98661429815143
tanh   1.5  //  0.905148253644866
tanh   0.5  //  0.46211715726001
tanh   0.0  //  0.0
tanh (-0.5) // -0.46211715726001
tanh (-1.5) // -0.905148253644866
tanh (-2.5) // -0.98661429815143
```

### asinh

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: returns ${\sinh}^{-1}(a)$.

**Usage**

```
// Language: Clean

asinh   2.5  //  1.6472311463711
asinh   1.5  //  1.19476321728711
asinh   0.5  //  0.481211825059604
asinh   0.0  //  0.0
asinh (-0.5) // -0.481211825059604
asinh (-1.5) // -1.19476321728711
asinh (-2.5) // -1.6472311463711
```

### acosh

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: returns ${\cosh}^{-1}(a)$.

**Usage**

```
// Language: Clean

cosh   2.5  // 1.56679923697241
cosh   1.5  // 0.962423650119207
cosh   0.5  // #NAN
cosh   0.0  // #NAN
cosh (-0.5) // #NAN
cosh (-1.5) // #NAN
cosh (-2.5) // #NAN
```

### atanh

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: returns ${\tanh}^{-1}(a)$.

**Usage**

```
// Language: Clean

atanh   2.5  //  #NAN
atanh   1.5  //  #NAN
atanh   0.5  //  0.549306144334055
atanh   0.0  //  0.0
atanh (-0.5) // -0.549306144334055
atanh (-1.5) //  #NAN
atanh (-2.5) //  #NAN
```

[Back to top](#)

---

## Property functions

### isNaN

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is $\text{NaN}$ or not.

**Usage**

```
// Language: Clean

isNaN  2.0 // False
isNaN  0.0 // False
isNaN (sqrt (-1.0)) // True
isNaN (ln   (-1.0)) // True
isNaN ((-1.0) /   0.0)  // False
isNaN (  0.0  ^ (-1.0)) // False
```

### isInfinity

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is an infinite representation or not.

**Usage**

```
// Language: Clean

isInfinity 2.0 // False
isInfinity 0.0 // False
isInfinity (sqrt (-1.0)) // False
isInfinity (ln   (-1.0)) // False
isInfinity ((-1.0) /   0.0)  // True
isInfinity (  0.0  ^ (-1.0)) // True
```

### isFinite

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Real}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is finite or not.

**Usage**

```
// Language: Clean

isFinite 2.0 // True
isFinite 0.0 // True
isFinite (sqrt (-1.0)) // False
isFinite (ln   (-1.0)) // False
isFinite ((-1.0) /   0.0)  // False
isFinite (  0.0  ^ (-1.0)) // False
```

[Back to top](#)

---


## Conversions to real numbers

### Integers to real numbers


**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: converts $a$ to a real number.

**Usage**

```
// Language: Clean

toReal   2  //  2.0
toReal   1  //  1.0
toReal   0  //  0.0
toReal (-1) // -1.0
toReal (-2) // -2.0
```

### Strings to real numbers

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{String}$, and
- $R$ is of type $\text{Real}$.

**Behavior**: converts $a$ to an real number.

**Usage**

```
// Language: Clean

toReal "1.0"  //  1.0
toReal "1"    //  1.0
toReal "0"    //  0.0
toReal "-1"   // -1.0
toReal "-1.0" //  1.0
```

[Back to top](#)

---