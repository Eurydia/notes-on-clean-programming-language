---
title: "Appendix A: StdInt"
---

## Introduction

This section of Appendix A discusses operations and functions defined within `StdInt` and by extension `StdEnv`.

These operations and functions primarily interact `Int` type.

## Arithmetic Operations

### Negation

**Signature**

```
// Language: Clean

~ :: Int -> Int
~    a   =  ...
```

**Behavior**: inverts the sign of an integer `a`.

**Usage**

```
// Language: Clean
 
~  0   //  0
~  1   // -1
~(-1)  //  1
```

### Addition

**Signature** 

```
// Language: Clean
 
(+) infixl 6 :: Int Int -> Int
(+)             a   b   =  ...
```

**Behavior**: adds `a` and `b` together.

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

```
// Language: Clean
 
(-) infixl 6 :: Int Int -> Int
(-)             a   b   =  ...
```

**Behavior**: subtracts `b` from `a`.

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

```
// Language: Clean
 
(*) infixl 7 :: Int Int -> Int
(*)             a   b   =  ...
```

**Behavior**: multiplies `a` and `b` together.

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

```
// Language: Clean

(/) infixl 7 :: Int Int -> Int
(/)             a   b   =  ...
```

**Behavior**: divides `a` by `b`.
Silently crashes if `b` is zero.

**Usage**

```
// Language: Clean

  1  /   1   //  1
  1  / (-1)  // -1
(-1) /   1   // -1
(-1) / (-1)  //  1
  7  /   0   //  crashes
```

### Reminder Division

**Signature**

```
// Language: Clean

(rem) infix 7 :: Int Int -> Int
(rem)            a   b   =  ...
```

and

```
// Language: Clean

(mod) infix 7 :: Int Int -> Int
(mod)            a   b   =  ...
```

For integers, both `rem` and `mod` perform modulo division.

**Behavior**: divides `a` by `b` and returns the reminder.

**Usage**

```
// Language: Clean

  3  mod (-2)  //  1
(-3) mod (-2)  // -1
(-3) mod   2   // -1
  3  mod   2   //  1
```

### Exponentiation

**Signature**

```
// Language: Clean

(^) infixr 8 :: Int Int -> Int
(^)             a   b   =  ...
```

**Behavior**: raises `a` to `b`-th power.
Results in a run-time error if `b` is negative.

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

There are six relational operations, and they share the same behavior.
That is, they compare integral values of two integers, then return a Boolean value.

### Equal To

**Signature**

```
// Language: Clean

(==) infix 4 :: Int Int -> Bool
(==)            a   b   =  ...
```

**Behavior**: returns true if and only if `a` is equal to `b`.

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

```
// Language: Clean

(<>) infix 4 :: Int Int -> Bool
(<>)            a   b   =  ...
```

**Behavior**: returns false if and only if `a` is equal to `b`.

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

```
// Language: Clean

(<) infix 4 :: Int Int -> Bool
(<)            a   b   =  ...
```

**Behavior**: returns true if and only if `a` is strictly less than `b`.

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

```
// Language: Clean

(<=) infix 4 :: Int Int -> Bool
(<=)            a   b   =  ...
```

**Behavior**: returns false if and only if `a` is strictly greater than `b`.

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


**Signature**

```
// Language: Clean

(>) infix 4 :: Int Int -> Bool
(>)            a   b   =  ...
```

**Behavior**: returns true if and only if `a` is strictly greater than `b`.

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

```
// Language: Clean

(>=) infix 4 :: Int Int -> Bool
(>=)            a   b   =  ...
```

**Behavior**: returns false if and only if `a` is strictly less than `b`.

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

This group of functions and operations interacts with integers through their binary representation.

### Bitwise NEGATE

**Signature**

```
// Language: Clean

bitnot :: Int -> Int
bitnot    a   =  ...
```

**Behavior**: returns bit-wise two complement of `a`.

**Usage**

```
// Language: Clean

bitnot (-5)  //  -4
bitnot (-2)  //   1
bitnot   2   //  -3
bitnot   5   //  -6
```

### Bitwise OR

**Signature**

```
// Language: Clean

(bitor) infixl 6 :: Int Int -> Int
(bitor)             a   b   =  ...
```

**Behavior**: returns bit-wise OR of `a` and `b`.

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


```
// Language: Clean

(bitand) infixl 6 :: Int Int -> Int
(bitand)             a   b   =  ...
```

