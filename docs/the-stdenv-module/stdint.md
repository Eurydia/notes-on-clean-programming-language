# StdInt

Visit [StdInt](https://cloogle.org/src/#base-stdenv/StdInt;icl;line=1) on Cloogle for source code of this module.

## Constants

### Zero unit

**Implementation**

```Clean
// CLEAN

zero ::  Int
zero :== 0
```

**Definition**

Represents the additive identity of integers.

### One unit

**Implementation**

```Clean
// CLEAN

one ::  Int
one :== 1
```

**Definition**

Represents the multiplicative identity of integers.

---

## Arithmetic operations

### Addition

**Signature**

```clean
// CLEAN

(+) infixl 6 :: Int Int -> Int
(+)             a   b   => ...
```

**Behavior**

Adds `a` and `b`.

**Usage**

```Clean
// CLEAN

  1  +   1   //  2
  1  + (-1)  //  0
(-1) +   1   //  0
(-1) + (-1)  // -2
```

### Subtraction

**Signature**

```Clean
// CLEAN

(-) infixl 6 :: Int Int -> Int
(-)             a   b   => ...
```

**Behavior**

Subtracts `b` from `a`.

**Usage**

```Clean
// CLEAN

  1  -   1  //  0
  1  - (-1) //  2
(-1) -   1  // -2
(-1) - (-1) //  0
```

### Multiplication

**Signature**

```Clean
// CLEAN

(*) infixl 7 :: Int Int -> Int
(*)             a   b   => ...
```

**Behavior**

Multiplies `a` and `b`.

**Usage**

```Clean
// CLEAN

  1  *   1  //  1
  1  * (-1) // -1
(-1) *   1  // -1
(-1) * (-1) //  1
```

### Floor Division

**Signature**

```Clean
// CLEAN

(/) infixl 7 :: Int Int -> Int
(/)             a   b   => ...
```

**Behavior**

Divides `a` by `b`.
Results in a silent run-time crash if `b` is zero.

**Usage**

```Clean
// CLEAN

  1  /   1   //  1
  1  / (-1)  // -1
(-1) /   1   // -1
(-1) / (-1)  //  1
  7  /   0   //  silently crashes
```

### Reminder Division

**Signature**

```Clean
// CLEAN

(rem) infix 7 :: Int Int -> Int
(rem)            a   b   => ...
```

and

```Clean
// CLEAN

(mod) infix 7 :: Int Int -> Int
(mod)            a   b   => ...
```

**Note**

For integers, `rem` and `mod` are aliases.

**Behavior**

Returns the reminded after dividing `a` by `b`.

**Usage**

```Clean
// CLEAN

  3  mod (-2)  //  1
(-3) mod (-2)  // -1
(-3) mod   2   // -1
  3  mod   2   //  1
```

### Exponentiation

**Signature**

```Clean
// CLEAN

(^) infixr 8 :: Int Int -> Int
(^)             a   b   => ...
```

**Behavior**

Raises `a` to the power of `b`.
Results in a run-time error if `b` is negative.

```console
$ ^ (Int) called with negative power argument
```

**Usage**

```Clean
// CLEAN

  1  ^   1   //  1
  1  ^ (-1)  //  Run-time error
(-1) ^   1   // -1
(-1) ^ (-1)  //  Run-time error
```

---

## Arithmetic functions

### Negation

**Signature**

```Clean
// CLEAN

~ :: Int -> Int
~    a   => ...
```

**Behavior**

Inverts the sign `a`.

**Usage**

```Clean
// CLEAN

~  0   //  0
~  1   // -1
~(-1)  //  1
```

---

## Relational operations

### Equal to

**Signature**

```Clean
// CLEAN

(==) infix 4 :: Int Int -> Bool
(==)            a   b   => ...
```

**Behavior**

Returns true if `a` is equal to `b`.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

  5  ==   2   // False
(-5) ==   2   // False
  5  == (-2)  // False
(-5) == (-2)  // False
(-2) == (-2)  // True
```

### Not equal to

**Signature**

```Clean
// CLEAN

(<>) infix 4 :: Int Int -> Bool
(<>)            a   b   => ...
```

**Behavior**

Returns true if `a` is not equal to `b`.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

  5  <>   2   // True
(-5) <>   2   // True
  5  <> (-2)  // True
(-5) <> (-2)  // True
(-2) <> (-2)  // False
```

### Less Than

**Signature**

```Clean
// CLEAN

(<) infix 4 :: Int Int -> Bool
(<)            a   b   => ...
```

**Behavior**

Returns true if `a` is strictly less than `b`.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

  5  <   2   // False
(-5) <   2   // True
  5  < (-2)  // False
(-5) < (-2)  // True
(-2) < (-2)  // False
```

### Less than or equal to

**Signature**

```Clean
// CLEAN

(<=) infix 4 :: Int Int -> Bool
(<=)            a   b   => ...
```

**Behavior**

Returns true if `a` is less than or equal to `b`.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

  5  <=   2   // False
(-5) <=   2   // True
  5  <= (-2)  // False
(-5) <= (-2)  // True
(-2) <= (-2)  // True
```

### Greater than

**Signature**

```Clean
// CLEAN

(>) infix 4 :: Int Int -> Bool
(>)            a   b   => ...
```

**Behavior**

Returns true if `a` is strictly greater than `b`.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

  5  >   2   // True
(-5) >   2   // False
  5  > (-2)  // True
(-5) > (-2)  // False
(-2) > (-2)  // False
```

### Greater than or equal to

**Signature**

```Clean
// CLEAN

(>=) infix 4 :: Int Int -> Bool
(>=)            a   b   => ...
```

**Behavior**

Returns true if `a` is greater than or equal to `b`.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

  5  >=   2   // True
(-5) >=   2   // False
  5  >= (-2)  // True
(-5) >= (-2)  // False
(-2) >= (-2)  // True
```

---

## Bitwise operations

### Bitwise OR

**Signature**

```Clean
// CLEAN

(bitor) infixl 6 :: Int Int -> Int
(bitor)             a   b   => ...
```

**Behavior**

It returns bitwise OR of `a` and `b`.

**Usage**

```Clean
// CLEAN

  5  bitor   2   //  7
(-5) bitor   2   // -5
  5  bitor (-2)  // -1
(-5) bitor (-2)  // -1
```

### Bitwise AND

**Signature**

```Clean
// CLEAN

(bitand) infixl 6 :: Int Int -> Int
(bitand)             a   b   => ...
```

**Behavior**

It returns bitwise AND of `a` and `b`.

**Usage**

```Clean
// CLEAN

  5  bitand   2   //  0
(-5) bitand   2   //  2
  5  bitand (-2)  //  4
(-5) bitand (-2)  // -6
```

### Bitwise XOR

**Signature**

```Clean
// CLEAN

(bitxor) infixl 6 :: Int Int -> Int
(bitxor)             a   b   => ...
```

**Behavior**

It returns bitwise XOR of `a` and `b`.

**Usage**

```Clean
// CLEAN

  5  bitxor   2   //  7
(-5) bitxor   2   // -7
  5  bitxor (-2)  // -5
(-5) bitxor (-2)  //  5
```

### Bitwise Left Shift

**Signature**

```Clean
// CLEAN

(<<) infix 7 :: Int Int -> Int
(<<)            a   b   => ...
```

**Behavior**

It shifts `a` to the left by `b` bits.

**Usage**

```Clean
// CLEAN

  5  <<   2   //  20
(-5) <<   2   // -20
  5  << (-2)  //  4611686018427387904
(-5) << (-2)  // -4611686018427387904
```

### Bitwise Right Shift

**Signature**

```Clean
// CLEAN

(>>) infix 7 :: Int Int -> Int
(>>)            a   b   => ...
```

**Behavior**

It shifts `a` to the right by `b` bits.

**Usage**

```Clean
// CLEAN

  5  >>   2   //  1
(-5) >>   2   // -2
  5  >> (-2)  //  0
(-5) >> (-2)  // -1
```

---

## Bitwise functions

### Bitwise NEGATE

**Signature**

```Clean
// CLEAN

bitnot :: Int -> Int
bitnot    a   => ...
```

**Behavior**

It returns bitwise-two complement of `a`.

**Usage**

```Clean
// CLEAN

bitnot (-5)  //  -4
bitnot (-2)  //   1
bitnot   2   //  -3
bitnot   5   //  -6
```

---

## Basic Functions

### `sign`

**Signature**

```Clean
// CLEAN

sign :: Int -> Int
sign    a   => ...
```

**Behavior**

It returns the sign of `a`.

**Usage**

```Clean
// CLEAN

sign   1   //  1
sign   0   //  0
sign (-1)  // -1
```

### `abs`

**Signature**

```Clean
// CLEAN

abs :: Int -> Int
abs    a   => ...
```

**Behavior**

It returns the absolute value of `a`.

**Usage**

```Clean
// CLEAN

abs   1   // 1
abs   0   // 0
abs (-1)  // 1
```

### `gcd`

**Signature**

```Clean
// CLEAN

gcd :: Int Int -> Int
gcd    a   b   => ...
```

**Behavior**

It returns the greatest common divisor of `a` and `b`.

**Usage**

```Clean
// CLEAN

gcd   3    2   // 1
gcd (-3)   2   // 1
gcd   3  (-2)  // 1
gcd (-3) (-2)  // 1
```

### `lcm`

**Signature**

```Clean
// CLEAN

lcm :: Int Int -> Int
lcm    a   b   => ...
```

**Behavior**

It returns the least common multiple of `a` and `b`.

**Usage**

```Clean
// CLEAN

lcm   3    2   // 6
lcm (-3)   2   // 6
lcm   3  (-2)  // 6
lcm (-3) (-2)  // 6
```

---

## Predicate Functions

### `isEven`

**Signature**

```Clean
// CLEAN

isEven :: Int -> Bool
isEven    a   => ...
```

**Behavior**

It returns true if `a` is an even integer.

**Usage**

```Clean
// CLEAN

isEven  2  // False
isEven  1  // True
isEven  0  // True
isEven -1  // True
isEven -2  // False
```

### `isOdd`

**Signature**

```Clean
// CLEAN

isOdd :: Int -> Bool
isOdd    a   => ...
```

**Behavior**

It returns true if `a` is an odd integer.

**Usage**

```Clean
// CLEAN

isOdd  2  // True
isOdd  1  // False
isOdd  0  // False
isOdd -1  // False
isOdd -2  // True
```

---

## Conversions To Integer Type

They explicitly convert other types to integer type.

### From Real Number Type

**Signature**

```Clean
// CLEAN

toInt :: Real -> Int
toInt    a    => ...
```

**Behavior**

It rounds `a` to its nearest integer.

**Usage**

```Clean
// CLEAN

toInt   1.5   //  2
toInt   1.4   //  1
toInt   0.0   //  0
toInt (-1.4)  // -1
toInt (-1.5)  // -2
```

### From Character Type

**Signature**

```Clean
// CLEAN

toInt :: Char -> Int
toInt    a    => ...
```

**Behavior**

It returns ASCII code of `a`.

**Usage**

```Clean
// CLEAN

toInt '1'  //  49
toInt '9'  //  59
toInt 'A'  //  65
toInt 'Z'  //  90
toInt 'a'  //  97
toInt 'z'  // 122
```

### From String Type

**Signature**

```Clean
// CLEAN

toInt :: { #Char } -> Int
toInt    a         => ...
```

**Behavior**

It attempts to parse `a` as an integer.
If it is unsuccessful, it returns zero.

**Usage**

```Clean
// CLEAN

toInt "1.0"   //  0
toInt "1"     //  1
toInt "0"     //  0
toInt "-1"    // -1
toInt "-1.0"  //  0
```

---

## Conversions From Integer Type

They explicitly convert integer type to other types.
The desired type must be unambiguous.

### To Real Number Type

**Signature**

```Clean
// CLEAN

fromInt :: Real -> Int
fromInt    a    => ...
```

**Behavior**

It sets the decimal places of `a` to 0.

**Usage**

```Clean
// CLEAN

expr :: Real
expr =  fromInt  1  // 1.0
expr =  fromInt  0  // 0.0
```

### To Character Type

**Signature**

```Clean
// CLEAN

fromInt :: Int -> Char
fromInt    a   => ...
```

**Behavior**

It returns a character whose ASCII code is `a`.

**Usage**

```Clean
// CLEAN

expr :: Char
expr =  fromInt 49   // '1'
expr =  fromInt 59   // '9'
expr =  fromInt 65   // 'A'
expr =  fromInt 90   // 'Z'
expr =  fromInt 97   // 'a'
expr =  fromInt 122  // 'z'
```

### To String Type

**Signature**

```Clean
// CLEAN

fromInt :: Int -> { #Char }
fromInt    a   => ...
```

**Behavior**

It returns a string representation of `a`.

**Usage**

```Clean
// CLEAN

expr :: { #Char }
expr =  fromInt 1  // "1"
expr =  fromInt 0  // "0"
```
