---
layout: "@layouts/Blog.astro"
title: "Appendix A: StdReal"

Last updated: MAY 13th, 2023
Revisions: 3
Data of last revision: MAY 13th, 2023
---

## Contents

- [Part I: Arithmetic Operations](#part-i-arithmetic-operations)
- [Part II: Relational Operations](#part-ii-relational-operations)
- [Part: III: Basic Functions](#part-iii-basic-functions)
- [Part IV: Trigonometric functions](#part-iv-trigonometric-functions)
- [Part V: Property Functions](#part-v-property-functions)
- [Part VI: Conversions To Real Numbers](#part-vi-conversions-to-real-numbers)
 
## Part I: Arithmetic Operations

### 1.1 Negation

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Real}$.

**Behavior**: inverts the sign of $a$.

**Usage**

```
// Language: Clean

~  1.0   // -1.0
~  0.0   //  0.0
~(-1.0)  //  1.0
```

### 1.2 Addition

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, $R$ are of type $\textbf{Real}$.

**Behavior**: adds $a$ and $b$ together.

**Usage**

```
// Language: Clean

  2.5  +   1.5   //  4.0
  2.5  + (-1.5)  //  1.5
(-2.5) +   1.5   // -1.0
(-2.5) + (-1.5)  // -4.0
```

### 1.3 Subtraction

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, $R$ are of type $\textbf{Real}$.

**Behavior**: subtracts $b$ from $a$.

**Usage**

```
// Language: Clean

  2.5  -   1.5   //  1.0
  2.5  - (-1.5)  //  4.0
(-2.5) -   1.5   // -1.5
(-2.5) - (-1.5)  // -1.0
```

### 1.4 Multiplication

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, $R$ are of type $\textbf{Real}$.

**Behavior**: multiplies $a$ with $b$.

**Usage**

```
// Language: Clean

  2.5  *   1.5   //  3.75
  2.5  * (-1.5)  // -3.75
(-2.5) *   1.5   // -3.75
(-2.5) * (-1.5)  //  3.75
```

### 1.5 Division

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, $R$ are of type $\textbf{Real}$.

**Behavior**: divides $a$ with $b$. 

**Usage**

```
// Language: Clean

  2.5  /   1.5   //  1.66666666666667
  2.5  / (-1.5)  // -1.66666666666667
(-2.5) /   1.5   // -1.66666666666667
(-2.5) / (-1.5)  //  1.66666666666667
  1.0  /   0.0   //  #INF
(-1.0) /   0.0   // -#INF
```

### 1.6 Exponentiation

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, $R$ are of type $\textbf{Real}$.

**Behavior**: raises $a$ to the $b$-th power.

**Usage**

```
// Language: Clean

  2.5  ^   1.5   //  3.95284707521047
  2.5  ^ (-1.5)  //  0.25298221281347
(-2.5) ^   1.5   //  #NAN
(-2.5) ^ (-1.5)  //  #NAN
  0.0  ^   0.0   //  1.0
  0.0  ^   1.0   //  0.0
  0.0  ^ (-1.0)  //  #INF
```

[Back to top](#)

---

## Part II: Relational Operations

###  2.1 Equal To

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $b$ are of type $\textbf{Real}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is equal to $b$.

**Usage**

```
// Language: Clean

  5.0  ==   2.0   // False
(-5.0) ==   2.0   // False
  5.0  == (-2.0)  // False
(-5.0) == (-2.0)  // False
(-2.0) == (-2.0)  // True
```

### 2.2 Not Equal To

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $b$ are of type $\textbf{Real}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is not equal to $b$.

**Usage**

```
// Language: Clean

  5.0  <>   2.0   // True
(-5.0) <>   2.0   // True
  5.0  <> (-2.0)  // True
(-5.0) <> (-2.0)  // True
(-2.0) <> (-2.0)  // False
```

### 2.3 Less Than

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $b$ are of type $\textbf{Real}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is less than $b$.

**Usage**

```
// Language: Clean

  5.0  <   2.0   // False
(-5.0) <   2.0   // True
  5.0  < (-2.0)  // False
(-5.0) < (-2.0)  // True
(-2.0) < (-2.0)  // False
```

### 2.4 Less Than Or Equal To

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $b$ are of type $\textbf{Real}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is less than or equal to $b$.

**Usage**

```
// Language: Clean

  5.0  <=   2.0   // False
(-5.0) <=   2.0   // True
  5.0  <= (-2.0)  // False
(-5.0) <= (-2.0)  // True
(-2.0) <= (-2.0)  // True
```

### 2.5 Greater Than

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $b$ are of type $\textbf{Real}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is greater than $b$.

**Usage**

```
// Language: Clean

  5.0  >   2.0   // True
(-5.0) >   2.0   // False
  5.0  > (-2.0)  // True
(-5.0) > (-2.0)  // False
(-2.0) > (-2.0)  // False
```

### 2.6 Greater Than Or Equal To

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $b$ are of type $\textbf{Real}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is greater than or equal to $b$.

**Usage**

```
// Language: Clean

  5.0  >=   2.0   // True
(-5.0) >=   2.0   // False
  5.0  >= (-2.0)  // True
(-5.0) >= (-2.0)  // False
(-2.0) >= (-2.0)  // True
```

[Back to top](#)

---

## Part III: Basic Functions

### 3.1 sign

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Real}$.

**Behavior**: returns sign of $a$.

**Usage**

```
// Language: Clean

sign   1.0   //  1
sign   0.0   //  0
sign (-1.0)  // -1
```

### 3.2 abs

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Real}$.

**Behavior**: returns absolute value of $a$.

**Usage**

```
// Language: Clean

abs   1.0   //  1.0
abs   0.0   //  0.0
abs (-1.0)  // 1.0
```

### 3.3 entier

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Real}$, and
- $R$ is of type $\textbf{Int}$.

**Behavior**: returns floor of $a$.

**Usage**

```
// Language: Clean

entier   1.5   //  1
entier   0.0   //  0
entier (-1.5)  // -2
```

### 3.4 ln

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Real}$.

**Behavior**: returns natural logarithm of $a$.

**Usage**

```
// Language: Clean

ln   2.5   //  0.916290731874155
ln   1.5   // -1.405465108108164
ln   0.0   // -#INF
ln (-1.5)  //  #NAN
ln (-2.5)  //  #NAN
```
### 3.5 log10

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Real}$.

**Behavior**: returns logarithm base $10$ of $a$.

**Usage**

```
// Language: Clean

log10   2.5   //  0.397940008672038
log10   1.5   // -0.176091259055681
log10   0.0   // -#INF
log10 (-1.5)  //  #NAN
log10 (-2.5)  //  #NAN
```

### 3.6 exp

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Real}$.

**Behavior**: raises $e$ to $a$-th power.

**Usage**

```
// Language: Clean

exp   2.5   // 12.1824939607035
exp   1.5   //  4.48168907033806
exp   0.0   //  1.0
exp (-1.5)  //  0.22313016014843
exp (-2.5)  //  0.0820849986238988
```

### 3.7 sqrt

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Real}$.

