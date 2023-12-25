# StdReal

This module can be imported directly or as a part of the `StdEnv` module.
It provides definition for many critical operations and functions on real numbers.

Visit [StdReal](https://cloogle.org/src/#base-stdenv/StdReal;icl;line=1) on Cloogle for source code of this module.

## Units

### Zero

**Implementation**

```clean
// CLEAN

zero ::  Real
zero :== 0.0
```

**Definition**

Represents the identity element of real number addition.

### One Unit

**Implementation**

```clean
// CLEAN

one ::  Real
one :== 1.0
```

**Definition**

It represents the identity element of real number multiplication.

### Infinity Representation

**Implementation**

```clean
// CLEAN

Infinity ::  Real
Infinity :== 1E9999
```

**Definition**

It represents numerical values which are too large to represent.

### Not-A-Number Representation

**Implementation**

```clean
// CLEAN

NaN ::  Real
NaN :== 1E9999 + (-1E9999)
```

**Definition**

It represents numerical values which cannot be represented.

See [NaN](https://en.wikipedia.org/wiki/NaN).

---

## Arithmetic Operations and Functions

### Negation

**Signature**

```clean
// CLEAN

~ :: Real -> Real
~    a    =  ...
```

**Behavior**

It inverts the sign of `a`.

**Usage**

```clean
// CLEAN

~  1.0   // -1.0
~  0.0   //  0.0
~(-1.0)  //  1.0
```

### Addition

**Signature**

```clean
// CLEAN

(+) infixl 6 :: Real Real -> Real
(+)             a    b    =  ...
```

**Behavior**

It adds `a` and `b`.

**Usage**

```clean
// CLEAN

  2.5  +   1.5   //  4.0
  2.5  + (-1.5)  //  1.5
(-2.5) +   1.5   // -1.0
(-2.5) + (-1.5)  // -4.0
```

### Subtraction

**Signature**

```clean
// CLEAN

(-) infixl 6 :: Real Real -> Real
(-)             a    b    =  ...
```

**Behavior**

It subtracts `b` from `a`.

**Usage**

```clean
// CLEAN

  2.5  -   1.5   //  1.0
  2.5  - (-1.5)  //  4.0
(-2.5) -   1.5   // -1.5
(-2.5) - (-1.5)  // -1.0
```

### Multiplication

**Signature**

```clean
// CLEAN

(*) infixl 7 :: Real Real -> Real
(*)             a    b    =  ...
```

**Behavior**

It multiplies `a` with `b`.

**Usage**

```clean
// CLEAN

  2.5  *   1.5   //  3.75
  2.5  * (-1.5)  // -3.75
(-2.5) *   1.5   // -3.75
(-2.5) * (-1.5)  //  3.75
```

### Division

**Signature**

```clean
// CLEAN

(/) infixl 7 :: Real Real -> Real
(/)             a    b    =  ...
```

**Behavior**

It divides `a` with `b`.

**Usage**

```clean
// CLEAN

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

```clean
// CLEAN

(^) infixr 8 :: Real Real -> Real
(^)             a    b    =  ...
```

**Behavior**

It raises `a` to the power of `b`.

**Usage**

```clean
// CLEAN

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

Equality comparison between two real numbers seems to be unaffected by rounding errors.

### Equal To

**Signature**

```clean
// CLEAN

(==) infix 4 :: Real Real -> Bool
(==)            a    b    =  ...
```

**Behavior**

It returns true if `a` is equal to `b`.

**Usage**

```clean
// CLEAN

  5.0  ==   2.0   // False
(-5.0) ==   2.0   // False
  5.0  == (-2.0)  // False
(-5.0) == (-2.0)  // False
(-2.0) == (-2.0)  // True
```

### Not Equal To

**Signature**

```clean
// CLEAN

(<>) infix 4 :: Real Real -> Bool
(<>)            a    b    =  ...
```

**Behavior**

It returns true if `a` is not equal to `b`.

**Usage**

```clean
// CLEAN

  5.0  <>   2.0   // True
(-5.0) <>   2.0   // True
  5.0  <> (-2.0)  // True
(-5.0) <> (-2.0)  // True
(-2.0) <> (-2.0)  // False
```

### Less Than

**Signature**

```clean
// CLEAN

(<) infix 4 :: Real Real -> Bool
(<)            a    b    =  ...
```

**Behavior**

It returns true if `a` is strictly less than `b`.

**Usage**

```clean
// CLEAN

  5.0  <   2.0   // False
(-5.0) <   2.0   // True
  5.0  < (-2.0)  // False
(-5.0) < (-2.0)  // True
(-2.0) < (-2.0)  // False
```

### Less Than Or Equal To

**Signature**

```clean
// CLEAN

(<=) infix 4 :: Real Real -> Bool
(<=)            a    b    =  ...
```

**Behavior**

It returns true if `a` is less than or equal to `b`.

**Usage**

```clean
// CLEAN

  5.0  <=   2.0   // False
(-5.0) <=   2.0   // True
  5.0  <= (-2.0)  // False
(-5.0) <= (-2.0)  // True
(-2.0) <= (-2.0)  // True
```

### Greater Than

**Signature**

```clean
// CLEAN

(>) infix 4 :: Real Real -> Bool
(>)            a    b    =  ...
```

**Behavior**

It returns true if `a` is strictly greater than `b`.

**Usage**

```clean
// CLEAN

  5.0  >   2.0   // True
(-5.0) >   2.0   // False
  5.0  > (-2.0)  // True
(-5.0) > (-2.0)  // False
(-2.0) > (-2.0)  // False
```

### Greater Than Or Equal To

**Signature**

```clean
// CLEAN

(>=) infix 4 :: Real Real -> Bool
(>=)            a    b    =  ...
```

**Behavior**

It returns true if `a` is greater than or equal to `b`.

**Usage**

```clean
// CLEAN

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

```clean
// CLEAN

sign :: Real -> Int
sign    a    =  ...
```

**Behavior**

It returns the sign of `a`.

**Usage**

```clean
// CLEAN

sign   1.0   //  1
sign   0.0   //  0
sign (-1.0)  // -1
```

### `abs`

**Signature**

```clean
// CLEAN

abs :: Real -> Real
abs    a    =  ...
```

**Behavior**

It returns the absolute value of `a`.

**Usage**

```clean
// CLEAN

abs   1.0   // 1.0
abs   0.0   // 0.0
abs (-1.0)  // 1.0
```

### `entier`

**Signature**

```clean
// CLEAN

entier :: Real -> Int
entier    a    =  ...
```

**Behavior**

It returns the largest integer which is less than `a`.

**Usage**

```clean
// CLEAN

entier   1.5   //  1
entier   0.0   //  0
entier (-1.5)  // -2
```

### `ln`

**Signature**

```clean
// CLEAN

ln :: Real -> Real
ln    a    =  ...
```

**Behavior**

It returns the natural logarithm of `a`.

**Usage**

```clean
// CLEAN

ln   2.5   //  0.916290731874155
ln   1.5   // -1.405465108108164
ln   0.0   // -#INF
ln (-1.5)  //  #NAN
ln (-2.5)  //  #NAN
```

### `log10`

**Signature**

```clean
// CLEAN

log10 :: Real -> Real
log10    a    =  ...
```

**Behavior**

It returns the logarithm base 10 of `a`.

**Usage**

```clean
// CLEAN

log10   2.5   //  0.397940008672038
log10   1.5   // -0.176091259055681
log10   0.0   // -#INF
log10 (-1.5)  //  #NAN
log10 (-2.5)  //  #NAN
```

### `exp`

**Signature**

```clean
// CLEAN

exp :: Real -> Real
exp    a    =  ...
```

**Behavior**

It raises $e$ to the power of `a`.

See [Euler's number](<https://en.wikipedia.org/wiki/E_(mathematical_constant)>).

**Usage**

```clean
// CLEAN

exp   2.5   // 12.1824939607035
exp   1.5   //  4.48168907033806
exp   0.0   //  1.0
exp (-1.5)  //  0.22313016014843
exp (-2.5)  //  0.0820849986238988
```

### `sqrt`

**Signature**

```clean
// CLEAN

sqrt :: Real -> Real
sqrt    a    =  ...
```

**Behavior**

It returns the square root of `a`.

**Usage**

```clean
// CLEAN

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

```clean
// CLEAN

sin :: Real -> Real
sin    a    =  ...
```

**Behavior**

It returns the sine of `a`.

**Usage**

```clean
// CLEAN

sin   2.5   //  0.598472144103956
sin   1.5   //  0.997494986604054
sin   0.0   //  0.0
sin (-1.5)  // -0.997494986604054
sin (-2.5)  // -0.598472144103956
```

### `cos`

**Signature**

```clean
// CLEAN

cos :: Real -> Real
cos    a    =  ...
```

**Behavior**

It returns the cosine of `a`.

**Usage**

```clean
// CLEAN

cos   2.5   // -0.801143615546934
cos   1.5   //  0.0707372016677029
cos   0.0   //  1.0
cos (-1.5)  //  0.0707372016677029
cos (-2.5)  // -0.801143615546934
```

### `tan`

**Signature**

```clean
// CLEAN

tan :: Real -> Real
tan    a    =  ...
```

**Behavior**

It returns the tangent of `a`.

**Usage**

```clean
// CLEAN

tan   2.5   // - 0.74702229723866
tan   1.5   //  14.1014199471717
tan   0.0   //   0.0
tan (-1.5)  // -14.1014199471717
tan (-2.5)  //   0.74702229723866
```

### `asin`

**Signature**

```clean
// CLEAN

asin :: Real -> Real
asin    a    =  ...
```

**Behavior**

It returns the inverse sine of `a`.

**Usage**

```clean
// CLEAN

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

```clean
// CLEAN

acos :: Real -> Real
acos    a    =  ...
```

**Behavior**

It returns the inverse cosine of `a`.

**Usage**

```clean
// CLEAN

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

```clean
// CLEAN

atan :: Real -> Real
atan    a    =  ...
```

**Behavior**

It returns the inverse tangent of `a`.

**Usage**

```clean
// CLEAN

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

```clean
// CLEAN

sinh :: Real -> Real
sinh    a    =  ...
```

**Behavior**

It returns the hyperbolic sine of `a`.

**Usage**

```clean
// CLEAN

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

```clean
// CLEAN

cosh :: Real -> Real
cosh    a    =  ...
```

**Behavior**

It returns the hyperbolic cosine of `a`.

**Usage**

```clean
// CLEAN

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

```clean
// CLEAN

tanh :: Real -> Real
tanh    a    =  ...
```

**Behavior**

It returns the hyperbolic tangent of `a`.

**Usage**

```clean
// CLEAN

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

```clean
// CLEAN

asinh :: Real -> Real
asinh    a    =  ...
```

**Behavior**

It returns the inverse hyperbolic sine of `a`.

**Usage**

```clean
// CLEAN

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

```clean
// CLEAN

acosh :: Real -> Real
acosh    a    =  ...
```

**Behavior**

It returns the inverse hyperbolic cosine of `a`.

**Usage**

```clean
// CLEAN

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

```clean
// CLEAN

atanh :: Real -> Real
atanh    a    =  ...
```

**Behavior**

It returns the inverse hyperbolic tangent of `a`.

**Usage**

```clean
// CLEAN

atanh   2.5   //  #NAN
atanh   1.5   //  #NAN
atanh   0.5   //  0.549306144334055
atanh   0.0   //  0.0
atanh (-0.5)  // -0.549306144334055
atanh (-1.5)  //  #NAN
atanh (-2.5)  //  #NAN
```

---

## Predicate Functions

### `isNaN`

**Signature**

```clean
// CLEAN

isNaN :: Real -> Bool
isNaN    a    =  ...
```

**Behavior**

It returns true if `a` is not representable.

**Usage**

```clean
// CLEAN

isNaN  2.0               // False
isNaN  0.0               // False
isNaN (sqrt (-1.0))      // True
isNaN (ln   (-1.0))      // True
isNaN ((-1.0) /   0.0)   // False
isNaN (  0.0  ^ (-1.0))  // False
```

### `isInfinity`

**Signature**

```clean
// CLEAN

isInfinity :: Real -> Bool
isInfinity    a    =  ...
```

**Behavior**

It returns true if `a` is too large to represent.

**Usage**

```clean
// CLEAN

isInfinity 2.0                // False
isInfinity 0.0                // False
isInfinity (sqrt (-1.0))      // False
isInfinity (ln   (-1.0))      // False
isInfinity ((-1.0) /   0.0)   // True
isInfinity (  0.0  ^ (-1.0))  // True
```

### `isFinite`

**Signature**

```clean
// CLEAN

isFinite :: Real -> Bool
isFinite    a    =  ...
```

**Behavior**

It returns true if `a` is representable.

**Usage**

```clean
// CLEAN

isFinite 2.0                // True
isFinite 0.0                // True
isFinite (sqrt (-1.0))      // False
isFinite (ln   (-1.0))      // False
isFinite ((-1.0) /   0.0)   // False
isFinite (  0.0  ^ (-1.0))  // False
```

---

## Conversions To Real Number Type

They explicitly convert other types to real number type.

### From Integer Type

**Signature**

```clean
// CLEAN

toReal :: Int -> Real
toReal    a   =  ...
```

**Behavior**

It sets the decimal places of `a` to 0.

**Usage**

```clean
// CLEAN

toReal   2   //  2.0
toReal   1   //  1.0
toReal   0   //  0.0
toReal (-1)  // -1.0
toReal (-2)  // -2.0
```

### From String Type

**Signature**

```clean
// CLEAN

toReal :: String -> Real
toReal    a      =  ...
```

**Behavior**

It parses `a` as a real number.

**Usage**

```clean
// CLEAN

toReal "1.0"   //  1.0
toReal "1"     //  1.0
toReal "0"     //  0.0
toReal "-1"    // -1.0
toReal "-1.0"  //  1.0
```

---

## Conversions From Real Number Type

They explicitly convert real number type to other types.
The desired type must be unambiguous.

### To Integer Type

**Signature**

```clean
// CLEAN

fromReal :: Real -> Int
fromReal    a    =  ...
```

**Behavior**

It rounds `a` to its nearest integer.

**Usage**

```clean
// CLEAN

expr :: Int
expr =  fromReal   1.9   //  2
expr =  fromReal   1.4   //  1
expr =  fromReal (-1.4)  // -1
expr =  fromReal (-1.9)  // -2
```

### To String Type

**Signature**

```clean
// CLEAN

fromReal :: Real -> { #Char }
fromReal    a    =  ...
```

**Behavior**

It returns a string representation of `a`.

**Usage**

```clean
// CLEAN

expr :: { #Char }
expr =  fromReal   1.9   // "1.9"
expr =  fromReal   1.4   // "1.4"
expr =  fromReal (-1.4)  // "-1.4"
expr =  fromReal (-1.9)  // "-1.9"
```
