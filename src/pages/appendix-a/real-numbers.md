---
layout: "@layouts/Blog.astro"
title: "Appendix A: Real numbers"

Last updated: April 26th, 2023
Revisions: 2
Data of last revision: 12 APR 2023
---

## Table of contents

- [Arithmetic operations](#arithmetic-operations)
- [Relational operations](#relational-operations)
- [Standard functions](#standard-functions)
- [Trigonometric functions](#trigonometric-functions)
 
## Arithmetic operations

### Negation

**Signature**: $A_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: inverts the sign of $A$.

**Usage**

```
// Language: Clean

~  1.0  // -1.0
~  0.0  //  0.0
~(-1.0) //  1.0
```

### Addition

**Signature**: $A_{\text{Real}}{~}B_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: adds $A$ and $B$ together.

**Usage**

```
// Language: Clean

  2.5  +   1.5  //  4.0
  2.5  + (-1.5) //  1.5
(-2.5) +   1.5  // -1.0
(-2.5) + (-1.5) // -4.0
```

### Subtraction

**Signature**: $A_{\text{Real}}{~}B_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: subtracts $B$ from $A$.

**Usage**

```
// Language: Clean

  2.5  -   1.5  //  1.0
  2.5  - (-1.5) //  4.0
(-2.5) -   1.5  // -1.5
(-2.5) - (-1.5) // -1.0
```

### Multiplication

**Signature**: $A_{\text{Real}}\;B_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: multiplies $A$ with $B$.

**Usage**

```
// Language: Clean

  2.5  *   1.5  //  3.75
  2.5  * (-1.5) // -3.75
(-2.5) *   1.5  // -3.75
(-2.5) * (-1.5) //  3.75
```

### Division

**Signature**: $A_{\text{Real}}{~}B_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: divides $A$ with $B$. 

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

**Signature**: $A_{\text{Real}}{~}B_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: raises $A$ to the $B$-th power.

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

**Signature**: $A_{\text{Real}}{~}B_{\text{Real}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is equal to $B$.

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

**Signature**: $A_{\text{Real}}{~}B_{\text{Real}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is not equal to $B$.

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

**Signature**: $A_{\text{Real}}{~}B_{\text{Real}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is less than $B$.

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

**Signature**: $A_{\text{Real}}{~}B_{\text{Real}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is less than or equal to $B$.

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

**Signature**: $A_{\text{Real}}{~}B_{\text{Real}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is greater than $B$.

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

**Signature**: $A_{\text{Real}}{~}B_{\text{Real}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is greater than or equal to $B$.

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

## Standard functions

### Sign function

**Signature**: $A_{\text{Real}}\rightarrow\text{Int}$.

**Behavior**: returns the sign of $A$.

**Usage**

```
// Language: Clean

sign   1.0  //  1
sign   0.0  //  0
sign (-1.0) // -1
```

### Absolute function

**Signature**: $A_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: returns $\lvert{A}\rvert$.

**Usage**

```
// Language: Clean

abs   1.0 //  1.0
abs   0.0 //  0.0
abs (-1.0) // 1.0
```

### Floor function

**Signature**: $A_{\text{Real}}\rightarrow\text{Int}$.

**Behavior**: returns $\lfloor{A}\rfloor$.

**Usage**

```
// Language: Clean

entier   1.5  //  1
entier   0.0  //  0
entier (-1.5) // -2
```

### Natural logarithm

**Signature**: $A_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: returns $\ln A$.

**Usage**

```
// Language: Clean

ln   2.5  //  0.916290731874155
ln   1.5  // -1.405465108108164
ln   0.0  // -#INF
ln (-1.5) //  #NAN
ln (-2.5) //  #NAN
```
### Common logarithm

**Signature**: $A_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: returns $\log_{10}A$.

**Usage**

```
// Language: Clean

log10   2.5  //  0.397940008672038
log10   1.5  // -0.176091259055681
log10   0.0  // -#INF
log10 (-1.5) //  #NAN
log10 (-2.5) //  #NAN
```

### Natural exponent

**Signature**: $A_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: returns $e$ raised to $A$-th power.

**Usage**

```
// Language: Clean

exp   2.5  // 12.1824939607035
exp   1.5  //  4.48168907033806
exp   0.0  //  1.0
exp (-1.5) //  0.22313016014843
exp (-2.5) //  0.0820849986238988
```

### Square root

**Signature**: $A_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: returns $\sqrt{A}$.

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

### Sine

**Signature**: $A_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: returns $\sin(A)$ .

**Usage**

```
// Language: Clean

sin   2.5  //  0.598472144103956
sin   1.5  //  0.997494986604054
sin   0.0  //  0.0
sin (-1.5) // -0.997494986604054
sin (-2.5) // -0.598472144103956
```

### Cosine

**Signature**: $A_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: returns $\cos(A)$.

**Usage**

```
// Language: Clean

cos   2.5  // -0.801143615546934
cos   1.5  //  0.0707372016677029
cos   0.0  //  1.0
cos (-1.5) //  0.0707372016677029
cos (-2.5) // -0.801143615546934
```

### Tangent

**Signature**: $A_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: returns $\tan(A)$.

**Usage**

```
// Language: Clean

tan   2.5  // - 0.74702229723866
tan   1.5  //  14.1014199471717
tan   0.0  //   0.0
tan (-1.5) // -14.1014199471717
tan (-2.5) //   0.74702229723866
```

### Inverse of sine

**Signature**: $A_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: returns ${\sin}^{-1}(A)$.
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

### Inverse of cosine

**Signature**: $A_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: returns ${\cos}^{-1}(A)$.
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

### Inverse of tangent

**Signature**: $A_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: returns ${\tan}^{-1}(A)$.

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

### Hyperbolic sine

**Signature**: $A_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: returns $\sinh(A)$.

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

### Hyperbolic cosine

**Signature**: $A_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: returns $\cosh(A)$.

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

### Hyperbolic tangent

**Signature**: $A_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: returns $\tanh(A)$.

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

### Inverse of hyperbolic sine

**Signature**: $A_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: returns ${\sinh}^{-1}(A)$.

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

### Inverse of hyperbolic cosine

**Signature**: $A_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: returns ${\cosh}^{-1}(A)$.

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

### Inverse of hyperbolic tangent

**Signature**: $A_{\text{Real}}\rightarrow\text{Real}$.

**Behavior**: returns ${\tanh}^{-1}(A)$.

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