**Behavior**: returns square root of $a$.

**Usage**

```
// Language: Clean

sqrt   2.5   // 1.58113883008419
sqrt   1.5   // 1.22474487139159
sqrt   0.0   // 0.0
sqrt (-1.5)  // #NAN
sqrt (-2.5)  // #NAN
```

[Back to top](#)

---

## Part IV: Trigonometric Functions

### 4.1 sin

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Real}$.

**Behavior**: returns $\sin(a)$ .

**Usage**

```
// Language: Clean

sin   2.5   //  0.598472144103956
sin   1.5   //  0.997494986604054
sin   0.0   //  0.0
sin (-1.5)  // -0.997494986604054
sin (-2.5)  // -0.598472144103956
```

### 4.2 cos

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Real}$.

**Behavior**: returns $\cos(a)$.

**Usage**

```
// Language: Clean

cos   2.5   // -0.801143615546934
cos   1.5   //  0.0707372016677029
cos   0.0   //  1.0
cos (-1.5)  //  0.0707372016677029
cos (-2.5)  // -0.801143615546934
```

### 4.3 tan

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Real}$.

**Behavior**: returns $\tan(a)$.

**Usage**

```
// Language: Clean

tan   2.5   // - 0.74702229723866
tan   1.5   //  14.1014199471717
tan   0.0   //   0.0
tan (-1.5)  // -14.1014199471717
tan (-2.5)  //   0.74702229723866
```

### 4.4 asin

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Real}$.

**Behavior**: returns ${\sin}^{-1}(a)$.
The domain is in interval $[-1,1]$.

**Usage**

```
// Language: Clean

asin   2.5   //  #NAN
asin   1.5   //  #NAN
asin   0.5   //  0.523598775598299
asin   0.0   //  0.0
asin (-0.5)  // -0.523598775598299
asin (-1.5)  //  #NAN
asin (-2.5)  //  #NAN
```

### 4.5 acos

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Real}$.

**Behavior**: returns ${\cos}^{-1}(a)$.
The domain is in interval $[-1,1]$.

**Usage**

```
// Language: Clean

acos   2.5   // #NAN
acos   1.5   // #NAN
acos   0.5   // 1.0471975511966
acos   0.0   // 1.5707963267949
acos (-0.5)  // 2.0943951023932
acos (-1.5)  // #NAN
acos (-2.5)  // #NAN
```

### 4.6 atan

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Real}$.

**Behavior**: returns ${\tan}^{-1}(a)$.

**Usage**

```
// Language: Clean

acos   2.5   //  1.19028994968253
acos   1.5   //  0.982793723247329
acos   0.5   //  0.463647609000806
acos   0.0   //  0.0
acos (-0.5)  // -0.463647609000806
acos (-1.5)  // -0.982793723247329
acos (-2.5)  // -1.19028994968253
```

