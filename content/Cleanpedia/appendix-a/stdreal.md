---
title: "Appendix A: StdReal"
---

## Introduction

This section of **Appendix A** discusses operations and functions defined within Standard Real and, by extension, the Standard Environment.

The operations and functions of this module primarily interacts with real numbers.

## Constants

### Zero Unit

**Implementation**

```
// Language: Clean

zero ::  Real
zero :== 0.0
```

**Definition**: represents the value zero for real numbers.

### One Unit

**Implementation**

```
// Language: Clean

one ::  Real
one :== 1.0
```

**Definition**: represents the value one for real numbers.

### Infinity Representation

**Implementation**

```
// Language: Clean

Infinity ::  Real
Infinity :== 1E9999
```

**Definition**: represents the largest value for real numbers.

### Not-A-Number Representation

**Implementation**

```
// Language: Clean

NaN ::  Real
NaN :== 1E9999+(-1E9999)
```

**Definition**: represents floating point values which are not undefined.

See also [NaN](https://en.wikipedia.org/wiki/NaN).

---

## Arithmetic Operations

### Negation

**Signature**

```
// Language: Clean

~ :: Real -> Real
~    a    =  ...
```

**Behavior**: inverts the sign of `a`.

**Usage**

```
// Language: Clean

~  1.0   // -1.0
~  0.0   //  0.0
~(-1.0)  //  1.0
```

### Addition

**Signature**


```
// Language: Clean
 
(+) infixl 6 :: Real Real -> Real
(+)             a    b    =  ...
```

**Behavior**: adds `a` and `b` together.

**Usage**

```
// Language: Clean

  2.5  +   1.5   //  4.0
  2.5  + (-1.5)  //  1.5
(-2.5) +   1.5   // -1.0
(-2.5) + (-1.5)  // -4.0
```

### Subtraction

**Signature**

```
// Language: Clean
 
(-) infixl 6 :: Real Real -> Real
(-)             a    b    =  ...
```

**Behavior**: subtracts `b` from `a`.

**Usage**

```
// Language: Clean

  2.5  -   1.5   //  1.0
  2.5  - (-1.5)  //  4.0
(-2.5) -   1.5   // -1.5
(-2.5) - (-1.5)  // -1.0
```

### Multiplication

**Signature**

```
// Language: Clean
 
(*) infixl 7 :: Real Real -> Real
(*)             a    b    =  ...
```

**Behavior**: multiplies `a` with `b`.

**Usage**

```
// Language: Clean

  2.5  *   1.5   //  3.75
  2.5  * (-1.5)  // -3.75
(-2.5) *   1.5   // -3.75
(-2.5) * (-1.5)  //  3.75
```

### Division

**Signature**

```
// Language: Clean

(/) infixl 7 :: Real Real -> Real
(/)             a    b    =  ...
```

**Behavior**: divides `a` with `b`. 

**Usage**

```
// Language: Clean

  2.5  /   1.5   //  1.66666666666667
  2.5  / (-1.5)  // -1.66666666666667
(-2.5) /   1.5   // -1.66666666666667
(-2.5) / (-1.5)  //  1.66666666666667
  1.0  /   0.0   //  #INF
(-1.0) /   0.0   // -#INF
  0.0  /   0.0   //  #NaN
```

### Exponentiation

**Signature**

```
// Language: Clean

(^) infixr 8 :: Real Real -> Real
(^)             a    b    =  ...
```

**Behavior**: raises `a` to the `b`-th power.

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

---

## Relational Operations

There are six relational operations, and they share the same behavior.
That is, they compare floating point values of two real numbers, then return a Boolean value.

A rather impressive feature of the language is that equality comparison between two floating point values is allowed.

### Equal To

**Signature**

```
// Language: Clean

(==) infix 4 :: Real Real -> Bool
(==)            a    b    =  ...
```

**Behavior**: returns true if and only if `a` is equal to `b`.

**Usage**

```
// Language: Clean

  5.0  ==   2.0   // False
(-5.0) ==   2.0   // False
  5.0  == (-2.0)  // False
(-5.0) == (-2.0)  // False
(-2.0) == (-2.0)  // True
```

### Not Equal To

**Signature**

```
// Language: Clean

(<>) infix 4 :: Real Real -> Bool
(<>)            a    b    =  ...
```

**Behavior**: returns false if and only if `a` is equal to `b`.

**Usage**

```
// Language: Clean

  5.0  <>   2.0   // True
(-5.0) <>   2.0   // True
  5.0  <> (-2.0)  // True
(-5.0) <> (-2.0)  // True
(-2.0) <> (-2.0)  // False
```

### Less Than

**Signature**

```
// Language: Clean

(<) infix 4 :: Real Real -> Bool
(<)            a    b    =  ...
```

**Behavior**: returns true if and only if `a` is strictly less than `b`.

**Usage**

```
// Language: Clean

  5.0  <   2.0   // False
(-5.0) <   2.0   // True
  5.0  < (-2.0)  // False
(-5.0) < (-2.0)  // True
(-2.0) < (-2.0)  // False
```

### Less Than Or Equal To

**Signature**

```
// Language: Clean

(<=) infix 4 :: Real Real -> Bool
(<=)            a    b    =  ...
```

**Behavior**: returns false if and only if `a` is strictly greater than `b`.

**Usage**

```
// Language: Clean

  5.0  <=   2.0   // False
(-5.0) <=   2.0   // True
  5.0  <= (-2.0)  // False
(-5.0) <= (-2.0)  // True
(-2.0) <= (-2.0)  // True
```

### Greater Than

**Signature**

```
// Language: Clean

(>) infix 4 :: Real Real -> Bool
(>)            a    b    =  ...
```

**Behavior**: returns true if and only if `a` is strictly greater than `b`.

**Usage**

```
// Language: Clean

  5.0  >   2.0   // True
(-5.0) >   2.0   // False
  5.0  > (-2.0)  // True
(-5.0) > (-2.0)  // False
(-2.0) > (-2.0)  // False
```

### Greater Than Or Equal To

**Signature**

```
// Language: Clean

(>=) infix 4 :: Real Real -> Bool
(>=)            a    b    =  ...
```

**Behavior**: returns false if and only if `a` is strictly less than `b`.

**Usage**

```
// Language: Clean

  5.0  >=   2.0   // True
(-5.0) >=   2.0   // False
  5.0  >= (-2.0)  // True
(-5.0) >= (-2.0)  // False
(-2.0) >= (-2.0)  // True
```

---

## Basic Functions

### `sign`

**Signature**

```
// Language: Clean

sign :: Real -> Int
sign    a    =  ...
```

**Behavior**: returns sign of `a`.

**Usage**

```
// Language: Clean

sign   1.0   //  1
sign   0.0   //  0
sign (-1.0)  // -1
```

### `abs`

**Signature**

```
// Language: Clean

abs :: Real -> Real
abs    a    =  ...
```

**Behavior**: returns absolute value of `a`.

**Usage**

```
// Language: Clean

abs   1.0   // 1.0
abs   0.0   // 0.0
abs (-1.0)  // 1.0
```

### `entier`

**Signature**

```
// Language: Clean

entier :: Real -> Int
entier    a    =  ...
```

**Behavior**: returns floor of `a`.
This function is technically a type conversion function.

**Usage**

```
// Language: Clean

entier   1.5   //  1
entier   0.0   //  0
entier (-1.5)  // -2
```

### `ln`

**Signature**

```
// Language: Clean

ln :: Real -> Real
ln    a    =  ...
```

**Behavior**: returns natural logarithm of `a`.

**Usage**

```
// Language: Clean

ln   2.5   //  0.916290731874155
ln   1.5   // -1.405465108108164
ln   0.0   // -#INF
ln (-1.5)  //  #NAN
ln (-2.5)  //  #NAN
```

### `log10`

**Signature**

```
// Language: Clean

log10 :: Real -> Real
log10    a    =  ...
```

**Behavior**: returns logarithm base ten of `a`.

**Usage**

```
// Language: Clean

log10   2.5   //  0.397940008672038
log10   1.5   // -0.176091259055681
log10   0.0   // -#INF
log10 (-1.5)  //  #NAN
log10 (-2.5)  //  #NAN
```

### `exp`

**Signature**

```
// Language: Clean

exp :: Real -> Real
exp    a    =  ...
```

**Behavior**: raises [Euler's number](https://en.wikipedia.org/wiki/E_\(mathematical_constant\)) to the power of `a`.

**Usage**

```
// Language: Clean

exp   2.5   // 12.1824939607035
exp   1.5   //  4.48168907033806
exp   0.0   //  1.0
exp (-1.5)  //  0.22313016014843
exp (-2.5)  //  0.0820849986238988
```

### `sqrt`

**Signature**

```
// Language: Clean

sqrt :: Real -> Real
sqrt    a    =  ...
```

**Behavior**: returns square root of `a`.

**Usage**

```
// Language: Clean

sqrt   2.5   // 1.58113883008419
sqrt   1.5   // 1.22474487139159
sqrt   0.0   // 0.0
sqrt (-1.5)  // #NAN
sqrt (-2.5)  // #NAN
```

---

## Trigonometric Functions

### `sin`

**Signature**

```
// Language: Clean

sin :: Real -> Real
sin    a    =  ...
```

**Behavior**: returns sine of `a`.

**Usage**

```
// Language: Clean

sin   2.5   //  0.598472144103956
sin   1.5   //  0.997494986604054
sin   0.0   //  0.0
sin (-1.5)  // -0.997494986604054
sin (-2.5)  // -0.598472144103956
```

### `cos`

**Signature**

```
// Language: Clean

cos :: Real -> Real
cos    a    =  ...
```

**Behavior**: returns cosine of `a`.

**Usage**

```
// Language: Clean

cos   2.5   // -0.801143615546934
cos   1.5   //  0.0707372016677029
cos   0.0   //  1.0
cos (-1.5)  //  0.0707372016677029
cos (-2.5)  // -0.801143615546934
```

### `tan`

**Signature**

```
// Language: Clean

tan :: Real -> Real
tan    a    =  ...
```

**Behavior**: returns tangent of `a`.

**Usage**

```
// Language: Clean

tan   2.5   // - 0.74702229723866
tan   1.5   //  14.1014199471717
tan   0.0   //   0.0
tan (-1.5)  // -14.1014199471717
tan (-2.5)  //   0.74702229723866
```

### `asin`

**Signature**

```
// Language: Clean

asin :: Real -> Real
asin    a    =  ...
```

**Behavior**: returns inverse sine of `a`.

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

### `acos`

**Signature**

```
// Language: Clean

acos :: Real -> Real
acos    a    =  ...
```

**Behavior**: returns inverse cosine of `a`.

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

### `atan`

**Signature**

```
// Language: Clean

atan :: Real -> Real
atan    a    =  ...
```

**Behavior**: returns inverse tangent of `a`.

**Usage**

```
// Language: Clean

atan   2.5   //  1.19028994968253
atan   1.5   //  0.982793723247329
atan   0.5   //  0.463647609000806
atan   0.0   //  0.0
atan (-0.5)  // -0.463647609000806
atan (-1.5)  // -0.982793723247329
atan (-2.5)  // -1.19028994968253
```

### `sinh`

**Signature**

```
// Language: Clean

sinh :: Real -> Real
sinh    a    =  ...
```

**Behavior**: returns hyperbolic sine of `a`.

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

### `cosh`

**Signature**

```
// Language: Clean

cosh :: Real -> Real
cosh    a    =  ...
```

**Behavior**: returns hyperbolic cosine of `a`.

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

### `tanh`

**Signature**

```
// Language: Clean

tanh :: Real -> Real
tanh    a    =  ...
```

**Behavior**: returns hyperbolic tangent of `a`.

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

### `asinh`

**Signature**

```
// Language: Clean

asinh :: Real -> Real
asinh    a    =  ...
```

**Behavior**: returns inverse hyperbolic sine of `a`.

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

### `acosh`

**Signature**

```
// Language: Clean

acosh :: Real -> Real
acosh    a    =  ...
```

**Behavior**: returns inverse hyperbolic cosine of `a`.

**Usage**

```
// Language: Clean

acosh   2.5   // 1.56679923697241
acosh   1.5   // 0.962423650119207
acosh   0.5   // #NAN
acosh   0.0   // #NAN
acosh (-0.5)  // #NAN
acosh (-1.5)  // #NAN
acosh (-2.5)  // #NAN
```

### `atanh`

**Signature**

```
// Language: Clean

atanh :: Real -> Real
atanh    a    =  ...
```

**Behavior**: returns inverse hyperbolic tangent of `a`.

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

---

## Property Functions

### `isNaN`

**Signature**

```
// Language: Clean

isNaN :: Real -> Bool
isNaN    a    =  ...
```

**Behavior**: returns true if and only if `a` is not representable.

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

### `isInfinity`

**Signature**

```
// Language: Clean

isInfinity :: Real -> Bool
isInfinity    a    =  ...
```

**Behavior**: returns true if and only if `a` is too large to represent.

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

### `isFinite`

**Signature**

```
// Language: Clean

isFinite :: Real -> Bool
isFinite    a    =  ...
```

**Behavior**: returns false if and only if `a` is too large to represent.

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

---


## Conversions To Real Number Type

This group of functions explicitly converts other types to real number type 
The function shares the same name, which is `toReal`, but they behave differently based on the original type.

### From Integer Type

**Signature**

```
// Language: Clean

toReal :: Int -> Real
toReal    a   =  ...
```

**Behavior**: converts `a` to a real number.

**Usage**

```
// Language: Clean

toReal   2   //  2.0
toReal   1   //  1.0
toReal   0   //  0.0
toReal (-1)  // -1.0
toReal (-2)  // -2.0
```

### From String Type

**Signature**

```
// Language: Clean

toReal :: String -> Real
toReal    a      =  ...
```

**Behavior**: parses a string `a` to an real number.

**Usage**

```
// Language: Clean

toReal "1.0"   //  1.0
toReal "1"     //  1.0
toReal "0"     //  0.0
toReal "-1"    // -1.0
toReal "-1.0"  //  1.0
```

---

## Conversions From Real Number Type

This group of functions explicitly converts real number type to other types.
The function shares the same name, which is `fromReal`, but the desired type must be unambiguous.

### To Integer Type

**Signature**

```
fromReal :: Real -> Int
fromReal    a    =  ...
```

**Behavior**: rounds `a` to its nearest integer.

**Usage**

```
// Language: Clean

expr :: Int
expr =  fromReal   1.9   //  2
expr =  fromReal   1.4   //  1
expr =  fromReal (-1.4)  // -1
expr =  fromReal (-1.9)  // -2
```

### To String Type

**Signature**

```
// Language: Clean

fromReal :: Real -> {#Char}
fromReal    a    =  ...
```

**Behavior**: converts a real number `a` into a string.

**Usage**

```
// Language: Clean

expr :: {#Char}
expr =  fromReal   1.9   // "1.9"
expr =  fromReal   1.4   // "1.4"
expr =  fromReal (-1.4)  // "-1.4"
expr =  fromReal (-1.9)  // "-1.9"
```