**Behavior**: returns bit-wise AND of `a` and `b`.

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

```
// Language: Clean

(bitxor) infixl 6 :: Int Int -> Int
(bitxor)             a   b   =  ...
```

**Behavior**: returns bit-wise XOR of `a` and `b`.

**Usage**

```
// Language: Clean

  5  bitxor   2   //  7
(-5) bitxor   2   // -7
  5  bitxor (-2)  // -5
(-5) bitxor (-2)  //  5
```

### Bitwise Left Shift

**Signature**

```
// Language: Clean

(<<) infix 7 :: Int Int -> Int
(<<)            a   b   =  ...
```

**Behavior**: shifts `a` to the left by `b` bits.

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

```
// Language: Clean

(>>) infix 7 :: Int Int -> Int
(>>)            a   b   =  ...
```

**Behavior**: shifts `a` to the right by `b` bits.

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

```
// Language: Clean

sign :: Int -> Int
sign    a   =  ...
```

**Behavior**: returns the sign of an integer `a`.

**Usage**

```
// Language: Clean

sign   1   //  1
sign   0   //  0
sign (-1)  // -1
```

### `abs`

**Signature**

```
// Language: Clean

abs :: Int -> Int
abs    a   =  ...
```

**Behavior**: returns the absolute value of an integer `a`.

**Usage**

```
// Language: Clean

abs   1   // 1
abs   0   // 0
abs (-1)  // 1
```

### `gcd`

**Signature**

```
// Language: Clean

gcd :: Int Int -> Int
gcd    a   b   =  ...
```

**Behavior**: returns the greatest common divisor of `a` and `b`.

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

```
// Language: Clean

lcm :: Int Int -> Int
lcm    a   b   =  ...
```

**Behavior**: returns the least common multiple of `a` and `b`.

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

This group of functions accepts one integer as an argument and returns a Boolean value based on the property of the integer given.

### `isEven`

**Signature**

```
// Language: Clean

isEven :: Int -> Bool
isEven    a   =  ...
```

**Behavior**: returns true if and only if `a` is an even integer.

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

```
// Language: Clean

isOdd :: Int -> Bool
isOdd    a   =  ...
```

**Behavior**: returns true if and only if `a` is an odd integer.

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

This group of functions explicitly converts values of other types to integers.
The function shares the same name, which is `toInt`, but they behave differently based on the original type.

### Real Numbers To Integers

**Signature**

```
toInt :: Real -> Int
toInt    a    =  ...
```

**Behavior**: rounds a real number `a` up or down to the nearest integer.

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

```
// Language: Clean

toInt :: Char -> Int
toInt    a    =  ...
```

**Behavior**: converts a character `a` to its ASCII value.

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

```
// Language: Clean

toInt :: {#Char} -> Int
toInt    a       =  ...
```

**Behavior**: attempts to parse a string `a` to an integer.
Returns zero if unsuccessful.

**Usage**

```
// Language: Clean

toInt "1.0"   //  0	
toInt "1"     //  1
toInt "0"     //  0
toInt "-1"    // -1
toInt "-1.0"  //  0
```

---

## Conversions From Integers

This group of functions explicitly converts integers to other types.
The function shares the same name, which is `fromInt`, but the final type must be explicitly stated.


### Integers To Real Numbers

**Signature**

```
fromInt :: Real -> Int
fromInt    a    =  ...
```

**Behavior**: converts an integer `a` into a real number.
The decimal place is zero.

**Usage**

```
// Language: Clean

expr :: Real
expr =  fromInt  1  // 1.0
expr =  fromInt  0  // 0.0
```

### Integers To Characters

**Signature**

```
// Language: Clean

fromInt :: Int -> Char
fromInt    a    =  ...
```

**Behavior**: converts an integer `a` in to a character based on its ASCII value.

**Usage**

```
// Language: Clean

expr :: Char
expr =  fromInt 49   // '1'
expr =  fromInt 59   // '9'
expr =  fromInt 65   // 'A'
expr =  fromInt 90   // 'Z'
expr =  fromInt 97   // 'a'
expr =  fromInt 122  // 'z'
```

### Integers To Strings

**Signature**

```
// Language: Clean

fromInt :: Int -> {#Char}
fromInt    a   =  ...
```

**Behavior**: converts an integer `a` in a string.

**Usage**

```
// Language: Clean

expr :: {#Char}
expr =  fromInt 1  // "1"
expr =  fromInt 0  // "0"
```