### 4.7 sinh

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Real}$.

**Behavior**: returns $\sinh(a)$.

**Usage**

```
// Language: Clean

sinh   2.5   //  6.05020448103979
sinh   1.5   //  2.12927945509482
sinh   0.5   //  0.521095305493747
sinh   0.0   //  0.0
sinh (-0.5)  // -0.521095305493747
sinh (-1.5)  // -2.12927945509482
sinh (-2.5)  // -6.05020448103979
```

### 4.8 cosh

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Real}$.

**Behavior**: returns $\cosh(a)$.

**Usage**

```
// Language: Clean

cosh   2.5   //  6.13228947966369
cosh   1.5   //  2.35240961524325
cosh   0.5   //  1.12762596520638
cosh   0.0   //  1.0
cosh (-0.5)  // -1.12762596520638
cosh (-1.5)  // -2.35240961524325
cosh (-2.5)  // -6.13228947966369
```

### 4.9 tanh

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Real}$.

**Behavior**: returns $\tanh(a)$.

**Usage**

```
// Language: Clean

tanh   2.5   //  0.98661429815143
tanh   1.5   //  0.905148253644866
tanh   0.5   //  0.46211715726001
tanh   0.0   //  0.0
tanh (-0.5)  // -0.46211715726001
tanh (-1.5)  // -0.905148253644866
tanh (-2.5)  // -0.98661429815143
```

### 4.10 asinh

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Real}$.

**Behavior**: returns ${\sinh}^{-1}(a)$.

**Usage**

```
// Language: Clean

asinh   2.5   //  1.6472311463711
asinh   1.5   //  1.19476321728711
asinh   0.5   //  0.481211825059604
asinh   0.0   //  0.0
asinh (-0.5)  // -0.481211825059604
asinh (-1.5)  // -1.19476321728711
asinh (-2.5)  // -1.6472311463711
```

### 4.11 acosh

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Real}$.

**Behavior**: returns ${\cosh}^{-1}(a)$.

**Usage**

```
// Language: Clean

cosh   2.5   // 1.56679923697241
cosh   1.5   // 0.962423650119207
cosh   0.5   // #NAN
cosh   0.0   // #NAN
cosh (-0.5)  // #NAN
cosh (-1.5)  // #NAN
cosh (-2.5)  // #NAN
```

### 4.12 atanh

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Real}$.

**Behavior**: returns ${\tanh}^{-1}(a)$.

**Usage**

```
// Language: Clean

atanh   2.5   //  #NAN
atanh   1.5   //  #NAN
atanh   0.5   //  0.549306144334055
atanh   0.0   //  0.0
atanh (-0.5)  // -0.549306144334055
atanh (-1.5)  //  #NAN
atanh (-2.5)  //  #NAN
```

[Back to top](#)

---

## Part V: Property Functions

### 5.1 isNaN

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Real}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is $\text{NaN}$ or not.

**Usage**

```
// Language: Clean

isNaN  2.0               // False
isNaN  0.0               // False
isNaN (sqrt (-1.0))      // True
isNaN (ln   (-1.0))      // True
isNaN ((-1.0) /   0.0)   // False
isNaN (  0.0  ^ (-1.0))  // False
```

### 5.2 isInfinity

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Real}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is an infinite representation or not.

**Usage**

```
// Language: Clean

isInfinity 2.0                // False
isInfinity 0.0                // False
isInfinity (sqrt (-1.0))      // False
isInfinity (ln   (-1.0))      // False
isInfinity ((-1.0) /   0.0)   // True
isInfinity (  0.0  ^ (-1.0))  // True
```

### 5.3 isFinite

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Real}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is finite or not.

**Usage**

```
// Language: Clean

isFinite 2.0                // True
isFinite 0.0                // True
isFinite (sqrt (-1.0))      // False
isFinite (ln   (-1.0))      // False
isFinite ((-1.0) /   0.0)   // False
isFinite (  0.0  ^ (-1.0))  // False
```

[Back to top](#)

---


## Part VI: Conversions To Real Numbers

### 6.1 Integers To Real Numbers

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$, and
- $R$ is of type $\textbf{Real}$.

**Behavior**: converts $a$ to a real number.

**Usage**

```
// Language: Clean

toReal   2   //  2.0
toReal   1   //  1.0
toReal   0   //  0.0
toReal (-1)  // -1.0
toReal (-2)  // -2.0
```

### 6.2 Strings To Real Numbers

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{String}$, and
- $R$ is of type $\textbf{Real}$.

**Behavior**: converts $a$ to an real number.

**Usage**

```
// Language: Clean

toReal "1.0"   //  1.0
toReal "1"     //  1.0
toReal "0"     //  0.0
toReal "-1"    // -1.0
toReal "-1.0"  //  1.0
```

[Back to top](#)

---